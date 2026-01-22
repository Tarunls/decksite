  'use client';

  import { motion } from 'motion/react';
  import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';

  interface Hero3DCardProps {
    imageUrl: string;
    backImageUrl?: string;
    // New props for controlled state
    isFlipped?: boolean;
    onFlip?: () => void;
  }

  export function Hero3DCard({ 
    imageUrl, 
    backImageUrl = 'anticover.jpg', // Default fallback
    isFlipped = false, 
    onFlip 
  }: Hero3DCardProps) {

    return (
      <div className="relative w-full h-full flex items-center justify-center perspective-[1000px]">
        
        {/* 1. Background Glow (Blue Blob) */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <div className="w-96 h-[32rem] bg-blue-500/20 blur-[100px] rounded-full" />
        </motion.div>

        {/* 2. Idle Animation Container 
            - Handles the continuous wobble/float 
            - Separated from flip logic to avoid conflict
        */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{
            opacity: 1,
            scale: 1,
            rotateY: [15, -15, 15],
            rotateZ: [-3, 3, -3],
          }}
          transition={{
            opacity: { duration: 1, delay: 0.5 },
            scale: { duration: 1, delay: 0.5 },
            rotateY: { duration: 8, repeat: Infinity, ease: 'easeInOut' },
            rotateZ: { duration: 8, repeat: Infinity, ease: 'easeInOut' },
          }}
          style={{ transformStyle: 'preserve-3d' }}
          className="relative z-10"
        >
          {/* 3. The Flipper Container
              - Handles the 0 -> 180 degree flip 
              - Triggers the parent's onFlip function
          */}
          <motion.div
            className="relative w-72 h-[28rem] cursor-pointer"
            onClick={onFlip} 
            animate={{ rotateY: isFlipped ? 180 : 0 }}
            transition={{ duration: 0.8, type: 'spring', stiffness: 260, damping: 20 }}
            style={{ transformStyle: 'preserve-3d' }}
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
                alt="Front Card"
                className="w-full h-full object-cover"
              />
              {/* Front Shine */}
              <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent pointer-events-none" />
            </div>

            {/* --- BACK FACE (Anti Cover) --- */}
            <div
              className="absolute inset-0 rounded-2xl overflow-hidden shadow-2xl bg-[#1a1a1a]"
              style={{
                backfaceVisibility: 'hidden',
                transform: 'rotateY(180deg)', // Physically rotated to face backwards
                boxShadow: '0 50px 100px -20px rgba(0, 0, 0, 0.8), 0 30px 60px -30px rgba(0, 0, 0, 0.6)',
              }}
            >
              <ImageWithFallback
                src={backImageUrl}
                alt="Back Card"
                className="w-full h-full object-cover"
              />
              {/* Back Shine */}
              <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent pointer-events-none" />
            </div>

          {/* 4. Motion Blur / Shimmer Overlay (Applied to container to effect both sides) */}
          <div
            className="absolute inset-0 rounded-2xl pointer-events-none overflow-hidden"
            style={{ transform: 'translateZ(1px)' }} // Slight Z-push to sit on top
          >
             <div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"
              style={{
                transform: 'translateX(-100%)',
                animation: 'shimmer 3s infinite',
              }}
            />
          </div>

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