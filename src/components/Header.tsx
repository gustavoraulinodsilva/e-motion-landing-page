"use client";

import React, { useEffect, useState } from "react";


function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [showNav, setShowNav] = useState(false);

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
            className={`fixed w-full z-50 transition-colors duration-300 ${
                scrolled
                    ? "bg-[#0a1931] border-b border-blue-900 shadow-md backdrop-blur-lg"
                    : "bg-transparent border-b border-transparent"
            }`}
        >
            <nav className="flex items-center justify-between px-4 md:px-8 py-3 md:py-5">
                <div className="flex items-center space-x-3">
                    <span
                        className={`inline-flex items-center justify-center w-10 h-10 rounded-full transition-all duration-300 shadow-md group hover:scale-110 ${scrolled ? "bg-blue-900" : "bg-black/40"} ${scrolled ? "animate-pulse" : ""}`}
                        style={{ position: 'relative' }}
                    >
                        {/* Ícone de bateria estilizado */}
                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="3" y="7" width="16" height="10" rx="3" fill="#38bdf8" stroke="#1e40af" strokeWidth="1.5"/>
                            <rect x="19" y="10" width="2" height="4" rx="1" fill="#facc15" stroke="#ca8a04" strokeWidth="1.2"/>
                            <path d="M7 11v2m2-2v2m2-2v2" stroke="#1e40af" strokeWidth="1.2" strokeLinecap="round"/>
                        </svg>
                        {/* Borda animada no hover */}
                        <span className="absolute inset-0 rounded-full border-2 border-transparent group-hover:border-blue-400 group-hover:animate-pulse transition-all duration-300 pointer-events-none"></span>
                    </span>
                    <h1 className="text-2xl font-bold text-blue-100 tracking-tight select-none transition-colors duration-300">
                        E-motion
                    </h1>
                </div>
                <ul className={`flex items-center space-x-4 md:space-x-6 transition-all duration-500 ${showNav ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"}`}>
                    <li>
                        <a href="#inicio" className="text-blue-300 font-semibold transition-all duration-200 inline-block transform hover:text-white hover:scale-110">Início</a>
                    </li>
                    <li>
                        <a href="#desafio" className="text-blue-300 font-semibold transition-all duration-200 inline-block transform hover:text-white hover:scale-110">Desafio</a>
                    </li>
                    <li>
                        <a href="#solucao" className="text-blue-300 font-semibold transition-all duration-200 inline-block transform hover:text-white hover:scale-110">Solução</a>
                    </li>
                    <li>
                        <a href="#coleta" className="text-blue-300 font-semibold transition-all duration-200 inline-block transform hover:text-white hover:scale-110">Coleta</a>
                    </li>
                    <li>
                        <a href="#curiosidades" className="text-blue-300 font-semibold transition-all duration-200 inline-block transform hover:text-white hover:scale-110">Curiosidades</a>
                    </li>
                </ul>
                <div className="flex items-center">
                    <select className="pl-4 pr-3 py-1.5 rounded-md border border-blue-800 bg-[#112244] text-blue-100 font-semibold focus:outline-none focus:ring-4 focus:ring-blue-700/40 shadow-sm transition-all duration-300 hover:border-blue-400 cursor-pointer transform hover:scale-105" style={{minWidth:'90px'}}>
                        <option value="pt-br">PT-BR</option>
                        <option value="en">EN</option>
                        <option value="es">ES</option>
                    </select>
                </div>
            </nav>
        </header>
    );
}

export default Header;
