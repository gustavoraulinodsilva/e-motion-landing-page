"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const images = [
  "/images/arkadiusz-serafinski-benz-patent-motorwagen-01.jpg",
  "/images/wp6247892-ford-model-t-wallpapers.jpg",
  "/images/fordmodelt.jpg",
  "/images/wp1845368-volkswagen-beetle-wallpapers.jpg",
  "/images/wp1845361-volkswagen-beetle-wallpapers.jpg",
  "/images/wp3543077-muscle-cars-4k-wallpapers.jpg",
  "/images/wp3543155-muscle-cars-4k-wallpapers.jpg",
  "/images/toyota_prius_1997_pictures_2_b.jpg",
  "/images/toyota_prius_1997_wallpapers_1.jpg",
  "/images/2010-tesla-roadster-sport-instrumented-test-car-and-driver-photo-318207-s-original.jpg",
  "/images/2008-tesla-roadster-photo-160790-s-original.jpg",
  "/images/bydwallpaper.jpg",
  "/images/bydwallpaperdois.jpg",
];

export default function HeroHorizontalScroll() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imagesWrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !imagesWrapperRef.current) return;

    const imagesWrapper = imagesWrapperRef.current;
    const totalWidth = imagesWrapper.scrollWidth;
    const viewportWidth = window.innerWidth;
    const scrollable = totalWidth - viewportWidth;

    gsap.to(imagesWrapper, {
      x: () => `-${scrollable}px`,
      ease: "none",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: () => `+=${scrollable}`,
        scrub: 1,
        pin: true,
        anticipatePin: 1,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full h-screen bg-neutral-50 overflow-hidden"
    >
      <div
        ref={imagesWrapperRef}
        className="flex space-x-0 h-screen"
        style={{ width: `${images.length * 100}vw` }}
      >
        {images.map((src, idx) => (
          <div key={idx} className="relative w-screen h-screen">
            <Image
              src={src}
              alt={`segmento-${idx}`}
              width={1920}
              height={1080}
              className={`w-screen h-screen object-cover flex-shrink-0 transition-all duration-700 ${
                idx === images.length - 1 
                  ? "grayscale-0" 
                  : "grayscale hover:grayscale-0"
              }`}
              style={{ scrollSnapAlign: "center" }}
            />
            <div 
              className={`absolute inset-0 z-10 ${
                idx === images.length - 1 
                  ? "bg-gradient-to-b from-black/70 via-black/20 to-black/40" 
                  : "bg-black/30"
              }`}
            ></div>
            <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center z-20 px-8">
              {idx === 0 && (
                <div className="text-center space-y-4 max-w-2xl">
                  <h1 className="text-5xl md:text-6xl font-light text-white tracking-wide">
                    Evolução
                  </h1>
                  <p className="text-lg text-white/80 font-light leading-relaxed">
                    A jornada da mobilidade através dos tempos
                  </p>
                  <div className="pt-8">
                    <button
                      onClick={() => {
                        const el = document.getElementById("historia-carros");
                        if (el) el.scrollIntoView({ behavior: "smooth" });
                      }}
                      className="inline-flex items-center text-white border border-white/30 hover:bg-white hover:text-black px-6 py-3 transition-all duration-300 font-light tracking-wide"
                    >
                      Explorar
                      <span className="ml-2">→</span>
                    </button>
                  </div>
                </div>
              )}
              {idx === images.length - 1 && (
                <div className="text-center space-y-4 max-w-2xl">
                  <h1 className="text-5xl md:text-6xl font-light text-white tracking-wide">
                    Futuro
                  </h1>
                  <p className="text-lg text-white/80 font-light leading-relaxed">
                    A era da mobilidade elétrica e sustentável
                  </p>
                  <div className="pt-8">
                    <button
                      onClick={() => {
                        const el = document.getElementById("carros-eletricos");
                        if (el) el.scrollIntoView({ behavior: "smooth" });
                      }}
                      className="inline-flex items-center text-white border border-white/30 hover:bg-white hover:text-black px-6 py-3 transition-all duration-300 font-light tracking-wide"
                    >
                      Descobrir
                      <span className="ml-2">→</span>
                    </button>
                  </div>
                </div>
              )}
            </div>
            {(idx === 0 || idx === images.length - 1) && (
              <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30">
                <div className="w-12 h-px bg-white/50"></div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
