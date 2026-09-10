'use client';

import { useEffect, useRef, type PointerEvent } from 'react';
import { animate, motion, useMotionValue, useReducedMotion, type Transition } from 'motion/react';
import { resistedCardOffset } from '../../lib/cardPhysics';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface Hero3DCardProps {
  imageUrl: string;
  backImageUrl?: string;
  isFlipped?: boolean;
  onFlip?: () => void;
  isReducedMotion?: boolean;
}

export function Hero3DCard({ 
  imageUrl, 
  backImageUrl = 'anticover.jpg',
  isFlipped = false, 
  onFlip,
  isReducedMotion = false,
}: Hero3DCardProps) {
  const systemReducedMotion = useReducedMotion();
  const reduceMotion = isReducedMotion || Boolean(systemReducedMotion);
  const dragX = useMotionValue(0);
  const dragY = useMotionValue(0);
  const gesture = useRef<{ id: number; x: number; y: number; moved: boolean } | null>(null);
  const suppressClick = useRef(false);
  const springs = useRef<Array<{ stop: () => void }>>([]);

  useEffect(() => () => {
    springs.current.forEach((spring) => spring.stop());
  }, []);

  const startDrag = (event: PointerEvent<HTMLDivElement>) => {
    if (!event.isPrimary || event.button !== 0) return;
    event.preventDefault();
    springs.current.forEach((spring) => spring.stop());
    gesture.current = { id: event.pointerId, x: event.clientX, y: event.clientY, moved: false };
    suppressClick.current = false;
    event.currentTarget.setPointerCapture(event.pointerId);
  };
  const moveDrag = (event: PointerEvent<HTMLDivElement>) => {
    const start = gesture.current;
    if (!start || start.id !== event.pointerId) return;
    const dx = event.clientX - start.x;
    const dy = event.clientY - start.y;
    if (Math.hypot(dx, dy) > 4) start.moved = true;
    const offset = resistedCardOffset(dx, dy, reduceMotion ? 12 : 32);
    // Motion batches DOM writes to the next frame; never drop the final pointer sample.
    dragX.set(offset.x);
    dragY.set(offset.y);
  };
  const finishDrag = () => {
    if (!gesture.current) return;
    suppressClick.current = gesture.current.moved;
    gesture.current = null;
    // Start at zero velocity so even a fast fling returns with only a small bounce.
    const spring: Transition = reduceMotion
      ? { duration: 0.12 }
      : { type: 'spring', stiffness: 420, damping: 19, mass: 0.6, velocity: 0, restDelta: 0.05 };
    springs.current = [animate(dragX, 0, spring), animate(dragY, 0, spring)];
  };

  // Logic to switch between Bouncy Physics (Spring) and Gentle Sliding (Ease)
  const flipTransition: Transition = reduceMotion
    ? { duration: 0.6, ease: "easeInOut" } // Gentle slide
    : { duration: 0.8, type: 'spring', stiffness: 260, damping: 20 }; // Bouncy spring

  return (
    <div className="relative w-full h-full flex items-center justify-center perspective-[1000px]">
      
      {/* 1. Background Glow (Blue Blob) */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
        animate={reduceMotion
            ? { scale: 1, opacity: 0.3 } // Static if reduced
            : { scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] } // Pulsing if normal
        }
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        <div className="w-96 h-[32rem] bg-blue-500/20 blur-[100px] rounded-full" />
      </motion.div>

      {/* 2. Idle Animation Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={reduceMotion
            // Static Position
            ? { opacity: 1, scale: 1, rotateY: 0, rotateZ: 0 }
            // Wobbly Floating Animation
            : { 
                opacity: 1,
                scale: 1,
                rotateY: [15, -15, 15],
                rotateZ: [-3, 3, -3],
              }
        }
        transition={{
          opacity: { duration: 1, delay: 0.5 },
          scale: { duration: 1, delay: 0.5 },
          rotateY: { duration: 8, repeat: Infinity, ease: 'easeInOut' },
          rotateZ: { duration: 8, repeat: Infinity, ease: 'easeInOut' },
        }}
        style={{ transformStyle: 'preserve-3d' }}
        className="relative z-10"
      >
        <motion.div
          data-home-card-drag
          style={{ x: dragX, y: dragY, transformStyle: 'preserve-3d', touchAction: 'none' }}
          className="relative cursor-grab select-none active:cursor-grabbing focus-visible:outline-2 focus-visible:outline-offset-8 focus-visible:outline-white"
          role="button"
          tabIndex={0}
          aria-label="Home card: drag to move, click to flip"
          onPointerDown={startDrag}
          onPointerMove={moveDrag}
          onPointerUp={finishDrag}
          onPointerCancel={finishDrag}
          onLostPointerCapture={finishDrag}
          onDragStart={(event) => event.preventDefault()}
          onClick={() => { if (!suppressClick.current) onFlip?.(); }}
          onKeyDown={(event) => {
            if (event.key === 'Enter' || event.key === ' ') {
              event.preventDefault();
              onFlip?.();
            }
          }}
        >
        {/* The visual faces never handle native image dragging or pointer capture. */}
        <motion.div
          className="pointer-events-none relative w-72 h-[28rem]"
          animate={{ rotateY: isFlipped ? 180 : 0 }}
          transition={flipTransition} // Uses the variable defined above
          style={{ transformStyle: 'preserve-3d', touchAction: 'none' }}
        >
          {/* --- FRONT FACE (Normal Cover) --- */}
          <div
            className="absolute inset-0 rounded-2xl overflow-hidden shadow-2xl bg-[#1a1a1a]"
            style={{
              backfaceVisibility: 'hidden',
              boxShadow: '0 50px 100px -20px rgba(0, 0, 0, 0.8), 0 30px 60px -30px rgba(0, 0, 0, 0.6)',
            }}
          >
            <ImageWithFallback
              src={imageUrl}
              draggable={false}
              alt="Front Card"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent pointer-events-none" />
          </div>

          {/* --- BACK FACE (Anti Cover) --- */}
          <div
            className="absolute inset-0 rounded-2xl overflow-hidden shadow-2xl bg-[#1a1a1a]"
            style={{
              backfaceVisibility: 'hidden',
              transform: 'rotateY(180deg)',
              boxShadow: '0 50px 100px -20px rgba(0, 0, 0, 0.8), 0 30px 60px -30px rgba(0, 0, 0, 0.6)',
            }}
          >
            <ImageWithFallback
              src={backImageUrl}
              draggable={false}
              alt="Back Card"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent pointer-events-none" />
          </div>

        {/* 4. Motion Blur / Shimmer Overlay */}
        {/* Only render shimmer if motion is NOT reduced */}
        {!reduceMotion && (
            <div
                className="absolute inset-0 rounded-2xl pointer-events-none overflow-hidden"
                style={{ transform: 'translateZ(1px)' }} 
            >
                <div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"
                style={{
                    transform: 'translateX(-100%)',
                    animation: 'shimmer 3s infinite',
                }}
                />
            </div>
        )}

      </motion.div>
      </motion.div>
    </motion.div>

    <style>
      {`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(200%); }
        }
      `}
    </style>
  </div>
  );
}
