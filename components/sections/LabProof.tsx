import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { SectionHeader } from '../UI';
import { ArrowRight, Lock, TrendingUp, Clock, Users, DollarSign } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { ImpactRipple } from '../visuals';

const CaseSnippet: React.FC<{
  industry: string;
  outcome: string;
  description: string;
  highlight: string;
  highlightIcon: React.ReactNode;
  index: number;
}> = ({ industry, outcome, description, highlight, highlightIcon, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.15, duration: 0.5 }}
    whileHover={{ y: -6, boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.08)' }}
    className="bg-white p-8 rounded-[4px] border border-slate-200 shadow-sm relative overflow-hidden group hover:border-[#B85C38]/30 transition-all duration-300"
  >
    {/* Redacted badge */}
    <motion.div
      className="absolute top-0 right-0 p-2 bg-stone-100 rounded-bl text-xs font-mono text-slate-500 flex items-center gap-1"
      whileHover={{ backgroundColor: '#f5f5f4' }}
    >
      <Lock className="w-3 h-3" /> Redacted
    </motion.div>

    {/* Industry tag */}
    <motion.div
      className="inline-block px-3 py-1 bg-[#B85C38]/10 rounded-full text-xs font-bold uppercase tracking-widest text-[#B85C38] mb-4"
      whileHover={{ scale: 1.05 }}
    >
      {industry}
    </motion.div>

    <h3 className="text-2xl font-bold text-slate-900 font-serif mb-4 leading-tight">{outcome}</h3>
    <p className="text-slate-600 mb-6 font-light leading-relaxed">{description}</p>

    {/* Highlight metric */}
    <motion.div
      className="py-3 px-4 bg-gradient-to-r from-stone-50 to-white border border-stone-200 inline-flex items-center gap-3 rounded-[4px]"
      whileHover={{ borderColor: '#B85C38', x: 4 }}
    >
      <div className="p-1.5 bg-[#B85C38]/10 rounded">
        {highlightIcon}
      </div>
      <span className="text-sm font-bold text-slate-900">{highlight}</span>
    </motion.div>

    {/* Decorative corner */}
    <div className="absolute bottom-0 right-0 w-16 h-16 bg-gradient-to-tl from-slate-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
  </motion.div>
);

export const LabProof: React.FC = () => {
  const navigate = useNavigate();
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  const rippleY = useTransform(scrollYProgress, [0, 1], [40, -40]);

  return (
    <section ref={ref} className="py-24 px-6 bg-slate-50 border-t border-slate-200 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <SectionHeader title="Proof of Utility" subtitle="Real results from real internal tools—not demos." />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-16">
          {/* Case Studies */}
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
            <CaseSnippet
              industry="Financial Services"
              outcome="Quoting Time Reduced by 7 Days"
              description="Replaced a manual Excel-based quoting process with a structured AI wizard. Logic constraints ensure 100% compliance with pricing tables."
              highlight="55+ Active Weekly Users"
              highlightIcon={<Users className="w-4 h-4 text-[#B85C38]" />}
              index={0}
            />
            <CaseSnippet
              industry="Logistics & Ops"
              outcome="42% Reduction in Manual Entry"
              description="Deployed an email parsing agent that routes vendor invoices directly to ERP with human-in-the-loop validation for edge cases."
              highlight="1,300× ROI (Projected 3-Yr)"
              highlightIcon={<DollarSign className="w-4 h-4 text-[#B85C38]" />}
              index={1}
            />
          </div>

          {/* Impact Ripple Visual */}
          <motion.div
            style={{ y: rippleY }}
            className="hidden lg:flex items-center justify-center"
          >
            <div className="relative">
              <div className="absolute -inset-8 bg-gradient-to-br from-[#B85C38]/5 to-transparent rounded-full blur-2xl" />
              <ImpactRipple />
            </div>
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-12 text-center"
        >
          <motion.button
            onClick={() => navigate('/proof')}
            whileHover={{ x: 4 }}
            className="inline-flex items-center gap-2 text-slate-900 border-b-2 border-slate-900 pb-0.5 hover:text-[#B85C38] hover:border-[#B85C38] transition-colors font-medium cursor-pointer group"
          >
            Read detailed implementation reports
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};