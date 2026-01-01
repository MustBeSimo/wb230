import React from 'react';
import { motion, Variants } from 'framer-motion';
import { ArrowRight, CalendarClock } from 'lucide-react';

export const ScarcityBanner: React.FC = () => (
  <motion.div
    initial={{ y: -50, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ delay: 0.5, duration: 0.5 }}
    className="w-full bg-slate-900 border-b border-slate-800 py-2 px-4 text-center sticky top-0 z-50 shadow-md"
  >
    <p className="text-xs md:text-sm font-medium text-slate-200 tracking-wide font-sans">
      <span className="inline-block w-2 h-2 rounded-full bg-[#B85C38] mr-2 animate-pulse"></span>
      Status: Open for Q1 2026 Projects (Jan-Mar)
    </p>
  </motion.div>
);

interface BookingButtonProps {
  text?: string;
  className?: string;
  variant?: 'primary' | 'secondary';
}

export const BookingButton: React.FC<BookingButtonProps> = ({
  text = "Book a Discovery Call (Free)",
  className = "",
  variant = 'primary'
}) => {
  const handleBooking = () => {
    window.open('https://cal.com/w230-discovery-placeholder', '_blank');
  };

  const baseStyles = "inline-flex items-center justify-center gap-2 px-6 py-3 rounded-[2px] font-semibold transition-all duration-300 group shadow-sm";
  const primaryStyles = "bg-slate-900 text-white hover:bg-[#B85C38] hover:shadow-lg hover:shadow-slate-900/10";
  const secondaryStyles = "bg-transparent border border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white";

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={handleBooking}
      className={`${baseStyles} ${variant === 'primary' ? primaryStyles : secondaryStyles} ${className}`}
    >
      <CalendarClock className="w-4 h-4" />
      {text}
      <ArrowRight className="w-4 h-4 opacity-70 group-hover:translate-x-1 transition-transform" />
    </motion.button>
  );
};

export const SectionHeader: React.FC<{ title: string; subtitle?: string }> = ({ title, subtitle }) => (
  <div className="mb-12 md:mb-16">
    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 font-serif">
      {title}
    </h2>
    {subtitle && (
      <p className="text-slate-600 text-lg max-w-2xl font-sans font-light">
        {subtitle}
      </p>
    )}
    <div className="h-1 w-20 bg-[#B85C38] mt-6 rounded-full"></div>
  </div>
);

// --- TYPEWRITER TEXT COMPONENT ---
export const TypewriterText: React.FC<{ text: string }> = ({ text }) => {
  const words = text.split(" ");

  const container: Variants = {
    hidden: { opacity: 0 },
    visible: (i: number = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.05, delayChildren: 0.04 * i },
    }),
  };

  const child: Variants = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
    },
  };

  return (
    <motion.div
      style={{ display: "flex", flexWrap: "wrap", gap: "0.25em" }}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {words.map((word, index) => (
        <motion.span variants={child} key={index} className="mr-1">
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
};