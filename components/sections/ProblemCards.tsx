import React from 'react';
import { SectionHeader } from '../UI';
import { XCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export const ProblemCards: React.FC = () => {
    return (
        <section className="py-24 px-6 bg-slate-50 border-t border-slate-200">
            <div className="max-w-4xl mx-auto">
                <SectionHeader title="Why AI projects fail at your company" />

                <div className="bg-white p-8 md:p-12 rounded border border-slate-200 shadow-sm">
                    <p className="text-xl font-serif italic text-slate-700 mb-8 leading-relaxed">
                        "You've probably seen this pattern: The vendor delivers a prototype. Your team tries it for two weeks. Then it sits unused."
                    </p>

                    <h4 className="text-sm font-bold uppercase tracking-widest text-[#B85C38] mb-6">The Failure Points</h4>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {[
                            "No one owns adoption",
                            "The output doesn't match your process",
                            "Trust and QA are missing",
                            "There's no handoff plan"
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="flex items-center gap-3"
                            >
                                <XCircle className="w-5 h-5 text-slate-400 flex-shrink-0" />
                                <span className="text-slate-800 font-medium">{item}</span>
                            </motion.div>
                        ))}
                    </div>

                    <div className="mt-10 pt-10 border-t border-slate-100">
                        <p className="text-lg text-slate-900 font-light">
                            We build differently. We encode your process into the system, not the other way around.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};
