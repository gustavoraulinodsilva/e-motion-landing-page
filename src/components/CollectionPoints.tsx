"use client";

import React, { useState } from "react";
import collectionData from "../data/collectionPoints.json";

// Interface para as etapas da hierarquia de valor
interface ValueHierarchyStep {
  id: number;
  title: string;
  description: string;
  icon: string;
  duration: string;
  efficiency: string;
  applicableTo: 'Chumbo-Ácido' | 'Íon-Lítio' | 'Ambos';
}

// Interface para as etapas do processo
interface ProcessStep {
  id: number;
  title: string;
  description: string;
  icon: string;
  duration: string;
}

const CollectionPoints: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'Convencionais' | 'VeiculosEletricos'>('Convencionais');

  const data = collectionData as unknown as { valueHierarchy: ValueHierarchyStep[]; recyclingProcess: ProcessStep[] };

  // Carrega hierarquia e processo a partir do JSON
  const valueHierarchy: ValueHierarchyStep[] = data.valueHierarchy;

  const recyclingProcess: ProcessStep[] = data.recyclingProcess;





  return (
    <section id="coleta" className="relative w-full min-h-screen bg-gradient-to-br from-slate-900 to-blue-900 py-20">
      {/* Header da seção */}
      <div className="container mx-auto px-8 mb-16">
        <div className="text-center mb-12">
          <h2 className="text-5xl md:text-6xl font-light text-white tracking-wide mb-6">
            Logística Reversa de Baterias
          </h2>
          <p className="text-xl text-slate-200 font-light leading-relaxed max-w-4xl mx-auto">
            Entenda como funciona o descarte responsável no Brasil: da regulamentação CONAMA 401/2008 
            para baterias convencionais aos novos desafios das baterias de veículos elétricos
          </p>
        </div>

        {/* Tabs para diferentes tipos de bateria */}
        <div className="flex justify-center mb-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-2 border border-white/20">
            <div className="flex gap-2">
              <button
                onClick={() => setActiveTab('Convencionais')}
                className={`px-8 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center gap-3 ${
                  activeTab === 'Convencionais'
                    ? 'bg-orange-500 text-white shadow-lg'
                    : 'text-slate-200 hover:bg-white/10'
                }`}
              >
                <span className="text-xl">🔋</span>
                <div className="text-left">
                  <div>Baterias Convencionais</div>
                  <div className="text-xs opacity-75">Chumbo-Ácido • 99% Reciclagem</div>
                </div>
              </button>
              <button
                onClick={() => setActiveTab('VeiculosEletricos')}
                className={`px-8 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center gap-3 ${
                  activeTab === 'VeiculosEletricos'
                    ? 'bg-green-500 text-white shadow-lg'
                    : 'text-slate-200 hover:bg-white/10'
                }`}
              >
                <span className="text-xl">⚡</span>
                <div className="text-left">
                  <div>Veículos Elétricos</div>
                  <div className="text-xs opacity-75">Íon-Lítio • Hierarquia de Valor</div>
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Conteúdo baseado na aba ativa */}
        {activeTab === 'Convencionais' && (
          <div>
            {/* Processo Regulamentado (CONAMA 401/2008) */}
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl border border-white/20 mb-16">
              <h3 className="text-3xl font-light text-white text-center mb-8">
                🏛️ Sistema Regulamentado Brasileiro
              </h3>
              <div className="text-center mb-8">
                <div className="bg-orange-500/20 backdrop-blur-sm border border-orange-400/30 rounded-2xl p-6 max-w-2xl mx-auto">
                  <h4 className="text-xl font-bold text-orange-300 mb-4">Resolução CONAMA 401/2008</h4>
                  <p className="text-slate-200">
                    Marco regulatório que estabelece a <strong>responsabilidade compartilhada</strong> e 
                    obriga pontos de venda a receber baterias usadas dos consumidores.
                  </p>
                </div>
              </div>

              {/* Fluxo da Logística Reversa */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                {[
                  { step: "1", title: "Consumidor", desc: "Troca bateria e recebe desconto", icon: "👤" },
                  { step: "2", title: "Ponto de Venda", desc: "Loja de autopeças/oficina", icon: "🏪" },
                  { step: "3", title: "Distribuidor", desc: "Transporte seguro", icon: "🚚" },
                  { step: "4", title: "Fabricante", desc: "Reciclagem 99%", icon: "🏭" }
                ].map((item, index) => (
                  <div key={index} className="relative">
                    <div className="bg-white/5 rounded-2xl p-6 border border-white/20 text-center h-full">
                      <div className="text-3xl mb-3">{item.icon}</div>
                      <div className="text-orange-300 font-bold text-sm mb-2">ETAPA {item.step}</div>
                      <h4 className="text-white font-semibold mb-2">{item.title}</h4>
                      <p className="text-slate-200 text-sm">{item.desc}</p>
                    </div>
                    {index < 3 && (
                      <div className="hidden md:block absolute -right-3 top-1/2 transform -translate-y-1/2 z-10">
                        <div className="w-6 h-6 bg-orange-400 rounded-full flex items-center justify-center text-slate-900 text-sm font-bold">
                          →
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Eficiência da Reciclagem */}
              <div className="bg-gradient-to-r from-green-500/20 to-orange-500/20 rounded-2xl p-6 border border-green-400/30">
                <div className="grid md:grid-cols-3 gap-6 text-center">
                  <div>
                    <div className="text-3xl font-bold text-green-400 mb-2">99%</div>
                    <div className="text-slate-200 text-sm">Taxa de Reciclagem</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-blue-400 mb-2">100%</div>
                    <div className="text-slate-200 text-sm">Chumbo Recuperado</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-purple-400 mb-2">Pioneiro</div>
                    <div className="text-slate-200 text-sm">Brasil no Mundo</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'VeiculosEletricos' && (
          <div>
            {/* Hierarquia de Valor */}
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl border border-white/20 mb-16">
              <h3 className="text-3xl font-light text-white text-center mb-8">
                📊 Hierarquia de Valor para Baterias de VE
              </h3>
              <p className="text-center text-slate-200 mb-12 max-w-3xl mx-auto">
                O conceito-chave é maximizar o valor e vida útil da bateria antes do descarte final, 
                seguindo uma sequência hierárquica de decisões.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {valueHierarchy.map((step, index) => (
                  <div key={step.id} className="relative">
                    <div className="bg-white/5 rounded-2xl p-6 border border-white/20 h-full flex flex-col">
                      <div className="text-center mb-4">
                        <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-blue-400 rounded-full flex items-center justify-center text-2xl shadow-lg mx-auto mb-3">
                          {step.icon}
                        </div>
                        <div className="text-green-300 font-bold text-sm mb-1">NÍVEL {step.id}</div>
                        <h4 className="text-white font-semibold text-lg">{step.title}</h4>
                      </div>
                      
                      <div className="flex-grow">
                        <p className="text-slate-200 text-sm leading-relaxed mb-4">{step.description}</p>
                      </div>
                      
                      <div className="space-y-2">
                        <div className="flex justify-between text-xs">
                          <span className="text-slate-400">Duração:</span>
                          <span className="text-cyan-300 font-medium">{step.duration}</span>
                        </div>
                        <div className="flex justify-between text-xs">
                          <span className="text-slate-400">Eficiência:</span>
                          <span className="text-green-300 font-medium">{step.efficiency}</span>
                        </div>
                      </div>
                    </div>
                    
                    {index < valueHierarchy.length - 1 && (
                      <div className="hidden lg:block absolute -right-3 top-1/2 transform -translate-y-1/2 z-10">
                        <div className="w-6 h-6 bg-green-400 rounded-full flex items-center justify-center text-slate-900 text-sm font-bold">
                          ↓
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Processos de Reciclagem */}
              <div className="grid md:grid-cols-2 gap-8 mt-12">
                <div className="bg-red-500/10 rounded-2xl p-6 border border-red-400/20">
                  <h4 className="text-xl font-bold text-red-300 mb-4">🔥 Pirometalurgia</h4>
                  <p className="text-slate-200 text-sm mb-4">
                    Incineração em fornos de alta temperatura para recuperar metais como cobalto, 
                    níquel e cobre. O lítio e alumínio são perdidos no processo.
                  </p>
                  <div className="bg-red-500/10 rounded-lg p-3">
                    <div className="text-red-300 font-bold">Eficiência: 60-70%</div>
                  </div>
                </div>

                <div className="bg-green-500/10 rounded-2xl p-6 border border-green-400/20">
                  <h4 className="text-xl font-bold text-green-300 mb-4">⚗️ Hidrometalurgia</h4>
                  <p className="text-slate-200 text-sm mb-4">
                    Processo químico que usa banhos de ácido para dissolver e separar metais valiosos 
                    (lítio, cobalto, níquel, manganês) com alta pureza.
                  </p>
                  <div className="bg-green-500/10 rounded-lg p-3">
                    <div className="text-green-300 font-bold">Eficiência: 90-95%</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Desafios no Brasil */}
            <div className="bg-gradient-to-r from-yellow-900/30 to-red-900/30 backdrop-blur-sm rounded-2xl p-8 border border-yellow-500/30 mb-16">
              <h3 className="text-2xl font-semibold text-white text-center mb-8">
                ⚠️ Desafios Atuais no Brasil
              </h3>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-yellow-300 mb-4">🚧 Obstáculos</h4>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 bg-red-500/10 p-3 rounded-lg border border-red-400/20">
                      <span className="text-red-300">📊</span>
                      <span className="text-slate-200 text-sm">Volume baixo de baterias em fim de vida</span>
                    </div>
                    <div className="flex items-center gap-3 bg-red-500/10 p-3 rounded-lg border border-red-400/20">
                      <span className="text-red-300">⚖️</span>
                      <span className="text-slate-200 text-sm">Legislação ainda em desenvolvimento</span>
                    </div>
                    <div className="flex items-center gap-3 bg-red-500/10 p-3 rounded-lg border border-red-400/20">
                      <span className="text-red-300">💰</span>
                      <span className="text-slate-200 text-sm">Custos elevados de reciclagem</span>
                    </div>
                    <div className="flex items-center gap-3 bg-red-500/10 p-3 rounded-lg border border-red-400/20">
                      <span className="text-red-300">🚚</span>
                      <span className="text-slate-200 text-sm">Logística como material perigoso</span>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-green-300 mb-4">🎯 Perspectivas</h4>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 bg-green-500/10 p-3 rounded-lg border border-green-400/20">
                      <span className="text-green-300">📈</span>
                      <span className="text-slate-200 text-sm">Mercado de US$ 4,2 bi até 2030</span>
                    </div>
                    <div className="flex items-center gap-3 bg-green-500/10 p-3 rounded-lg border border-green-400/20">
                      <span className="text-green-300">🏛️</span>
                      <span className="text-slate-200 text-sm">PL 2327/2021 em tramitação</span>
                    </div>
                    <div className="flex items-center gap-3 bg-green-500/10 p-3 rounded-lg border border-green-400/20">
                      <span className="text-green-300">🔄</span>
                      <span className="text-slate-200 text-sm">Economia circular em expansão</span>
                    </div>
                    <div className="flex items-center gap-3 bg-green-500/10 p-3 rounded-lg border border-green-400/20">
                      <span className="text-green-300">🚀</span>
                      <span className="text-slate-200 text-sm">Startups brasileiras especializadas</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}



        {/* Processo de Reciclagem Atual */}
        <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl border border-white/20 mb-16">
          <h3 className="text-3xl font-light text-white text-center mb-12">
            Processo Atual de Reciclagem
          </h3>
          
          {/* Grid responsivo das etapas */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {recyclingProcess.map((step: ProcessStep, index: number) => (
              <div key={step.id} className="relative">
                {/* Card da etapa */}
                <div className="bg-white/5 rounded-2xl p-6 border border-white/20 hover:bg-white/10 transition-all duration-300 h-full flex flex-col">
                  {/* Ícone da etapa */}
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full flex items-center justify-center text-2xl shadow-lg">
                      {step.icon}
                    </div>
                  </div>
                  
                  {/* Título */}
                  <h4 className="text-white font-semibold text-lg text-center mb-3">{step.title}</h4>
                  
                  {/* Duração */}
                  <div className="flex justify-center mb-4">
                    <span className="text-xs text-cyan-300 bg-cyan-500/20 px-3 py-1 rounded-full border border-cyan-400/30 font-medium">
                      {step.duration}
                    </span>
                  </div>
                  
                  {/* Descrição */}
                  <p className="text-slate-200 text-sm text-center leading-relaxed flex-grow">{step.description}</p>
                </div>
                
                {/* Seta para próxima etapa (apenas no desktop e se não for o último) */}
                {index < recyclingProcess.length - 1 && (
                  <div className="hidden lg:block absolute -right-3 top-1/2 transform -translate-y-1/2 z-10">
                    <div className="w-6 h-6 bg-cyan-400 rounded-full flex items-center justify-center text-slate-900 text-sm font-bold shadow-lg">
                      →
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
          
          {/* Resumo do processo */}
          <div className="mt-12 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-2xl p-6 border border-cyan-400/20">
            <div className="text-center">
              <h4 className="text-xl font-semibold text-white mb-6">⏱️ Resumo do Processo Atual</h4>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-white/10 rounded-lg p-4 hover:bg-white/15 transition-all duration-300">
                  <div className="text-cyan-300 font-bold text-xl">3-6 semanas</div>
                  <div className="text-slate-300 text-sm">Processo Completo</div>
                </div>
                <div className="bg-white/10 rounded-lg p-4 hover:bg-white/15 transition-all duration-300">
                  <div className="text-green-300 font-bold text-xl">65%</div>
                  <div className="text-slate-300 text-sm">Materiais Recuperados</div>
                </div>
                <div className="bg-white/10 rounded-lg p-4 hover:bg-white/15 transition-all duration-300">
                  <div className="text-yellow-300 font-bold text-xl">Alto</div>
                  <div className="text-slate-300 text-sm">Custo Operacional</div>
                </div>
                <div className="bg-white/10 rounded-lg p-4 hover:bg-white/15 transition-all duration-300">
                  <div className="text-red-300 font-bold text-xl">Manual</div>
                  <div className="text-slate-300 text-sm">Processo Atual</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Benefícios da Padronização na Logística */}
        <div className="bg-gradient-to-r from-green-500/20 to-blue-500/20 backdrop-blur-sm rounded-2xl p-8 border border-green-400/30 mb-16">
          <h3 className="text-2xl font-semibold text-white text-center mb-8">
            Como a Padronização Facilitaria a Logística Reversa
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-green-300 mb-4">✅ Com Padronização</h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3 bg-green-500/10 p-3 rounded-lg border border-green-400/20">
                  <span className="text-green-300">🚀</span>
                  <span className="text-slate-200">Coleta automatizada com robôs</span>
                </div>
                <div className="flex items-center gap-3 bg-green-500/10 p-3 rounded-lg border border-green-400/20">
                  <span className="text-green-300">⚡</span>
                  <span className="text-slate-200">Desmontagem em 30 minutos</span>
                </div>
                <div className="flex items-center gap-3 bg-green-500/10 p-3 rounded-lg border border-green-400/20">
                  <span className="text-green-300">📊</span>
                  <span className="text-slate-200">Rastreamento digital completo</span>
                </div>
                <div className="flex items-center gap-3 bg-green-500/10 p-3 rounded-lg border border-green-400/20">
                  <span className="text-green-300">♻️</span>
                  <span className="text-slate-200">95% de reaproveitamento</span>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-red-300 mb-4">❌ Situação Atual</h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3 bg-red-500/10 p-3 rounded-lg border border-red-400/20">
                  <span className="text-red-300">🐌</span>
                  <span className="text-slate-200">Processo manual complexo</span>
                </div>
                <div className="flex items-center gap-3 bg-red-500/10 p-3 rounded-lg border border-red-400/20">
                  <span className="text-red-300">⏱️</span>
                  <span className="text-slate-200">Desmontagem em 3-4 horas</span>
                </div>
                <div className="flex items-center gap-3 bg-red-500/10 p-3 rounded-lg border border-red-400/20">
                  <span className="text-red-300">📋</span>
                  <span className="text-slate-200">Documentação inconsistente</span>
                </div>
                <div className="flex items-center gap-3 bg-red-500/10 p-3 rounded-lg border border-red-400/20">
                  <span className="text-red-300">♻️</span>
                  <span className="text-slate-200">Apenas 5% reaproveitado</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <button 
            onClick={() => {
              const el = document.getElementById("mercado-futuro");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-8 py-4 rounded-full text-lg font-medium hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 hover:scale-105 shadow-2xl hover:shadow-cyan-500/25"
          >
            Explore o Mercado →
          </button>
        </div>
      </div>
    </section>
  );
};

export default CollectionPoints;