import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Github, Send, Download, Heart } from 'lucide-react';

const Contact: React.FC = () => {
    const contactInfo = [
        {
            icon: Mail,
            label: 'Direct Email',
            value: 'saravananrajdev@gmail.com',
            href: 'mailto:saravananrajdev@gmail.com',
            color: 'text-accent-indigo'
        },
        {
            icon: Phone,
            label: 'Call Me',
            value: '+91 7373991335',
            href: 'tel:+917373991335',
            color: 'text-accent-cyan'
        },
        {
            icon: MapPin,
            label: 'Current Base',
            value: 'Pudukkottai, Tamil Nadu',
            href: null,
            color: 'text-accent-violet'
        }
    ];

    const socials = [
        {
            icon: Linkedin,
            label: 'LinkedIn',
            href: 'https://linkedin.com/in/r--saravanan',
            sub: 'Professional Network'
        },
        {
            icon: Github,
            label: 'GitHub',
            href: 'https://github.com/rdsssaro01',
            sub: 'Code Repositories'
        }
    ];

    return (
        <section id="contact" className="py-32 relative overflow-hidden bg-surface-primary">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent-indigo/5 rounded-full blur-[120px] -z-10"></div>
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent-cyan/5 rounded-full blur-[120px] -z-10"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex flex-col items-center text-center mb-24 space-y-4">
                    <h2 className="text-4xl sm:text-6xl font-black text-white">Let's Build Together</h2>
                    <div className="section-line"></div>
                    <p className="text-slate-400 max-w-2xl text-lg font-medium">
                        Open for <span className="text-white">Full-Stack Opportunities</span>, Architecting Scalable Systems, and <span className="text-white">AI-Driven Solutions</span>.
                    </p>
                </div>

                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Left Side: Contact Cards */}
                        <div className="space-y-6">
                            {contactInfo.map((item, i) => (
                                <a
                                    key={i}
                                    href={item.href || '#'}
                                    className={`glass-card p-8 flex items-center gap-6 group hover:border-white/20 transition-all ${!item.href && 'cursor-default'}`}
                                >
                                    <div className={`p-4 glass rounded-2xl ${item.color} group-hover:scale-110 transition-transform duration-500`}>
                                        <item.icon className="w-6 h-6" />
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-xs font-black uppercase tracking-widest text-slate-500 mb-1">{item.label}</p>
                                        <p className="text-lg font-bold text-white group-hover:text-accent-cyan transition-colors">{item.value}</p>
                                    </div>
                                </a>
                            ))}

                            <div className="pt-8">
                                <h3 className="text-sm font-black uppercase tracking-[0.3em] text-slate-600 mb-6 px-2">Digital Presence</h3>
                                <div className="grid grid-cols-2 gap-4">
                                    {socials.map((social, i) => (
                                        <a
                                            key={i}
                                            href={social.href}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="glass-strong p-6 rounded-3xl border border-white/5 hover:border-accent-indigo/30 hover:bg-white/[0.02] transition-all group"
                                        >
                                            <social.icon className="w-6 h-6 text-slate-400 group-hover:text-white mb-4 transition-colors" />
                                            <p className="text-sm font-black text-white">{social.label}</p>
                                            <p className="text-[10px] font-mono text-slate-500 uppercase tracking-widest mt-1">{social.sub}</p>
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Right Side: CTA Card */}
                        <div className="glass-card p-12 flex flex-col justify-between relative overflow-hidden">
                            <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-accent-cyan/10 blur-[80px] rounded-full"></div>

                            <div className="relative z-10">
                                <div className="inline-flex items-center gap-2 px-4 py-2 glass rounded-xl text-green-400 font-mono text-[10px] font-black uppercase tracking-widest mb-8">
                                    <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
                                    Immediate Joiner Available
                                </div>

                                <h3 className="text-4xl font-black text-white mb-6 leading-tight">
                                    Ready to elevate your next <span className="gradient-text">Enterprise Application?</span>
                                </h3>
                                <p className="text-slate-400 text-lg leading-relaxed mb-12">
                                    Bringing expertise in Flutter mobile solutions, Angular web apps, and .NET/Node.js backend architectures. Let's discuss how I can add value to your team.
                                </p>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4 relative z-10">
                                <a
                                    href="mailto:saravananrajdev@gmail.com"
                                    className="flex-1 px-8 py-5 bg-white text-black font-black rounded-2xl flex items-center justify-center gap-3 hover:scale-[1.02] active:scale-95 transition-all shadow-xl shadow-white/5"
                                >
                                    <Send className="w-5 h-5" />
                                    Send Message
                                </a>
                                <button className="px-8 py-5 glass-strong text-white font-black rounded-2xl flex items-center justify-center gap-3 hover:bg-white/5 hover:scale-[1.02] active:scale-95 transition-all border border-white/10">
                                    <Download className="w-5 h-5 text-accent-cyan" />
                                    Resume PDF
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <footer className="mt-40 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="flex items-center gap-4">

                        <div>
                            <p className="text-white font-bold tracking-tight text-sm">SARAVANAN R</p>
                            <p className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">Full Stack Developer © 2026</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-1.5 px-5 py-2 glass rounded-full">
                        <span className="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-widest">Crafted with</span>
                        <Heart className="w-3 h-3 text-rose-500 fill-rose-500/20" />
                        <span className="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-widest">using React & Tailwind</span>
                    </div>

                    <div className="flex gap-8">
                        {['Privacy', 'Cookies', 'Terms'].map(link => (
                            <button key={link} className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-600 hover:text-white transition-colors">{link}</button>
                        ))}
                    </div>
                </footer>
            </div>
        </section>
    );
};

export default Contact;
