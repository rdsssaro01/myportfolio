import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Github, Send } from 'lucide-react';

const Contact: React.FC = () => {
    const contactInfo = [
        {
            icon: Mail,
            label: 'Email',
            value: 'saravananrajdev@gmail.com',
            href: 'mailto:saravananrajdev@gmail.com',
            color: 'from-blue-600 to-cyan-600',
        },
        {
            icon: Phone,
            label: 'Phone',
            value: '+91 7373991335',
            href: 'tel:+917373991335',
            color: 'from-cyan-600 to-blue-600',
        },
        {
            icon: MapPin,
            label: 'Location',
            value: 'Chennai, Tamil Nadu',
            href: null,
            color: 'from-blue-600 to-cyan-600',
        },
    ];

    const socialLinks = [
        {
            icon: Linkedin,
            label: 'LinkedIn',
            href: 'https://www.linkedin.com/in/saravanan-r-1a1a1a1a1/',
            color: 'hover:text-blue-600',
            bgColor: 'hover:bg-blue-50',
        },
        {
            icon: Github,
            label: 'GitHub',
            href: 'https://github.com/saravananraj',
            color: 'hover:text-slate-900',
            bgColor: 'hover:bg-slate-100',
        },
    ];

    return (
        <section id="contact" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center space-y-4 mb-16">
                    <h2 className="text-4xl sm:text-5xl font-bold text-slate-900">Get In Touch</h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto rounded-full"></div>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                        I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                    </p>
                </div>

                <div className="max-w-4xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                        {contactInfo.map((item, index) => {
                            const Icon = item.icon;
                            const content = (
                                <>
                                    <div className={`p-4 bg-gradient-to-br ${item.color} rounded-xl shadow-lg mb-4 mx-auto w-fit`}>
                                        <Icon className="w-7 h-7 text-white" />
                                    </div>
                                    <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wide mb-2">
                                        {item.label}
                                    </h3>
                                    <p className="text-slate-900 font-medium">{item.value}</p>
                                </>
                            );

                            return item.href ? (
                                <a
                                    key={index}
                                    href={item.href}
                                    className="bg-gradient-to-br from-slate-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-100 text-center hover:-translate-y-1"
                                >
                                    {content}
                                </a>
                            ) : (
                                <div
                                    key={index}
                                    className="bg-gradient-to-br from-slate-50 to-white p-8 rounded-2xl shadow-lg border border-slate-100 text-center"
                                >
                                    {content}
                                </div>
                            );
                        })}
                    </div>

                    <div className="bg-gradient-to-br from-blue-50 via-white to-cyan-50 rounded-2xl shadow-xl p-8 md:p-12 border border-blue-100">
                        <div className="text-center mb-8">
                            <h3 className="text-2xl font-bold text-slate-900 mb-3">Let's Connect</h3>
                            <p className="text-slate-600">
                                Feel free to reach out through email or connect with me on social media
                            </p>
                        </div>

                        <div className="flex flex-wrap justify-center gap-4 mb-8">
                            {socialLinks.map((social, index) => {
                                const Icon = social.icon;
                                return (
                                    <a
                                        key={index}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`flex items-center gap-3 px-6 py-3 bg-white rounded-xl shadow-md ${social.bgColor} transition-all duration-300 hover:shadow-lg hover:scale-105 border border-slate-200`}
                                    >
                                        <Icon className={`w-5 h-5 ${social.color} transition-colors`} />
                                        <span className="font-medium text-slate-700">{social.label}</span>
                                    </a>
                                );
                            })}
                        </div>

                        <div className="text-center">
                            <a
                                href="mailto:saravananrajdev@gmail.com"
                                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
                            >
                                <Send className="w-5 h-5" />
                                Send Email
                            </a>
                        </div>
                    </div>

                    <div className="mt-12 text-center">
                        <div className="inline-block p-8 bg-gradient-to-r from-slate-50 to-white rounded-2xl shadow-lg border border-slate-100">
                            <p className="text-slate-600 mb-4">
                                Available for freelance opportunities and full-time positions
                            </p>
                            <div className="flex flex-wrap justify-center gap-3">
                                <span className="px-4 py-2 bg-green-50 text-green-700 rounded-lg border border-green-200 font-medium">
                                    Open to Work
                                </span>
                                <span className="px-4 py-2 bg-blue-50 text-blue-700 rounded-lg border border-blue-200 font-medium">
                                    Remote Available
                                </span>
                                <span className="px-4 py-2 bg-cyan-50 text-cyan-700 rounded-lg border border-cyan-200 font-medium">
                                    Quick Responder
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <footer className="mt-20 pt-8 border-t border-slate-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <p className="text-center text-slate-600">
                        © 2025 Saravanan R. Built with React, TypeScript, and Tailwind CSS
                    </p>
                </div>
            </footer>
        </section>
    );
};

export default Contact;
