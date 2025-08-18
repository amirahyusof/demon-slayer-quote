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
  return (
    <div className="flex flex-col items-center justify-center mt-4 md:mt-10 text-red-500 ">
      <div className="flex gap-4">
        <Button
          className="border-2 hover:bg-black/80 cursor-pointer flex items-center gap-2 bg-black/50"
          onClick={onNewQuote}
        >
          <Dices />
          <span className="text-md">New Quote</span>
        </Button>

        <Button
          className="border-2 hover:bg-black/80 cursor-pointer flex items-center gap-2 bg-black/50"
          onClick={onShowFavorites}
        >
          <Heart />
          <span className="text-md">Favourite</span>
        </Button>

        <Button
          className="border-2 hover:bg-black/80 cursor-pointer flex items-center gap-2 bg-black/50"
          onClick={onShowPlaylist}
        >
          <Music />
          <span className="text-md">Playlist</span>
        </Button>
      </div>
    </div>
  )
}
