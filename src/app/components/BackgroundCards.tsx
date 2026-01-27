'use client';

import { motion, useMotionValue, useSpring, useTransform, MotionValue, Transition } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useEffect, useMemo, useState } from 'react';
import {cardImages, antiCardImages} from '../../lib/constants';

// --- TYPES ---
interface BackgroundCardsProps {
  imageUrl?: string;
  shuffleCount?: number;
  isShuffling?: boolean;
  isFlipped?: boolean;
  isReducedMotion?: boolean; // <--- ADDED THIS
}

interface CardData {
  x: string;
  y: string;
  rotation: number;
  z: number;
  parallax: number;
}

interface CardProps {
  card: CardData;
  index: number;
  smoothX: MotionValue<number>;
  smoothY: MotionValue<number>;
  imageUrl: string;
  isShuffling: boolean;
  isFlipped: boolean;
  isReducedMotion: boolean; // <--- ADDED THIS
}

// --- 1. INITIAL STATIC POSITIONS ---
const initialCards: CardData[] = [
    { x: '10%', y: '10%', rotation: -15, z: -100, parallax: 0.4 },
    { x: '35%', y: '25%', rotation: -30, z: -200, parallax: 0.2 },
    { x: '25%', y: '25%', rotation: 10, z: -80, parallax: 0.5 },
    { x: '45%', y: '35%', rotation: 35, z: -40, parallax: 0.7 },
    { x: '20%', y: '5%', rotation: 55, z: -140, parallax: 0.35 },
    { x: '85%', y: '12%', rotation: 20, z: -90, parallax: 0.45 },
    { x: '65%', y: '20%', rotation: -25, z: -160, parallax: 0.3 },
    { x: '95%', y: '30%', rotation: 15, z: -45, parallax: 0.7 },
    { x: '60%', y: '40%', rotation: 40, z: -130, parallax: 0.35 },
    { x: '92%', y: '18%', rotation: -50, z: -100, parallax: 0.4 },
    { x: '12%', y: '85%', rotation: 35, z: -60, parallax: 0.6 },
    { x: '28%', y: '75%', rotation: -20, z: -150, parallax: 0.3 },
    { x: '40%', y: '90%', rotation: -40, z: -30, parallax: 0.8 },
    { x: '30%', y: '35%', rotation: 50, z: -80, parallax: 0.5 },
    { x: '8%', y: '55%', rotation: 10, z: -170, parallax: 0.25 },
    { x: '88%', y: '88%', rotation: -25, z: -70, parallax: 0.55 },
    { x: '65%', y: '65%', rotation: -15, z: -40, parallax: 0.7 },
    { x: '90%', y: '70%', rotation: -50, z: -30, parallax: 0.8 },
    { x: '72%', y: '92%', rotation: -40, z: -120, parallax: 0.4 },
    { x: '85%', y: '55%', rotation: 20, z: -160, parallax: 0.3 },
    { x: '50%', y: '50%', rotation: 45, z: -100, parallax: 0.4 },
    { x: '40%', y: '60%', rotation: -30, z: -80, parallax: 0.5 },
    { x: '95%', y: '55%', rotation: 35, z: -120, parallax: 0.8 },
    { x: '50%', y: '20%', rotation: -15, z: -150, parallax: 0.3 },
    { x: '60%', y: '80%', rotation: -15, z: -60, parallax: 0.3 },
    { x: '50%', y: '70%', rotation: -15, z: -60, parallax: 0.5 }
];

export function BackgroundCards({ 
  imageUrl, 
  shuffleCount = 0, 
  isShuffling = false,
  isFlipped = false,
  isReducedMotion = false // Default to false
}: BackgroundCardsProps) {
  
  const [isMounted, setIsMounted] = useState(false);
  const [layout, setLayout] = useState<CardData[]>(initialCards);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // --- RANDOMIZATION LOGIC ---
  useEffect(() => {
    if (shuffleCount > 0) {
      const randomRange = (min: number, max: number) => Math.random() * (max - min) + min;

      const newRandomLayout = initialCards.map(() => {
        return {
          x: `${Math.floor(randomRange(5, 95))}%`, 
          y: `${Math.floor(randomRange(5, 95))}%`,
          rotation: Math.floor(randomRange(-60, 60)),
          z: Math.floor(randomRange(-200, -30)),
          parallax: Number(randomRange(0.2, 0.8).toFixed(2))
        };
      });

      setLayout(newRandomLayout);
    }
  }, [shuffleCount]);

  const activeImageSet = (isFlipped && antiCardImages.length > 0) 
    ? antiCardImages 
    : cardImages;

  const shuffledIndices = useMemo(() => {
    if (!isMounted) return Array.from({ length: 60 }, (_, i) => i);
    const length = Math.max(cardImages.length, antiCardImages.length);
    const indices = Array.from({ length }, (_, i) => i);
    for (let i = indices.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [indices[i], indices[j]] = [indices[j], indices[i]];
    }
    return indices;
  }, [shuffleCount, isMounted, cardImages.length, antiCardImages.length]);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothX = useSpring(mouseX, { damping: 20, stiffness: 50 });
  const smoothY = useSpring(mouseY, { damping: 20, stiffness: 50 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // OPTIMIZATION: Stop tracking mouse if reduced motion is on
      if (isReducedMotion) return;

      const { innerWidth, innerHeight } = window;
      mouseX.set((e.clientX / innerWidth) * 2 - 1);
      mouseY.set((e.clientY / innerHeight) * 2 - 1);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY, isReducedMotion]); // Add dependency

  return (
    <>
      <div 
        aria-hidden="true" 
        className="fixed left-0 top-0 w-0 h-0 overflow-hidden opacity-0 pointer-events-none z-[-1]"
      >
        {antiCardImages.map((img, i) => (
           <ImageWithFallback 
             key={i} 
             src={img} 
             alt="" 
             sizes="160px" 
             priority
           />
        ))}
      </div>

      <div 
        className="absolute inset-0 overflow-hidden pointer-events-none"
        style={{ perspective: '1000px' }}
      >
        {layout.map((card, index) => {
          const shuffledIndex = shuffledIndices[index % shuffledIndices.length];
          const specificImage = activeImageSet.length > 0 
            ? activeImageSet[shuffledIndex % activeImageSet.length] 
            : imageUrl || '';

          return (
            <Card 
              key={index} 
              index={index}
              card={card}
              smoothX={smoothX} 
              smoothY={smoothY} 
              imageUrl={specificImage}
              isShuffling={isShuffling}
              isFlipped={isFlipped} 
              isReducedMotion={isReducedMotion} // Pass down prop
            />
          );
        })}
      </div>
    </>
  );
}

function Card({ card, index, smoothX, smoothY, imageUrl, isShuffling, isFlipped, isReducedMotion }: CardProps) {
  // We still calculate these hooks, but we might ignore their output in the return statement
  const x = useTransform(smoothX, [-1, 1], [-50 * card.parallax, 50 * card.parallax]);
  const y = useTransform(smoothY, [-1, 1], [-50 * card.parallax, 50 * card.parallax]);
  const rotateX = useTransform(smoothY, [-1, 1], [15 * card.parallax, -15 * card.parallax]);
  const rotateY = useTransform(smoothX, [-1, 1], [-15 * card.parallax, 15 * card.parallax]);

  // Define transition strategy based on mode
  const transitionStrategy: Transition = isReducedMotion 
    ? { duration: 0.8, ease: "easeInOut" } // Slow, gentle fade/slide for accessibility
    : { duration: 1.2, delay: index * 0.01, type: "spring", stiffness: 40, damping: 15 }; // Bouncy fun physics

  return (
    <motion.div
      initial={{ 
        opacity: 0, 
        scale: 0, 
        left: card.x, 
        top: card.y,
        rotateZ: card.rotation,
        z: card.z
      }}
      animate={{ 
        opacity: 1, 
        scale: 0.5,
        left: card.x, 
        top: card.y,
        rotateZ: card.rotation,
        z: card.z
      }}
      transition={transitionStrategy}
      style={{
        // If reduced motion is ON, we force 0 for movement/rotation.
        // If OFF, we use the calculated MotionValues (x, y, rotateX, etc)
        x: isReducedMotion ? 0 : x,
        y: isReducedMotion ? 0 : y,
        rotateX: isReducedMotion ? 0 : rotateX,
        rotateY: isReducedMotion ? 0 : rotateY,
        
        position: 'absolute',
        transformStyle: 'preserve-3d',
        translateX: '-50%',
        translateY: '-50%',
        willChange: 'transform, left, top', 
      }}
    >
      <motion.div 
        className={`w-[25vw] md:w-[15vw] h-[35vw] md:h-[21vw] max-w-[250px] max-h-[350px] rounded-lg overflow-hidden border ${isFlipped ? 'border-black/20 bg-gray-100' : 'border-white/10 bg-white'}`}
        style={{ 
            boxShadow: '0 10px 30px -10px rgba(0,0,0,0.5)',
            willChange: 'filter' 
        }}
        // Disable the blur/shuffle effect if reduced motion is on to prevent flashing
        animate={{
            filter: (isShuffling && !isReducedMotion) ? 'blur(8px) brightness(0.6)' : 'none',
            scale: (isShuffling && !isReducedMotion) ? 0.9 : 1, 
        }}
        transition={{ duration: 2, ease: 'easeInOut' }}
      >
        <ImageWithFallback 
            src={imageUrl} 
            alt="Card" 
            className="w-full h-full object-cover" 
            sizes="160px"
        />
        <div className={`absolute inset-0 ${isFlipped ? 'bg-black/10' : 'bg-white/40'}`} />
      </motion.div>
    </motion.div>
  );
}