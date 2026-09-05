'use client';

import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { projects, type Project } from '../../lib/constants';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface Position {
  x: number;
  y: number;
  rotate: number;
}

interface ProjectContentProps {
  onClose: () => void;
  isFlipped?: boolean;
  isReducedMotion?: boolean;
}

function seededNoise(seed: number, index: number, salt: number) {
  const value = Math.sin(seed * 91.7 + index * 37.1 + salt * 17.3) * 10000;
  return value - Math.floor(value);
}

function buildPositions(count: number, width: number, isMobile: boolean, seed: number): Position[] {
  const columns = isMobile ? 2 : 4;
  const cardWidth = isMobile ? Math.min(158, (width - 46) / 2) : Math.min(236, (width - 190) / 4);
  const horizontalStep = isMobile ? cardWidth + 14 : Math.min(270, cardWidth + 34);
  const verticalStep = isMobile ? cardWidth * 1.55 : cardWidth * 1.2;
  const rows = Math.ceil(count / columns);

  return Array.from({ length: count }, (_, index) => {
    const row = Math.floor(index / columns);
    const column = index % columns;
    const itemsInRow = Math.min(columns, count - row * columns);
    const rowCenter = (itemsInRow - 1) / 2;
    const xJitter = (seededNoise(seed, index, 1) - 0.5) * (isMobile ? 10 : 28);
    const yJitter = (seededNoise(seed, index, 2) - 0.5) * (isMobile ? 10 : 22);
    const rotate = (seededNoise(seed, index, 3) - 0.5) * (isMobile ? 5 : 9);

    return {
      x: (column - rowCenter) * horizontalStep + xJitter,
      y: (row - (rows - 1) / 2) * verticalStep + yJitter,
      rotate,
    };
  });
}

function ProjectCard({ project, index, position, originY, isFlipped, isReducedMotion, onSelect }: {
  project: Project;
  index: number;
  position: Position;
  originY: number;
  isFlipped: boolean;
  isReducedMotion: boolean;
  onSelect: () => void;
}) {
  const cardBg = isFlipped ? 'bg-[#f5f2eb]' : 'bg-[#121212]';
  const text = isFlipped ? 'text-slate-950' : 'text-white';
  const muted = isFlipped ? 'text-black/50' : 'text-white/50';
  const border = isFlipped ? 'border-black/15' : 'border-white/15';
  const suitColor = ['♥', '♦'].includes(project.suit) ? 'text-red-600' : text;

  return (
    <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
    <motion.button
      type="button"
      aria-label={`Open ${project.title} project details`}
      className="pointer-events-auto relative w-[min(42vw,158px)] sm:w-[210px] lg:w-[236px] aspect-[5/7] cursor-pointer rounded-2xl text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-white/80"
      initial={isReducedMotion ? { opacity: 0 } : { x: 0, y: originY, rotate: 18, scale: 0.76, opacity: 0 }}
      animate={{ x: position.x, y: position.y, rotate: position.rotate, scale: 1, opacity: 1 }}
      exit={{ x: 0, y: originY, rotate: -12, scale: 0.78, opacity: 0 }}
      transition={isReducedMotion
        ? { duration: 0.16, delay: index * 0.04 }
        : { type: 'spring', damping: 20, stiffness: 105, mass: 0.82, delay: index * 0.18 }}
      whileHover={isReducedMotion ? undefined : { y: position.y - 18, rotate: 0, scale: 1.04, zIndex: 40 }}
      whileTap={{ scale: 0.98 }}
      style={{ zIndex: index + 2 }}
      onClick={onSelect}
    >
      <article className={`relative h-full overflow-hidden rounded-2xl border shadow-2xl ${cardBg} ${border}`}>
        <div className="relative h-1/2 overflow-hidden border-b border-current/10 bg-black">
          <ImageWithFallback
            src={project.image}
            alt={`${project.title} project screenshot`}
            className="h-full w-full object-cover"
            sizes="(max-width: 640px) 158px, (max-width: 1024px) 210px, 236px"
            priority={index < 3}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-black/10" />
          <span className={`absolute right-3 top-2 font-serif text-xl drop-shadow-md ${suitColor}`}>{project.suit}</span>
        </div>

        <div className="flex h-1/2 flex-col justify-between p-4 sm:p-5">
          <div>
            <p className={`mb-2 font-mono text-[8px] uppercase tracking-[0.18em] sm:text-[9px] ${muted}`}>{project.category}</p>
            <h2 className={`font-serif text-lg font-bold leading-[1.05] sm:text-2xl ${text}`}>{project.title}</h2>
          </div>
          <div className={`flex items-center justify-between font-mono text-[8px] uppercase tracking-[0.16em] sm:text-[9px] ${muted}`}>
            <span>{project.period}</span>
            <span>Inspect ↗</span>
          </div>
        </div>
      </article>
    </motion.button>
    </div>
  );
}

function ProjectDetails({ project, isFlipped, onClose }: { project: Project; isFlipped: boolean; onClose: () => void }) {
  const surface = isFlipped ? 'bg-[#f5f2eb] text-slate-950' : 'bg-[#111] text-white';
  const muted = isFlipped ? 'text-black/60' : 'text-white/60';
  const border = isFlipped ? 'border-black/15' : 'border-white/15';

  return (
    <div className="fixed inset-0 z-[80] flex items-center justify-center p-4 sm:p-8" onClick={onClose}>
      <motion.div className="absolute inset-0 bg-black/85" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} />
      <motion.article
        className={`relative z-10 grid max-h-[88dvh] w-[min(94vw,920px)] overflow-y-auto rounded-2xl border shadow-2xl md:grid-cols-[0.92fr_1.08fr] ${surface} ${border}`}
        initial={{ opacity: 0, y: 28, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 18, scale: 0.98 }}
        transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
        onClick={(event) => event.stopPropagation()}
      >
        <div className="relative min-h-[240px] overflow-hidden bg-black md:min-h-full">
          <ImageWithFallback src={project.image} alt={`${project.title} project screenshot`} className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-black/10" />
        </div>

        <div className="flex flex-col p-6 sm:p-9">
          <button type="button" onClick={onClose} aria-label="Close project details" className={`ml-auto mb-7 flex h-9 w-9 items-center justify-center rounded-full border font-mono text-xs transition-transform hover:scale-110 ${border}`}>
            ✕
          </button>
          <p className={`font-mono text-[10px] uppercase tracking-[0.22em] ${muted}`}>{project.category}</p>
          <h2 className="mt-3 font-serif text-4xl font-bold leading-none sm:text-5xl">{project.title}</h2>
          <p className={`mt-5 text-sm leading-relaxed sm:text-base ${muted}`}>{project.summary}</p>

          <div className="mt-6 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span key={tag} className={`rounded-full border px-3 py-1 font-mono text-[9px] uppercase tracking-wider ${border} ${muted}`}>{tag}</span>
            ))}
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href={project.link} target="_blank" rel="noopener noreferrer" className={`flex-1 rounded-lg border px-5 py-3 text-center font-mono text-[10px] uppercase tracking-[0.2em] transition-colors ${border} ${isFlipped ? 'hover:bg-black hover:text-white' : 'hover:bg-white hover:text-black'}`}>
              {project.linkLabel}
            </a>
            {project.source && (
              <a href={project.source} target="_blank" rel="noopener noreferrer" className={`flex-1 rounded-lg border px-5 py-3 text-center font-mono text-[10px] uppercase tracking-[0.2em] transition-colors ${border} ${isFlipped ? 'hover:bg-black hover:text-white' : 'hover:bg-white hover:text-black'}`}>
                View source
              </a>
            )}
          </div>
        </div>
      </motion.article>
    </div>
  );
}

export default function ProjectContent({ onClose, isFlipped = false, isReducedMotion = false }: ProjectContentProps) {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [layout, setLayout] = useState({ width: 1280, height: 720, mobile: false });
  const seed = useRef(Math.random() * 1000);

  useEffect(() => {
    const updateLayout = () => setLayout({ width: window.innerWidth, height: window.innerHeight, mobile: window.innerWidth < 640 });
    updateLayout();
    window.addEventListener('resize', updateLayout);
    return () => window.removeEventListener('resize', updateLayout);
  }, []);

  const positions = buildPositions(projects.length, layout.width, layout.mobile, seed.current);
  const rows = Math.ceil(projects.length / (layout.mobile ? 2 : 4));
  const canvasHeight = layout.mobile ? Math.max(layout.height, rows * 255 + 190) : layout.height;
  const originY = canvasHeight / 2 - (layout.mobile ? 145 : 105);
  const backdrop = isFlipped ? 'rgba(245,242,235,0.95)' : 'rgba(4,4,4,0.94)';
  const text = isFlipped ? 'text-black' : 'text-white';
  const muted = isFlipped ? 'text-black/45' : 'text-white/45';

  return (
    <motion.section className="fixed inset-0 z-30 overflow-y-auto overflow-x-hidden" initial={{ opacity: 0 }} animate={{ opacity: 1, backgroundColor: backdrop }} exit={{ opacity: 0 }} transition={{ duration: 0.35 }}>
      <button type="button" onClick={onClose} className={`fixed right-5 top-20 z-50 rounded-full border border-current/20 px-4 py-2 font-mono text-[9px] uppercase tracking-[0.2em] lg:right-10 lg:top-28 ${text}`}>
        Close
      </button>
      <div className="pointer-events-none fixed left-1/2 top-20 z-40 -translate-x-1/2 text-center lg:top-28">
        <p className={`font-mono text-[9px] uppercase tracking-[0.35em] ${muted}`}>Selected work</p>
        <h1 className={`mt-2 font-serif text-2xl font-bold sm:text-3xl ${text}`}>Projects on the table</h1>
      </div>

      <div className="relative w-full" style={{ height: canvasHeight }}>
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} position={positions[index]} originY={originY} isFlipped={isFlipped} isReducedMotion={isReducedMotion} onSelect={() => setSelectedProject(project)} />
        ))}
      </div>

      <AnimatePresence>
        {selectedProject && <ProjectDetails project={selectedProject} isFlipped={isFlipped} onClose={() => setSelectedProject(null)} />}
      </AnimatePresence>
    </motion.section>
  );
}
