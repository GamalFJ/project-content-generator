# Content Weaver

Generate sales, educational, and visual content from websites, apps, and repositories.

Content Weaver transforms a product into a complete content engine:
- short-form sales videos
- educational tutorials
- social media posts
- launch copy
- marketing summaries
- image prompts and storyboards

## What it does

- analyzes a project, app, or repository
- extracts product purpose, audience, and value proposition
- finds differentiation and user outcomes
- generates content for sales and education
- outputs visual prompts and storyboards
- packages content into ready-to-use formats

## Repository structure

- `README.md` — project overview and usage
- `SKILL.md` — full skill specification
- `ARCHITECTURE.md` — design and system flow
- `CONTRIBUTING.md` — contribution guide
- `docs/` — examples and API docs
- `index.html` + `styles.css` + `app.js` — landing page / website demo
- `src/` — starter TypeScript logic for the content-generation engine

## Quick start

```bash
npm install
npm run dev
```

Then open the local app in the browser.

## Example inputs

```ts
const input = {
  sourceType: "website",
  source: "https://example.com",
  targetAudience: "startup founders",
  contentGoal: "30-second sales video and onboarding tutorial",
  tone: "persuasive",
  outputFormats: ["video-script", "tutorial", "image-prompt"],
  constraints: {
    duration: "30 seconds",
    cta: "Book a demo"
  }
};
```

## Example output

```json
{
  "projectProfile": {
    "name": "Example Product",
    "summary": "A workflow platform that helps teams streamline execution and reporting.",
    "problemSolved": "It removes disconnected tools and manual handoffs.",
    "targetUsers": ["startup founders", "ops teams"],
    "keyFeatures": ["workflow builder", "analytics", "collaboration"],
    "valueProps": ["Faster execution", "More visibility", "Lower overhead"]
  },
  "contentAssets": [
    {
      "type": "video-script",
      "title": "From Chaos to Clarity",
      "body": "Teams lose hours every week to fragmented work..."
    }
  ]
}
```

## Use cases

- marketing teams creating launch campaigns
- SaaS founders generating demos and social content
- product managers validating messaging
- educators and onboarding teams building tutorials
- agencies producing client-ready content faster

## Stack

This repo includes:
- a product-to-content skill spec
- architecture docs and system design
- a landing page demo to showcase the concept
- a starter TypeScript generator framework

## License

MIT

## Support

Open an issue or contribute via pull request.
