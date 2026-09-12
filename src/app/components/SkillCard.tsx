'use client';

import type { ComponentType, CSSProperties } from 'react';
import {
  Activity,
  BrainCircuit,
  Cloud,
  Code2,
  Network,
  Orbit,
  ScanSearch,
  Waves,
  Workflow,
  Database,
  ShieldCheck,
  AudioLines,
  TestTube,
  Boxes,
} from 'lucide-react';
import { TbBrandAzure, TbBrandOpenai } from 'react-icons/tb';
import {
  SiNumpy, SiPydantic, SiTailwindcss, SiReactquery, SiOpenstreetmap,
  SiElevenlabs, SiVite, SiExpress, SiGooglecloud, SiGooglecloudstorage,
  SiFirebase, SiDrizzle, SiNeon, SiLastdotfm, SiCloudflareworkers,
  SiSqlite, SiVercel, SiUpstash, SiHtml5, SiWikimediacommons,
  SiApplemusic,
  SiCss,
  SiArgo,
  SiC,
  SiCplusplus,
  SiDocker,
  SiFastapi,
  SiFfmpeg,
  SiGnubash,
  SiGoogle,
  SiJavascript,
  SiKubernetes,
  SiMapbox,
  SiNestjs,
  SiNextdotjs,
  SiNodedotjs,
  SiOpenapiinitiative,
  SiOpenjdk,
  SiPlotly,
  SiPostgresql,
  SiPython,
  SiReact,
  SiReddit,
  SiRedis,
  SiStripe,
  SiTensorflow,
  SiTerraform,
  SiTypescript,
  SiYoutube,
} from 'react-icons/si';

type SkillIcon = ComponentType<{
  className?: string;
  size?: number | string;
  style?: CSSProperties;
  'aria-hidden'?: boolean;
}>;

interface SkillDefinition {
  icon: SkillIcon;
  color: string;
}

const skillIcons: Record<string, SkillDefinition> = {
  Python: { icon: SiPython, color: '#3776AB' },
  TypeScript: { icon: SiTypescript, color: '#3178C6' },
  JavaScript: { icon: SiJavascript, color: '#B89B00' },
  Java: { icon: SiOpenjdk, color: '#E76F00' },
  C: { icon: SiC, color: '#00599C' },
  'C++': { icon: SiCplusplus, color: '#00599C' },
  SQL: { icon: SiPostgresql, color: '#4169E1' },
  Bash: { icon: SiGnubash, color: '#4EAA25' },
  'Next.js': { icon: SiNextdotjs, color: '#111111' },
  React: { icon: SiReact, color: '#087EA4' },
  'Node.js': { icon: SiNodedotjs, color: '#339933' },
  FastAPI: { icon: SiFastapi, color: '#009688' },
  NestJS: { icon: SiNestjs, color: '#E0234E' },
  Dash: { icon: SiPlotly, color: '#3F4F75' },
  TensorFlow: { icon: SiTensorflow, color: '#FF6F00' },
  Manim: { icon: Orbit, color: '#58C4DD' },
  Azure: { icon: TbBrandAzure, color: '#0078D4' },
  Docker: { icon: SiDocker, color: '#2496ED' },
  Kubernetes: { icon: SiKubernetes, color: '#326CE5' },
  Terraform: { icon: SiTerraform, color: '#844FBA' },
  Harness: { icon: Workflow, color: '#00ADE4' },
  Argo: { icon: SiArgo, color: '#EF7B4D' },
  OpenObserve: { icon: Activity, color: '#7C3AED' },
  FFmpeg: { icon: SiFfmpeg, color: '#007808' },
  'REST APIs': { icon: SiOpenapiinitiative, color: '#6BA539' },
  'LLM Tool Calling': { icon: BrainCircuit, color: '#10A37F' },
  'Agent Orchestration': { icon: Workflow, color: '#8B5CF6' },
  'Multi-System Context': { icon: Network, color: '#2563EB' },
  'Visual-Output Evaluation': { icon: ScanSearch, color: '#D946EF' },
  OpenAI: { icon: TbBrandOpenai, color: '#10A37F' },
  Mapbox: { icon: SiMapbox, color: '#111111' },
  NOAA: { icon: Waves, color: '#0057A8' },
  Stripe: { icon: SiStripe, color: '#635BFF' },
  Postgres: { icon: SiPostgresql, color: '#4169E1' },
  'Apple Music': { icon: SiApplemusic, color: '#FA243C' },
  YouTube: { icon: SiYoutube, color: '#FF0000' },
  Reddit: { icon: SiReddit, color: '#FF4500' },
  'Google OAuth': { icon: SiGoogle, color: '#4285F4' },
  Redis: { icon: SiRedis, color: '#DC382D' },
  NumPy: { icon: SiNumpy, color: '#013243' },
  Pydantic: { icon: SiPydantic, color: '#E92063' },
  'Tailwind CSS': { icon: SiTailwindcss, color: '#087EA4' },
  'TanStack Query': { icon: SiReactquery, color: '#FF4154' },
  OpenStreetMap: { icon: SiOpenstreetmap, color: '#58843B' },
  'Overpass API': { icon: SiOpenstreetmap, color: '#58843B' },
  'Mapbox GL JS': { icon: SiMapbox, color: '#111111' },
  'NOAA / NWS': { icon: Waves, color: '#0057A8' },
  ElevenLabs: { icon: SiElevenlabs, color: '#111111' },
  Vite: { icon: SiVite, color: '#646CFF' },
  Express: { icon: SiExpress, color: '#111111' },
  'Google Cloud': { icon: SiGooglecloud, color: '#4285F4' },
  'Cloud Run': { icon: SiGooglecloud, color: '#4285F4' },
  'Cloud SQL': { icon: SiGooglecloud, color: '#4285F4' },
  'Cloud Tasks': { icon: SiGooglecloud, color: '#4285F4' },
  'Secret Manager': { icon: SiGooglecloud, color: '#4285F4' },
  'Cloud Armor': { icon: SiGooglecloud, color: '#4285F4' },
  'Cloud Build': { icon: SiGooglecloud, color: '#4285F4' },
  'Cloud Storage': { icon: SiGooglecloudstorage, color: '#4285F4' },
  'Identity Platform': { icon: SiGooglecloud, color: '#4285F4' },
  'Firebase Admin': { icon: SiFirebase, color: '#DD5900' },
  'Drizzle Migrations': { icon: SiDrizzle, color: '#557C14' },
  Neon: { icon: SiNeon, color: '#008D72' },
  'Last.fm': { icon: SiLastdotfm, color: '#D51007' },
  'Cloudflare Workers': { icon: SiCloudflareworkers, color: '#F38020' },
  'Cloudflare D1': { icon: SiCloudflareworkers, color: '#F38020' },
  SQLite: { icon: SiSqlite, color: '#003B57' },
  Vercel: { icon: SiVercel, color: '#111111' },
  'Upstash Redis': { icon: SiUpstash, color: '#008D72' },
  HTML: { icon: SiHtml5, color: '#E34F26' },
  'Wikimedia Commons': { icon: SiWikimediacommons, color: '#006699' },
  PostgreSQL: { icon: SiPostgresql, color: '#4169E1' },
  'Apple / iTunes API': { icon: SiApplemusic, color: '#FA243C' },
};

// Engineering practices have no official logo; use recognizable category symbols.
for (const name of ['Database Transactions', 'Credit Ledgers', 'JSON Persistence', 'Snapshot Compaction', 'Catalog Ingestion', 'Metadata Caching', 'Gzip Compression']) {
  skillIcons[name] = { icon: Database, color: '#4169E1' };
}
for (const name of ['CSRF Protection', 'Sandbox Isolation', 'Signed URLs', 'Web Crypto API', 'PBKDF2', 'HMAC-Signed Audio', 'Cookie Sessions', 'OAuth 2.0']) {
  skillIcons[name] = { icon: ShieldCheck, color: '#148361' };
}
for (const name of ['Speech Recognition', 'Text-to-Speech', 'Web Audio API', 'Audio Segmentation', 'MP4Box.js', 'Speechify']) {
  skillIcons[name] = { icon: AudioLines, color: '#AD3D7F' };
}
for (const name of ['Transactional Outbox', 'Idempotent Jobs', 'Multiplayer State', 'HTTP Polling', 'API Quota Management', 'Contract Settlement']) {
  skillIcons[name] = { icon: Workflow, color: '#7951B0' };
}
for (const name of ['Playwright', 'Accessibility Testing', 'Node.js Tests']) {
  skillIcons[name] = { icon: TestTube, color: '#278145' };
}
for (const name of ['Cellular Automata', 'Geospatial Analysis', 'GeoJSON', 'Momentum Modeling']) {
  skillIcons[name] = { icon: Network, color: '#087EA4' };
}
skillIcons.E2B = { icon: Boxes, color: '#111111' };
skillIcons.Vinext = { icon: SiVite, color: '#646CFF' };
skillIcons.Uvicorn = { icon: SiPython, color: '#3776AB' };
skillIcons.CSS = { icon: SiCss, color: '#663399' };

export function SkillCard({ name, isDark = true }: { name: string; isDark?: boolean }) {
  const definition = skillIcons[name] ?? { icon: Code2, color: '#64748B' };
  const Icon = definition.icon;
  const suit = ['♠', '♥', '♣', '♦'][Array.from(name).reduce((sum, char) => sum + char.charCodeAt(0), 0) % 4];
  const suitColor = suit === '♥' || suit === '♦' ? 'text-red-700' : 'text-slate-900';

  return (
    <span
      className={`relative inline-flex w-[84px] aspect-[5/7] shrink-0 flex-col items-center justify-center gap-3 rounded-lg border bg-[#faf8f2] px-2 py-5 text-slate-900 ${isDark ? 'border-white/30 shadow-[0_3px_8px_#0005]' : 'border-black/20 shadow-sm'}`}
    >
      <span aria-hidden="true" className={`absolute left-1.5 top-1 font-serif text-sm leading-none ${suitColor}`}>{suit}</span>
      <Icon aria-hidden={true} size={26} style={{ color: definition.color }} />
      <span className="w-full break-words text-center font-sans text-[11px] font-medium leading-tight">{name}</span>
      <span aria-hidden="true" className={`absolute bottom-1 right-1.5 rotate-180 font-serif text-sm leading-none ${suitColor}`}>{suit}</span>
    </span>
  );
}
