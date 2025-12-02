import React from 'react';
import { Code, Server, Smartphone, Database, GitBranch, Layers } from 'lucide-react';

const About: React.FC = () => {
    const skillCategories = [
        {
            title: 'Frontend Development',
            icon: Code,
            color: 'from-blue-500 to-cyan-500',
            skills: ['Flutter', 'React.js', 'Angular', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Bootstrap','Next.j'],
        },
        {
            title: 'Backend Development',
            icon: Server,
            color: 'from-cyan-500 to-blue-500',
            skills: ['Node.js', 'Nest.js', 'Express.js', 'ASP.NET Web API', 'RESTful APIs'],
        },
        {
            title: 'Mobile & Desktop',
            icon: Smartphone,
            color: 'from-blue-600 to-cyan-600',
            skills: ['Flutter (Android/iOS)', 'Flutter Desktop', 'GetX', 'Riverpod', 'Redux', 'Riverpod', 'Bloc'],
        },
        {
            title: 'Database',
            icon: Database,
            color: 'from-cyan-600 to-blue-600',
            skills: ['MySQL', 'SQL Server', 'MongoDB', 'SQLite', 'Entity Framework', 'Mongoose'],
        },
        {
            title: 'Tools & DevOps',
            icon: GitBranch,
            color: 'from-blue-500 to-cyan-500',
            skills: ['Git', 'GitHub', 'Azure', 'Docker', 'CI/CD', 'Postman', 'Swagger', 'IIs Manager','Figma'],
        },
        {
            title: 'Integrations',
            icon: Layers,
            color: 'from-cyan-500 to-blue-500',
            skills: ['Firebase', 'Google Maps API', 'Razorpay', 'OAuth2', 'JWT', 'Microsoft Auth'],
        },
    ];

    return (
        <section id="about" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center space-y-4 mb-16">
                    <h2 className="text-4xl sm:text-5xl font-bold text-slate-900">About Me</h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto rounded-full"></div>
                </div>

                <div className="max-w-4xl mx-auto mb-16">
                    <p className="text-lg text-slate-600 leading-relaxed text-center">
                        As a Flutter Full Stack Developer with around 3 years of hands-on experience, I specialize in
                        building cross-platform applications for Android, iOS, Desktop, and Web. I focus on creating
                        scalable, high-performance solutions with exceptional user experiences. My expertise spans
                        from mobile development to backend API creation, enabling me to deliver complete end-to-end
                        solutions.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {skillCategories.map((category, index) => {
                        const Icon = category.icon;
                        return (
                            <div
                                key={index}
                                className="group bg-gradient-to-br from-slate-50 to-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-slate-100"
                            >
                                <div className="flex items-center gap-3 mb-4">
                                    <div className={`p-3 bg-gradient-to-br ${category.color} rounded-xl shadow-lg`}>
                                        <Icon className="w-6 h-6 text-white" />
                                    </div>
                                    <h3 className="text-xl font-bold text-slate-900">{category.title}</h3>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {category.skills.map((skill, skillIndex) => (
                                        <span
                                            key={skillIndex}
                                            className="px-3 py-1.5 bg-white text-slate-700 text-sm font-medium rounded-lg border border-slate-200 hover:border-blue-300 hover:bg-blue-50 transition-colors"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        );
                    })}
                </div>

                <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
                    <div className="text-center">
                        <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-2">
                            2+ Years
                        </div>
                        <div className="text-slate-600 font-medium">Experience</div>
                    </div>
                    <div className="text-center">
                        <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-2">
                            6+
                        </div>
                        <div className="text-slate-600 font-medium">Projects</div>
                    </div>
                    <div className="text-center">
                        <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-2">
                            10+
                        </div>
                        <div className="text-slate-600 font-medium">Technologies</div>
                    </div>
                    <div className="text-center">
                        <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-2">
                            100%
                        </div>
                        <div className="text-slate-600 font-medium">Dedication</div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
