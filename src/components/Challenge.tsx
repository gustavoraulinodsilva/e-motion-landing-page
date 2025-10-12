'use client';

import React from "react";

// Interface para definir o tipo dos desafios
interface ChallengeItem {
  id: number;
  title: string;
  description: string;
  icon: string;
  impact: string;
}

const Challenge: React.FC = () => {
  // Array tipado com os desafios da logística reversa de baterias
  const challenges: ChallengeItem[] = [
    {
      id: 1,
      title: "Volume de Baterias Insuficiente",
      description: "A frota de carros elétricos ainda é pequena no Brasil, então o volume de baterias chegando ao fim da vida é baixo, atrasando o desenvolvimento de uma indústria de reciclagem em larga escala.",
      icon: "�",
      impact: "Inviabiliza economia de escala"
    },
    {
      id: 2,
      title: "Logística Complexa e Cara",
      description: "O transporte dessas baterias é caro e regulamentado como transporte de material perigoso, exigindo equipamentos especiais e certificações específicas.",
      icon: "🚚",
      impact: "Eleva custos operacionais"
    },
    {
      id: 3,
      title: "Legislação em Desenvolvimento",
      description: "A legislação brasileira ainda está amadurecendo para criar regras específicas para a logística reversa de baterias de íon-lítio, diferente das já consolidadas para chumbo-ácido.",
      icon: "⚖️",
      impact: "Gera incerteza regulatória"
    },
    {
      id: 4,
      title: "Tecnologia de Alto Custo",
      description: "A tecnologia para reciclagem hidrometalúrgica (mais eficiente) ainda tem custo elevado, dificultando sua implementação em escala comercial.",
      icon: "�",
      impact: "Compromete viabilidade econômica"
    }
  ];

  return (
    <section id="desafio" className="relative w-full min-h-screen bg-gradient-to-br from-slate-900 to-blue-900 py-20">
      {/* Header da seção */}
      <div className="container mx-auto px-8 mb-16">
        <div className="text-center mb-12">
          <h2 className="text-5xl md:text-6xl font-light text-white tracking-wide mb-6">
            Desafios da Logística Reversa
          </h2>
          <p className="text-xl text-slate-200 font-light leading-relaxed max-w-4xl mx-auto">
            A logística reversa de baterias de veículos elétricos no Brasil enfrenta obstáculos únicos 
            que diferem significativamente das baterias convencionais de chumbo-ácido
          </p>
        </div>

        {/* Grid de desafios */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {challenges.map((challenge: ChallengeItem) => (
            <div 
              key={challenge.id}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-white/20 hover:bg-white/15"
            >
              <div className="text-4xl mb-4">{challenge.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-4">
                {challenge.title}
              </h3>
              <p className="text-slate-200 leading-relaxed mb-4 text-sm">
                {challenge.description}
              </p>
              <div className="pt-4 border-t border-white/20">
                <span className="text-xs font-medium text-red-300 bg-red-500/20 px-3 py-1 rounded-full border border-red-400/30">
                  {challenge.impact}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Comparação: Baterias Convencionais vs VE */}
        <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl border border-white/20">
          <h3 className="text-3xl font-light text-white text-center mb-12">
            Complexidade: Convencionais vs Veículos Elétricos
          </h3>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Baterias Convencionais (Chumbo-Ácido) */}
            <div className="text-center">
              <div className="text-6xl mb-6">🔋</div>
              <h4 className="text-2xl font-semibold text-green-600 mb-6">Convencionais (Chumbo-Ácido)</h4>
              <div className="space-y-4">
                <div className="flex items-center justify-between bg-green-500/20 p-4 rounded-lg border border-green-400/30">
                  <span className="text-slate-200">Regulamentação</span>
                  <span className="font-bold text-green-300">CONAMA 401/2008</span>
                </div>
                <div className="flex items-center justify-between bg-green-500/20 p-4 rounded-lg border border-green-400/30">
                  <span className="text-slate-200">Taxa de Reciclagem</span>
                  <span className="font-bold text-green-300">99%</span>
                </div>
                <div className="flex items-center justify-between bg-green-500/20 p-4 rounded-lg border border-green-400/30">
                  <span className="text-slate-200">Processo</span>
                  <span className="font-bold text-green-300">Direto</span>
                </div>
                <div className="flex items-center justify-between bg-green-500/20 p-4 rounded-lg border border-green-400/30">
                  <span className="text-slate-200">Sistema</span>
                  <span className="font-bold text-green-300">Consolidado</span>
                </div>
              </div>
            </div>

            {/* Baterias de VE (Íon-Lítio) */}
            <div className="text-center">
              <div className="text-6xl mb-6">⚡</div>
              <h4 className="text-2xl font-semibold text-yellow-600 mb-6">Veículos Elétricos (Íon-Lítio)</h4>
              <div className="space-y-4">
                <div className="flex items-center justify-between bg-yellow-500/20 p-4 rounded-lg border border-yellow-400/30">
                  <span className="text-slate-200">Regulamentação</span>
                  <span className="font-bold text-yellow-300">Em desenvolvimento</span>
                </div>
                <div className="flex items-center justify-between bg-yellow-500/20 p-4 rounded-lg border border-yellow-400/30">
                  <span className="text-slate-200">Processo</span>
                  <span className="font-bold text-yellow-300">Hierarquia de Valor</span>
                </div>
                <div className="flex items-center justify-between bg-yellow-500/20 p-4 rounded-lg border border-yellow-400/30">
                  <span className="text-slate-200">Etapas</span>
                  <span className="font-bold text-yellow-300">4 níveis</span>
                </div>
                <div className="flex items-center justify-between bg-yellow-500/20 p-4 rounded-lg border border-yellow-400/30">
                  <span className="text-slate-200">Complexidade</span>
                  <span className="font-bold text-yellow-300">Alta</span>
                </div>
              </div>
            </div>
          </div>

          {/* Explicação da Hierarquia de Valor */}
          <div className="mt-12 bg-gradient-to-r from-blue-900/30 to-purple-900/30 rounded-2xl p-8 border border-blue-500/30">
            <h4 className="text-xl font-semibold text-white text-center mb-6">
              🔄 Hierarquia de Valor para Baterias de VE
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-center">
              <div className="bg-blue-500/10 p-4 rounded-lg border border-blue-400/20">
                <div className="text-2xl mb-2">🔄</div>
                <div className="text-blue-300 font-bold text-sm">1. REUTILIZAÇÃO</div>
                <div className="text-slate-200 text-xs mt-1">Outro veículo</div>
              </div>
              <div className="bg-green-500/10 p-4 rounded-lg border border-green-400/20">
                <div className="text-2xl mb-2">🔧</div>
                <div className="text-green-300 font-bold text-sm">2. REMANUFATURA</div>
                <div className="text-slate-200 text-xs mt-1">Reparo/recondicionamento</div>
              </div>
              <div className="bg-purple-500/10 p-4 rounded-lg border border-purple-400/20">
                <div className="text-2xl mb-2">🏠</div>
                <div className="text-purple-300 font-bold text-sm">3. SEGUNDA VIDA</div>
                <div className="text-slate-200 text-xs mt-1">Armazenamento estacionário</div>
              </div>
              <div className="bg-orange-500/10 p-4 rounded-lg border border-orange-400/20">
                <div className="text-2xl mb-2">♻️</div>
                <div className="text-orange-300 font-bold text-sm">4. RECICLAGEM</div>
                <div className="text-slate-200 text-xs mt-1">Recuperação de materiais</div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <button className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-8 py-4 rounded-full text-lg font-medium hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 hover:scale-105 shadow-2xl hover:shadow-cyan-500/25">
            Descubra a Solução →
          </button>
        </div>
      </div>
    </section>
  );
};

export default Challenge;