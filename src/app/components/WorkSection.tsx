'use client';

import { useEffect, useState } from 'react';
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
  type MotionValue,
} from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';


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
  tiltX: MotionValue<number>;
  tiltY: MotionValue<number>;
}

const workItems: WorkItem[] = [
  {
    id: 1,
    company: "NorthMark Compute & Cloud",
    role: "Software Engineering Intern, Network Automation",
    period: "Jun 2026 - Present",
    technologies: ["Python", "OpenObserve", "Slack", "ZTP", "Infrahub", "Jira", "Harness", "Argo"],
    frontImage: "/cards/time702-copy-6_51163893512_l.jpg",
    description: [
      "Built and deployed a production Python alerting service used by 10+ network engineers, consuming OpenObserve webhooks and metrics to notify Slack of failed ZTP events and Infrahub changes; delivered 1,000+ alerts and surfaced 200+ ZTP errors.",
      "Designed a command-driven test harness that snapshots current Infrahub state as a baseline, validates subsequent changes against it, and posts configuration diffs to Slack when tests fail.",
      "Developed a tool-calling diagnostic agent that queries Jira, Slack, Infrahub, and ZTP systems to investigate open-ended network failures and correlate likely root causes; deployed the service through Harness and Argo-based CI/CD.",
    ],
  },
  {
    id: 2,
    company: "The University of Texas at Dallas",
    cardLabel: "UT Dallas",
    role: "Undergraduate Researcher",
    period: "Aug 2024 - Present",
    technologies: ["POSIX C", "GNSS", "IoT", "Raspberry Pi", "Azure Blob Storage", "Dash"],
    frontImage: "/cards/time702-copy-6_51163893512_l.jpg",
    description: [
      "Developed a real-time GNSS/IoT pipeline that computes S4 scintillation indices from satellite measurements sampled at up to 20 Hz, using POSIX C parallelization on a Raspberry Pi without interrupting receiver data logging.",
      "Reduced daily network transfer from 2.4 GB of raw measurements to 4.5 MB of processed indices (>99.8%), syncing results to Azure Blob Storage and refreshing a Dash monitoring dashboard every minute.",
    ],
  },
  {
    id: 3,
    company: "Enky",
    role: "Builder (Full-Stack Developer)",
    period: "Dec 2024 - May 2025",
    technologies: ["React", "Next.js", "Stripe"],
    frontImage: "/cards/time702-copy-6_51163893512_l.jpg",
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
    frontImage: "/cards/time702-copy-6_51163893512_l.jpg",
    description: [
      "Led UI/UX design for a dynamic, minimalistic business-facing web application.",
      "Built and shipped a production RFP automation tool with Next.js and NestJS that uses Gemini and GPT-5 to generate business documents from structured customer inputs.",
    ],
  },
];

// --- 2. MAIN COMPONENT (Optimized) ---
interface WorkSectionProps {
  onGoHome: () => void;
  isFlipped: boolean; 
}

export function WorkSection({ onGoHome, isFlipped }: WorkSectionProps) {
  const [focusedIndex, setFocusedIndex] = useState(0);
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const prefersReducedMotion = useReducedMotion();
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const smoothX = useSpring(pointerX, { stiffness: 180, damping: 26, mass: 0.35 });
  const smoothY = useSpring(pointerY, { stiffness: 180, damping: 26, mass: 0.35 });
  const tiltY = useTransform(smoothX, [-1, 1], [-6, 6]);
  const tiltX = useTransform(smoothY, [-1, 1], [4, -4]);
  const deckX = useTransform(smoothX, [-1, 1], [-10, 10]);
  const deckY = useTransform(smoothY, [-1, 1], [-4, 4]);

  const isDarkMode = !isFlipped; 

  const resetPointer = () => {
    pointerX.set(0);
    pointerY.set(0);
  };

  const handlePointerMove = (event: React.PointerEvent<HTMLElement>) => {
    if (prefersReducedMotion || expandedId !== null || event.pointerType !== 'mouse') return;

    const bounds = event.currentTarget.getBoundingClientRect();
    pointerX.set(((event.clientX - bounds.left) / bounds.width) * 2 - 1);
    pointerY.set(((event.clientY - bounds.top) / bounds.height) * 2 - 1);
  };

  useEffect(() => {
    if (expandedId !== null) resetPointer();
  }, [expandedId]);

  return (
    <motion.section
      className="fixed inset-0 z-30 flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onPointerMove={handlePointerMove}
      onPointerLeave={resetPointer}
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

      {/* 2. CAROUSEL LAYER */}
      <div className="relative w-full h-full flex items-end justify-center perspective-[1600px] pointer-events-none z-10 overflow-hidden">
        <motion.div
          className="absolute inset-0"
          style={{ x: deckX, y: deckY, transformStyle: 'preserve-3d', willChange: 'transform' }}
        >
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
              tiltX={tiltX}
              tiltY={tiltY}
            />
          ))}
        </motion.div>
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
    <div className={`relative w-full h-full flex flex-col pt-16 pb-12 rounded-xl overflow-hidden isolate transition-colors duration-500 ${bgClass}`}>
      <button 
        onClick={(e) => { e.stopPropagation(); onClose?.(); }}
        className={`absolute top-6 right-6 z-50 font-mono text-xs uppercase tracking-widest transition-opacity ${isExpanded ? 'opacity-100' : 'opacity-0 pointer-events-none'} ${darkMode ? 'text-white/40 hover:text-white' : 'text-black/40 hover:text-black'}`}
      >
        [ Return ]
      </button>

      <div className={`flex-1 px-8 md:px-16 scrollbar-hide ${isExpanded ? 'overflow-y-auto' : 'overflow-hidden'}`}>
        <div className="max-w-2xl mx-auto space-y-8 pb-32">
            <div className={`border-b ${borderClass} pb-6`}>
                <div className="flex justify-between items-baseline mb-2">
                      <h4 className={`text-xs font-mono uppercase tracking-[0.2em] ${textMuted}`}>...</h4>
                      <span className={`text-xs font-mono ${textMuted}`}>{item.period}</span>
                </div>
                <h2 className={`text-4xl md:text-5xl font-serif font-bold ${textMain} mb-2`}>{item.company}</h2>
                <h3 className={`text-xl font-medium ${textSub}`}>{item.role}</h3>
            </div>
            <ul className={`space-y-4 text-base md:text-lg leading-relaxed list-disc pl-5 ${darkMode ? 'text-white/80' : 'text-black/80'}`}>
              {item.description.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
            <div className="pt-4">
                <h5 className={`text-xs font-mono uppercase tracking-widest ${darkMode ? 'text-white/30' : 'text-black/40'} mb-4`}>Technology Inventory</h5>
              <div className="grid grid-cols-2 gap-3">
                {item.technologies.map((tech, idx) => (
                  <div key={`${tech}-${idx}`} className={`flex items-center gap-2 border p-2 rounded-sm shadow-sm ${tagBg}`}>
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                      <span className={`text-[10px] font-mono uppercase ${textSub}`}>{tech}</span>
                  </div>
                ))}
              </div>
            </div>
        </div>
      </div>
      <div className={`absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t ${darkMode ? 'from-[#1a1a1a]' : 'from-white'} to-transparent pointer-events-none`} />
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
  tiltX,
  tiltY,
}: CarouselCardProps) {
  
  // --- DETECT MOBILE ---
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    // Check if window is less than 768px (standard md breakpoint)
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile(); // Check on mount
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
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
        transition: { duration: 0.08 }
      }}
      className="relative w-[220px] md:w-[350px] aspect-[5/7] cursor-pointer pointer-events-auto"
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
      <div className="absolute -top-28 left-1/2 w-[180px] md:w-[220px] -translate-x-1/2 text-center pointer-events-none">
        <h3 className={`font-serif text-lg md:text-xl font-bold leading-tight ${isDarkMode ? (isFocused ? 'text-white' : 'text-white/55') : (isFocused ? 'text-black' : 'text-black/55')}`}>
          {item.cardLabel ?? item.company}
        </h3>
        <p className={`mt-2 font-mono text-[8px] md:text-[9px] uppercase tracking-[0.12em] leading-relaxed ${isDarkMode ? (isFocused ? 'text-blue-300' : 'text-white/35') : (isFocused ? 'text-blue-700' : 'text-black/35')}`}>
          {item.role}
        </p>
      </div>

      {/* INNER CARD */}
      <motion.div 
        className="w-full h-full relative"
        style={{
          rotateX: tiltX,
          rotateY: tiltY,
          transformStyle: 'preserve-3d',
          willChange: 'transform',
        }}
      >
        {/* FRONT FACE */}
        <div 
            className="absolute inset-0 rounded-xl bg-[#0f0f0f] border shadow-xl"
            style={{ backfaceVisibility: 'hidden' }}
        >
              <div className="relative w-full h-full rounded-lg overflow-hidden bg-black">
                <ImageWithFallback 
                    src={item.frontImage} 
                    alt={item.company} 
                    className="w-full h-full object-cover" 
                    sizes="(max-width: 768px) 280px, 350px"
                    priority={isFocused} 
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/5 via-transparent to-black/35 pointer-events-none" />
                {!isFocused && <div className="absolute inset-0 bg-black/25 pointer-events-none" />}
             </div>
        </div>

        {/* BACK FACE */}
        <div 
            className="absolute inset-0 rounded-xl overflow-hidden shadow-2xl"
            style={{ 
                backfaceVisibility: 'hidden', 
                transform: 'rotateY(180deg)' 
            }}
        >
            <CardBackContent item={item} isExpanded={false} darkMode={isDarkMode} />
        </div>
      </motion.div>
    </motion.div>
    </div>
  );
}

// --- 5. EXPANDED MODAL CARD (Optimized) ---
function ExpandedCard({ item, onClose, isDarkMode }: { item: WorkItem, onClose: () => void, isDarkMode: boolean }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center pointer-events-auto">
      
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
        className="relative z-[60] w-[min(92vw,42rem)] h-[min(74vh,42rem)] md:h-[min(72vh,42rem)] rounded-xl overflow-hidden shadow-2xl"
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
  );
}
