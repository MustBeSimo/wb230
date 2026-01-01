import React from 'react';
import { SectionHeader } from '../UI';
import { ArrowRight, Lock } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const CaseSnippet: React.FC<{
  industry: string;
  outcome: string;
  description: string;
  highlight: string;
}> = ({ industry, outcome, description, highlight }) => (
  <div className="bg-white p-8 rounded border border-slate-200 shadow-sm relative overflow-hidden group hover:border-[#B85C38]/30 transition-colors">
    <div className="absolute top-0 right-0 p-2 bg-stone-100 rounded-bl text-xs font-mono text-slate-500 flex items-center gap-1">
      <Lock className="w-3 h-3" /> Redacted Client
    </div>
    <h4 className="text-xs font-bold uppercase tracking-widest text-[#B85C38] mb-4">{industry}</h4>
    <h3 className="text-2xl font-bold text-slate-900 font-serif mb-4">{outcome}</h3>
    <p className="text-slate-600 mb-6 font-light leading-relaxed">{description}</p>
    <div className="py-2 px-3 bg-stone-50 border border-stone-200 inline-block rounded text-sm font-medium text-slate-700">
      {highlight}
    </div>
  </div>
);

export const LabProof: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="py-24 px-6 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto">
        <SectionHeader title="Proof of Utility" subtitle="Real results from internal tools." />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
          <CaseSnippet
            industry="Financial Services"
            outcome="Quoting Time Reduced by 7 Days"
            description="Replaced a manual Excel-based quoting process with a structured AI wizard. Logic constraints ensure 100% compliance with pricing tables."
            highlight="55+ Active Weekly Users"
          />
          <CaseSnippet
            industry="Logistics & Ops"
            outcome="42% Reduction in Manual Entry"
            description="Deployed an email parsing agent that routes vendor invoices directly to ERP with human-in-the-loop validation for edge cases."
            highlight="1,300× ROI (Projected 3-Yr)"
          />
        </div>

        <div className="mt-12 text-center">
          <button
            onClick={() => navigate('/proof')}
            className="inline-flex items-center gap-2 text-slate-900 border-b border-slate-900 pb-0.5 hover:text-[#B85C38] hover:border-[#B85C38] transition-colors font-medium cursor-pointer"
          >
            Read detailed breakdown <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};