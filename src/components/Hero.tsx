"use client";

import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import heroData from "../data/hero.json";

interface HeroImage {
  src: string;
  alt: string;
}

const hero = heroData as unknown as { title?: string; subtitle?: string; images: HeroImage[] };

// Use imagens do JSON (fallback para array vazio se não existir)
const carouselData = (hero.images || []).map((img, idx) => ({
  src: img.src,
  alt: img.alt,
  era: 'Histórico',
  year: '',
  title: hero.title || `Slide ${idx + 1}`,
  subtitle: hero.subtitle || ''
}));

export default function HeroCarousel() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const slidesRef = useRef<(HTMLDivElement | null)[]>([]);

  // Carousel automático
  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselData.length);
    }, 4000); // Troca a cada 4 segundos

    return () => clearInterval(interval);
  }, [isPlaying]);

  // Animações GSAP para transições de slides
  useEffect(() => {
    if (!sectionRef.current) return;

    // Animação de entrada inicial
    gsap.fromTo('.hero-content', 
      { 
        opacity: 0, 
        y: 50 
      },
      { 
        opacity: 1, 
        y: 0,
        duration: 1.5,
        ease: "power2.out",
        delay: 0.5
      }
    );

    // Animação dos slides
    slidesRef.current.forEach((slide, index) => {
      if (!slide) return;
      
      if (index === currentSlide) {
        // Slide ativo - fade in
        gsap.to(slide, {
          opacity: 1,
          scale: 1.02,
          duration: 1,
          ease: "power2.out"
        });
      } else {
        // Slides inativos - fade out
        gsap.to(slide, {
          opacity: 0,
          scale: 1,
          duration: 0.8,
          ease: "power2.inOut"
        });
      }
    });

    // Animação do texto do slide atual
    gsap.fromTo('.slide-text',
      {
        opacity: 0,
        y: 30
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        delay: 0.3,
        ease: "power2.out"
      }
    );

  }, [currentSlide]);

  // Funções de controle
  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselData.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselData.length) % carouselData.length);
  };

  // Swipe handling for mobile
  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }
  };

  const currentData = carouselData[currentSlide];

  return (
    <section 
      id="inicio"
      ref={sectionRef}
      className="relative w-full h-screen bg-neutral-900 overflow-hidden"
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      {/* Carousel de imagens */}
      <div className="absolute inset-0">
        {carouselData.map((item, index) => (
          <div
            key={index}
            ref={(el) => { slidesRef.current[index] = el; }}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            <Image
              src={item.src}
              alt={item.alt}
              fill
              className="object-cover"
              priority={index === 0}
              sizes="100vw"
            />
            {/* Overlay with gradient */}
            <div className="absolute inset-0 bg-linear-to-br from-black/70 via-black/40 to-black/60" />
            
            {/* Era-specific overlay */}
            <div className={`absolute inset-0 ${
              item.era === 'Pioneiros' ? 'bg-amber-900/20' :
              item.era === 'Industrial' ? 'bg-slate-700/20' :
              item.era === 'Clássica' ? 'bg-red-800/20' :
              item.era === 'Performance' ? 'bg-orange-700/20' :
              item.era === 'Híbrida' ? 'bg-green-700/20' :
              item.era === 'Elétrica' ? 'bg-blue-600/20' :
              'bg-cyan-600/20'
            }`} />
          </div>
        ))}
      </div>

      {/* Main content */}
      <div className="hero-content relative z-20 h-full flex items-center justify-center">
        <div className="text-center px-4 max-w-4xl mx-auto">
          {/* Era badge */}
          <div className="slide-text mb-6">
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-white/80 text-sm font-light border border-white/20 mb-4">
              <span className="mr-2">{currentData.year}</span>
              <span className="w-1 h-1 bg-white/40 rounded-full mx-2"></span>
              <span>{currentData.era}</span>
            </div>
          </div>

          {/* Main title */}
          <div className="slide-text">
            <h1 className="text-4xl md:text-7xl font-light text-white tracking-wide mb-4">
              {currentData.title}
            </h1>
            <h2 className="text-xl md:text-3xl font-light text-white/80 mb-8">
              {currentData.subtitle}
            </h2>
          </div>

          {/* Call to action */}
          <div className="slide-text">
            <button
              onClick={() => {
                const el = document.getElementById("desafio");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center bg-white/10 backdrop-blur-sm text-white border border-white/30 hover:bg-white hover:text-black px-8 py-3 rounded-full transition-all duration-300 font-medium hover:scale-105"
            >
              {currentSlide >= carouselData.length - 2 ? 'Descobrir Logística Reversa' : 'Explorar História'}
              <span className="ml-2">→</span>
            </button>
          </div>
        </div>
      </div>

      {/* Desktop controls */}
      <div className="hidden md:block absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30">
        <div className="flex items-center space-x-6 bg-black/20 backdrop-blur-sm rounded-full px-6 py-3 border border-white/10">
          {/* Previous button */}
          <button
            onClick={prevSlide}
            className="text-white/60 hover:text-white transition-colors p-1"
            aria-label="Slide anterior"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Play/Pause */}
          <button
            onClick={togglePlayPause}
            className="text-white hover:text-white/80 transition-colors p-1"
            aria-label={isPlaying ? 'Pausar' : 'Reproduzir'}
          >
            {isPlaying ? (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 9v6m4-6v6" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            )}
          </button>

          {/* Indicators */}
          <div className="flex space-x-2">
            {carouselData.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'bg-white scale-125' 
                    : 'bg-white/40 hover:bg-white/60'
                }`}
                aria-label={`Ir para slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Next button */}
          <button
            onClick={nextSlide}
            className="text-white/60 hover:text-white transition-colors p-1"
            aria-label="Próximo slide"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile controls - Compact bottom controls */}
      <div className="md:hidden absolute bottom-16 left-1/2 transform -translate-x-1/2 z-30">
        <div className="flex items-center space-x-4 bg-black/30 backdrop-blur-sm rounded-full px-4 py-2 border border-white/10">
          {/* Previous */}
          <button
            onClick={prevSlide}
            className="text-white/70 hover:text-white transition-colors p-1"
            aria-label="Anterior"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Play/Pause */}
          <button
            onClick={togglePlayPause}
            className="text-white hover:text-white/80 transition-colors p-1"
            aria-label={isPlaying ? 'Pausar' : 'Reproduzir'}
          >
            {isPlaying ? (
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 9v6m4-6v6" />
              </svg>
            ) : (
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            )}
          </button>

          {/* Current slide info */}
          <div className="text-white/90 text-xs font-light px-2">
            {currentSlide + 1}/{carouselData.length}
          </div>

          {/* Next */}
          <button
            onClick={nextSlide}
            className="text-white/70 hover:text-white transition-colors p-1"
            aria-label="Próximo"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile side progress indicator - Minimal */}
      <div className="md:hidden absolute right-4 top-1/2 transform -translate-y-1/2 z-20">
        <div className="flex flex-col space-y-1">
          {carouselData.map((_, index) => (
            <div
              key={index}
              className={`w-1 h-4 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? 'bg-white shadow-sm' 
                  : index < currentSlide
                  ? 'bg-white/50'
                  : 'bg-white/20'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Mobile bottom progress bar - Enhanced */}
      <div className="md:hidden absolute bottom-0 left-0 w-full">
        {/* Swipe hint for first few seconds */}
        <div className={`absolute bottom-4 left-1/2 transform -translate-x-1/2 transition-opacity duration-1000 ${
          currentSlide < 2 ? 'opacity-70' : 'opacity-0'
        }`}>
          <div className="bg-black/30 backdrop-blur-sm rounded-full px-3 py-1 text-white/70 text-xs font-light border border-white/10">
            ← Deslize para navegar →
          </div>
        </div>
        
        {/* Progress bar */}
        <div className="h-1 bg-white/10">
          <div 
            className="h-full bg-linear-to-r from-cyan-400 to-blue-500 transition-all duration-300 ease-out"
            style={{ 
              width: `${((currentSlide + 1) / carouselData.length) * 100}%`
            }}
          />
        </div>
      </div>

      {/* Desktop bottom progress bar - Animated */}
      <div className="hidden md:block absolute bottom-0 left-0 w-full h-1 bg-white/10">
        <div 
          className="h-full bg-linear-to-r from-cyan-400 to-blue-500 transition-all duration-4000 ease-linear"
          style={{ 
            width: isPlaying ? '100%' : `${((currentSlide + 1) / carouselData.length) * 100}%`,
            transition: isPlaying ? 'width 4s linear' : 'width 0.3s ease'
          }}
        />
      </div>

      {/* Mobile-specific responsive adjustments */}
      <style jsx>{`
        @media (max-width: 768px) {
          .slide-text h1 {
            font-size: 2.5rem;
          }
          .slide-text h2 {
            font-size: 1.25rem;
          }
        }
      `}</style>
    </section>
  );
}