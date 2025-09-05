"use client";

import React from "react";

function Header() {
    return (
        <header className="fixed w-full">
            <nav className="flex items-center justify-between px-6 py-4">
                <h1>E-motion</h1>
                <ul className="flex items-center space-x-4">
                    <li>
                        <a href="">Inicio</a>
                    </li>
                    <li>
                        <a href="">Desafio</a>
                    </li>
                    <li>
                        <a href="#">Solução</a>
                    </li>
                    <li>
                        <a href="">Coleta</a>
                    </li>
                    <li>
                        <a href="">Curiosidades</a>
                    </li>
                </ul>
                <ul>
                    <li>
                        <select name="" id="">
                            <option value="pt-br">PT-BR</option>
                            <option value="en">EN</option>
                            <option value="es">ES</option>
                        </select>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
