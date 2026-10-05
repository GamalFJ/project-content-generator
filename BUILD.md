# BUILD.md

## Complete implementation plan for Content Weaver

This document provides the exact steps to turn this project into a full, production-ready AI content generation skill.

## Phase 1: Core backend and API integration (1-2 hours)

### Step 1.1: Add LLM provider abstraction

Create `src/llm/provider.ts`:
- Define LLMProvider interface
- Support OpenAI (GPT-4o, GPT-4o-mini)
- Support Anthropic (Claude 3.5 Sonnet)
- Add streaming support for long outputs
- Handle rate limiting and retries

### Step 1.2: Create prompt templates library

Create `src/prompts/` directory with:
- `sales-script.ts` - generates short video scripts (15s, 30s, 90s variants)
- `tutorial.ts` - generates step-by-step guides
- `social-post.ts` - generates platform-specific posts (LinkedIn, Twitter, TikTok)
- `image-prompt.ts` - generates visual briefs for Midjourney/DALL-E
- `storyboard.ts` - generates scene-by-scene video plans
- `launch-copy.ts` - generates product launch announcements

Each template should:
- accept context (product profile, audience, constraints)
- return a structured prompt
- support tone/style variants
- include output formatting hints

### Step 1.3: Implement content generation orchestration

Create `src/services/orchestrator.ts`:
- takes ProjectInput and calls appropriate generators
- handles parallel LLM calls for multiple formats
- validates output against schema
- handles errors gracefully
- caches results for repeated requests

## Phase 2: Project analysis engine (1-2 hours)

### Step 2.1: Website scraper

Create `src/services/scrapers/websiteScraper.ts`:
- use Cheerio to parse HTML
- extract: title, meta description, headlines, body text, features, pricing
- identify value propositions from copy
- detect target audience clues
- extract images and UI patterns

### Step 2.2: Repository analyzer

Create `src/services/scrapers/repoAnalyzer.ts`:
- use GitHub API to fetch repo metadata
- read README.md
- parse package.json / requirements.txt
- extract key files and structure
- infer project purpose from org/repo name and description

### Step 2.3: Product profile synthesizer

Create `src/services/profileSynthesizer.ts`:
- takes raw scraped data
- uses LLM to extract:
  - product name and summary
  - problem solved
  - target users
  - key features
  - differentiators
  - value propositions
- returns ProjectProfile with confidence scores
- flags uncertain data

## Phase 3: Validation and quality (1 hour)

### Step 3.1: Output validator

Create `src/services/validator.ts`:
- validates outputs against JSON schemas
- checks content length and format
- verifies fact-grounding (no wild claims)
- ensures CTAs are present
- flags missing evidence

### Step 3.2: Fact checker

Create `src/services/factChecker.ts`:
- cross-references claims against original product data
- flags unsupported statements
- suggests corrections
- maintains confidence scoring

## Phase 4: App backend (1-2 hours)

### Step 4.1: Express server setup

Create `src/server.ts`:
- set up Express app
- implement `/api/generate` endpoint
- request validation middleware
- error handling middleware
- CORS and rate limiting
- request logging

### Step 4.2: API endpoints

Implement:
```
POST /api/generate
- Input: ProjectInput
- Output: GeneratorOutput
- Validates, analyzes, generates, returns

GET /api/status
- Health check

POST /api/analyze
- Input: project source only
- Output: ProjectProfile (skip generation)
```

### Step 4.3: Request/response types

Update `src/types.ts` with:
- APIRequest type
- APIResponse wrapper
- ErrorResponse format
- StreamResponse for long-running tasks

## Phase 5: Frontend app (1-2 hours)

### Step 5.1: Replace static site with interactive app

Update `index.html`:
- replace demo panels with form inputs
- add real-time status updates
- show generated outputs in tabs
- add export buttons
- add loading states and animations

### Step 5.2: Add form logic

Update `app.js`:
- form validation
- file/URL input handling
- real API calls to `/api/generate`
- display results dynamically
- handle errors gracefully
- show generation progress

### Step 5.3: Add output export

Implement export options:
- JSON download
- Markdown download
- Copy to clipboard
- Export to Notion / Google Docs templates
- Send to email

## Phase 6: Deployment and tooling (1 hour)

### Step 6.1: Add production config

Create:
- `Dockerfile` for containerization
- `.dockerignore`
- `docker-compose.yml` for local dev
- `.env.production` template
- `vercel.json` for Vercel deployment
- GitHub Actions workflow for CI/CD

### Step 6.2: Environment setup

Update `.env.example`:
```
OPENAI_API_KEY=sk-...
ANTHROPIC_API_KEY=sk-ant-...
LLM_PROVIDER=openai
NODE_ENV=development
PORT=3000
RATE_LIMIT_REQUESTS=100
RATE_LIMIT_WINDOW=3600
```

### Step 6.3: Package.json scripts

Add:
```json
"scripts": {
  "dev": "vite",
  "dev:server": "tsx watch src/server.ts",
  "dev:full": "concurrently \"npm run dev\" \"npm run dev:server\"",
  "build": "vite build && tsc src/server.ts --outDir dist",
  "start": "node dist/server.js",
  "test": "vitest",
  "lint": "eslint src --ext .ts",
  "format": "prettier --write src"
}
```

## Phase 7: Testing and documentation (1 hour)

### Step 7.1: Add unit tests

Create `tests/`:
- `analyzer.test.ts` - project analysis logic
- `generator.test.ts` - content generation
- `validator.test.ts` - output validation
- `api.test.ts` - API endpoints

### Step 7.2: Add integration tests

Create `tests/integration/`:
- end-to-end workflow test
- LLM integration test (mock)
- full API flow test

### Step 7.3: Update documentation

Add to `docs/`:
- `DEPLOYMENT.md` - how to deploy
- `API_FULL.md` - complete API reference with curl examples
- `EXAMPLES.md` - real usage examples
- `TROUBLESHOOTING.md` - common issues and fixes
- `CONTRIBUTING.md` - how to add new features

## Phase 8: Polish and extras (30 mins)

### Step 8.1: Add analytics

Track:
- API calls and latency
- most-used output formats
- most common audiences
- error rates

### Step 8.2: Add caching

Implement:
- Redis cache for project profiles (avoid re-analyzing)
- LLM response caching for identical requests
- cache invalidation strategy

### Step 8.3: Add monitoring

Set up:
- error tracking (Sentry)
- performance monitoring
- uptime monitoring

## Total estimated time: 8-10 hours of focused development

## Success criteria

When complete, the project should:
- ✅ accept a website URL, repo URL, or app description
- ✅ analyze and extract product information automatically
- ✅ generate 3+ content formats per request
- ✅ output production-ready scripts and prompts
- ✅ validate all output against schemas
- ✅ expose a clean REST API
- ✅ provide a polished web UI
- ✅ be deployable to cloud (Vercel, Heroku, AWS)
- ✅ include comprehensive documentation
- ✅ have unit and integration tests
- ✅ support both OpenAI and Anthropic APIs

## Verification checklist

After implementation:
- [ ] `npm install && npm run dev` starts both frontend and backend
- [ ] frontend loads on http://localhost:3000
- [ ] backend API available on http://localhost:3001/api
- [ ] can input a website URL and get content output
- [ ] can export results in multiple formats
- [ ] all tests pass: `npm test`
- [ ] API documentation is complete and accurate
- [ ] can deploy to production without config changes
- [ ] error handling covers edge cases
- [ ] loading states and progress indicators work smoothly
