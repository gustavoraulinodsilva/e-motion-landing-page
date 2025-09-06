'use client';

import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  // Função para scroll suave ao topo
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Lista dos cinco integrantes da equipe
  const teamMembers = [
    'Gabriel Valcarenghi',
    'Gustavo Raulino da Silva',
    'Igor Machado Araujo dos Reis',
    'Leonardo Zuge',
    'Pedro Polla da Costa'
  ];

  // Dados interessantes do projeto
  const projectHighlights = [
    { icon: '🔋', label: 'Baterias Analisadas', value: '1M+' },
    { icon: '♻️', label: 'Taxa de Reciclagem', value: '95%' },
    { icon: '🌍', label: 'Impacto Ambiental', value: 'Positivo' },
    { icon: '⚡', label: 'Eficiência Energética', value: '+80%' }
  ];

  return (
    <footer className="bg-gradient-to-b from-slate-900 to-slate-950 text-white">
      {/* Seção principal do footer */}
      <div className="container mx-auto px-8 py-16">
        <div className="grid md:grid-cols-4 gap-12 items-start">
          {/* Logo e descrição */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">⚡</span>
              </div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                E-Motion
              </h3>
            </div>
            
            <p className="text-slate-300 leading-relaxed">
              Revolucionando a reciclagem de baterias de veículos elétricos através da padronização, 
              criando um futuro mais sustentável para a mobilidade.
            </p>
          </div>

          {/* Integrantes da Equipe */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-6">👥 Equipe do Projeto</h4>
            <ul className="space-y-3">
              {teamMembers.map((member, index) => (
                <li key={index} className="text-slate-300 text-sm flex items-center gap-2">
                  <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
                  {member}
                </li>
              ))}
            </ul>
          </div>

          {/* Instituição e Orientador */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-6">🎓 Instituição</h4>
            <div className="space-y-4">
              <div>
                <h5 className="text-cyan-400 font-medium text-sm mb-2">Universidade</h5>
                <p className="text-slate-300 text-sm">
                  FSG - Faculdade da Serra Gaúcha
                </p>
              </div>
              
              <div>
                <h5 className="text-cyan-400 font-medium text-sm mb-2">Orientador(a)</h5>
                <p className="text-slate-300 text-sm flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                  Prof. Clauber André Ferasso
                </p>
              </div>
            </div>
          </div>

          {/* Destaques do Projeto */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-6">📊 Destaques</h4>
            <div className="grid grid-cols-2 gap-3">
              {projectHighlights.map((highlight, index) => (
                <div key={index} className="bg-white/5 rounded-lg p-3 border border-white/10 text-center hover:bg-white/10 transition-all duration-300">
                  <div className="text-lg mb-1">{highlight.icon}</div>
                  <div className="text-cyan-400 font-bold text-sm">{highlight.value}</div>
                  <div className="text-slate-400 text-xs">{highlight.label}</div>
                </div>
              ))}
            </div>
            
            <div className="mt-6 text-center">
              <button
                onClick={scrollToTop}
                className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 py-3 rounded-full font-medium hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 hover:scale-105 shadow-lg inline-flex items-center gap-2 text-sm"
              >
                <span>⬆️</span>
                Voltar ao Topo
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-slate-700 bg-slate-950">
        <div className="container mx-auto px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-slate-400 text-sm">
              © {currentYear} E-Motion. Todos os direitos reservados.
            </div>
            
            <div className="text-slate-400 text-sm">
              Desenvolvido por <span className="text-cyan-400 font-semibold">Gustavo Raulino da Silva</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;