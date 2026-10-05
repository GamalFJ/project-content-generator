# CLAUDE.md

## Project overview

This repository is a starter project for a product-to-content generator called Content Weaver.

Purpose:
- analyze a project, website, app, or repo
- extract product value, features, and target audience
- generate sales scripts, educational content, and visual prompts
- output marketing material ready for editing or downstream tools

Primary repo goal:
- turn product truth into audience-ready storytelling

## Core project files

- `README.md` — project overview and getting started flow
- `SKILL.md` — product skill definition and target behavior
- `ARCHITECTURE.md` — architecture and pipeline summary
- `src/index.ts` — entry point for the demo logic
- `src/projectAnalyzer.ts` — project analysis logic
- `src/contentGenerator.ts` — content generation logic
- `src/types.ts` — data contracts
- `index.html` / `styles.css` / `app.js` — product landing page demo

## Development workflow

- Prefer small, focused changes.
- Keep generated content grounded in repo facts and product evidence.
- If a fact is missing, explicitly flag uncertainty rather than inventing details.
- Favor user outcomes and value statements over raw technical details.
- Preserve the repo’s product-storytelling focus.

## Coding conventions

- Use TypeScript for new logic when possible.
- Keep functions small and named for clarity.
- Favor readable, explicit data structures.
- Avoid adding speculative features without documentation.
- Add docs or examples when changing behavior.

## Commits and PRs

- Keep changes scoped to a single purpose.
- Explain the user value in commit messages and PR summaries.
- Update docs when changing behavior, interfaces, or output format.

## Before making major changes

- review `SKILL.md` and `ARCHITECTURE.md`
- verify the change maintains the product-to-content concept
- ensure generated output stays practical for marketing or education use cases

## Local dev

```bash
npm install
npm run dev
```

## Current repo status

This repo is a concept/demo starter, not yet a full production AI agent system. It is intentionally structured to be extended with real API integrations, scraping, and output validation.
