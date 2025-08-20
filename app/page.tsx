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

type Page = "quote" | "favourites" | "playlist";

export default function Home() {
  const quoteRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [page, setPage] = useState<Page>("quote")
  
  
  const [current, setCurrent] = useState<Quote>(() =>
  quotes[Math.floor(Math.random() * quotes.length)]
  );
  const [favorites, setFavorites] = useState<Quote[]>([])
  

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

  // Animate on page switch
  useEffect(() => {
    if(containerRef.current){
      gsap.fromTo(containerRef.current.children,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }
      )
    }
  }, [page])

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
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>

      <div className='relative z-10 p-4 md:p-6 text-center'>
        {/* Hero Section */}
        <main className="py-4" ref={containerRef} >
          <div className="mt-2 w-full">
            {page === "quote" && (
              <QuoteCard 
                quote={current} 
                onFavorite={addToFavorites} 
              />
            )}
            {page === "favourites" && <FavoritesSection favorites={favorites} />}
            {page === "playlist" && <PlaylistSection />}
          </div>

           <NavigationButton
            onNewQuote={() => {
              setPage("quote")
              getRandomQuote()
            }}
            onShowFavorites={() => setPage("favourites")}
            onShowPlaylist={() => setPage("playlist")}
          />
        </main>
      </div>
    </div>
  );
}