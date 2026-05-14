import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const stateDir = path.join(root, 'workflow-state');
const currentPath = path.join(stateDir, 'current.json');

const args = new Map(
  process.argv.slice(2).map((arg) => {
    const [key, value = 'true'] = arg.replace(/^--/, '').split('=');
    return [key, value];
  }),
);

const model = args.get('model') || 'gpt-5.5';
const durationMinutes = Number(args.get('duration') || 30);
const checkpointMinutes = Number(args.get('checkpoint') || 10);
const dryRun = args.get('dry-run') === 'true' || !process.env.OPENAI_API_KEY;
const intervalSeconds = Number(args.get('interval') || (dryRun ? 20 : 90));

const startedAt = new Date();
const endsAt = new Date(startedAt.getTime() + durationMinutes * 60_000);
const checkpointMs = checkpointMinutes * 60_000;

const state = {
  status: 'starting',
  mode: dryRun ? 'dry-run' : 'live',
  model,
  startedAt: startedAt.toISOString(),
  endsAt: endsAt.toISOString(),
  durationMinutes,
  checkpointMinutes,
  intervalSeconds,
  activeRound: 0,
  lastSavedAt: null,
  agents: [
    {
      id: 'builder',
      name: 'Homepage Builder',
      model,
      responsibility: 'Propose concrete homepage content, structure, and implementation improvements.',
      tone: 'first-person, human, academic-and-applied, concise',
    },
    {
      id: 'critic',
      name: 'Quality Critic',
      model,
      responsibility: 'Evaluate homepage quality, compare against excellent personal sites, and challenge weak decisions.',
      tone: 'direct, evidence-based, design-aware',
    },
  ],
  checkpoints: [],
  rounds: [],
  finalSummary: null,
  errors: [],
};

async function ensureStateDir() {
  await mkdir(stateDir, { recursive: true });
}

async function loadHomepageContext() {
  const files = ['index.html', 'assets/app.js', 'assets/styles.css'];
  const parts = [];
  for (const file of files) {
    const fullPath = path.join(root, file);
    if (!existsSync(fullPath)) continue;
    const content = await readFile(fullPath, 'utf8');
    parts.push(`--- ${file} ---\n${content.slice(0, 24_000)}`);
  }
  return parts.join('\n\n');
}

async function saveState() {
  state.lastSavedAt = new Date().toISOString();
  await writeFile(currentPath, `${JSON.stringify(state, null, 2)}\n`, 'utf8');
}

function transcriptText() {
  return state.rounds
    .flatMap((round) => [
      `Round ${round.round} Builder:\n${round.builder}`,
      `Round ${round.round} Critic:\n${round.critic}`,
      `Round ${round.round} Builder Response:\n${round.response}`,
    ])
    .join('\n\n');
}

async function callOpenAI({ role, prompt }) {
  if (dryRun) return fakeAgentResponse(role, prompt);

  const response = await fetch('https://api.openai.com/v1/responses', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model,
      input: prompt,
    }),
  });

  if (!response.ok) {
    const body = await response.text();
    throw new Error(`OpenAI API ${response.status}: ${body.slice(0, 600)}`);
  }

  const json = await response.json();
  if (typeof json.output_text === 'string') return json.output_text.trim();

  const parts = [];
  for (const item of json.output || []) {
    for (const content of item.content || []) {
      if (content.type === 'output_text') parts.push(content.text);
    }
  }
  return parts.join('\n').trim();
}

function fakeAgentResponse(role) {
  const round = state.activeRound;
  if (role === 'builder') {
    return [
      `Round ${round}: I would make the homepage calmer and more human by reducing hero scale, turning the introduction into a short first-person paragraph, and moving evidence into later sections.`,
      'The next improvement should connect research questions to specific project evidence instead of listing abstract capabilities.',
      'Suggested page rhythm: intro, current questions, selected work, evidence, notes, contact.',
    ].join('\n');
  }
  if (role === 'critic') {
    return [
      `Round ${round}: The proposal is directionally right, but it still risks sounding like a polished resume if every paragraph starts with "I care about".`,
      'Quality score: 7/10. The homepage needs more concrete nouns, fewer generic claims, and smaller typography.',
      'Demand: prove each claim through one project, one artifact, or one observable habit.',
    ].join('\n');
  }
  return [
    `Round ${round}: I accept the critique. I would rewrite vague claims into scenario-driven lines and keep only one strong sentence per section.`,
    'Actionable change: make project cards lead with problem context, then my role, then a verifiable outcome.',
  ].join('\n');
}

function builderPrompt(homepageContext) {
  return [
    'You are Homepage Builder, a GPT-5.5 agent optimizing Yan Wei / 魏艳 personal homepage.',
    'Goal: improve a bilingual personal homepage for social recognition, academic audiences, and industry audiences without using those as visible category titles.',
    'Style requirements: first person, human, not machine-written, not a resume template, concise typography, academic-and-applied minimal style.',
    'Task: propose specific content, structure, layout, and implementation improvements. Do not produce generic advice.',
    'Current homepage source:',
    homepageContext,
    'Prior debate:',
    transcriptText() || '(none yet)',
  ].join('\n\n');
}

function criticPrompt(homepageContext, builderOutput) {
  return [
    'You are Quality Critic, a GPT-5.5 agent reviewing Yan Wei / 魏艳 personal homepage.',
    'Compare against strong personal sites: academic personal pages, research portfolios, and personal digital gardens.',
    'Judge content architecture, human voice, credibility for academia, credibility for industry, visual density, typography, and navigation consistency.',
    'Be direct. Identify what still feels machine-written or fragmented. Give a score and concrete changes.',
    'Current homepage source:',
    homepageContext,
    'Builder proposal to critique:',
    builderOutput,
    'Prior debate:',
    transcriptText() || '(none yet)',
  ].join('\n\n');
}

function responsePrompt(homepageContext, builderOutput, criticOutput) {
  return [
    'You are Homepage Builder responding to the critic.',
    'Decide which critiques to accept, reject, or refine. Produce a prioritized patch plan for the homepage.',
    'The final answer should be concrete enough for an engineer to edit index.html, assets/app.js, and assets/styles.css.',
    'Current homepage source:',
    homepageContext,
    'Your proposal:',
    builderOutput,
    'Critic response:',
    criticOutput,
  ].join('\n\n');
}

async function checkpoint(reason) {
  const checkpoint = {
    id: `checkpoint-${state.checkpoints.length + 1}`,
    reason,
    savedAt: new Date().toISOString(),
    round: state.activeRound,
    file: `workflow-state/checkpoint-${state.checkpoints.length + 1}.json`,
    summary: summarizeLatest(),
  };
  state.checkpoints.push(checkpoint);
  await writeFile(path.join(root, checkpoint.file), `${JSON.stringify(state, null, 2)}\n`, 'utf8');
  await saveState();
}

function summarizeLatest() {
  const latest = state.rounds.at(-1);
  if (!latest) return 'Workflow initialized. No debate rounds completed yet.';
  return `Round ${latest.round}: builder proposed ${latest.builder.slice(0, 120)}... Critic score/comment: ${latest.critic.slice(0, 120)}...`;
}

async function runRound() {
  state.activeRound += 1;
  state.status = 'running';
  const homepageContext = await loadHomepageContext();
  await saveState();

  const builder = await callOpenAI({ role: 'builder', prompt: builderPrompt(homepageContext) });
  state.rounds.push({
    round: state.activeRound,
    startedAt: new Date().toISOString(),
    builder,
    critic: '',
    response: '',
    completedAt: null,
  });
  await saveState();

  const critic = await callOpenAI({ role: 'critic', prompt: criticPrompt(homepageContext, builder) });
  state.rounds.at(-1).critic = critic;
  await saveState();

  const response = await callOpenAI({ role: 'builder-response', prompt: responsePrompt(homepageContext, builder, critic) });
  state.rounds.at(-1).response = response;
  state.rounds.at(-1).completedAt = new Date().toISOString();
  await saveState();
}

async function finalize() {
  state.status = 'finalizing';
  const homepageContext = await loadHomepageContext();
  const prompt = [
    'Summarize the completed 30-minute homepage optimization debate.',
    'Return: top findings, agreed changes, unresolved disagreements, and a concrete next implementation plan.',
    'Homepage source:',
    homepageContext,
    'Full debate transcript:',
    transcriptText(),
  ].join('\n\n');
  state.finalSummary = await callOpenAI({ role: 'final', prompt });
  state.status = 'completed';
  await checkpoint('final');
  await saveState();
}

async function main() {
  await ensureStateDir();
  state.status = 'running';
  await saveState();

  let nextCheckpointAt = startedAt.getTime() + checkpointMs;

  while (Date.now() < endsAt.getTime()) {
    try {
      await runRound();
      if (Date.now() >= nextCheckpointAt) {
        await checkpoint('scheduled 10-minute save');
        nextCheckpointAt += checkpointMs;
      }
    } catch (error) {
      state.errors.push({ at: new Date().toISOString(), message: error.message });
      await saveState();
      if (!dryRun) throw error;
    }

    const remaining = endsAt.getTime() - Date.now();
    if (remaining <= 0) break;
    await new Promise((resolve) => setTimeout(resolve, Math.min(intervalSeconds * 1000, remaining)));
  }

  await finalize();
}

main().catch(async (error) => {
  state.status = 'failed';
  state.errors.push({ at: new Date().toISOString(), message: error.message });
  await ensureStateDir();
  await saveState();
  console.error(error);
  process.exit(1);
});
