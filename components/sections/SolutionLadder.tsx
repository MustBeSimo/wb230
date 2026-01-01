import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { SectionHeader, BookingButton } from '../UI';

const LadderItem: React.FC<{ 
  step: any; 
  isOpen: boolean; 
  onClick: () => void;
  index: number;
}> = ({ step, isOpen, onClick, index }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className={`border-b border-slate-200 last:border-0 transition-colors duration-300 ${isOpen ? 'bg-white' : 'hover:bg-slate-50'}`}
    >
      <button 
        onClick={onClick}
        className="w-full flex items-center justify-between py-8 px-4 md:px-8 text-left group"
      >
        <div className="flex items-center gap-6 md:gap-10">
          <span className={`text-sm md:text-base font-bold uppercase tracking-widest transition-colors ${isOpen ? 'text-[#BF5738]' : 'text-slate-400'}`}>
            Step {step.number}
          </span>
          <h3 className={`text-xl md:text-3xl font-serif font-bold transition-colors ${isOpen ? 'text-slate-900' : 'text-slate-500 group-hover:text-slate-800'}`}>
            {step.title}
          </h3>
        </div>
        
        <div className="flex items-center gap-4 md:gap-8">
           <span className="hidden md:block font-mono text-sm text-slate-500 bg-stone-100 px-3 py-1 rounded-[2px] border border-stone-200">
             {step.cost}
           </span>
           <div className={`p-2 rounded-full transition-all duration-300 ${isOpen ? 'bg-[#BF5738] text-white rotate-180 shadow-md' : 'bg-stone-100 text-slate-400 group-hover:bg-stone-200'}`}>
             <ChevronDown className="w-5 h-5" />
           </div>
        </div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
            className="overflow-hidden"
          >
            <div className="px-4 md:px-8 pb-10 pl-4 md:pl-[calc(2rem+6rem)] pr-4 md:pr-32">
               <div className="md:hidden mb-4 font-mono text-xs text-slate-500 bg-stone-100 px-2 py-1 rounded-[2px] inline-block border border-stone-200">
                 {step.cost}
               </div>
               
               <p className="text-lg text-slate-800 font-medium mb-4 flex items-center gap-3">
                 <span className="w-2 h-2 rounded-full bg-[#BF5738]"></span>
                 <span className="font-serif italic">Goal: {step.goal}</span>
               </p>
               
               {step.details && (
                 <p className="text-slate-600 font-light leading-relaxed max-w-2xl text-base md:text-lg">
                   {step.details}
                 </p>
               )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export const SolutionLadder: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, -30]);

  const steps = [
    {
      number: "01",
      title: "Discovery",
      cost: "$0 (30 mins)",
      goal: "Fit check & problem mapping.",
      details: "We start with a no-pressure call to understand your current workflows. We'll identify specific bottlenecks and honestly assess if an AI implementation will provide significant ROI for your team."
    },
    {
      number: "02",
      title: "Scoping Workshop",
      cost: "$3k - $5k",
      goal: "Map the problem, define the solution, and build the plan.",
      details: "A deep-dive session where we architect the technical solution. You walk away with a complete blueprint, technical requirements, and a fixed-price quote for implementation. You own this plan forever."
    },
    {
      number: "03",
      title: "Implementation Sprint",
      cost: "Fixed price",
      goal: "Deployment, documentation, and team training.",
      details: "Over 6 weeks, we build, test, and deploy your custom AI workflow. This includes rigorous testing, staff training sessions, and handover documentation to ensure your team actually adopts the new system."
    }
  ];

  return (
    <section ref={ref} className="py-32 px-6 max-w-5xl mx-auto relative">
       <motion.div style={{ y }}>
        <SectionHeader title="How It Works" subtitle="A transparent, step-by-step path to deployment." />
        
        <div className="border-t border-slate-200 bg-white/50 backdrop-blur-sm rounded-[4px] shadow-sm">
          {steps.map((step, idx) => (
            <LadderItem 
              key={idx} 
              index={idx}
              step={step} 
              isOpen={openIndex === idx} 
              onClick={() => setOpenIndex(openIndex === idx ? null : idx)} 
            />
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <BookingButton text="Start Step 1: Book Discovery" />
        </div>
      </motion.div>
    </section>
  );
};