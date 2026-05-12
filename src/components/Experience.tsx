import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle, Zap } from 'lucide-react';

const Experience: React.FC = () => {
    const experiences = [
        {
            company: 'ClazyWorks Technogies',
            role: 'Software Engineer',
            period: '07/2023 – 03/2026',
            location: 'Chennai, Tamil Nadu',
            highlights: [
                {
                    title: 'High-Performance API Architecture',
                    details: 'Engineered Node.js and .NET RESTful APIs with sub-second latency for enterprise communication.'
                },
                {
                    title: 'Enterprise Data Engineering',
                    details: 'Designed Offline-First sync pipelines for 2,000+ media assets using SQLite/ObjectBox with 100% integrity.'
                },
                {
                    title: 'Cloud & CI/CD Automation',
                    details: 'Orchestrated pipelines via GitHub Actions and Azure DevOps, ensuring 99.9% uptime.'
                },
                {
                    title: 'Security & Auth',
                    details: 'Implemented hardened JWT, OAuth2, and RBAC to secure sensitive medical and payroll datasets.'
                }
            ],
            tech: ['Flutter', '.NET 8', 'Node.js', 'Azure', 'Docker', 'SQL Indexing']
        }
    ];

    return (
        <section id="experience" className="py-32 bg-surface-primary dot-grid">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col items-center text-center mb-24 space-y-4">
                    <h2 className="text-4xl sm:text-6xl font-black text-white">Career Path</h2>
                    <div className="section-line"></div>
                    <p className="text-slate-400 max-w-2xl text-lg font-medium">
                        Professional journey focused on <span className="text-white">Scalable Backend Systems</span> and <span className="text-white">Robust Mobile Solutions</span>.
                    </p>
                </div>

                <div className="max-w-5xl mx-auto space-y-12">
                    {experiences.map((exp, i) => (
                        <div key={i} className="relative pl-8 md:pl-0">
                            {/* Vertical Timeline Line */}
                            <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-accent-indigo via-accent-cyan to-transparent md:left-1/2 md:-translate-x-1/2 hidden md:block"></div>

                            <div className="md:flex items-center gap-12 group">
                                {/* Left Side: Company Info */}
                                <div className="md:w-1/2 md:text-right mb-8 md:mb-0">
                                    <div className="inline-flex items-center gap-2 px-4 py-2 glass rounded-xl text-accent-cyan font-mono text-sm mb-4">
                                        <Calendar className="w-4 h-4" />
                                        {exp.period}
                                    </div>
                                    <h3 className="text-3xl font-black text-white mb-1 group-hover:gradient-text transition-all duration-500">{exp.role}</h3>
                                    <div className="flex items-center justify-start md:justify-end gap-2 text-slate-400 font-bold mb-4">
                                        <Briefcase className="w-5 h-5 text-accent-indigo" />
                                        <span>{exp.company}</span>
                                        <span className="text-slate-600">|</span>
                                        <MapPin className="w-4 h-4" />
                                        <span className="text-sm">{exp.location}</span>
                                    </div>
                                    
                                    <div className="flex flex-wrap justify-start md:justify-end gap-2">
                                        {exp.tech.map((t, idx) => (
                                            <span key={idx} className="px-3 py-1 bg-accent-indigo/10 border border-accent-indigo/20 text-accent-indigo rounded-lg text-xs font-bold uppercase tracking-widest">
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Timeline Circle */}
                                <div className="absolute left-[-13px] md:left-1/2 md:-translate-x-1/2 top-10 w-6 h-6 rounded-full bg-surface-primary border-4 border-accent-cyan z-10 shadow-[0_0_15px_rgba(6,182,212,0.5)]"></div>

                                {/* Right Side: Highlights */}
                                <div className="md:w-1/2 space-y-6">
                                    <div className="glass-card p-8 group-hover:bg-white/[0.05]">
                                        <h4 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                                            <Zap className="w-5 h-5 text-accent-cyan" />
                                            Core Achievements
                                        </h4>
                                        <div className="space-y-6">
                                            {exp.highlights.map((h, idx) => (
                                                <div key={idx} className="flex gap-4">
                                                    <div className="mt-1 flex-shrink-0">
                                                        <CheckCircle className="w-5 h-5 text-accent-indigo" />
                                                    </div>
                                                    <div>
                                                        <p className="text-slate-100 font-bold mb-1">{h.title}</p>
                                                        <p className="text-sm text-slate-400 leading-relaxed">{h.details}</p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
