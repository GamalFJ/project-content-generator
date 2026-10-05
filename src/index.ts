import type { ProjectInput, GeneratorOutput, ProjectProfile } from './types.js';
import { analyzeProject } from './projectAnalyzer.js';
import { generateContent } from './contentGenerator.js';

const input: ProjectInput = {
  sourceType: 'website',
  source: 'https://example.com',
  targetAudience: 'startup founders',
  contentGoal: '30-second sales video and onboarding tutorial',
  tone: 'persuasive',
  outputFormats: ['video-script', 'tutorial', 'image-prompt']
};

const profile: ProjectProfile = analyzeProject(input);
const output: GeneratorOutput = generateContent(profile, input);
console.log(JSON.stringify(output, null, 2));
