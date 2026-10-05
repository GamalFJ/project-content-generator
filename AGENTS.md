# AGENTS.md

## Role

You are working in a repository for Content Weaver, a product-to-content generation project.

## Mission

Help improve this project so it becomes a useful AI-powered tool for:
- product marketing
- educational content generation
- social content creation
- product storytelling
- launch campaign generation

## Constraints

- do not invent product features or claims that are not supported by repo context
- prioritize clear, grounded content over vague marketing language
- keep the project structured for AI assistants and developers
- prefer reusable design patterns over one-off hacks
- preserve the concept of product-to-content generation as the core purpose

## Preferred implementation direction

1. Keep the repo approachable for humans and AI agents.
2. Add real LLM integration only after the repo architecture is clear.
3. Favor clean TypeScript, explicit data structures, and modular services.
4. Add output validation and prompt quality checks.
5. Keep the product narrative aligned with the repo’s identity: turning products into content.

## Important files

- `README.md`
- `SKILL.md`
- `ARCHITECTURE.md`
- `src/index.ts`
- `src/projectAnalyzer.ts`
- `src/contentGenerator.ts`
- `src/types.ts`
- `index.html`
- `styles.css`
- `app.js`

## Code expectations

- keep modules small and readable
- prefer TypeScript types for API contracts
- maintain a clean separation between analysis, generation, and formatting
- use clear naming for user-facing output content
- keep examples practical and production-minded

## Typical tasks

- add new output formats
- improve the content generation logic
- add validation and schema checks
- improve the landing page
- add prompt templates or AI orchestration
- connect a real scraper or API service
- add tests for project analysis and content generation

## Do not do

- do not turn the repo into an unrelated app
- do not remove the project-to-content purpose
- do not add speculative features without a clear use case
- do not leave dead code or undocumented placeholders

## Local verification

```bash
npm install
npm run dev
```

## Summary

This repo should remain a practical, extensible foundation for a product-content engine and a demo-ready landing page.
