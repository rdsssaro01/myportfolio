import React from 'react';
import { Code, Server, Database, GitBranch, Layers, Cloud, Brain } from 'lucide-react';

const About: React.FC = () => {
    const skillCategories = [
        {
            title: 'Frontend Development',
            icon: Code,
            color: 'from-blue-500 to-cyan-500',
            skills: ['Flutter', 'React.js', 'Angular', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Bootstrap', 'Next.js'],
        },
        {
            title: 'Backend Development',
            icon: Server,
            color: 'from-cyan-500 to-blue-500',
            skills: ['ASP.NET Web API', 'Node.js', 'Nest.js', 'Express.js', 'RESTful APIs'],
        },
        {
            title: 'Cloud & Infrastructure',
            icon: Cloud,
            color: 'from-blue-600 to-cyan-600',
            skills: ['Git', 'GitHub', 'Azure Deveops', 'Aws Ec2', 'vercel', 'netlify', 'docker', 'render', 'firebase'],
        },
        {
            title: 'Database',
            icon: Database,
            color: 'from-cyan-600 to-blue-600',
            skills: ['MySQL', 'SQL Server', 'MongoDB', 'SQLite', 'Entity Framework', 'Mongoose', 'redis'],
        },
        {
            title: 'Tools',
            icon: GitBranch,
            color: 'from-blue-500 to-cyan-500',
            skills: ['Postman', 'Swagger', 'Figma', 'vs code', 'Android Studio', 'Xcode', 'IIs Manager'],
        },
        {
            title: 'Integrations',
            icon: Layers,
            color: 'from-cyan-500 to-blue-500',
            skills: ['Firebase', 'Google Maps API', 'Razorpay', 'OAuth2', 'JWT', 'Microsoft Auth'],
        },
        {
            title: 'AI Tools',
            icon: Brain,
            color: 'from-cyan-500 to-blue-500',
            skills: ['Gemini', 'ChatGPT', 'Copilot', 'Antigravity', 'Claude', 'DeepSeek', 'Github Copilot', 'Stich', 'Cursor', 'Perplexity', 'Google AI Studio'],
        },
    ];

    return (
        <section id="about" className="py-24 bg-slate-50 relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-1/4 -right-20 w-80 h-80 bg-blue-100/50 rounded-full blur-[100px] -z-10"></div>
            <div className="absolute bottom-1/4 -left-20 w-80 h-80 bg-cyan-100/50 rounded-full blur-[100px] -z-10"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center space-y-4 mb-20 animate-fade-in">
                    <h2 className="text-4xl sm:text-5xl font-bold text-slate-900">About Me</h2>
                    <div className="w-24 h-1.5 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full"></div>
                </div>

                <div className="max-w-4xl mx-auto mb-20 animate-fade-in delay-100">
                    <div className="glass p-8 sm:p-10 rounded-3xl text-center shadow-blue-500/5">
                        <p className="text-lg sm:text-xl text-slate-600 leading-relaxed font-medium">
                            As a <span className="text-blue-600"> Cross Platform Full Stack Developer</span> with around 3 years of hands-on experience, I specialize in
                            building cross-platform applications for Android, iOS, Desktop,Mac and Web. I focus on creating
                            scalable, high-performance solutions with exceptional user experiences.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {skillCategories.map((category, index) => {
                        const Icon = category.icon;
                        return (
                            <div
                                key={index}
                                className={`group glass p-8 rounded-3xl animate-fade-in transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/10 border-white/40 shadow-blue-500/5`}
                                style={{ animationDelay: `${(index + 2) * 100}ms` }}
                            >
                                <div className="flex items-center gap-4 mb-6">
                                    <div className={`p-4 bg-gradient-to-br ${category.color} rounded-2xl shadow-lg shadow-blue-500/20 group-hover:scale-110 transition-transform duration-500`}>
                                        <Icon className="w-6 h-6 text-white" />
                                    </div>
                                    <h3 className="text-xl font-bold text-slate-900">{category.title}</h3>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {category.skills.map((skill, skillIndex) => (
                                        <span
                                            key={skillIndex}
                                            className="px-3 py-1.5 bg-white/50 backdrop-blur-sm text-slate-700 text-sm font-semibold rounded-xl border border-slate-200 hover:border-blue-400 hover:text-blue-600 hover:bg-white transition-all duration-300"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        );
                    })}
                </div>

                <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 animate-fade-in delay-300">
                    {[
                        { label: 'Experience', value: '3 Years' },
                        { label: 'Projects', value: '6+' },
                        { label: 'Technologies', value: '10+' },
                        { label: 'Dedication', value: '100%' },
                    ].map((stat, i) => (
                        <div key={i} className="text-center p-6 rounded-2xl glass shadow-blue-500/5 transition-transform hover:scale-105 duration-300">
                            <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-2">
                                {stat.value}
                            </div>
                            <div className="text-slate-500 font-semibold text-sm uppercase tracking-wider">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default About;
