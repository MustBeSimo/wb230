import React from 'react';
import { motion } from 'framer-motion';

// An inspiring visual showing the ripple effect of AI implementation
export const ImpactRipple: React.FC = () => {
  const ripples = [
    { delay: 0, label: 'Core System', size: 60 },
    { delay: 0.5, label: 'Team Adoption', size: 120 },
    { delay: 1, label: 'Process Change', size: 180 },
    { delay: 1.5, label: 'Business Impact', size: 240 },
  ];

  const impactStats = [
    { angle: 45, label: '+15h/week', sublabel: 'Time Saved' },
    { angle: 135, label: '95%', sublabel: 'Accuracy' },
    { angle: 225, label: '55+', sublabel: 'Active Users' },
    { angle: 315, label: '42%', sublabel: 'Cost Reduction' },
  ];

  return (
    <div className="w-full aspect-square max-w-md mx-auto relative">
      <svg viewBox="0 0 300 300" className="w-full h-full">
        <defs>
          <radialGradient id="rippleGradient">
            <stop offset="0%" stopColor="#B85C38" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#B85C38" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Ripple circles */}
        {ripples.map((ripple, i) => (
          <motion.circle
            key={i}
            cx="150"
            cy="150"
            r={ripple.size / 2}
            fill="none"
            stroke="#B85C38"
            strokeWidth={i === 0 ? 2 : 1}
            strokeOpacity={0.3 - i * 0.05}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{
              scale: [0.8, 1.1, 1],
              opacity: [0, 0.6, 0.3],
            }}
            transition={{
              duration: 2,
              delay: ripple.delay,
              repeat: Infinity,
              repeatDelay: 2,
            }}
          />
        ))}

        {/* Pulsing core */}
        <motion.circle
          cx="150"
          cy="150"
          r="25"
          fill="#B85C38"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [1, 0.8, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        {/* AI text in core */}
        <text
          x="150"
          y="155"
          textAnchor="middle"
          className="text-sm fill-white font-bold"
        >
          AI
        </text>

        {/* Connecting lines to stats */}
        {impactStats.map((stat, i) => {
          const radian = (stat.angle * Math.PI) / 180;
          const innerRadius = 35;
          const outerRadius = 130;
          const x1 = 150 + Math.cos(radian) * innerRadius;
          const y1 = 150 + Math.sin(radian) * innerRadius;
          const x2 = 150 + Math.cos(radian) * outerRadius;
          const y2 = 150 + Math.sin(radian) * outerRadius;

          return (
            <g key={i}>
              {/* Line */}
              <motion.line
                x1={x1}
                y1={y1}
                x2={x2}
                y2={y2}
                stroke="#B85C38"
                strokeWidth="1"
                strokeDasharray="4 2"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.5 }}
                transition={{ duration: 1, delay: 0.5 + i * 0.2 }}
              />

              {/* Stat circle */}
              <motion.circle
                cx={x2}
                cy={y2}
                r="8"
                fill="white"
                stroke="#B85C38"
                strokeWidth="2"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1 + i * 0.2, type: 'spring' }}
              />

              {/* Stat value */}
              <motion.text
                x={x2 + (stat.angle > 90 && stat.angle < 270 ? -20 : 20)}
                y={y2 - 8}
                textAnchor={stat.angle > 90 && stat.angle < 270 ? 'end' : 'start'}
                className="text-sm fill-slate-900 font-bold"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 + i * 0.2 }}
              >
                {stat.label}
              </motion.text>

              {/* Stat sublabel */}
              <motion.text
                x={x2 + (stat.angle > 90 && stat.angle < 270 ? -20 : 20)}
                y={y2 + 6}
                textAnchor={stat.angle > 90 && stat.angle < 270 ? 'end' : 'start'}
                className="text-[9px] fill-slate-500 font-medium uppercase tracking-wider"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.4 + i * 0.2 }}
              >
                {stat.sublabel}
              </motion.text>
            </g>
          );
        })}

        {/* Floating particles */}
        {[...Array(8)].map((_, i) => {
          const angle = (i / 8) * Math.PI * 2;
          const radius = 80 + Math.random() * 30;
          return (
            <motion.circle
              key={`particle-${i}`}
              cx={150 + Math.cos(angle) * radius}
              cy={150 + Math.sin(angle) * radius}
              r="3"
              fill="#B85C38"
              opacity="0.4"
              animate={{
                opacity: [0.2, 0.6, 0.2],
                scale: [0.8, 1.2, 0.8],
              }}
              transition={{
                duration: 2 + Math.random(),
                delay: i * 0.3,
                repeat: Infinity,
              }}
            />
          );
        })}
      </svg>
    </div>
  );
};
