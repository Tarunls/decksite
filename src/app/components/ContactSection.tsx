'use client';

import { motion, useReducedMotion } from 'motion/react';
import { Mail, X } from 'lucide-react';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

const contacts = [
  { name: 'Email Tarun Sankar', href: 'mailto:tarunlsankar@gmail.com', title: 'tarunlsankar@gmail.com', icon: Mail },
  { name: 'Tarun Sankar on GitHub', href: 'https://github.com/tarunls', title: 'GitHub', icon: FaGithub },
  { name: 'Tarun Sankar on LinkedIn', href: 'https://linkedin.com/in/tarunls', title: 'LinkedIn', icon: FaLinkedinIn },
];

export function ContactSection({ onClose, isFlipped = false }: { onClose: () => void; isFlipped?: boolean }) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.section
      aria-label="Contact"
      data-contact-theme={isFlipped ? 'light' : 'dark'}
      className="contact-table fixed inset-0 z-[100] flex items-center justify-center overflow-hidden p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.18 }}
    >
      <motion.article
        aria-label="Contact card"
        className="contact-card relative isolate aspect-[5/7] w-[min(78vw,350px,54dvh)]"
        initial={reduceMotion ? false : { y: 26, rotate: -4, opacity: 0 }}
        animate={{ y: 0, rotate: 0, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 240, damping: 25 }}
      >
        <div aria-hidden="true" className="contact-card-underlay absolute inset-0 -rotate-[7deg] rounded-[5%]" />
        <div className="contact-card-face absolute inset-0 overflow-hidden rounded-[5%]">
          <img src="/cards/work-card-back.png" alt="" draggable={false} className="contact-card-art pointer-events-none absolute inset-0 h-full w-full select-none object-contain" />
          <div aria-hidden="true" className="contact-card-frame pointer-events-none absolute inset-[6.5%] rounded-[4%] border" />
          <div className="absolute inset-x-[14%] inset-y-[15%] flex flex-col items-center justify-center">
            <span aria-hidden="true" className="contact-suit mb-7 text-5xl sm:text-6xl">♠</span>
            <h1 className="sr-only">Contact</h1>
            <div className="contact-links flex w-full items-center justify-center gap-3">
              {contacts.map(({ name, href, title, icon: Icon }) => (
                <a
                  key={href}
                  href={href}
                  aria-label={name}
                  title={title}
                  {...(href.startsWith('https:') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  className="contact-icon flex aspect-square w-[30%] max-w-16 shrink-0 items-center justify-center rounded-xl border transition-[color,background-color,transform] duration-150 hover:-translate-y-1 focus-visible:outline-2 focus-visible:outline-offset-4"
                >
                  <Icon aria-hidden="true" className="h-[42%] w-[42%]" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </motion.article>

      <button type="button" onClick={onClose} aria-label="Close contact" className="contact-close absolute right-6 top-6 flex h-11 w-11 items-center justify-center rounded-full border transition-colors">
        <X aria-hidden="true" size={19} />
      </button>
    </motion.section>
  );
}
