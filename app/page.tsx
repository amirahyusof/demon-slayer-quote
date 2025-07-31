'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { quotes, Quote } from '@/lib/quotes';
import KatanaDivider from '@/components/katanaDivider';

gsap.registerPlugin(ScrollTrigger);

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

  return (
    <main className="min-h-screen text-center bg-gradient-to-b from-black via-red-950 to-black">
      <h1 className="text-5xl text-red-400 sm:text-6xl font-bold mb-6">
        Demon Slayer Quotes
      </h1>
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center mt-10">
        {randomQuote && (
          <div
            ref={quoteRef}
            className="p-6 bg-gradient-to-b from-red-900 via-black to-black rounded-2xl shadow-xl max-w-xl"
          >
            <p className="text-2xl italic mb-4">"{randomQuote.text}"</p>
            <span className="text-lg opacity-80">— {randomQuote.author}</span>
          </div>
        )}
        
        <div className='flex flex-row gap-4 mt-4'>
          <button> Random Quote </button>
          <button> Favourite Quote </button>
          <button> Song </button>
        </div>
      </section>
    </main>
  );
}