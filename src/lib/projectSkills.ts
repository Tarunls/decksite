export interface SkillGroup {
  label: string;
  skills: string[];
}

// Audited against the implementation, not just manifest entries. See docs/project-stack-audit.md.
export const projectSkills: Record<number, SkillGroup[]> = {
  1: [
    { label: 'Frontend', skills: ['TypeScript', 'React', 'Next.js', 'Tailwind CSS', 'TanStack Query', 'Mapbox GL JS'] },
    { label: 'Backend', skills: ['Python', 'FastAPI', 'Uvicorn', 'NumPy', 'Pydantic'] },
    { label: 'APIs', skills: ['OpenAI', 'ElevenLabs', 'OpenStreetMap', 'Overpass API', 'NOAA / NWS'] },
  ],
  2: [
    { label: 'Application', skills: ['TypeScript', 'React', 'Vite', 'Node.js', 'Express', 'Python', 'PostgreSQL', 'Firebase Admin', 'Stripe'] },
    { label: 'AI & project tooling', skills: ['OpenAI', 'MCP'] },
    { label: 'Media & APIs', skills: ['Manim', 'FFmpeg', 'E2B', 'Speechify', 'ElevenLabs', 'Wikimedia Commons'] },
    { label: 'Infrastructure & testing', skills: ['Google Cloud', 'Docker', 'Terraform', 'Playwright'] },
  ],
  3: [
    { label: 'Application & data', skills: ['TypeScript', 'React', 'Next.js', 'Node.js', 'Tailwind CSS', 'Neon', 'PostgreSQL', 'SQL', 'Drizzle Migrations', 'Vercel'] },
    { label: 'Audio & APIs', skills: ['Apple / iTunes API', 'Last.fm', 'YouTube', 'Web Audio API', 'MP4Box.js'] },
    { label: 'Alternate runtime', skills: ['Vite', 'Vinext', 'Cloudflare Workers', 'Cloudflare D1', 'SQLite'] },
  ],
  4: [
    { label: 'Application', skills: ['JavaScript', 'React', 'HTML', 'CSS', 'Node.js', 'Express'] },
    { label: 'APIs & hosting', skills: ['Google OAuth', 'YouTube', 'Reddit', 'Upstash Redis', 'Vercel'] },
  ],
};

export const aboutSkillGroups: SkillGroup[] = [
  { label: 'Languages', skills: ['Python', 'TypeScript', 'JavaScript', 'C', 'C++', 'Java', 'SQL', 'Bash', 'HTML', 'CSS'] },
  { label: 'Application & data', skills: ['React', 'Next.js', 'Vite', 'Node.js', 'Express', 'FastAPI', 'NestJS', 'Dash', 'Tailwind CSS', 'TanStack Query', 'PostgreSQL', 'Neon', 'Drizzle Migrations', 'Upstash Redis', 'Pydantic', 'NumPy'] },
  { label: 'Cloud & infrastructure', skills: ['Azure', 'Google Cloud', 'Docker', 'Kubernetes', 'Terraform', 'Harness', 'Argo', 'OpenObserve', 'Vercel'] },
  { label: 'AI & LLMs', skills: ['OpenAI', 'RAG', 'LLM Tool Calling', 'MCP'] },
  { label: 'AI-assisted development & tools', skills: ['Claude', 'Codex', 'GitHub Copilot', 'Blender MCP'] },
  { label: 'Media & integrations', skills: ['Manim', 'FFmpeg', 'E2B', 'Speechify', 'ElevenLabs', 'Web Audio API', 'Mapbox GL JS', 'Stripe', 'Firebase Admin', 'Google OAuth'] },
  { label: 'Testing', skills: ['Playwright'] },
];
