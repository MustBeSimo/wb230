import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ScarcityBanner } from './components/UI';
import Hero from './components/Hero';
import { ProblemSection, SolutionLadder, UseCases, LabProof, TechStack } from './components/sections';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Background Parallax Effect
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <div ref={containerRef} className="relative min-h-screen bg-[#FAFAF9] text-slate-900 overflow-hidden">
      
      {/* Global Background Elements - Adjusted for Light Mode */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Terracotta Accent Blob */}
        <motion.div 
          style={{ y: bgY }}
          className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-[#BF5738] rounded-full blur-[120px] opacity-[0.08]" 
        />
        {/* Navy Accent Blob */}
        <motion.div 
          style={{ y: useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]) }}
          className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] bg-slate-900 rounded-full blur-[140px] opacity-[0.05]" 
        />
      </div>

      {/* Main Content Stack */}
      <div className="relative z-10 flex flex-col">
        <ScarcityBanner />
        
        <main className="flex-grow">
          <Hero />
          <ProblemSection />
          <SolutionLadder />
          <UseCases />
          <TechStack />
          <LabProof />
        </main>

        <Footer />
      </div>

    </div>
  );
};

export default App;