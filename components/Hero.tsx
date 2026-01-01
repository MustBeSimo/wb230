import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { BookingButton } from './UI';
import { ReactivePrismBackground } from './visuals';

const Hero: React.FC = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  // Mouse tracking state
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      // Normalize mouse position from -1 to 1
      setMousePos({
        x: (event.clientX / window.innerWidth) * 2 - 1,
        y: (event.clientY / window.innerHeight) * 2 - 1,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center items-center px-6 pt-20 overflow-hidden">

      {/* REACTIVE VISUAL LAYER */}
      <div className="absolute inset-0 z-0">
        <ReactivePrismBackground mouseX={mousePos.x} mouseY={mousePos.y} />
      </div>

      {/* MAIN CONTENT */}
      <motion.div
        style={{ y: y1, opacity }}
        className="text-center max-w-5xl mx-auto z-10 w-full relative"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="inline-block py-1.5 px-4 bg-white/80 backdrop-blur-sm border border-slate-200 text-slate-600 text-xs font-bold mb-8 uppercase tracking-widest rounded-[2px] shadow-sm">
            W230 Specialized Implementation
          </span>
          <h1 className="text-5xl md:text-8xl font-bold tracking-tight text-slate-900 mb-8 leading-[1] font-serif">
            AI Systems Your Team Will <br className="hidden md:block" />
            <span className="text-[#B85C38] italic relative inline-block">
              Actually Use.
              <svg className="absolute w-full h-3 -bottom-1 left-0" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0 5 Q 50 10 100 5" stroke="#B85C38" strokeWidth="2" fill="none" opacity="0.5" />
              </svg>
            </span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-xl md:text-2xl text-slate-700 mb-12 max-w-2xl mx-auto leading-relaxed font-light bg-white/50 backdrop-blur-sm p-4 rounded-lg"
        >
          I design and deploy internal AI workflows with adoption, QA, and handoff.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col items-center gap-8"
        >
          <div className="flex flex-col items-center gap-2">
            <BookingButton className="shadow-2xl shadow-[#B85C38]/20" />
            <p className="text-sm text-slate-500 italic">
              Currently accepting 1 client for Jan/Feb 2026.
            </p>
          </div>

          {/* Proof Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-12 mt-8 border-t border-slate-200 pt-8 w-full">
            {[
              { label: "Active Users", value: "55+", note: "Measured as weekly active users over 8 weeks." },
              { label: "ROI (Internal)", value: "1,300×", note: "ROI multiple reported internally (method available on request)" },
              { label: "Labour Reduction", value: "42%", note: "Measured as time-on-task before/after, sampled across 20 jobs." },
              { label: "Quoting Speed", value: "-7 Days", note: "Measured as median time from request to first draft." },
            ].map((stat, i) => (
              <div key={i} className="flex flex-col relative group cursor-help">
                <span className="text-2xl md:text-3xl font-bold text-slate-900 font-serif border-b border-dotted border-slate-300 inline-block w-fit" title={stat.note}>
                  {stat.value}
                </span>
                <span className="text-xs font-bold uppercase tracking-widest text-[#B85C38] mt-1">{stat.label}</span>

                {/* Method Note Tooltip */}
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-48 bg-slate-800 text-white text-xs p-2 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-lg z-20 font-sans font-light">
                  {stat.note}
                  <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-slate-800"></div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* Gradient fade at bottom to blend into next section */}
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-[#FAFAF9] to-transparent z-10" />
    </section>
  );
};

export default Hero;