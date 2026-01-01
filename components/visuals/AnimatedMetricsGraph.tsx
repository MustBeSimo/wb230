import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';

interface DataPoint {
  week: number;
  before: number;
  after: number;
}

const generatePath = (data: DataPoint[], key: 'before' | 'after', width: number, height: number): string => {
  const padding = 40;
  const graphWidth = width - padding * 2;
  const graphHeight = height - padding * 2;

  const maxValue = Math.max(...data.map(d => Math.max(d.before, d.after)));

  return data.map((point, i) => {
    const x = padding + (i / (data.length - 1)) * graphWidth;
    const y = padding + graphHeight - (point[key] / maxValue) * graphHeight;
    return `${i === 0 ? 'M' : 'L'} ${x} ${y}`;
  }).join(' ');
};

export const AnimatedMetricsGraph: React.FC = () => {
  const [activeMetric, setActiveMetric] = useState<'time' | 'accuracy' | 'adoption'>('time');
  const controls = useAnimation();

  const metrics = {
    time: {
      title: 'Hours Saved Per Week',
      subtitle: 'Before vs After Implementation',
      data: [
        { week: 1, before: 2, after: 2 },
        { week: 2, before: 2, after: 5 },
        { week: 3, before: 2, after: 8 },
        { week: 4, before: 2, after: 11 },
        { week: 5, before: 2, after: 13 },
        { week: 6, before: 2, after: 15 },
      ],
      beforeLabel: 'Manual Process',
      afterLabel: 'With AI System',
      unit: 'hrs',
    },
    accuracy: {
      title: 'Output Accuracy Rate',
      subtitle: 'Error reduction over time',
      data: [
        { week: 1, before: 72, after: 72 },
        { week: 2, before: 72, after: 82 },
        { week: 3, before: 72, after: 89 },
        { week: 4, before: 72, after: 93 },
        { week: 5, before: 72, after: 95 },
        { week: 6, before: 72, after: 97 },
      ],
      beforeLabel: 'Human Only',
      afterLabel: 'AI-Assisted',
      unit: '%',
    },
    adoption: {
      title: 'Team Adoption Rate',
      subtitle: 'Active users engagement',
      data: [
        { week: 1, before: 0, after: 15 },
        { week: 2, before: 0, after: 32 },
        { week: 3, before: 0, after: 45 },
        { week: 4, before: 0, after: 52 },
        { week: 5, before: 0, after: 55 },
        { week: 6, before: 0, after: 58 },
      ],
      beforeLabel: 'Baseline',
      afterLabel: 'Active Users',
      unit: 'users',
    },
  };

  const currentMetric = metrics[activeMetric];
  const width = 500;
  const height = 280;

  const beforePath = generatePath(currentMetric.data, 'before', width, height);
  const afterPath = generatePath(currentMetric.data, 'after', width, height);

  // Auto-cycle through metrics
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveMetric(prev => {
        if (prev === 'time') return 'accuracy';
        if (prev === 'accuracy') return 'adoption';
        return 'time';
      });
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Animate on metric change
  useEffect(() => {
    controls.start({
      pathLength: 1,
      transition: { duration: 1.5, ease: 'easeOut' }
    });
  }, [activeMetric, controls]);

  return (
    <div className="w-full bg-white border border-slate-200 rounded-[4px] p-6 md:p-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
        <div>
          <motion.h3
            key={currentMetric.title}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-xl font-bold text-slate-900 font-serif"
          >
            {currentMetric.title}
          </motion.h3>
          <motion.p
            key={currentMetric.subtitle}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-sm text-slate-500"
          >
            {currentMetric.subtitle}
          </motion.p>
        </div>

        {/* Metric Selector */}
        <div className="flex gap-2 mt-4 md:mt-0">
          {(['time', 'accuracy', 'adoption'] as const).map((metric) => (
            <button
              key={metric}
              onClick={() => setActiveMetric(metric)}
              className={`px-3 py-1.5 text-xs font-bold uppercase tracking-wider rounded-[2px] transition-all duration-300 ${
                activeMetric === metric
                  ? 'bg-slate-900 text-white'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {metric === 'time' ? 'Time' : metric === 'accuracy' ? 'Accuracy' : 'Adoption'}
            </button>
          ))}
        </div>
      </div>

      {/* Graph */}
      <div className="relative">
        <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-auto">
          {/* Grid lines */}
          {[0, 1, 2, 3, 4].map((i) => (
            <line
              key={i}
              x1="40"
              y1={40 + i * 50}
              x2={width - 40}
              y2={40 + i * 50}
              stroke="#e2e8f0"
              strokeWidth="1"
              strokeDasharray="4 4"
            />
          ))}

          {/* Week labels */}
          {currentMetric.data.map((point, i) => (
            <text
              key={i}
              x={40 + (i / (currentMetric.data.length - 1)) * (width - 80)}
              y={height - 15}
              textAnchor="middle"
              className="text-[10px] fill-slate-400 font-mono"
            >
              W{point.week}
            </text>
          ))}

          {/* Before line (dashed, muted) */}
          <motion.path
            d={beforePath}
            fill="none"
            stroke="#94a3b8"
            strokeWidth="2"
            strokeDasharray="6 4"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1, ease: 'easeOut' }}
          />

          {/* After line (solid, accent) */}
          <motion.path
            key={activeMetric}
            d={afterPath}
            fill="none"
            stroke="#B85C38"
            strokeWidth="3"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5, ease: 'easeOut', delay: 0.3 }}
          />

          {/* Data points on after line */}
          {currentMetric.data.map((point, i) => {
            const x = 40 + (i / (currentMetric.data.length - 1)) * (width - 80);
            const maxValue = Math.max(...currentMetric.data.map(d => Math.max(d.before, d.after)));
            const y = 40 + (height - 80) - (point.after / maxValue) * (height - 80);
            return (
              <motion.circle
                key={i}
                cx={x}
                cy={y}
                r="5"
                fill="#B85C38"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.5 + i * 0.1, duration: 0.3 }}
              />
            );
          })}

          {/* Final value callout */}
          <motion.g
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.2 }}
          >
            <rect
              x={width - 90}
              y="35"
              width="55"
              height="30"
              rx="4"
              fill="#B85C38"
            />
            <text
              x={width - 62}
              y="56"
              textAnchor="middle"
              className="text-sm fill-white font-bold"
            >
              {currentMetric.data[currentMetric.data.length - 1].after}{currentMetric.unit === '%' ? '%' : ''}
            </text>
          </motion.g>
        </svg>

        {/* Pulsing indicator */}
        <motion.div
          className="absolute top-4 right-4 flex items-center gap-2"
          animate={{ opacity: [1, 0.5, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <span className="w-2 h-2 rounded-full bg-green-500"></span>
          <span className="text-xs text-slate-500 font-mono">LIVE</span>
        </motion.div>
      </div>

      {/* Legend */}
      <div className="flex items-center justify-center gap-8 mt-6 pt-6 border-t border-slate-100">
        <div className="flex items-center gap-2">
          <div className="w-6 h-0.5 bg-slate-400" style={{ backgroundImage: 'repeating-linear-gradient(90deg, #94a3b8 0, #94a3b8 4px, transparent 4px, transparent 8px)' }}></div>
          <span className="text-xs text-slate-500">{currentMetric.beforeLabel}</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-6 h-0.5 bg-[#B85C38]"></div>
          <span className="text-xs text-slate-700 font-medium">{currentMetric.afterLabel}</span>
        </div>
      </div>
    </div>
  );
};
