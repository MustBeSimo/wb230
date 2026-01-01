import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { SectionHeader, BookingButton } from '../UI';
import { Check, X, Sparkles, AlertCircle } from 'lucide-react';

const goodFitItems = [
    { text: "You process >500 documents or tickets per week", highlight: "High volume" },
    { text: "You have a clear bottleneck (not just 'we want AI')", highlight: "Specific problem" },
    { text: "You can provide access to internal data/APIs", highlight: "Data ready" },
    { text: "You have a decision-maker ready to sign off", highlight: "Authority" }
];

const badFitItems = [
    "You want a 'chat with your PDF' demo",
    "You're looking for a co-founder for equity",
    "You need a generalist full-stack developer",
    "You don't have budget for implementation ($15k+)"
];

export const FitCheck: React.FC = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });
    const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

    return (
        <section ref={ref} className="py-24 px-6 bg-slate-900 text-slate-300 relative overflow-hidden">
            {/* Animated background grid */}
            <motion.div
                style={{ y: bgY }}
                className="absolute inset-0 opacity-[0.03] pointer-events-none"
            >
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
                        backgroundSize: '40px 40px'
                    }}
                />
            </motion.div>

            {/* Accent glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#B85C38] rounded-full blur-[200px] opacity-[0.03]" />

            <div className="max-w-6xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-serif">
                        Is this a <span className="text-[#B85C38]">fit</span>?
                    </h2>
                    <p className="text-slate-400 text-lg font-light max-w-xl mx-auto">
                        We're selective about who we work with. This ensures high-impact results for every client.
                    </p>
                    <div className="h-1 w-20 bg-[#B85C38] mt-6 mx-auto rounded-full"></div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                    {/* Good Fit */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="bg-slate-800/50 backdrop-blur-sm rounded-[4px] border border-slate-700/50 p-8"
                    >
                        <h3 className="text-white font-serif text-xl font-bold mb-6 flex items-center gap-3">
                            <span className="p-2 bg-emerald-500/20 rounded-full border border-emerald-500/30">
                                <Check className="w-5 h-5 text-emerald-400" />
                            </span>
                            We're a good fit if...
                        </h3>
                        <ul className="space-y-4">
                            {goodFitItems.map((item, i) => (
                                <motion.li
                                    key={i}
                                    initial={{ opacity: 0, x: -10 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    whileHover={{ x: 4 }}
                                    className="flex gap-3 items-start border-l-2 border-emerald-500/30 hover:border-emerald-400 pl-4 py-1 transition-colors cursor-default group"
                                >
                                    <div>
                                        <p className="text-slate-300 group-hover:text-white transition-colors">{item.text}</p>
                                        <span className="inline-block mt-1 text-xs text-emerald-400 font-medium uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity">
                                            {item.highlight}
                                        </span>
                                    </div>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Bad Fit */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="bg-slate-800/30 backdrop-blur-sm rounded-[4px] border border-slate-700/30 p-8"
                    >
                        <h3 className="text-white font-serif text-xl font-bold mb-6 flex items-center gap-3">
                            <span className="p-2 bg-red-500/20 rounded-full border border-red-500/30">
                                <X className="w-5 h-5 text-red-400" />
                            </span>
                            We're NOT a match if...
                        </h3>
                        <ul className="space-y-4">
                            {badFitItems.map((item, i) => (
                                <motion.li
                                    key={i}
                                    initial={{ opacity: 0, x: 10 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="flex gap-3 items-start border-l-2 border-slate-700 pl-4 py-1"
                                >
                                    <p className="text-slate-500">{item}</p>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>
                </div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="mt-16 text-center border-t border-slate-800 pt-16"
                >
                    <div className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 bg-[#B85C38]/10 rounded-full border border-[#B85C38]/20">
                        <Sparkles className="w-4 h-4 text-[#B85C38]" />
                        <span className="text-sm text-[#B85C38] font-medium">Free 30-minute assessment</span>
                    </div>
                    <h3 className="text-2xl font-serif font-bold text-white mb-6">
                        Ready to scope your workflow?
                    </h3>
                    <BookingButton
                        text="Book Discovery Call"
                        className="bg-white text-slate-900 hover:bg-[#B85C38] hover:text-white border-none shadow-2xl shadow-white/10"
                    />
                </motion.div>
            </div>
        </section>
    );
};
