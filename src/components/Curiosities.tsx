"use client";

import React, { useState } from "react";
import curiositiesData from "../data/curiosities.json";

// Tipagem para o JSON de curiosidades
interface CuriositiesData {
  calculatorDefaults: {
    batteryCapacity: number;
    batteryAge: number;
    secondLifeYears: number;
    recyclingEfficiency: number;
  };
  quizQuestions: QuizQuestion[];
  curiosities: Curiosity[];
}

const data = curiositiesData as unknown as CuriositiesData;

// Interface para definir o tipo das perguntas do quiz
interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  funFact: string;
}

// Interface para curiosidades
interface Curiosity {
  id: number;
  title: string;
  description: string;
  icon: string;
  category: 'Tecnologia' | 'Economia' | 'Sustentabilidade' | 'Inovação';
  value: string;
}

const Curiosities: React.FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);
  const [quizCompleted, setQuizCompleted] = useState<boolean>(false);
  const [calculatorValues, setCalculatorValues] = useState(() => ({
    batteryCapacity: data.calculatorDefaults.batteryCapacity,
    batteryAge: data.calculatorDefaults.batteryAge,
    secondLifeYears: data.calculatorDefaults.secondLifeYears,
    recyclingEfficiency: data.calculatorDefaults.recyclingEfficiency
  }));

  // Carrega perguntas e curiosidades a partir do JSON externo
  const quizQuestions: QuizQuestion[] = data.quizQuestions;
  const curiosities: Curiosity[] = data.curiosities;

  const handleAnswerSelect = (answerIndex: number) => {
    setSelectedAnswer(answerIndex);
    setShowResult(true);
    
    if (answerIndex === quizQuestions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }

    setTimeout(() => {
      if (currentQuestion < quizQuestions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedAnswer(null);
        setShowResult(false);
      } else {
        setQuizCompleted(true);
      }
    }, 3000);
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setScore(0);
    setQuizCompleted(false);
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Tecnologia': return 'bg-blue-500/20 text-blue-300 border-blue-400/30';
      case 'Economia': return 'bg-green-500/20 text-green-300 border-green-400/30';
      case 'Sustentabilidade': return 'bg-emerald-500/20 text-emerald-300 border-emerald-400/30';
      case 'Inovação': return 'bg-purple-500/20 text-purple-300 border-purple-400/30';
      default: return 'bg-gray-500/20 text-gray-300 border-gray-400/30';
    }
  };

  const getScoreMessage = () => {
    const percentage = (score / quizQuestions.length) * 100;
    if (percentage >= 80) return { emoji: "🏆", title: "Expert em Baterias!", message: "Você conhece muito sobre o futuro da mobilidade elétrica!" };
    if (percentage >= 60) return { emoji: "🎯", title: "Muito Bom!", message: "Você tem conhecimentos sólidos sobre padronização de baterias!" };
    if (percentage >= 40) return { emoji: "📚", title: "Bom Início!", message: "Continue aprendendo sobre essa tecnologia revolucionária!" };
    return { emoji: "🌱", title: "Iniciante!", message: "Há muito para descobrir sobre baterias padronizadas!" };
  };

  // Calculadora de Economia Circular (estimativas simplificadas)
  const calculateCircularEconomy = () => {
    const { batteryCapacity, batteryAge, secondLifeYears, recyclingEfficiency } = calculatorValues;

    // Capacidade remanescente após a primeira vida (usar coeficiente conservador de 75%)
    const remainingCapacity = batteryCapacity * 0.75; // kWh

    // Energia total disponível na segunda vida (kWh) = capacidade remanescente * ciclos por ano * anos
    // Usamos 300 ciclos/ano como aproximação de ciclos úteis por ano (aprox. 0.8 ciclos/dia * 365)
    const CYCLES_PER_YEAR = 300;
    const secondLifeEnergy = remainingCapacity * secondLifeYears * CYCLES_PER_YEAR; // kWh

    // Valor estimado dos materiais recuperados (R$) por kWh
    const materialValue = batteryCapacity * 150 * (recyclingEfficiency / 100); // R$ 150/kWh é uma estimativa

    // Quantas residências poderiam ser alimentadas por 1 ano com a energia da segunda vida
    // Assumimos consumo médio anual por residência: 30 kWh/dia * 365 = 10.950 kWh/ano (valor conservador usado no site)
    const AVG_HOUSE_ANNUAL_KWH = 30 * 365;
    const housesSecondLife = Math.floor(secondLifeEnergy / AVG_HOUSE_ANNUAL_KWH);

    // CO2 evitado (kg) - estimativa muito simplificada: cada kWh distribuído evita ~0.5 kg CO2 (varia por matriz energética)
    const co2Avoided = Math.round(secondLifeEnergy * 0.5);

    return {
      remainingCapacity: Math.round(remainingCapacity),
      secondLifeEnergy: Math.round(secondLifeEnergy),
      materialValue: Math.round(materialValue),
      housesSecondLife,
      co2Avoided,
      totalLifetime: batteryAge + secondLifeYears
    };
  };

  return (
    <section id="curiosidades" className="relative w-full min-h-screen bg-linear-to-br from-slate-900 to-blue-900 py-20">
      {/* Header da seção */}
      <div className="container mx-auto px-8 mb-16">
        <div className="text-center mb-12">
          <h2 className="text-5xl md:text-6xl font-light text-white tracking-wide mb-6">
            Curiosidades & Quiz 🧠
          </h2>
          <p className="text-xl text-slate-200 font-light leading-relaxed max-w-4xl mx-auto">
            Teste seus conhecimentos sobre logística reversa e descubra fatos surpreendentes 
            sobre a economia circular de baterias de veículos elétricos
          </p>
        </div>

        {/* Quiz Interativo */}
        <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl border border-white/20 mb-16">
          <h3 className="text-3xl font-light text-white text-center mb-8">
            🎮 Quiz: Quanto Você Sabe Sobre Logística Reversa?
          </h3>

          {!quizCompleted ? (
            <div className="max-w-4xl mx-auto">
              {/* Progress Bar */}
              <div className="mb-8">
                <div className="flex justify-between text-slate-300 text-sm mb-2">
                  <span>Pergunta {currentQuestion + 1} de {quizQuestions.length}</span>
                  <span>Pontuação: {score}/{currentQuestion + (showResult ? 1 : 0)}</span>
                </div>
                <div className="w-full bg-slate-700 rounded-full h-2">
                  <div 
                    className="bg-linear-to-r from-cyan-400 to-blue-400 h-2 rounded-full transition-all duration-500"
                    style={{ width: `${((currentQuestion + 1) / quizQuestions.length) * 100}%` }}
                  ></div>
                </div>
              </div>

              {/* Pergunta */}
              <div className="bg-white/5 rounded-2xl p-8 mb-8 border border-white/20">
                <h4 className="text-xl text-white font-semibold mb-6 text-center">
                  {quizQuestions[currentQuestion].question}
                </h4>

                {/* Opções */}
                <div className="grid md:grid-cols-2 gap-4">
                  {quizQuestions[currentQuestion].options.map((option, index) => (
                    <button
                      key={index}
                      onClick={() => !showResult && handleAnswerSelect(index)}
                      disabled={showResult}
                      className={`p-4 rounded-xl text-left transition-all duration-300 border-2 ${
                        showResult
                          ? index === quizQuestions[currentQuestion].correctAnswer
                            ? 'bg-green-500/20 border-green-400 text-green-300'
                            : index === selectedAnswer
                            ? 'bg-red-500/20 border-red-400 text-red-300'
                            : 'bg-white/5 border-white/20 text-slate-300'
                          : selectedAnswer === index
                          ? 'bg-cyan-500/20 border-cyan-400 text-cyan-300'
                          : 'bg-white/5 border-white/20 text-slate-200 hover:bg-white/10 hover:border-cyan-400/50'
                      }`}
                    >
                      <span className="font-semibold">{String.fromCharCode(65 + index)})</span> {option}
                    </button>
                  ))}
                </div>

                {/* Resultado da pergunta */}
                {showResult && (
                  <div className="mt-6 p-6 bg-white/10 rounded-xl border border-white/20">
                    <div className="text-center mb-4">
                      {selectedAnswer === quizQuestions[currentQuestion].correctAnswer ? (
                        <div className="text-green-300 text-xl">✅ Correto!</div>
                      ) : (
                        <div className="text-red-300 text-xl">❌ Incorreto!</div>
                      )}
                    </div>
                    <p className="text-slate-200 text-center mb-3">
                      {quizQuestions[currentQuestion].explanation}
                    </p>
                    <div className="text-cyan-300 text-center font-medium">
                      {quizQuestions[currentQuestion].funFact}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ) : (
            /* Resultado Final */
            <div className="max-w-2xl mx-auto text-center">
              <div className="bg-white/10 rounded-2xl p-8 border border-white/20">
                <div className="text-6xl mb-4">{getScoreMessage().emoji}</div>
                <h4 className="text-2xl text-white font-semibold mb-4">
                  {getScoreMessage().title}
                </h4>
                <p className="text-slate-200 mb-6">
                  Você acertou {score} de {quizQuestions.length} perguntas!
                </p>
                <p className="text-cyan-300 mb-8">
                  {getScoreMessage().message}
                </p>
                <button
                  onClick={resetQuiz}
                  className="bg-linear-to-r from-cyan-500 to-blue-500 text-white px-8 py-3 rounded-full font-medium hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 hover:scale-105 shadow-lg"
                >
                  🔄 Fazer Quiz Novamente
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Grid de Curiosidades */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {curiosities.map((curiosity: Curiosity) => (
            <div 
              key={curiosity.id}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-white/20 group"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="text-4xl">{curiosity.icon}</div>
                <span className={`text-xs font-medium px-3 py-1 rounded-full border ${getCategoryColor(curiosity.category)}`}>
                  {curiosity.category}
                </span>
              </div>
              
              <div className="text-center mb-4">
                <div className="text-3xl font-bold text-cyan-300 mb-2 group-hover:scale-110 transition-transform duration-300">
                  {curiosity.value}
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">
                  {curiosity.title}
                </h3>
              </div>
              
              <p className="text-slate-200 text-sm leading-relaxed">
                {curiosity.description}
              </p>
            </div>
          ))}
        </div>

        {/* Calculadora de Economia Circular */}
        <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl border border-white/20">
          <h3 className="text-3xl font-light text-white text-center mb-8">
            🔄 Calculadora: Economia Circular de Baterias de VE
          </h3>
          <p className="text-center text-slate-200 mb-8 max-w-3xl mx-auto">
            Descubra o impacto real da Hierarquia de Valor na logística reversa de baterias
          </p>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Controles */}
            <div className="space-y-6">
              <div>
                <label className="block text-white font-medium mb-2">
                  Capacidade da Bateria (kWh)
                </label>
                <input
                  type="range"
                  min="40"
                  max="150"
                  value={calculatorValues.batteryCapacity}
                  onChange={(e) => setCalculatorValues({
                    ...calculatorValues,
                    batteryCapacity: parseInt(e.target.value)
                  })}
                  className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer slider"
                />
                <div className="text-cyan-300 font-bold text-xl text-center mt-2">
                  {calculatorValues.batteryCapacity} kWh
                </div>
              </div>

              <div>
                <label className="block text-white font-medium mb-2">
                  Primeira Vida no Veículo (anos)
                </label>
                <input
                  type="range"
                  min="5"
                  max="15"
                  value={calculatorValues.batteryAge}
                  onChange={(e) => setCalculatorValues({
                    ...calculatorValues,
                    batteryAge: parseInt(e.target.value)
                  })}
                  className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer slider"
                />
                <div className="text-green-300 font-bold text-xl text-center mt-2">
                  {calculatorValues.batteryAge} anos
                </div>
              </div>

              <div>
                <label className="block text-white font-medium mb-2">
                  Segunda Vida (anos)
                </label>
                <input
                  type="range"
                  min="3"
                  max="12"
                  value={calculatorValues.secondLifeYears}
                  onChange={(e) => setCalculatorValues({
                    ...calculatorValues,
                    secondLifeYears: parseInt(e.target.value)
                  })}
                  className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer slider"
                />
                <div className="text-purple-300 font-bold text-xl text-center mt-2">
                  {calculatorValues.secondLifeYears} anos
                </div>
              </div>

              <div>
                <label className="block text-white font-medium mb-2">
                  Eficiência da Reciclagem (%)
                </label>
                <input
                  type="range"
                  min="60"
                  max="95"
                  value={calculatorValues.recyclingEfficiency}
                  onChange={(e) => setCalculatorValues({
                    ...calculatorValues,
                    recyclingEfficiency: parseInt(e.target.value)
                  })}
                  className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer slider"
                />
                <div className="text-orange-300 font-bold text-xl text-center mt-2">
                  {calculatorValues.recyclingEfficiency}%
                </div>
              </div>
            </div>

            {/* Resultados */}
            <div className="space-y-4">
              <div className="bg-linear-to-r from-blue-500/10 to-cyan-500/10 rounded-2xl p-4 border border-blue-400/20">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">⏱️</span>
                    <span className="text-white font-medium">Vida Total:</span>
                  </div>
                  <div className="text-cyan-300 font-bold text-lg">
                    {calculateCircularEconomy().totalLifetime} anos
                  </div>
                </div>
              </div>

              <div className="bg-linear-to-r from-green-500/10 to-teal-500/10 rounded-2xl p-4 border border-green-400/20">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">🔋</span>
                    <span className="text-white font-medium">Segunda Vida:</span>
                  </div>
                  <div className="text-green-300 font-bold text-lg">
                    {calculateCircularEconomy().remainingCapacity} kWh
                  </div>
                </div>
              </div>

              <div className="bg-linear-to-r from-purple-500/10 to-pink-500/10 rounded-2xl p-4 border border-purple-400/20">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">🏠</span>
                    <span className="text-white font-medium">Casas Alimentadas:</span>
                  </div>
                  <div className="text-purple-300 font-bold text-lg">
                    {calculateCircularEconomy().housesSecondLife} unidades
                  </div>
                </div>
              </div>

              <div className="bg-linear-to-r from-yellow-500/10 to-orange-500/10 rounded-2xl p-4 border border-yellow-400/20">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">💰</span>
                    <span className="text-white font-medium">Valor Materiais:</span>
                  </div>
                  <div className="text-yellow-300 font-bold text-lg">
                    R$ {calculateCircularEconomy().materialValue.toLocaleString()}
                  </div>
                </div>
              </div>

              <div className="bg-linear-to-r from-green-600/10 to-blue-600/10 rounded-2xl p-4 border border-green-500/20">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">🌱</span>
                    <span className="text-white font-medium">CO₂ Evitado:</span>
                  </div>
                  <div className="text-green-400 font-bold text-lg">
                    {calculateCircularEconomy().co2Avoided.toLocaleString()} kg
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Explicação da Hierarquia */}
          <div className="mt-12 bg-linear-to-r from-slate-800/50 to-blue-800/50 rounded-2xl p-6 border border-slate-600/30">
            <h4 className="text-lg font-semibold text-white text-center mb-4">
              🔄 Hierarquia de Valor em Ação
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-center">
              <div className="bg-blue-500/10 p-3 rounded-lg border border-blue-400/20">
                <div className="text-xl mb-1">🔄</div>
                <div className="text-blue-300 font-bold text-xs">REUTILIZAÇÃO</div>
                <div className="text-slate-300 text-xs mt-1">Outro veículo</div>
              </div>
              <div className="bg-green-500/10 p-3 rounded-lg border border-green-400/20">
                <div className="text-xl mb-1">🔧</div>
                <div className="text-green-300 font-bold text-xs">REMANUFATURA</div>
                <div className="text-slate-300 text-xs mt-1">Reparo módulos</div>
              </div>
              <div className="bg-purple-500/10 p-3 rounded-lg border border-purple-400/20">
                <div className="text-xl mb-1">🏠</div>
                <div className="text-purple-300 font-bold text-xs">SEGUNDA VIDA</div>
                <div className="text-slate-300 text-xs mt-1">Armazenamento</div>
              </div>
              <div className="bg-orange-500/10 p-3 rounded-lg border border-orange-400/20">
                <div className="text-xl mb-1">♻️</div>
                <div className="text-orange-300 font-bold text-xs">RECICLAGEM</div>
                <div className="text-slate-300 text-xs mt-1">Recuperar materiais</div>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center bg-linear-to-r from-green-500/20 to-blue-500/20 rounded-2xl p-6 border border-green-400/30">
            <div className="text-white font-semibold text-lg mb-2">
              🔄 Economia Circular em Ação
            </div>
            <p className="text-slate-200 text-sm mb-6">
              A Hierarquia de Valor maximiza o aproveitamento de cada bateria através de <span className="text-green-300 font-bold">múltiplas vidas úteis</span>, 
              criando um sistema sustentável que pode alcançar <span className="text-blue-300 font-bold">US$ 4,2 bilhões</span> até 2035!
            </p>
            
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
      </div>
    </section>
  );
};

export default Curiosities;
