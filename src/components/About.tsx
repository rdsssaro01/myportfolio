import React from 'react';
import { 
    Layers, Smartphone, Layout, Server, 
    Database, Cloud, Shield, Wrench, Brain 
} from 'lucide-react';

const About: React.FC = () => {
    const skillCategories = [
        {
            title: 'Architecture',
            icon: Layers,
            skills: ['Microservices', 'Clean Architecture', 'SOLID', 'MVVM', 'Repository Pattern', 'API Gateway'],
            color: 'text-accent-indigo'
        },
        {
            title: 'Mobile & Desktop',
            icon: Smartphone,
            skills: ['Flutter', 'Android Studio', 'Xcode', 'App Store Deployment'],
            color: 'text-accent-cyan'
        },
        {
            title: 'Frontend',
            icon: Layout,
            skills: ['React.js', 'Angular', 'TypeScript', 'Tailwind CSS', 'Figma'],
            color: 'text-accent-violet'
        },
        {
            title: 'Backend',
            icon: Server,
            skills: ['ASP.NET Core', 'Node.js', 'NestJS', 'Express.js', 'REST APIs'],
            color: 'text-accent-indigo'
        },
        {
            title: 'State Management',
            icon: Shield,
            skills: ['BLoC', 'Signals', 'GetX', 'Provider', 'Riverpod', 'Redux', 'RxJS'],
            color: 'text-accent-cyan'
        },
        {
            title: 'Databases',
            icon: Database,
            skills: ['SQL Server', 'MySQL', 'MongoDB', 'Redis', 'Dapper', 'EF Core'],
            color: 'text-accent-violet'
        },
        {
            title: 'Cloud & DevOps',
            icon: Cloud,
            skills: ['Azure DevOps', 'AWS EC2', 'Docker', 'CI/CD', 'GitHub Actions'],
            color: 'text-accent-indigo'
        },
        {
            title: 'AI & Agentic',
            icon: Brain,
            skills: ['Antigravity', 'Gemini', 'Prompt Engineering', 'GitHub Copilot', 'ChatGPT'],
            color: 'text-accent-cyan'
        },
        {
            title: 'Tools',
            icon: Wrench,
            skills: ['Git', 'Agile/Scrum', 'Postman', 'Swagger', 'Visual Studio'],
            color: 'text-accent-violet'
        }
    ];

    return (
        <section id="about" className="py-32 relative overflow-hidden bg-surface-secondary/30">
            {/* Ambient Background Lights */}
            <div className="absolute top-1/4 -right-64 w-[500px] h-[500px] bg-accent-indigo/5 rounded-full blur-[120px]"></div>
            <div className="absolute bottom-1/4 -left-64 w-[500px] h-[500px] bg-accent-cyan/5 rounded-full blur-[120px]"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex flex-col items-center text-center mb-24 space-y-4">
                    <h2 className="text-4xl sm:text-6xl font-black text-white">Technical Arsenal</h2>
                    <div className="section-line"></div>
                    <p className="text-slate-400 max-w-2xl text-lg font-medium">
                        Specializing in <span className="text-white">Full-Stack Ecosystems</span> and <span className="text-white">High-Performance Architectures</span>.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {skillCategories.map((cat, i) => (
                        <div 
                            key={i} 
                            className="glass-card p-8 group relative overflow-hidden"
                        >
                            {/* Card Background Glow */}
                            <div className="absolute -right-4 -top-4 w-24 h-24 bg-white/5 blur-2xl rounded-full group-hover:bg-accent-indigo/10 transition-all duration-500"></div>
                            
                            <div className="flex items-center gap-4 mb-6">
                                <div className={`p-3 glass rounded-xl ${cat.color} group-hover:scale-110 transition-transform`}>
                                    <cat.icon className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-bold text-white tracking-tight">{cat.title}</h3>
                            </div>

                            <div className="flex flex-wrap gap-2">
                                {cat.skills.map((skill, idx) => (
                                    <span 
                                        key={idx}
                                        className="px-3 py-1 text-xs font-mono font-medium text-slate-400 bg-white/5 border border-white/5 rounded-full group-hover:border-white/10 group-hover:text-slate-200 transition-colors"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Core Stats / Summary */}
                <div className="mt-24 grid grid-cols-2 lg:grid-cols-4 gap-6">
                    {[
                        { label: 'Latency Reduced', value: '35%', sub: 'SQL Optimization' },
                        { label: 'Uptime', value: '99.9%', sub: 'Cloud Deployments' },
                        { label: 'Data Integrity', value: '100%', sub: 'Offline-First Sync' },
                        { label: 'System Scalability', value: '2k+', sub: 'Active Records' },
                    ].map((stat, i) => (
                        <div key={i} className="p-8 glass-strong rounded-3xl text-center hover:bg-white/[0.02] transition-colors border border-white/5">
                            <div className="text-4xl font-black gradient-text-cyan mb-2">{stat.value}</div>
                            <div className="text-sm font-bold text-slate-200 uppercase tracking-widest mb-1">{stat.label}</div>
                            <div className="text-xs font-medium text-slate-500 font-mono">{stat.sub}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default About;
