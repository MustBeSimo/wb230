import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

interface ArticleProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResearchArticle: React.FC<ArticleProps> = ({ isOpen, onClose }) => {
  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  // Styles derived from the provided HTML/CSS, converted to Tailwind/Inline for React
  const slideBase = "min-h-screen p-8 md:p-20 flex flex-col justify-center border-b border-stone-200 relative";
  const slideDark = "bg-[#0a0a0a] text-[#fafafa] border-stone-800";
  const slideLight = "bg-[#fafafa] text-[#1a1a1a]";
  const labelStyle = "text-[11px] font-semibold uppercase tracking-[2px] mb-4";
  const labelLight = "text-stone-500";
  const labelDark = "text-amber-500"; // #f59e0b

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] bg-white overflow-y-auto font-sans"
        >
          {/* Close Button */}
          <button 
            onClick={onClose}
            className="fixed top-6 right-6 z-[110] p-2 bg-white/10 backdrop-blur-md border border-stone-300 rounded-full hover:bg-stone-100 transition-colors mix-blend-difference text-white"
          >
            <X className="w-6 h-6" />
          </button>

          {/* SLIDE 0: TITLE */}
          <section className={`${slideBase} ${slideDark}`} id="title">
            <div className="max-w-4xl mx-auto w-full">
                <div className={`${labelStyle} ${labelDark}`}>Research Brief — W230 Studio</div>
                <h1 className="text-5xl md:text-7xl font-light leading-[1.1] mb-8">
                    <strong>Taste Infrastructure</strong>
                </h1>
                <p className="text-xl md:text-2xl text-stone-400 max-w-2xl">
                    When generation gets cheap, evaluation becomes the moat.<br />
                    The new layer is taste, proof, and risk at scale.
                </p>
                <div className="mt-12 flex gap-8 text-sm text-stone-500">
                    <span>December 2025</span>
                    <span>v2.2</span>
                </div>
            </div>
          </section>

          {/* SLIDE 1: THESIS */}
          <section className={`${slideBase} ${slideLight}`} id="thesis">
            <div className="max-w-4xl mx-auto w-full">
                <div className={`${labelStyle} ${labelLight}`}>01 — Thesis</div>
                <h1 className="text-4xl md:text-5xl font-light leading-tight mb-8">
                    The constraint moved.<br />
                    <strong>From production to evaluation.</strong>
                </h1>
                
                <p className="text-lg text-stone-600 max-w-2xl mb-6">
                    We are not living through a "production revolution." We are living through a <strong>constraint shift</strong>:
                    generation got cheap and fast, evaluation stayed expensive and slow. The response is building Taste Infrastructure.
                </p>
                
                <div className="my-8 p-8 bg-[#fffbeb] border-l-4 border-amber-500">
                    <p className="text-xl italic text-stone-800 mb-4">
                        "A wealth of information creates a poverty of attention and a need to allocate that attention efficiently among the overabundance of information sources that might consume it."
                    </p>
                    <div className="text-sm text-stone-500">Herbert A. Simon, 1971</div>
                </div>
                
                <p className="text-lg text-stone-600 mb-8">
                    AI supercharges this dynamic. It multiplies options faster than humans can verify, rank, or defend.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-10">
                    <div className="p-8 bg-stone-100 rounded">
                        <div className="text-xs font-bold uppercase tracking-wider opacity-60 mb-2">Previous constraint</div>
                        <div className="text-2xl font-medium">"Can we make it?"</div>
                    </div>
                    <div className="p-8 bg-amber-500 text-black rounded">
                        <div className="text-xs font-bold uppercase tracking-wider opacity-60 mb-2">New constraint</div>
                        <div className="text-2xl font-medium">"Should we make it?"</div>
                        <div className="text-sm mt-2 opacity-80">"Can we prove it's good?"</div>
                    </div>
                </div>
            </div>
          </section>

          {/* SLIDE 2: INVERSION */}
          <section className={`${slideBase} ${slideDark}`} id="inversion">
             <div className="max-w-4xl mx-auto w-full">
                <div className={`${labelStyle} ${labelDark}`}>02 — The Inversion</div>
                <h2 className="text-3xl font-normal mb-6">Stated precisely</h2>
                
                <p className="text-lg text-stone-400 mb-6">
                    "Production is infinite and free" is directionally right, but technically sloppy. <strong>More accurate:</strong>
                </p>
                
                <ul className="list-none space-y-4 mb-12">
                    <li className="pl-6 relative before:content-['→'] before:absolute before:left-0 before:text-amber-500 text-stone-300">
                        <strong>Marginal cost of generating candidates</strong> is collapsing (text, code, images, drafts, variants)
                    </li>
                    <li className="pl-6 relative before:content-['→'] before:absolute before:left-0 before:text-amber-500 text-stone-300">
                        <strong>Marginal cost of validating correctness, safety, brand fit, and real-world impact</strong> is not collapsing at the same rate
                    </li>
                </ul>

                <h3 className="text-xl font-medium mt-8 mb-4">What actually became scarce</h3>
                
                <div className="overflow-x-auto">
                    <table className="w-full text-sm border-collapse text-left">
                        <thead>
                            <tr className="bg-stone-900">
                                <th className="p-3 border-b border-stone-800">Layer</th>
                                <th className="p-3 border-b border-stone-800">Scales with AI</th>
                                <th className="p-3 border-b border-stone-800">Does NOT scale</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="border-b border-stone-900/50">
                                <td className="p-3 font-bold">Generation</td>
                                <td className="p-3 text-stone-400">Drafts, variants</td>
                                <td className="p-3 font-bold text-white">Ground truth</td>
                            </tr>
                            <tr className="border-b border-stone-900/50 bg-stone-900/30">
                                <td className="p-3 font-bold">Selection</td>
                                <td className="p-3 text-stone-400">Ranking "nice" outputs</td>
                                <td className="p-3 font-bold text-white">Ranking "right" outputs</td>
                            </tr>
                            <tr className="border-b border-stone-900/50 border-l-2 border-l-amber-500 bg-amber-900/10">
                                <td className="p-3 font-bold text-white">Verification</td>
                                <td className="p-3 text-stone-400">Spot checks</td>
                                <td className="p-3 font-bold text-white">Proof, audit, domain validation</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
          </section>

          {/* SLIDE 3: JUDGMENT */}
          <section className={`${slideBase} ${slideLight}`} id="judgment">
             <div className="max-w-4xl mx-auto w-full">
                <div className={`${labelStyle} ${labelLight}`}>03 — What Judgment Really Is</div>
                <h2 className="text-3xl font-normal mb-6">Not vibes. A trained compression function.</h2>
                
                <p className="text-lg text-stone-600 mb-6">
                    Judgment is not a personality trait. It is a <strong>trained compression function</strong> over a domain.
                </p>
                
                <div className="p-8 bg-stone-100 font-mono text-sm rounded mb-8">
                    <div className="text-stone-400 mb-2">// Inputs</div>
                    <div className="mb-4">messy context, constraints, stakeholders, priors, failure modes</div>
                    <div className="text-stone-400 mb-2">// Output</div>
                    <div className="font-bold mb-4">a decision you can defend under scrutiny</div>
                    <div className="text-stone-400 mb-2">// Implementation</div>
                    <div>implicit <span className="text-amber-600">utility function</span> + <span className="text-amber-600">risk model</span> + calibration</div>
                </div>
                
                <div className="p-8 bg-[#1a1a1a] text-white border-l-4 border-amber-500 rounded">
                    <p className="text-2xl italic m-0">
                        "Judgment can be instant, but it is rarely free.<br />
                        <span className="text-amber-500">Someone paid for it in years.</span>"
                    </p>
                </div>
            </div>
          </section>

          {/* SLIDE 4: ARBITRAGE */}
          <section className={`${slideBase} ${slideDark}`} id="arbitrage">
            <div className="max-w-4xl mx-auto w-full">
                <div className={`${labelStyle} ${labelDark}`}>04 — The Arbitrage</div>
                <h2 className="text-3xl font-normal mb-6">Where the market is still asleep</h2>
                
                <p className="text-lg text-stone-400 mb-6">
                    "AI skills" are paid like scarcity, but many are on a fast commoditization curve.
                </p>
                
                <div className="bg-white p-8 rounded text-stone-900 my-8">
                    <div className="text-xs font-bold text-stone-400 uppercase tracking-widest mb-4">The Skill Crossover</div>
                    <div className="relative h-40 w-full border-l border-b border-stone-300">
                        <div className="absolute top-0 right-0 text-xs text-stone-400">High Value</div>
                        <div className="absolute bottom-0 right-0 text-xs text-stone-400">Time →</div>
                        
                        {/* Technical Skills Curve (Falling) */}
                        <svg className="absolute inset-0 w-full h-full overflow-visible">
                            <path d="M 0 20 Q 150 20 300 100 T 600 140" fill="none" stroke="#94a3b8" strokeWidth="2" strokeDasharray="4 4" />
                            <text x="10" y="15" className="text-[10px] fill-slate-400">Tech Skills</text>
                            
                            {/* Judgment Curve (Rising) */}
                            <path d="M 0 140 Q 150 140 300 80 T 600 20" fill="none" stroke="#f59e0b" strokeWidth="3" />
                            <text x="10" y="135" className="text-[10px] fill-amber-600 font-bold">Judgment</text>
                            
                            {/* Crossover */}
                            <circle cx="225" cy="110" r="4" fill="#f59e0b" />
                            <text x="235" y="115" className="text-xs font-bold fill-stone-900">Arbitrage Window</text>
                        </svg>
                    </div>
                </div>

                <p className="text-lg text-stone-400">
                     In a world flooded with plausible outputs, quality uncertainty rises. 
                     Akerlof's "market for lemons" applies: when buyers cannot distinguish quality, low quality drives out high quality unless <strong>verification</strong> exists.
                </p>
            </div>
          </section>
          
           {/* SLIDE 5: STACK */}
           <section className={`${slideBase} ${slideLight}`} id="stack">
             <div className="max-w-4xl mx-auto w-full">
                <div className={`${labelStyle} ${labelLight}`}>05 — Taste Infrastructure Stack</div>
                <h2 className="text-3xl font-normal mb-6">How to operationalize taste</h2>
                <p className="text-lg text-stone-600 mb-8">
                    If you want this to be real inside an organization, you need <strong>infrastructure</strong>, not a slogan.
                </p>
                
                <table className="w-full text-sm border-collapse text-left">
                    <thead>
                        <tr className="bg-stone-100 border-b-2 border-stone-200">
                            <th className="p-3">Layer</th>
                            <th className="p-3">Artifact</th>
                            <th className="p-3">Failure mode it prevents</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="border-b border-stone-100">
                            <td className="p-3 font-bold">1. Preference spec</td>
                            <td className="p-3">Rubric, criteria</td>
                            <td className="p-3 text-red-600 text-xs">"Good" stays implicit</td>
                        </tr>
                        <tr className="border-b border-stone-100">
                            <td className="p-3 font-bold">2. Risk gates</td>
                            <td className="p-3">Red lines, registers</td>
                            <td className="p-3 text-red-600 text-xs">Silent unsafe rollout</td>
                        </tr>
                         <tr className="border-b border-stone-100 bg-amber-50">
                            <td className="p-3 font-bold">3. Proof harness</td>
                            <td className="p-3">Golden sets</td>
                            <td className="p-3 text-red-600 text-xs">"It worked once" syndrome</td>
                        </tr>
                         <tr className="border-b border-stone-100">
                            <td className="p-3 font-bold">4. Calibration loop</td>
                            <td className="p-3">Pairwise ranking</td>
                            <td className="p-3 text-red-600 text-xs">Random reviewer drift</td>
                        </tr>
                    </tbody>
                </table>
             </div>
           </section>

           {/* FINAL CLAIM */}
           <section className={`${slideBase} ${slideDark}`} id="claim">
             <div className="max-w-4xl mx-auto w-full text-center">
                <div className={`${labelStyle} ${labelDark} mb-12`}>The Claim</div>
                
                <div className="bg-amber-500 text-black p-12 rounded-lg inline-block">
                    <h3 className="text-3xl md:text-5xl font-medium mb-4 leading-tight">
                        The revolution is not raw capability.<br />
                        The revolution is Taste Infrastructure.
                    </h3>
                    <p className="opacity-70">W230 Studio — December 2025</p>
                </div>
                
                 <div className="mt-16">
                     <button onClick={onClose} className="px-8 py-3 border border-stone-700 hover:bg-stone-800 rounded transition-colors text-sm uppercase tracking-widest">
                         Close Brief
                     </button>
                 </div>
             </div>
           </section>

        </motion.div>
      )}
    </AnimatePresence>
  );
};