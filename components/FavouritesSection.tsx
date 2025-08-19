import { Quote } from "../lib/quotes"
import { Card } from "./ui/card"

export default function FavoritesSection({ favorites }: { favorites: Quote[] }) {
  return (
    <div>
      <h1 
        className="text-5xl text-black sm:text-6xl font-bold"
        style={{ fontFamily: "Bloodcrow, sans-serif"}}
      >
        Favourite Quotes
      </h1>
      <div className="space-y-4 flex flex-col justify-center items-center">
        {favorites.length === 0 ? (
          <p className="text-white italic">No favorites yet.</p>
        ) : (
          favorites.map(q => (
            <Card key={q.id} className="shadow-2xl shadow-red-600 border-red-600 mt-2 p-2 md:-ml-20 w-[90%] md:w-[500px] backdrop-blur-sm bg-white/30 rounded-lg">
              <p className="text-xl italic font-serif">"{q.text}"</p>
              <p className="text-md -mt-4">{q.character}</p>
            </Card>
          ))
        )}
      </div>
    </div>
  )
}
