import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { SectionHeader } from '../UI';
import { Check } from 'lucide-react';

const OutcomeMetric: React.FC<{ value: string; label: string; delay: number }> = ({ value, label, delay }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay, duration: 0.5 }}
        className="flex flex-col items-center p-6 bg-white rounded border border-slate-100 shadow-sm"
    >
        <span className="text-4xl md:text-5xl font-bold text-slate-900 font-serif mb-2">{value}</span>
        <span className="text-xs font-bold uppercase tracking-widest text-slate-500 text-center">{label}</span>
    </motion.div>
);

const OutcomeList: React.FC = () => (
    <div className="flex flex-col gap-4">
        {[
            "8–15 hours per week per user saved",
            "55+ active users, 80%+ daily engagement",
            "95%+ accuracy on structured outputs",
            "Your team can maintain independently"
        ].map((item, i) => (
            <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + (i * 0.1), duration: 0.5 }}
                className="flex items-start gap-3"
            >
                <div className="mt-1 bg-[#dbeafe] p-1 rounded-full">
                    <Check className="w-3 h-3 text-blue-600" />
                </div>
                <p className="text-lg text-slate-700 font-light">{item}</p>
            </motion.div>
        ))}
    </div>
);

export const Outcomes: React.FC = () => {
    const ref = useRef(null);

    return (
        <section ref={ref} className="py-24 px-6 bg-slate-50 border-y border-slate-200">
            <div className="max-w-7xl mx-auto">
                <SectionHeader title="What happens after implementation" subtitle="You don't just get software. You get measurable change." />

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mt-16 items-center">
                    {/* Metrics Grid */}
                    <div className="grid grid-cols-2 gap-6">
                        <OutcomeMetric value="8-15h" label="Saved / User / Wk" delay={0} />
                        <OutcomeMetric value="55+" label="Active Users" delay={0.1} />
                        <OutcomeMetric value="95%+" label="Accuracy" delay={0.2} />
                        <OutcomeMetric value="Yes" label="Full Ownership" delay={0.3} />
                    </div>

                    {/* Checklist */}
                    <div>
                        <h3 className="text-2xl font-bold font-serif text-slate-900 mb-8">
                            Stop paying for tools. <br />
                            Start building <span className="text-[#B85C38]">assets</span>.
                        </h3>
                        <OutcomeList />
                    </div>
                </div>
            </div>
        </section>
    );
};
