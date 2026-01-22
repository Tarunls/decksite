'use client';

import { useState } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'motion/react';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';

// --- 1. DATA ---
interface WorkItem {
  id: number;
  company: string;
  role: string;
  period: string;
  description: string;
  technologies: string[];
  frontImage: string;
}

const workItems: WorkItem[] = [
  {
    id: 1,
    company: "Example Company A",
    role: "TBD",
    period: "2022 - Present",
    technologies: ["Example", "Example", "Example", "Example"],
    frontImage: "/cards/time702-copy-6_51163893512_l.jpg",
    description: "TBD: Content for this section is currently being drafted. This will detail the major achievements and responsibilities held at Example Company A." 
  },
  {
    id: 2,
    company: "Example Company B",
    role: "TBD",
    period: "2020 - 2022",
    technologies: ["Example", "Example", "Example"],
    frontImage: "/cards/time702-copy-6_51163893512_l.jpg",
    description: "TBD: Content for this section is currently being drafted. This will detail the major achievements and responsibilities held at Example Company B."
  },
  {
    id: 3,
    company: "Example Company C",
    role: "TBD",
    period: "2019 - 2020",
    technologies: ["Example", "Example"],
    frontImage: "/cards/time702-copy-6_51163893512_l.jpg",
    description: "TBD: Content for this section is currently being drafted. This will detail the major achievements and responsibilities held at Example Company C."
  },
];

// --- 2. MAIN COMPONENT ---
interface WorkSectionProps {
  onGoHome: () => void;
  isFlipped: boolean; // <--- ADDED PROP
}

export function WorkSection({ onGoHome, isFlipped }: WorkSectionProps) {
  const [focusedIndex, setFocusedIndex] = useState(1);
  const [expandedId, setExpandedId] = useState<number | null>(null);

  // LOGIC: If isFlipped is false (App is Dark), we want DarkMode cards.
  const isDarkMode = !isFlipped; 

  // MOUSE TRACKING FOR PARALLAX
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent) => {
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
      {/* 1. ATMOSPHERE LAYER (Dynamic based on theme) */}
      <motion.div 
        initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
        animate={{ 
            opacity: 1, 
            backdropFilter: "blur(12px)",
            backgroundColor: isDarkMode ? "rgba(0,0,0,0.6)" : "rgba(255,255,255,0.6)" // Adapt overlay color
        }}
        exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
        transition={{ duration: 0.8 }}
        className="absolute inset-0 z-0" 
        style={{ willChange: "opacity, backdrop-filter" }}
        onClick={() => {
          if (expandedId === null) onGoHome();
        }} 
      />

      {/* 2. CAROUSEL LAYER */}
      <div className="relative w-full h-full flex items-center justify-center perspective-[2000px] pointer-events-none z-10">
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
            isDarkMode={isDarkMode} // Pass down
          />
        ))}
      </div>

      {/* 3. MODAL LAYER */}
      <AnimatePresence>
        {expandedId !== null && (
          <ExpandedCard 
            item={workItems.find(i => i.id === expandedId)!} 
            onClose={() => setExpandedId(null)}
            isDarkMode={isDarkMode} // Pass down
          />
        )}
      </AnimatePresence>
    </motion.section>
  );
}

// --- 3. HELPER: SHARED BACK CONTENT (THEMED) ---
interface CardBackContentProps { 
  item: WorkItem; 
  isExpanded: boolean; 
  onClose?: () => void;
  darkMode?: boolean;
}

function CardBackContent({ item, isExpanded, onClose, darkMode = false }: CardBackContentProps) {
  // Define dynamic colors based on darkMode prop
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
                      <h4 className={`text-xs font-mono uppercase tracking-[0.2em] ${textMuted}`}>Confidential Dossier</h4>
                      <span className={`text-xs font-mono ${textMuted}`}>{item.period}</span>
                </div>
                <h2 className={`text-4xl md:text-5xl font-serif font-bold ${textMain} mb-2`}>{item.company}</h2>
                <h3 className={`text-xl font-medium ${textSub}`}>{item.role}</h3>
            </div>
            <div>
                <p className={`text-lg leading-relaxed ${darkMode ? 'text-white/80' : 'text-black/80'}`}>{item.description}</p>
            </div>
            <div className="pt-4">
                <h5 className={`text-xs font-mono uppercase tracking-widest ${darkMode ? 'text-white/30' : 'text-black/40'} mb-4`}>Technology Inventory</h5>
                <div className="grid grid-cols-2 gap-3">
                      {item.technologies.map((tech) => (
                        <div key={tech} className={`flex items-center gap-2 border p-2 rounded-sm shadow-sm ${tagBg}`}>
                            <div className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                            <span className={`text-[10px] font-mono uppercase ${textSub}`}>{tech}</span>
                        </div>
                      ))}
                </div>
            </div>
            <div className={`pt-12 border-t ${borderClass} mt-12`}>
                <h5 className={`text-[10px] font-mono uppercase tracking-widest ${darkMode ? 'text-white/20' : 'text-black/30'} mb-4`}>System Logs</h5>
                <div className={`space-y-4 opacity-50 text-[10px] font-mono leading-loose ${darkMode ? 'text-white/50' : 'text-black/60'}`}>
                   <p>LOG 01: Deployment successful. System nominal.</p>
                   <p>LOG 02: Initializing secure handshake protocols.</p>
                </div>
            </div>
        </div>
      </div>
      <div className={`absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t ${darkMode ? 'from-[#1a1a1a]' : 'from-white'} to-transparent pointer-events-none`} />
    </div>
  );
}

// --- 4. CAROUSEL CARD ---
function CarouselCard({ item, index, focusedIndex, setFocusedIndex, setExpandedId, isExpanded, mouseX, mouseY, isDarkMode }: any) {
  
  // -- PARALLAX PHYSICS --
  const springConfig = { damping: 25, stiffness: 150 }; 
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);

  const rotateX = useTransform(smoothMouseY, [-500, 500], [10, -10]); 
  const rotateY = useTransform(smoothMouseX, [-500, 500], [-10, 10]);
  const textX = useTransform(smoothMouseX, [-500, 500], [-15, 15]);
  const textY = useTransform(smoothMouseY, [-500, 500], [-15, 15]);

  const offset = index - focusedIndex;
  const isFocused = offset === 0;
  
  const spacing = 260; 
  const x = offset * spacing;
  const y = isFocused ? 0 : 30;
  const scale = isFocused ? 1.1 : 0.9;
  const zIndex = 50 - Math.abs(offset) * 10;
  const baseRotateZ = offset * 5; 

  // Dynamic Text Colors for the Floating Title
  // If Dark Mode: White Text. If Light Mode: Black Text.
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
        willChange: 'transform' 
      }}
      whileHover={{ 
        scale: isFocused ? 1.15 : 0.95, 
        zIndex: 100, 
        transition: { duration: 0.1 } 
      }}
      className="absolute w-[280px] md:w-[350px] aspect-[5/7] cursor-pointer pointer-events-auto"
      onClick={handleClick}
    >
      {/* FLOATING TEXT */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: isExpanded ? 0 : 1, y: 0 }} 
        style={{ x: textX, y: textY, z: 50 }}
        className="absolute -top-20 left-0 right-0 text-center pointer-events-none"
      >
        <h3 className={`text-3xl font-serif font-bold transition-colors duration-300 ${titleColor}`}>
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
            className="absolute inset-0 rounded-xl bg-[#0f0f0f] border border-white/20 p-1.5 shadow-2xl"
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

// --- 5. EXPANDED MODAL CARD ---
function ExpandedCard({ item, onClose, isDarkMode }: { item: WorkItem, onClose: () => void, isDarkMode: boolean }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center perspective-[2000px] pointer-events-auto">
      
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        onClick={onClose}
        className="absolute inset-0 bg-black/80 backdrop-blur-md cursor-pointer"
        style={{ willChange: "opacity" }}
      />

      {/* MODAL CONTAINER */}
      <motion.div
        className="relative w-[95vw] md:w-auto h-[90vh] md:h-[80vh] aspect-[5/7] z-50"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        style={{ 
            transformStyle: 'preserve-3d', 
            willChange: 'transform, opacity' 
        }}
      >
        <motion.div 
            className="w-full h-full relative"
            initial={{ rotateY: 0 }}
            animate={{ rotateY: 180 }} 
            transition={{ 
                rotateY: { type: "spring", damping: 20, stiffness: 100 }
            }}
            style={{ transformStyle: 'preserve-3d' }}
        >
            {/* FRONT FACE */}
            <div 
                className="absolute inset-0 rounded-xl bg-[#0f0f0f] border border-white/20 p-1.5 shadow-2xl"
                style={{ backfaceVisibility: 'hidden' }}
            >
                <div className="relative w-full h-full rounded-lg overflow-hidden bg-black">
                    <ImageWithFallback 
                        src={item.frontImage} 
                        alt={item.company} 
                        className="w-full h-full object-cover" 
                        sizes="(max-width: 768px) 95vw, 600px"
                    />
                </div>
            </div>

            {/* BACK FACE */}
            <div 
                className="absolute inset-0 rounded-xl overflow-hidden shadow-2xl"
                style={{ 
                    backfaceVisibility: 'hidden', 
                    transform: 'rotateY(180deg)',
                }}
            >
                {/* Dynamically set Dark Mode based on the prop */}
                <CardBackContent item={item} isExpanded={true} onClose={onClose} darkMode={isDarkMode} />
            </div>
        </motion.div>
      </motion.div>
    </div>
  );
}