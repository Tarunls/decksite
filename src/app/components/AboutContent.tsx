'use client';

import { motion } from 'motion/react';

// Helper for the stats
function StatBlock({ label, value }: { label: string, value: string }) {
  return (
    <div className="flex flex-col border-l border-black/10 pl-3">
      <span className="text-[10px] font-mono uppercase tracking-widest opacity-50 mb-1 text-gray-600">
        {label}
      </span>
      <span className="text-base font-medium text-gray-900 truncate">
        {value}
      </span>
    </div>
  )
}

interface AboutContentProps {
  onClose: () => void;
}

export function AboutContent({ onClose }: AboutContentProps) {
  return (
    <div className="relative w-full h-full bg-white flex flex-col">
      {/* Close Button */}
      <button 
        onClick={(e) => { e.stopPropagation(); onClose(); }}
        className="absolute top-6 right-6 z-50 text-gray-400 hover:text-black font-mono text-xs uppercase tracking-widest"
      >
        [ Close ]
      </button>

      {/* Scrollable Area */}
      <div className="flex-1 overflow-y-auto p-8 md:p-12 scrollbar-hide">
        <div className="max-w-4xl mx-auto space-y-8 h-full flex flex-col justify-center">
          
          {/* Header */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 border-b border-black/10 pb-6">
            <div>
              <div className="text-xs font-mono uppercase tracking-[0.3em] mb-2 text-gray-500">
                 Omni
              </div>
              <h2 className="text-4xl md:text-6xl font-serif font-bold text-gray-900">
                Info<br />
              </h2>
            </div>
            <div className="text-right">
              <div className="text-xs font-mono uppercase tracking-widest text-gray-500">Level</div>
              <div className="text-3xl font-light text-gray-900">21</div>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-3 gap-4">
            <StatBlock label="Class" value="Engineer" />
            <StatBlock label="Guild" value="UTD" />
            <StatBlock label="Origin" value="Texas" />
          </div>

          {/* Bio */}
          <div className="text-base md:text-lg leading-relaxed font-light text-gray-600">
            <p>
              I'm just a goofy goober for now.
            </p>
          </div>

          {/* Skills */}
          <div>
            <div className="flex flex-wrap gap-2">
              {['React', 'Next.js', 'TypeScript', 'Tailwind', 'Motion', 'Python', 'Node.js', 'Figma'].map((tech) => (
                <span key={tech} className="px-3 py-1 text-[10px] font-mono uppercase tracking-wider border border-black/10 rounded-sm text-gray-800">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}