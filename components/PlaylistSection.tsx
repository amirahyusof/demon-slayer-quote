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
      <h2 className="text-white text-3xl font-bold mb-4">Demon Slayer Songs</h2>
      {songs.map((song, idx) => (
        <div key={idx}>
          <h3 className="text-white mb-2">{song.title}</h3>
          <div className="aspect-video">
            <iframe
              className="w-full h-full"
              src={song.url}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      ))}
    </div>
  )
}
