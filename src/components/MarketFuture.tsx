'use client';

import React, { useState } from "react";

// Interface para dados do mercado
interface MarketData {
  id: number;
  title: string;
  value: string;
  description: string;
  icon: string;
  trend: 'up' | 'down' | 'stable';
  color: string;
}

// Interface para perspectivas futuras
interface FuturePerspective {
  id: number;
  title: string;
  description: string;
  icon: string;
  timeline: string;
  impact: string;
}

// Interface para desafios
interface Challenge {
  id: number;
  title: string;
  description: string;
  icon: string;
  solution: string;
}

const MarketFuture: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'brasil' | 'global' | 'futuro'>('brasil');

  // Dados do mercado brasileiro
  const brazilMarketData: MarketData[] = [
    {
      id: 1,
      title: "Vendas 2024",
      value: "177 mil",
      description: "Veículos eletrificados vendidos no Brasil",
      icon: "🇧🇷",
      trend: 'up',
      color: 'from-green-500 to-blue-500'
    },
    {
      id: 2,
      title: "1º Semestre 2025",
      value: "86 mil",
      description: "Vendas mantêm tendência forte",
      icon: "📈",
      trend: 'up',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 3,
      title: "Líder de Mercado",
      value: "BYD",
      description: "Com modelos Dolphin, Yuan Pro e Seal",
      icon: "🏆",
      trend: 'up',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      id: 4,
      title: "Segmento Premium",
      value: "Volvo EX30",
      description: "Destaque no mercado premium",
      icon: "⭐",
      trend: 'stable',
      color: 'from-purple-500 to-pink-500'
    }
  ];

  // Dados do mercado global
  const globalMarketData: MarketData[] = [
    {
      id: 1,
      title: "China Domina",
      value: "60%",
      description: "Das vendas globais em 2024",
      icon: "🌏",
      trend: 'up',
      color: 'from-red-500 to-yellow-500'
    },
    {
      id: 2,
      title: "Vendas Globais",
      value: "14 milhões",
      description: "Veículos elétricos vendidos em 2024",
      icon: "🌍",
      trend: 'up',
      color: 'from-green-500 to-blue-500'
    },
    {
      id: 3,
      title: "Participação",
      value: "20%",
      description: "Do total de carros novos globalmente",
      icon: "📊",
      trend: 'up',
      color: 'from-blue-500 to-purple-500'
    },
    {
      id: 4,
      title: "China Vendeu",
      value: "9 milhões",
      description: "Unidades em 2024",
      icon: "🚗",
      trend: 'up',
      color: 'from-cyan-500 to-teal-500'
    }
  ];

  // Perspectivas futuras
  const futurePerspectives: FuturePerspective[] = [
    {
      id: 1,
      title: "Baterias de Estado Sólido",
      description: "Revolução na segurança e eficiência energética com carregamento mais rápido e maior durabilidade",
      icon: "🔋",
      timeline: "2026-2030",
      impact: "Transformacional"
    },
    {
      id: 2,
      title: "Integração com Energias Renováveis",
      description: "Carregamento através de sistemas solares e eólicos, tornando a mobilidade 100% sustentável",
      icon: "☀️",
      timeline: "2025-2027",
      impact: "Sustentabilidade"
    },
    {
      id: 3,
      title: "Descentralização do Carregamento",
      description: "Estações de carga acessíveis e sistemas de compartilhamento de energia entre veículos",
      icon: "🔌",
      timeline: "2024-2026",
      impact: "Acessibilidade"
    },
    {
      id: 4,
      title: "Mercado Second Life",
      description: "US$ 4,2 bilhões em baterias reutilizadas, criando economia circular robusta",
      icon: "♻️",
      timeline: "2025-2035",
      impact: "Economia Circular"
    }
  ];

  // Desafios atuais
  const currentChallenges: Challenge[] = [
    {
      id: 1,
      title: "Alto Custo Inicial",
      description: "Preço de aquisição ainda elevado comparado aos veículos convencionais",
      icon: "💰",
      solution: "Redução de custos através de escala e novas tecnologias"
    },
    {
      id: 2,
      title: "Infraestrutura de Recarga",
      description: "Rede de carregamento insuficiente para suportar crescimento acelerado",
      icon: "🏗️",
      solution: "Investimento público-privado em estações de carga"
    },
    {
      id: 3,
      title: "Autonomia e Desempenho",
      description: "Expectativas dos consumidores por maior alcance e performance",
      icon: "⚡",
      solution: "Desenvolvimento de baterias mais eficientes"
    }
  ];

  return (
    <section id="mercado-futuro" className="relative w-full min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 py-20">
      {/* Header da seção */}
      <div className="container mx-auto px-8 mb-16">
        <div className="text-center mb-12">
          <h2 className="text-5xl md:text-6xl font-light text-white tracking-wide mb-6">
            Mercado & Futuro
          </h2>
          <p className="text-xl text-slate-200 font-light leading-relaxed max-w-4xl mx-auto">
            A transformação da indústria automotiva não é mais uma promessa distante — 
            ela já é uma realidade em pleno avanço
          </p>
        </div>

        {/* Navegação por abas */}
        <div className="flex justify-center mb-16">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-2 border border-white/20">
            <div className="flex gap-2">
              {[
                { id: 'brasil', label: 'Brasil', icon: '🇧🇷' },
                { id: 'global', label: 'Global', icon: '🌍' },
                { id: 'futuro', label: 'Futuro', icon: '🚀' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as 'brasil' | 'global' | 'futuro')}
                  className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                    activeTab === tab.id
                      ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg'
                      : 'text-slate-200 hover:bg-white/10'
                  }`}
                >
                  <span>{tab.icon}</span>
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Conteúdo do mercado brasileiro */}
        {activeTab === 'brasil' && (
          <div>
            {/* Estatísticas do mercado brasileiro */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {brazilMarketData.map((data) => (
                <div 
                  key={data.id}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-white/20"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-3xl">{data.icon}</div>
                    <div className={`w-3 h-3 rounded-full ${
                      data.trend === 'up' ? 'bg-green-400' : 
                      data.trend === 'down' ? 'bg-red-400' : 'bg-yellow-400'
                    }`}></div>
                  </div>
                  <div className={`text-3xl font-bold bg-gradient-to-r ${data.color} bg-clip-text text-transparent mb-2`}>
                    {data.value}
                  </div>
                  <h4 className="text-white font-semibold mb-2">{data.title}</h4>
                  <p className="text-slate-300 text-sm">{data.description}</p>
                </div>
              ))}
            </div>

            {/* Marcas em destaque */}
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl border border-white/20 mb-16">
              <h3 className="text-3xl font-light text-white text-center mb-8">
                🏆 Líderes do Mercado Brasileiro
              </h3>
              
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center text-3xl shadow-lg mx-auto mb-4">
                    🇨🇳
                  </div>
                  <h4 className="text-xl font-bold text-white mb-2">BYD</h4>
                  <p className="text-slate-200 text-sm mb-3">Líder absoluto com Dolphin Mini, Dolphin, Yuan Pro e Seal</p>
                  <div className="bg-orange-500/20 rounded-lg p-3 border border-orange-400/30">
                    <span className="text-orange-300 font-bold">Dominância Chinesa</span>
                  </div>
                </div>

                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-3xl shadow-lg mx-auto mb-4">
                    🇸🇪
                  </div>
                  <h4 className="text-xl font-bold text-white mb-2">Volvo</h4>
                  <p className="text-slate-200 text-sm mb-3">EX30 como destaque no segmento premium</p>
                  <div className="bg-blue-500/20 rounded-lg p-3 border border-blue-400/30">
                    <span className="text-blue-300 font-bold">Segmento Premium</span>
                  </div>
                </div>

                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center text-3xl shadow-lg mx-auto mb-4">
                    💰
                  </div>
                  <h4 className="text-xl font-bold text-white mb-2">Custo-Benefício</h4>
                  <p className="text-slate-200 text-sm mb-3">GWM Ora 03 e Renault Kwid E-Tech</p>
                  <div className="bg-green-500/20 rounded-lg p-3 border border-green-400/30">
                    <span className="text-green-300 font-bold">Acessibilidade</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Longevidade das baterias */}
            <div className="bg-gradient-to-r from-purple-900/30 to-blue-900/30 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/30 mb-8">
              <h3 className="text-2xl font-semibold text-white text-center mb-8">
                🔋 Longevidade das Baterias
              </h3>
              
              <div className="grid md:grid-cols-3 gap-6 mb-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-purple-300 mb-2">8-15 anos</div>
                  <div className="text-slate-200">Vida útil média</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-300 mb-2">150-300k km</div>
                  <div className="text-slate-200">Quilometragem</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-green-300 mb-2">70-80%</div>
                  <div className="text-slate-200">Capacidade após 8 anos</div>
                </div>
              </div>
              
              <div className="p-4 bg-green-500/10 rounded-lg border border-green-400/20 text-center">
                <p className="text-slate-200 text-sm">
                  ✅ <strong>Vantagem:</strong> Carros elétricos podem facilmente ultrapassar 300 mil km de uso com manutenção mínima
                </p>
              </div>
            </div>

            {/* Vantagens da manutenção elétrica */}
            <div className="bg-gradient-to-r from-green-900/30 to-teal-900/30 backdrop-blur-sm rounded-2xl p-8 border border-green-500/30">
              <h3 className="text-2xl font-semibold text-white text-center mb-8">
                🔧 Durabilidade Superior aos Convencionais
              </h3>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold text-green-300 mb-4">❌ Não Precisa Mais</h4>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 bg-red-500/10 p-3 rounded-lg border border-red-400/20">
                      <span className="text-red-300">🛢️</span>
                      <span className="text-slate-200 text-sm">Troca de óleo do motor</span>
                    </div>
                    <div className="flex items-center gap-3 bg-red-500/10 p-3 rounded-lg border border-red-400/20">
                      <span className="text-red-300">⚡</span>
                      <span className="text-slate-200 text-sm">Substituição de velas</span>
                    </div>
                    <div className="flex items-center gap-3 bg-red-500/10 p-3 rounded-lg border border-red-400/20">
                      <span className="text-red-300">🔧</span>
                      <span className="text-slate-200 text-sm">Manutenção da embreagem</span>
                    </div>
                    <div className="flex items-center gap-3 bg-red-500/10 p-3 rounded-lg border border-red-400/20">
                      <span className="text-red-300">🚗</span>
                      <span className="text-slate-200 text-sm">Filtros e correias</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-green-300 mb-4">✅ Principais Vantagens</h4>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 bg-green-500/10 p-3 rounded-lg border border-green-400/20">
                      <span className="text-green-300">🔩</span>
                      <span className="text-slate-200 text-sm">Muito menos peças móveis</span>
                    </div>
                    <div className="flex items-center gap-3 bg-green-500/10 p-3 rounded-lg border border-green-400/20">
                      <span className="text-green-300">⬇️</span>
                      <span className="text-slate-200 text-sm">Menor desgaste geral</span>
                    </div>
                    <div className="flex items-center gap-3 bg-green-500/10 p-3 rounded-lg border border-green-400/20">
                      <span className="text-green-300">🔄</span>
                      <span className="text-slate-200 text-sm">Frenagem regenerativa</span>
                    </div>
                    <div className="flex items-center gap-3 bg-green-500/10 p-3 rounded-lg border border-green-400/20">
                      <span className="text-green-300">💰</span>
                      <span className="text-slate-200 text-sm">Economia a longo prazo</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-cyan-500/10 rounded-lg border border-cyan-400/20 text-center">
                <p className="text-slate-200 text-sm">
                  <strong>Resultado:</strong> A economia com manutenção e energia compensa o investimento inicial maior
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Conteúdo do mercado global */}
        {activeTab === 'global' && (
          <div>
            {/* Estatísticas globais */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {globalMarketData.map((data) => (
                <div 
                  key={data.id}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-white/20"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-3xl">{data.icon}</div>
                    <div className={`w-3 h-3 rounded-full ${
                      data.trend === 'up' ? 'bg-green-400' : 
                      data.trend === 'down' ? 'bg-red-400' : 'bg-yellow-400'
                    }`}></div>
                  </div>
                  <div className={`text-3xl font-bold bg-gradient-to-r ${data.color} bg-clip-text text-transparent mb-2`}>
                    {data.value}
                  </div>
                  <h4 className="text-white font-semibold mb-2">{data.title}</h4>
                  <p className="text-slate-300 text-sm">{data.description}</p>
                </div>
              ))}
            </div>

            {/* Liderança chinesa */}
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl border border-white/20 mb-16">
              <h3 className="text-3xl font-light text-white text-center mb-8">
                🇨🇳 China: Motor da Eletrificação Global
              </h3>
              
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4 bg-red-500/10 p-4 rounded-lg border border-red-400/20">
                      <span className="text-3xl">🏛️</span>
                      <div>
                        <div className="text-white font-semibold">Políticas Públicas</div>
                        <div className="text-slate-200 text-sm">Incentivos governamentais massivos</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 bg-yellow-500/10 p-4 rounded-lg border border-yellow-400/20">
                      <span className="text-3xl">💰</span>
                      <div>
                        <div className="text-white font-semibold">Grandes Investimentos</div>
                        <div className="text-slate-200 text-sm">Bilhões em P&D e infraestrutura</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 bg-green-500/10 p-4 rounded-lg border border-green-400/20">
                      <span className="text-3xl">🔌</span>
                      <div>
                        <div className="text-white font-semibold">Rede de Recarga</div>
                        <div className="text-slate-200 text-sm">Infraestrutura ampla e acessível</div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="text-center">
                  <div className="bg-gradient-to-r from-red-500 to-yellow-500 rounded-2xl p-8 border border-red-400/30">
                    <div className="text-6xl font-bold text-white mb-4">9M</div>
                    <div className="text-xl font-semibold text-white mb-2">Veículos Vendidos</div>
                    <div className="text-red-100">China em 2024</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Noruega como exemplo */}
            <div className="bg-gradient-to-r from-blue-900/30 to-green-900/30 backdrop-blur-sm rounded-2xl p-8 border border-blue-500/30">
              <h3 className="text-2xl font-semibold text-white text-center mb-8">
                🇳🇴 Noruega: Pioneira na Transição
              </h3>
              
              <div className="text-center">
                <p className="text-slate-200 mb-6">
                  A Noruega lidera a transição elétrica na Europa, com políticas agressivas 
                  de incentivo e meta de 100% de vendas elétricas até 2030.
                </p>
                <div className="inline-flex items-center gap-4 bg-blue-500/20 px-6 py-3 rounded-full border border-blue-400/30">
                  <span className="text-2xl">📈</span>
                  <span className="text-blue-300 font-bold">Meta: 20% → 100% até 2030</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Conteúdo do futuro */}
        {activeTab === 'futuro' && (
          <div>
            {/* Perspectivas futuras */}
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              {futurePerspectives.map((perspective) => (
                <div 
                  key={perspective.id}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-white/20"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full flex items-center justify-center text-2xl shadow-lg">
                      {perspective.icon}
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-white">{perspective.title}</h4>
                      <div className="text-cyan-300 text-sm font-medium">{perspective.timeline}</div>
                    </div>
                  </div>
                  
                  <p className="text-slate-200 leading-relaxed mb-4">{perspective.description}</p>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-medium text-green-300 bg-green-500/20 px-3 py-1 rounded-full border border-green-400/30">
                      {perspective.impact}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Desafios atuais */}
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl border border-white/20 mb-16">
              <h3 className="text-3xl font-light text-white text-center mb-8">
                ⚠️ Desafios a Serem Superados
              </h3>
              
              <div className="grid md:grid-cols-3 gap-8">
                {currentChallenges.map((challenge) => (
                  <div key={challenge.id} className="text-center">
                    <div className="w-20 h-20 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center text-3xl shadow-lg mx-auto mb-4">
                      {challenge.icon}
                    </div>
                    <h4 className="text-xl font-bold text-white mb-3">{challenge.title}</h4>
                    <p className="text-slate-200 text-sm mb-4">{challenge.description}</p>
                    <div className="bg-green-500/10 rounded-lg p-3 border border-green-400/20">
                      <p className="text-green-300 text-xs font-medium">{challenge.solution}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Impacto da inovação */}
            <div className="bg-gradient-to-r from-purple-900/30 to-pink-900/30 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/30">
              <h3 className="text-2xl font-semibold text-white text-center mb-8">
                🚀 O Impacto da Inovação na Indústria
              </h3>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center bg-blue-500/10 p-6 rounded-xl border border-blue-400/20">
                  <div className="text-3xl mb-3">📈</div>
                  <h4 className="text-white font-semibold mb-2">Aumento da Adoção</h4>
                  <p className="text-slate-200 text-sm">Veículos mais eficientes levam ao crescimento na aceitação dos consumidores</p>
                </div>
                
                <div className="text-center bg-green-500/10 p-6 rounded-xl border border-green-400/20">
                  <div className="text-3xl mb-3">🆕</div>
                  <h4 className="text-white font-semibold mb-2">Novas Oportunidades</h4>
                  <p className="text-slate-200 text-sm">Indústrias de reciclagem e novas tecnologias em ascensão</p>
                </div>
                
                <div className="text-center bg-purple-500/10 p-6 rounded-xl border border-purple-400/20">
                  <div className="text-3xl mb-3">🌱</div>
                  <h4 className="text-white font-semibold mb-2">Mobilidade Sustentável</h4>
                  <p className="text-slate-200 text-sm">Soluções de transporte mais limpas e amigáveis ao meio ambiente</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-500/20 to-cyan-500/20 backdrop-blur-sm rounded-2xl p-8 border border-cyan-400/30">
            <h3 className="text-2xl font-bold text-white mb-4">
              O Futuro é Elétrico e Sustentável
            </h3>
            <p className="text-slate-200 mb-6 max-w-2xl mx-auto">
              Mais do que uma alternativa sustentável, a mobilidade elétrica oferece durabilidade, 
              eficiência e economia a longo prazo, solidificando seu espaço no futuro do transporte.
            </p>
            <button 
              onClick={() => {
                const el = document.getElementById("curiosidades");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-8 py-4 rounded-full text-lg font-medium hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 hover:scale-105 shadow-2xl hover:shadow-cyan-500/25"
            >
              Explore as Curiosidades →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketFuture;