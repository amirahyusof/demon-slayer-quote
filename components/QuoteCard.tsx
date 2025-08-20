import { Quote } from "../lib/quotes"
import Image from 'next/image';
import { Button } from "./ui/button";

export default function QuoteCard({
  quote,
  onFavorite,
}: {
  quote: Quote
  onFavorite: (id: number) => void
}) {
  return (
    <div>
      <h1 
        className="text-6xl text-black md:text-7xl font-bold"
        style={{ fontFamily: "Bloodcrow, sans-serif"}}
      >
        Demon Slayer 
      </h1>
      <p className="text-4xl text-black font-bold mb-8">Quotes</p>
      
      <section className="grid md:grid-cols-2 px-2 md:px-16 place-items-center md:place-items-start ">
        <Image 
        src={quote.image} 
        alt={quote.character} 
        width={200}
        height={200}
        className="object-cover rounded-md mx-auto md:mx-0" 
        />
        
        <div className="shadow-lg shadow-black mt-4 md:mt-20 p-4 md:-ml-32 w-[90%] md:w-[500px] flex flex-col justify-center items-center text-center backdrop-blur-sm bg-white/30 rounded-lg">
          <p className="text-2xl italic font-serif mb-2">"{quote.text}"</p>
          <p className="text-md font-bold">{quote.character}</p>
          <Button
            onClick={() => onFavorite(quote.id)}
            className="text-pink-900 mt-4 shadow-inner hover:bg-pink-200 bg-pink-300"
          >
            Add to Favorite ❤️
          </Button>
        </div>
      </section>
    </div>
    
    
  )
}
