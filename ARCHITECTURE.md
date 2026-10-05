# Architecture

## High-level flow

```text
Input -> Analyzer -> Story Builder -> Content Generator -> Output Formatter
```

## Components

### 1. Input adapter
Normalizes source data from website, repo, screenshot set, or description.

### 2. Project analyzer
Extracts:
- product summary
- problem solved
- target users
- key features
- differentiators
- value propositions

### 3. Story builder
Turns product facts into narratives for:
- sales videos
- product tours
- educational explainers
- launch campaigns

### 4. Content generator
Creates:
- product scripts
- onboarding tutorials
- social posts
- image prompts
- storyboards
- launch copy

### 5. Output formatter
Packages into JSON, Markdown, or export-ready formats.

## Data flow

```text
Input project
  -> normalize source
  -> extract product profile
  -> determine audience + messaging
  -> generate output assets
  -> package and validate
```

## Production extensions

- repo crawling
- website scraping
- screenshot analysis
- LLM provider adapters
- export integrations for video, image, and social tools
- content performance feedback loop
