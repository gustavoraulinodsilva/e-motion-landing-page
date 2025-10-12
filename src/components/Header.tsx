"use client";

import React, { useEffect, useState } from "react";

function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [showNav, setShowNav] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        setShowNav(true);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Fechar menu mobile ao clicar fora
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            const target = event.target as Element;
            if (mobileMenuOpen && !target.closest('header')) {
                setMobileMenuOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [mobileMenuOpen]);

    // Fechar menu mobile ao redimensionar para desktop
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) { // md breakpoint
                setMobileMenuOpen(false);
            }
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Função para scroll suave entre seções
    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            const headerHeight = 80; // Altura do header fixo
            const elementPosition = element.offsetTop - headerHeight;
            
            window.scrollTo({
                top: elementPosition,
                behavior: 'smooth'
            });
        }
        // Fechar menu mobile após navegação
        setMobileMenuOpen(false);
    };

    return (
        <>
        <header
            className={`fixed w-full z-50 transition-all duration-500 ${
                scrolled
                    ? "bg-gradient-to-b from-slate-900 to-slate-950 backdrop-blur-xl border-b border-blue-400/30 shadow-xl"
                    : "bg-transparent backdrop-blur-sm border-b border-transparent"
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
                        <span 
                            onClick={() => scrollToSection('inicio')} 
                            className="relative text-blue-200 font-semibold transition-all duration-300 inline-block transform hover:text-white hover:scale-110 group cursor-pointer"
                        >
                            Início
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-green-400 transition-all duration-300 group-hover:w-full"></span>
                        </span>
                    </li>
                    <li>
                        <span 
                            onClick={() => scrollToSection('desafio')} 
                            className="relative text-blue-200 font-semibold transition-all duration-300 inline-block transform hover:text-white hover:scale-110 group cursor-pointer"
                        >
                            Desafio
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-green-400 transition-all duration-300 group-hover:w-full"></span>
                        </span>
                    </li>
                    <li>
                        <span 
                            onClick={() => scrollToSection('solucao')} 
                            className="relative text-blue-200 font-semibold transition-all duration-300 inline-block transform hover:text-white hover:scale-110 group cursor-pointer"
                        >
                            Solução
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-green-400 transition-all duration-300 group-hover:w-full"></span>
                        </span>
                    </li>
                    <li>
                        <span 
                            onClick={() => scrollToSection('coleta')} 
                            className="relative text-blue-200 font-semibold transition-all duration-300 inline-block transform hover:text-white hover:scale-110 group cursor-pointer"
                        >
                            Logística Reversa
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-green-400 transition-all duration-300 group-hover:w-full"></span>
                        </span>
                    </li>
                    <li>
                        <span 
                            onClick={() => scrollToSection('mercado-futuro')} 
                            className="relative text-blue-200 font-semibold transition-all duration-300 inline-block transform hover:text-white hover:scale-110 group cursor-pointer"
                        >
                            Mercado
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-green-400 transition-all duration-300 group-hover:w-full"></span>
                        </span>
                    </li>
                    <li>
                        <span 
                            onClick={() => scrollToSection('curiosidades')} 
                            className="relative text-blue-200 font-semibold transition-all duration-300 inline-block transform hover:text-white hover:scale-110 group cursor-pointer"
                        >
                            Curiosidades
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-green-400 transition-all duration-300 group-hover:w-full"></span>
                        </span>
                    </li>
                </ul>

                {/* Botão Hamburger Mobile */}
                <button
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1 focus:outline-none"
                    aria-label="Menu"
                >
                    <span 
                        className={`block w-6 h-0.5 bg-blue-200 transition-all duration-300 ${
                            mobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''
                        }`}
                    ></span>
                    <span 
                        className={`block w-6 h-0.5 bg-blue-200 transition-all duration-300 ${
                            mobileMenuOpen ? 'opacity-0' : ''
                        }`}
                    ></span>
                    <span 
                        className={`block w-6 h-0.5 bg-blue-200 transition-all duration-300 ${
                            mobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
                        }`}
                    ></span>
                </button>
            </nav>

            {/* Menu Mobile */}
            <div className={`md:hidden absolute top-full left-0 right-0 bg-gradient-to-b from-slate-900 to-slate-950 backdrop-blur-xl border-t border-blue-400/20 shadow-2xl transition-all duration-300 overflow-hidden ${
                mobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
            }`}>
                <nav className="px-4 py-6 space-y-4">
                    {[
                        { name: 'Início', id: 'inicio', icon: '🏠' },
                        { name: 'Desafio', id: 'desafio', icon: '⚡' },
                        { name: 'Solução', id: 'solucao', icon: '💡' },
                        { name: 'Logística Reversa', id: 'coleta', icon: '♻️' },
                        { name: 'Mercado', id: 'mercado-futuro', icon: '📈' },
                        { name: 'Curiosidades', id: 'curiosidades', icon: '🧠' }
                    ].map((item, index) => (
                        <button
                            key={item.id}
                            onClick={() => scrollToSection(item.id)}
                            className="flex items-center w-full text-left px-4 py-3 rounded-xl text-blue-200 font-semibold bg-white/5 hover:bg-gradient-to-r hover:from-blue-600/30 hover:to-green-600/30 hover:text-white transition-all duration-300 transform hover:scale-105 border border-white/10 hover:border-blue-400/30 group"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <span className="text-xl mr-3 group-hover:scale-110 transition-transform duration-300">
                                {item.icon}
                            </span>
                            <span className="flex-1">{item.name}</span>
                            <svg 
                                className="w-4 h-4 opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-1 transition-all duration-300" 
                                fill="none" 
                                stroke="currentColor" 
                                viewBox="0 0 24 24"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    ))}
                </nav>
            </div>
        </header>

        {/* Overlay escuro para mobile */}
        {mobileMenuOpen && (
            <div 
                className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden transition-opacity duration-300"
                onClick={() => setMobileMenuOpen(false)}
            />
        )}
        </>
    );
}

export default Header;
