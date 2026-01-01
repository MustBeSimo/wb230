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

interface ReactiveProps {
  mouseX: number;
  mouseY: number;
}

export const ReactivePrismBackground: React.FC<ReactiveProps> = ({ mouseX, mouseY }) => {
  const moveX = mouseX * 30;
  const moveY = mouseY * 30;

  return (
    <motion.svg
      viewBox="0 0 1000 800"
      className="w-full h-full opacity-20 absolute inset-0 pointer-events-none"
      initial="hidden"
      animate="visible"
      preserveAspectRatio="xMidYMid slice"
    >
      <motion.g
        animate={{ x: moveX, y: moveY }}
        transition={{ type: 'spring', damping: 30, stiffness: 200 }}
      >
        <motion.path
          d="M -100 200 C 100 300, 300 350, 400 400"
          stroke={secondaryColor}
          strokeWidth="1"
          fill="none"
          variants={draw}
          custom={1}
        />
        <motion.path
          d="M -100 600 C 100 500, 300 450, 400 400"
          stroke={secondaryColor}
          strokeWidth="1"
          fill="none"
          variants={draw}
          custom={2}
        />
        <motion.polygon
          points="400,300 600,300 500,500"
          stroke={strokeColor}
          strokeWidth="1.5"
          fill="none"
          opacity="0.5"
          animate={{ rotate: mouseX * 5 }}
          style={{ transformOrigin: "500px 400px" }}
        />
        <motion.path
          d="M 600 300 C 700 250, 900 200, 1100 100"
          stroke={strokeColor}
          strokeWidth="1.5"
          fill="none"
          variants={draw}
          custom={3}
        />
        <motion.path
          d="M 500 500 C 700 600, 900 700, 1100 750"
          stroke={strokeColor}
          strokeWidth="1.5"
          fill="none"
          variants={draw}
          custom={4}
        />
        <circle cx="400" cy="400" r="2" fill={secondaryColor} />
        <circle cx="600" cy="400" r="2" fill={secondaryColor} />
        <circle cx="500" cy="500" r="2" fill={secondaryColor} />
      </motion.g>
    </motion.svg>
  );
};