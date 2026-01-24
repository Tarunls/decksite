'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, PanInfo, Transition } from 'motion/react';
import { projects } from '../../lib/constants'; // Ensure this path is correct

// --- 1. FRONT FACE ---
function CardFront({ project, isFlipped }: { project: any, isFlipped: boolean }) {
  const bg = isFlipped ? "bg-[#fafafa]" : "bg-[#141414]";
  const textColor = isFlipped ? "text-slate-900" : "text-white";
  const subText = isFlipped ? "text-black/40" : "text-white/40";
  const lineColor = isFlipped ? "bg-black/10" : "bg-white/10";
  const borderColor = isFlipped ? "border-black/5" : "border-white/10";
  const suitColor = ['♥','♦'].includes(project.suit) ? "text-red-600" : textColor;

  return (
    <div 
      className={`absolute inset-0 w-full h-full flex flex-col justify-between p-6 rounded-xl border ${bg} ${borderColor} shadow-2xl`}
      style={{ backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden', transform: 'rotateY(0deg)' }}
    >
      <div className="flex justify-between items-start">
         <span className={`font-mono text-[10px] uppercase tracking-widest ${subText}`}>{project.category}</span>
         <span className={`text-2xl font-serif ${suitColor}`}>{project.suit}</span>
      </div>
      <div className="text-center space-y-4">
        <h3 className={`font-serif text-3xl font-bold leading-none tracking-tight ${textColor}`}>{project.title}</h3>
        <div className={`w-12 h-[2px] ${lineColor} mx-auto`} />
      </div>
      <div className="flex justify-between items-end rotate-180">
         <span className={`font-mono text-[10px] uppercase tracking-widest ${subText}`}>{project.category}</span>
         <span className={`text-2xl font-serif ${suitColor}`}>{project.suit}</span>
      </div>
      <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/5 to-white/0 rounded-xl pointer-events-none" />
    </div>
  );
}

// --- 2. BACK FACE ---
function CardBack({ project, isFlipped, onClose }: { project: any, isFlipped: boolean, onClose: () => void }) {
  const bg = isFlipped ? "bg-[#f0f0f0]" : "bg-[#0a0a0a]";
  const textColor = isFlipped ? "text-slate-900" : "text-white";
  const subText = isFlipped ? "text-black/50" : "text-white/50";
  const tagBg = isFlipped ? "bg-black/5 text-black/60" : "bg-white/10 text-white/70";
  const borderColor = isFlipped ? "border-black/10" : "border-white/10";

  return (
    <div 
      className={`absolute inset-0 w-full h-full flex flex-col p-8 rounded-xl border ${bg} ${borderColor} shadow-2xl overflow-scroll`}
      style={{ backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
    >
      <button 
        onClick={(e) => { e.stopPropagation(); onClose(); }}
        className={`absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full border ${borderColor} ${textColor} hover:scale-110 transition-transform cursor-pointer z-50`}
      >
        ✕
      </button>

      <div className="mt-4">
        <div className={`text-[10px] font-mono uppercase tracking-widest mb-4 ${subText}`}>Confidential</div>
        <h3 className={`text-2xl font-serif font-bold mb-4 ${textColor}`}>{project.title}</h3>
        <p className={`text-sm leading-relaxed mb-6 ${subText}`}>{project.description}</p>
      </div>

      <div className="mt-auto">
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag: string) => (
            <span key={tag} className={`text-[9px] font-mono uppercase px-2 py-1 rounded ${tagBg}`}>{tag}</span>
          ))}
        </div>
        <a href={project.link} target="_blank" rel="noopener noreferrer" className={`block w-full text-center py-3 text-xs font-mono uppercase tracking-widest border ${borderColor} rounded hover:bg-white/10 transition-colors ${textColor}`}>
          View Project
        </a>
      </div>
    </div>
  );
}

// --- 3. INSPECTABLE CARD ---
interface Position { x: number; y: number; r: number; }

interface InspectableCardProps {
  project: any;
  index: number;
  onSelect: () => void;
  onClose: () => void;
  isSelected: boolean;
  isOtherSelected: boolean;
  position: Position;
  onUpdatePosition: (index: number, x: number, y: number) => void;
  containerRef: React.RefObject<any>;
  isFlipped: boolean;
  isReducedMotion: boolean; // <--- Added Prop
}

function InspectableCard({ 
  project, 
  index, 
  onSelect, 
  onClose,
  isSelected,       
  isOtherSelected,  
  position, 
  onUpdatePosition, 
  containerRef,
  isFlipped,
  isReducedMotion 
}: InspectableCardProps) {
  
  const isDragging = useRef(false);

  // --- ANIMATION LOGIC ---
  let animateState = {};
  
  if (isReducedMotion) {
      if (isSelected) {
          animateState = { 
              x: 0, y: 0, scale: 1.1, zIndex: 100, rotateY: 180, rotateZ: 0,
              transition: { duration: 0.5, ease: "easeInOut" }
          };
      } else if (isOtherSelected) {
          animateState = { opacity: 0, pointerEvents: "none" };
      } else {
          animateState = { 
              x: position.x, y: position.y, scale: 1, zIndex: index, opacity: 1, rotateY: 0, rotateZ: 0,
              transition: { duration: 0.5 }
          };
      }
  } 
  else {
      if (isSelected) {
        animateState = {
          x: 0, y: 0, rotateZ: 0, rotateY: 180, scale: 1.5, zIndex: 100, opacity: 1,
          transition: { type: "spring", stiffness: 200, damping: 25 }
        };
      } else if (isOtherSelected) {
        animateState = {
          x: position.x, y: 1000, rotateZ: position.r, rotateY: 0, scale: 0.8, opacity: 1, zIndex: 0,
          transition: { duration: 0.5 }
        };
      } else {
        // DEALING STATE
        animateState = {
          x: position.x, 
          y: position.y, 
          rotateZ: position.r, 
          rotateY: 0, 
          scale: 1, 
          opacity: 1, 
          zIndex: index,
          // SLOWER DELAY FOR DEALER EFFECT
          transition: { duration: 0.8, ease: "easeOut", delay: index * 0.25 }
        };
      }
  }

  const handleDragEnd = (event: any, info: PanInfo) => {
    setTimeout(() => { isDragging.current = false; }, 100);
    const newX = position.x + info.offset.x;
    const newY = position.y + info.offset.y;
    onUpdatePosition(index, newX, newY);
  };

  return (
    <motion.div
      drag={!isReducedMotion && !isSelected && !isOtherSelected} 
      dragConstraints={containerRef}
      dragElastic={0.2}
      
      onDragStart={() => (isDragging.current = true)}
      onDragEnd={handleDragEnd}
      onTap={() => { if (!isDragging.current) isSelected ? onClose() : onSelect(); }}

      // Initial Deal Animation
      initial={isReducedMotion 
        ? { opacity: 0, x: position.x, y: position.y, scale: 0.9 } 
        : { x: 0, y: 1000, rotateZ: position.r + 90, rotateY: 0, scale: 0.8 }
      }
      
      animate={animateState}

      whileHover={(!isReducedMotion && !isSelected && !isOtherSelected) ? { scale: 1.1, zIndex: 50, cursor: "pointer" } : {}}
      whileDrag={{ scale: 1.15, zIndex: 100, cursor: "grabbing" }}
      
      style={{ transformStyle: "preserve-3d", perspective: "1000px" }} 
      className="absolute w-64 h-80 rounded-xl select-none"
    >
      <CardFront project={project} isFlipped={isFlipped} />
      <CardBack project={project} isFlipped={isFlipped} onClose={onClose} />
    </motion.div>
  );
}

// --- MAIN WRAPPER ---
interface ProjectContentProps {
  onClose: () => void;
  isFlipped?: boolean;
  isReducedMotion?: boolean; // <--- Accepted Prop
}

export default function ProjectContent({ onClose, isFlipped = false, isReducedMotion = false }: ProjectContentProps) {
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const containerRef = useRef(null);
  
  // Use state to hold positions. Initialize with 0s to avoid hydration errors, calculate in useEffect.
  const [positions, setPositions] = useState<Position[]>(
    projects.map(() => ({ x: 0, y: 0, r: 0 }))
  );

  // --- RESPONSIVE DEALING LOGIC ---
  useEffect(() => {
    const calculatePositions = () => {
      const isMobile = window.innerWidth < 768;
      
      const newPositions = projects.map((_, index) => {
        // Calculate center offset
        const centerOffset = index - (projects.length - 1) / 2;

        if (isMobile) {
          // MOBILE: Stack vertically with slight overlap (Deck Style)
          // Ensures they don't fly off screen
          return {
            x: centerOffset * 10,  // Very slight horizontal offset
            y: centerOffset * 60,  // Vertical stacking
            r: centerOffset * 3    // Gentle rotation
          };
        } else {
          // DESKTOP: Scatter horizontally
          return {
            x: centerOffset * 250, // Wide spread
            y: (index % 2 === 0 ? -1 : 1) * 30, // Zig-zag Y
            r: (index % 2 === 0 ? -5 : 5)       // Zig-zag Rotation
          };
        }
      });
      setPositions(newPositions);
    };

    calculatePositions();
    window.addEventListener('resize', calculatePositions);
    return () => window.removeEventListener('resize', calculatePositions);
  }, []); // Run once on mount

  const updatePosition = (index: number, newX: number, newY: number) => {
    setPositions(prev => {
      const newPos = [...prev];
      newPos[index] = { ...newPos[index], x: newX, y: newY };
      return newPos;
    });
  };

  return (
    <motion.div 
      ref={containerRef}
      className="absolute inset-0 z-40 flex items-center justify-center overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* BACKDROP */}
      <motion.div 
        className="absolute inset-0 bg-black/0 pointer-events-none transition-colors duration-500"
        animate={{ backgroundColor: selectedId ? "rgba(0,0,0,0.6)" : "rgba(0,0,0,0)" }}
        style={{ backdropFilter: selectedId ? "blur(8px)" : "blur(0px)" }}
      />

      {/* CLOSE AREA (Clicking outside cards) */}
      <div 
        onClick={() => {
            if (selectedId) setSelectedId(null);
            else onClose();
        }}
        className="absolute inset-0 cursor-pointer"
      />

      {/* HINT TEXT */}
      {!selectedId && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5, duration: 1 }}
          className={`absolute bottom-24 md:bottom-12 font-mono text-[10px] uppercase tracking-[0.4em] pointer-events-none select-none ${isFlipped ? 'text-black/30' : 'text-white/30'}`}
        >
          {isReducedMotion ? "Tap to Inspect" : "Inspect the Deck"}
        </motion.div>
      )}

      {/* CARDS CONTAINER */}
      <div className="absolute inset-0 pointer-events-none perspective-[1200px] flex items-center justify-center">
        {projects.map((project, index) => (
          <div key={project.id} className="absolute pointer-events-auto flex items-center justify-center">
             <InspectableCard 
                project={project} 
                index={index}
                position={positions[index]} 
                onUpdatePosition={updatePosition} 
                containerRef={containerRef}
                
                isSelected={selectedId === project.id}
                isOtherSelected={selectedId !== null && selectedId !== project.id}
                
                onSelect={() => setSelectedId(project.id)}
                onClose={() => setSelectedId(null)}
                
                isFlipped={isFlipped} 
                isReducedMotion={isReducedMotion} // Pass down prop
             />
          </div>
        ))}
      </div>
    </motion.div>
  );
}