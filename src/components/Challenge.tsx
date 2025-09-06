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
  // Array tipado com os desafios da padronização de baterias
  const challenges: ChallengeItem[] = [
    {
      id: 1,
      title: "Diversidade de Formatos",
      description: "Cada fabricante desenvolve baterias com dimensões e formatos únicos, dificultando a intercambialidade entre diferentes modelos de veículos.",
      icon: "📐",
      impact: "Reduz eficiência na reciclagem"
    },
    {
      id: 2,
      title: "Composições Químicas Variadas",
      description: "Diferentes tecnologias de bateria (LiFePO4, NMC, LTO) exigem processos de reciclagem específicos e equipamentos especializados.",
      icon: "🧪",
      impact: "Aumenta custos de processamento"
    },
    {
      id: 3,
      title: "Sistemas de Conexão Incompatíveis",
      description: "Conectores, sistemas de gerenciamento térmico e protocolos de comunicação únicos para cada fabricante.",
      icon: "🔌",
      impact: "Dificulta automação da desmontagem"
    },
    {
      id: 4,
      title: "Falta de Documentação Padronizada",
      description: "Informações sobre composição, histórico de uso e condições de armazenamento não seguem um padrão universal.",
      icon: "📋",
      impact: "Compromete segurança e eficiência"
    }
  ];

  return (
    <section id="desafio" className="relative w-full min-h-screen bg-gradient-to-br from-slate-900 to-blue-900 py-20">
      {/* Header da seção */}
      <div className="container mx-auto px-8 mb-16">
        <div className="text-center mb-12">
          <h2 className="text-5xl md:text-6xl font-light text-white tracking-wide mb-6">
            O Desafio
          </h2>
          <p className="text-xl text-slate-200 font-light leading-relaxed max-w-3xl mx-auto">
            A falta de padronização nas baterias de veículos elétricos cria obstáculos significativos 
            para uma reciclagem eficiente e sustentável
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

        {/* Infográfico de comparação */}
        <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl border border-white/20">
          <h3 className="text-3xl font-light text-white text-center mb-12">
            Impacto da Falta de Padronização
          </h3>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Situação Atual */}
            <div className="text-center">
              <div className="text-6xl mb-6">❌</div>
              <h4 className="text-2xl font-semibold text-red-600 mb-6">Situação Atual</h4>
              <div className="space-y-4">
                <div className="flex items-center justify-between bg-red-500/20 p-4 rounded-lg border border-red-400/30">
                  <span className="text-slate-200">Taxa de Reciclagem</span>
                  <span className="font-bold text-red-300">~5%</span>
                </div>
                <div className="flex items-center justify-between bg-red-500/20 p-4 rounded-lg border border-red-400/30">
                  <span className="text-slate-200">Custo de Processamento</span>
                  <span className="font-bold text-red-300">Alto</span>
                </div>
                <div className="flex items-center justify-between bg-red-500/20 p-4 rounded-lg border border-red-400/30">
                  <span className="text-slate-200">Tempo de Desmontagem</span>
                  <span className="font-bold text-red-300">3-4 horas</span>
                </div>
                <div className="flex items-center justify-between bg-red-500/20 p-4 rounded-lg border border-red-400/30">
                  <span className="text-slate-200">Recuperação de Materiais</span>
                  <span className="font-bold text-red-300">Limitada</span>
                </div>
              </div>
            </div>

            {/* Cenário com Padronização */}
            <div className="text-center">
              <div className="text-6xl mb-6">✅</div>
              <h4 className="text-2xl font-semibold text-green-600 mb-6">Com Padronização</h4>
              <div className="space-y-4">
                <div className="flex items-center justify-between bg-green-500/20 p-4 rounded-lg border border-green-400/30">
                  <span className="text-slate-200">Taxa de Reciclagem</span>
                  <span className="font-bold text-green-300">~95%</span>
                </div>
                <div className="flex items-center justify-between bg-green-500/20 p-4 rounded-lg border border-green-400/30">
                  <span className="text-slate-200">Custo de Processamento</span>
                  <span className="font-bold text-green-300">Reduzido</span>
                </div>
                <div className="flex items-center justify-between bg-green-500/20 p-4 rounded-lg border border-green-400/30">
                  <span className="text-slate-200">Tempo de Desmontagem</span>
                  <span className="font-bold text-green-300">30-45 min</span>
                </div>
                <div className="flex items-center justify-between bg-green-500/20 p-4 rounded-lg border border-green-400/30">
                  <span className="text-slate-200">Recuperação de Materiais</span>
                  <span className="font-bold text-green-300">Otimizada</span>
                </div>
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