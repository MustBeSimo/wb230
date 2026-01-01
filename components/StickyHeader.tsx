import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export const StickyHeader: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const location = useLocation();
    const isHome = location.pathname === '/';

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (id: string) => {
        if (!isHome) {
            // If not home, we just navigate to home (logic needs to handle scroll after nav)
            // For simplicity, we just link to /
            return;
        }
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        setMobileMenuOpen(false);
    };

    const navLinks = [
        { name: 'Problem', id: 'problem' },
        { name: 'Deliverables', id: 'deliverables' },
        { name: 'Proof', path: '/proof' },
        { name: 'Pricing', id: 'pricing' },
        { name: 'Contact', id: 'contact' }, // Will scroll to Footer
    ];

    const handleNavClick = (link: { name: string, id?: string, path?: string }) => {
        if (link.path) {
            // Let the Link component handle it
            setMobileMenuOpen(false);
            return;
        }
        if (link.id) {
            scrollToSection(link.id);
        }
    };

    return (
        <nav className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'}`}>
            <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                <Link to="/" className="flex items-center">
                    <img src="/assets/brand/logo_black.png" alt="W230" className="h-16 w-auto" />
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        link.path ? (
                            <Link key={link.name} to={link.path} className="text-sm font-medium text-slate-600 hover:text-[#B85C38] transition-colors">{link.name}</Link>
                        ) : (
                            <button key={link.name} onClick={() => handleNavClick(link)} className="text-sm font-medium text-slate-600 hover:text-[#B85C38] transition-colors">
                                {link.name}
                            </button>
                        )
                    ))}
                    <a
                        href="mailto:hello@w230.com"
                        className="hidden lg:block text-sm font-medium text-slate-600 hover:text-[#B85C38] transition-colors mr-2"
                    >
                        hello@w230.com
                    </a>
                    <button
                        onClick={() => window.open('https://cal.com/w230-discovery-placeholder', '_blank')}
                        className="px-4 py-2 bg-slate-900 text-white text-sm font-bold rounded-[2px] hover:bg-[#B85C38] transition-colors"
                    >
                        Book Discovery
                    </button>
                </div>

                {/* Mobile Toggle */}
                <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                    {mobileMenuOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="absolute top-full left-0 right-0 bg-white border-b border-slate-200 p-6 flex flex-col gap-4 shadow-lg md:hidden">
                    {navLinks.map((link) => (
                        link.path ? (
                            <Link key={link.name} to={link.path} className="text-lg font-medium text-slate-900" onClick={() => setMobileMenuOpen(false)}>{link.name}</Link>
                        ) : (
                            <button key={link.name} onClick={() => handleNavClick(link)} className="text-lg font-medium text-slate-900 text-left">
                                {link.name}
                            </button>
                        )
                    ))}
                    <a
                        href="mailto:hello@w230.com"
                        className="w-full py-3 text-center border border-slate-200 text-slate-600 font-bold rounded-[2px]"
                    >
                        Email hello@w230.com
                    </a>
                    <button
                        onClick={() => window.open('https://cal.com/w230-discovery-placeholder', '_blank')}
                        className="w-full py-3 bg-slate-900 text-white font-bold rounded-[2px]"
                    >
                        Book Discovery Call
                    </button>
                </div>
            )}
        </nav>
    );
};
