'use client';

import { useState } from 'react';
import { motion } from 'motion/react';
import { Copy, ExternalLink, Mail } from 'lucide-react';

const email = 'tarunlsankar@gmail.com';

export function ContactSection({ onClose }: { onClose: () => void }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(email);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  };

  return (
    <motion.section
      className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-[#050505] p-5"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.18 } }}
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-25">
        <span className="absolute -left-12 top-16 rotate-[-18deg] font-serif text-[18rem] leading-none text-white/10">♣</span>
        <span className="absolute -bottom-24 -right-8 rotate-[14deg] font-serif text-[20rem] leading-none text-red-700/20">♦</span>
      </div>

      <motion.div
        aria-hidden="true"
        className="absolute h-[min(80dvh,580px)] w-[min(78vw,350px)] rounded-[22px] border border-white/10 bg-[#171717] shadow-2xl"
        initial={{ rotate: -2, x: -18, y: 10, opacity: 0 }}
        animate={{ rotate: -9, x: -44, y: 12, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 130, damping: 20 }}
      />
      <motion.div
        aria-hidden="true"
        className="absolute h-[min(80dvh,580px)] w-[min(78vw,350px)] rounded-[22px] border border-red-900/30 bg-[#0e0e0e] shadow-2xl"
        initial={{ rotate: 2, x: 18, y: 10, opacity: 0 }}
        animate={{ rotate: 8, x: 43, y: 14, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 130, damping: 20, delay: 0.04 }}
      />

      <motion.article
        className="relative z-10 flex h-[min(80dvh,580px)] w-[min(78vw,350px)] flex-col overflow-y-auto rounded-[22px] border border-black/25 bg-[#f4f0e7] p-7 text-[#111] shadow-[0_30px_90px_rgba(0,0,0,0.65)]"
        initial={{ y: 90, rotateX: 18, scale: 0.92, opacity: 0 }}
        animate={{ y: 0, rotateX: 0, scale: 1, opacity: 1 }}
        exit={{ y: 50, scale: 0.96, opacity: 0 }}
        transition={{ type: 'spring', stiffness: 125, damping: 22 }}
        style={{ transformPerspective: 1200 }}
      >
        <div className="font-serif text-3xl font-bold leading-[0.75] text-red-700">
          A
          <span className="block text-2xl">♦</span>
        </div>

        <div className="flex flex-1 flex-col items-center justify-center py-5 text-center">
          <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full border border-black/15 bg-white/50">
            <Mail aria-hidden="true" size={23} />
          </div>
          <h1 className="font-serif text-3xl font-bold">Contact</h1>
          <a
            href={`mailto:${email}`}
            className="mt-5 break-all text-base underline decoration-red-700/40 underline-offset-4 transition-colors hover:text-red-700"
          >
            {email}
          </a>
          <button
            type="button"
            onClick={handleCopy}
            className="mt-4 inline-flex items-center gap-2 rounded-md border border-black/15 bg-white/55 px-4 py-2 font-mono text-[9px] uppercase tracking-[0.16em] transition-colors hover:bg-white"
          >
            <Copy aria-hidden="true" size={13} />
            {copied ? 'Copied' : 'Copy email'}
          </button>
        </div>

        <div className="mb-4 grid shrink-0 grid-cols-2 gap-2">
          {[
            { rank: 'G', suit: '♠', name: 'GitHub', url: 'https://github.com/tarunls' },
            { rank: 'in', suit: '♥', name: 'LinkedIn', url: 'https://linkedin.com/in/tarunls' },
          ].map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between rounded-lg border border-black/15 bg-white/35 p-3 transition-all hover:-translate-y-0.5 hover:bg-white/75"
            >
              <span className="text-sm">{link.name}</span>
              <ExternalLink aria-hidden="true" size={11} className="opacity-40 transition-opacity group-hover:opacity-100" />
            </a>
          ))}
        </div>

        <div className="self-end rotate-180 font-serif text-2xl font-bold leading-[0.75] text-red-700">
          A
          <span className="block text-xl">♦</span>
        </div>
      </motion.article>

      <button
        type="button"
        onClick={onClose}
        className="absolute right-6 top-6 z-20 rounded-full border border-white/15 bg-black/65 px-5 py-2.5 font-mono text-[9px] uppercase tracking-[0.2em] text-white/65 transition-colors hover:bg-white hover:text-black"
      >
        Close
      </button>
    </motion.section>
  );
}
