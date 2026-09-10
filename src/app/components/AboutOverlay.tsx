'use client';

import { motion, AnimatePresence } from 'motion/react';
import { useEffect, useState } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback'; // Check your path
import { SkillCard } from './SkillCard';
import { aboutSkillGroups } from '../../lib/projectSkills';

interface AboutOverlayProps {
  isOpen: boolean;
  onClose: () => void;
  isFlipped: boolean; 
}

export function AboutOverlay({ isOpen, onClose, isFlipped }: AboutOverlayProps) {
  const [showContent, setShowContent] = useState(false);
  const [hasSettled, setHasSettled] = useState(false);
  const cardBackImage = "/coverotate.jpg"; // Ensure path is correct

  const isDarkMode = !isFlipped;

  useEffect(() => {
    if (isOpen) {
      setHasSettled(false);
      const timer = setTimeout(() => setShowContent(true), 700);
      return () => clearTimeout(timer);
    } else {
      setShowContent(false);
      setHasSettled(false);
    }
  }, [isOpen]);

  const bgClass = isDarkMode ? 'bg-[#1a1a1a]' : 'bg-white';
  const textMain = isDarkMode ? 'text-white' : 'text-gray-900';
  const textSub = isDarkMode ? 'text-white/60' : 'text-gray-600';
  const borderColor = isDarkMode ? 'border-white/10' : 'border-black/10';
  const closeBtnClass = isDarkMode ? 'text-white/40 hover:text-white' : 'text-gray-400 hover:text-gray-900';

  return (
    <AnimatePresence>
      {isOpen && (
        // Added z-[70] to ensure it sits above the MotionToggle (z-60)
        <div className="fixed inset-0 z-[70] flex items-center justify-center perspective-[2000px] p-4">
          
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
            onAnimationComplete={() => setHasSettled(true)}
            className={`
              relative 
              /* MOBILE: Fixed viewport based size */
              w-[95vw] h-[85vh] 

              /* DESKTOP FIX: 
                 1. Set explicit Width (700px)
                 2. Set explicit Height (500px) -> This maintains your 7/5 ratio
                 3. REMOVE 'h-auto' entirely 
              */
              md:w-[700px] md:h-[580px] md:max-h-[90vh]
              
              rounded-2xl shadow-2xl
            `}
            style={hasSettled
              ? { transform: 'none', transformStyle: 'flat' }
              : { transformStyle: 'preserve-3d' }}
          > 
            
            {/* FRONT (CONTENT) */}
            <div 
              className={`absolute inset-0 rounded-2xl overflow-hidden border transition-colors duration-500 ${bgClass} ${borderColor}`}
              style={{ backfaceVisibility: 'hidden' }}
            >
              <motion.button 
                initial={{ opacity: 0 }}
                animate={{ opacity: showContent ? 1 : 0 }}
                onClick={onClose}
                className={`absolute top-4 right-6 z-50 font-mono text-xs uppercase tracking-widest transition-colors ${closeBtnClass}`}
              >
                [ Close ]
              </motion.button>

              <motion.div 
                 className="relative z-10 w-full h-full flex flex-col"
                 initial={{ opacity: 0, y: 20 }}
                 animate={{ opacity: showContent ? 1 : 0, y: showContent ? 0 : 20 }}
                 transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="flex-1 overflow-y-auto p-8 md:p-12 scrollbar-hide">
                  <div className="max-w-4xl mx-auto space-y-8 min-h-min flex flex-col justify-center">
                    
                    {/* HEADER */}
                    <div className={`flex flex-col md:flex-row justify-between items-start md:items-end gap-6 border-b ${borderColor} pb-6 pt-4`}>
                      <div>
                        <div className={`text-xs font-mono uppercase tracking-[0.3em] mb-2 ${textSub}`}>
                            Hi, I'm
                        </div>
                        <h2 className={`text-4xl md:text-6xl font-serif font-bold ${textMain}`}>
                          <br />Tarun Sankar
                        </h2>
                        <a href="/Tarun-Sankar-Resume.pdf" download="Tarun-Sankar-Resume.pdf" className={`mt-4 inline-flex min-h-11 items-center gap-3 rounded-md border px-4 py-2 text-sm ${borderColor} ${textMain}`}>
                          Download Resume <span aria-hidden="true">↓</span>
                        </a>
                      </div>
                      <div className="text-right">
                        <div className={`text-xs font-mono uppercase tracking-widest ${textSub}`}>Expected Graduation</div>
                        <div className={`text-2xl font-light ${textMain}`}>May 2027</div>
                      </div>
                    </div>

                    {/* STATS */}
                    <div className="grid grid-cols-3 gap-4">
                      <StatBlock label="Degree" value="B.S. Computer Engineering" textColor={textMain} subColor={textSub} borderColor={borderColor} />
                      <StatBlock label="GPA" value="3.7 / 4.0" textColor={textMain} subColor={textSub} borderColor={borderColor} />
                      <StatBlock label="University" value="UT Dallas" textColor={textMain} subColor={textSub} borderColor={borderColor} />
                    </div>

                    {/* BIO */}
                    <div className={`text-base md:text-lg leading-relaxed font-light ${textSub}`}>
                      <p>
                        I&apos;m a Computer Engineering student at UT Dallas building production software across network
                        automation, real-time GNSS systems, and full-stack generative tools.
                      </p>
                    </div>

                    {/* SKILLS */}
                    <div className="pb-8"> 
                      <div className="space-y-5">
                        {aboutSkillGroups.map((group) => (
                          <section key={group.label} aria-label={group.label}>
                            <h3 className={`mb-3 font-mono text-[10px] uppercase tracking-widest ${textSub}`}>{group.label}</h3>
                            <div className="flex flex-wrap gap-2">
                              {group.skills.map((tech) => <SkillCard key={tech} name={tech} isDark={isDarkMode} />)}
                            </div>
                          </section>
                        ))}
                      </div>
                    </div>

                  </div>
                </div>
              </motion.div>
            </div>

            {/* BACK (COVER) */}
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

function StatBlock({ label, value, textColor, subColor, borderColor }: any) {
    return (
        <div className={`flex flex-col border-l pl-3 ${borderColor}`}>
            <span className={`text-[10px] font-mono uppercase tracking-widest opacity-70 mb-1 ${subColor}`}>
                {label}
            </span>
            <span className={`text-sm md:text-base font-medium leading-tight ${textColor}`}>
                {value}
            </span>
        </div>
    )
}
