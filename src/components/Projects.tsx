import React from 'react';
import { Ship, Car, Heart, Radio, Briefcase, Calendar } from 'lucide-react';

const Projects: React.FC = () => {
    const projects = [
        {
            title: 'VIR - Ship Inspection App',
            period: 'Apr 2025 - Present',
            icon: Ship,
            color: 'from-blue-600 to-cyan-600',
            description: 'Cross-platform app for digitizing ship inspections with offline capabilities',
            highlights: [
                'Offline inspections with SQLite database',
                'Photo and data capture system',
                'Automated checklist management',
                'Cloud synchronization',
            ],
            tech: ['Flutter', 'GetX', 'SQLite', 'Node.js', 'sql Server', 'StoreProcedures'],
            platforms: ['Android', 'iOS', 'Desktop'],
        },
        {
            title: 'PayPark - Smart Parking Ecosystem',
            period: 'Feb 2025 - Mar 2025',
            icon: Car,
            color: 'from-cyan-600 to-blue-600',
            description: 'Complete parking management system with three specialized applications',
            highlights: [
                'User, Owner, and Admin applications',
                'Parking slot reservations',
                'Razorpay payment integration',
                'Google Maps API integration',
            ],
            tech: ['Flutter', 'Dart', 'Figma', 'Razorpay', 'Google Maps API', 'Provider'],
            platforms: ['Android', 'iOS'],
        },
        {
            title: 'Healthcare Logistics Suite',
            period: 'Apr 2024 - Jan 2025',
            icon: Heart,
            color: 'from-blue-600 to-cyan-600',
            description: 'Comprehensive healthcare ecosystem for doctors, patients, and logistics',
            highlights: [
                'Doctor booking and appointment management',
                'Report validation and downloads',
                'Home sample collection',
                'Real-time carrier tracking',
                'Secure payment processing',
            ],
            tech: ['Flutter', 'Figma', 'GetX', 'Riverpod', '.NET Web API', 'Razorpay', 'Sql Server', 'Google Maps API', 'StoreProcedures'],
            platforms: ['Android', 'iOS'],
        },
        {
            title: 'ARDOM - Telecom Site Inspection',
            period: 'Nov 2024 - Jan 2025',
            icon: Radio,
            color: 'from-cyan-600 to-blue-600',
            description: 'Offline-first inspection app for telecom infrastructure',
            highlights: [
                'Asset condition verification',
                'Photo capture and documentation',
                'Survey workflow automation',
                'REST API with Azure deployment',
                'ObjectBox local database',
            ],
            tech: ['Flutter', 'BLoc(Cubit)', 'ObjectBox', 'Node.js', 'MySQL', 'Figma', 'RESTful APIs', 'Google Maps API'],
            platforms: ['Android', 'iOS'],
        },
        {
            title: 'Prodigious - HRMS & Payroll',
            period: 'Oct 2023 - Mar 2024',
            icon: Briefcase,
            color: 'from-blue-600 to-cyan-600',
            description: 'Complete HR management system with payroll integration',
            highlights: [
                'Employee management system',
                'Attendance tracking',
                'Payroll processing',
                'Reporting and analytics',
                'Google Maps integration',
            ],
            tech: ['Flutter', 'GetX', 'Provider', 'Hive', 'Google Maps API'],
            platforms: ['Android', 'iOS'],
        },
    ];

    return (
        <section id="projects" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center space-y-4 mb-16">
                    <h2 className="text-4xl sm:text-5xl font-bold text-slate-900">Featured Projects</h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto rounded-full"></div>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                        A showcase of my recent work in mobile, web, and desktop application development
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {projects.map((project, index) => {
                        const Icon = project.icon;
                        return (
                            <div
                                key={index}
                                className="group bg-gradient-to-br from-slate-50 to-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-100 overflow-hidden hover:-translate-y-1"
                            >
                                <div className={`h-2 bg-gradient-to-r ${project.color}`}></div>

                                <div className="p-8">
                                    <div className="flex items-start justify-between mb-4">
                                        <div className={`p-4 bg-gradient-to-br ${project.color} rounded-xl shadow-lg group-hover:scale-110 transition-transform`}>
                                            <Icon className="w-8 h-8 text-white" />
                                        </div>
                                        <div className="flex items-center gap-2 text-sm text-slate-500">
                                            <Calendar className="w-4 h-4" />
                                            <span>{project.period}</span>
                                        </div>
                                    </div>

                                    <h3 className="text-2xl font-bold text-slate-900 mb-2">{project.title}</h3>
                                    <p className="text-slate-600 mb-4 leading-relaxed">{project.description}</p>

                                    <div className="mb-4">
                                        <h4 className="text-sm font-semibold text-slate-700 mb-2">Key Features:</h4>
                                        <ul className="space-y-1.5">
                                            {project.highlights.map((highlight, idx) => (
                                                <li key={idx} className="text-sm text-slate-600 flex items-start gap-2">
                                                    <span className="text-blue-600 mt-1">•</span>
                                                    <span>{highlight}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="mb-4">
                                        <h4 className="text-sm font-semibold text-slate-700 mb-2">Platforms:</h4>
                                        <div className="flex flex-wrap gap-2">
                                            {project.platforms.map((platform, idx) => (
                                                <span
                                                    key={idx}
                                                    className="px-3 py-1 bg-blue-50 text-blue-700 text-xs font-medium rounded-full border border-blue-200"
                                                >
                                                    {platform}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    <div>
                                        <h4 className="text-sm font-semibold text-slate-700 mb-2">Technologies:</h4>
                                        <div className="flex flex-wrap gap-2">
                                            {project.tech.map((tech, idx) => (
                                                <span
                                                    key={idx}
                                                    className="px-3 py-1 bg-slate-100 text-slate-700 text-xs font-medium rounded-lg hover:bg-slate-200 transition-colors"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Projects;
