'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { quotes, Quote } from '@/lib/quotes';
import NavigationButton from '@/components/navigationButton';
import QuoteCard from "@/components/QuoteCard"
import FavoritesSection from "@/components/FavouritesSection"
import PlaylistSection from "@/components/PlaylistSection"

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
  const [view, setView] = useState<"quote" | "favorites" | "playlist">("quote")
  const [current, setCurrent] = useState<Quote | null>(null)
  const [favorites, setFavorites] = useState<Quote[]>([])

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

  

  useEffect(() => {
    const stored = localStorage.getItem("demon-favorites")
    if (stored) {
      setFavorites(JSON.parse(stored))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("demon-favorites", JSON.stringify(favorites))
  }, [favorites])

  const getRandomQuote = () => {
    const available = quotes.filter(q => !favorites.some(f => f.id === q.id))
    const rand = available[Math.floor(Math.random() * available.length)]
    setCurrent(rand || null)
  }

  const addToFavorites = (id: number) => {
    const favQuote = quotes.find(q => q.id === id)
    if (favQuote && !favorites.some(f => f.id === id)) {
      setFavorites([...favorites, favQuote])
    }
  }

  useEffect(() => {
    if (view === "quote") getRandomQuote()
  }, [view])

  
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
        
        {/* Hero Section */}
        <main className="min-h-screen px-6 py-10">
          <div className="mt-4">
            {view === "quote" && current && (
              <QuoteCard quote={current} onFavorite={addToFavorites} />
            )}
            {view === "favorites" && <FavoritesSection favorites={favorites} />}
            {view === "playlist" && <PlaylistSection />}
          </div>

           <NavigationButton
            onNewQuote={() => {
              setView("quote")
              getRandomQuote()
            }}
            onShowFavorites={() => setView("favorites")}
            onShowPlaylist={() => setView("playlist")}
          />
        </main>
      </div>
    </div>
  );
}