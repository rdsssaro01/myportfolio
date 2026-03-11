import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface NavigationProps {
    activeSection: string;
}

const Navigation: React.FC<NavigationProps> = ({ activeSection }) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { id: 'home', label: 'Home' },
        { id: 'about', label: 'About' },
        { id: 'experience', label: 'Experience' },
        { id: 'projects', label: 'Projects' },
        { id: 'education', label: 'Education' },
        { id: 'contact', label: 'Contact' },
    ];

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            const offset = 80;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth',
            });
        }
        setIsMobileMenuOpen(false);
    };

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'py-4' : 'py-6'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className={`flex justify-between items-center px-6 h-16 rounded-2xl transition-all duration-500 ${isScrolled ? 'glass shadow-lg shadow-blue-500/5' : 'bg-transparent'}`}>
                    <button
                        onClick={() => scrollToSection('home')}
                        className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent hover:scale-105 transition-transform"
                    >
                        SARAVANAN R
                    </button>

                    <div className="hidden md:flex items-center space-x-1">
                        {navItems.map((item) => (
                            <button
                                key={item.id}
                                onClick={() => scrollToSection(item.id)}
                                className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-300 ${activeSection === item.id
                                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30'
                                    : 'text-slate-600 hover:text-blue-600 hover:bg-blue-50/50'
                                    }`}
                            >
                                {item.label}
                            </button>
                        ))}
                    </div>

                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="md:hidden p-2 rounded-xl hover:bg-slate-100 transition-colors"
                    >
                        {isMobileMenuOpen ? (
                            <X className="w-6 h-6 text-slate-700" />
                        ) : (
                            <Menu className="w-6 h-6 text-slate-700" />
                        )}
                    </button>
                </div>
            </div>

            {isMobileMenuOpen && (
                <div className="md:hidden px-4 pt-2">
                    <div className="glass rounded-2xl overflow-hidden shadow-2xl border border-white/40">
                        <div className="flex flex-col p-4 space-y-2">
                            {navItems.map((item) => (
                                <button
                                    key={item.id}
                                    onClick={() => scrollToSection(item.id)}
                                    className={`w-full text-left px-4 py-3 rounded-xl text-sm font-semibold transition-all ${activeSection === item.id
                                        ? 'bg-blue-600 text-white'
                                        : 'text-slate-700 hover:bg-slate-100'
                                        }`}
                                >
                                    {item.label}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navigation;
