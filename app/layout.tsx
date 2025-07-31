import type { Metadata } from "next";
import {Noto_Serif_JP} from 'next/font/google';
import "./globals.css";

const jpFont = Noto_Serif_JP({
  subsets:['latin'],
  weight:['400', '700']
})

export const metadata: Metadata = {
  title: "Demon Slayer Quotes",
  description: "Daily Demon Slayer Quote Generator",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${jpFont.className} antialiased bg-[#0d0d14]`}
      >
        {children}
      </body>
    </html>
  );
}
