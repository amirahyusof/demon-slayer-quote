import { Quote } from "../lib/quotes"

export default function QuoteCard({
  quote,
  onFavorite,
}: {
  quote: Quote
  onFavorite: (id: number) => void
}) {
  return (
    <div className="bg-black text-white border border-red-600 rounded-xl p-6 flex gap-4">
      <img src={quote.image} alt={quote.character} className="w-24 h-24 object-cover rounded-md" />
      <div>
        <p className="text-lg italic font-serif mb-2">{quote.text}</p>
        <p className="text-right text-sm font-bold">{quote.character}</p>
        <button
          onClick={() => onFavorite(quote.id)}
          className="text-red-400 mt-2 hover:underline"
        >
          Add to Favorite ❤️
        </button>
      </div>
    </div>
  )
}
