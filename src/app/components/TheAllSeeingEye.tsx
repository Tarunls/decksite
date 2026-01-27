'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export function TheAllSeeingEye({ isActive }: { isActive: boolean }) {
  // Random movement logic for the pupil
  const [pupilPos, setPupilPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // If active, stare straight ahead. If not, look around.
    if (isActive) {
      setPupilPos({ x: 0, y: 0 });
      return;
    }

    const moveEye = () => {
      // Random X/Y between -3 and 3 pixels
      const x = (Math.random() - 0.5) * 6; 
      const y = (Math.random() - 0.5) * 4;
      setPupilPos({ x, y });

      // Random delay between movements (blink/saccade timing)
      const nextMove = Math.random() * 2000 + 500;
      return setTimeout(moveEye, nextMove);
    };

    const timeoutId = moveEye();
    return () => clearTimeout(timeoutId);
  }, [isActive]);

  return (
    <div className="relative w-6 h-6 flex items-center justify-center">
      {/* 1. THE AURA (Outer Blur) */}
      <motion.div 
        className="absolute inset-0 rounded-full bg-white blur-md"
        animate={{ 
          opacity: isActive ? 0.6 : 0, 
          scale: isActive ? 1.5 : 0.8 
        }}
        transition={{ duration: 0.5 }}
      />

      {/* 2. THE SCLERA (Eye Ball) */}
      <div 
        className={`
          relative w-6 h-4 rounded-[100%] overflow-hidden border transition-all duration-500
          ${isActive 
            ? 'bg-white border-white' 
            : 'bg-transparent border-white/40'
          }
        `}
      >
        {/* 3. THE IRIS & PUPIL (Moving Part) */}
        <motion.div
          animate={{ x: pupilPos.x, y: pupilPos.y }}
          transition={{ type: "spring", stiffness: 100, damping: 15 }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <div className={`
            w-2 h-2 rounded-full transition-colors duration-300
            ${isActive ? 'bg-black' : 'bg-white/80'}
          `} />
        </motion.div>
      </div>
      
      {/* 4. BLINK LID */}
      <motion.div 
         className="absolute inset-0 bg-black z-10"
         initial={{ scaleY: 0 }}
         animate={{ scaleY: [0, 1, 0] }}
         transition={{ 
           duration: 0.2, 
           repeat: Infinity, 
           repeatDelay: Math.random() * 5 + 2 // Random blinking every 2-7 seconds
         }}
         style={{ transformOrigin: 'top' }}
      />
    </div>
  );
}