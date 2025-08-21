"use client";

import { gsap } from "gsap";
import { Dices, Heart, Music } from "lucide-react"
import { Button } from "./ui/button"

interface NavigationButtonProps {
  onNewQuote: () => void;
  onShowFavorites: () => void;
  onShowPlaylist: () => void;
}

export default function NavigationButton({
  onNewQuote,
  onShowFavorites,
  onShowPlaylist
}: NavigationButtonProps) {

  const animatePageTransition = (callback: () => void) => {
    gsap.to(".page-content", {
      opacity:0,
      y: 50, 
      duration: 0.4, 
      ease: "power2.inOut",
      onComplete: () => {
        callback();
        gsap.fromTo(
          ".page-content",
          {opacity:0, y:-50},
          {opacity:1, y:0, duration: 0.4, ease:"power2.out"}
        );
      },
    });
};

  return (
    <div className="flex md:flex-row items-center justify-center mt-6 md:mt-10  text-red-500 ">
      <div className="flex flex-wrap justify-center gap-2 md:gap-6">
        <Button
          className="border-2 hover:bg-black/80 cursor-pointer flex items-center bg-black/50"
          onClick={() => animatePageTransition(onNewQuote)}
        >
          <Dices />
          <span className="text-md">New Quote</span>
        </Button>

        <Button
          className="border-2 hover:bg-black/80 cursor-pointer flex items-center bg-black/50"
          onClick={() => animatePageTransition(onShowFavorites)}
        >
          <Heart />
          <span className="text-md">Favourite</span>
        </Button>

        <Button
          className="border-2 hover:bg-black/80 cursor-pointer flex items-center bg-black/50"
          onClick={() => animatePageTransition(onShowPlaylist)}
        >
          <Music />
          <span className="text-md">Playlist</span>
        </Button>
      </div>
    </div>
  )
}
