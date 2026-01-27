'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface ChatOverlayProps {
  onClose: () => void;
  isFlipped: boolean;
}

export function ChatOverlay({ onClose, isFlipped }: ChatOverlayProps) {
  // --- CHAT LOGIC ---
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<{ type: 'user' | 'system'; text: string }[]>([
    { type: 'system', text: "I am the deck's memory. Ask me anything." }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  // --- ASSETS & THEME ---
  const kingImage = isFlipped ? "/lightknight.png" : "/darkknight.png";
  const cardBackImage = "/coverotate.jpg";

  const theme = {
    bg: isFlipped ? "bg-[#f5f5f5]" : "bg-[#1a1a1a]",
    border: isFlipped ? "border-black/10" : "border-yellow-500/10",
    text: isFlipped ? "text-gray-800" : "text-white/90",
    headerBg: isFlipped ? "bg-white/50" : "bg-black/20",
    inputBg: isFlipped ? "bg-white border-gray-300 text-black" : "bg-black/40 border-yellow-500/10 text-white",
    accent: isFlipped ? "bg-blue-600 shadow-[0_0_10px_blue]" : "bg-yellow-600 shadow-[0_0_10px_yellow]",
    userMsg: isFlipped ? "bg-blue-600 text-white" : "bg-white text-black",
    systemMsg: isFlipped ? "bg-white border-gray-200 text-gray-800" : "bg-white/5 border-yellow-500/10 text-white/90",
  };

  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [history]);

  useEffect(() => {
    const timer = setTimeout(() => setShowContent(true), 700);
    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isTyping) return;

    const userMsg = input.trim();
    
    // 1. Add User Message to History Immediately
    setHistory(prev => [...prev, { type: 'user', text: userMsg }]);
    setInput('');
    setIsTyping(true); // Show typing indicator

    try {
      // 2. Call the Python Backend
      const res = await fetch('http://localhost:8000/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userMsg }),
      });

      const data = await res.json();

      // 3. Update History with AI Response
      if (res.ok) {
        setHistory(prev => [...prev, { type: 'system', text: data.response }]);
      } else {
        setHistory(prev => [...prev, { type: 'system', text: "The cards are silent... " }]);
      }
    } catch (error) {
      console.error("Chat Error:", error);
      setHistory(prev => [...prev, { type: 'system', text: "The connection to the spirit realm is broken." }]);
    } finally {
      setIsTyping(false); // Hide typing indicator
    }
  };

  

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[70] font-sans perspective-[2000px] overflow-hidden">
        
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/60 backdrop-blur-md cursor-pointer will-change-[opacity]"
        />

        <div className="absolute inset-0 pointer-events-none flex flex-col md:flex-row">
            
            {/* LEFT SIDE: THE CHAT CARD */}
            <div className="relative w-full md:w-3/4 h-full flex items-center justify-center p-4 md:p-12 pointer-events-auto z-20">
                <motion.div
                    // --- UPDATED ANIMATION (Copied from AboutOverlay) ---
                    initial={{ x: '40vw', y: '40vh', scale: 0.2, rotateY: 180, rotateZ: 45 }}
                    animate={{ x: 0, y: 0, scale: 1, rotateY: 0, rotateZ: 0 }}
                    exit={{ scale: 0.9, opacity: 0, y: 50, transition: { duration: 0.3 } }}
                    transition={{ type: "spring", damping: 25, stiffness: 120, mass: 0.8 }}
                    // ----------------------------------------------------
                    className="relative w-full max-w-[700px] h-[70vh] md:h-[500px] rounded-2xl shadow-2xl will-change-transform"
                    style={{ transformStyle: 'preserve-3d' }}
                >
                    {/* FRONT */}
                    <div 
                        className={`absolute inset-0 rounded-2xl overflow-hidden border ${theme.border} ${theme.bg} flex flex-col transition-colors duration-500`}
                        style={{ backfaceVisibility: 'hidden' }}
                    >
                        <motion.button 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: showContent ? 1 : 0 }}
                            onClick={onClose}
                            className={`absolute top-4 right-6 z-50 font-mono text-xs uppercase tracking-widest ${isFlipped ? 'text-black/40 hover:text-black' : 'text-white/40 hover:text-white'} transition-colors`}
                        >
                            [ Close ]
                        </motion.button>

                        <motion.div 
                            className="relative z-10 w-full h-full flex flex-col"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: showContent ? 1 : 0, y: showContent ? 0 : 20 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            <div className={`p-6 border-b ${theme.border} ${theme.headerBg} flex items-center gap-3 transition-colors duration-500`}>
                                <div className={`w-2 h-2 rounded-full animate-pulse ${theme.accent}`} />
                                <span className={`text-xs uppercase tracking-[0.2em] font-mono ${isFlipped ? 'text-black/60' : 'text-white/60'}`}>
                                    Deck Master
                                </span>
                            </div>

                            <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-6 scrollbar-hide">
                                {history.map((msg, i) => (
                                    <motion.div 
                                        initial={{ opacity: 0, x: msg.type === 'user' ? 10 : -10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        key={i} 
                                        className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
                                    >
                                        <div className={`max-w-[85%] p-4 text-sm leading-relaxed font-light rounded-2xl ${msg.type === 'user' ? `${theme.userMsg} rounded-tr-sm` : `${theme.systemMsg} rounded-tl-sm border ${theme.border}`}`}>
                                            {msg.text}
                                        </div>
                                    </motion.div>
                                ))}
                                {isTyping && (
                                    <div className="flex justify-start">
                                        <div className={`px-4 py-3 rounded-2xl rounded-tl-sm flex gap-1 items-center border ${theme.border} ${isFlipped ? 'bg-white' : 'bg-white/5'}`}>
                                            <span className={`w-1 h-1 rounded-full animate-bounce ${isFlipped ? 'bg-black/40' : 'bg-white/40'}`} style={{ animationDelay: '0ms' }}/>
                                            <span className={`w-1 h-1 rounded-full animate-bounce ${isFlipped ? 'bg-black/40' : 'bg-white/40'}`} style={{ animationDelay: '150ms' }}/>
                                            <span className={`w-1 h-1 rounded-full animate-bounce ${isFlipped ? 'bg-black/40' : 'bg-white/40'}`} style={{ animationDelay: '300ms' }}/>
                                        </div>
                                    </div>
                                )}
                            </div>

                            <div className={`p-4 border-t ${theme.border} ${theme.headerBg} transition-colors duration-500`}>
                                <form onSubmit={handleSubmit} className="relative">
                                    <input 
                                        autoFocus
                                        value={input}
                                        onChange={(e) => setInput(e.target.value)}
                                        placeholder="Ask the cards..."
                                        className={`w-full rounded-xl px-4 py-3 text-sm focus:outline-none transition-all ${theme.inputBg}`}
                                    />
                                    <button 
                                        type="submit"
                                        disabled={!input.trim()}
                                        className={`absolute right-3 top-1/2 -translate-y-1/2 p-2 disabled:opacity-0 transition-all ${isFlipped ? 'text-black/40 hover:text-black' : 'text-white/40 hover:text-white'}`}
                                    >
                                        ↵
                                    </button>
                                </form>
                            </div>
                        </motion.div>
                    </div>

                    {/* BACK */}
                    <div 
                        className="absolute inset-0 rounded-2xl overflow-hidden shadow-xl bg-[#1a1a1a]"
                        style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
                    >
                        <ImageWithFallback src={cardBackImage} alt="Oracle Card Back" className="w-full h-full object-cover brightness-75" />
                    </div>
                </motion.div>
            </div>

            {/* RIGHT SIDE: THE GHOST KING */}
            <div className="absolute inset-0 md:relative md:inset-auto w-full md:w-1/2 h-full flex items-center justify-center pointer-events-none perspective-[2000px] z-10 md:z-auto overflow-hidden md:overflow-visible">
                <motion.div 
                    initial={{ opacity: 0, x: 50, rotateY: 20 }}
                    animate={{ 
                        opacity: 1, 
                        x: 0,
                        y: [0, -20, 0],              
                        rotateY: [0, 10, 0, -10, 0], 
                        rotateZ: [0, 2, 0, -2, 0]    
                    }}
                    transition={{ 
                        opacity: { duration: 1 },
                        x: { type: "spring", stiffness: 50 },
                        y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
                        rotateY: { duration: 8, repeat: Infinity, ease: "easeInOut" },
                        rotateZ: { duration: 10, repeat: Infinity, ease: "easeInOut" }
                    }}
                    className="relative w-[300px] h-[450px] md:w-[500px] md:h-[1000px] will-change-transform pointer-events-auto cursor-default" 
                    style={{ transformStyle: 'preserve-3d' }}
                >
                    <ImageWithFallback 
                        src={kingImage} 
                        alt="Ghost King"
                        className="w-full h-full object-contain select-none" 
                        style={{
                            filter: isFlipped 
                                ? "brightness(1.0) contrast(1.0)" 
                                : "brightness(1.2) contrast(1.1) opacity(0.9)",
                            transition: "filter 0.5s ease"
                        }}
                    />
                    
                    {/* Glow */}
                    <div className={`absolute inset-0 bg-radial-gradient blur-3xl -z-10 transition-colors duration-1000 ${isFlipped ? 'from-blue-500/20' : 'from-white/10'} to-transparent`} />
                </motion.div>
            </div>
        </div>
      </div>
    </AnimatePresence>
  );
}