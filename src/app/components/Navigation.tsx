'use client';

import { motion } from 'motion/react';
import { useState, useEffect } from 'react';

export type SectionName = 'home' | 'work' | 'project' | 'about' | 'contact';

interface NavigationProps {
  onShuffle?: () => void;
  isFlipped?: boolean;
  onNavigate?: (section: SectionName) => void;
  activeSection?: SectionName;
  onSecretTrigger: () => void;
}

export function Navigation({ 
  onShuffle, 
  isFlipped = false, 
  onNavigate, 
  activeSection,
  onSecretTrigger
}: NavigationProps) {
  
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

  const navItems = [
    { name: 'Home', suit: '♠', section: 'home' as SectionName },
    { name: 'Work', suit: '♠', section: 'work' as SectionName },
    { name: 'Projects', suit: '♣', section: 'project' as SectionName },
    { name: 'About', suit: '♥', section: 'about' as SectionName },
    { name: 'Contact', suit: '♦', section: 'contact' as SectionName }
  ];

  return (
    <div className={activeSection === 'about' || activeSection === 'contact' ? 'invisible' : undefined}>
      {/* DESKTOP NAVIGATION */}
      <div className="hidden lg:flex fixed inset-0 z-50 pointer-events-none p-12 flex-col justify-between">
        <div className="flex justify-between items-start relative z-10">
          
          {/* Logo */}
          <motion.button
            type="button"
            aria-label="Home"
            initial={{ opacity: 0, x: -20 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ delay: 1, duration: 0.8 }}
            onClick={handleLogoClick}
            className={`${isFlipped ? 'text-black' : 'text-white'} font-serif text-2xl tracking-tighter pointer-events-auto cursor-pointer mix-blend-difference select-none`}
            whileTap={{ scale: 0.9 }}
          >
            TS<span className="text-xs align-top opacity-50 font-sans ml-1">©</span>
          </motion.button>

          <motion.nav 
            aria-label="Main navigation"
            initial={{ opacity: 0, y: -20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ delay: 1.2, duration: 0.8 }}
            className="pointer-events-auto"
          >
            <div className="flex items-center gap-0 p-1 rounded-xl border border-white/10 bg-black/85 shadow-lg">
              {navItems.filter(i => i.section !== 'home').map((item) => {
                const isActive = activeSection === item.section;
                const isRedSuit = ['♥','♦'].includes(item.suit);
                
                let suitColor = 'text-black';
                if (isRedSuit) suitColor = 'text-red-600';

                return (
                  <button 
                    type="button"
                    key={item.name}
                    aria-current={isActive ? 'page' : undefined}
                    onClick={() => onNavigate?.(item.section)}
                    className={`group relative px-6 py-2.5 text-sm uppercase tracking-widest font-medium transition-colors duration-100 cursor-pointer focus:outline-none rounded-lg ${
                      isActive ? 'bg-white text-black' : 'text-white/60 hover:bg-white hover:text-black'
                    }`}
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      {item.name}
                      <span aria-hidden="true" className={`text-xs font-serif transition-opacity duration-100 ${suitColor} ${
                          isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
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
      <button type="button" onClick={onShuffle} aria-label="Shuffle deck" className="lg:hidden fixed top-[max(1rem,env(safe-area-inset-top))] right-4 z-50 flex h-11 w-11 items-center justify-center bg-black/80 backdrop-blur border border-white/10 text-white rounded-full shadow-lg cursor-pointer">↻</button>

      {/* MOBILE NAVIGATION */}
      <div className="lg:hidden fixed bottom-[calc(1rem+env(safe-area-inset-bottom))] inset-x-3 mx-auto z-50 max-w-sm pointer-events-auto">
        <nav aria-label="Main navigation" className="grid grid-cols-5 bg-black/90 backdrop-blur-xl border border-white/10 rounded-2xl p-1.5 shadow-2xl">
          {navItems.map((item) => {
             const isActive = activeSection === item.section;
             
             let suitColor = 'text-black';
             if (['♥','♦'].includes(item.suit)) suitColor = 'text-red-500';
             if (item.suit === '卌') suitColor = 'text-yellow-700';

             return (
               <button
                 type="button"
                 key={item.name}
                 aria-current={isActive ? 'page' : undefined}
                 onClick={() => onNavigate?.(item.section)}
                 className={`flex min-w-0 min-h-14 flex-col items-center justify-center py-2 rounded-xl transition-colors duration-300 cursor-pointer ${isActive ? 'bg-white text-black' : 'text-white/60'}`}
               >
                 <span aria-hidden="true" className={`text-sm transition-opacity duration-300 ${isActive ? `opacity-100 ${suitColor}` : 'opacity-0'}`}>
                    {item.suit}
                 </span>
                 <span className="text-[10px] uppercase tracking-wider font-bold mt-1">
                   {item.name}
                 </span>
               </button>
             )
          })}
        </nav>
      </div>
    </div>
  );
}
