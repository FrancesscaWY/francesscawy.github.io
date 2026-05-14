import { spawn } from 'node:child_process';
import { createWriteStream } from 'node:fs';
import { mkdir, readFile } from 'node:fs/promises';
import path from 'node:path';
import { defineConfig } from 'vite';

const root = process.cwd();
const stateDir = path.join(root, 'workflow-state');
const currentPath = path.join(stateDir, 'current.json');
const logPath = path.join(stateDir, 'runner.log');

let activeWorkflow = null;

function jsonResponse(res, statusCode, body) {
  res.statusCode = statusCode;
  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  res.end(JSON.stringify(body));
}

function readBody(req) {
  return new Promise((resolve, reject) => {
    let body = '';
    req.on('data', (chunk) => {
      body += chunk;
    });
    req.on('end', () => {
      if (!body) {
        resolve({});
        return;
      }
      try {
        resolve(JSON.parse(body));
      } catch (error) {
        reject(error);
      }
    });
    req.on('error', reject);
  });
}

function numberOption(value, fallback, min, max) {
  const parsed = Number(value);
  if (!Number.isFinite(parsed)) return fallback;
  return Math.min(max, Math.max(min, parsed));
}

async function currentWorkflowLooksActive() {
  try {
    const state = JSON.parse(await readFile(currentPath, 'utf8'));
    return ['starting', 'running', 'finalizing'].includes(state.status) && new Date(state.endsAt).getTime() > Date.now();
  } catch {
    return false;
  }
}

function homepageLabApi() {
  return {
    name: 'homepage-lab-api',
    configureServer(server) {
      server.middlewares.use('/api/workflow/start', async (req, res) => {
        if (req.method !== 'POST') {
          jsonResponse(res, 405, { ok: false, message: 'Method not allowed.' });
          return;
        }

        if (activeWorkflow && activeWorkflow.exitCode === null) {
          jsonResponse(res, 409, { ok: false, message: 'Workflow is already running in this dev server.' });
          return;
        }

        if (await currentWorkflowLooksActive()) {
          jsonResponse(res, 409, {
            ok: false,
            message: 'A workflow state file already looks active. Wait for it to finish or remove workflow-state/current.json.',
          });
          return;
        }

        let body;
        try {
          body = await readBody(req);
        } catch {
          jsonResponse(res, 400, { ok: false, message: 'Invalid JSON body.' });
          return;
        }

        const model = String(body.model || 'gpt-5.5').trim() || 'gpt-5.5';
        const duration = numberOption(body.duration, 30, 1, 180);
        const checkpoint = numberOption(body.checkpoint, 10, 0.25, 60);
        const interval = numberOption(body.interval, 90, 5, 600);
        const forceDryRun = body.dryRun === true;

        await mkdir(stateDir, { recursive: true });
        const args = [
          path.join(root, 'workflow', 'run-homepage-lab.mjs'),
          `--model=${model}`,
          `--duration=${duration}`,
          `--checkpoint=${checkpoint}`,
          `--interval=${interval}`,
        ];
        if (forceDryRun) args.push('--dry-run');

        const logStream = createWriteStream(logPath, { flags: 'a' });
        logStream.write(`\n[${new Date().toISOString()}] start ${process.execPath} ${args.join(' ')}\n`);

        activeWorkflow = spawn(process.execPath, args, {
          cwd: root,
          env: process.env,
          windowsHide: true,
        });

        activeWorkflow.stdout.pipe(logStream, { end: false });
        activeWorkflow.stderr.pipe(logStream, { end: false });
        activeWorkflow.on('exit', (code, signal) => {
          logStream.write(`[${new Date().toISOString()}] exit code=${code} signal=${signal || ''}\n`);
          logStream.end();
        });

        jsonResponse(res, 202, {
          ok: true,
          message: forceDryRun
            ? 'Workflow started in dry-run mode.'
            : 'Workflow started. If OPENAI_API_KEY is missing, the runner will automatically use dry-run mode.',
          pid: activeWorkflow.pid,
          stateUrl: '/workflow-state/current.json',
        });
      });
    },
  };
}

export default defineConfig({
  plugins: [homepageLabApi()],
});
