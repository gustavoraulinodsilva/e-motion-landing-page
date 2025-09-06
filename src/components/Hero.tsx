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
      className="relative w-full h-screen bg-white overflow-hidden"
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
              className="w-screen h-screen object-cover flex-shrink-0"
              style={{ scrollSnapAlign: "center" }}
            />
            {/* Overlay gradiente preto */}
            <div
              className="absolute inset-0 z-10 pointer-events-none"
              style={{
                background:
                  "linear-gradient(180deg, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.0) 100%)",
                opacity: 0.7,
              }}
            />
            {/* Texto sobreposto */}
            <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center z-20 px-4">
              <h2 className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg mb-4 text-center">
                {idx === 0
                  ? "A evolução dos carros"
                  : idx === images.length - 1
                  ? "O futuro é elétrico"
                  : ""}
              </h2>
              {idx === 0 && (
                <p className="text-lg md:text-2xl text-white max-w-2xl text-center drop-shadow">
                  Do motor a combustão aos elétricos: conheça a história e o futuro
                  da mobilidade!
                </p>
              )}
              {idx === images.length - 1 && (
                <p className="text-lg md:text-2xl text-white max-w-2xl text-center drop-shadow">
                  Descubra como os carros elétricos estão mudando o mundo!
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
