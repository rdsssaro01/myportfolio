import React from 'react';
import { Ship, Heart, Briefcase, Radio, Github, Box, ArrowUpRight } from 'lucide-react';

const Projects: React.FC = () => {
    const projects = [
        {
            title: 'VIR - Maritime Inspection',
            type: 'Enterprise Ecosystem',
            icon: Ship,
            description: 'High-performance distributed system with 100% data integrity for 2,000+ media assets in zero-connectivity maritime environments.',
            highlights: ['Offline-First Sync Engine', 'SQL Stored Procedure Tuning', 'Lazy-Loading Optimization'],
            tech: ['Node.js', 'TypeORM', 'Angular', 'Flutter', 'SQLite', 'BLoC'],
            color: 'from-blue-600 to-cyan-500'
        },
        {
            title: 'LIMS - Healthcare & Logistics',
            type: 'Workflow Automation',
            icon: Heart,
            description: '4-tier ecosystem reducing Lab Turnaround Time (TAT) by 15% via automated workflow transitions and real-time tracking.',
            highlights: ['ASP.NET Web API', 'EF Core Optimization', 'Firebase Cloud Messaging'],
            tech: ['.NET Core', 'SQL Server', 'MongoDB', 'Angular', 'Riverpod'],
            color: 'from-rose-600 to-orange-500'
        },
        {
            title: 'Prodigious - HRMS & Payroll',
            type: 'Automation Engine',
            icon: Briefcase,
            description: 'Precision payroll engine automating leave encashment and tax calculations, saving HR teams 30+ hours/week.',
            highlights: ['Dapper SQL Performance', 'GPS Geo-fencing', 'Dynamic PDF Generation'],
            tech: ['.NET Core', 'SQL Server', 'Flutter', 'GetX', 'Hive'],
            color: 'from-indigo-600 to-violet-500'
        },
        {
            title: 'ARDOM - Telecom Asset Inspection',
            type: 'Field Survey Solution',
            icon: Radio,
            description: '10x faster write speeds via ObjectBox indexing. Improved sync success rates by 45% using exponential backoff logic.',
            highlights: ['ObjectBox NoSQL', 'S3 Multi-threaded Streams', 'Conflict Resolution Strategy'],
            tech: ['Node.js', 'MySQL', 'React.js', 'Flutter', 'BLoC'],
            color: 'from-cyan-600 to-emerald-500'
        }
    ];

    return (
        <section id="projects" className="py-32 bg-surface-secondary/50 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col items-center text-center mb-24 space-y-4">
                    <h2 className="text-4xl sm:text-6xl font-black text-white">Impactful Projects</h2>
                    <div className="section-line"></div>
                    <p className="text-slate-400 max-w-2xl text-lg font-medium">
                        A selection of <span className="text-white">Enterprise Solutions</span> built with focus on speed, reliability, and UX.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {projects.map((proj, i) => (
                        <div key={i} className="group glass-card overflow-hidden flex flex-col sm:flex-row h-full">
                            {/* Left Side: Visual/Color Accent */}
                            <div className={`sm:w-2 bg-gradient-to-b ${proj.color} group-hover:w-4 transition-all duration-500`}></div>
                            
                            <div className="p-8 flex-1 flex flex-col">
                                <div className="flex justify-between items-start mb-6">
                                    <div className={`p-4 rounded-2xl bg-white/5 border border-white/10 group-hover:scale-110 transition-transform duration-500`}>
                                        <proj.icon className="w-8 h-8 text-white" />
                                    </div>
                                    <div className="flex gap-2">
                                        <button className="p-2 glass rounded-lg hover:text-accent-cyan transition-colors">
                                            <Github className="w-5 h-5" />
                                        </button>
                                        <button className="p-2 glass rounded-lg hover:text-accent-cyan transition-colors">
                                            <ArrowUpRight className="w-5 h-5" />
                                        </button>
                                    </div>
                                </div>

                                <div className="space-y-2 mb-6">
                                    <div className="text-xs font-black uppercase tracking-[0.2em] text-accent-cyan">{proj.type}</div>
                                    <h3 className="text-2xl font-black text-white group-hover:gradient-text transition-all duration-300">
                                        {proj.title}
                                    </h3>
                                    <p className="text-slate-400 text-sm leading-relaxed">
                                        {proj.description}
                                    </p>
                                </div>

                                <div className="space-y-4 mb-8">
                                    <div className="flex flex-wrap gap-2">
                                        {proj.highlights.map((h, idx) => (
                                            <div key={idx} className="flex items-center gap-1.5 px-3 py-1 glass rounded-full text-[10px] font-bold text-slate-300 uppercase tracking-wider">
                                                <Box className="w-3 h-3 text-accent-indigo" />
                                                {h}
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="mt-auto pt-6 border-t border-white/5 flex flex-wrap gap-2">
                                    {proj.tech.map((t, idx) => (
                                        <span key={idx} className="text-[11px] font-mono font-medium text-slate-500 uppercase group-hover:text-slate-300">
                                            #{t}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                
                <div className="mt-20 text-center">
                    <a href="https://github.com/rdsssaro01" target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 px-8 py-4 glass-strong rounded-2xl text-white font-bold hover:bg-white/5 transition-all group">
                        Explore Full Repository
                        <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Projects;
