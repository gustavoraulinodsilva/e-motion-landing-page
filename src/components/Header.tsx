"use client";

import React, { useEffect, useState } from "react";

function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [showNav, setShowNav] = useState(false);
    const [language, setLanguage] = useState("pt-br");
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const languages = [
        { code: "pt-br", flag: "🇧🇷", name: "PT-BR" },
        { code: "en", flag: "🇺🇸", name: "EN" },
        { code: "es", flag: "🇪🇸", name: "ES" },
    ];

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        setShowNav(true);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={`fixed w-full z-50 transition-all duration-500 ${
                scrolled
                    ? "bg-gradient-to-r from-slate-900/95 via-blue-900/95 to-green-900/95 backdrop-blur-xl border-b border-blue-400/30 shadow-xl"
                    : "bg-gradient-to-r from-black/60 via-black/40 to-black/60 backdrop-blur-sm border-b border-transparent"
            }`}
        >
            <nav className="flex items-center justify-between px-4 md:px-8 py-3 md:py-5 max-w-7xl mx-auto">
                <div className="flex items-center space-x-3 group">
                    <div
                        className={`relative inline-flex items-center justify-center w-12 h-12 rounded-xl transition-all duration-500 shadow-lg group-hover:scale-110 transform ${
                            scrolled 
                                ? "bg-gradient-to-br from-blue-500 to-green-500 rotate-0" 
                                : "bg-gradient-to-br from-blue-600/80 to-green-600/80 rotate-12"
                        }`}
                    >
                        {/* Ícone de bateria melhorado */}
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="relative z-10">
                            <rect x="3" y="7" width="16" height="10" rx="3" fill="white" fillOpacity="0.9"/>
                            <rect x="19" y="10" width="2" height="4" rx="1" fill="#fbbf24"/>
                            <rect x="5" y="9" width="12" height="6" rx="2" fill="url(#batteryGradient)"/>
                            <defs>
                                <linearGradient id="batteryGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                    <stop offset="0%" stopColor="#10b981"/>
                                    <stop offset="100%" stopColor="#3b82f6"/>
                                </linearGradient>
                            </defs>
                        </svg>
                        {/* Efeito de brilho */}
                        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-all duration-500"></div>
                    </div>
                    <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-200 to-green-200 bg-clip-text text-transparent tracking-tight select-none transition-all duration-500 group-hover:scale-105">
                        E-motion
                    </h1>
                </div>
                <ul className={`hidden md:flex items-center space-x-6 transition-all duration-700 ${showNav ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"}`}>
                    <li>
                        <a href="#inicio" className="relative text-blue-200 font-semibold transition-all duration-300 inline-block transform hover:text-white hover:scale-110 group">
                            Início
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-green-400 transition-all duration-300 group-hover:w-full"></span>
                        </a>
                    </li>
                    <li>
                        <a href="#desafio" className="relative text-blue-200 font-semibold transition-all duration-300 inline-block transform hover:text-white hover:scale-110 group">
                            Desafio
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-green-400 transition-all duration-300 group-hover:w-full"></span>
                        </a>
                    </li>
                    <li>
                        <a href="#solucao" className="relative text-blue-200 font-semibold transition-all duration-300 inline-block transform hover:text-white hover:scale-110 group">
                            Solução
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-green-400 transition-all duration-300 group-hover:w-full"></span>
                        </a>
                    </li>
                    <li>
                        <a href="#coleta" className="relative text-blue-200 font-semibold transition-all duration-300 inline-block transform hover:text-white hover:scale-110 group">
                            Coleta
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-green-400 transition-all duration-300 group-hover:w-full"></span>
                        </a>
                    </li>
                    <li>
                        <a href="#curiosidades" className="relative text-blue-200 font-semibold transition-all duration-300 inline-block transform hover:text-white hover:scale-110 group">
                            Curiosidades
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-green-400 transition-all duration-300 group-hover:w-full"></span>
                        </a>
                    </li>
                </ul>
                <div className="flex items-center space-x-4">
                    {/* Seletor de idioma moderno */}
                    <div className="relative">
                        <button
                            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                            className="flex items-center space-x-2 px-4 py-2 rounded-xl bg-gradient-to-r from-blue-600/30 to-green-600/30 backdrop-blur-sm border border-blue-400/30 text-blue-100 font-semibold transition-all duration-300 hover:from-blue-500/40 hover:to-green-500/40 hover:border-blue-300/50 hover:scale-105 shadow-lg"
                        >
                            <span>{languages.find(lang => lang.code === language)?.flag}</span>
                            <span>{languages.find(lang => lang.code === language)?.name}</span>
                            <svg
                                className={`w-4 h-4 transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`}
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>
                        {isDropdownOpen && (
                            <div className="absolute top-full right-0 mt-2 w-32 bg-slate-800/95 backdrop-blur-xl border border-blue-400/30 rounded-xl shadow-2xl overflow-hidden animate-in slide-in-from-top-2 duration-300">
                                {languages.map((lang) => (
                                    <button
                                        key={lang.code}
                                        onClick={() => {
                                            setLanguage(lang.code);
                                            setIsDropdownOpen(false);
                                        }}
                                        className="w-full flex items-center space-x-2 px-4 py-3 text-blue-100 hover:bg-gradient-to-r hover:from-blue-600/50 hover:to-green-600/50 transition-all duration-200 hover:text-white"
                                    >
                                        <span>{lang.flag}</span>
                                        <span className="font-medium">{lang.name}</span>
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Header;
