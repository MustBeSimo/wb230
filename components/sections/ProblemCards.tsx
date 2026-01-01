import React, { useRef } from 'react';
import { SectionHeader } from '../UI';
import { XCircle, ArrowRight, CheckCircle2 } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ProcessFlowVisual } from '../visuals';

const failurePoints = [
    { problem: "No one owns adoption", solution: "Dedicated adoption tracking & training" },
    { problem: "Output doesn't match process", solution: "Custom-fitted to your workflow" },
    { problem: "Trust and QA are missing", solution: "Built-in verification & audit trails" },
    { problem: "No handoff plan", solution: "Full documentation & staff workshops" }
];

export const ProblemCards: React.FC = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });
    const visualY = useTransform(scrollYProgress, [0, 1], [30, -30]);

    return (
        <section ref={ref} className="py-24 px-6 bg-slate-50 border-t border-slate-200 overflow-hidden">
            <div className="max-w-6xl mx-auto">
                <SectionHeader
                    title="Why AI projects fail at your company"
                    subtitle="And how we solve each one."
                />

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Problem/Solution Cards */}
                    <div className="space-y-4">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-white p-6 md:p-8 rounded-[4px] border border-slate-200 shadow-sm mb-6"
                        >
                            <p className="text-lg md:text-xl font-serif italic text-slate-700 leading-relaxed">
                                "The vendor delivers a prototype. Your team tries it for two weeks. Then it sits <span className="text-[#B85C38] font-semibold not-italic">unused</span>."
                            </p>
                        </motion.div>

                        <div className="space-y-3">
                            {failurePoints.map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    whileHover={{ x: 4 }}
                                    className="group bg-white p-4 rounded-[4px] border border-slate-100 hover:border-[#B85C38]/30 transition-all cursor-default"
                                >
                                    <div className="flex items-center justify-between gap-4">
                                        <div className="flex items-center gap-3">
                                            <XCircle className="w-5 h-5 text-slate-300 group-hover:text-slate-400 transition-colors flex-shrink-0" />
                                            <span className="text-slate-500 line-through decoration-slate-300 group-hover:decoration-[#B85C38]/50 transition-colors">{item.problem}</span>
                                        </div>
                                        <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-[#B85C38] transition-colors flex-shrink-0 hidden md:block" />
                                        <div className="hidden md:flex items-center gap-2">
                                            <CheckCircle2 className="w-4 h-4 text-[#B85C38] opacity-0 group-hover:opacity-100 transition-opacity" />
                                            <span className="text-slate-700 font-medium opacity-0 group-hover:opacity-100 transition-opacity text-sm">{item.solution}</span>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5 }}
                            className="mt-6 p-4 bg-gradient-to-r from-[#B85C38]/5 to-transparent border-l-4 border-[#B85C38] rounded-r-[4px]"
                        >
                            <p className="text-slate-900 font-medium">
                                We encode <em>your</em> process into the system—not the other way around.
                            </p>
                        </motion.div>
                    </div>

                    {/* Visual */}
                    <motion.div style={{ y: visualY }}>
                        <div className="relative">
                            <div className="absolute -inset-4 bg-gradient-to-br from-[#B85C38]/5 to-slate-100/50 rounded-lg blur-xl"></div>
                            <ProcessFlowVisual />
                        </div>
                        <p className="text-center text-sm text-slate-500 mt-4 font-mono">
                            Chaos → Structure → Verified Output
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
