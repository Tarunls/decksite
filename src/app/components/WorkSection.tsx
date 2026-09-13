'use client';

import { useEffect, useState } from 'react';
import {
  motion,
  AnimatePresence,
  useReducedMotion,
  useTransform,
  type MotionValue,
} from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useCursorMotion } from '../../lib/useCursorMotion';
import { AccessibleDialog } from './AccessibleDialog';


// --- 1. DATA (Unchanged) ---
interface WorkItem {
  id: number;
  company: string;
  cardLabel?: string;
  role: string;
  period: string;
  description: string[];
  technologies: string[];
  frontImage: string;
}

interface CarouselCardProps {
  item: WorkItem;
  index: number;
  focusedIndex: number;
  setFocusedIndex: (index: number) => void;
  setExpandedId: (id: number | null) => void;
  isExpanded: boolean;
  isDarkMode: boolean;
  cursorX: MotionValue<number>;
  cursorY: MotionValue<number>;
}

const workItems: WorkItem[] = [
  {
    id: 1,
    company: "NorthMark Compute & Cloud",
    role: "Software Engineering Intern, Network Automation",
    period: "Jun 2026 - Aug 2026",
    technologies: ["Python", "OpenObserve", "Slack", "ZTP", "Infrahub", "Jira", "Harness", "Argo"],
    frontImage: "/cards/work-card-back.png",
    description: [
      "Replaced reliance on manual log checks and outage reports with a production Python/OpenObserve alerting service, giving 10+ network engineers early visibility into Infrahub and zero-touch provisioning (ZTP) issues; delivered 1,000+ Slack alerts and surfaced 200+ ZTP errors over five weeks.",
      "Designed a command-driven Infrahub snapshot-comparison harness that flags changes from baseline state and posts configuration diffs to Slack.",
      "Developed a tool-calling diagnostic agent used in network investigations, integrating Jira, Slack, Infrahub, and ZTP systems; deployed the service through Harness and Argo-based CI/CD.",
    ],
  },
  {
    id: 2,
    company: "The University of Texas at Dallas",
    cardLabel: "UT Dallas",
    role: "Undergraduate Researcher",
    period: "Aug 2024 - Present",
    technologies: ["POSIX C", "GNSS", "IoT", "Raspberry Pi", "Azure Blob Storage", "Dash"],
    frontImage: "/cards/work-card-back.png",
    description: [
      "Developed a multithreaded POSIX C pipeline on a Raspberry Pi to compute S4 scintillation indices every five minutes from GNSS measurements sampled at up to 20 Hz, while receiver logging continued.",
      "Integrated Azure Blob Storage and Dash for storing and visualizing processed indices; one observed day yielded 4.5 MB of indices from 2.4 GB of raw measurements, reducing data volume by >99.8%.",
    ],
  },
  {
    id: 3,
    company: "Enky",
    role: "Builder (Full-Stack Developer)",
    period: "Dec 2024 - May 2025",
    technologies: ["React", "Next.js", "Stripe"],
    frontImage: "/cards/work-card-back.png",
    description: [
      "Built and launched full-stack features for a two-sided music-promotion marketplace using React and Next.js, connecting 20+ emerging artists with influencers for paid song placements.",
      "Implemented user authentication and Stripe payment workflows that enabled influencers to set placement rates and artists to purchase promotions through the platform.",
    ],
  },
  {
    id: 4,
    company: "MyIntent.io",
    role: "Software Engineering Intern, Full Stack Development",
    period: "Aug 2024 - Nov 2024",
    technologies: ["React", "Next.js", "NestJS", "Gemini", "OpenAI"],
    frontImage: "/cards/work-card-back.png",
    description: [
      "Built the document-upload UI for a Next.js/NestJS RFP automation tool that generates business documents from structured customer inputs.",
      "Implemented document storage and retrieval for retrieval-augmented generation (RAG), enabling the application to use uploaded documents as context for business-document generation.",
    ],
  },
];

// --- 2. MAIN COMPONENT (Optimized) ---
interface WorkSectionProps {
  onGoHome: () => void;
  isFlipped: boolean; 
  isReducedMotion?: boolean;
}

export function WorkSection({ onGoHome, isFlipped, isReducedMotion = false }: WorkSectionProps) {
  const [focusedIndex, setFocusedIndex] = useState(0);
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const prefersReducedMotion = useReducedMotion();
  const { x: smoothX, y: smoothY } = useCursorMotion(Boolean(prefersReducedMotion) || isReducedMotion || expandedId !== null);

  const isDarkMode = !isFlipped; 

  return (
    <motion.section
      aria-label="Work experience"
      className="fixed inset-0 z-30 flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* 1. ATMOSPHERE LAYER (Optimized: Removed backdropFilter animation) */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ 
            opacity: 1, 
            // Removed backdropFilter here - it is the #1 cause of lag
            backgroundColor: isDarkMode ? "rgba(0,0,0,0.8)" : "rgba(255,255,255,0.8)"
        }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="absolute inset-0 z-0" 
        onClick={() => {
          if (expandedId === null) onGoHome();
        }} 
      />

      <div className="work-choice-panel absolute inset-x-4 top-24 bottom-52 z-20 flex flex-col overflow-y-auto overscroll-contain lg:hidden" aria-label="Choose work experience">
      <div className="work-choice-grid mt-auto grid shrink-0 grid-cols-2 gap-3">
        {workItems.map((item, index) => {
          const isFocused = focusedIndex === index;
          return (
            <button
              key={item.id}
              type="button"
              aria-label={`${isFocused ? 'Open' : 'Focus'} ${item.company} work experience`}
              aria-pressed={isFocused}
              onClick={() => isFocused ? setExpandedId(item.id) : setFocusedIndex(index)}
              className={`rounded-lg border px-3 py-3 text-left ${isDarkMode
                ? `bg-black/85 ${isFocused ? 'border-white/60 text-white' : 'border-white/20 text-white/80'}`
                : `bg-white/90 ${isFocused ? 'border-black/60 text-black' : 'border-black/20 text-black/80'}`}`}
            >
              <span className="block font-serif text-base font-bold leading-tight">{item.cardLabel ?? item.company}</span>
              <span className={`mt-2 block text-[11px] leading-snug ${isDarkMode ? 'text-white/75' : 'text-black/75'}`}>{item.role}</span>
            </button>
          );
        })}
      </div>
      </div>

      {/* 2. CAROUSEL LAYER */}
      <div className="relative w-full h-full flex items-end justify-center perspective-[1600px] pointer-events-none z-10 overflow-hidden">
        <div className="absolute inset-0" style={{ transformStyle: 'preserve-3d' }}>
          {workItems.map((item, index) => (
            <CarouselCard
              key={item.id}
              item={item}
              index={index}
              focusedIndex={focusedIndex}
              setFocusedIndex={setFocusedIndex}
              setExpandedId={setExpandedId}
              isExpanded={expandedId === item.id}
              isDarkMode={isDarkMode}
              cursorX={smoothX}
              cursorY={smoothY}
            />
          ))}
        </div>
      </div>

      {/* 3. MODAL LAYER */}
      <AnimatePresence>
        {expandedId !== null && (
          <ExpandedCard 
            item={workItems.find(i => i.id === expandedId)!} 
            onClose={() => setExpandedId(null)}
            isDarkMode={isDarkMode}
          />
        )}
      </AnimatePresence>
    </motion.section>
  );
}

// --- 3. HELPER: SHARED BACK CONTENT (Unchanged content, same logic) ---
interface CardBackContentProps { 
  item: WorkItem; 
  isExpanded: boolean; 
  onClose?: () => void;
  darkMode?: boolean;
}

function CardBackContent({ item, isExpanded, onClose, darkMode = false }: CardBackContentProps) {
  const bgClass = darkMode ? 'bg-[#1a1a1a]' : 'bg-white';
  const textMain = darkMode ? 'text-white' : 'text-black';
  const textMuted = darkMode ? 'text-white/50' : 'text-black/50';
  const textSub = darkMode ? 'text-white/70' : 'text-black/70';
  const borderClass = darkMode ? 'border-white/10' : 'border-black/10';
  const tagBg = darkMode ? 'bg-white/5 border-white/10' : 'bg-gray-50 border-black/5';

  return (
    <div className={`relative w-full h-full flex flex-col pt-16 pb-4 rounded-xl overflow-hidden isolate transition-colors duration-500 ${bgClass}`}>
      <button 
        type="button"
        aria-label="Close work experience"
        onClick={(e) => { e.stopPropagation(); onClose?.(); }}
        className={`absolute top-2 right-3 z-50 min-h-11 px-3 font-mono text-xs uppercase tracking-widest transition-opacity ${isExpanded ? 'opacity-100' : 'opacity-0 pointer-events-none'} ${darkMode ? 'text-white/70 hover:text-white' : 'text-black/70 hover:text-black'}`}
      >
        [ Return ]
      </button>

      <div className={`min-h-0 flex-1 px-5 md:px-12 overscroll-contain scrollbar-hide ${isExpanded ? 'overflow-y-auto' : 'overflow-hidden'}`}>
        <div className="max-w-2xl mx-auto space-y-6 pb-12">
            <div className={`border-b ${borderClass} pb-4`}>
                <div className="flex justify-end items-baseline mb-2">
                      <span className={`text-xs font-mono ${textMuted}`}>{item.period}</span>
                </div>
                <h2 className={`text-3xl md:text-4xl font-serif font-bold leading-tight ${textMain} mb-2`}>{item.company}</h2>
                <h3 className={`text-lg font-medium ${textSub}`}>{item.role}</h3>
            </div>
            <ul className={`space-y-4 text-base md:text-lg leading-relaxed list-disc pl-5 ${darkMode ? 'text-white/80' : 'text-black/80'}`}>
              {item.description.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
            <div className="pt-4">
                <h5 className={`text-xs font-mono uppercase tracking-widest ${darkMode ? 'text-white/60' : 'text-black/60'} mb-4`}>Technologies</h5>
              <div className="grid grid-cols-2 gap-3">
                {item.technologies.map((tech, idx) => (
                  <div key={`${tech}-${idx}`} className={`min-w-0 flex items-center gap-2 border p-2 rounded-sm shadow-sm ${tagBg}`}>
                      <div className="w-1.5 h-1.5 shrink-0 bg-green-500 rounded-full" />
                      <span className={`min-w-0 break-words text-xs font-mono uppercase ${textSub}`}>{tech}</span>
                  </div>
                ))}
              </div>
            </div>
        </div>
      </div>
      <div className={`absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t ${darkMode ? 'from-[#1a1a1a]' : 'from-white'} to-transparent pointer-events-none`} />
    </div>
  );
}

// --- 4. CAROUSEL CARD (Unchanged logic, just ensure no heavy filters on animate) ---
function CarouselCard({ 
  item, 
  index, 
  focusedIndex, 
  setFocusedIndex, 
  setExpandedId, 
  isExpanded, 
  isDarkMode,
  cursorX,
  cursorY,
}: CarouselCardProps) {
  
  // --- DETECT MOBILE ---
  const [isMobile, setIsMobile] = useState(false);
  const [viewportSize, setViewportSize] = useState({ width: 1440, height: 900 });
  useEffect(() => {
    const checkViewport = () => {
      setIsMobile(window.innerWidth < 1024);
      setViewportSize({ width: window.innerWidth, height: window.innerHeight });
    };
    checkViewport();
    window.addEventListener('resize', checkViewport);
    return () => window.removeEventListener('resize', checkViewport);
  }, []);

  const offset = index - focusedIndex;
  const isFocused = offset === 0;
  const centerOffset = index - 1.5;
  const spacing = isMobile ? 64 : 210;
  const x = centerOffset * spacing;
  const y = isFocused ? (isMobile ? 82 : 115) : (isMobile ? 142 : 205) + Math.abs(centerOffset) * 12;
  const scale = isFocused ? 1 : (isMobile ? 0.82 : 0.84);
  const baseRotateZ = centerOffset * (isMobile ? 9 : 10);
  const zIndex = isFocused ? 90 : 20 + index;
  const cardWidth = isMobile ? 220 : 350;
  const cardHeight = cardWidth * 1.4;
  const cardCenterX = x / Math.max(viewportSize.width / 2, 1);
  const cardCenterY = (
    ((viewportSize.height - cardHeight / 2 + y) / Math.max(viewportSize.height, 1)) * 2
  ) - 1;
  const independentTiltY = useTransform([cursorX, cursorY], ([rawX, rawY]) => {
    const currentX = Number(rawX);
    const currentY = Number(rawY);
    const activity = Math.min(1, (Math.abs(currentX) + Math.abs(currentY)) * 1.35);
    return Math.max(-12, Math.min(12, (currentX - cardCenterX) * 9 * activity));
  });
  const independentTiltX = useTransform([cursorX, cursorY], ([rawX, rawY]) => {
    const currentX = Number(rawX);
    const currentY = Number(rawY);
    const activity = Math.min(1, (Math.abs(currentX) + Math.abs(currentY)) * 1.35);
    return Math.max(-9, Math.min(9, (cardCenterY - currentY) * 7 * activity));
  });

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (isFocused) {
      setExpandedId(item.id); 
    } else {
      setFocusedIndex(index);
    }
  };

  return (
    <div className="absolute inset-0 flex items-end justify-center pointer-events-none">
    <motion.div
      initial={{ opacity: 0, y: 800 }}
      animate={{ 
        opacity: isExpanded ? 0 : 1, 
        x: x, 
        y: y, 
        scale: scale, 
        zIndex: zIndex,
        rotateZ: baseRotateZ 
      }}
      transition={{ type: "spring", damping: 25, stiffness: 120 }}
      style={{ 
        zIndex, 
        transformStyle: 'preserve-3d',
      }}
      whileHover={{ 
        scale: isFocused ? 1.025 : (isMobile ? 0.84 : 0.87),
        transition: { duration: 0.18, ease: [0.22, 1, 0.36, 1] }
      }}
      className="relative w-[220px] lg:w-[350px] aspect-[5/7] cursor-pointer pointer-events-auto"
      onClick={handleClick}
      role="button"
      tabIndex={0}
      aria-label={`${isFocused ? 'Open' : 'Focus'} ${item.company} work experience`}
      onKeyDown={(event) => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          handleClick(event as unknown as React.MouseEvent);
        }
      }}
    >
      <div className="absolute -top-28 left-1/2 hidden w-[220px] -translate-x-1/2 text-center pointer-events-none lg:block">
        <h3 className={`font-serif text-lg md:text-xl font-bold leading-tight ${isDarkMode ? (isFocused ? 'text-white' : 'text-white/55') : (isFocused ? 'text-black' : 'text-black/55')}`}>
          {item.cardLabel ?? item.company}
        </h3>
        <p className={`mt-2 font-mono text-[10px] md:text-[11px] uppercase tracking-[0.12em] leading-relaxed ${isDarkMode ? (isFocused ? 'text-blue-300' : 'text-white/65') : (isFocused ? 'text-blue-700' : 'text-black/65')}`}>
          {item.role}
        </p>
      </div>

      {/* INNER CARD */}
      <motion.div 
        className="w-full h-full relative"
        style={{
          rotateX: independentTiltX,
          rotateY: independentTiltY,
          transformPerspective: 1100,
          transformStyle: 'preserve-3d',
          willChange: 'transform',
        }}
      >
        {/* FRONT FACE */}
        <div 
            className="absolute inset-0"
            style={{ backfaceVisibility: 'hidden' }}
        >
              <div className="relative w-full h-full">
                <ImageWithFallback 
                    src={item.frontImage} 
                    alt={item.company} 
                    className={`w-full h-full object-contain ${isFocused ? '' : 'brightness-75'}`}
                    sizes="(max-width: 768px) 280px, 350px"
                    priority={isFocused} 
                />
             </div>
        </div>

      </motion.div>
    </motion.div>
    </div>
  );
}

// --- 5. EXPANDED MODAL CARD (Optimized) ---
function ExpandedCard({ item, onClose, isDarkMode }: { item: WorkItem, onClose: () => void, isDarkMode: boolean }) {
  return (
    <AccessibleDialog label={`${item.company} work experience`} onClose={onClose} modal={false}>
    <div className="fixed inset-0 z-50 flex items-center justify-center px-3 pt-20 pb-[calc(6.5rem+env(safe-area-inset-bottom))] lg:p-0 pointer-events-auto">
      
      {/* Backdrop (Optimized: Removed backdrop-blur-md) */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        onClick={onClose}
        className="absolute inset-0 bg-black/90 cursor-pointer"
      />

      {/* MODAL CONTAINER */}
      <motion.div
        className="relative z-[60] w-full max-w-2xl h-full lg:h-[min(72dvh,42rem)] rounded-xl overflow-hidden shadow-2xl"
        initial={{ 
          opacity: 0, 
          scale: 0.96,
          y: 32,
        }}
        animate={{ 
          opacity: 1, 
          scale: 1, 
          y: 0,
        }}
        exit={{ opacity: 0, scale: 0.98, y: 20 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        onClick={(event) => event.stopPropagation()}
      >
        <CardBackContent item={item} isExpanded={true} onClose={onClose} darkMode={isDarkMode} />
      </motion.div>
    </div>
    </AccessibleDialog>
  );
}
