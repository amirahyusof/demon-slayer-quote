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
}: NavigationButtonProps){

  return(
    <div className="flex flex-col items-center justify-center mt-10 text-red-500">
      <div className="flex flex-row gap-4 mb-4">
        <Button className="border-2 hover:bg-white cursor-pointer">
          <Dices />
          <span className="text-xl">New Quote</span>
        </Button>
        <Button className="border-2 hover:bg-white cursor-pointer">
          <Heart />
          <span className="text-xl">Favourite</span>
        </Button>
      </div>

      <div>
        <Button className="border-2 hover:bg-white cursor-pointer">
          <Music />
          <span className="text-xl">Playlist</span>
        </Button>
      </div>
      
    </div>
  )
}