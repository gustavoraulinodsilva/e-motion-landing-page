'use client';

import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import React from 'react';

export default function Home() {
  return (
    
    <div className="min-h-screen">
      <Header/>
      <main>
        <div className="min-h-screen">
          <Hero/>
        </div>
      </main>
      <Footer/>
    </div>
  );
}
