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
- The runner writes live state to `workflow-state/current.json`, checkpoints every 10 minutes, and finishes after 30 minutes.
- `workflow.html` visualizes the live debate and checkpoint history.

Run with OpenAI API:

```bash
set OPENAI_API_KEY=your_key
npm run workflow
```

Test without an API key:

```bash
npm run workflow:dry
```

Open the dashboard:

```bash
npm run dev
```

Then visit `http://127.0.0.1:5173/workflow.html`.
