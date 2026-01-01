import React from 'react';
import { Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  return (
    <footer id="contact" className="py-16 bg-[#FAFAF9] px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 border-t border-slate-200 pt-12">
        <div className="text-center md:text-left">
          <img
            src="/assets/brand/logo_black.png"
            alt="W230"
            className="h-12 w-auto mb-3"
          />
          <p className="text-slate-600 text-sm font-light">Specialized AI Implementation Partner</p>
          <p className="text-slate-500 text-xs mt-1 font-light">Founded by Simone Leonelli</p>

        </div>

        <div className="flex flex-wrap justify-center md:justify-end gap-8 text-sm font-medium">
          <Link to="/resources" className="text-slate-600 hover:text-[#B85C38] transition-colors">Resources</Link>
          <Link to="/proof" className="text-slate-600 hover:text-[#B85C38] transition-colors">Proof</Link>
          <a href="mailto:hello@w230.com" className="text-[#B85C38] hover:text-[#9C5438] transition-colors flex items-center gap-2 font-bold decoration-dotted underline underline-offset-4">
            <Mail className="w-4 h-4" />
            hello@w230.com
          </a>
        </div>

        <div className="text-slate-500 text-sm text-center md:text-right">
          <p>&copy; {new Date().getFullYear()} W230</p>
          <p className="text-xs mt-1">All rights reserved</p>
        </div>
      </div>
    </footer>
  );
};