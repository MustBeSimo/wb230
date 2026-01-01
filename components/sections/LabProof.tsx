import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { SectionHeader } from '../UI';

export const LabProof: React.FC = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  
  // Parallax: Text moves up, Image moves down (creating separation)
  const yText = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const yImage = useTransform(scrollYProgress, [0, 1], [40, -40]);

  return (
    <section ref={ref} className="py-32 px-6 max-w-7xl mx-auto overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div style={{ y: yText }}>
          <SectionHeader title="We use what we sell." />
          <h3 className="text-2xl font-bold text-slate-900 mb-4 font-serif">Case Study: MindGleam</h3>
          <p className="text-lg text-slate-600 mb-8 leading-relaxed font-light">
            See how we built an internal tool to manage creative assets using the same architecture we deploy for clients.
          </p>
          <a 
            href="https://mindgleam.app/demo" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-[#BF5738] font-bold hover:text-slate-900 transition-colors group tracking-wide"
          >
            VIEW MINDGLEAM DEMO
            <ExternalLink className="w-4 h-4 ml-2 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
        
        <motion.div
          style={{ y: yImage }}
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative rounded-[4px] overflow-hidden shadow-2xl shadow-slate-900/10 border border-slate-900/10 group bg-white"
        >
          <div className="absolute inset-0 bg-[#BF5738]/10 opacity-0 group-hover:opacity-100 transition-opacity z-10 pointer-events-none"></div>
          {/* Placeholder for MindGleam UI Image */}
          <div className="bg-slate-50 aspect-video flex items-center justify-center relative">
             <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:24px_24px]"></div>
             <div className="relative z-10 text-center p-8">
                <div className="w-16 h-16 bg-[#BF5738] rounded-full mx-auto mb-4 flex items-center justify-center text-white font-serif font-bold text-3xl shadow-lg ring-4 ring-white">M</div>
                <h4 className="text-slate-900 font-bold text-xl font-serif">MindGleam</h4>
                <p className="text-slate-500 text-sm mt-2 font-mono uppercase tracking-widest">Internal Asset Management</p>
             </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};