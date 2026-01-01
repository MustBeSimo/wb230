import React from 'react';
import { motion } from 'framer-motion';

const technologies = [
  "Python 3.12+", "TypeScript", "LangChain", "LlamaIndex", 
  "OpenAI GPT-4o", "Anthropic Claude 3.5 Sonnet", "Google Gemini 2.0", 
  "Pinecone", "Weaviate", "Supabase", "AWS Lambda", "Vercel Edge",
  "Docker", "Kubernetes", "FastAPI"
];

const MarqueeRow: React.FC<{ items: string[]; direction?: 'left' | 'right'; speed?: number }> = ({ 
  items, 
  direction = 'left',
  speed = 20 
}) => {
  return (
    <div className="flex overflow-hidden whitespace-nowrap mask-gradient relative">
      <motion.div 
        className="flex gap-12 py-4"
        initial={{ x: direction === 'left' ? 0 : -1000 }}
        animate={{ x: direction === 'left' ? -1000 : 0 }}
        transition={{ 
          repeat: Infinity, 
          ease: "linear", 
          duration: speed 
        }}
      >
        {[...items, ...items, ...items].map((tech, idx) => (
          <span 
            key={`${tech}-${idx}`} 
            className="text-2xl md:text-3xl font-serif text-slate-300 font-bold opacity-50 hover:opacity-100 hover:text-[#BF5738] transition-all cursor-default select-none"
          >
            {tech}
          </span>
        ))}
      </motion.div>
      
      {/* Duplicate for seamless loop */}
      <motion.div 
        className="flex gap-12 py-4 absolute top-0 left-full"
        initial={{ x: direction === 'left' ? 0 : -1000 }}
        animate={{ x: direction === 'left' ? -1000 : 0 }}
        transition={{ 
          repeat: Infinity, 
          ease: "linear", 
          duration: speed 
        }}
      >
        {[...items, ...items, ...items].map((tech, idx) => (
          <span 
            key={`${tech}-dup-${idx}`} 
            className="text-2xl md:text-3xl font-serif text-slate-300 font-bold opacity-50 hover:opacity-100 hover:text-[#BF5738] transition-all cursor-default select-none"
          >
            {tech}
          </span>
        ))}
      </motion.div>
    </div>
  );
};

export const TechStack: React.FC = () => {
  return (
    <section className="py-20 bg-slate-900 overflow-hidden border-y border-slate-800">
      <div className="max-w-7xl mx-auto px-6 mb-10 text-center">
         <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500 mb-2">Technical Infrastructure</p>
         <h3 className="text-white text-xl font-light opacity-80">We don't just prompt. We engineer.</h3>
      </div>
      
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-r from-slate-900 to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-l from-slate-900 to-transparent z-10 pointer-events-none"></div>
        
        <MarqueeRow items={technologies.slice(0, 8)} direction="left" speed={35} />
        <MarqueeRow items={technologies.slice(8)} direction="right" speed={40} />
      </div>
    </section>
  );
};