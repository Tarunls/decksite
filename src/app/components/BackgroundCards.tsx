'use client';

import { motion, useMotionValue, useSpring, useTransform, MotionValue } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useEffect, useMemo, useState } from 'react';

interface BackgroundCardsProps {
  imageUrl?: string;
  shuffleCount?: number;
  isShuffling?: boolean;
  isFlipped?: boolean;
}

// Define types for the individual Card component to fix red lines
interface CardProps {
  card: { x: string; y: string; rotation: number; z: number; parallax: number };
  index: number;
  smoothX: MotionValue<number>;
  smoothY: MotionValue<number>;
  imageUrl: string;
  isShuffling: boolean;
  isFlipped: boolean;
}

export function BackgroundCards({ 
  imageUrl, 
  shuffleCount = 0, 
  isShuffling = false,
  isFlipped = false 
}: BackgroundCardsProps) {
  
  // MOVED INSIDE: Hooks must be inside the function body
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const cardImages = [
    "/cards/resized_10th/time702-copy_51164800263_l.jpg",
    "/cards/resized_10th/time702-copy-5_51165659585_l.jpg",
    "/cards/resized_10th/time703-copy-4_51165341824_l.jpg",
    "/cards/resized_10th/time703-copy-8_51164557601_l.jpg",
    "/cards/resized_10th/time704-copy-3_51165659575_l.jpg",
    "/cards/resized_10th/time704-copy-7_51164800003_l.jpg",
    "/cards/resized_10th/time705-copy-2_51164557436_l.jpg",
    "/cards/resized_10th/time705-copy-6_51164799898_l.jpg",
    "/cards/resized_10th/time706-copy_51165659650_l.jpg",
    "/cards/resized_10th/time706-copy-5_51165341384_l.jpg",
    "/cards/resized_10th/time706-copy-9_51164557226_l.jpg",
    "/cards/resized_10th/time752-copy-2_51164850718_l.jpg",
    "/cards/resized_10th/time752-copy-6_51165393579_l.jpg",
    "/cards/resized_10th/time702-copy-2_51165342029_l.jpg",
    "/cards/resized_10th/time703-copy_51165341694_l.jpg",
    "/cards/resized_10th/time703-copy-5_51164800188_l.jpg",
    "/cards/resized_10th/time703-copy-9_51164557581_l.jpg",
    "/cards/resized_10th/time704-copy-4_51164557536_l.jpg",
    "/cards/resized_10th/time704-copy-8_51165341569_l.jpg",
    "/cards/resized_10th/time705-copy-3_51165659945_l.jpg",
    "/cards/resized_10th/time705-copy-7_51164799868_l.jpg",
    "/cards/resized_10th/time706-copy-2_51164799823_l.jpg",
    "/cards/resized_10th/time706-copy-6_51165659775_l.jpg",
    "/cards/resized_10th/time707-copy_51165341199_l.jpg",
    "/cards/resized_10th/time752-copy-3_51165393459_l.jpg",
    "/cards/resized_10th/time752-copy-7_51164610331_l.jpg",
    "/cards/resized_10th/time702-copy-3_51165341994_l.jpg",
    "/cards/resized_10th/time702-copy-7_51164557776_l.jpg",
    "/cards/resized_10th/time703-copy-2_51164800253_l.jpg",
    "/cards/resized_10th/time703-copy-6_51164557631_l.jpg",
    "/cards/resized_10th/time704-copy_51164557451_l.jpg",
    "/cards/resized_10th/time704-copy-5_51165341619_l.jpg",
    "/cards/resized_10th/time704-copy-9_51163892682_l.jpg",
    "/cards/resized_10th/time705-copy-4_51164557411_l.jpg",
    "/cards/resized_10th/time705-copy-8_51165341454_l.jpg",
    "/cards/resized_10th/time706-copy-3_51165659820_l.jpg",
    "/cards/resized_10th/time706-copy-7_51164557266_l.jpg",
    "/cards/resized_10th/time707-copy-2_51165659630_l.jpg",
    "/cards/resized_10th/time752-copy-4_51165711805_l.jpg",
    "/cards/resized_10th/time752-copy-8_51163945612_l.jpg",
    "/cards/resized_10th/time702-copy-4_51163893537_l.jpg",
    "/cards/resized_10th/time702-copy-8_51165341949_l.jpg",
    "/cards/resized_10th/time703-copy-3_51164800238_l.jpg",
    "/cards/resized_10th/time703-copy-7_51163893302_l.jpg",
    "/cards/resized_10th/time704-copy-2_51165660075_l.jpg",
    "/cards/resized_10th/time704-copy-6_51164800038_l.jpg",
    "/cards/resized_10th/time705-copy_51163892667_l.jpg",
    "/cards/resized_10th/time705-copy-5_51164799923_l.jpg",
    "/cards/resized_10th/time705-copy-9_51163892997_l.jpg",
    "/cards/resized_10th/time706-copy-4_51163892942_l.jpg",
    "/cards/resized_10th/time706-copy-8_51163892887_l.jpg",
    "/cards/resized_10th/time752-copy_51164610276_l.jpg",
    "/cards/resized_10th/time752-copy-5_51163945537_l.jpg",
    "/cards/resized_10th/time752-copy-9_51163945597_l.jpg"
  ];

  const antiCardImages = [
    '/angrygodofwealth/resized_10th/angry-god-of-wealth356-copy-2_50684893661_l.jpg',
    '/angrygodofwealth/resized_10th/angry-god-of-wealth356-copy-4_50684893561_l.jpg',
    '/angrygodofwealth/resized_10th/angry-god-of-wealth356-copy-5_50684136338_l.jpg',
    '/angrygodofwealth/resized_10th/angry-god-of-wealth356-copy-8_50684136193_l.jpg',
    '/angrygodofwealth/resized_10th/angry-god-of-wealth356-copy-9_50684136178_l.jpg',
    '/angrygodofwealth/resized_10th/angry-god-of-wealth356-copy_50684974272_l.jpg',
    '/angrygodofwealth/resized_10th/angry-god-of-wealth357-copy-2_50684974207_l.jpg',
    '/angrygodofwealth/resized_10th/angry-god-of-wealth357-copy-3_50684893186_l.jpg',
    '/angrygodofwealth/resized_10th/angry-god-of-wealth357-copy-4_50684893151_l.jpg',
    '/angrygodofwealth/resized_10th/angry-god-of-wealth357-copy-6_50684891171_l.jpg',
    '/angrygodofwealth/resized_10th/angry-god-of-wealth357-copy-7_50684974052_l.jpg',
    '/angrygodofwealth/resized_10th/angry-god-of-wealth357-copy-8_50684893051_l.jpg',
    '/angrygodofwealth/resized_10th/angry-god-of-wealth358-copy-2_50684973852_l.jpg',
    '/angrygodofwealth/resized_10th/angry-god-of-wealth358-copy-3_50684892876_l.jpg',
    '/angrygodofwealth/resized_10th/angry-god-of-wealth358-copy-4_50684973782_l.jpg',
    '/angrygodofwealth/resized_10th/angry-god-of-wealth358-copy-5_50684134108_l.jpg',
    '/angrygodofwealth/resized_10th/angry-god-of-wealth358-copy-6_50684135598_l.jpg',
    '/angrygodofwealth/resized_10th/angry-god-of-wealth358-copy-7_50684135563_l.jpg',
    '/angrygodofwealth/resized_10th/angry-god-of-wealth358-copy-8_50684973672_l.jpg',
    '/angrygodofwealth/resized_10th/angry-god-of-wealth358-copy-9_50684973622_l.jpg',
    '/angrygodofwealth/resized_10th/angry-god-of-wealth358-copy_50684973587_l.jpg',
    '/angrygodofwealth/resized_10th/angry-god-of-wealth359-copy-2_50684135398_l.jpg',
    '/angrygodofwealth/resized_10th/angry-god-of-wealth359-copy-3_50684892556_l.jpg',
    '/angrygodofwealth/resized_10th/angry-god-of-wealth359-copy-4_50684135343_l.jpg',
    '/angrygodofwealth/resized_10th/angry-god-of-wealth359-copy-5_50684135308_l.jpg',
    '/angrygodofwealth/resized_10th/angry-god-of-wealth359-copy-6_50684134078_l.jpg',
    '/angrygodofwealth/resized_10th/angry-god-of-wealth359-copy-7_50684892406_l.jpg',
    '/angrygodofwealth/resized_10th/angry-god-of-wealth359-copy-8_50684973327_l.jpg',
    '/angrygodofwealth/resized_10th/angry-god-of-wealth359-copy-9_50684892316_l.jpg',
    '/angrygodofwealth/resized_10th/angry-god-of-wealth359-copy_50684892251_l.jpg',
    '/angrygodofwealth/resized_10th/angry-god-of-wealth360-copy-2_50684892221_l.jpg',
    '/angrygodofwealth/resized_10th/angry-god-of-wealth360-copy-3_50684891101_l.jpg',
    '/angrygodofwealth/resized_10th/angry-god-of-wealth360-copy-4_50684973152_l.jpg',
    '/angrygodofwealth/resized_10th/angry-god-of-wealth360-copy-5_50684892166_l.jpg',
    '/angrygodofwealth/resized_10th/angry-god-of-wealth360-copy-6_50684973082_l.jpg',
    '/angrygodofwealth/resized_10th/angry-god-of-wealth360-copy-7_50684134993_l.jpg',
    '/angrygodofwealth/resized_10th/angry-god-of-wealth360-copy-8_50684134973_l.jpg',
    '/angrygodofwealth/resized_10th/angry-god-of-wealth360-copy-9_50684891976_l.jpg',
    '/angrygodofwealth/resized_10th/angry-god-of-wealth360-copy_50684891901_l.jpg',
    '/angrygodofwealth/resized_10th/angry-god-of-wealth361-copy-2_50684972197_l.jpg',
    '/angrygodofwealth/resized_10th/angry-god-of-wealth361-copy-3_50684972912_l.jpg',
    '/angrygodofwealth/resized_10th/angry-god-of-wealth361-copy-4_50684134833_l.jpg',
    '/angrygodofwealth/resized_10th/angry-god-of-wealth361-copy-5_50684972877_l.jpg',
    '/angrygodofwealth/resized_10th/angry-god-of-wealth361-copy-6_50684972812_l.jpg',
    '/angrygodofwealth/resized_10th/angry-god-of-wealth361-copy-7_50684134688_l.jpg',
    '/angrygodofwealth/resized_10th/angry-god-of-wealth361-copy-8_50684972172_l.jpg',
    '/angrygodofwealth/resized_10th/angry-god-of-wealth361-copy-9_50684891611_l.jpg',
    '/angrygodofwealth/resized_10th/angry-god-of-wealth361-copy_50684972602_l.jpg',
    '/angrygodofwealth/resized_10th/angry-god-of-wealth362-copy-2_50684891376_l.jpg',
    '/angrygodofwealth/resized_10th/angry-god-of-wealth362-copy-3_50684972347_l.jpg',
    '/angrygodofwealth/resized_10th/angry-god-of-wealth362-copy-4_50684972312_l.jpg',
    '/angrygodofwealth/resized_10th/angry-god-of-wealth362-copy-5_50684891281_l.jpg',
    '/angrygodofwealth/resized_10th/angry-god-of-wealth362-copy_50684133988_l.jpg',
  ];

  const activeImageSet = (isFlipped && antiCardImages.length > 0) 
    ? antiCardImages 
    : cardImages;

  const shuffledIndices = useMemo(() => {
    // If not mounted, return a fixed order for the server to match HTML
    if (!isMounted) return Array.from({ length: 60 }, (_, i) => i);
    
    const length = Math.max(cardImages.length, antiCardImages.length);
    const indices = Array.from({ length }, (_, i) => i);
    for (let i = indices.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [indices[i], indices[j]] = [indices[j], indices[i]];
    }
    return indices;
  }, [shuffleCount, isMounted]);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothX = useSpring(mouseX, { damping: 20, stiffness: 50 });
  const smoothY = useSpring(mouseY, { damping: 20, stiffness: 50 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      mouseX.set((e.clientX / innerWidth) * 2 - 1);
      mouseY.set((e.clientY / innerHeight) * 2 - 1);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  const cards = [
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
        {cards.map((card, index) => {
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
            />
          );
        })}
      </div>
    </>
  );
}

// Fixed 'any' type to avoid red lines
function Card({ card, index, smoothX, smoothY, imageUrl, isShuffling, isFlipped }: CardProps) {
  const x = useTransform(smoothX, [-1, 1], [-50 * card.parallax, 50 * card.parallax]);
  const y = useTransform(smoothY, [-1, 1], [-50 * card.parallax, 50 * card.parallax]);
  const rotateX = useTransform(smoothY, [-1, 1], [15 * card.parallax, -15 * card.parallax]);
  const rotateY = useTransform(smoothX, [-1, 1], [-15 * card.parallax, 15 * card.parallax]);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0, left: card.x, top: card.y }}
      animate={{ opacity: 1, scale: 0.5 }}
      transition={{ duration: 1.5, delay: index * 0.05, ease: "easeOut" }}
      style={{
        x, y, rotateX, rotateY,
        rotateZ: card.rotation,
        z: card.z,
        position: 'absolute',
        transformStyle: 'preserve-3d',
        translateX: '-50%',
        translateY: '-50%',
        willChange: 'transform', 
      }}
    >
      <motion.div 
        className={`w-[15vw] h-[21vw] max-w-[250px] max-h-[350px] rounded-lg overflow-hidden border ${isFlipped ? 'border-black/20 bg-gray-100' : 'border-white/10 bg-white'}`}
        style={{ 
            opacity: 1, 
            boxShadow: '0 10px 30px -10px rgba(0,0,0,0.5)',
            willChange: 'filter' 
        }}
        animate={{
            filter: isShuffling ? 'blur(10px) brightness(0.6)' : 'none',
            scale: isShuffling ? 0.95 : 1, 
        }}
        transition={{ duration: 0.6, ease: 'easeInOut' }}
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