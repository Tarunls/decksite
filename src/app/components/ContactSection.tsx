'use client';

import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion, useTransform } from 'motion/react';
import { useCursorMotion } from '../../lib/useCursorMotion';

const email = 'tarunlsankar@gmail.com';

export function ContactSection({ onClose, isFlipped = false, isReducedMotion = false }: {
  onClose: () => void;
  isFlipped?: boolean;
  isReducedMotion?: boolean;
}) {
  const [copyStatus, setCopyStatus] = useState('');
  const copyTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const systemReducedMotion = useReducedMotion();
  const { x, y } = useCursorMotion(isReducedMotion || Boolean(systemReducedMotion));
  const rotateX = useTransform(y, [-1, 1], [7, -7]);
  const rotateY = useTransform(x, [-1, 1], [-9, 9]);

  useEffect(() => () => {
    if (copyTimer.current) clearTimeout(copyTimer.current);
  }, []);

  const copyEmail = async () => {
    if (copyTimer.current) clearTimeout(copyTimer.current);
    try {
      await navigator.clipboard.writeText(email);
      setCopyStatus('Email copied');
    } catch {
      setCopyStatus(email);
    }
    copyTimer.current = setTimeout(() => setCopyStatus(''), 2500);
  };

  const text = isFlipped ? 'text-black' : 'text-white';
  const muted = isFlipped ? 'text-black/55 hover:text-black' : 'text-white/55 hover:text-white';
  const border = isFlipped ? 'border-black/20' : 'border-white/20';

  return (
    <motion.section
      aria-label="Contact"
      data-contact-theme={isFlipped ? 'light' : 'dark'}
      className={`fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto px-6 py-24 ${isFlipped ? 'bg-[#f4f3f3]/95' : 'bg-black/90'}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      <span aria-hidden="true" className="pointer-events-none absolute bottom-1/4 right-1/4 select-none font-serif text-[12rem] text-red-600/[0.035]">♥</span>

      <motion.div
        className="relative flex flex-col items-center text-center"
        style={{ rotateX, rotateY, transformPerspective: 1000, transformStyle: 'preserve-3d' }}
      >
        <h1 className={`mb-10 font-mono text-xs tracking-[0.4em] ${isFlipped ? 'text-red-700' : 'text-red-500'}`}>
          <span aria-hidden="true">♦ </span>CONTACT<span aria-hidden="true"> ♦</span>
        </h1>

        <div className="relative">
          <button
            type="button"
            onClick={copyEmail}
            aria-label="Copy email address"
            title={email}
            className={`cursor-pointer rounded-sm font-serif text-7xl leading-none tracking-tighter transition-opacity hover:opacity-75 focus-visible:outline-2 focus-visible:outline-offset-8 md:text-9xl ${text}`}
          >
            Email
          </button>
          <AnimatePresence>
            {copyStatus && (
              <motion.span
                role="status"
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className={`absolute -top-10 left-1/2 -translate-x-1/2 whitespace-nowrap font-mono text-xs ${isFlipped ? 'text-green-800' : 'text-green-400'}`}
              >
                {copyStatus}
              </motion.span>
            )}
          </AnimatePresence>
        </div>

        <div className="mt-16 flex gap-12 md:mt-20">
          {[
            { name: 'GitHub', href: 'https://github.com/tarunls' },
            { name: 'LinkedIn', href: 'https://linkedin.com/in/tarunls' },
          ].map(({ name, href }) => (
            <a key={name} href={href} target="_blank" rel="noopener noreferrer" className={`flex min-h-11 flex-col items-center justify-center gap-3 font-mono text-xs uppercase tracking-[0.2em] transition-colors ${muted}`}>
              {name}
              <span aria-hidden="true" className={`w-8 border-t ${border}`} />
            </a>
          ))}
        </div>
      </motion.div>

      <button type="button" onClick={onClose} aria-label="Close contact" className={`fixed bottom-10 min-h-11 rounded-full border px-6 py-2 font-mono text-[10px] uppercase tracking-[0.2em] transition-colors ${border} ${muted}`}>
        Back to deck
      </button>
    </motion.section>
  );
}
