import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react';

const Experience: React.FC = () => {
    const experience = {
        company: 'ClazyWorks Pvt. Ltd.',
        role: 'Software Engineer',
        period: '2023 - Current',
        location: 'Chennai, TamilNadu',
        responsibilities: [
            'Developed and maintained cross-platform applications using Flutter and React.js for Android, iOS, Desktop, and Web',
            'Integrated Razorpay payment gateway, Firebase services, and Google Maps API across multiple applications',
            'Built and integrated RESTful APIs using Node.js and .NET Web API for secure communication',
            'Designed responsive web applications using React.js, improving accessibility across devices',
            'Implemented database solutions using Entity Framework, Mongoose, SQLite, and ObjectBox',
            'Developed healthcare solutions with secure authentication and appointment management systems',
            'Worked with OAuth2, JWT, and Microsoft Authentication for robust security flows',
            'Deployed frontend and backend APIs using IIS Manager, ensuring reliable hosting, performance optimization, and seamless integration',
            'Collaborated in Agile environment, delivering high-quality features with cross-functional teams',
        ],
    };

    return (
        <section id="experience" className="py-24 bg-slate-50 relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-1/2 -left-40 w-96 h-96 bg-blue-100/50 rounded-full blur-[120px] -z-10"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center space-y-4 mb-20 animate-fade-in">
                    <h2 className="text-4xl sm:text-5xl font-bold text-slate-900">Work Experience</h2>
                    <div className="w-24 h-1.5 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full"></div>
                </div>

                <div className="max-w-4xl mx-auto">
                    <div className="relative">
                        {/* More subtle timeline line */}
                        <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-600/20 via-blue-600/10 to-transparent hidden md:block rounded-full"></div>

                        <div className="relative animate-fade-in delay-100">
                            <div className="md:ml-24 glass rounded-3xl transition-all duration-500 border-white/40 shadow-blue-500/5 overflow-hidden hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-1">
                                <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-blue-600 to-indigo-600"></div>

                                <div className="p-8 sm:p-10">
                                    <div className="absolute -left-16 top-8 hidden md:block">
                                        <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl shadow-xl shadow-blue-500/30 flex items-center justify-center animate-float">
                                            <Briefcase className="w-8 h-8 text-white" />
                                        </div>
                                    </div>

                                    <div className="space-y-6">
                                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                                            <div>
                                                <h3 className="text-2xl sm:text-3xl font-bold text-slate-900">{experience.role}</h3>
                                                <h4 className="text-xl font-bold text-blue-600">{experience.company}</h4>
                                            </div>
                                            <div className="flex flex-wrap gap-3">
                                                <div className="flex items-center gap-2 px-4 py-1.5 bg-blue-50 text-blue-700 rounded-xl text-sm font-bold border border-blue-100 italic">
                                                    <Calendar className="w-4 h-4" />
                                                    <span>{experience.period}</span>
                                                </div>
                                                <div className="flex items-center gap-2 px-4 py-1.5 bg-indigo-50 text-indigo-700 rounded-xl text-sm font-bold border border-indigo-100">
                                                    <MapPin className="w-4 h-4" />
                                                    <span>{experience.location}</span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="pt-2">
                                            <h5 className="text-lg font-bold text-slate-900 mb-6 uppercase tracking-wider h-max">Key Responsibilities</h5>
                                            <ul className="grid grid-cols-1 gap-4">
                                                {experience.responsibilities.map((item, index) => (
                                                    <li key={index} className="flex gap-4 group items-start">
                                                        <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-blue-600 transition-colors">
                                                            <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 group-hover:text-white transition-colors" />
                                                        </div>
                                                        <span className="text-slate-600 leading-relaxed font-medium">{item}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        <div className="pt-6 border-t border-slate-100">
                                            <h5 className="text-xs font-bold text-slate-400 mb-4 uppercase tracking-widest">Technologies Used</h5>
                                            <div className="flex flex-wrap gap-2">
                                                {['Flutter', 'React.js', 'Node.js', '.NET', 'Firebase', 'Google Maps', 'Razorpay', 'OAuth2'].map(
                                                    (tech, index) => (
                                                        <span
                                                            key={index}
                                                            className="px-4 py-2 bg-white border border-slate-200 text-slate-600 text-sm font-bold rounded-xl hover:border-blue-400 hover:text-blue-600 hover:shadow-md transition-all duration-300"
                                                        >
                                                            {tech}
                                                        </span>
                                                    )
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
