import type { ProjectInput, ProjectProfile } from './types.js';

export function analyzeProject(input: ProjectInput): ProjectProfile {
  return {
    name: 'WorkflowOS',
    summary: 'A workflow platform that helps teams organize execution, collaboration, and reporting in one place.',
    problemSolved: 'It reduces manual coordination, scattered tools, and unclear visibility across teams.',
    targetUsers: ['startup founders', 'ops teams', 'product managers'],
    keyFeatures: ['unified dashboard', 'workflow automation', 'team collaboration', 'analytics'],
    differentiators: ['single source of truth', 'faster onboarding', 'clearer operational visibility'],
    valueProps: ['less manual work', 'better visibility', 'faster decisions'],
    assumptions: ['This starter demo uses sample project data. Replace it with real source analysis in production.']
  };
}
