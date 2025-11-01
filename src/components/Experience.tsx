import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react';

const Experience: React.FC = () => {
    const experience = {
        company: 'ClazyWorks Pvt. Ltd.',
        role: 'Software Engineer',
        period: '2025 - Current',
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
        <section id="experience" className="py-20 bg-gradient-to-br from-slate-50 to-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center space-y-4 mb-16">
                    <h2 className="text-4xl sm:text-5xl font-bold text-slate-900">Work Experience</h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto rounded-full"></div>
                </div>

                <div className="max-w-4xl mx-auto">
                    <div className="relative">
                        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 to-cyan-600 hidden md:block"></div>

                        <div className="relative">
                            <div className="md:ml-20 bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-slate-100 overflow-hidden">
                                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-600 to-cyan-600"></div>

                                <div className="p-8">
                                    <div className="absolute -left-12 top-8 hidden md:block">
                                        <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-xl shadow-lg flex items-center justify-center">
                                            <Briefcase className="w-8 h-8 text-white" />
                                        </div>
                                    </div>

                                    <div className="space-y-4">
                                        <div>
                                            <h3 className="text-2xl font-bold text-slate-900 mb-2">{experience.role}</h3>
                                            <h4 className="text-xl font-semibold text-blue-600 mb-3">{experience.company}</h4>
                                        </div>

                                        <div className="flex flex-wrap gap-4 text-sm">
                                            <div className="flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-lg">
                                                <Calendar className="w-4 h-4 text-blue-600" />
                                                <span className="text-slate-700 font-medium">{experience.period}</span>
                                            </div>
                                            <div className="flex items-center gap-2 px-4 py-2 bg-cyan-50 rounded-lg">
                                                <MapPin className="w-4 h-4 text-cyan-600" />
                                                <span className="text-slate-700 font-medium">{experience.location}</span>
                                            </div>
                                        </div>

                                        <div className="pt-4">
                                            <h5 className="text-lg font-semibold text-slate-900 mb-4">Key Responsibilities & Achievements</h5>
                                            <ul className="space-y-3">
                                                {experience.responsibilities.map((item, index) => (
                                                    <li key={index} className="flex gap-3 group">
                                                        <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                                                        <span className="text-slate-600 leading-relaxed">{item}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        <div className="pt-6">
                                            <div className="flex flex-wrap gap-2">
                                                {['Flutter', 'React.js', 'Node.js', '.NET', 'Firebase', 'Google Maps', 'Razorpay', 'OAuth2'].map(
                                                    (tech, index) => (
                                                        <span
                                                            key={index}
                                                            className="px-3 py-1.5 bg-gradient-to-r from-blue-50 to-cyan-50 text-blue-700 text-sm font-medium rounded-lg border border-blue-200 hover:border-blue-400 hover:shadow-md transition-all"
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
