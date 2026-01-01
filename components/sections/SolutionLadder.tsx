
import React, { useRef } from 'react';
import { motion, useScroll, AnimatePresence } from 'framer-motion';
import { ChevronDown, CheckCircle2 } from 'lucide-react';
import { SectionHeader, BookingButton } from '../UI';

const PricingCard: React.FC<{
  title: string;
  cost: string;
  description: string;
  isBand?: boolean;
  deliverables: string[];
  index: number;
}> = ({ title, cost, description, isBand, deliverables, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="bg-white border border-slate-200 rounded-[2px] p-8 flex flex-col h-full hover:border-[#B85C38]/30 transition-colors shadow-sm"
    >
      <h3 className="text-xl font-serif font-bold text-slate-900 mb-2">{title}</h3>
      <div className="text-3xl font-bold text-slate-800 mb-1 font-mono">{cost}</div>
      {isBand && <div className="text-xs text-[#B85C38] font-bold uppercase tracking-widest mb-4">Typical Band</div>}
      {!isBand && <div className="text-xs text-slate-400 font-bold uppercase tracking-widest mb-4">Fixed Price</div>}

      <p className="text-slate-600 mb-8 font-light text-sm min-h-[40px]">{description}</p>

      <div className="flex-grow">
        <ul className="space-y-3">
          {deliverables.map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-sm text-slate-600">
              <CheckCircle2 className="w-4 h-4 text-[#B85C38] mt-0.5 flex-shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

export const SolutionLadder: React.FC = () => {
  const ref = useRef(null);

  const offerings = [
    {
      title: "Discovery",
      cost: "Free",
      description: "30-minute fit assessment. We check your problem against our capabilities.",
      isBand: false,
      deliverables: [
        "Workflow audit",
        "Problem mapping",
        "Fit assessment",
        "Clear next steps"
      ]
    },
    {
      title: "Scoping Workshop",
      cost: "$3,000–$5,000",
      description: "4-hour deep dive. We map the problem and architect the solution.",
      isBand: true,
      deliverables: [
        "Deep problem analysis",
        "Workflow redesign",
        "Implementation roadmap",
        "Success metrics defined"
      ]
    },
    {
      title: "Implementation Sprint",
      cost: "$15,000–$25,000",
      description: "6-week build. We deploy working agents to your team.",
      isBand: true,
      deliverables: [
        "1–2 deployed workflows",
        "Full QA and testing",
        "Staff training",
        "Handoff documentation",
        "30-day support window"
      ]
    }
  ];

  return (
    <section id="pricing" ref={ref} className="py-24 px-6 bg-slate-50 border-t border-slate-200">
      <div className="max-w-6xl mx-auto">
        <SectionHeader title="Commercials" subtitle="Pricing that qualifies, not surprises." />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {offerings.map((offer, idx) => (
            <PricingCard key={idx} index={idx} {...offer} />
          ))}
        </div>

        {/* Drivers */}
        <div className="max-w-3xl mx-auto bg-white border border-slate-200 p-8 rounded-[2px]">
          <h4 className="font-bold text-slate-900 mb-6 font-serif uppercase tracking-widest text-sm">What changes the price?</h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <span className="block font-bold text-slate-800 mb-2">Complexity</span>
              <p className="text-sm text-slate-600">Number of distinct AI agents or workflows required.</p>
            </div>
            <div>
              <span className="block font-bold text-slate-800 mb-2">Integrations</span>
              <p className="text-sm text-slate-600">Systems involved (e.g., Salesforce, SharePoint, ERPs).</p>
            </div>
            <div>
              <span className="block font-bold text-slate-800 mb-2">Security</span>
              <p className="text-sm text-slate-600">Requirements for Private VPCs, SSO, or On-prem deployment.</p>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-slate-100 text-center">
            <p className="text-slate-500 italic text-sm mb-6">
              "If you need enterprise procurement, I can quote a larger scope separately."
            </p>
            <BookingButton text="Get a Fixed Quote" />
          </div>
        </div>

      </div>
    </section>
  );
};
