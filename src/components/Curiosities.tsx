'use client';

import React, { useState } from "react";

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
  const [calculatorValues, setCalculatorValues] = useState({
    batteryCapacity: 75,
    houseConsumption: 30,
    carConsumption: 18
  });

  // Perguntas do Quiz
  const quizQuestions: QuizQuestion[] = [
    {
      id: 1,
      question: "Quantas baterias a NIO troca por ano na China?",
      options: ["100 mil", "500 mil", "1 milhão", "2 milhões"],
      correctAnswer: 2,
      explanation: "A NIO já realizou mais de 1 milhão de trocas de bateria em suas estações automatizadas!",
      funFact: "🚗 Cada troca leva apenas 3 minutos e é totalmente automatizada!"
    },
    {
      id: 2,
      question: "Por quanto tempo uma bateria de carro elétrico pode alimentar uma casa?",
      options: ["1 dia", "3 dias", "1 semana", "1 mês"],
      correctAnswer: 2,
      explanation: "Uma bateria típica de 75kWh pode alimentar uma casa média por aproximadamente 1 semana!",
      funFact: "🏠 Isso é suficiente para assistir 300 horas de TV ou carregar 15.000 celulares!"
    },
    {
      id: 3,
      question: "Até quando a União Europeia planeja padronizar todos os carregadores?",
      options: ["2024", "2025", "2027", "2030"],
      correctAnswer: 1,
      explanation: "A UE estabeleceu 2025 como prazo para padronização de carregadores USB-C em todos os dispositivos!",
      funFact: "🔌 Isso reduzirá 980 toneladas de lixo eletrônico por ano!"
    },
    {
      id: 4,
      question: "Qual percentual de materiais de uma bateria pode ser reciclado com padronização?",
      options: ["50%", "75%", "90%", "95%"],
      correctAnswer: 3,
      explanation: "Com padronização adequada, é possível reciclar até 95% dos materiais de uma bateria!",
      funFact: "♻️ Isso inclui lítio, cobalto, níquel e até o alumínio da carcaça!"
    },
    {
      id: 5,
      question: "Quantos elementos químicos diferentes existem em uma bateria de VE?",
      options: ["5-8", "10-15", "15-20", "Mais de 20"],
      correctAnswer: 2,
      explanation: "Uma bateria típica contém 15-20 elementos diferentes, incluindo metais raros!",
      funFact: "🧪 Alguns elementos como o cobalto custam mais de $50.000 por tonelada!"
    }
  ];

  // Curiosidades interessantes
  const curiosities: Curiosity[] = [
    {
      id: 1,
      title: "1 Milhão de Trocas por Ano",
      description: "A NIO na China já realizou mais de 1 milhão de trocas de bateria em suas estações automatizadas, revolucionando o conceito de 'reabastecimento' elétrico.",
      icon: "🚗",
      category: "Tecnologia",
      value: "1M+"
    },
    {
      id: 2,
      title: "Energia para 1 Semana",
      description: "Uma bateria de 75kWh pode alimentar uma casa média por 7 dias, demonstrando seu potencial como sistema de backup energético.",
      icon: "🏠",
      category: "Sustentabilidade",
      value: "7 dias"
    },
    {
      id: 3,
      title: "Padronização USB-C até 2025",
      description: "A União Europeia determinou que todos os carregadores sejam USB-C até 2025, reduzindo 980 toneladas de lixo eletrônico anual.",
      icon: "🔌",
      category: "Inovação",
      value: "2025"
    },
    {
      id: 4,
      title: "95% de Reciclagem Possível",
      description: "Com padronização adequada, é possível reciclar até 95% dos materiais de uma bateria, incluindo metais preciosos e terras raras.",
      icon: "♻️",
      category: "Sustentabilidade",
      value: "95%"
    },
    {
      id: 5,
      title: "Cobalto Vale Ouro",
      description: "O cobalto usado em baterias custa mais de $50.000 por tonelada, tornando a reciclagem extremamente lucrativa.",
      icon: "💎",
      category: "Economia",
      value: "$50k/t"
    },
    {
      id: 6,
      title: "15.000 Celulares Carregados",
      description: "Uma bateria de carro elétrico tem energia suficiente para carregar completamente 15.000 smartphones.",
      icon: "📱",
      category: "Tecnologia",
      value: "15k"
    }
  ];

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

  // Calculadora de impacto
  const calculateImpact = () => {
    const { batteryCapacity, houseConsumption, carConsumption } = calculatorValues;
    const houseDays = Math.floor(batteryCapacity / houseConsumption);
    const carRange = Math.floor(batteryCapacity / carConsumption * 100);
    const phoneCharges = Math.floor(batteryCapacity * 200);
    
    return { houseDays, carRange, phoneCharges };
  };

  return (
    <section id="curiosidades" className="relative w-full min-h-screen bg-gradient-to-br from-slate-900 to-blue-900 py-20">
      {/* Header da seção */}
      <div className="container mx-auto px-8 mb-16">
        <div className="text-center mb-12">
          <h2 className="text-5xl md:text-6xl font-light text-white tracking-wide mb-6">
            Curiosidades & Quiz 🧠
          </h2>
          <p className="text-xl text-slate-200 font-light leading-relaxed max-w-3xl mx-auto">
            Teste seus conhecimentos e descubra fatos surpreendentes sobre baterias e padronização
          </p>
        </div>

        {/* Quiz Interativo */}
        <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl border border-white/20 mb-16">
          <h3 className="text-3xl font-light text-white text-center mb-8">
            🎮 Quiz: Quanto Você Sabe Sobre Baterias Padronizadas?
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
                    className="bg-gradient-to-r from-cyan-400 to-blue-400 h-2 rounded-full transition-all duration-500"
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
                  className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-3 rounded-full font-medium hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 hover:scale-105 shadow-lg"
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

        {/* Calculadora Interativa */}
        <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl border border-white/20">
          <h3 className="text-3xl font-light text-white text-center mb-8">
            🧮 Calculadora: Quantos Carros Uma Bateria Reciclada Pode Alimentar?
          </h3>
          
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
                  Consumo da Casa (kWh/dia)
                </label>
                <input
                  type="range"
                  min="10"
                  max="50"
                  value={calculatorValues.houseConsumption}
                  onChange={(e) => setCalculatorValues({
                    ...calculatorValues,
                    houseConsumption: parseInt(e.target.value)
                  })}
                  className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer slider"
                />
                <div className="text-green-300 font-bold text-xl text-center mt-2">
                  {calculatorValues.houseConsumption} kWh/dia
                </div>
              </div>

              <div>
                <label className="block text-white font-medium mb-2">
                  Consumo do Carro (kWh/100km)
                </label>
                <input
                  type="range"
                  min="12"
                  max="25"
                  value={calculatorValues.carConsumption}
                  onChange={(e) => setCalculatorValues({
                    ...calculatorValues,
                    carConsumption: parseInt(e.target.value)
                  })}
                  className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer slider"
                />
                <div className="text-yellow-300 font-bold text-xl text-center mt-2">
                  {calculatorValues.carConsumption} kWh/100km
                </div>
              </div>
            </div>

            {/* Resultados */}
            <div className="space-y-6">
              <div className="bg-white/5 rounded-2xl p-6 border border-white/20">
                <div className="text-center">
                  <div className="text-4xl mb-2">🏠</div>
                  <div className="text-2xl font-bold text-green-300 mb-2">
                    {calculateImpact().houseDays} dias
                  </div>
                  <div className="text-slate-300 text-sm">
                    Pode alimentar uma casa
                  </div>
                </div>
              </div>

              <div className="bg-white/5 rounded-2xl p-6 border border-white/20">
                <div className="text-center">
                  <div className="text-4xl mb-2">🚗</div>
                  <div className="text-2xl font-bold text-blue-300 mb-2">
                    {calculateImpact().carRange} km
                  </div>
                  <div className="text-slate-300 text-sm">
                    Autonomia para um carro
                  </div>
                </div>
              </div>

              <div className="bg-white/5 rounded-2xl p-6 border border-white/20">
                <div className="text-center">
                  <div className="text-4xl mb-2">📱</div>
                  <div className="text-2xl font-bold text-purple-300 mb-2">
                    {calculateImpact().phoneCharges.toLocaleString()}
                  </div>
                  <div className="text-slate-300 text-sm">
                    Cargas de celular
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-2xl p-6 border border-green-400/30">
            <div className="text-white font-semibold text-lg mb-2">
              💡 Impacto da Padronização
            </div>
            <p className="text-slate-200 text-sm mb-6">
              Com baterias padronizadas, o processo de reciclagem fica <span className="text-green-300 font-bold">80% mais eficiente</span>, 
              permitindo reaproveitar ainda mais energia e materiais para um futuro sustentável!
            </p>
            
            <button className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-8 py-4 rounded-full text-lg font-medium hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 hover:scale-105 shadow-2xl hover:shadow-cyan-500/25">
              Explore o Futuro da Mobilidade →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Curiosities;
