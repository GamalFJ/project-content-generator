import type { ContentAsset, GeneratorOutput, ProjectInput, ProjectProfile } from './types.js';

export function generateContent(profile: ProjectProfile, input: ProjectInput): GeneratorOutput {
  const audience = input.targetAudience ?? 'general audience';

  const contentAssets: ContentAsset[] = [
    {
      type: 'video-script',
      title: 'From Chaos to Clarity',
      audience,
      body: 'Hook: Teams lose hours every week to fragmented work. WorkflowOS brings planning, execution, and reporting into one workflow. Build faster, collaborate better, and understand impact in real time.'
    },
    {
      type: 'tutorial',
      title: 'How it works in 3 steps',
      audience,
      body: 'Step 1: Connect your tools. Step 2: Map your workflow. Step 3: Monitor dashboards and optimize decisions in real time.'
    },
    {
      type: 'image-prompt',
      title: 'Product hero visual',
      audience,
      body: 'Create a premium SaaS dashboard hero with analytics panels, automation flow, and team collaboration cards. Include headline: "One workflow. Better decisions."'
    }
  ];

  return {
    projectProfile: profile,
    contentAssets,
    ctas: ['Book a demo', 'Start free', 'See how it works'],
    recommendedChannels: ['LinkedIn', 'YouTube Shorts', 'Product Hunt', 'X']
  };
}
