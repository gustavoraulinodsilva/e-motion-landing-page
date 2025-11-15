"use client";

import React from "react";
import solutionData from "../data/solution.json";

// Tipagens mínimas para o JSON
interface SolutionItem {
  id: number;
  title: string;
  description: string;
  icon: string;
  benefit: string;
}

interface TimelineMilestone {
  year: string;
  sector: string;
  standard: string;
  impact: string;
}

const data = solutionData as unknown as { solutions: SolutionItem[]; timelineMilestones: TimelineMilestone[] };

const Solution: React.FC = () => {
  const solutions: SolutionItem[] = data.solutions;
  const timelineMilestones: TimelineMilestone[] = data.timelineMilestones;
  return (
    <section id="solucao" className="relative w-full min-h-screen bg-linear-to-br from-slate-900 to-blue-900 py-20">
      {/* Header da seção */}
      <div className="container mx-auto px-8 mb-16">
        <div className="text-center mb-12">
          <h2 className="text-5xl md:text-6xl font-light text-white tracking-wide mb-6">
            A Solução: Logística Reversa Estruturada
          </h2>
          <p className="text-xl text-slate-200 font-light leading-relaxed max-w-4xl mx-auto">
            Um sistema multifacetado que maximiza o valor das baterias através da 
            Hierarquia de Valor, diferindo das baterias convencionais que seguem direto para reciclagem
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

        {/* Timeline da Logística Reversa */}
        <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl border border-white/20">
          <h3 className="text-3xl font-light text-white text-center mb-12">
            Evolução da Logística Reversa no Brasil
          </h3>
          
          <div className="relative">
            {/* Linha da timeline */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-linear-to-b from-blue-400 to-cyan-400 rounded-full"></div>
            
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
                    <div className="w-6 h-6 bg-linear-to-r from-blue-400 to-cyan-400 rounded-full border-4 border-slate-900 shadow-lg"></div>
                  </div>
                  
                  {/* Espaço vazio do outro lado */}
                  <div className="flex-1"></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Exemplo NIO China */}
  <div className="mt-20 bg-linear-to-r from-blue-500/20 to-cyan-500/20 backdrop-blur-sm rounded-2xl p-8 border border-cyan-400/30">
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

        {/* Processos de Reciclagem */}
  <div className="mt-20 bg-linear-to-r from-orange-500/20 to-red-500/20 backdrop-blur-sm rounded-2xl p-8 border border-orange-400/30">
          <h3 className="text-2xl font-semibold text-white text-center mb-8">
            🔬 Tecnologias de Reciclagem
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Pirometalurgia */}
            <div className="bg-red-500/10 rounded-xl p-6 border border-red-400/20">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">🔥</span>
                <h4 className="text-xl font-bold text-red-300">Pirometalurgia</h4>
              </div>
              <p className="text-slate-200 text-sm mb-4 leading-relaxed">
                As baterias são incineradas em fornos de alta temperatura para recuperar metais 
                como cobalto, níquel e cobre na forma de liga metálica.
              </p>
              
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-slate-300 text-sm">Eficiência:</span>
                  <span className="text-red-300 font-bold">60-70%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-300 text-sm">Recupera:</span>
                  <span className="text-red-300 font-bold">Co, Ni, Cu</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-300 text-sm">Perde:</span>
                  <span className="text-red-300 font-bold">Li, Al</span>
                </div>
              </div>
              
              <div className="mt-4 p-3 bg-red-500/10 rounded-lg border border-red-400/20">
                <p className="text-red-200 text-xs text-center">
                  ❌ Menos eficiente, mas tecnologia mais simples
                </p>
              </div>
            </div>

            {/* Hidrometalurgia */}
            <div className="bg-green-500/10 rounded-xl p-6 border border-green-400/20">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">⚗️</span>
                <h4 className="text-xl font-bold text-green-300">Hidrometalurgia</h4>
              </div>
              <p className="text-slate-200 text-sm mb-4 leading-relaxed">
                Processo químico que usa banhos de ácido para dissolver e separar metais valiosos 
                (lítio, cobalto, níquel, manganês) com alta pureza.
              </p>
              
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-slate-300 text-sm">Eficiência:</span>
                  <span className="text-green-300 font-bold">90-95%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-300 text-sm">Recupera:</span>
                  <span className="text-green-300 font-bold">Li, Co, Ni, Mn</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-300 text-sm">Pureza:</span>
                  <span className="text-green-300 font-bold">Alta</span>
                </div>
              </div>
              
              <div className="mt-4 p-3 bg-green-500/10 rounded-lg border border-green-400/20">
                <p className="text-green-200 text-xs text-center">
                  ✅ Mais eficiente e ambientalmente amigável
                </p>
              </div>
            </div>
          </div>

          {/* Processo da Black Mass */}
          <div className="mt-8 bg-slate-800/50 rounded-xl p-6 border border-slate-600/30">
            <h4 className="text-lg font-semibold text-white mb-4 text-center">
              🖤 Processo da &quot;Massa Negra&quot; (Black Mass)
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-center">
              <div className="bg-slate-700/30 p-3 rounded-lg">
                <div className="text-xl mb-2">🔨</div>
                <div className="text-slate-300 text-sm">1. Trituração</div>
              </div>
              <div className="bg-slate-700/30 p-3 rounded-lg">
                <div className="text-xl mb-2">🖤</div>
                <div className="text-slate-300 text-sm">2. Massa Negra</div>
              </div>
              <div className="bg-slate-700/30 p-3 rounded-lg">
                <div className="text-xl mb-2">🧪</div>
                <div className="text-slate-300 text-sm">3. Banho Ácido</div>
              </div>
              <div className="bg-slate-700/30 p-3 rounded-lg">
                <div className="text-xl mb-2">✨</div>
                <div className="text-slate-300 text-sm">4. Separação</div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <button 
            onClick={() => {
              const el = document.getElementById("coleta");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            className="bg-linear-to-r from-blue-500 to-cyan-500 text-white px-8 py-4 rounded-full text-lg font-medium hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 hover:scale-105 shadow-2xl hover:shadow-cyan-500/25"
          >
            Explore a Logística Reversa →
          </button>
        </div>
      </div>
    </section>
  );
};

export default Solution;