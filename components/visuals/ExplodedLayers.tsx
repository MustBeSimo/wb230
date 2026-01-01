import React from 'react';
import { motion, Variants } from 'framer-motion';

const strokeColor = "#B85C38";
const secondaryColor = "#0F172A";

const draw: Variants = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (i: number) => {
    const delay = i * 0.2;
    return {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { delay, type: "spring", duration: 1.5, bounce: 0 },
        opacity: { delay, duration: 0.01 }
      }
    };
  }
};

export const ExplodedLayers: React.FC = () => {
  return (
    <motion.svg
      viewBox="0 0 300 300"
      className="w-full h-auto drop-shadow-xl"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <motion.path
        variants={draw} custom={1}
        d="M50,220 L150,260 L250,220 L150,180 Z"
        fill="rgba(255,255,255,0.9)"
        stroke={secondaryColor}
        strokeWidth="1"
        opacity="0.5"
      />
      <text x="230" y="240" fontSize="10" fill={secondaryColor} opacity="0.6">Database</text>

      <motion.line variants={draw} custom={1.5} x1="50" y1="220" x2="50" y2="140" stroke={secondaryColor} strokeDasharray="2 2" opacity="0.3" />
      <motion.line variants={draw} custom={1.5} x1="150" y1="260" x2="150" y2="180" stroke={secondaryColor} strokeDasharray="2 2" opacity="0.3" />
      <motion.line variants={draw} custom={1.5} x1="250" y1="220" x2="250" y2="140" stroke={secondaryColor} strokeDasharray="2 2" opacity="0.3" />

      <motion.path
        variants={draw} custom={2}
        d="M50,140 L150,180 L250,140 L150,100 Z"
        fill="rgba(191, 87, 56, 0.05)"
        stroke={strokeColor}
        strokeWidth="2"
      />
      <text x="230" y="160" fontSize="10" fill={strokeColor} fontWeight="bold">AI Logic</text>

      <motion.line variants={draw} custom={2.5} x1="50" y1="140" x2="50" y2="60" stroke={secondaryColor} strokeDasharray="2 2" opacity="0.3" />
      <motion.line variants={draw} custom={2.5} x1="150" y1="180" x2="150" y2="100" stroke={secondaryColor} strokeDasharray="2 2" opacity="0.3" />
      <motion.line variants={draw} custom={2.5} x1="250" y1="140" x2="250" y2="60" stroke={secondaryColor} strokeDasharray="2 2" opacity="0.3" />

      <motion.path
        variants={draw} custom={3}
        d="M50,60 L150,100 L250,60 L150,20 Z"
        fill="white"
        stroke={secondaryColor}
        strokeWidth="1"
      />
      <text x="230" y="70" fontSize="10" fill={secondaryColor}>Interface</text>
    </motion.svg>
  );
};