# Yan Wei / 魏艳 Personal Homepage

This repository hosts the bilingual personal homepage for [FrancesscaWY](https://github.com/FrancesscaWY) on GitHub Pages.

## Local Preview

```bash
npm install
npm run dev
```

The site is static-first: `index.html`, `assets/app.js`, and `assets/styles.css` are served directly by GitHub Pages.

## Homepage Lab Workflow

This repo includes a local workflow for homepage optimization:

- `Homepage Builder`: proposes content, layout, and implementation improvements.
- `Quality Critic`: evaluates the homepage against strong personal/research sites and challenges weak decisions.
- The runner writes live state, agent status, debate messages, checkpoints, and final summary to `workflow-state/current.json`.
- `workflow.html` visualizes the two agents, their current stage, discussion stream, round details, and checkpoint history.
- In local dev mode, the dashboard can start the workflow directly through the `开始工作` button.

Run with OpenAI API:

```bash
set OPENAI_API_KEY=your_key
npm run dev
```

Then visit `http://127.0.0.1:5173/workflow.html` and click `开始工作`.

Test without an API key:

```bash
npm run dev
```

Then visit `http://127.0.0.1:5173/workflow.html` and click `快速测试`.

You can still run the workflow from the terminal:

```bash
npm run workflow
npm run workflow:dry
```
