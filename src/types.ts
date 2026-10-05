export type SourceType = 'website' | 'repo' | 'app' | 'screenshots' | 'description';

export type ContentFormat =
  | 'video-script'
  | 'tutorial'
  | 'social-post'
  | 'image-prompt'
  | 'storyboard'
  | 'launch-copy';

export type ProjectInput = {
  sourceType: SourceType;
  source: string;
  targetAudience?: string;
  contentGoal: string;
  tone?: 'persuasive' | 'technical' | 'friendly' | 'enterprise';
  outputFormats?: ContentFormat[];
  constraints?: Record<string, unknown>;
};

export type ProjectProfile = {
  name: string;
  summary: string;
  problemSolved: string;
  targetUsers: string[];
  keyFeatures: string[];
  differentiators: string[];
  valueProps: string[];
  assumptions: string[];
};

export type ContentAsset = {
  type: ContentFormat;
  title: string;
  audience: string;
  body: string;
};

export type GeneratorOutput = {
  projectProfile: ProjectProfile;
  contentAssets: ContentAsset[];
  ctas: string[];
  recommendedChannels: string[];
};
