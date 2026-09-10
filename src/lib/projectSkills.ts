export interface SkillGroup {
  label: string;
  skills: string[];
}

// Audited against the implementation, not just manifest entries. See docs/project-stack-audit.md.
export const projectSkills: Record<number, SkillGroup[]> = {
  1: [
    { label: 'Interface', skills: ['TypeScript', 'React', 'Next.js', 'Tailwind CSS', 'TanStack Query', 'Mapbox GL JS', 'GeoJSON'] },
    { label: 'Simulation & backend', skills: ['Python', 'FastAPI', 'Uvicorn', 'NumPy', 'Pydantic', 'Cellular Automata', 'Geospatial Analysis', 'REST APIs'] },
    { label: 'Integrations', skills: ['OpenAI', 'ElevenLabs', 'OpenStreetMap', 'Overpass API', 'NOAA / NWS', 'Speech Recognition', 'Text-to-Speech'] },
  ],
  2: [
    { label: 'Application', skills: ['TypeScript', 'React', 'Vite', 'Node.js', 'Express', 'Python', 'PostgreSQL', 'Firebase Admin', 'Identity Platform', 'Stripe'] },
    { label: 'Generation & media', skills: ['Manim', 'FFmpeg', 'OpenAI', 'E2B', 'Speechify', 'ElevenLabs', 'Wikimedia Commons', 'Text-to-Speech', 'Visual-Output Evaluation'] },
    { label: 'Cloud & delivery', skills: ['Google Cloud', 'Cloud Run', 'Cloud SQL', 'Cloud Tasks', 'Cloud Storage', 'Secret Manager', 'Cloud Armor', 'Docker', 'Terraform', 'Cloud Build'] },
    { label: 'Engineering', skills: ['Transactional Outbox', 'Idempotent Jobs', 'Credit Ledgers', 'Sandbox Isolation', 'Signed URLs', 'CSRF Protection', 'Playwright', 'Accessibility Testing', 'Node.js Tests'] },
  ],
  3: [
    { label: 'Application & data', skills: ['TypeScript', 'React', 'Next.js', 'Node.js', 'Tailwind CSS', 'Neon', 'PostgreSQL', 'SQL', 'Drizzle Migrations', 'Vercel'] },
    { label: 'Audio & discovery', skills: ['Apple / iTunes API', 'Last.fm', 'YouTube', 'Web Audio API', 'MP4Box.js', 'Audio Segmentation', 'Catalog Ingestion', 'Metadata Caching'] },
    { label: 'Game & security', skills: ['Multiplayer State', 'HTTP Polling', 'Web Crypto API', 'PBKDF2', 'HMAC-Signed Audio', 'Database Transactions'] },
    { label: 'Alternate runtime', skills: ['Vite', 'Vinext', 'Cloudflare Workers', 'Cloudflare D1', 'SQLite'] },
  ],
  4: [
    { label: 'Application', skills: ['JavaScript', 'React', 'HTML', 'CSS', 'Node.js', 'Express', 'REST APIs', 'Vercel'] },
    { label: 'Identity & sources', skills: ['Google OAuth', 'Cookie Sessions', 'YouTube', 'Reddit', 'OAuth 2.0', 'API Quota Management'] },
    { label: 'Storage & modeling', skills: ['Upstash Redis', 'Gzip Compression', 'JSON Persistence', 'Snapshot Compaction', 'Momentum Modeling', 'Contract Settlement', 'HTTP Polling', 'Node.js Tests'] },
  ],
};

export const aboutSkillGroups: SkillGroup[] = [
  { label: 'Languages', skills: ['Python', 'TypeScript', 'JavaScript', 'Java', 'C++', 'SQL', 'Bash', 'HTML', 'CSS'] },
  { label: 'Application & data', skills: ['React', 'Next.js', 'Vite', 'Node.js', 'Express', 'FastAPI', 'NestJS', 'Dash', 'Tailwind CSS', 'TanStack Query', 'PostgreSQL', 'Neon', 'Drizzle Migrations', 'Upstash Redis', 'Pydantic', 'NumPy'] },
  { label: 'Cloud & infrastructure', skills: ['Azure', 'Google Cloud', 'Cloud Run', 'Cloud SQL', 'Cloud Tasks', 'Cloud Storage', 'Docker', 'Kubernetes', 'Terraform', 'Harness', 'Argo', 'OpenObserve', 'Vercel'] },
  { label: 'AI, media & integrations', skills: ['OpenAI', 'TensorFlow', 'Manim', 'FFmpeg', 'E2B', 'Speechify', 'ElevenLabs', 'Web Audio API', 'Mapbox GL JS', 'Stripe', 'Firebase Admin', 'Google OAuth'] },
  { label: 'Engineering', skills: ['REST APIs', 'LLM Tool Calling', 'Agent Orchestration', 'Multi-System Context', 'Visual-Output Evaluation', 'Transactional Outbox', 'Idempotent Jobs', 'Sandbox Isolation', 'Database Transactions', 'Playwright', 'Accessibility Testing'] },
];
