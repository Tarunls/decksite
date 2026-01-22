'use client';

import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from 'motion/react';
import { useState, useRef } from 'react';

export function ContactSection({ onClose }: { onClose: () => void }) {
  const [copied, setCopied] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);
  
  const smoothX = useSpring(x, { damping: 25, stiffness: 150 });
  const smoothY = useSpring(y, { damping: 25, stiffness: 150 });

  const rotateX = useTransform(smoothY, [0, 1], [15, -15]); 
  const rotateY = useTransform(smoothX, [0, 1], [-15, 15]); 
  
  const bgX = useTransform(smoothX, [0, 1], [40, -40]);
  const bgY = useTransform(smoothY, [0, 1], [40, -40]);

  function handleMouseMove(event: React.MouseEvent) {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    x.set((event.clientX - rect.left) / rect.width);
    y.set((event.clientY - rect.top) / rect.height);
  }

  const handleCopy = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText("tarun.sankar@utdallas.edu");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.section
      ref={containerRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onMouseMove={handleMouseMove}
      className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-black/40 cursor-auto"
    >
      <motion.div 
        className="absolute inset-0 backdrop-blur-md bg-black/60 pointer-events-none" 
        style={{ translateZ: 0 }} 
      />

      {/* PARALLAX BACKGROUND */}
      <motion.div 
        style={{ x: bgX, y: bgY }}
        className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20"
      >
        <span className="absolute bottom-1/4 right-1/4 text-[12rem] font-serif text-red-600/10 select-none">♥</span>
      </motion.div>

      {/* MAIN 3D CONTAINER */}
      <motion.div
        style={{ 
          rotateX, 
          rotateY, 
          transformStyle: "preserve-3d",
        }}
        className="relative z-10 flex flex-col items-center justify-center text-center p-8"
      >
        <motion.p 
          style={{ translateZ: 50 }}
          className="text-red-500 font-mono text-[10px] tracking-[0.5em] mb-12"
        >
          ♦ CONTACT ♦
        </motion.p>

        <motion.div
          onClick={handleCopy}
          className="group relative cursor-pointer pointer-events-auto"
          style={{ transformStyle: "preserve-3d" }}
          whileHover={{ translateZ: 80 }} 
        >
          <h2 className="font-serif text-7xl md:text-9xl text-white tracking-tighter drop-shadow-2xl">
            Email
          </h2>
          
          <AnimatePresence>
            {copied && (
              <motion.span 
                initial={{ opacity: 0, scale: 0.8, translateZ: 0 }}
                animate={{ opacity: 1, scale: 1, translateZ: 120 }}
                exit={{ opacity: 0 }}
                className="absolute -top-12 left-1/2 -translate-x-1/2 text-green-400 font-mono text-[10px] uppercase tracking-widest bg-black/80 px-4 py-2 rounded-full border border-green-400/30 whitespace-nowrap"
              >
                Copied to Clipboard
              </motion.span>
            )}
          </AnimatePresence>
        </motion.div>

        {/* SOCIAL LINKS */}
        <div className="mt-20 flex gap-12 pointer-events-auto" style={{ transformStyle: "preserve-3d" }}>
          {[
            { name: "GitHub", url: "https://github.com/tarunls" },
            { name: "LinkedIn", url: "https://linkedin.com/in/tarunls" }
          ].map((link) => (
            <motion.a
              key={link.name} // Unique key fixed
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{ translateZ: 30 }}
              className="flex flex-col items-center gap-2 text-white/30 hover:text-white transition-colors"
            >
              <span className="text-xs font-mono uppercase tracking-[0.2em]">{link.name}</span>
              <div className="w-8 h-px bg-white/20" />
            </motion.a>
          ))}
        </div>
      </motion.div>

      <button
        onClick={onClose}
        className="absolute bottom-10 px-6 py-2 border border-white/10 rounded-full text-[10px] font-mono text-white/40 hover:text-white hover:bg-white/5 transition-all"
      >
        BACK TO DECK
      </button>
    </motion.section>
  );
}