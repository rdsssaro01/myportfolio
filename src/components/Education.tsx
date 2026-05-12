import React from 'react';
import { GraduationCap, Award, BookOpen, MapPin, Star } from 'lucide-react';

const Education: React.FC = () => {
    const education = [
        {
            degree: 'Bachelor of Computer Science And Engineering (B.E.CSE)',
            institution: 'Sudharsan Engineering College',
            location: 'Pudukkottai, Tamil Nadu',
            period: '2019 - 2023',
            grade: '8.0 CGPA',
            highlights: ['Data Structures', 'Database Management', 'Cloud Computing']
        }
    ];

    const certifications = [
        { title: 'React js & Node js', platform: 'Udemy' },
        { title: 'SQL Specialist', platform: 'Udemy' },
        { title: 'Flutter App Development', platform: 'Udemy' }
    ];

    return (
        <section id="education" className="py-32 bg-surface-primary dot-grid">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col items-center text-center mb-24 space-y-4">
                    <h2 className="text-4xl sm:text-6xl font-black text-white">Academic Roots</h2>
                    <div className="section-line"></div>
                    <p className="text-slate-400 max-w-2xl text-lg font-medium">
                        Foundational knowledge in <span className="text-white">Computer Science</span> and continuous professional <span className="text-white">Certifications</span>.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Education Card */}
                    <div className="lg:col-span-2 space-y-6">
                        {education.map((edu, i) => (
                            <div key={i} className="glass-card p-10 group relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-accent-indigo/5 blur-3xl rounded-full"></div>
                                
                                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
                                    <div className="flex items-center gap-6">
                                        <div className="p-5 glass rounded-[2rem] bg-accent-indigo/10 text-accent-indigo">
                                            <GraduationCap className="w-10 h-10" />
                                        </div>
                                        <div>
                                            <h3 className="text-2xl font-black text-white group-hover:gradient-text transition-all">{edu.degree}</h3>
                                            <p className="text-slate-400 font-bold flex items-center gap-2 mt-1">
                                                {edu.institution}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="px-5 py-2 glass rounded-2xl text-accent-cyan font-mono text-sm font-bold border border-accent-cyan/20">
                                        {edu.period}
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 border-t border-white/5">
                                    <div className="space-y-4">
                                        <div className="flex items-center gap-3 text-slate-300">
                                            <MapPin className="w-5 h-5 text-accent-indigo" />
                                            <span className="font-medium">{edu.location}</span>
                                        </div>
                                        <div className="flex items-center gap-3 text-slate-300">
                                            <Award className="w-5 h-5 text-accent-cyan" />
                                            <span className="font-bold tracking-wider">{edu.grade} Graduation Grade</span>
                                        </div>
                                    </div>
                                    <div className="flex flex-wrap gap-2">
                                        {edu.highlights.map((h, idx) => (
                                            <span key={idx} className="px-4 py-2 bg-white/5 rounded-xl text-xs font-mono text-slate-400 uppercase tracking-widest">
                                                {h}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Certifications Sidebar */}
                    <div className="space-y-6">
                        <div className="glass-card p-8 h-full flex flex-col">
                            <div className="flex items-center gap-3 mb-8">
                                <div className="p-3 glass rounded-xl text-accent-violet">
                                    <BookOpen className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-black text-white">Certifications</h3>
                            </div>
                            
                            <div className="space-y-4 flex-1">
                                {certifications.map((cert, i) => (
                                    <div key={i} className="p-5 glass-strong border border-white/5 rounded-2xl group hover:border-accent-violet/30 transition-all">
                                        <div className="flex items-start justify-between mb-2">
                                            <h4 className="font-bold text-slate-200 group-hover:text-white transition-colors">{cert.title}</h4>
                                            <Star className="w-4 h-4 text-accent-violet fill-accent-violet/20" />
                                        </div>
                                        <div className="text-xs font-mono text-slate-500 uppercase tracking-widest">{cert.platform} Verified</div>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-8 p-6 glass rounded-2xl bg-accent-indigo/5 border border-accent-indigo/10">
                                <p className="text-xs text-slate-400 leading-relaxed italic">
                                    "Committed to lifelong learning and staying at the forefront of the Full-Stack and AI revolution."
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Education;
