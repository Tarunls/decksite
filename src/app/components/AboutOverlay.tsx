'use client';

import { motion, AnimatePresence } from 'motion/react';
import { useEffect, useState } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface AboutOverlayProps {
  isOpen: boolean;
  onClose: () => void;
  isFlipped: boolean; 
}

export function AboutOverlay({ isOpen, onClose, isFlipped }: AboutOverlayProps) {
  const [showContent, setShowContent] = useState(false);
  const cardBackImage = "coverotate.jpg"; 

  const isDarkMode = !isFlipped;

  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => setShowContent(true), 700);
      return () => clearTimeout(timer);
    } else {
      setShowContent(false);
    }
  }, [isOpen]);

  // --- DYNAMIC THEME COLORS ---
  const bgClass = isDarkMode ? 'bg-[#1a1a1a]' : 'bg-white';
  const textMain = isDarkMode ? 'text-white' : 'text-gray-900';
  const textSub = isDarkMode ? 'text-white/60' : 'text-gray-600';
  const borderColor = isDarkMode ? 'border-white/10' : 'border-black/10';
  const tagClass = isDarkMode ? 'bg-white/5 border-white/10 text-white/80' : 'bg-transparent border-black/10 text-gray-900';
  const closeBtnClass = isDarkMode ? 'text-white/40 hover:text-white' : 'text-gray-400 hover:text-gray-900';

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center perspective-[2000px] p-4">
          
          {/* BACKDROP */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm cursor-pointer"
          />

          {/* THE 3D CARD CONTAINER */}
          <motion.div
            initial={{ x: '40vw', y: '40vh', scale: 0.2, rotateY: 180, rotateZ: 45 }}
            animate={{ x: 0, y: 0, scale: 1, rotateY: 0, rotateZ: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 50, transition: { duration: 0.3 } }}
            transition={{ type: "spring", damping: 25, stiffness: 120, mass: 0.8 }}
            className={`
              relative 
              /* MOBILE: Auto aspect, fixed height to force scroll */
              w-[95vw] h-[85vh] aspect-auto
              /* DESKTOP: Fixed aspect ratio, auto height */
              md:w-auto md:h-auto md:aspect-[7/5] md:max-h-[90vh]
              rounded-2xl shadow-2xl
            `}
            style={{ transformStyle: 'preserve-3d' }}
          >
            
            {/* FRONT OF CARD (THE CONTENT SIDE) */}
            <div 
              className={`absolute inset-0 rounded-2xl overflow-hidden border transition-colors duration-500 ${bgClass} ${borderColor}`}
              style={{ backfaceVisibility: 'hidden' }}
            >
                {/* CLOSE BUTTON */}
              <motion.button 
                initial={{ opacity: 0 }}
                animate={{ opacity: showContent ? 1 : 0 }}
                onClick={onClose}
                className={`absolute top-4 right-6 z-50 font-mono text-xs uppercase tracking-widest transition-colors ${closeBtnClass}`}
              >
                [ Close ]
              </motion.button>

              {/* CONTENT WRAPPER - Added h-full and flex-col to ensure scrolling works */}
              <motion.div 
                 className="relative z-10 w-full h-full flex flex-col"
                 initial={{ opacity: 0, y: 20 }}
                 animate={{ opacity: showContent ? 1 : 0, y: showContent ? 0 : 20 }}
                 transition={{ duration: 0.5, delay: 0.2 }}
              >
                {/* SCROLLABLE AREA */}
                <div className="flex-1 overflow-y-auto p-8 md:p-12 scrollbar-hide">
                  <div className="max-w-4xl mx-auto space-y-8 min-h-min flex flex-col justify-center">
                    
                    {/* Header */}
                    <div className={`flex flex-col md:flex-row justify-between items-start md:items-end gap-6 border-b ${borderColor} pb-6 pt-4`}>
                      <div>
                        <div className={`text-xs font-mono uppercase tracking-[0.3em] mb-2 ${textSub}`}>
                            What's • Up
                        </div>
                        <h2 className={`text-4xl md:text-6xl font-serif font-bold ${textMain}`}>
                          <br />Caino
                        </h2>
                      </div>
                      <div className="text-right">
                        <div className={`text-xs font-mono uppercase tracking-widest ${textSub}`}>Age</div>
                        <div className={`text-3xl font-light ${textMain}`}>20</div>
                      </div>
                    </div>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-3 gap-4">
                      <StatBlock label="Class" value="Engineer" textColor={textMain} subColor={textSub} borderColor={borderColor} />
                      <StatBlock label="Guild" value="UTD" textColor={textMain} subColor={textSub} borderColor={borderColor} />
                      <StatBlock label="Origin" value="Texas" textColor={textMain} subColor={textSub} borderColor={borderColor} />
                    </div>

                    {/* Bio */}
                    <div className={`text-base md:text-lg leading-relaxed font-light ${textSub}`}>
                      <p>
                        I'm just a goofy goober for now. 
                        Specializing in <b className={textMain}>Next.js</b> and <b className={textMain}>Python</b>.
                      </p>
                    </div>

                    {/* Skills */}
                    <div className="pb-8"> {/* Added padding bottom to ensure last items aren't cut off */}
                      <div className="flex flex-wrap gap-2">
                        {['React', 'Next.js', 'TypeScript', 'Tailwind', 'Motion', 'Python', 'Node.js', 'Figma'].map((tech) => (
                          <span key={tech} className={`px-3 py-1 text-[10px] font-mono uppercase tracking-wider border rounded-sm ${tagClass}`}>
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                  </div>
                </div>
              </motion.div>
            </div>

            {/* BACK OF CARD (Entrance Animation Side) */}
            <div 
              className="absolute inset-0 rounded-2xl overflow-hidden shadow-xl bg-[#1a1a1a]"
              style={{ 
                backfaceVisibility: 'hidden', 
                transform: 'rotateY(180deg)' 
              }}
            >
              <ImageWithFallback 
                src={cardBackImage} 
                alt="Card Back" 
                className="w-full h-full object-cover brightness-75" 
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent pointer-events-none" />
            </div>

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

// --- HELPER COMPONENT ---
function StatBlock({ label, value, textColor, subColor, borderColor }: { label: string, value: string, textColor: string, subColor: string, borderColor: string }) {
    return (
        <div className={`flex flex-col border-l pl-3 ${borderColor}`}>
            <span className={`text-[10px] font-mono uppercase tracking-widest opacity-70 mb-1 ${subColor}`}>
                {label}
            </span>
            <span className={`text-base font-medium truncate ${textColor}`}>
                {value}
            </span>
        </div>
    )
}