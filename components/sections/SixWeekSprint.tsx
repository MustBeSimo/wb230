import React from 'react';
import { SectionHeader } from '../UI';

export const SixWeekSprint: React.FC = () => {
    return (
        <section className="py-24 px-6 bg-white border-t border-slate-200">
            <div className="max-w-5xl mx-auto">
                <SectionHeader title="The 6-Week Sprint" subtitle="Fixed scope, fixed timeline, rigorous handoff." />

                <div className="border border-slate-200 rounded-[2px] overflow-hidden">
                    <table className="w-full text-left border-collapse">
                        <thead className="bg-slate-900 text-white">
                            <tr>
                                <th className="p-4 font-serif font-bold border-r border-slate-800 w-1/4">Phase</th>
                                <th className="p-4 font-serif font-bold border-r border-slate-800 w-1/4">Focus</th>
                                <th className="p-4 font-serif font-bold">Deliverable</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100 text-sm md:text-base">
                            <tr>
                                <td className="p-4 font-bold text-slate-900">Weeks 1-2</td>
                                <td className="p-4 text-slate-600">Architecture & Data</td>
                                <td className="p-4 text-slate-800">Private VPC setup, data pipeline connectors.</td>
                            </tr>
                            <tr>
                                <td className="p-4 font-bold text-slate-900">Weeks 3-4</td>
                                <td className="p-4 text-slate-600">Logic & Routing</td>
                                <td className="p-4 text-slate-800">Agentic workflow code, eval harness setup.</td>
                            </tr>
                            <tr>
                                <td className="p-4 font-bold text-slate-900">Week 5</td>
                                <td className="p-4 text-slate-600">UI & Integration</td>
                                <td className="p-4 text-slate-800">Frontend formatting, ERP read/write integration.</td>
                            </tr>
                            <tr>
                                <td className="p-4 font-bold text-slate-900 bg-stone-50">Week 6</td>
                                <td className="p-4 text-slate-600 bg-stone-50">Handoff & Training</td>
                                <td className="p-4 text-slate-800 font-bold bg-stone-50 text-[#B85C38]">Source code transfer, staff workshops.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
};
