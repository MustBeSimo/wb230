import React from 'react';
import { motion } from 'framer-motion';

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
  // Double the items for seamless loop
  const duplicatedItems = [...items, ...items];

  return (
    <div className="relative flex overflow-hidden py-8">
      <motion.div
        className="flex gap-12 md:gap-16 items-center"
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
          <div
            key={`${company.name}-${idx}`}
            className="flex-shrink-0 h-12 w-28 md:h-16 md:w-36 flex items-center justify-center opacity-40 hover:opacity-100 transition-opacity cursor-default grayscale hover:grayscale-0"
          >
            <img
              src={company.logo}
              alt={company.name}
              className="max-h-full max-w-full object-contain"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export const CompanyLogos: React.FC = () => {
  const row1 = companies.slice(0, 6);
  const row2 = companies.slice(6);

  return (
    <section className="py-20 bg-[#FAFAF9] overflow-hidden border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-6 mb-10 text-center">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400 mb-2">Trusted By</p>
        <h3 className="text-slate-900 text-xl font-light">Delivering excellence for leading brands worldwide</h3>
      </div>

      <div className="relative">
        {/* Fade Gradients */}
        <div className="absolute left-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-r from-[#FAFAF9] to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-l from-[#FAFAF9] to-transparent z-10 pointer-events-none"></div>

        <LogoMarqueeRow items={row1} direction="left" speed={40} />
        <LogoMarqueeRow items={row2} direction="right" speed={45} />
      </div>
    </section>
  );
};
