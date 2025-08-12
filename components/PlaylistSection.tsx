export default function PlaylistSection() {
  const songs = [
    {
      title: "Gurenge - LiSA (OP)",
      url: "https://www.youtube.com/embed/pL1C2OdMh28",
    },
    {
      title: "Homura - LiSA (ED)",
      url: "https://www.youtube.com/embed/4DxL6IKmXx4",
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
