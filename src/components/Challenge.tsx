"use client";

import React from "react";
import challengeData from "../data/challenge.json";

// Tipagem mínima para dados carregados do JSON
interface ChallengeItem {
  id: number;
  title: string;
  description: string;
  icon: string;
  impact: string;
}

interface Highlight {
  label: string;
  value: string;
}

interface ComparisonSide {
  icon: string;
  title: string;
  highlights: Highlight[];
}

interface HierarchyItem {
  id: number;
  icon: string;
  title: string;
  desc: string;
}

interface ChallengeDataShape {
  challenges: ChallengeItem[];
  comparison: {
    convencionais: ComparisonSide;
    ve: ComparisonSide;
  };
  hierarchy: HierarchyItem[];
}

const data = challengeData as unknown as ChallengeDataShape;

const Challenge: React.FC = () => {
  const challenges: ChallengeItem[] = data.challenges;
  const comparison = data.comparison;
  const hierarchy = data.hierarchy;

  return (
    <section id="desafio" className="relative w-full min-h-screen bg-linear-to-br from-slate-900 to-blue-900 py-20">
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
              <div className="text-6xl mb-6">{comparison.convencionais.icon}</div>
              <h4 className="text-2xl font-semibold text-green-600 mb-6">{comparison.convencionais.title}</h4>
              <div className="space-y-4">
                {comparison.convencionais.highlights.map((h, i) => (
                  <div key={i} className="flex items-center justify-between bg-green-500/20 p-4 rounded-lg border border-green-400/30">
                    <span className="text-slate-200">{h.label}</span>
                    <span className="font-bold text-green-300">{h.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Baterias de VE (Íon-Lítio) */}
            <div className="text-center">
              <div className="text-6xl mb-6">{comparison.ve.icon}</div>
              <h4 className="text-2xl font-semibold text-yellow-600 mb-6">{comparison.ve.title}</h4>
              <div className="space-y-4">
                {comparison.ve.highlights.map((h, i) => (
                  <div key={i} className="flex items-center justify-between bg-yellow-500/20 p-4 rounded-lg border border-yellow-400/30">
                    <span className="text-slate-200">{h.label}</span>
                    <span className="font-bold text-yellow-300">{h.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Explicação da Hierarquia de Valor */}
          <div className="mt-12 bg-linear-to-r from-blue-900/30 to-purple-900/30 rounded-2xl p-8 border border-blue-500/30">
            <h4 className="text-xl font-semibold text-white text-center mb-6">
              🔄 Hierarquia de Valor para Baterias de VE
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-center">
              {hierarchy.map((h) => (
                <div key={h.id} className="p-4 rounded-lg border text-center" style={{backgroundColor: 'rgba(255,255,255,0.03)', borderColor: 'rgba(255,255,255,0.08)'}}>
                  <div className="text-2xl mb-2">{h.icon}</div>
                  <div className="font-bold text-sm text-white">{h.id}. {h.title}</div>
                  <div className="text-slate-200 text-xs mt-1">{h.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <button
            onClick={() => {
              const el = document.getElementById("solucao");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            className="bg-linear-to-r from-blue-500 to-cyan-500 text-white px-8 py-4 rounded-full text-lg font-medium hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 hover:scale-105 shadow-2xl hover:shadow-cyan-500/25"
          >
            Descubra a Solução →
          </button>
        </div>
      </div>
    </section>
  );
};

export default Challenge;