'use client';

import Challenge from '@/components/Challenge';
import CollectionPoints from '@/components/CollectionPoints';
import Curiosities from '@/components/Curiosities';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Solution from '@/components/Solution';
import React from 'react';

export default function Home() {
  return (
    
    <div className="min-h-screen">
      <Header/>
      <main>
        <div className="min-h-screen">
          <Hero/>
          <Challenge/>
          <Solution/>
          <CollectionPoints/>
          <Curiosities/>
        </div>
      </main>
      <Footer/>
    </div>
  );
}
