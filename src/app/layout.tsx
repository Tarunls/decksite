// src/app/layout.tsx
import { Cinzel, Inter } from "next/font/google";
import './globals.css';

// 1. Initialize fonts
const cinzel = Cinzel({ 
  subsets: ["latin"],
  variable: '--font-cinzel', 
});

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    // 2. Add the font variable to the HTML class
    <html lang="en" className={`${cinzel.variable}`}>
      <head>
        {/* 3. Critical image preloading */}
        <link rel="preload" href="/cover.jpg" as="image" fetchPriority="high"/>
        <link rel="preload" href="/anticover.jpeg" as="image" fetchPriority="high"/>
        <link rel="preload" href="/darkknight.png" as="image" fetchPriority="high"/>
        <link rel="preload" href="/lightknight.png" as="image" fetchPriority="high"/>
        {/* Preload the card background */}
        <link rel="preload" href="/cards/time702-copy-6_51163893512_l.jpg" as="image" fetchPriority="high"/>
      </head>
      {/* 4. Apply Inter as the default body font */}
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}