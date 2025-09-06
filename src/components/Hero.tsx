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
          <Image
            key={idx}
            src={src}
            alt={`segmento-${idx}`}
            width={1920}
            height={1080}
            className="w-screen h-screen object-cover flex-shrink-0"
            style={{ scrollSnapAlign: "center" }}
          />
        ))}
      </div>
    </section>
  );
}
