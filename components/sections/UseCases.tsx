import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Search, FileText, Settings } from 'lucide-react';
import { SectionHeader } from '../UI';
import { ExplodedLayers } from '../visuals';

const UseCaseCard: React.FC<{ icon: React.ReactNode; title: string; desc: string; index: number }> = ({ icon, title, desc, index }) => (
  <motion.div 
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1, duration: 0.5 }}
    whileHover={{ y: -8, borderColor: "rgba(191, 87, 56, 0.4)" }}
    className="bg-white p-8 rounded-[4px] border border-slate-900/10 shadow-sm hover:shadow-xl transition-all duration-300 group h-full flex flex-col"
  >
    <div className="w-12 h-12 bg-stone-100 rounded-[2px] flex items-center justify-center text-slate-900 group-hover:bg-[#BF5738] group-hover:text-white transition-colors mb-6 duration-300">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-slate-900 mb-3 font-serif">{title}</h3>
    <p className="text-slate-600 leading-relaxed font-light">{desc}</p>
  </motion.div>
);

export const UseCases: React.FC = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [40, -40]);

  return (
    <section ref={ref} className="py-32 px-6 bg-white border-y border-slate-100 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8">
            <SectionHeader title="What We Build" subtitle="Targeted implementations for high-value workflows." />
            
            <motion.div style={{ y }} className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <UseCaseCard 
                index={0}
                icon={<Search className="w-6 h-6" />}
                title="Knowledge Retrieval (RAG)"
                desc="Staff can find answers in <60 seconds with citations to your source docs."
              />
              <UseCaseCard 
                index={1}
                icon={<FileText className="w-6 h-6" />}
                title="Proposal & Quoting"
                desc="Structured templates that draft consistent outputs and reduce turnaround time."
              />
              <UseCaseCard 
                index={2}
                icon={<Settings className="w-6 h-6" />}
                title="Ops Automation"
                desc="Intelligent routing, form processing, and notifications to kill manual data entry."
              />
            </motion.div>
        </div>

        {/* -- VISUAL EXPLODED VIEW -- */}
        <div className="lg:col-span-4 flex flex-col justify-center">
            <div className="bg-stone-50 border border-stone-200 rounded-[4px] p-8 relative">
                <div className="absolute top-4 left-4 text-xs font-bold uppercase tracking-widest text-slate-400">Architecture</div>
                <ExplodedLayers />
                <p className="text-center text-sm text-slate-500 mt-6 font-mono">
                    Robust Logic Separation
                </p>
            </div>
        </div>
        {/* -------------------------- */}
        
      </div>
    </section>
  );
};