'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';

// --- SECURITY CONFIGURATION (EDIT THIS) ---
const SECURITY_DATABASE: Record<string, { question: string; answer: string }> = {
  "Ana": { question: "What acts as the squared intelligence?", answer: "NMC" },
  "Tim": { question: "What creates the network?", answer: "Automation" },
  "Tarun": { question: "What is the passcode?", answer: "Delta" } 
};

interface ChatOverlayProps {
  onClose: () => void;
  isFlipped: boolean;
}

export function ChatOverlay({ onClose, isFlipped }: ChatOverlayProps) {
  // --- CHAT STATE ---
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<{ type: 'user' | 'system'; text: string }[]>([
    { type: 'system', text: "I am the deck's memory. Ask me anything." }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [showContent, setShowContent] = useState(false);

  // --- KING MODAL STATE ---
  const [isKingMode, setIsKingMode] = useState(false);

  // --- ASSETS ---
  const kingImage = isFlipped ? "/lightknight.png" : "/darkknight.png";
  const cardBackImage = "/coverotate.jpg";

  // --- THEME ---
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

  // --- SCROLL & INTRO ANIMATION ---
  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [history]);

  useEffect(() => {
    const timer = setTimeout(() => setShowContent(true), 700);
    return () => clearTimeout(timer);
  }, []);

  // --- HANDLERS ---
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isTyping) return;

    const userMsg = input.trim();
    setHistory(prev => [...prev, { type: 'user', text: userMsg }]);
    setInput('');
    setIsTyping(true);

    // --- 1. THE TRIGGER CHECK ---
    if (userMsg === "Up the Ante.") {
      setTimeout(() => {
        setIsTyping(false);
        setHistory(prev => [...prev, { type: 'system', text: "Really... well good luck then." }]);
        
        // Trigger the King Modal after a brief delay for dramatic effect
        setTimeout(() => setIsKingMode(true), 1500);
      }, 1000);
      return; 
    }

    // --- 2. STANDARD API CALL ---
    try {
      const baseUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';
      const res = await fetch(`${baseUrl}/chat`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userMsg }),
      });

      const data = await res.json();

      if (res.ok) {
        setHistory(prev => [...prev, { type: 'system', text: data.response }]);
      } else {
        setHistory(prev => [...prev, { type: 'system', text: "The cards are silent..." }]);
      }
    } catch (error) {
      console.error("Chat Error:", error);
      setHistory(prev => [...prev, { type: 'system', text: "The connection to the spirit realm is broken." }]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <AnimatePresence mode="wait">
      {/* --- STANDARD CHAT VIEW --- */}
      {!isKingMode && (
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
                        initial={{ x: '40vw', y: '40vh', scale: 0.2, rotateY: 180, rotateZ: 45 }}
                        animate={{ x: 0, y: 0, scale: 1, rotateY: 0, rotateZ: 0 }}
                        exit={{ scale: 0.9, opacity: 0, y: 50, transition: { duration: 0.3 } }}
                        transition={{ type: "spring", damping: 25, stiffness: 120, mass: 0.8 }}
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
                        animate={{ opacity: 1, x: 0, y: [0, -20, 0], rotateY: [0, 10, 0, -10, 0], rotateZ: [0, 2, 0, -2, 0] }}
                        transition={{ opacity: { duration: 1 }, x: { type: "spring", stiffness: 50 }, y: { duration: 6, repeat: Infinity, ease: "easeInOut" }, rotateY: { duration: 8, repeat: Infinity, ease: "easeInOut" }, rotateZ: { duration: 10, repeat: Infinity, ease: "easeInOut" }}}
                        className="relative w-[300px] h-[450px] md:w-[500px] md:h-[1000px] will-change-transform pointer-events-auto cursor-default" 
                        style={{ transformStyle: 'preserve-3d' }}
                    >
                        <ImageWithFallback 
                            src={kingImage} 
                            alt="Ghost King"
                            className="w-full h-full object-contain select-none" 
                            style={{ filter: isFlipped ? "brightness(1.0) contrast(1.0)" : "brightness(1.2) contrast(1.1) opacity(0.9)", transition: "filter 0.5s ease" }}
                        />
                        <div className={`absolute inset-0 bg-radial-gradient blur-3xl -z-10 transition-colors duration-1000 ${isFlipped ? 'from-blue-500/20' : 'from-white/10'} to-transparent`} />
                    </motion.div>
                </div>
            </div>
        </div>
      )}

      {/* --- THE KING MODAL (INTERROGATION) --- */}
      {isKingMode && (
         <KingModal onClose={onClose} />
      )}
    </AnimatePresence>
  );
}


// Mock Image component if you aren't using Next.js Image

function KingModal({ onClose }: { onClose: () => void }) {
    const [step, setStep] = useState<'intro' | 'name' | 'challenge' | 'success' | 'fail'>('intro');
    const [inputVal, setInputVal] = useState('');
    const [userName, setUserName] = useState('');
    const [securityQ, setSecurityQ] = useState('');
    const [attempts, setAttempts] = useState(0);
    const [isFocused, setIsFocused] = useState(false);

    const kingImg = "/defender.png"; 

    // --- LOGIC HANDLERS ---
    const handleIntro = (knowsOwner: boolean) => {
        if (knowsOwner) setStep('name');
        else setStep('fail');
    };

    const handleNameSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const name = inputVal.trim();
        const foundKey = Object.keys(SECURITY_DATABASE).find(k => k.toLowerCase() === name.toLowerCase());

        if (foundKey) {
            setUserName(foundKey);
            setSecurityQ(SECURITY_DATABASE[foundKey].question);
            setStep('challenge');
            setInputVal('');
        } else {
            setStep('fail');
        }
    };

    const handleChallengeSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const correctAns = SECURITY_DATABASE[userName].answer.toLowerCase();
        
        if (inputVal.trim().toLowerCase() === correctAns) {
            setStep('success');
        } else {
            if (attempts >= 1) setStep('fail');
            else {
                setAttempts(prev => prev + 1);
                alert("Incorrect. One attempt remains.");
                setInputVal('');
            }
        }
    };

    // --- STYLES ---
    const fontCinzel = { fontFamily: "'Cinzel', serif" };
    const fontGaramond = { fontFamily: "'Cormorant Garamond', serif" };
    const fontPlayfair = { fontFamily: "'Playfair Display', serif" };

    return (
        <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-[#050505]"
        >
            <style jsx global>{`
                @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;700&family=Cormorant+Garamond:ital,wght@0,300;0,400;1,400&family=Playfair+Display:ital,wght@0,400;1,400&display=swap');
            `}</style>

            {/* --- 1. ATMOSPHERE LAYERS (Always present) --- */}
            {/* Noise */}
            <div 
                className="absolute inset-0 pointer-events-none opacity-[0.05] mix-blend-overlay z-0"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' /%3E%3C/svg%3E")`,
                }}
            />
            
            <AnimatePresence mode="wait">
                {/* ============================================== */}
                {/* SCENARIO A: NORMAL INTERACTION          */}
                {/* ============================================== */}
                {step !== 'fail' && (
                    <motion.div 
                        key="content-container"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
                        transition={{ duration: 0.5 }}
                        className="relative z-10 w-full max-w-4xl flex flex-col items-center justify-center p-8 h-full"
                    >
                        {/* Background Gradients for Normal Mode */}
                        <div className="absolute inset-0 pointer-events-none z-[-1]" style={{ background: 'radial-gradient(circle at center, transparent 0%, rgba(0, 0, 0, 0.6) 70%, rgba(0, 0, 0, 1) 100%)' }} />
                        <div className="absolute bottom-0 left-0 right-0 h-1/2 pointer-events-none opacity-30 z-[-1]" style={{ background: 'linear-gradient(to top, rgba(20, 20, 20, 0.5) 0%, transparent 100%)' }} />

                        {/* KING IMAGE SECTION */}
                        <motion.div 
                            className="relative mb-8 md:mb-16 flex items-center justify-center"
                            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
                        >
                            {/* Desktop Titles */}
                            <motion.h2 className="hidden md:block absolute left-0 -translate-x-full pr-8 text-[#E5E5E5] text-xl tracking-[0.3em] font-light" style={fontCinzel}>THE</motion.h2>
                            <motion.h2 className="hidden md:block absolute right-0 translate-x-full pl-8 text-[#E5E5E5] text-xl tracking-[0.3em] font-light" style={fontCinzel}>SEAL</motion.h2>
                            
                            {/* Center Image */}
                            <motion.div 
                                animate={{ y: [0, -10, 0], filter: ["brightness(1)", "brightness(0.9)", "brightness(1)"] }}
                                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                            >
                                <ImageWithFallback src={kingImg} alt="Spectral King" className="h-[50vh] md:h-[60vh] max-h-[800px] opacity-90 drop-shadow-[0_30px_80px_rgba(0,0,0,0.9)]" />
                            </motion.div>

                            <h2 className="absolute bottom-0 translate-y-full text-[#E5E5E5] text-xl md:text-2xl tracking-[0.5em] font-light" style={fontCinzel}>JUDGES</h2>
                        </motion.div>

                        {/* INTERACTION AREA */}
                        <div className="w-full max-w-md min-h-[150px] flex flex-col items-center justify-start z-50">
                            <AnimatePresence mode="wait">
                                {/* INTRO */}
                                {step === 'intro' && (
                                    <motion.div key="intro" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex flex-col items-center gap-8 w-full">
                                        <p className="text-[#E5E5E5]/80 text-center text-lg italic tracking-wider" style={fontGaramond}>"Do you know the architect of this realm?"</p>
                                        <div className="flex gap-6">
                                            <button onClick={() => handleIntro(true)} className="px-8 py-3 uppercase text-xs tracking-[0.25em] text-[#E5E5E5] border border-white/20 hover:bg-white/5 transition-all duration-300" style={fontCinzel}>I Do</button>
                                            <button onClick={() => handleIntro(false)} className="px-8 py-3 uppercase text-xs tracking-[0.25em] text-[#881111] border border-[#881111]/40 hover:bg-[#881111]/10 transition-all duration-300" style={fontCinzel}>Retreat</button>
                                        </div>
                                    </motion.div>
                                )}

                                {/* NAME */}
                                {step === 'name' && (
                                    <motion.div key="name" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="w-full">
                                        <form onSubmit={handleNameSubmit} className="flex flex-col items-center w-full">
                                            <input autoFocus type="text" value={inputVal} onChange={(e) => setInputVal(e.target.value)} onFocus={() => setIsFocused(true)} onBlur={() => setIsFocused(false)} placeholder="ENTER YOUR NAME" className="w-full bg-transparent text-center text-[#E5E5E5] placeholder:text-[#333333] outline-none pb-4 text-xl tracking-[0.15em]" style={{ ...fontPlayfair, borderBottom: isFocused ? '1px solid #881111' : '1px solid #333333' }} />
                                            <button type="submit" className="mt-8 text-[10px] uppercase tracking-[0.3em] text-[#333333] hover:text-[#881111] transition-colors" style={fontCinzel}>Identify</button>
                                        </form>
                                    </motion.div>
                                )}

                                {/* CHALLENGE */}
                                {step === 'challenge' && (
                                    <motion.div key="challenge" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="w-full flex flex-col items-center">
                                        <p className="text-[#881111] text-[10px] uppercase tracking-[0.3em] mb-4" style={fontCinzel}>Security Clearance Required</p>
                                        <p className="text-[#E5E5E5] text-lg mb-8 italic text-center" style={fontGaramond}>"{securityQ}"</p>
                                        <form onSubmit={handleChallengeSubmit} className="flex flex-col items-center w-full">
                                            <input autoFocus type="text" value={inputVal} onChange={(e) => setInputVal(e.target.value)} onFocus={() => setIsFocused(true)} onBlur={() => setIsFocused(false)} placeholder="ANSWER" className="w-full bg-transparent text-center text-[#E5E5E5] placeholder:text-[#333333] outline-none pb-4 text-xl tracking-[0.15em]" style={{ ...fontPlayfair, borderBottom: isFocused ? '1px solid #E5E5E5' : '1px solid #333333' }} />
                                            <button type="submit" className="mt-8 text-[10px] uppercase tracking-[0.3em] text-[#333333] hover:text-[#E5E5E5] transition-colors" style={fontCinzel}>Verify</button>
                                        </form>
                                    </motion.div>
                                )}

                                {/* SUCCESS */}
                                {step === 'success' && (
                                    <motion.div key="success" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col items-center gap-6 w-full">
                                        <h2 className="text-2xl text-[#E5E5E5]" style={fontPlayfair}>Welcome, {userName}.</h2>
                                        <div className="p-6 border border-[#E5E5E5]/10 bg-[#E5E5E5]/5 backdrop-blur-sm w-full text-left space-y-4">
                                            <h3 className="text-sm font-bold text-[#881111] uppercase tracking-widest" style={fontCinzel}>Restricted Files Unlocked</h3>
                                            <ul className="text-sm text-[#E5E5E5]/70 space-y-3 list-none font-mono">
                                                <li>► <a href="#" className="hover:text-white hover:underline">Contact: 469-601-5763</a></li>
                                                <li>► <a href="#" className="hover:text-white hover:underline">Private Resume (PDF)</a></li>
                                            </ul>
                                        </div>
                                        <button onClick={onClose} className="mt-4 text-[10px] uppercase tracking-[0.2em] text-[#333333] hover:text-[#E5E5E5] transition-colors">Close Connection</button>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </motion.div>
                )}

                {/* ============================================== */}
                {/* SCENARIO B: TOTAL LOCKDOWN             */}
                {/* ============================================== */}
                {step === 'fail' && (
                    <motion.div 
                        key="fail-screen"
                        className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-black"
                        initial={{ opacity: 0 }} 
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        {/* Red pulsating gradient background */}
                        <motion.div 
                            className="absolute inset-0 z-0"
                            style={{ background: 'radial-gradient(circle at center, rgba(50, 0, 0, 0.4) 0%, rgba(0, 0, 0, 1) 70%)' }}
                            animate={{ opacity: [0.6, 1, 0.6] }}
                            transition={{ duration: 4, repeat: Infinity }}
                        />

                        {/* Text Container with Shake Effect */}
                        <motion.div 
                            className="relative z-10 flex flex-col items-center text-center p-4"
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ 
                                scale: 1, 
                                opacity: 1,
                                x: [0, -5, 5, -5, 5, 0], // Shake effect on enter
                            }}
                            transition={{ 
                                scale: { duration: 0.5, ease: "easeOut" },
                                x: { duration: 0.4, delay: 0.1 } 
                            }}
                        >
                            <h1 
                                className="text-[#881111] text-5xl md:text-8xl tracking-[0.2em] font-bold mb-4 drop-shadow-[0_0_15px_rgba(136,17,17,0.5)]" 
                                style={fontCinzel}
                            >
                                DENIED
                            </h1>
                            <p className="text-[#E5E5E5]/40 text-xs md:text-sm uppercase tracking-[0.5em] mb-12" style={fontGaramond}>
                                Your presence has been rejected by the sovereign
                            </p>

                            <button 
                                onClick={onClose}
                                className="group relative px-10 py-4 overflow-hidden border border-[#333333] hover:border-[#881111] transition-colors duration-500"
                            >
                                <div className="absolute inset-0 w-0 bg-[#881111] transition-all duration-[250ms] ease-out group-hover:w-full opacity-20"></div>
                                <span className="relative text-[#E5E5E5] text-xs tracking-[0.3em] uppercase" style={fontCinzel}>
                                    Leave Immediately
                                </span>
                            </button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Footer Quote (Only visible if NOT failed) */}
            {step !== 'fail' && (
                <div className="absolute bottom-8 left-0 right-0 text-center pointer-events-none z-10">
                    <p className="text-[#333333] uppercase text-[10px] tracking-[0.3em]" style={fontGaramond}>"In darkness, we find sovereignty"</p>
                </div>
            )}
        </motion.div>
    );
}