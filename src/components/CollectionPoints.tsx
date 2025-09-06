'use client';

import React, { useState } from "react";

// Interface para definir o tipo dos pontos de coleta
interface CollectionPoint {
  id: number;
  name: string;
  address: string;
  city: string;
  state: string;
  type: 'Reciclagem' | 'Reaproveitamento' | 'Híbrido';
  capacity: string;
  contact: string;
  coordinates: {
    lat: number;
    lng: number;
  };
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
  const [selectedFilter, setSelectedFilter] = useState<string>('Todos');

  // Array tipado com pontos de coleta
  const collectionPoints: CollectionPoint[] = [
    {
      id: 1,
      name: "EcoBattery São Paulo",
      address: "Av. Paulista, 1578",
      city: "São Paulo",
      state: "SP",
      type: "Reciclagem",
      capacity: "500 baterias/mês",
      contact: "(11) 3000-1234",
      coordinates: { lat: -23.5613, lng: -46.6565 }
    },
    {
      id: 2,
      name: "GreenTech Rio",
      address: "Rua Copacabana, 890",
      city: "Rio de Janeiro",
      state: "RJ",
      type: "Híbrido",
      capacity: "300 baterias/mês",
      contact: "(21) 2500-5678",
      coordinates: { lat: -22.9068, lng: -43.1729 }
    },
    {
      id: 3,
      name: "Solar Reuse BH",
      address: "Av. Afonso Pena, 1200",
      city: "Belo Horizonte",
      state: "MG",
      type: "Reaproveitamento",
      capacity: "200 baterias/mês",
      contact: "(31) 3400-9876",
      coordinates: { lat: -19.9167, lng: -43.9345 }
    },
    {
      id: 4,
      name: "TechCycle Curitiba",
      address: "Rua XV de Novembro, 500",
      city: "Curitiba",
      state: "PR",
      type: "Reciclagem",
      capacity: "400 baterias/mês",
      contact: "(41) 3200-4567",
      coordinates: { lat: -25.4284, lng: -49.2733 }
    },
    {
      id: 5,
      name: "EnergyLoop Porto Alegre",
      address: "Av. Borges de Medeiros, 800",
      city: "Porto Alegre",
      state: "RS",
      type: "Híbrido",
      capacity: "350 baterias/mês",
      contact: "(51) 3100-7890",
      coordinates: { lat: -30.0346, lng: -51.2177 }
    },
    {
      id: 6,
      name: "NorthBattery Manaus",
      address: "Av. Eduardo Ribeiro, 650",
      city: "Manaus",
      state: "AM",
      type: "Reaproveitamento",
      capacity: "150 baterias/mês",
      contact: "(92) 3300-2345",
      coordinates: { lat: -3.1190, lng: -60.0217 }
    }
  ];

  // Processo de reciclagem atual
  const recyclingProcess: ProcessStep[] = [
    {
      id: 1,
      title: "Coleta",
      description: "Retirada das baterias nos pontos de coleta ou domicílio",
      icon: "🚚",
      duration: "1-2 dias"
    },
    {
      id: 2,
      title: "Triagem",
      description: "Classificação por tipo, estado e potencial de reuso",
      icon: "🔍",
      duration: "2-3 horas"
    },
    {
      id: 3,
      title: "Desmontagem",
      description: "Separação segura dos componentes e materiais",
      icon: "🔧",
      duration: "3-4 horas"
    },
    {
      id: 4,
      title: "Processamento",
      description: "Recuperação de materiais valiosos (lítio, cobalto, níquel)",
      icon: "⚗️",
      duration: "1-2 semanas"
    },
    {
      id: 5,
      title: "Reaproveitamento",
      description: "Criação de novas baterias ou sistemas de energia",
      icon: "♻️",
      duration: "2-4 semanas"
    }
  ];

  const filterTypes = ['Todos', 'Reciclagem', 'Reaproveitamento', 'Híbrido'];

  const filteredPoints = selectedFilter === 'Todos' 
    ? collectionPoints 
    : collectionPoints.filter(point => point.type === selectedFilter);

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Reciclagem': return 'bg-red-500/20 text-red-300 border-red-400/30';
      case 'Reaproveitamento': return 'bg-green-500/20 text-green-300 border-green-400/30';
      case 'Híbrido': return 'bg-blue-500/20 text-blue-300 border-blue-400/30';
      default: return 'bg-gray-500/20 text-gray-300 border-gray-400/30';
    }
  };

  return (
    <section id="coleta" className="relative w-full min-h-screen bg-gradient-to-br from-slate-900 to-blue-900 py-20">
      {/* Header da seção */}
      <div className="container mx-auto px-8 mb-16">
        <div className="text-center mb-12">
          <h2 className="text-5xl md:text-6xl font-light text-white tracking-wide mb-6">
            Onde Descartar Hoje
          </h2>
          <p className="text-xl text-slate-200 font-light leading-relaxed max-w-3xl mx-auto">
            Encontre os pontos de coleta mais próximos e entenda como funciona o processo atual de reciclagem
          </p>
        </div>

        {/* Filtros */}
        <div className="flex justify-center mb-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-2 border border-white/20">
            <div className="flex gap-2">
              {filterTypes.map((type) => (
                <button
                  key={type}
                  onClick={() => setSelectedFilter(type)}
                  className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                    selectedFilter === type
                      ? 'bg-cyan-500 text-white shadow-lg'
                      : 'text-slate-200 hover:bg-white/10'
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Lista de Pontos de Coleta */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {filteredPoints.map((point: CollectionPoint) => (
            <div 
              key={point.id}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-white/20"
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-lg font-semibold text-white">{point.name}</h3>
                <span className={`text-xs font-medium px-3 py-1 rounded-full border ${getTypeColor(point.type)}`}>
                  {point.type}
                </span>
              </div>
              
              <div className="space-y-2 text-slate-200 text-sm">
                <div className="flex items-center gap-2">
                  <span>📍</span>
                  <span>{point.address}, {point.city} - {point.state}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span>📊</span>
                  <span>{point.capacity}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span>📞</span>
                  <span>{point.contact}</span>
                </div>
              </div>
              
              <button className="w-full mt-4 bg-cyan-500/20 text-cyan-300 py-2 rounded-lg hover:bg-cyan-500/30 transition-colors duration-300 border border-cyan-400/30">
                Ver Detalhes
              </button>
            </div>
          ))}
        </div>

        {/* Estatísticas dos Pontos de Coleta */}
        <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/20 mb-16">
          <h3 className="text-3xl font-light text-white text-center mb-8">
            Cobertura Nacional
          </h3>
          
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center bg-white/5 rounded-xl p-6 border border-white/20">
              <div className="text-3xl mb-2">🏢</div>
              <div className="text-2xl font-bold text-cyan-300 mb-2">{collectionPoints.length}</div>
              <div className="text-slate-300 text-sm">Pontos de Coleta</div>
            </div>
            
            <div className="text-center bg-white/5 rounded-xl p-6 border border-white/20">
              <div className="text-3xl mb-2">🗺️</div>
              <div className="text-2xl font-bold text-green-300 mb-2">{new Set(collectionPoints.map(p => p.state)).size}</div>
              <div className="text-slate-300 text-sm">Estados Cobertos</div>
            </div>
            
            <div className="text-center bg-white/5 rounded-xl p-6 border border-white/20">
              <div className="text-3xl mb-2">⚡</div>
              <div className="text-2xl font-bold text-yellow-300 mb-2">
                {collectionPoints.reduce((sum, p) => sum + parseInt(p.capacity.split(' ')[0]), 0)}
              </div>
              <div className="text-slate-300 text-sm">Baterias/Mês</div>
            </div>
            
            <div className="text-center bg-white/5 rounded-xl p-6 border border-white/20">
              <div className="text-3xl mb-2">🎯</div>
              <div className="text-2xl font-bold text-purple-300 mb-2">24h</div>
              <div className="text-slate-300 text-sm">Atendimento</div>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-slate-300 text-sm">
              📞 Central de Atendimento: <span className="text-cyan-300 font-semibold">0800-123-4567</span>
            </p>
            <p className="text-slate-300 text-xs mt-2">
              Encontre o ponto mais próximo ou agende uma coleta domiciliar
            </p>
          </div>
        </div>

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
          <button className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-8 py-4 rounded-full text-lg font-medium hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 hover:scale-105 shadow-2xl hover:shadow-cyan-500/25">
            Descubra Curiosidades →
          </button>
        </div>
      </div>
    </section>
  );
};

export default CollectionPoints;