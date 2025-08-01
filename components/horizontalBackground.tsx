const patterns = [
  '/background/pattern(1).jpg',
  '/background/pattern(2).jpg',
  '/background/pattern(3).jpg',
  '/background/pattern(4).jpg',
  '/background/pattern(5).jpg',
  '/background/pattern(6).jpg',
  '/background/pattern(7).jpg',
];

export default function HorizontalBackground() {
  return (
    <div className="absolute inset-0 flex z-[-1]">
      {patterns.map((image, index) => (
        <div
          key={index}
          className="w-[14.28%] bg-['url(/background/pattern(4).jpg')] h-full bg-cover bg-center"
          // style={{ backgroundImage: `url(${image})` }}
        ></div>
      ))}
      {/* Optional: Dark overlay blur */}
      {/* <div className="absolute inset-0 bg-black/70 backdrop-blur-md"></div> */}
    </div>
  );
}
