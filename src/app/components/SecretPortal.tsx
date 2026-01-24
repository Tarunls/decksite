'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface SecretPortalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SecretPortal({ isOpen, onClose }: SecretPortalProps) {
  const [password, setPassword] = useState('');
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [errorShake, setErrorShake] = useState(0);

  // CHANGE THIS TO YOUR SECRET PASSWORD
  const FRIEND_PASSWORD = "anteup"; 

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password.toLowerCase() === FRIEND_PASSWORD) {
      setIsUnlocked(true);
    } else {
      setErrorShake(prev => prev + 1);
      setPassword('');
    }
  };

  useEffect(() => {
    if (!isOpen) {
      setTimeout(() => {
        setIsUnlocked(false);
        setPassword('');
      }, 500);
    }
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-xl">
          
          <button 
            onClick={onClose}
            className="absolute top-8 right-8 text-white/50 hover:text-white font-mono uppercase tracking-widest text-xs"
          >
            [ Exit ]
          </button>

          {/* 1. LOGIN SCREEN */}
          {!isUnlocked && (
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ 
                scale: 1, 
                opacity: 1,
                x: [0, -10, 10, -10, 10, 0] 
              }}
              key={errorShake} 
              transition={{ duration: errorShake > 0 ? 0.4 : 0.5 }}
              className="w-full max-w-md p-8 text-center"
            >
              <div className="text-4xl mb-6">🔒</div>
              <h2 className="text-white font-serif text-2xl mb-2">Restricted Access</h2>
              <p className="text-white/40 font-mono text-xs uppercase tracking-widest mb-8">
                Enter the Passcode
              </p>

              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <input 
                  type="password" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="******"
                  className="bg-transparent border-b border-white/20 text-center text-white text-2xl py-2 focus:outline-none focus:border-red-500 transition-colors font-mono tracking-[0.5em]"
                  autoFocus
                />
              </form>
            </motion.div>
          )}

          {/* 2. UNLOCKED CONTENT */}
          {isUnlocked && (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center text-white"
            >
              <h1 className="text-4xl font-serif text-red-500 mb-4">The Inner Circle</h1>
              <p>Welcome to the VIP lounge.</p>
              {/* Add your secret content/links here */}
            </motion.div>
          )}
        </div>
      )}
    </AnimatePresence>
  );
}