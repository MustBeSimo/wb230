import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { HomePage } from './components/pages/HomePage';
import { ResourcesPage } from './components/pages/ResourcesPage';
import { ProofPage } from './components/pages/ProofPage';
import { StickyHeader } from './components/StickyHeader';
import { ScarcityBanner } from './components/UI';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="relative min-h-screen bg-[#FAFAF9] text-slate-900 font-sans selection:bg-[#B85C38] selection:text-white">
        <StickyHeader />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/resources" element={<ResourcesPage />} />
          <Route path="/proof" element={<ProofPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;