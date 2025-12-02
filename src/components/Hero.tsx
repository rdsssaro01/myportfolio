import React from 'react';
import { Code2, Database, Smartphone, Globe, ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
    const scrollToAbout = () => {
        const element = document.getElementById('about');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative pt-20">
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center space-y-8">
                    <div className="space-y-4 animate-fade-in">
                        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-slate-900">
                            <span className="bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-700 bg-clip-text text-transparent">
                                SARAVANAN R
                            </span>
                        </h1>
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-slate-700">
                            Full Stack Developer
                        </h2>
                    </div>

                    <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                        Building high-performance cross-platform applications with  around 3 years of expertise in
                        Flutter, React.js, Node.js, and .NET. Specialized in creating seamless mobile, web,
                        and desktop experiences with modern architecture.
                    </p>

                    <div className="flex flex-wrap justify-center gap-4 pt-4">
                        <div className="flex items-center gap-2 px-6 py-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-shadow">
                            <Smartphone className="w-5 h-5 text-blue-600" />
                            <span className="font-medium text-slate-700">Mobile Development</span>
                        </div>
                        <div className="flex items-center gap-2 px-6 py-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-shadow">
                            <Globe className="w-5 h-5 text-cyan-600" />
                            <span className="font-medium text-slate-700">Web Development</span>
                        </div>
                        <div className="flex items-center gap-2 px-6 py-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-shadow">
                            <Database className="w-5 h-5 text-blue-600" />
                            <span className="font-medium text-slate-700">Backend APIs</span>
                        </div>
                        <div className="flex items-center gap-2 px-6 py-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-shadow">
                            <Code2 className="w-5 h-5 text-cyan-600" />
                            <span className="font-medium text-slate-700">Cross-Platform</span>
                        </div>
                    </div>

                    <div className="flex flex-wrap justify-center gap-4 pt-8">
                        <a
                            href="#contact"
                            className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all"
                        >
                            Get In Touch
                        </a>
                        <a
                            href="#projects"
                            className="px-8 py-4 bg-white text-slate-700 font-semibold rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all border-2 border-slate-200"
                        >
                            View Projects
                        </a>
                    </div>

                    <button
                        onClick={scrollToAbout}
                        className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce"
                    >
                        <ChevronDown className="w-8 h-8 text-slate-400" />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Hero;
