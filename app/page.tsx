'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { quotes, Quote } from '@/lib/quotes';
import NavigationButton from '@/components/navigationButton';

gsap.registerPlugin(ScrollTrigger);

const patterns = [
  '/background/pattern(1).jpg',
  '/background/pattern(2).jpg',
  '/background/pattern(3).jpg',
  '/background/pattern(4).jpg',
  '/background/pattern(5).jpg',
  '/background/pattern(6).jpg',
  '/background/pattern(7).jpg',
];

export default function Home() {
  const [randomQuote, setRandomQuote] = useState<Quote | null>(null);
  const quoteRef = useRef<HTMLDivElement>(null);

  // Pick a random quote for "Today's Quote"
  useEffect(() => {
    setRandomQuote(quotes[Math.floor(Math.random() * quotes.length)]);
  }, []);

  // GSAP animations
  useEffect(() => {
    if (quoteRef.current) {
      gsap.fromTo(
        quoteRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1.5, ease: 'power3.out' }
      );
    }

    // Scroll-triggered animations
    gsap.utils.toArray<HTMLElement>('.section').forEach((section) => {
      gsap.from(section, {
        scrollTrigger: section,
        opacity: 0,
        y: 100,
        duration: 1.2,
        ease: 'power3.out',
      });
    });
  }, []);

  // Debug: Check if images load
  useEffect(() => {
    patterns.forEach((pattern, index) => {
      const img = new Image();
      img.onload = () => console.log(`✅ Image ${index + 1} loaded: ${pattern}`);
      img.onerror = () => console.error(`❌ Image ${index + 1} failed: ${pattern}`);
      img.src = pattern;
    });
  }, []);

  return (
    <div className="relative min-h-screen overflow-y-hidden">
      {/* Multi-image background using img elements */}
      <div className="absolute inset-0 flex">
        {patterns.map((image, index) => (
          <div key={index} className="flex-1 h-full relative overflow-hidden">
            <img
              src={image}
              alt=""
              className="w-full h-full object-cover opacity-40"
              style={{ minHeight: '100vh' }}
            />
          </div>
        ))}
      </div>
      
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>

      <div className='relative z-10 p-8 text-center'>
        <h1 className="text-5xl text-red-400 sm:text-6xl font-bold mb-6 mt-20">
        Demon Slayer Quotes
        </h1>
        
        {/* Debug info - Remove this once working */}
        <div className="bg-white/10 p-4 mb-4 rounded">
          <p className="text-white text-sm">
            Multi-image background should now be visible
          </p>
        </div>

        {/* Hero Section */}
        <section className="flex flex-col items-center justify-center mt-20">
          {randomQuote && (
            <div
              ref={quoteRef}
              className="p-6 text-white bg-gradient-to-b from-red-900 via-red-600 to-black rounded-2xl box-shadow-xl max-w-xl"
            >
              <p className="text-2xl italic mb-4 opacity-90">"{randomQuote.text}"</p>
              <span className="text-lg opacity-80">— {randomQuote.author}</span>
            </div>
          )}
          
          <NavigationButton />
        </section>
      </div>
    </div>
  );
}