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
    <main className="min-h-screen text-center text-white bg-black">
      {/* Hero Section */}
      <section className="section h-screen flex flex-col items-center justify-center">
        <h1 className="text-5xl sm:text-6xl font-bold mb-6 tracking-wider">
          Demon Slayer Quotes
        </h1>
        {randomQuote && (
          <div
            ref={quoteRef}
            className="p-6 bg-gradient-to-b from-red-900 via-black to-black rounded-2xl shadow-xl max-w-xl"
          >
            <p className="text-2xl italic mb-4">"{randomQuote.text}"</p>
            <span className="text-lg opacity-80">— {randomQuote.author}</span>
          </div>
        )}
      </section>

      {/* Katana Divider */}
      <KatanaDivider />

      {/* Character Highlight */}
      <section className="section h-screen flex flex-col items-center justify-center bg-gradient-to-b from-black via-red-950 to-black">
        <h2 className="text-4xl mb-4">Character Highlight</h2>
        <div className="p-4 bg-black/40 border border-red-800 rounded-xl max-w-md">
          <p className="text-lg">🔥 Kyojuro Rengoku — "Set your heart ablaze."</p>
        </div>
      </section>

      {/* Katana Divider */}
      <KatanaDivider />

      {/* Quote Archive */}
      <section className="section min-h-screen flex flex-col items-center justify-center">
        <h2 className="text-4xl mb-6">Quote Archive</h2>
        <div className="max-h-[300px] overflow-y-auto border border-red-700 rounded-xl p-4 w-11/12 max-w-2xl">
          {quotes.map((q, i) => (
            <p key={i} className="mb-3">
              <span className="italic text-red-300">"{q.text}"</span> — {q.author}
            </p>
          ))}
        </div>
      </section>
    </main>
  );
}