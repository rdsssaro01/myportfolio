import React from 'react';
import { ChevronDown, Terminal, Sparkles, Cpu } from 'lucide-react';

const Hero: React.FC = () => {
    const scrollToAbout = () => {
        const element = document.getElementById('about');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative pt-20 overflow-hidden dot-grid">
            {/* Background Mesh Gradients */}
            <div className="mesh-gradient-1 top-0 -left-48 animate-gradient-shift"></div>
            <div className="mesh-gradient-2 bottom-0 -right-48 animate-gradient-shift"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex flex-col items-center text-center space-y-12">

                    {/* Badge */}
                    <div className="animate-fade-in-up flex items-center gap-2 px-4 py-2 rounded-full glass-strong border border-white/10 shadow-xl shadow-black/20">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-cyan opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-cyan"></span>
                        </span>
                        <span className="text-xs font-mono font-medium text-slate-300 uppercase tracking-widest">
                            Available for Immediate Join
                        </span>
                    </div>

                    {/* Main Headlines */}
                    <div className="space-y-6 max-w-4xl">
                        <h1 className="animate-fade-in-up delay-100 text-5xl sm:text-7xl lg:text-8xl font-black tracking-tight leading-tight">
                            <span className="text-white">SARAVANAN R</span>
                            <br />
                            {/* <span className="gradient-text">R</span> */}
                        </h1>
                        <h2 className="animate-fade-in-up delay-200 text-xl sm:text-2xl lg:text-3xl font-medium text-slate-400 font-mono">
                            <span className="text-accent-indigo">&lt;</span> Full Stack Developer <span className="text-accent-indigo">/&gt;</span>
                        </h2>
                    </div>

                    {/* Summary */}
                    <p className="animate-fade-in-up delay-300 text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
                        Expert in architecting <span className="text-white font-semibold underline decoration-accent-indigo/40 decoration-2 underline-offset-4">Offline-First systems</span> for Maritime, Healthcare, and Telecom sectors. Specializing in Flutter, Angular, and .NET Core solutions.
                    </p>

                    {/* Feature Chips */}
                    <div className="animate-fade-in-up delay-400 flex flex-wrap justify-center gap-4">
                        {[
                            { icon: Terminal, label: '3 Years Exp', color: 'text-accent-indigo' },
                            { icon: Cpu, label: 'Microservices', color: 'text-accent-violet' },
                            { icon: Sparkles, label: 'AI Agentic Dev', color: 'text-accent-cyan' },
                        ].map((chip, i) => (
                            <div key={i} className="flex items-center gap-2 px-5 py-3 glass-card rounded-2xl">
                                <chip.icon className={`w-5 h-5 ${chip.color}`} />
                                <span className="font-mono text-sm font-semibold text-slate-200">{chip.label}</span>
                            </div>
                        ))}
                    </div>

                    {/* Actions */}
                    <div className="animate-fade-in-up delay-500 flex flex-wrap justify-center gap-5">
                        <a
                            href="#contact"
                            className="px-10 py-4 bg-white text-black font-bold rounded-2xl hover:scale-105 active:scale-95 transition-all shadow-[0_0_40px_rgba(255,255,255,0.1)]"
                        >
                            Get In Touch
                        </a>
                        <a
                            href="#projects"
                            className="px-10 py-4 glass-strong text-white font-bold rounded-2xl border border-white/10 hover:bg-white/5 hover:scale-105 active:scale-95 transition-all"
                        >
                            View Projects
                        </a>
                    </div>

                    {/* Scroll Indicator */}
                    <button
                        onClick={scrollToAbout}
                        className="animate-float pt-12 text-slate-500 hover:text-white transition-colors"
                    >
                        <ChevronDown className="w-8 h-8" />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Hero;
