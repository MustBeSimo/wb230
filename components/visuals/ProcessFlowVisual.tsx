import React from 'react';
import { motion } from 'framer-motion';

// A beautiful animated visual showing the transformation from chaos to structured output
export const ProcessFlowVisual: React.FC = () => {
  // Particles representing chaotic data input
  const particles = Array.from({ length: 12 }, (_, i) => ({
    id: i,
    startX: Math.random() * 100 + 20,
    startY: Math.random() * 200 + 50,
    delay: i * 0.15,
  }));

  // Structured output lines
  const outputLines = [
    { y: 100, label: 'Verified', color: '#10b981' },
    { y: 150, label: 'Formatted', color: '#3b82f6' },
    { y: 200, label: 'Routed', color: '#8b5cf6' },
  ];

  return (
    <div className="w-full h-80 bg-gradient-to-br from-slate-50 to-white rounded-[4px] border border-slate-200 overflow-hidden relative">
      <svg viewBox="0 0 600 300" className="w-full h-full" preserveAspectRatio="xMidYMid meet">
        <defs>
          {/* Gradient for the transformation zone */}
          <linearGradient id="transformGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#B85C38" stopOpacity="0.1" />
            <stop offset="50%" stopColor="#B85C38" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#B85C38" stopOpacity="0.1" />
          </linearGradient>

          {/* Glow filter */}
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Left label */}
        <text x="60" y="280" textAnchor="middle" className="text-[10px] fill-slate-400 font-mono uppercase tracking-widest">
          Raw Input
        </text>

        {/* Right label */}
        <text x="540" y="280" textAnchor="middle" className="text-[10px] fill-slate-900 font-bold font-mono uppercase tracking-widest">
          Structured Output
        </text>

        {/* Transformation zone (center prism area) */}
        <motion.rect
          x="240"
          y="50"
          width="120"
          height="200"
          fill="url(#transformGradient)"
          rx="4"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 3, repeat: Infinity }}
        />

        {/* The prism/processor */}
        <motion.path
          d="M 300 70 L 340 150 L 300 230 L 260 150 Z"
          fill="none"
          stroke="#B85C38"
          strokeWidth="2"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, ease: 'easeInOut' }}
        />
        <motion.path
          d="M 300 70 L 340 150 L 300 230 L 260 150 Z"
          fill="rgba(184, 92, 56, 0.1)"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        />

        {/* "AI" label in center */}
        <motion.text
          x="300"
          y="155"
          textAnchor="middle"
          className="text-xs fill-[#B85C38] font-bold font-mono"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          AI
        </motion.text>

        {/* Chaotic input particles */}
        {particles.map((particle) => (
          <motion.circle
            key={particle.id}
            r="4"
            fill="#94a3b8"
            initial={{
              cx: particle.startX,
              cy: particle.startY,
              opacity: 0,
            }}
            animate={{
              cx: [particle.startX, 180, 260],
              cy: [particle.startY, 150, 150],
              opacity: [0, 0.8, 0],
              scale: [1, 0.8, 0.3],
            }}
            transition={{
              duration: 2.5,
              delay: particle.delay,
              repeat: Infinity,
              repeatDelay: 1,
              ease: 'easeInOut',
            }}
          />
        ))}

        {/* Wavy input paths */}
        {[0, 1, 2, 3].map((i) => (
          <motion.path
            key={i}
            d={`M 20 ${100 + i * 30} Q 100 ${100 + i * 30 + (i % 2 === 0 ? -20 : 20)}, 180 ${130 + i * 10} Q 220 ${150}, 260 150`}
            fill="none"
            stroke="#cbd5e1"
            strokeWidth="1.5"
            strokeDasharray="4 4"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{
              pathLength: 1,
              opacity: [0, 0.6, 0],
              strokeDashoffset: [0, -20],
            }}
            transition={{
              duration: 3,
              delay: i * 0.4,
              repeat: Infinity,
              ease: 'linear',
            }}
          />
        ))}

        {/* Structured output lines */}
        {outputLines.map((line, i) => (
          <g key={i}>
            {/* Main line */}
            <motion.line
              x1="340"
              y1="150"
              x2="520"
              y2={line.y}
              stroke={line.color}
              strokeWidth="2.5"
              strokeLinecap="round"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{
                duration: 1,
                delay: 2 + i * 0.3,
                repeat: Infinity,
                repeatDelay: 3,
              }}
            />

            {/* End dot */}
            <motion.circle
              cx="530"
              cy={line.y}
              r="6"
              fill={line.color}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                delay: 2.5 + i * 0.3,
                duration: 0.3,
                repeat: Infinity,
                repeatDelay: 3.7,
              }}
            />

            {/* Checkmark */}
            <motion.path
              d={`M ${525} ${line.y} L ${530} ${line.y + 4} L ${538} ${line.y - 4}`}
              fill="none"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{
                delay: 2.8 + i * 0.3,
                duration: 0.3,
                repeat: Infinity,
                repeatDelay: 3.7,
              }}
            />

            {/* Label */}
            <motion.text
              x="555"
              y={line.y + 4}
              className="text-[10px] fill-slate-600 font-medium"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                delay: 3 + i * 0.3,
                repeat: Infinity,
                repeatDelay: 3.7,
              }}
            >
              {line.label}
            </motion.text>
          </g>
        ))}

        {/* Floating accent particles in transformation zone */}
        {[0, 1, 2, 3, 4].map((i) => (
          <motion.circle
            key={`accent-${i}`}
            cx={270 + Math.random() * 60}
            cy={80 + i * 35}
            r="2"
            fill="#B85C38"
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0, 1, 0],
              y: [0, -10, 0],
            }}
            transition={{
              duration: 2,
              delay: i * 0.4,
              repeat: Infinity,
            }}
          />
        ))}
      </svg>

      {/* Corner decorations */}
      <div className="absolute top-2 left-2 w-4 h-4 border-t border-l border-slate-300"></div>
      <div className="absolute top-2 right-2 w-4 h-4 border-t border-r border-slate-300"></div>
      <div className="absolute bottom-2 left-2 w-4 h-4 border-b border-l border-slate-300"></div>
      <div className="absolute bottom-2 right-2 w-4 h-4 border-b border-r border-slate-300"></div>
    </div>
  );
};
