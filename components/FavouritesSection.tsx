import { Quote } from "../lib/quotes"

export default function FavoritesSection({ favorites }: { favorites: Quote[] }) {
  return (
    <div>
      <h2 className="text-white text-3xl font-bold mb-4">Favourite Quotes</h2>
      <div className="space-y-4">
        {favorites.length === 0 ? (
          <p className="text-white italic">No favorites yet.</p>
        ) : (
          favorites.map(q => (
            <div key={q.id} className="bg-zinc-900 p-4 rounded-md border-l-4 border-red-600">
              <p>{q.text}</p>
              <p className="text-right text-sm">{q.character}</p>
            </div>
          ))
        )}
      </div>
    </div>
  )
}
