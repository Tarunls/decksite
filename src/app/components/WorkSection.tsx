'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { MotionValue } from 'motion/react';


// --- 1. DATA (Unchanged) ---
interface WorkItem {
  id: number;
  company: string;
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
  mouseX: MotionValue<number>;
  mouseY: MotionValue<number>;
  isDarkMode: boolean;
}

const workItems: WorkItem[] = [
  {
    id: 1,
    company: "Northmark Cloud & Compute (NMC²)",
    role: "Software Engineering Intern, Network Automation",
    period: "Jun 2026 - Present",
    technologies: ["Slack", "ZTP", "Infrahub", "Jira"],
    frontImage: "/cards/time702-copy-6_51163893512_l.jpg",
    description: [
      "Built a Slack-integrated network automation bot that monitors Zero-Touch Provisioning (ZTP) and Infrahub events across GPU infrastructure spanning several thousand GPUs and hundreds of thousands of configuration records.",
      "Developed a one-command snapshot test harness to baseline Infrahub configuration, diff subsequent changes, and surface unintended infrastructure drift in Slack before deployment.",
      "Implemented a tool-calling assistant integrating Jira, Slack, Infrahub, and ZTP to diagnose infrastructure issues across systems and surface likely root causes.",
    ],
  },
  {
    id: 2,
    company: "The University of Texas at Dallas",
    role: "Undergraduate Researcher",
    period: "Aug 2024 - Present",
    technologies: ["Python", "Bash", "TensorFlow", "Azure", "Raspberry Pi", "Plotly Dash"],
    frontImage: "/cards/time702-copy-6_51163893512_l.jpg",
    description: [
      "Built an IoT and TensorFlow pipeline using satellite-receiver data to classify ionospheric scintillation events versus radio-frequency interference and multipath artifacts.",
      "Built a one-command Bash deployment pipeline that provisions Azure storage and web apps, configures Raspberry Pi collectors, and launches real-time Plotly Dash dashboards ingesting hundreds of thousands of data points daily.",
      "Open-sourced ScintKit, a Python library that scans legacy and current ScintPi station formats, visualizes data-availability gaps, and emails automated monitoring reports.",
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
    role: "Software Engineering Intern, Frontend Development",
    period: "Aug 2024 - Nov 2024",
    technologies: ["React", "Next.js", "NestJS", "Gemini", "OpenAI"],
    frontImage: "/cards/time702-copy-6_51163893512_l.jpg",
    description: [
      "Owned frontend integration for services that ingested RFPs, parsed supporting documentation, and generated AI-assisted business responses, building the associated workflows in Next.js.",
      "Integrated React components with NestJS APIs and Gemini/OpenAI models to transform structured customer inputs into generated business documents.",
    ],
  },
];

// --- 2. MAIN COMPONENT (Optimized) ---
interface WorkSectionProps {
  onGoHome: () => void;
  isFlipped: boolean; 
}

export function WorkSection({ onGoHome, isFlipped }: WorkSectionProps) {
  const [focusedIndex, setFocusedIndex] = useState(1);
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const isDarkMode = !isFlipped; 

  // MOUSE TRACKING
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent) => {
    // Only track mouse if NOT expanded to save resources
    if (expandedId !== null) return;

    const { clientX, clientY } = e;
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    mouseX.set(clientX - centerX);
    mouseY.set(clientY - centerY);
  };

  return (
    <motion.section
      className="fixed inset-0 z-30 flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onMouseMove={handleMouseMove}
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
      <div className="relative w-full h-full flex items-end justify-center perspective-[2000px] pointer-events-none z-10 pb-[-10vh]">
        {workItems.map((item, index) => (
          <CarouselCard 
            key={item.id} 
            item={item} 
            index={index}
            focusedIndex={focusedIndex}
            setFocusedIndex={setFocusedIndex}
            setExpandedId={setExpandedId}
            isExpanded={expandedId === item.id}
            mouseX={mouseX}
            mouseY={mouseY}
            isDarkMode={isDarkMode} 
          />
        ))}
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
  mouseX, 
  mouseY, 
  isDarkMode 
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

  const springConfig = { damping: 25, stiffness: 150 }; 
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);

  const rotateX = useTransform(smoothMouseY, [-500, 500], [10, -10]); 
  const rotateY = useTransform(smoothMouseX, [-500, 500], [-10, 10]);
  
  // --- FIX 1: ADJUST TEXT HEIGHT ---
  // On Desktop: move text based on mouse. On Mobile: Keep it static and HIGHER up (-50) so it clears the card
  const textX = useTransform(smoothMouseX, [-500, 500], [-15, 15]);
  const textY = useTransform(smoothMouseY, [-500, 500], isMobile ? [-50, -50] : [-15, 15]);

  const offset = index - focusedIndex;
  const isFocused = offset === 0;
  
  // --- FIX 2: TIGHTER SPACING ON MOBILE ---
  // Desktop: 180px apart. Mobile: 40px apart (very tight overlap, like a hand of cards)
  const spacing = isFocused ? 0 : (isMobile ? 150 : 180);
  
  const x = offset * spacing;
  
  // Adjust Y: On mobile, focused card needs to pop up MORE to be clear of the "hand"
  const y = isFocused ? (isMobile ? 100 : 120) : (isMobile ? 100 : 200); 
  
  const scale = isFocused ? 1.0 : (isMobile ? 0.85 : 0.8); 
  
  // On mobile, fan the rotation out more so the tight spacing doesn't look like a messy pile
  const baseRotateZ = offset * (isMobile ? 8 : 12); 
  const zIndex = 50 - Math.abs(offset) * 10;

  const titleColor = isDarkMode ? (isFocused ? 'text-white' : 'text-white/40') : (isFocused ? 'text-black' : 'text-black/40');
  const roleColor = isDarkMode ? (isFocused ? 'text-blue-400' : 'text-white/20') : (isFocused ? 'text-blue-600' : 'text-black/20');

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (isFocused) {
      setExpandedId(item.id); 
    } else {
      setFocusedIndex(index);
    }
  };

  return (
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
        scale: isFocused ? 1.15 : 0.95, 
        zIndex: 100, 
        transition: { duration: 0.1 } 
      }}
      className="absolute w-[220px] md:w-[350px] aspect-[5/7] cursor-pointer pointer-events-auto"
      onClick={handleClick}
    >
      {/* FLOATING TEXT */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: isExpanded ? 0 : 1, y: 0 }} 
        style={{ x: textX, y: textY, z: 50 }}
        className={`absolute -top-20 left-0 right-0 text-center pointer-events-none ${isFocused ? '' : 'hidden md:block'}`}
      >
        <h3 className={`text-2xl md:text-3xl font-serif font-bold transition-colors duration-300 ${titleColor}`}>
            {item.company}
        </h3>
        <p className={`text-xs font-mono uppercase tracking-widest mt-2 transition-colors duration-300 ${roleColor}`}>
            {item.role}
        </p>
      </motion.div>

      {/* INNER CARD */}
      <motion.div 
        className="w-full h-full relative"
        style={{ 
            transformStyle: 'preserve-3d',
            rotateX: isExpanded ? 0 : rotateX, 
            rotateY: isExpanded ? 0 : rotateY,
        }}
      >
        {/* FRONT FACE */}
        <div 
            className="absolute inset-0 rounded-xl bg-[#0f0f0f] border shadow-2xl"
            style={{ 
              backfaceVisibility: 'hidden', 
              filter: isFocused ? 'saturate(1.2)' : 'saturate(0.5) brightness(0.8)' 
            }}
        >
              <div className="relative w-full h-full rounded-lg overflow-hidden bg-black">
                <ImageWithFallback 
                    src={item.frontImage} 
                    alt={item.company} 
                    className="w-full h-full object-cover" 
                    sizes="(max-width: 768px) 280px, 350px"
                    priority={isFocused} 
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/60 pointer-events-none" />
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
