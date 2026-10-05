# Content Weaver Skill Specification

## Overview

Name: Content Weaver
Version: 1.0.0
Type: Product-to-Content Generator
Category: Marketing and Education

## Goal

Turn a project, website, app, or repo into a complete content system. Generate sales content, educational materials, marketing copy, visual prompts, and storyboards grounded in the actual product.

## Inputs

- `project_source`: URL, repo, app preview, screenshots, or description
- `target_audience`: founders, developers, marketers, customers, ops teams
- `content_goal`: sales video, launch campaign, tutorial, social posts, testimonials, etc.
- `tone`: persuasive, technical, beginner-friendly, enterprise, friendly
- `output_formats`: video-script, tutorial, social-post, image-prompt, storyboard, launch-copy
- `constraints`: duration, platform, CTA, style, audience, etc.

## Outputs

- `projectProfile`
- `contentAssets`
- `ctas`
- `recommendedChannels`

## Rules

- use source evidence rather than invented features
- prefer outcomes over technical details
- tailor output to audience and goal
- include assumptions if data is missing
- include CTA when appropriate
- output should be ready for human editing or downstream tools

## Use cases

- product marketing
- app walkthroughs
- onboarding content
- launch content
- video script generation
- image generation briefs
- sales enablement

## Validation

A valid result:
- matches product evidence
- is clear for the chosen audience
- offers 3+ useful assets
- includes a CTA
- avoids unsupported claims
