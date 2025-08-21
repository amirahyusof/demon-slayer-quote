# Demon Slayer Daily Quotes

A dark-mode anime-inspired daily quote generator web app built with **Next.js**, **TypeScript**, **Tailwind CSS**, **Shadcn/UI**, and **GSAP**.  
It provides an immersive **epic anime UI vibe** with Japanese calligraphy fonts and smooth scroll animations.

---

## 🚀 Features
- 🎴 Random Demon Slayer quotes from multiple characters.
- ❤️ Mark and view your favorite quotes.
- 🎶 Playlist page for ambient music (placeholder for now).
- ⚡ Smooth GSAP scroll/page transition animations.
- 🌑 Dark mode anime UI design with Japanese aesthetics.

---

## 🛠️ Tech Stack
- **Next.js** (App Router, TypeScript)
- **Tailwind CSS** (for styling)
- **Shadcn/UI** (UI components)
- **Lucide React** (icons)
- **GSAP** (animations)

---

## 📂 Project Structure
```
app/
 ├──page.tsx        # Main page with navigation + content
 │    └── globals.css     # Global styles
 ├── components/
 │    ├── NavigationButton.tsx  # Navigation 
 │    ├── PlaylistSection.tsx  # Playlist
 │    ├── QuoteCard.tsx  # Quote
 │    └── FavouriteSection.tsx  # Favourite Quote  
 ├── data/
 │    └── quotes.ts             # Demon Slayer quotes list
```

---

## ⚡ Getting Started

1. **Clone the repository**
```bash
git clone https://github.com/your-username/demon-slayer-quotes.git
cd demon-slayer-quotes
```

2. **Install dependencies**
```bash
npm install
```

3. **Run the development server**
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

---

## ✨ Future Improvements
- 🔊 Add real Demon Slayer background music playlist.
- 📌 Add option to save favorites in localStorage or Supabase.
- 🌸 More anime-themed animations and seasonal backgrounds.

---

## 📜 License
MIT License © 2025 Amirah.Y
