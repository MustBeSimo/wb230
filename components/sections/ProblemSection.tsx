import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Brain, Sparkles } from 'lucide-react';
import { TypewriterText } from '../UI';
import { JudgmentHarness } from '../visuals';
import { ResearchArticle } from '../ResearchArticle';

export const ProblemSection: React.FC = () => {
   const ref = useRef(null);
   const [isArticleOpen, setIsArticleOpen] = useState(false);

   return (
      <>
         <ResearchArticle isOpen={isArticleOpen} onClose={() => setIsArticleOpen(false)} />

         <section ref={ref} className="py-24 px-6 bg-white border-y border-stone-200 overflow-hidden relative">
            {/* Background Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000005_1px,transparent_1px),linear-gradient(to_bottom,#00000005_1px,transparent_1px)] bg-[size:40px_40px]"></div>

            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center relative z-10">
               <div className="pr-0 md:pr-12">

                  <h2 className="text-3xl md:text-5xl font-bold mb-8 text-slate-900 font-serif leading-tight">
                     <TypewriterText text='Generative AI is a commodity. Scarcity is judgment.' />
                  </h2>
                  <div className="h-1 w-20 bg-[#B85C38] rounded-full mb-8"></div>

                  <p className="text-xl text-slate-700 leading-relaxed font-serif italic mb-6">
                     "You are not a 'human in the loop' slowing things down. You are the Architect."
                  </p>
                  <p className="text-lg text-slate-600 leading-relaxed font-light mb-8">
                     Real value comes when we encode your expert intuition into the system's logic.
                     We build <span
                        onClick={() => setIsArticleOpen(true)}
                        className="font-semibold text-[#B85C38] border-b border-[#B85C38]/30 hover:border-[#B85C38] cursor-pointer hover:bg-[#B85C38]/5 transition-all"
                     >
                        Taste Infrastructure
                     </span>—pipelines where your knowledge and brand constraints filter the noise, leaving only high-signal outputs.
                  </p>

                  <div className="flex flex-col gap-4">
                     <div className="flex gap-6 mb-4">
                        <div className="flex items-center gap-2 text-sm font-medium text-slate-500">
                           <Brain className="w-4 h-4 text-[#B85C38]" /> Encoded Knowledge
                        </div>
                        <div className="flex items-center gap-2 text-sm font-medium text-slate-500">
                           <Sparkles className="w-4 h-4 text-[#B85C38]" /> Taste Logic
                        </div>
                     </div>
                  </div>
               </div>

               {/* Visual Container - Light Mode / Diagram Style */}
               <motion.div
                  initial={{ opacity: 0, scale: 0.98 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="relative w-full h-[450px] bg-[#FAFAF9] border border-slate-200 rounded-lg shadow-sm overflow-hidden"
               >
                  <div className="absolute top-4 left-6 z-10">
                     <span className="text-xs font-bold text-slate-400 uppercase tracking-widest border-b border-slate-200 pb-1">Fig 1.1 — Taste Kernel</span>
                  </div>

                  <div className="w-full h-full">
                     <JudgmentHarness />
                  </div>

                  <div className="absolute bottom-4 right-6 z-10">
                     <div className="flex items-center gap-2 bg-white/80 backdrop-blur px-3 py-1.5 rounded-full border border-slate-100 shadow-sm">
                        <div className="w-1.5 h-1.5 bg-[#B85C38] rounded-full animate-pulse"></div>
                        <span className="text-[10px] font-mono font-medium text-slate-500 uppercase">System Active</span>
                     </div>
                  </div>
               </motion.div>
            </div>
         </section>
      </>
   );
};