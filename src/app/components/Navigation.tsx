'use client';

import { motion } from 'motion/react';
import { useState } from 'react';

// Define types so App.tsx knows what sections exist
export type SectionName = 'home' | 'work' | 'about' | 'contact';

interface NavigationProps {
  onShuffle?: () => void;
  isFlipped?: boolean;
  // Generic handler to switch sections
  onNavigate?: (section: SectionName) => void;
  // Tells the nav which button should look "active"
  activeSection?: SectionName;
  onAboutClick?: () => void;
}

export function Navigation({ onShuffle, isFlipped = false, onNavigate, activeSection, onAboutClick }: NavigationProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const navItems = [
    { name: 'Work', suit: '♠', section: 'work' as SectionName },
    { name: 'About', suit: '♥', section: 'about' as SectionName },
    { name: 'Contact', suit: '♦', section: 'contact' as SectionName },
  ];

  const isContactActive = activeSection === 'contact';

  return (
    <div className="fixed inset-0 z-50 pointer-events-none p-6 md:p-12 flex flex-col justify-between">
      

      {/* TOP ROW - Added relative z-10 to sit on top of blur */}
      <div className="flex justify-between items-start relative z-10">
        
        {/* Brand - Clicking this resets to Home */}
        <motion.div 
            initial={{ opacity: 0, x: -20 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ delay: 1, duration: 0.8 }}
            onClick={() => onNavigate?.('home')}
            className={`${isFlipped ? 'text-black' : 'text-white'} font-serif text-2xl tracking-tighter pointer-events-auto cursor-pointer mix-blend-difference`}
        >
          TS<span className="text-xs align-top opacity-50 font-sans ml-1">©</span>
        </motion.div>

        {/* Navigation Menu */}
        <motion.nav 
            initial={{ opacity: 0, y: -20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ delay: 1.2, duration: 0.8 }}
            className="pointer-events-auto"
        >
          <div 
            className="flex items-center gap-0 p-1 rounded-xl border border-white/10 bg-black/40 backdrop-blur-md shadow-2xl"
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {navItems.map((item, index) => {
              const isActive = activeSection === item.section;
              const isHovered = hoveredIndex === index;
              
              const hasWhiteBackground = isHovered || (isActive && hoveredIndex === null);

              return (
                <button 
                  key={item.name}
                  onClick={() => onNavigate?.(item.section)}
                  onMouseEnter={() => setHoveredIndex(index)}
                  className="relative px-6 py-2.5 text-sm uppercase tracking-widest font-medium transition-colors duration-200 cursor-pointer focus:outline-none"
                >
                  {hasWhiteBackground && (
                    <motion.div
                      layoutId="active-card"
                      className="absolute inset-0 bg-white rounded-lg shadow-sm"
                      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    />
                  )}
                  <span className={`relative z-10 flex items-center gap-2 transition-colors duration-200 ${
                    hasWhiteBackground ? 'text-black' : 'text-white/60'
                  }`}>
                    {item.name}
                    <span className={`text-xs font-serif transition-opacity duration-200 ${
                      hasWhiteBackground ? 'opacity-100' : 'opacity-0'
                    } ${['♥','♦'].includes(item.suit) ? 'text-red-600' : 'text-black'}`}>
                      {item.suit}
                    </span>
                  </span>
                </button>
              );
            })}
          </div>
        </motion.nav>
      </div>

      {/* BOTTOM ROW - Added relative z-10 to sit on top of blur */}
      <div className="flex justify-between items-end overflow-hidden relative z-10">
        
        {/* Est Date */}
        <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ delay: 1.4 }}
            className={`text-[10px] uppercase tracking-[0.2em] font-mono transition-colors duration-500 ${isFlipped ? 'text-black' : 'text-white'}`}
        >
           SECRET
        </motion.div>
        
        {/* SHUFFLE BUTTON */}
        <motion.button 
            onClick={onShuffle} 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ delay: 1.5 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] font-mono pointer-events-auto cursor-pointer focus:outline-none transition-colors duration-500 ${isFlipped ? 'text-black hover:text-black' : 'text-white hover:text-white'}`}
        >
           <span>Shuffle Deck</span>
           <motion.span 
             animate={{ rotate: [0, 180, 0] }} 
             transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
           >
             ↻
           </motion.span>
        </motion.button>
      </div>
    </div>
  );
}