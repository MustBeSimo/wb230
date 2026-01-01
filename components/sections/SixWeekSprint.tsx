import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { SectionHeader } from '../UI';
import { Database, Code2, Layout, GraduationCap, ChevronRight } from 'lucide-react';

const phases = [
    {
        weeks: "1-2",
        title: "Architecture & Data",
        deliverable: "Private VPC setup, data pipeline connectors, security audit.",
        icon: Database,
        color: "#3b82f6"
    },
    {
        weeks: "3-4",
        title: "Logic & Routing",
        deliverable: "Agentic workflow code, eval harness setup, prompt engineering.",
        icon: Code2,
        color: "#8b5cf6"
    },
    {
        weeks: "5",
        title: "UI & Integration",
        deliverable: "Frontend formatting, ERP read/write integration, user testing.",
        icon: Layout,
        color: "#10b981"
    },
    {
        weeks: "6",
        title: "Handoff & Training",
        deliverable: "Source code transfer, documentation, staff workshops.",
        icon: GraduationCap,
        color: "#B85C38",
        highlighted: true
    }
];

export const SixWeekSprint: React.FC = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });
    const progressWidth = useTransform(scrollYProgress, [0.2, 0.8], ["0%", "100%"]);

    return (
        <section ref={ref} className="py-24 px-6 bg-white border-t border-slate-200 overflow-hidden">
            <div className="max-w-5xl mx-auto">
                <SectionHeader
                    title="The 6-Week Sprint"
                    subtitle="Fixed scope. Fixed timeline. Rigorous handoff. No surprises."
                />

                {/* Progress bar */}
                <div className="relative mb-12">
                    <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                        <motion.div
                            className="h-full bg-gradient-to-r from-blue-500 via-purple-500 via-emerald-500 to-[#B85C38] rounded-full"
                            style={{ width: progressWidth }}
                        />
                    </div>
                    <div className="flex justify-between mt-2">
                        <span className="text-xs text-slate-400 font-mono">START</span>
                        <span className="text-xs text-[#B85C38] font-mono font-bold">HANDOFF</span>
                    </div>
                </div>

                {/* Timeline cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {phases.map((phase, i) => {
                        const Icon = phase.icon;
                        return (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1, duration: 0.5 }}
                                whileHover={{ y: -6, boxShadow: `0 20px 40px -12px ${phase.color}20` }}
                                className={`relative p-6 rounded-[4px] border transition-all duration-300 cursor-default ${
                                    phase.highlighted
                                        ? 'bg-gradient-to-br from-[#B85C38]/5 to-white border-[#B85C38]/30'
                                        : 'bg-white border-slate-200 hover:border-slate-300'
                                }`}
                            >
                                {/* Week badge */}
                                <div
                                    className="absolute -top-3 left-4 px-3 py-1 text-xs font-bold text-white rounded-full"
                                    style={{ backgroundColor: phase.color }}
                                >
                                    Week {phase.weeks}
                                </div>

                                {/* Icon */}
                                <motion.div
                                    className="w-10 h-10 rounded-[4px] flex items-center justify-center mb-4 mt-2"
                                    style={{ backgroundColor: `${phase.color}15` }}
                                    whileHover={{ rotate: 5 }}
                                >
                                    <Icon className="w-5 h-5" style={{ color: phase.color }} />
                                </motion.div>

                                {/* Content */}
                                <h4 className="font-bold text-slate-900 font-serif mb-2">{phase.title}</h4>
                                <p className="text-sm text-slate-600 leading-relaxed">{phase.deliverable}</p>

                                {/* Arrow connector (hidden on last) */}
                                {i < phases.length - 1 && (
                                    <div className="hidden lg:block absolute -right-2 top-1/2 -translate-y-1/2 z-10">
                                        <ChevronRight className="w-4 h-4 text-slate-300" />
                                    </div>
                                )}

                                {/* Highlight badge for final phase */}
                                {phase.highlighted && (
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: 0.5 }}
                                        className="absolute -bottom-2 right-4 px-2 py-0.5 bg-[#B85C38] text-white text-[10px] font-bold uppercase tracking-wider rounded"
                                    >
                                        You own it
                                    </motion.div>
                                )}
                            </motion.div>
                        );
                    })}
                </div>

                {/* Bottom note */}
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                    className="text-center text-slate-500 mt-10 text-sm"
                >
                    Every sprint ends with <span className="text-slate-900 font-medium">full source code transfer</span> and training workshops.
                </motion.p>
            </div>
        </section>
    );
};
