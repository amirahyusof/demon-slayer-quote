import { 
  Tabs, 
  TabsList, 
  TabsTrigger, 
  TabsContent 
} from "./ui/tabs"

export default function PlaylistSection() {
  const songs = [
    //Season 1
    {
      title: "Gurenge - LiSA (OP)",
      url: "https://www.youtube.com/embed/x1FV6IrjZCY?si=058AislKGW8aH0Rm",
    },
    {
      title: "Homura - LiSA (ED)",
      url: "https://www.youtube.com/embed/4DxL6IKmXx4",
    },

    //Season 2
    {
      title: "Akeboshi - LiSA (OP - Mugen Train Arc)",
      url: "https://www.youtube.com/embed/4DxL6IKmXx4",
    },
    {
      title: "Shirogane - LiSA (ED - Mugen Train Arc)",
      url: "https://www.youtube.com/embed/4DxL6IKmXx4",
    },

    //Season 3
    {
      title: "Zankyou Sanka - Aimer (OP - Entertaiment Arc)",
      url: "https://www.youtube.com/embed/tLQLa6lM3Us?si=oxs69kaSEoXVGZc9",
    },
    {
      title: "Asa ga Kuru - Aimer (ED - Entertaiment Arc)",
      url: "https://www.youtube.com/embed/QORbTrXHpsA?si=1BIVfyJDq_0pfm5T",
    },

    //Season 4
    {
      title: "Kizuna no Kiseki - Man with a Mission & Milet (OP - Sword Village Arc)",
      url: "https://www.youtube.com/embed/0N3j1erm3-Y?si=STbl_cIDjAeU8Zax",
    },
    {
      title: "Koi Kogare - Man with a Mission & Milet (ED - Sword Village Arc)",
      url: "https://www.youtube.com/embed/xuVXmbX0EgQ?si=wTc1PrB37dDEade-",
    },

    //Season 5
    {
      title: "Mugen - My First Story & Hyde (OP - Hashira Training Arc)",
      url: "https://www.youtube.com/embed/1a3b7ZpUcn4?si=u4R047k2Zvk60mph",
    },
    {
      title: "Tokoshie - Hyde & My First Story (ED - Hashira Training Arc)",
      url: "https://www.youtube.com/embed/zjEU6Kp8Gn8?si=rsvsbuV9v_BRCOf2",
    },

    //Movie
    {
      title: "A World Where the Sun Never Rises - Aimer (OP - Infinity Castle Arc)",
      url: "https://www.youtube.com/embed/DJOf0XtVpkI?si=_Bu_u1_ar36GZsll",
    },
    {
      title: "Shine in the Cruel Night - Lisa (ED - Infinity Castle Arc)",
      url: "https://www.youtube.com/embed/ysdtX8kRTuQ?si=A-y-2sb0mzi9TZP4",
    },
  ]

  return (
    <div className="space-y-6">
      <h1 
        className="text-4xl text-black sm:text-6xl font-bold"
        style={{ fontFamily: "Bloodcrow, sans-serif"}}
      >
        Demon Slayer Songs
      </h1>

      <div className="flex w-full flex-col">
        <Tabs defaultValue="season1">
          <TabsList className="grid w-fit mx-auto grid-cols-2 md:grid-cols-3 gap-4 mb-32 text-white">
            <TabsTrigger 
              value="season1"
              className="px-4 py-2 rounded-lg bg-red-600/70 hover:bg-red-600/50 transition-colors"
            >
              Season 1
            </TabsTrigger>
            <TabsTrigger 
              value="season2"
              className="px-4 py-2 rounded-lg bg-red-600/70 hover:bg-red-600/50 transition-colors"
            >
              Season 2: Mugen Train
            </TabsTrigger>
            <TabsTrigger 
              value="season3"
              className="px-4 py-2 rounded-lg bg-red-600/70 hover:bg-red-600/50 transition-colors"
            >
              Season 3: Entertainment District
            </TabsTrigger>
            <TabsTrigger 
              value="season4"
              className="px-4 py-2 rounded-lg bg-red-600/70 hover:bg-red-600/50 transition-colors"
            >
              Season 4: Swordsmith Village
            </TabsTrigger>
            <TabsTrigger 
              value="season5"
              className="px-4 py-2 rounded-lg bg-red-600/70 hover:bg-red-600/50 transition-colors"
            >
              Season 5: Hashira Training
            </TabsTrigger>
            <TabsTrigger 
              value="movie"
              className="px-4 py-2 rounded-lg bg-red-600/70 hover:bg-red-600/50 transition-colors"
            >
              Movie: Infinity Castle
            </TabsTrigger>
          </TabsList>

          <TabsContent value="season1" className="space-y-6 md:space-y-0 justify-center items-center">
            {songs.slice(0, 2).map((song, idx) => (
              <div key={idx}>
                <h3 className="text-white mb-2">{song.title}</h3>
                <div className="aspect-video">
              <iframe
                className="w-full h-full md:w-[80%] md:h-[80%] rounded-lg"
                src={song.url}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
                </div>
              </div>
            ))}
          </TabsContent>

          <TabsContent value="season2" className="space-y-6">
            {songs.slice(2, 4).map((song, idx) => (
              <div key={idx}>
                <h3 className="text-white mb-2">{song.title}</h3>
                <div className="aspect-video">
              <iframe
                className="w-full h-full rounded-lg"
                src={song.url}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
                </div>
              </div>
            ))}
          </TabsContent>

          <TabsContent value="season3" className="space-y-6">
            {songs.slice(4, 6).map((song, idx) => (
              <div key={idx}>
                <h3 className="text-white mb-2">{song.title}</h3>
                <div className="aspect-video">
              <iframe
                className="w-full h-full rounded-lg"
                src={song.url}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
                </div>
              </div>
            ))}
          </TabsContent>

          <TabsContent value="season4" className="space-y-6">
            {songs.slice(6, 8).map((song, idx) => (
              <div key={idx}>
                <h3 className="text-white mb-2">{song.title}</h3>
                <div className="aspect-video">
              <iframe
                className="w-full h-full rounded-lg"
                src={song.url}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
                </div>
              </div>
            ))}
          </TabsContent>

          <TabsContent value="season5" className="space-y-6">
            {songs.slice(8, 10).map((song, idx) => (
              <div key={idx}>
                <h3 className="text-white mb-2">{song.title}</h3>
                <div className="aspect-video">
              <iframe
                className="w-full h-full rounded-lg"
                src={song.url}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
                </div>
              </div>
            ))}
          </TabsContent>

          <TabsContent value="movie" className="space-y-6">
            {songs.slice(10).map((song, idx) => (
              <div key={idx}>
                <h3 className="text-white mb-2">{song.title}</h3>
                <div className="aspect-video">
              <iframe
                className="w-full h-full rounded-lg"
                src={song.url}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
                </div>
              </div>
            ))}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
