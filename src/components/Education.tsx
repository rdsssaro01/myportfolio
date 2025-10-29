import React from 'react';
import { GraduationCap, Award, BookOpen, MapPin, Calendar } from 'lucide-react';

const Education: React.FC = () => {
    const education = [
        {
            degree: 'Bachelor of Engineering',
            field: 'Computer Science and Engineering',
            institution: 'Sudharsan Engineering College',
            location: 'Sathiyamangalam, Pudukkottai, Trichy, Tamil Nadu',
            period: '2019 - 2023',
            grade: '8.0 CGPA',
            icon: GraduationCap,
        },
        {
            degree: 'Higher Secondary Certificate (HSC)',
            field: 'Science',
            institution: 'Govt Higher Secondary School',
            location: 'Pudukkottai, Tamil Nadu',
            period: '2018 - 2019',
            grade: '73%',
            icon: BookOpen,
        },
    ];

    const certifications = [
        {
            title: 'Flutter Development',
            platform: 'Udemy',
            description: 'Comprehensive Flutter app development course',
        },
        {
            title: 'React.js',
            platform: 'Udemy',
            description: 'Modern React.js web development',
        },
        {
            title: 'Node.js',
            platform: 'Udemy',
            description: 'Backend development with Node.js',
        },
        {
            title: 'SQL',
            platform: 'Udemy',
            description: 'Database design and management',
        },
    ];

    const interests = [
        'Web Development',
        'App Development',
        'Full Stack Development',
        'Machine Learning',
        'Agile Methodology',
    ];

    return (
        <section id="education" className="py-20 bg-gradient-to-br from-slate-50 to-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center space-y-4 mb-16">
                    <h2 className="text-4xl sm:text-5xl font-bold text-slate-900">Education & Certifications</h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                    {education.map((edu, index) => {
                        const Icon = edu.icon;
                        return (
                            <div
                                key={index}
                                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-100 overflow-hidden hover:-translate-y-1"
                            >
                                <div className="h-2 bg-gradient-to-r from-blue-600 to-cyan-600"></div>
                                <div className="p-8">
                                    <div className="flex items-start gap-4 mb-4">
                                        <div className="p-4 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-xl shadow-lg">
                                            <Icon className="w-8 h-8 text-white" />
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-xl font-bold text-slate-900 mb-1">{edu.degree}</h3>
                                            <p className="text-blue-600 font-semibold">{edu.field}</p>
                                        </div>
                                    </div>

                                    <div className="space-y-3">
                                        <div className="flex items-start gap-2">
                                            <GraduationCap className="w-5 h-5 text-cyan-600 flex-shrink-0 mt-0.5" />
                                            <span className="text-slate-700 font-medium">{edu.institution}</span>
                                        </div>
                                        <div className="flex items-start gap-2">
                                            <MapPin className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                                            <span className="text-slate-600">{edu.location}</span>
                                        </div>
                                        <div className="flex items-center gap-6">
                                            <div className="flex items-center gap-2">
                                                <Calendar className="w-5 h-5 text-cyan-600" />
                                                <span className="text-slate-600">{edu.period}</span>
                                            </div>
                                            <div className="px-4 py-2 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg border border-blue-200">
                                                <span className="text-blue-700 font-semibold">{edu.grade}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div className="bg-white rounded-2xl shadow-lg p-8 border border-slate-100">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="p-3 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-xl shadow-lg">
                                <Award className="w-6 h-6 text-white" />
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900">Certifications</h3>
                        </div>

                        <div className="space-y-4">
                            {certifications.map((cert, index) => (
                                <div
                                    key={index}
                                    className="p-4 bg-gradient-to-r from-slate-50 to-white rounded-xl border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all"
                                >
                                    <div className="flex items-start justify-between mb-2">
                                        <h4 className="font-semibold text-slate-900">{cert.title}</h4>
                                        <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded-full">
                                            {cert.platform}
                                        </span>
                                    </div>
                                    <p className="text-sm text-slate-600">{cert.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="bg-white rounded-2xl shadow-lg p-8 border border-slate-100">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="p-3 bg-gradient-to-br from-cyan-600 to-blue-600 rounded-xl shadow-lg">
                                <BookOpen className="w-6 h-6 text-white" />
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900">Areas of Interest</h3>
                        </div>

                        <div className="flex flex-wrap gap-3">
                            {interests.map((interest, index) => (
                                <div
                                    key={index}
                                    className="px-5 py-3 bg-gradient-to-r from-blue-50 to-cyan-50 text-slate-700 font-medium rounded-xl border border-blue-200 hover:border-blue-400 hover:shadow-md transition-all"
                                >
                                    {interest}
                                </div>
                            ))}
                        </div>

                        <div className="mt-8 p-6 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl border border-blue-200">
                            <h4 className="font-semibold text-slate-900 mb-2">Continuous Learning</h4>
                            <p className="text-slate-600 text-sm leading-relaxed">
                                Passionate about staying current with the latest technologies and best practices in
                                software development. Regularly exploring new frameworks, tools, and methodologies to
                                deliver cutting-edge solutions.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Education;
