'use client';

import { motion } from 'motion/react';
import { useState, useEffect } from 'react';

// 1. ADD 'chat' TO TYPE
export type SectionName = 'home' | 'work' | 'project' | 'about' | 'contact' | 'chat'; 

interface NavigationProps {
  onShuffle?: () => void;
  isFlipped?: boolean;
  onNavigate?: (section: SectionName) => void;
  activeSection?: SectionName;
  onAboutClick?: () => void;
  onSecretTrigger: () => void;
}

export function Navigation({ 
  onShuffle, 
  isFlipped = false, 
  onNavigate, 
  activeSection,
  onSecretTrigger
}: NavigationProps) {
  
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [logoClicks, setLogoClicks] = useState(0);

  useEffect(() => {
    if (logoClicks > 0) {
      const timer = setTimeout(() => setLogoClicks(0), 1000);
      return () => clearTimeout(timer);
    }
  }, [logoClicks]);

  const handleLogoClick = () => {
    if (activeSection !== 'home') {
       onNavigate?.('home');
    }
    const next = logoClicks + 1;
    setLogoClicks(next);
    if (next === 5) {
      onSecretTrigger();
      setLogoClicks(0);
    }
  };

  // 2. ADD THE ORACLE TO NAV ITEMS
  // Note: I changed the Dealer icon to a more standard symbol or keep '⌘' if you prefer
  const navItems = [
    { name: 'Home', suit: '♠', section: 'home' as SectionName },
    { name: 'Work', suit: '♠', section: 'work' as SectionName },
    { name: 'Projects', suit: '♣', section: 'project' as SectionName },
    { name: 'About', suit: '♥', section: 'about' as SectionName },
    { name: 'Contact', suit: '♦', section: 'contact' as SectionName },
    { name: 'Dealerbot', suit: '⌘', section: 'chat' as SectionName }
  ];

  return (
    <>
      {/* DESKTOP NAVIGATION */}
      <div className="hidden lg:flex fixed inset-0 z-50 pointer-events-none p-12 flex-col justify-between">
        <div className="flex justify-between items-start relative z-10">
          
          {/* Logo */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ delay: 1, duration: 0.8 }}
            onClick={handleLogoClick}
            className={`${isFlipped ? 'text-black' : 'text-white'} font-serif text-2xl tracking-tighter pointer-events-auto cursor-pointer mix-blend-difference select-none`}
            whileTap={{ scale: 0.9 }}
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
                const hasWhiteBackground = isHovered || (isActive && hoveredIndex === null);
                
                const isRedSuit = ['♥','♦'].includes(item.suit);
                const isDealer = item.section === 'chat';
                
                let suitColor = 'text-black';
                if (isRedSuit) suitColor = 'text-red-600';
                if (isDealer) suitColor = 'text-[#ffb000] drop-shadow-[0_0_5px_rgba(255,176,0,0.5)]'; 

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
                      <span className={`text-xs font-serif transition-opacity duration-300 ${
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

        {/* Shuffle Button */}
        <div className="flex justify-between items-end overflow-hidden relative z-10">
             <div className={`text-[10px] uppercase tracking-[0.2em] font-mono ${isFlipped ? 'text-black' : 'text-white'}`}></div>
             <button onClick={onShuffle} className={`flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] font-mono pointer-events-auto cursor-pointer ${isFlipped ? 'text-black' : 'text-white'}`}>
                 <span>Shuffle Deck</span> ↻
             </button>
        </div>
      </div>

      {/* MOBILE SHUFFLE */}
      <button onClick={onShuffle} className="lg:hidden fixed top-6 right-6 z-50 bg-black/80 backdrop-blur border border-white/10 text-white p-3 rounded-full shadow-lg cursor-pointer">↻</button>

      {/* MOBILE NAVIGATION */}
      <div className="lg:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-sm pointer-events-auto">
        <nav className="flex items-center justify-between bg-black/80 backdrop-blur-xl border border-white/10 rounded-2xl p-2 shadow-2xl overflow-x-auto scrollbar-hide">
          {navItems.map((item) => {
             const isActive = activeSection === item.section;
             
             let suitColor = 'text-black';
             if (['♥','♦'].includes(item.suit)) suitColor = 'text-red-500';
             if (item.suit === '卌') suitColor = 'text-yellow-700';

             return (
               <button
                 key={item.name}
                 onClick={() => onNavigate?.(item.section)}
                 className={`flex flex-col items-center justify-center min-w-[60px] py-2 rounded-xl transition-all duration-300 cursor-pointer ${isActive ? 'bg-white text-black' : 'text-white/60'}`}
               >
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