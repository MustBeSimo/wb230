
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { CheckCircle2, FileSearch, Zap, Rocket, Layers, Plug, Shield } from 'lucide-react';
import { SectionHeader, BookingButton } from '../UI';

const cardIcons = [FileSearch, Zap, Rocket];

const PricingCard: React.FC<{
  title: string;
  cost: string;
  description: string;
  isBand?: boolean;
  deliverables: string[];
  index: number;
  featured?: boolean;
}> = ({ title, cost, description, isBand, deliverables, index, featured }) => {
  const Icon = cardIcons[index];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ y: -8, boxShadow: featured ? '0 25px 50px -12px rgba(184, 92, 56, 0.15)' : '0 25px 50px -12px rgba(0, 0, 0, 0.08)' }}
      className={`relative border rounded-[4px] p-8 flex flex-col h-full transition-all duration-300 ${
        featured
          ? 'bg-gradient-to-br from-white to-[#B85C38]/5 border-[#B85C38]/30 shadow-lg'
          : 'bg-white border-slate-200 hover:border-slate-300 shadow-sm'
      }`}
    >
      {/* Featured badge */}
      {featured && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-[#B85C38] text-white text-xs font-bold uppercase tracking-wider rounded-full shadow-lg">
          Most Popular
        </div>
      )}

      {/* Icon */}
      <motion.div
        className={`w-12 h-12 rounded-[4px] flex items-center justify-center mb-4 ${
          featured ? 'bg-[#B85C38]/10' : 'bg-slate-100'
        }`}
        whileHover={{ rotate: 5, scale: 1.05 }}
      >
        <Icon className={`w-6 h-6 ${featured ? 'text-[#B85C38]' : 'text-slate-600'}`} />
      </motion.div>

      <h3 className="text-xl font-serif font-bold text-slate-900 mb-2">{title}</h3>
      <div className={`text-3xl font-bold mb-1 font-mono ${featured ? 'text-[#B85C38]' : 'text-slate-800'}`}>
        {cost}
      </div>
      {isBand && <div className="text-xs text-[#B85C38] font-bold uppercase tracking-widest mb-4">Typical Band</div>}
      {!isBand && <div className="text-xs text-slate-400 font-bold uppercase tracking-widest mb-4">Fixed Price</div>}

      <p className="text-slate-600 mb-8 font-light text-sm min-h-[40px]">{description}</p>

      <div className="flex-grow">
        <ul className="space-y-3">
          {deliverables.map((item, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + i * 0.05 }}
              className="flex items-start gap-3 text-sm text-slate-600"
            >
              <CheckCircle2 className={`w-4 h-4 mt-0.5 flex-shrink-0 ${featured ? 'text-[#B85C38]' : 'text-slate-400'}`} />
              <span>{item}</span>
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

export const SolutionLadder: React.FC = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);

  const offerings = [
    {
      title: "Discovery",
      cost: "Free",
      description: "30-minute fit assessment. We check your problem against our capabilities.",
      isBand: false,
      featured: false,
      deliverables: [
        "Workflow audit",
        "Problem mapping",
        "Fit assessment",
        "Clear next steps"
      ]
    },
    {
      title: "Scoping Workshop",
      cost: "$3k–$5k",
      description: "4-hour deep dive. We map the problem and architect the solution.",
      isBand: true,
      featured: false,
      deliverables: [
        "Deep problem analysis",
        "Workflow redesign",
        "Implementation roadmap",
        "Success metrics defined"
      ]
    },
    {
      title: "Implementation Sprint",
      cost: "$15k–$25k",
      description: "6-week build. We deploy working AI agents to your team.",
      isBand: true,
      featured: true,
      deliverables: [
        "1–2 deployed workflows",
        "Full QA and testing",
        "Staff training",
        "Handoff documentation",
        "30-day support window"
      ]
    }
  ];

  const priceDrivers = [
    { icon: Layers, title: "Complexity", desc: "Number of distinct AI agents or workflows required." },
    { icon: Plug, title: "Integrations", desc: "Systems involved (e.g., Salesforce, SharePoint, ERPs)." },
    { icon: Shield, title: "Security", desc: "Requirements for Private VPCs, SSO, or on-prem deployment." }
  ];

  return (
    <section id="pricing" ref={ref} className="py-24 px-6 bg-slate-50 border-t border-slate-200 relative overflow-hidden">
      {/* Subtle background pattern */}
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
      >
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, #B85C38 1px, transparent 1px)',
          backgroundSize: '30px 30px'
        }} />
      </motion.div>

      <div className="max-w-6xl mx-auto relative z-10">
        <SectionHeader title="Commercials" subtitle="Transparent pricing that qualifies—no surprises." />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {offerings.map((offer, idx) => (
            <PricingCard key={idx} index={idx} {...offer} />
          ))}
        </div>

        {/* Price Drivers */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto bg-white border border-slate-200 p-8 rounded-[4px] shadow-sm"
        >
          <h4 className="font-bold text-slate-900 mb-6 font-serif uppercase tracking-widest text-sm flex items-center gap-2">
            <span className="w-8 h-0.5 bg-[#B85C38]"></span>
            What changes the price?
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {priceDrivers.map((driver, i) => {
              const DriverIcon = driver.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ y: -2 }}
                  className="cursor-default"
                >
                  <DriverIcon className="w-5 h-5 text-[#B85C38] mb-3" />
                  <span className="block font-bold text-slate-800 mb-2">{driver.title}</span>
                  <p className="text-sm text-slate-600 leading-relaxed">{driver.desc}</p>
                </motion.div>
              );
            })}
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-8 pt-8 border-t border-slate-100 text-center"
          >
            <p className="text-slate-500 italic text-sm mb-6">
              "Need enterprise procurement? I can quote a larger scope separately."
            </p>
            <BookingButton text="Get a Fixed Quote" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
