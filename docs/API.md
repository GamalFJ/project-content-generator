# API reference

## Inputs

```ts
type ProjectInput = {
  sourceType: "website" | "repo" | "app" | "screenshots" | "description";
  source: string;
  targetAudience?: string;
  contentGoal: string;
  tone?: "persuasive" | "technical" | "friendly" | "enterprise";
  outputFormats?: Array<"video-script" | "tutorial" | "social-post" | "image-prompt" | "storyboard" | "launch-copy">;
  constraints?: Record<string, any>;
};
```

## Output

```ts
type GeneratorOutput = {
  projectProfile: {
    name: string;
    summary: string;
    problemSolved: string;
    targetUsers: string[];
    keyFeatures: string[];
    differentiators: string[];
    valueProps: string[];
    assumptions: string[];
  };
  contentAssets: Array<{
    type: string;
    title: string;
    audience: string;
    body: string;
  }>;
  ctas: string[];
  recommendedChannels: string[];
};
```
