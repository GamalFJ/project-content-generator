# Integrations

Content Weaver can plug into common marketing and creative workflows.

## Compatible tools

- video editing tools
- AI image generation tools
- social scheduling tools
- design workflow tools
- customer education platforms

## Example

```ts
const output = await generate({
  sourceType: "website",
  source: "https://example.com",
  targetAudience: "B2B teams",
  contentGoal: "Brief + social campaign",
  tone: "persuasive",
  outputFormats: ["video-script", "social-post", "image-prompt"]
});
```

This can then be exported to your marketing stack or content pipeline.
