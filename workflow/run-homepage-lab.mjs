import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const stateDir = path.join(root, 'workflow-state');
const currentPath = path.join(stateDir, 'current.json');
const briefPath = path.join(stateDir, 'brief.json');

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
  phase: 'initializing',
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
      status: 'idle',
      stage: 'Waiting to start',
      currentRound: 0,
      turnCount: 0,
      lastActiveAt: null,
      lastMessage: 'Waiting for the workflow to begin.',
    },
    {
      id: 'critic',
      name: 'Quality Critic',
      model,
      responsibility: 'Evaluate homepage quality, compare against excellent personal sites, and challenge weak decisions.',
      tone: 'direct, evidence-based, design-aware',
      status: 'idle',
      stage: 'Waiting to start',
      currentRound: 0,
      turnCount: 0,
      lastActiveAt: null,
      lastMessage: 'Waiting for the builder proposal.',
    },
  ],
  checkpoints: [],
  rounds: [],
  messages: [],
  finalSummary: null,
  errors: [],
};

function snippet(text, length = 180) {
  const cleaned = String(text || '').replace(/\s+/g, ' ').trim();
  if (cleaned.length <= length) return cleaned;
  return `${cleaned.slice(0, length - 1)}...`;
}

async function loadBrief() {
  try {
    const raw = await readFile(briefPath, 'utf8');
    const brief = JSON.parse(raw);
    return {
      active: brief.active || null,
      history: Array.isArray(brief.history) ? brief.history : [],
      lastUpdatedAt: brief.lastUpdatedAt || null,
    };
  } catch {
    return {
      active: null,
      history: [],
      lastUpdatedAt: null,
    };
  }
}

function updateAgent(id, patch) {
  const agent = state.agents.find((item) => item.id === id);
  if (!agent) return;
  Object.assign(agent, {
    ...patch,
    lastActiveAt: new Date().toISOString(),
  });
}

function addMessage({ speaker, agentId = null, kind = 'note', round = state.activeRound, phase = state.phase, content }) {
  state.messages.push({
    id: `msg-${state.messages.length + 1}`,
    at: new Date().toISOString(),
    speaker,
    agentId,
    kind,
    round,
    phase,
    content,
  });
}

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

function requirementPrompt(brief) {
  if (!brief?.active?.text) {
    return 'Latest request from dashboard: keep improving the homepage with the same style constraints and adapt to the most recent visible feedback.';
  }

  const lines = [
    'Latest request from dashboard:',
    brief.active.text,
  ];

  if (brief.active.note) {
    lines.push(`Note: ${brief.active.note}`);
  }

  if (brief.history?.length > 1) {
    lines.push('Recent request history:');
    for (const item of brief.history.slice(1, 4)) {
      lines.push(`- ${item.text}`);
    }
  }

  return lines.join('\n');
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
  const brief = state.brief || { active: null, history: [] };
  return [
    'You are Homepage Builder, a GPT-5.5 agent optimizing Yan Wei / Wei Yan personal homepage.',
    'Goal: improve a bilingual personal homepage for social recognition, academic audiences, and industry audiences without using those as visible category titles.',
    'Style requirements: first person, human, not machine-written, not a resume template, concise typography, academic-and-applied minimal style.',
    'Task: propose specific content, structure, layout, and implementation improvements. Do not produce generic advice.',
    requirementPrompt(brief),
    'Current homepage source:',
    homepageContext,
    'Prior debate:',
    transcriptText() || '(none yet)',
  ].join('\n\n');
}

function criticPrompt(homepageContext, builderOutput) {
  const brief = state.brief || { active: null, history: [] };
  return [
    'You are Quality Critic, a GPT-5.5 agent reviewing Yan Wei / Wei Yan personal homepage.',
    'Compare against strong personal sites: academic personal pages, research portfolios, and personal digital gardens.',
    'Judge content architecture, human voice, credibility for academia, credibility for industry, visual density, typography, and navigation consistency.',
    'Be direct. Identify what still feels machine-written or fragmented. Give a score and concrete changes.',
    requirementPrompt(brief),
    'Current homepage source:',
    homepageContext,
    'Builder proposal to critique:',
    builderOutput,
    'Prior debate:',
    transcriptText() || '(none yet)',
  ].join('\n\n');
}

function responsePrompt(homepageContext, builderOutput, criticOutput) {
  const brief = state.brief || { active: null, history: [] };
  return [
    'You are Homepage Builder responding to the critic.',
    'Decide which critiques to accept, reject, or refine. Produce a prioritized patch plan for the homepage.',
    'The final answer should be concrete enough for an engineer to edit index.html, assets/app.js, and assets/styles.css.',
    requirementPrompt(brief),
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
  addMessage({
    speaker: 'System',
    kind: 'checkpoint',
    round: state.activeRound,
    phase: 'checkpoint',
    content: `${checkpoint.id} saved: ${checkpoint.summary}`,
  });
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
  state.phase = 'builder-proposal';
  state.brief = await loadBrief();
  updateAgent('builder', {
    status: 'thinking',
    stage: 'Reading the current homepage and drafting a concrete proposal',
    currentRound: state.activeRound,
    lastMessage: 'Preparing a first-person, academic-and-applied homepage proposal.',
  });
  updateAgent('critic', {
    status: 'waiting',
    stage: 'Waiting for builder proposal',
    currentRound: state.activeRound,
    lastMessage: 'Waiting to review the builder output.',
  });
  addMessage({
    speaker: 'System',
    kind: 'round-start',
    content: `Round ${state.activeRound} started.`,
  });
  const homepageContext = await loadHomepageContext();
  await saveState();

  const builder = await callOpenAI({ role: 'builder', prompt: builderPrompt(homepageContext) });
  updateAgent('builder', {
    status: 'waiting',
    stage: 'Proposal complete; waiting for critique',
    currentRound: state.activeRound,
    turnCount: state.agents.find((item) => item.id === 'builder').turnCount + 1,
    lastMessage: snippet(builder),
  });
  state.rounds.push({
    round: state.activeRound,
    startedAt: new Date().toISOString(),
    builder,
    critic: '',
    response: '',
    completedAt: null,
  });
  addMessage({
    speaker: 'Homepage Builder',
    agentId: 'builder',
    kind: 'proposal',
    content: builder,
  });
  await saveState();

  state.phase = 'critic-review';
  updateAgent('critic', {
    status: 'reviewing',
    stage: 'Comparing quality, structure, voice, and visual density',
    currentRound: state.activeRound,
    lastMessage: 'Reviewing the proposal against strong personal and academic sites.',
  });
  await saveState();
  const critic = await callOpenAI({ role: 'critic', prompt: criticPrompt(homepageContext, builder) });
  state.rounds.at(-1).critic = critic;
  updateAgent('critic', {
    status: 'complete',
    stage: 'Critique complete',
    currentRound: state.activeRound,
    turnCount: state.agents.find((item) => item.id === 'critic').turnCount + 1,
    lastMessage: snippet(critic),
  });
  addMessage({
    speaker: 'Quality Critic',
    agentId: 'critic',
    kind: 'critique',
    content: critic,
  });
  await saveState();

  state.phase = 'builder-response';
  updateAgent('builder', {
    status: 'responding',
    stage: 'Accepting, rejecting, and prioritizing critique',
    currentRound: state.activeRound,
    lastMessage: 'Turning critique into an implementation-ready patch plan.',
  });
  await saveState();
  const response = await callOpenAI({ role: 'builder-response', prompt: responsePrompt(homepageContext, builder, critic) });
  state.rounds.at(-1).response = response;
  state.rounds.at(-1).completedAt = new Date().toISOString();
  updateAgent('builder', {
    status: 'complete',
    stage: 'Round response complete',
    currentRound: state.activeRound,
    turnCount: state.agents.find((item) => item.id === 'builder').turnCount + 1,
    lastMessage: snippet(response),
  });
  updateAgent('critic', {
    status: 'waiting',
    stage: 'Waiting for next round',
    currentRound: state.activeRound,
  });
  addMessage({
    speaker: 'Homepage Builder',
    agentId: 'builder',
    kind: 'response',
    content: response,
  });
  await saveState();
}

async function finalize() {
  state.status = 'finalizing';
  state.phase = 'final-summary';
  state.brief = await loadBrief();
  updateAgent('builder', {
    status: 'finalizing',
    stage: 'Consolidating agreed changes',
    lastMessage: 'Summarizing the debate into a concrete next implementation plan.',
  });
  updateAgent('critic', {
    status: 'finalizing',
    stage: 'Checking unresolved disagreements',
    lastMessage: 'Reviewing the debate for remaining risks.',
  });
  addMessage({
    speaker: 'System',
    kind: 'finalizing',
    phase: 'final-summary',
    content: 'The debate window has ended. Preparing final summary.',
  });
  await saveState();
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
  state.phase = 'completed';
  updateAgent('builder', {
    status: 'done',
    stage: 'Workflow complete',
    lastMessage: 'Final summary is ready.',
  });
  updateAgent('critic', {
    status: 'done',
    stage: 'Workflow complete',
    lastMessage: 'Final summary is ready.',
  });
  addMessage({
    speaker: 'System',
    kind: 'completed',
    phase: 'completed',
    content: 'Workflow completed and final summary saved.',
  });
  await checkpoint('final');
  await saveState();
}

async function main() {
  await ensureStateDir();
  state.status = 'running';
  state.phase = 'running';
  state.brief = await loadBrief();
  addMessage({
    speaker: 'System',
    kind: 'started',
    round: 0,
    phase: 'running',
    content: `Workflow started in ${state.mode} mode with ${model}.`,
  });
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
      state.phase = 'error';
      updateAgent('builder', {
        status: 'error',
        stage: 'Error encountered',
        lastMessage: error.message,
      });
      updateAgent('critic', {
        status: 'error',
        stage: 'Error encountered',
        lastMessage: error.message,
      });
      addMessage({
        speaker: 'System',
        kind: 'error',
        phase: 'error',
        content: error.message,
      });
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
  state.phase = 'failed';
  updateAgent('builder', {
    status: 'failed',
    stage: 'Workflow failed',
    lastMessage: error.message,
  });
  updateAgent('critic', {
    status: 'failed',
    stage: 'Workflow failed',
    lastMessage: error.message,
  });
  addMessage({
    speaker: 'System',
    kind: 'failed',
    phase: 'failed',
    content: error.message,
  });
  state.errors.push({ at: new Date().toISOString(), message: error.message });
  await ensureStateDir();
  await saveState();
  console.error(error);
  process.exit(1);
});
