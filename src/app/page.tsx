'use client';
// Hi mom I'm Famous!
import { useState, useCallback, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Navigation, SectionName } from './components/Navigation';
import { Hero3DCard } from './components/Hero3DCard';
import { BackgroundCards } from './components/BackgroundCards';
import { AboutOverlay } from './components/AboutOverlay';
import { WorkSection } from './components/WorkSection'; 
import { ContactSection } from './components/ContactSection';
import { cardImages, antiCardImages } from '../lib/constants';
import { cinzel } from '../lib/fonts';

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
  const heroCardUrl = '/cover.jpg';
  const heroBackUrl = '/anticover.jpeg'; 
  const backgroundCardUrl = '/cards/time702-copy_51164800263_l.jpg';

  const [isLoading, setIsLoading] = useState(true);
  const [shuffleCount, setShuffleCount] = useState(0);
  const [isShuffling, setIsShuffling] = useState(false);
  const [isFlipped, setIsFlipped] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<SectionName>('home');

  // Unified Fail-Safe Preloader
  useEffect(() => {
    const criticalImages = [
      heroCardUrl,
      heroBackUrl,
      backgroundCardUrl,
      ...cardImages,
      ...antiCardImages
    ];

    const preloadAll = async () => {
      const promises = criticalImages.map(src => {
        return new Promise((resolve) => {
          const img = new Image();
          img.src = src;
          img.onload = () => resolve(src);
          img.onerror = () => {
            console.error(`❌ Missing image: ${src}`);
            resolve(null); // Resolve anyway so loader doesn't hang
          };
        });
      });

      // Wait for images AND minimum animation time
      await Promise.all([
        Promise.all(promises),
        new Promise(resolve => setTimeout(resolve, 2800))
      ]);

      setIsLoading(false);
    };

    preloadAll();
  }, [heroCardUrl, heroBackUrl, backgroundCardUrl]);

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

  return (
    <div className="relative min-h-[100dvh] w-full overflow-hidden transition-colors duration-1000 bg-black">
      
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

      <AnimatePresence mode="wait">
        {activeSection === 'home' && (
            <motion.div 
                key="home-section"
                // relative and z-10 ensures this container sits ABOVE the background cards
                className="relative min-h-[100dvh] grid grid-cols-1 lg:grid-cols-2 overflow-hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, transition: { duration: 0.5 } }}
            >
                {/* Left Side: Name (Scaled for 14-inch laptop) */}
                <div className="flex items-center justify-center lg:justify-end px-8 lg:px-16">
                <motion.div className="max-w-2xl w-full pointer-events-none">
                    <motion.p className="text-white/70 tracking-[0.4em] uppercase mb-4 text-[clamp(0.7rem,1vw,0.9rem)] font-light mix-blend-difference">
                    Hi, I'm
                    </motion.p>
                    
                    <motion.h1
                    className="text-white mb-8 mix-blend-difference" 
                    style={{ 
                        fontFamily: "var(--font-cinzel), serif", 
                        fontWeight: 700, 
                        lineHeight: 0.9,
                        // Fluid typography: Scales perfectly on your 14" screen
                        fontSize: "clamp(3.5rem, 9vw, 9rem)", 
                        letterSpacing: "-0.03em",
                        textShadow: "0 0 30px rgba(0,0,0,0.5)" // Gives depth against bg cards
                    }}
                    >
                    Tarun <br /> Sankar
                    </motion.h1>
                    
                    <motion.div className="h-px w-32 bg-gradient-to-r from-white via-white/50 to-transparent mix-blend-difference" />
                </motion.div>
                </div>

                {/* Right Side: 3D Hero Card */}
                <div 
                    className="absolute top-1/2 -translate-y-1/2 flex items-center justify-center"
                    style={{ 
                        left: '75%', 
                        top: '80%',
                        transform: 'translate(-50%, -50%)', // Centers the card on the 65% line
                        zIndex: 20 
                    }}
                >
                <div 
                    className="relative"
                    style={{
                    // Card size scales with screen width, but capped for large screens
                    width: "clamp(260px, 22vw, 420px)",
                    aspectRatio: "2.5 / 3.5"
                    }}
                >
                    <Hero3DCard 
                        imageUrl={heroCardUrl} 
                        backImageUrl={heroBackUrl}
                        isFlipped={isFlipped}       
                        onFlip={handleFlipTrigger}  
                    />
                </div>
                </div>
            </motion.div>
            )}

        {activeSection === 'work' && (
          <WorkSection 
              key="work-section" 
              onGoHome={() => setActiveSection('home')} 
              isFlipped={isFlipped}
          />
        )}

        {activeSection === 'contact' && (
           <ContactSection onClose={() => setActiveSection('home')} />
        )}
      </AnimatePresence>
      
      {/* Vignette Overlay */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{
            background: isFlipped 
                ? 'radial-gradient(ellipse at center, transparent 0%, rgba(255,255,255,0) 70%, rgba(255,255,255,0.8) 100%)'
                : 'radial-gradient(ellipse at center, transparent 0%, rgba(0,0,0,0.4) 70%, rgba(0,0,0,0.8) 100%)'
        }}
        transition={{ duration: 1 }}
      />
      
      {/* Scanline Effect */}
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