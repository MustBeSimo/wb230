import React from 'react';
import { motion } from 'framer-motion';

export const JudgmentHarness: React.FC = () => {
  return (
    <div className="w-full h-full relative bg-[#FAFAF9] font-sans flex items-center justify-center select-none overflow-hidden">
      {/* Subtle Background Grid */}
      <div className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: 'linear-gradient(#0F172A 1px, transparent 1px), linear-gradient(90deg, #0F172A 1px, transparent 1px)',
          backgroundSize: '24px 24px'
        }}
      />

      <svg className="w-full h-full max-w-4xl absolute inset-0 m-auto" viewBox="0 0 800 400" preserveAspectRatio="xMidYMid meet">
        <defs>
          <filter id="paper-texture">
            <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="3" stitchTiles="stitch" />
          </filter>
        </defs>

        {/* --- LEFT: NOISE (Commodity) --- */}
        <g transform="translate(0, 0)">
          <text x="120" y="340" textAnchor="middle" className="text-[10px] fill-slate-400 font-mono tracking-widest uppercase">Commodity (Input)</text>

          {[0, 1, 2, 3].map((i) => (
            <motion.path
              key={`noise-${i}`}
              // Wavy chaotic lines entering the prism
              d={`M 0 ${160 + i * 20} C 80 ${160 + i * 20 - 40}, 200 ${160 + i * 20 + 40}, 360 200`}
              fill="none"
              stroke="#94a3b8"
              strokeWidth="1.5"
              strokeDasharray="6 4"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1, strokeDashoffset: -50 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear", delay: i * 0.4 }}
            />
          ))}
        </g>

        {/* --- CENTER: PRISM (The Taste Kernel) --- */}
        <g transform="translate(400, 200)">
          {/* The Triangle Prism */}
          <motion.path
            d="M -70 90 L 0 -90 L 70 90 Z"
            fill="rgba(191, 87, 56, 0.03)"
            stroke="#B85C38"
            strokeWidth="2.5"
            initial={{ scale: 0.95 }}
            animate={{ scale: 1 }}
            transition={{ duration: 4, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
          />

          {/* Internal Refraction Logic (The "Turn") */}
          <motion.path
            d="M -20 10 L 20 10"
            stroke="#B85C38" strokeWidth="1.5" strokeLinecap="round"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <motion.path
            d="M -10 -20 L 10 -20"
            stroke="#B85C38" strokeWidth="1.5" strokeLinecap="round"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
          />

          {/* Label */}
          <text x="0" y="130" textAnchor="middle" className="text-xs fill-[#B85C38] font-serif italic font-bold">Taste Kernel</text>
        </g>

        {/* --- RIGHT: SIGNAL (Verified) --- */}
        <g transform="translate(470, 0)">
          <text x="180" y="340" textAnchor="middle" className="text-[10px] fill-slate-900 font-bold font-mono tracking-widest uppercase">Verified Output</text>

          {[0, 1, 2].map((i) => (
            <motion.line
              key={`signal-${i}`}
              x1="0" y1="200" x2="350" y2={100 + i * 80} // Perfectly straight diverging lines
              stroke="#0F172A" // Dark Navy (High Contrast)
              strokeWidth="2.5"
              strokeLinecap="square"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 1.5, repeat: Infinity, delay: 1.5 + i * 0.2, repeatDelay: 1, ease: "easeOut" }}
            />
          ))}

          {/* Checkmarks at end of lines */}
          {[0, 1, 2].map((i) => (
            <motion.path
              key={`check-${i}`}
              d={`M 360 ${100 + i * 80} L 365 ${105 + i * 80} L 375 ${95 + i * 80}`}
              fill="none"
              stroke="#9C5438"
              strokeWidth="2"
              initial={{ opacity: 0, pathLength: 0 }}
              animate={{ opacity: 1, pathLength: 1 }}
              transition={{ delay: 2.8 + i * 0.2, duration: 0.3, repeat: Infinity, repeatDelay: 2.2 }}
            />
          ))}
        </g>
      </svg>

      {/* Decorative "Paper" Corners */}
      <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-slate-300"></div>
      <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-slate-300"></div>
      <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-slate-300"></div>
      <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-slate-300"></div>
    </div>
  );
};