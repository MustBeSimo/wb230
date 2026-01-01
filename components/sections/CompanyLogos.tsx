import React from 'react';
import { motion } from 'framer-motion';
import { Building2 } from 'lucide-react';

const companies = [
  { name: "Acer", logo: "/assets/companies/Acer.jpg" },
  { name: "Arrow Pharmaceuticals", logo: "/assets/companies/Arrow Pharmaceuticals.jpg" },
  { name: "Australian Academy Interior Design", logo: "/assets/companies/Aus Academy Intrior design.jpg" },
  { name: "Bentley Home", logo: "/assets/companies/Bentley home.png" },
  { name: "Curtin University", logo: "/assets/companies/Curtin Uni.jpg" },
  { name: "Fendi Casa", logo: "/assets/companies/Fendi Casa.jpg" },
  { name: "Sandhelden", logo: "/assets/companies/Sandhelden.jpg" },
  { name: "Trussardi Casa", logo: "/assets/companies/TRUSSARDI+CASA.jpg" },
  { name: "Kailis Jewellery", logo: "/assets/companies/kailis jewellery.jpg" },
  { name: "Kenzo", logo: "/assets/companies/kenzo.jpg" },
  { name: "SXSW", logo: "/assets/companies/sxsw.jpg" },
  { name: "Sydney University", logo: "/assets/companies/sydney uni.jpg" }
];

const LogoMarqueeRow: React.FC<{ items: typeof companies; direction?: 'left' | 'right'; speed?: number }> = ({
  items,
  direction = 'left',
  speed = 30
}) => {
  const duplicatedItems = [...items, ...items];

  return (
    <div className="relative flex overflow-hidden py-6">
      <motion.div
        className="flex gap-10 md:gap-14 items-center"
        animate={{
          x: direction === 'left' ? ['0%', '-50%'] : ['-50%', '0%'],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: speed,
            ease: "linear",
          },
        }}
      >
        {duplicatedItems.map((company, idx) => (
          <motion.div
            key={`${company.name}-${idx}`}
            className="flex-shrink-0 h-10 w-24 md:h-14 md:w-32 flex items-center justify-center opacity-30 hover:opacity-100 transition-all duration-300 cursor-default grayscale hover:grayscale-0 hover:scale-110"
            whileHover={{ y: -2 }}
          >
            <img
              src={company.logo}
              alt={company.name}
              className="max-h-full max-w-full object-contain"
              loading="lazy"
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export const CompanyLogos: React.FC = () => {
  const row1 = companies.slice(0, 6);
  const row2 = companies.slice(6);

  return (
    <section className="py-16 bg-[#FAFAF9] overflow-hidden border-y border-slate-100">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-6 mb-8 text-center"
      >
        <div className="inline-flex items-center gap-2 mb-3">
          <Building2 className="w-4 h-4 text-[#B85C38]" />
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">Trusted By Industry Leaders</p>
        </div>
        <h3 className="text-slate-700 text-lg font-light">
          From <span className="text-slate-900 font-medium">universities</span> to{' '}
          <span className="text-slate-900 font-medium">luxury brands</span>—teams that demand precision.
        </h3>
      </motion.div>

      <div className="relative">
        {/* Enhanced Fade Gradients */}
        <div className="absolute left-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-r from-[#FAFAF9] via-[#FAFAF9]/80 to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-l from-[#FAFAF9] via-[#FAFAF9]/80 to-transparent z-10 pointer-events-none"></div>

        <LogoMarqueeRow items={row1} direction="left" speed={35} />
        <LogoMarqueeRow items={row2} direction="right" speed={40} />
      </div>

      {/* Trust indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="flex justify-center gap-8 mt-8"
      >
        {[
          { value: "12+", label: "Enterprise Clients" },
          { value: "4", label: "Industries" },
          { value: "3", label: "Countries" }
        ].map((stat, i) => (
          <div key={i} className="text-center">
            <span className="block text-xl font-bold text-slate-900 font-serif">{stat.value}</span>
            <span className="text-xs text-slate-500 uppercase tracking-wider">{stat.label}</span>
          </div>
        ))}
      </motion.div>
    </section>
  );
};
