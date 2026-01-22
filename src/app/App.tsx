'use client';

import { useState, useCallback, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Navigation, SectionName } from './components/Navigation';
import { Hero3DCard } from './components/Hero3DCard';
import { BackgroundCards } from './components/BackgroundCards';
import { AboutOverlay } from './components/AboutOverlay';
import { WorkSection } from './components/WorkSection'; 
import { ContactSection } from './components/ContactSection';

// --- NEW "SPOTLIGHT SCANNER" LOADER ---
function LoadingScreen() {
  const suits = ["♠", "♥", "♣", "♦"];
  
  return (
    <motion.div
      key="loader"
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black"
      initial={{ opacity: 1 }}
      exit={{ 
        opacity: 0, 
        y: -50, 
        transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } 
      }}
    >
      <div className="relative">
        <div className="flex gap-8 md:gap-12 text-zinc-800 text-5xl md:text-7xl font-serif select-none">
          {suits.map((suit, i) => (
            <span key={i}>{suit}</span>
          ))}
        </div>

        <motion.div
          className="absolute inset-0 flex gap-8 md:gap-12 text-5xl md:text-7xl font-serif select-none"
          initial={{ clipPath: "inset(0 100% 0 0)" }} 
          animate={{ clipPath: "inset(0 0% 0 0)" }}   
          transition={{ 
            duration: 1.5, 
            ease: "easeInOut",
            repeat: Infinity,       
            repeatType: "mirror",   
            repeatDelay: 0.5 
          }}
        >
          {suits.map((suit, i) => (
            <span 
              key={i} 
              className={`${(i === 1 || i === 3) ? "text-red-600 drop-shadow-[0_0_15px_rgba(220,38,38,0.8)]" : "text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.8)]"}`}
            >
              {suit}
            </span>
          ))}
        </motion.div>
      </div>

      <div className="mt-12 w-48 h-0.5 bg-zinc-900 rounded-full overflow-hidden relative">
        <motion.div 
          className="absolute inset-0 bg-white shadow-[0_0_10px_white]"
          initial={{ x: "-100%" }}
          animate={{ x: "0%" }}
          transition={{ duration: 2.2, ease: "easeInOut" }}
        />
      </div>
      
      <motion.p 
        className="mt-4 text-[10px] font-mono uppercase tracking-[0.3em] text-zinc-500"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        Initializing Deck...
      </motion.p>
    </motion.div>
  );
}

export default function App() {
  const heroCardUrl = 'cover.jpg';
  const heroBackUrl = 'anticover.jpeg'; 
  const backgroundCardUrl = '/cards/time702-copy_51164800263_l.jpg';

  const [isLoading, setIsLoading] = useState(true);
  const [shuffleCount, setShuffleCount] = useState(0);
  const [isShuffling, setIsShuffling] = useState(false);
  const [isFlipped, setIsFlipped] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<SectionName>('home');


  const preloadImage = (src: string) => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.src = src;
      img.onload = resolve;
      img.onerror = reject;
    });
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2800);
    return () => clearTimeout(timer);
  }, []);

  const handleShuffleTrigger = useCallback(() => {
    if (isShuffling) return;
    setIsShuffling(true);
    setTimeout(() => {
      setShuffleCount(prev => prev + 1);
      setTimeout(() => setIsShuffling(false), 50);
    }, 600); 
  }, [isShuffling]);

  const handleFlipTrigger = useCallback(() => {
    if (isShuffling) return;
    setIsShuffling(true);
    setTimeout(() => {
      setIsFlipped(prev => !prev);
      setTimeout(() => {
         setIsShuffling(false);
      }, 300);
    }, 300); 
  }, [isShuffling]);

  const handleNavigation = (section: SectionName) => {
    if (section === 'about') {
      setIsAboutOpen(true);
    } else {
      setActiveSection(section);
      setIsAboutOpen(false); 
    }
  };

  const [imagesLoaded, setImagesLoaded] = useState(false);

  // Define all images you want to preload
  const criticalImages = [
    'cover.jpg',
    'anticover.jpg',
    '/cards/time702-copy_51164800263_l.jpg',
    // Add your work experience card images here
    '/work/project1.jpg',
    '/work/project2.jpg',
  ];

  useEffect(() => {
    // 1. Start preloading all images
    const imagePromises = criticalImages.map(src => preloadImage(src));

    // 2. Set a minimum duration for the loader (the 2.8s you had)
    const timerPromise = new Promise(resolve => setTimeout(resolve, 2800));

    // 3. Wait for BOTH images and the timer to finish
    Promise.all([...imagePromises, timerPromise])
      .then(() => {
        setIsLoading(false);
      })
      .catch(err => {
        console.error("Failed to preload images", err);
        // Still hide loader so user isn't stuck forever
        setIsLoading(false); 
      });
  }, []);

  return (
    <div className="relative min-h-screen w-full overflow-hidden transition-colors duration-1000 bg-black">
      
      <AnimatePresence mode="wait">
        {isLoading && <LoadingScreen />}
      </AnimatePresence>

      <motion.div
        className="absolute inset-0"
        initial={false}
        animate={{
            background: isFlipped 
                ? 'radial-gradient(ellipse at center, #ffffff 0%, #f0f0f0 50%, #e0e0e0 100%)' 
                : 'radial-gradient(ellipse at center, #1a1a1a 0%, #0a0a0a 50%, #000000 100%)' 
        }}
        transition={{ duration: 1 }} 
      />

      <motion.div
        className="absolute inset-0"
        animate={{
            opacity: isFlipped ? 0.5 : 0.3,
            background: isFlipped 
                ? 'radial-gradient(circle at 30% 50%, rgba(200, 200, 255, 0.4) 0%, transparent 50%)' 
                : 'radial-gradient(circle at 30% 50%, rgba(30, 30, 50, 0.4) 0%, transparent 50%)'
        }}
        transition={{ duration: 1 }}
      />

      <BackgroundCards 
          imageUrl={backgroundCardUrl} 
          shuffleCount={shuffleCount}
          isShuffling={isShuffling}
          isFlipped={isFlipped} 
      />

      <AboutOverlay 
        isOpen={isAboutOpen} 
        onClose={() => setIsAboutOpen(false)} 
        isFlipped={isFlipped}
      />

      <Navigation 
        onShuffle={handleShuffleTrigger} 
        isFlipped={isFlipped} 
        activeSection={activeSection} 
        onNavigate={handleNavigation} 
        onAboutClick={() => setIsAboutOpen(true)} 
      />

      {/* --- MAIN CONTENT SWITCHER --- */}
      <AnimatePresence mode="wait">
        
        {/* VIEW 1: HOME */}
        {activeSection === 'home' && (
          <motion.div 
            key="home-section"
            className="relative min-h-screen grid grid-cols-1 lg:grid-cols-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.5 } }}
          >
            <div className="flex items-center justify-center lg:justify-end px-8 lg:px-16 py-32 lg:py-0">
              <motion.div className="max-w-2xl lg:pr-20 pointer-events-none">
                <motion.p className="text-white tracking-[0.3em] uppercase mb-4 text-sm font-light mix-blend-difference">
                  Hi, I'm
                </motion.p>
                <motion.h1
                  className="text-white text-6xl md:text-7xl lg:text-8xl mb-8 mix-blend-difference" 
                  style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, lineHeight: 1.1 }}
                >
                  Tarun <br /> Sankar
                </motion.h1>
                <motion.div className="h-px bg-gradient-to-r from-white via-white/50 to-transparent mix-blend-difference" />
              </motion.div>
            </div>

            <div className="flex items-center justify-center lg:justify-start px-8 lg:px-16 py-32 lg:py-0">
              <Hero3DCard 
                  imageUrl={heroCardUrl} 
                  backImageUrl={heroBackUrl}
                  isFlipped={isFlipped}       
                  onFlip={handleFlipTrigger}  
              />
            </div>
          </motion.div>
        )}

        {/* VIEW 2: WORK */}
        {activeSection === 'work' && (
          <WorkSection 
              key="work-section" 
              onGoHome={() => setActiveSection('home')} 
              isFlipped={isFlipped}  // <--- ADD THIS LINE
          />
        )}

        {/* VIEW 3: CONTACT (NEW) */}
        {/* VIEW 3: CONTACT */}
        {activeSection === 'contact' && (
           <ContactSection onClose={() => setActiveSection('home')} />
        )}

      </AnimatePresence>
      
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{
            background: isFlipped 
                ? 'radial-gradient(ellipse at center, transparent 0%, rgba(255,255,255,0) 70%, rgba(255,255,255,0.8) 100%)'
                : 'radial-gradient(ellipse at center, transparent 0%, rgba(0,0,0,0.4) 70%, rgba(0,0,0,0.8) 100%)'
        }}
        transition={{ duration: 1 }}
      />
      
      <motion.div
        className="absolute inset-0 pointer-events-none opacity-5"
        animate={{ backgroundPosition: ['0% 0%', '0% 100%'] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
        style={{
          backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.03) 2px, rgba(255,255,255,0.03) 4px)',
          backgroundSize: '100% 4px',
        }}
      />
    </div>
  );
}