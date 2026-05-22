import { cp, mkdir, rm } from 'node:fs/promises';
import path from 'node:path';

const root = process.cwd();
const outDir = path.join(root, 'dist');

const targets = ['index.html', '404.html'];

for (const target of targets) {
  await rm(path.join(root, target), { recursive: true, force: true });
}

await cp(path.join(outDir, 'index.html'), path.join(root, 'index.html'));

try {
  await cp(path.join(outDir, '404.html'), path.join(root, '404.html'));
} catch {
  await cp(path.join(outDir, 'index.html'), path.join(root, '404.html'));
}

await mkdir(path.join(root, '_astro'), { recursive: true });
await cp(path.join(outDir, '_astro'), path.join(root, '_astro'), { recursive: true });
