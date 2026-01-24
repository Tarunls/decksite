'use client';

import { motion } from 'motion/react';
import { useState } from 'react';

export type SectionName = 'home' | 'work' | 'project' | 'about' | 'contact';

interface NavigationProps {
  onShuffle?: () => void;
  isFlipped?: boolean;
  onNavigate?: (section: SectionName) => void;
  activeSection?: SectionName;
  onAboutClick?: () => void;
}

export function Navigation({ onShuffle, isFlipped = false, onNavigate, activeSection }: NavigationProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const navItems = [
    { name: 'Home', suit: '♠', section: 'home' as SectionName },
    { name: 'Work', suit: '♠', section: 'work' as SectionName },
    { name: 'Projects', suit: '♣', section: 'project' as SectionName },
    { name: 'About', suit: '♥', section: 'about' as SectionName },
    { name: 'Contact', suit: '♦', section: 'contact' as SectionName },
  ];

  return (
    <>
      {/* --- DESKTOP NAVIGATION --- */}
      <div className="hidden lg:flex fixed inset-0 z-50 pointer-events-none p-12 flex-col justify-between">
        {/* TOP ROW */}
        <div className="flex justify-between items-start relative z-10">
          <motion.div 
            initial={{ opacity: 0, x: -20 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ delay: 1, duration: 0.8 }}
            onClick={() => onNavigate?.('home')}
            className={`${isFlipped ? 'text-black' : 'text-white'} font-serif text-2xl tracking-tighter pointer-events-auto cursor-pointer mix-blend-difference`}
          >
            TS<span className="text-xs align-top opacity-50 font-sans ml-1">©</span>
          </motion.div>

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
              {navItems.filter(i => i.section !== 'home').map((item, index) => {
                const isActive = activeSection === item.section;
                const isHovered = hoveredIndex === index;
                // It is "active" (white bg) if hovered OR if it's the current section
                const hasWhiteBackground = isHovered || (isActive && hoveredIndex === null);

                // Determine Suit Color (Red or Black) - only matters if visible
                const suitColor = ['♥','♦'].includes(item.suit) ? 'text-red-600' : 'text-black';

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
                      
                      {/* --- UPDATED SUIT SPAN --- */}
                      <span className={`text-xs font-serif transition-opacity duration-300 ${
                         // If background is white (Hovered or Active), Opacity 1. Otherwise 0.
                         hasWhiteBackground ? `opacity-100 ${suitColor}` : 'opacity-0'
                      }`}>
                        {item.suit}
                      </span>

                    </span>
                  </button>
                );
              })}
            </div>
          </motion.nav>
        </div>

        {/* BOTTOM ROW (Shuffle) */}
        <div className="flex justify-between items-end overflow-hidden relative z-10">
          <div className={`text-[10px] uppercase tracking-[0.2em] font-mono ${isFlipped ? 'text-black' : 'text-white'}`}></div>
          <button 
            onClick={onShuffle} 
            className={`flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] font-mono pointer-events-auto cursor-pointer ${isFlipped ? 'text-black' : 'text-white'}`}
          >
             <span>Shuffle Deck</span> ↻
          </button>
        </div>
      </div>

      {/* --- MOBILE NAVIGATION --- */}
      <div className="lg:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-sm">
         <div className="absolute -top-12 right-0">
            <button 
              onClick={onShuffle}
              className="bg-black/80 backdrop-blur border border-white/10 text-white p-3 rounded-full shadow-lg"
            >
              ↻
            </button>
         </div>

        <nav className="flex items-center justify-between bg-black/80 backdrop-blur-xl border border-white/10 rounded-2xl p-2 shadow-2xl">
          {navItems.map((item) => {
             const isActive = activeSection === item.section;
             // Determine color if active
             const suitColor = ['♥','♦'].includes(item.suit) ? 'text-red-500' : 'text-black';

             return (
               <button
                 key={item.name}
                 onClick={() => onNavigate?.(item.section)}
                 className={`flex flex-col items-center justify-center w-full py-2 rounded-xl transition-all duration-300 ${isActive ? 'bg-white text-black' : 'text-white/60'}`}
               >
                 {/* --- MOBILE UPDATED SUIT SPAN --- */}
                 {/* Only visible if Active (since mobile has no hover) */}
                 <span className={`text-sm transition-opacity duration-300 ${isActive ? `opacity-100 ${suitColor}` : 'opacity-0'}`}>
                    {item.suit}
                 </span>
                 <span className="text-[8px] uppercase tracking-wider font-bold mt-1">
                   {item.name}
                 </span>
               </button>
             )
          })}
        </nav>
      </div>
    </>
  );
}