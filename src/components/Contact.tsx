import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Github, Send, FileUser } from 'lucide-react';

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
            href: 'https://www.linkedin.com/in/saravananr007/',
            color: 'hover:text-blue-600',
            bgColor: 'hover:bg-blue-50',
        },
        {
            icon: Github,
            label: 'GitHub',
            href: 'https://github.com/rdsssaro01?tab=repositories',
            color: 'hover:text-slate-900',
            bgColor: 'hover:bg-slate-100',
        },


        {
            icon: FileUser,
            label: 'Resume',
            href: './Saravanan R Full Stack Developer.pdf',
            color: 'hover:text-slate-900',
            bgColor: 'hover:bg-slate-100',
        }
    ];

    return (
        <section id="contact" className="py-24 bg-slate-50 relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100/30 rounded-full blur-[120px] -z-10"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-100/30 rounded-full blur-[120px] -z-10"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center space-y-4 mb-20 animate-fade-in">
                    <h2 className="text-4xl sm:text-5xl font-bold text-slate-900">Get In Touch</h2>
                    <div className="w-24 h-1.5 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full"></div>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto font-medium">
                        I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                    </p>
                </div>

                <div className="max-w-5xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 px-max">
                        {contactInfo.map((item, index) => {
                            const Icon = item.icon;
                            const content = (
                                <div className="space-y-4 h-full">
                                    <div className={`p-4 bg-gradient-to-br ${item.color} rounded-2xl shadow-lg shadow-blue-500/20 mx-auto w-fit group-hover:scale-110 transition-transform duration-500`}>
                                        <Icon className="w-7 h-7 text-white" />
                                    </div>
                                    <div className="space-y-1">
                                        <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                                            {item.label}
                                        </h3>
                                        <p className="text-slate-900 font-bold text-sm sm:text-base break-words">{item.value}</p>
                                    </div>
                                </div>
                            );

                            return item.href ? (
                                <a
                                    key={index}
                                    href={item.href}
                                    className="group glass p-8 rounded-3xl animate-fade-in transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/10 border-white/40 shadow-blue-500/5 text-center flex flex-col justify-center"
                                    style={{ animationDelay: `${(index + 1) * 100}ms` }}
                                >
                                    {content}
                                </a>
                            ) : (
                                <div
                                    key={index}
                                    className="group glass p-8 rounded-3xl animate-fade-in transition-all duration-500 border-white/40 shadow-blue-500/5 text-center flex flex-col justify-center"
                                    style={{ animationDelay: `${(index + 1) * 100}ms` }}
                                >
                                    {content}
                                </div>
                            );
                        })}
                    </div>

                    <div className="glass rounded-[40px] shadow-2xl shadow-blue-500/5 p-8 md:p-16 border-white/60 relative overflow-hidden animate-fade-in delay-300">
                        {/* Inner decoration */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/5 rounded-full blur-3xl -z-10 -mr-32 -mt-32"></div>

                        <div className="text-center mb-12 relative z-10">
                            <h3 className="text-3xl font-bold text-slate-900 mb-4">Let's Connect</h3>
                            <p className="text-slate-600 font-medium max-w-lg mx-auto leading-relaxed">
                                Feel free to reach out through email or connect with me on social media. I usually respond within 24 hours.
                            </p>
                        </div>

                        <div className="flex flex-wrap justify-center gap-4 mb-12 relative z-10">
                            {socialLinks.map((social, index) => {
                                const Icon = social.icon;
                                return (
                                    <a
                                        key={index}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`flex items-center gap-3 px-8 py-4 bg-white/50 backdrop-blur-sm rounded-2xl shadow-sm border border-slate-200 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10 hover:-translate-y-1 hover:border-blue-400 group`}
                                    >
                                        <Icon className={`w-6 h-6 text-slate-400 group-hover:text-blue-600 transition-all`} />
                                        <span className="font-bold text-slate-700 group-hover:text-blue-600 transition-all">{social.label}</span>
                                    </a>
                                );
                            })}
                        </div>

                        <div className="text-center relative z-10">
                            <a
                                href="mailto:saravananrajdev@gmail.com"
                                className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold rounded-2xl shadow-xl shadow-blue-500/25 hover:shadow-2xl hover:shadow-blue-500/40 hover:-translate-y-1 transition-all duration-300 active:scale-95"
                            >
                                <Send className="w-5 h-5 animate-pulse" />
                                Send Message
                            </a>
                        </div>
                    </div>

                    <div className="mt-16 text-center animate-fade-in delay-500">
                        <div className="inline-flex flex-wrap justify-center gap-4 p-8 glass rounded-[32px] border-white/40 shadow-blue-500/5">
                            <div className="flex items-center gap-2 px-5 py-2.5 bg-green-50 text-green-700 rounded-2xl border border-green-100 font-bold text-sm">
                                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                                Open to Work
                            </div>
                            <div className="px-5 py-2.5 bg-blue-50 text-blue-700 rounded-2xl border border-blue-100 font-bold text-sm">
                                Remote Available
                            </div>
                            <div className="px-5 py-2.5 bg-indigo-50 text-indigo-700 rounded-2xl border border-indigo-100 font-bold text-sm">
                                Specialized in Flutter
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <footer className="mt-24 pb-12 pt-8 border-t border-slate-200 relative z-10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-slate-500 font-medium order-2 md:order-1">
                        © 2025 <span className="text-slate-900 font-bold">Saravanan R</span>. All Rights Reserved.
                    </p>
                    <div className="flex items-center gap-4 text-slate-400 order-1 md:order-2">
                        <span className="text-xs font-bold uppercase tracking-widest">Built with</span>
                        <div className="flex gap-4">
                            <span className="text-sm font-bold text-slate-600">React</span>
                            <span className="text-sm font-bold text-slate-600">TypeScript</span>
                            <span className="text-sm font-bold text-slate-600">Tailwind</span>
                        </div>
                    </div>
                </div>
            </footer>
        </section>
    );
};

export default Contact;
