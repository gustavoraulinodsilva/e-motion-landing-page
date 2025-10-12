"use client";

import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Dados das eras da mobilidade organizados cronologicamente
const mobilityEras = [
  {
    id: 1,
    title: "Pioneiros",
    subtitle: "1885-1910",
    description: "Os primeiros passos da mobilidade motorizada",
    images: ["/images/arkadiusz-serafinski-benz-patent-motorwagen-01.jpg"],
    color: "from-amber-900 to-orange-800",
    icon: "🏛️",
    facts: ["Primeiro automóvel: 1885", "16 km/h velocidade máxima", "Motor a gasolina"]
  },
  {
    id: 2,
    title: "Era Industrial",
    subtitle: "1910-1960",
    description: "Produção em massa e popularização",
    images: [
      "/images/wp6247892-ford-model-t-wallpapers.jpg",
      "/images/fordmodelt.jpg",
      "/images/wp1845368-volkswagen-beetle-wallpapers.jpg"
    ],
    color: "from-slate-700 to-gray-800",
    icon: "🏭",
    facts: ["Ford Model T: 15 milhões produzidos", "Linha de produção revolucionária", "Automóvel para as massas"]
  },
  {
    id: 3,
    title: "Era Clássica",
    subtitle: "1960-1990",
    description: "Design icônico e performance",
    images: [
      "/images/wp1845361-volkswagen-beetle-wallpapers.jpg",
      "/images/wp3543077-muscle-cars-4k-wallpapers.jpg",
      "/images/wp3543155-muscle-cars-4k-wallpapers.jpg"
    ],
    color: "from-red-800 to-purple-800",
    icon: "🏎️",
    facts: ["Muscle Cars dominam", "Design se torna arte", "Performance é prioridade"]
  },
  {
    id: 4,
    title: "Era Híbrida",
    subtitle: "1990-2010",
    description: "Primeira revolução sustentável",
    images: [
      "/images/toyota_prius_1997_pictures_2_b.jpg",
      "/images/toyota_prius_1997_wallpapers_1.jpg"
    ],
    color: "from-green-700 to-emerald-800",
    icon: "🌱",
    facts: ["Toyota Prius: pioneiro híbrido", "Consciência ambiental cresce", "Eficiência energética"]
  },
  {
    id: 5,
    title: "Era Elétrica",
    subtitle: "2010-Presente",
    description: "Revolução da mobilidade sustentável",
    images: [
      "/images/2010-tesla-roadster-sport-instrumented-test-car-and-driver-photo-318207-s-original.jpg",
      "/images/2008-tesla-roadster-photo-160790-s-original.jpg",
      "/images/bydwallpaper.jpg",
      "/images/bydwallpaperdois.jpg"
    ],
    color: "from-blue-600 to-cyan-600",
    icon: "⚡",
    facts: ["Tesla revoluciona mercado", "Baterias íon-lítio", "Logística reversa essencial"]
  }
];

export default function HeroEvolutionShowcase() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [currentEra, setCurrentEra] = useState(0);
  const [currentImageInEra, setCurrentImageInEra] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);


  // Sistema de apresentação automática
  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      const currentEraData = mobilityEras[currentEra];
      const totalImagesInEra = currentEraData.images.length;

      if (currentImageInEra < totalImagesInEra - 1) {
        // Próxima imagem da era atual
        setCurrentImageInEra(prev => prev + 1);
      } else {
        // Próxima era
        if (currentEra < mobilityEras.length - 1) {
          setCurrentEra(prev => prev + 1);
          setCurrentImageInEra(0);
        } else {
          // Volta ao início
          setCurrentEra(0);
          setCurrentImageInEra(0);
        }
      }
    }, 4000); // 4 segundos por imagem

    return () => clearInterval(interval);
  }, [currentEra, currentImageInEra, isPlaying]);

  // Animações GSAP para transições
  useEffect(() => {
    if (!sectionRef.current) return;
    
    // Animação de entrada inicial
    gsap.fromTo('.era-content', 
      { 
        opacity: 0, 
        y: 50, 
        scale: 0.9 
      },
      { 
        opacity: 1, 
        y: 0, 
        scale: 1,
        duration: 1.2,
        ease: "power2.out"
      }
    );

    // Animação para os controles
    gsap.fromTo('.era-controls', 
      { 
        opacity: 0, 
        y: 30 
      },
      { 
        opacity: 1, 
        y: 0,
        duration: 0.8,
        delay: 0.5,
        ease: "power2.out"
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  // Funções de controle
  const goToEra = (eraIndex: number) => {
    setCurrentEra(eraIndex);
    setCurrentImageInEra(0);
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const goToNextEra = () => {
    if (currentEra < mobilityEras.length - 1) {
      setCurrentEra(currentEra + 1);
      setCurrentImageInEra(0);
    }
  };

  const goToPrevEra = () => {
    if (currentEra > 0) {
      setCurrentEra(currentEra - 1);
      setCurrentImageInEra(0);
    }
  };

  const currentEraData = mobilityEras[currentEra];
  const currentImage = currentEraData.images[currentImageInEra];

  return (
    <section id="inicio"
      ref={sectionRef}
      className="relative w-full min-h-screen bg-neutral-900 overflow-hidden"
    >
      {/* Layout de apresentação automática */}
      <div className="era-content relative w-full h-screen flex items-center justify-center">
        {/* Imagem de fundo da era atual */}
        <div className="absolute inset-0 z-0">
          <Image
            src={currentImage}
            alt={`${currentEraData.title} - ${currentEraData.subtitle}`}
            fill
            className="object-cover transition-opacity duration-1000"
            priority
          />
          <div className={`absolute inset-0 bg-gradient-to-br ${currentEraData.color} opacity-80`}></div>
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        {/* Conteúdo principal da era */}
        <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
          <div className="era-badge mb-6">
            <span className="text-4xl mb-4 block">{currentEraData.icon}</span>
            <h2 className="text-2xl md:text-3xl font-light text-white/80 mb-2">
              {currentEraData.subtitle}
            </h2>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-light text-white tracking-wide mb-6">
            {currentEraData.title}
          </h1>
          
          <p className="text-lg md:text-xl text-white/90 font-light leading-relaxed mb-8 max-w-2xl mx-auto">
            {currentEraData.description}
          </p>

          {/* Fatos interessantes da era */}
          <div className="facts-container mb-8">
            <div className="flex flex-wrap justify-center gap-4">
              {currentEraData.facts.map((fact, index) => (
                <div 
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2 text-white/80 text-sm font-light border border-white/20"
                >
                  {fact}
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={() => {
              const el = document.getElementById("desafio");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            className="inline-flex items-center bg-white/10 backdrop-blur-sm text-white border border-white/30 hover:bg-white hover:text-black px-8 py-3 rounded-full transition-all duration-300 font-medium hover:scale-105"
          >
            {currentEra === mobilityEras.length - 1 ? 'Descobrir Logística Reversa' : 'Explorar História'}
            <span className="ml-2">→</span>
          </button>
        </div>

        {/* Controles de apresentação */}
        <div className="era-controls absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30">
          <div className="flex items-center space-x-6 bg-black/20 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20">
            {/* Botão anterior */}
            <button
              onClick={goToPrevEra}
              disabled={currentEra === 0}
              className="text-white/60 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
              aria-label="Era anterior"
            >
              ←
            </button>

            {/* Play/Pause */}
            <button
              onClick={togglePlayPause}
              className="text-white hover:text-white/80 transition-colors"
              aria-label={isPlaying ? 'Pausar' : 'Reproduzir'}
            >
              {isPlaying ? '⏸️' : '▶️'}
            </button>

            {/* Indicadores de era */}
            <div className="flex space-x-2">
              {mobilityEras.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToEra(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentEra 
                      ? 'bg-white scale-125' 
                      : 'bg-white/40 hover:bg-white/60'
                  }`}
                  aria-label={`Ir para era ${index + 1}`}
                />
              ))}
            </div>

            {/* Botão próximo */}
            <button
              onClick={goToNextEra}
              disabled={currentEra === mobilityEras.length - 1}
              className="text-white/60 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
              aria-label="Próxima era"
            >
              →
            </button>
          </div>
        </div>

        {/* Indicador de progresso da imagem atual */}
        {currentEraData.images.length > 1 && (
          <div className="absolute bottom-24 left-1/2 transform -translate-x-1/2 z-30">
            <div className="flex space-x-1">
              {currentEraData.images.map((_, index) => (
                <div
                  key={index}
                  className={`w-8 h-1 rounded-full transition-all duration-300 ${
                    index === currentImageInEra 
                      ? 'bg-white' 
                      : 'bg-white/30'
                  }`}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
