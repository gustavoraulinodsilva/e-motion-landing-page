'use client';

import React from "react";

// Interface para definir o tipo das soluções
interface SolutionItem {
  id: number;
  title: string;
  description: string;
  icon: string;
  benefit: string;
}

// Interface para os marcos da timeline
interface TimelineMilestone {
  year: string;
  sector: string;
  standard: string;
  impact: string;
}

const Solution: React.FC = () => {
  // Array tipado com as soluções de padronização
  const solutions: SolutionItem[] = [
    {
      id: 1,
      title: "Formato Universal",
      description: "Módulos padronizados como o conceito USB-C, permitindo intercambialidade total entre diferentes marcas e modelos de veículos elétricos.",
      icon: "🔌",
      benefit: "Compatibilidade universal"
    },
    {
      id: 2,
      title: "Compatibilidade Elétrica",
      description: "Tensão e protocolos de comunicação únicos, garantindo segurança e eficiência em qualquer sistema de carregamento ou reciclagem.",
      icon: "⚡",
      benefit: "Segurança otimizada"
    },
    {
      id: 3,
      title: "Battery Swapping",
      description: "Troca rápida em postos especializados, como já implementado pela NIO na China, permitindo 'reabastecimento' em menos de 5 minutos.",
      icon: "🔄",
      benefit: "Velocidade de troca"
    },
    {
      id: 4,
      title: "Reutilização Inteligente",
      description: "Baterias antigas de veículos podem ter segunda vida em sistemas de energia solar residencial, maximizando seu valor útil.",
      icon: "♻️",
      benefit: "Economia circular"
    }
  ];

  // Timeline de padronização em outros setores
  const timelineMilestones: TimelineMilestone[] = [
    {
      year: "1990s",
      sector: "Telefonia",
      standard: "GSM Global",
      impact: "Roaming mundial"
    },
    {
      year: "2000s",
      sector: "Conectividade",
      standard: "USB Padrão",
      impact: "Dispositivos universais"
    },
    {
      year: "2010s",
      sector: "Pilhas",
      standard: "AA/AAA Global",
      impact: "Intercambialidade total"
    },
    {
      year: "2020s",
      sector: "Carregamento",
      standard: "USB-C Universal",
      impact: "Cabo único para tudo"
    },
    {
      year: "2030s",
      sector: "Baterias EV",
      standard: "Módulos Padrão",
      impact: "Revolução na mobilidade"
    }
  ];

  return (
    <section id="solucao" className="relative w-full min-h-screen bg-gradient-to-br from-slate-900 to-blue-900 py-20">
      {/* Header da seção */}
      <div className="container mx-auto px-8 mb-16">
        <div className="text-center mb-12">
          <h2 className="text-5xl md:text-6xl font-light text-white tracking-wide mb-6">
            Padronização: A Chave do Futuro
          </h2>
          <p className="text-xl text-slate-200 font-light leading-relaxed max-w-3xl mx-auto">
            Soluções inovadoras que revolucionarão a reciclagem e reutilização de baterias de veículos elétricos
          </p>
        </div>

        {/* Grid de soluções */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {solutions.map((solution: SolutionItem) => (
            <div 
              key={solution.id}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-white/20 hover:bg-white/15"
            >
              <div className="text-4xl mb-4">{solution.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-4">
                {solution.title}
              </h3>
              <p className="text-slate-200 leading-relaxed mb-4 text-sm">
                {solution.description}
              </p>
              <div className="pt-4 border-t border-white/20">
                <span className="text-xs font-medium text-green-300 bg-green-500/20 px-3 py-1 rounded-full border border-green-400/30">
                  {solution.benefit}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Timeline de Padronização */}
        <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl border border-white/20">
          <h3 className="text-3xl font-light text-white text-center mb-12">
            Timeline: Como Outros Setores Se Padronizaram
          </h3>
          
          <div className="relative">
            {/* Linha da timeline */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-400 to-cyan-400 rounded-full"></div>
            
            {/* Marcos da timeline */}
            <div className="space-y-12">
              {timelineMilestones.map((milestone: TimelineMilestone, index: number) => (
                <div 
                  key={index}
                  className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} gap-8`}
                >
                  {/* Conteúdo */}
                  <div className={`flex-1 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                    <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/20 hover:bg-white/10 transition-all duration-300">
                      <div className="text-cyan-300 font-bold text-lg mb-2">{milestone.year}</div>
                      <h4 className="text-white font-semibold text-xl mb-2">{milestone.sector}</h4>
                      <p className="text-slate-300 mb-3">{milestone.standard}</p>
                      <div className="text-sm text-green-300 bg-green-500/20 px-3 py-1 rounded-full inline-block border border-green-400/30">
                        {milestone.impact}
                      </div>
                    </div>
                  </div>
                  
                  {/* Ponto central */}
                  <div className="relative z-10">
                    <div className="w-6 h-6 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full border-4 border-slate-900 shadow-lg"></div>
                  </div>
                  
                  {/* Espaço vazio do outro lado */}
                  <div className="flex-1"></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Exemplo NIO China */}
        <div className="mt-20 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 backdrop-blur-sm rounded-2xl p-8 border border-cyan-400/30">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-semibold text-white mb-4">
                🇨🇳 Caso de Sucesso: NIO na China
              </h3>
              <p className="text-slate-200 leading-relaxed mb-4">
                A NIO já implementou mais de 1.300 estações de troca de bateria na China, 
                permitindo que motoristas troquem suas baterias em menos de 5 minutos.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/10 p-4 rounded-lg">
                  <div className="text-cyan-300 font-bold text-2xl">1.300+</div>
                  <div className="text-slate-300 text-sm">Estações de Troca</div>
                </div>
                <div className="bg-white/10 p-4 rounded-lg">
                  <div className="text-cyan-300 font-bold text-2xl">5min</div>
                  <div className="text-slate-300 text-sm">Tempo de Troca</div>
                </div>
              </div>
            </div>
            <div className="bg-white/5 rounded-xl p-6 border border-white/20">
              <div className="text-4xl text-center mb-4">🔋</div>
              <div className="text-center text-slate-300">
                <p className="mb-2">Bateria padronizada permite:</p>
                <ul className="text-sm space-y-1">
                  <li>✓ Troca rápida automatizada</li>
                  <li>✓ Monitoramento centralizado</li>
                  <li>✓ Reciclagem eficiente</li>
                  <li>✓ Segunda vida garantida</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <button className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-8 py-4 rounded-full text-lg font-medium hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 hover:scale-105 shadow-2xl hover:shadow-cyan-500/25">
            Veja os Pontos de Coleta →
          </button>
        </div>
      </div>
    </section>
  );
};

export default Solution;