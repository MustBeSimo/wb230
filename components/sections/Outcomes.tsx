import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { SectionHeader } from '../UI';
import { Check, TrendingUp, Users, Target, Zap } from 'lucide-react';
import { AnimatedMetricsGraph } from '../visuals';

const OutcomeMetric: React.FC<{ value: string; label: string; delay: number; icon: React.ReactNode }> = ({ value, label, delay, icon }) => (
    <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay, duration: 0.5, type: 'spring' }}
        whileHover={{ y: -4, boxShadow: '0 20px 40px -12px rgba(184, 92, 56, 0.15)' }}
        className="flex flex-col items-center p-6 bg-white rounded-[4px] border border-slate-100 shadow-sm cursor-default group"
    >
        <motion.div
            className="mb-3 p-2 rounded-full bg-stone-50 group-hover:bg-[#B85C38]/10 transition-colors"
            whileHover={{ rotate: 5 }}
        >
            {icon}
        </motion.div>
        <motion.span
            className="text-4xl md:text-5xl font-bold text-slate-900 font-serif mb-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: delay + 0.2 }}
        >
            {value}
        </motion.span>
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
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });
    const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

    return (
        <section ref={ref} className="py-24 px-6 bg-slate-50 border-y border-slate-200 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <SectionHeader title="What happens after implementation" subtitle="You don't just get software. You get measurable, lasting change." />

                {/* Animated Graph Section */}
                <motion.div
                    style={{ y }}
                    className="mb-16"
                >
                    <AnimatedMetricsGraph />
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Metrics Grid */}
                    <div className="grid grid-cols-2 gap-6">
                        <OutcomeMetric value="8-15h" label="Saved / User / Wk" delay={0} icon={<TrendingUp className="w-5 h-5 text-[#B85C38]" />} />
                        <OutcomeMetric value="55+" label="Active Users" delay={0.1} icon={<Users className="w-5 h-5 text-[#B85C38]" />} />
                        <OutcomeMetric value="95%+" label="Accuracy" delay={0.2} icon={<Target className="w-5 h-5 text-[#B85C38]" />} />
                        <OutcomeMetric value="Yes" label="Full Ownership" delay={0.3} icon={<Zap className="w-5 h-5 text-[#B85C38]" />} />
                    </div>

                    {/* Checklist */}
                    <div>
                        <h3 className="text-2xl font-bold font-serif text-slate-900 mb-8">
                            Stop paying for tools. <br />
                            Start building <span className="text-[#B85C38] relative">
                                assets
                                <svg className="absolute w-full h-2 -bottom-1 left-0" viewBox="0 0 100 8" preserveAspectRatio="none">
                                    <motion.path
                                        d="M0 4 Q 25 8 50 4 T 100 4"
                                        stroke="#B85C38"
                                        strokeWidth="2"
                                        fill="none"
                                        opacity="0.4"
                                        initial={{ pathLength: 0 }}
                                        whileInView={{ pathLength: 1 }}
                                        transition={{ duration: 0.8, delay: 0.5 }}
                                    />
                                </svg>
                            </span>.
                        </h3>
                        <OutcomeList />
                    </div>
                </div>
            </div>
        </section>
    );
};
