import React from 'react';
import { Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="py-16 bg-slate-900 text-slate-400 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 border-t border-slate-800 pt-12">
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold text-white tracking-tight font-serif">W230</h2>
          <p className="text-slate-500 text-sm mt-2 font-light">Specialized AI Implementation Partner</p>
        </div>
        
        <div className="flex items-center gap-6">
          <a href="mailto:hello@w230.com" className="text-slate-300 hover:text-[#BF5738] transition-colors flex items-center gap-2 font-medium">
            <Mail className="w-4 h-4" />
            hello@w230.com
          </a>
        </div>
        
        <div className="text-slate-600 text-sm">
          &copy; {new Date().getFullYear()} W230. All rights reserved.
        </div>
      </div>
    </footer>
  );
};