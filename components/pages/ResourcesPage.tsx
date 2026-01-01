
import React from 'react';
import { ScarcityBanner } from '../UI';
import { ProblemSection } from '../sections/ProblemSection';
import { Footer } from '../Footer';

export const ResourcesPage: React.FC = () => {
    return (
        <div className="relative min-h-screen bg-[#FAFAF9] text-slate-900">
            <ScarcityBanner />
            <div className="pt-20">
                <ProblemSection />
            </div>
            <Footer />
        </div>
    );
};
