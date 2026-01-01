import React from 'react';
import { SectionHeader, BookingButton } from '../UI';
import { Check, X } from 'lucide-react';

export const FitCheck: React.FC = () => {
    return (
        <section className="py-24 px-6 bg-slate-900 text-slate-300">
            <div className="max-w-6xl mx-auto">
                <SectionHeader title="Is this a fit?" />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Good Fit */}
                    <div>
                        <h3 className="text-white font-serif text-xl font-bold mb-6 flex items-center gap-2">
                            <span className="p-1 bg-green-900/50 rounded-full border border-green-800"><Check className="w-4 h-4 text-green-400" /></span>
                            We are a good fit if...
                        </h3>
                        <ul className="space-y-4">
                            {[
                                "You process >500 documents or tickets per week.",
                                "You have a clear bottleneck (not just 'we want AI').",
                                "You can provide access to internal data/APIs.",
                                "You have a decision-maker ready to sign off."
                            ].map((item, i) => (
                                <li key={i} className="flex gap-3 items-start border-l-2 border-slate-700 pl-4">
                                    <p className="text-slate-400">{item}</p>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Bad Fit */}
                    <div>
                        <h3 className="text-white font-serif text-xl font-bold mb-6 flex items-center gap-2">
                            <span className="p-1 bg-red-900/50 rounded-full border border-red-800"><X className="w-4 h-4 text-red-400" /></span>
                            We are NOT a match if...
                        </h3>
                        <ul className="space-y-4">
                            {[
                                "You want a 'chat with your pdf' demo.",
                                "You are looking for a co-founder for equity.",
                                "You need a generalist full-stack web developer.",
                                "You don't have budget for implementation ($15k+)."
                            ].map((item, i) => (
                                <li key={i} className="flex gap-3 items-start border-l-2 border-slate-700 pl-4">
                                    <p className="text-slate-400">{item}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="mt-16 text-center border-t border-slate-800 pt-16">
                    <h3 className="text-2xl font-serif font-bold text-white mb-6">Ready to scope your workflow?</h3>
                    <BookingButton text="Book Discovery Call" className="bg-white text-slate-900 hover:bg-[#B85C38] hover:text-white border-none" />
                </div>
            </div>
        </section>
    );
};
