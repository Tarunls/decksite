'use client';
// Hi mom I'm Famous!
import { useState, useCallback, useEffect } from 'react';
import { motion, AnimatePresence, MotionConfig } from 'motion/react'; // Import MotionConfig
import { Navigation, SectionName } from './components/Navigation';
import { Hero3DCard } from './components/Hero3DCard';
import { BackgroundCards } from './components/BackgroundCards';
import { AboutOverlay } from './components/AboutOverlay';
import { WorkSection } from './components/WorkSection'; 
import { ContactSection } from './components/ContactSection';
import { cardImages, antiCardImages } from '../lib/constants';
import ProjectContent from './components/ProjectContent';
import { SecretPortal } from './components/SecretPortal';
import { cinzel } from '../lib/fonts';

// --- NEW MOTION TOGGLE COMPONENT ---
function MotionToggle({ isReduced, onToggle, isFlipped }: { isReduced: boolean; onToggle: () => void; isFlipped: boolean }) {
  return (
    <button
      onClick={onToggle}
      // CHANGE HERE: Added 'top-6 left-6' for mobile, and 'lg:top-auto lg:bottom-8 lg:left-8' for desktop
      className={`fixed z-[60] flex items-center gap-3 group focus:outline-none 
        top-6 left-6 
        lg:top-auto lg:bottom-8 lg:left-8
      `}
    >
      {/* The Switch Track */}
      <div 
        className={`relative w-11 h-6 rounded-full transition-colors duration-300 border ${
          isFlipped 
            ? (isReduced ? 'bg-black border-black' : 'bg-gray-200 border-gray-300') 
            : (isReduced ? 'bg-white border-white' : 'bg-white/10 border-white/20')
        }`}
      >
        {/* The Switch Handle */}
        <motion.div 
          className={`absolute top-1 left-1 w-4 h-4 rounded-full shadow-sm transition-colors duration-300 ${
            isFlipped 
              ? (isReduced ? 'bg-white' : 'bg-gray-400') 
              : (isReduced ? 'bg-black' : 'bg-white')
          }`}
          animate={{ x: isReduced ? 20 : 0 }}
          transition={{ type: "spring", stiffness: 500, damping: 30 }}
        />
      </div>

      {/* The Label - Hidden on very small screens if needed, but usually fine at top left */}
      <div className="flex flex-col items-start">
        <span className={`text-[10px] font-mono uppercase tracking-[0.2em] font-bold transition-colors duration-300 ${isFlipped ? 'text-black' : 'text-white'}`}>
          Motion
        </span>
        <span className={`text-[8px] font-mono uppercase tracking-widest transition-colors duration-300 ${isFlipped ? 'text-black/50' : 'text-white/50'}`}>
          {isReduced ? "Reduced" : "Full"}
        </span>
      </div>
    </button>
  );
}

function MobileWarning() {
  return (
    <div className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-black px-8 text-center lg:hidden overflow-hidden">
      {/* 3D Background Suits - Adjusted for Mobile Visibility */}
      <div className="absolute inset-0 pointer-events-none perspective-[1000px]">
        
        {/* Top Left Spade */}
        <motion.div 
          className="absolute text-[60vw] text-zinc-800/40 select-none font-serif leading-none"
          style={{ 
            top: '-5%', 
            left: '-10%',
            transformStyle: "preserve-3d" 
          }}
          initial={{ rotateY: -20, rotateX: 20 }}
          animate={{ 
            rotateY: [-20, -10, -20],
            rotateX: [20, 30, 20],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        >
          ♠
        </motion.div>

        {/* Bottom Right Diamond */}
        <motion.div 
          className="absolute text-[50vw] text-zinc-800/30 select-none font-serif leading-none"
          style={{ 
            bottom: '-15%', 
            right: '-15%',
            transformStyle: "preserve-3d",
            color: 'rgba(153, 27, 27, 0.4)'
          }}
          initial={{ rotateY: 30, rotateX: -10 }}
          animate={{ 
            rotateY: [30, 15, 30],
            rotateX: [-10, -25, -10],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        >
          ❤︎⁠
        </motion.div>
      </div>

      {/* Main Content (remains the same) */}
      <div className="absolute inset-4 border border-zinc-800/50 pointer-events-none" />
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="relative z-10"
      >
        <h2 
          className="text-white text-3xl mb-4 tracking-[0.2em] uppercase font-bold"
          style={{ fontFamily: "var(--font-cinzel), serif" }}
        >
          No <br /> Deck Space
        </h2>
        <div className="h-px w-24 mx-auto bg-white/20 mb-6" />
        <p className="text-zinc-500 font-mono text-[10px] tracking-[0.2em] uppercase max-w-[250px]">
          Please view on a <span className="text-zinc-200">Larger Screen</span> for the full experience.
        </p>
      </motion.div>
    </div>
  );
}


// --- "SPOTLIGHT SCANNER" LOADER ---
function LoadingScreen() {
  const suits = ["♠", "♥", "♣", "♦"];
  
  // Custom shadow strings for ultra-smooth glow
  const whiteGlow = "0 0 10px rgba(255,255,255,0.8), 0 0 20px rgba(110, 110, 110, 0.4)";
  const redGlow = "0 0 10px rgba(220,38,38,0.8), 0 0 20px rgba(126, 18, 18, 0.4)";

  return (
    <motion.div
      key="loader"
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black"
      initial={{ opacity: 1 }}
      exit={{ 
        opacity: 0, 
        transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } 
      }}
    >
      <div className="relative">
        {/* Background Layer: Dim Static Suits */}
        <div className="flex gap-8 md:gap-12 text-zinc-900 text-5xl md:text-7xl font-serif select-none">
          {suits.map((suit, i) => (
            <span key={i}>{suit}</span>
          ))}
        </div>

        {/* Foreground Layer: The Scanner */}
        <motion.div
          className="absolute inset-0 flex gap-8 md:gap-12 text-5xl md:text-7xl font-serif select-none"
          initial={{ clipPath: "inset(0 100% 0 0)" }} 
          animate={{ clipPath: "inset(0 -10% 0 0)" }}   
          transition={{ 
            duration: 1.8, 
            ease: "easeInOut",
            repeat: Infinity,       
            repeatType: "mirror",   
            repeatDelay: 0.2 
          }}
        >
          {suits.map((suit, i) => (
            <span 
              key={i} 
              className={(i === 1 || i === 3) ? "text-red-800" : "text-white"}
              style={{ 
                // Using textShadow instead of drop-shadow to prevent blocky artifacts
                textShadow: (i === 1 || i === 3) ? redGlow : whiteGlow 
              }}
            >
              {suit}
            </span>
          ))}
        </motion.div>
      </div>

      {/* Loading Bar */}
      <div className="mt-12 w-48 h-[1px] bg-zinc-900 overflow-hidden relative">
        <motion.div 
          className="absolute inset-0 bg-white"
          initial={{ x: "-100%" }}
          animate={{ x: "0%" }}
          transition={{ duration: 2.2, ease: "easeInOut" }}
          style={{ boxShadow: "0 0 15px white" }}
        />
      </div>
      
      <motion.p 
        className="mt-6 text-[9px] font-mono uppercase tracking-[0.5em] text-zinc-600"
        animate={{ opacity: [0.4, 1, 0.4] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        Initializing Deck
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
  const [isSecretOpen, setIsSecretOpen] = useState(false);

  // --- NEW: REDUCED MOTION STATE ---
  const [isReducedMotion, setIsReducedMotion] = useState(false);

  // Load preference on mount
  useEffect(() => {
    const saved = localStorage.getItem('isReducedMotion');
    if (saved === 'true') setIsReducedMotion(true);
  }, []);

  // Toggle handler
  const toggleReducedMotion = () => {
    setIsReducedMotion(prev => {
      const newValue = !prev;
      localStorage.setItem('isReducedMotion', String(newValue));
      return newValue;
    });
  };

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

  // If Motion is reduced, we use a simpler transition config globally
  // and disable heavy effects
  return (
    <MotionConfig transition={isReducedMotion ? { duration: 0.1 } : {}}>
    <div className="relative min-h-[100dvh] w-full overflow-hidden transition-colors duration-1000 bg-black">

        {/*<MobileWarning /> */}
        
        {/* Toggle Button */}
        <MotionToggle 
          isReduced={isReducedMotion} 
          onToggle={toggleReducedMotion} 
          isFlipped={isFlipped}
        />
      
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

      {/* IMPORTANT: You need to update BackgroundCards to accept 'isReducedMotion'.
        Inside BackgroundCards, if isReducedMotion is true:
        1. Disable mouse parallax listeners.
        2. Set animation durations to 0 or use simple fades.
      */}
      <BackgroundCards 
          imageUrl={backgroundCardUrl} 
          shuffleCount={shuffleCount}
          isShuffling={isShuffling}
          isFlipped={isFlipped} 
          // @ts-ignore - You need to add this prop to your component interface
          isReducedMotion={isReducedMotion} 
      />

      <AboutOverlay 
        isOpen={isAboutOpen} 
        onClose={() => setIsAboutOpen(false)} 
        isFlipped={isFlipped}
      />

      <SecretPortal 
        isOpen={isSecretOpen} 
        onClose={() => setIsSecretOpen(false)} 
      />

      <Navigation 
        onShuffle={handleShuffleTrigger} 
        isFlipped={isFlipped} 
        activeSection={activeSection} 
        onNavigate={handleNavigation} 
        onAboutClick={() => setIsAboutOpen(true)} 
        onSecretTrigger={() => setIsSecretOpen(true)}
      />

      <AnimatePresence mode="wait">
        {activeSection === 'home' && (
          <motion.div 
            key="home-section"
            // CHANGE: Added 'place-items-center' and 'content-center' for mobile vertical alignment
            className="relative min-h-[100dvh] grid grid-cols-1 lg:grid-cols-2 overflow-hidden place-items-center lg:place-items-stretch"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.5 } }}
          >
            {/* Left Side: Name */}
            {/* CHANGE: Added 'pt-20' to push text down from top edge on mobile */}
            <div className="flex items-end lg:items-center justify-center lg:justify-end px-8 lg:px-16 pt-32 lg:pt-0 pb-12 lg:pb-0">
              <motion.div className="max-w-2xl w-full pointer-events-none text-center lg:text-left">
                <motion.p className="text-white/70 tracking-[0.4em] uppercase mb-4 text-[clamp(0.7rem,1vw,0.9rem)] font-light mix-blend-difference">
                  Hi, I'm
                </motion.p>
                
                <motion.h1
                  className="text-white mb-8 mix-blend-difference" 
                  style={{ 
                    fontFamily: "var(--font-cinzel), serif", 
                    fontWeight: 700, 
                    lineHeight: 0.9,
                    // CHANGE: Adjusted clamp for better mobile sizing
                    fontSize: "clamp(3rem, 12vw, 9rem)", 
                    letterSpacing: "-0.03em",
                    textShadow: "0 0 30px rgba(0,0,0,0.5)" 
                  }}
                >
                  Tarun <br /> Sankar
                </motion.h1>
                
                <motion.div className="h-px w-32 bg-gradient-to-r from-white via-white/50 to-transparent mix-blend-difference mx-auto lg:mx-0" />
              </motion.div>
            </div>

            {/* Right Side: 3D Hero Card */}
            {/* CHANGE: Adjusted padding and alignment for mobile stacking */}
            <div className="flex items-start lg:items-center justify-center lg:justify-start px-8 lg:pr-24 lg:pl-60 pb-20 lg:pb-0 z-20">
              <div 
                className="relative"
                style={{
                  // CHANGE: Make card wider on mobile
                  width: "clamp(240px, 60vw, 420px)",
                  aspectRatio: "2.5 / 3.5"
                }}
              >
                <Hero3DCard 
                    imageUrl={heroCardUrl} 
                    backImageUrl={heroBackUrl}
                    isFlipped={isFlipped}       
                    onFlip={handleFlipTrigger}  
                    // @ts-ignore
                    isReducedMotion={isReducedMotion}
                />
              </div>
            </div>
          </motion.div>
        )}
        {activeSection === 'project' && (
          <ProjectContent 
            key="project-overlay" 
            onClose={() => setActiveSection('home')} 
            isFlipped={isFlipped}
          />
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
      
      {/* Vignette Overlay (Reduced Motion: Disable if needed, or keep for visual depth) */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{
            background: isFlipped 
                ? 'radial-gradient(ellipse at center, transparent 0%, rgba(255,255,255,0) 70%, rgba(255,255,255,0.8) 100%)'
                : 'radial-gradient(ellipse at center, transparent 0%, rgba(0,0,0,0.4) 70%, rgba(0,0,0,0.8) 100%)'
        }}
        transition={{ duration: 1 }}
      />
      
      {/* Scanline Effect - DISABLED when Reduced Motion is ON */}
      {!isReducedMotion && (
        <motion.div
            className="absolute inset-0 pointer-events-none opacity-5"
            animate={{ backgroundPosition: ['0% 0%', '0% 100%'] }}
            transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
            style={{
            backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.03) 2px, rgba(255,255,255,0.03) 4px)',
            backgroundSize: '100% 4px',
            }}
        />
      )}
    </div>
    </MotionConfig>
  );
}