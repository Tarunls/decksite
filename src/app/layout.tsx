// src/app/layout.tsx
import { Metadata } from 'next';
import { Cinzel, Inter } from "next/font/google";
import './globals.css';

// 1. Metadata Configuration (SEO & Social Thumbnails)
export const metadata: Metadata = {
  title: "Tarun Sankar",
  description: "A high-fidelity card-based digital portfolio.",
  openGraph: {
    title: "Tarun Sankar",
    description: "A high-fidelity card-based digital portfolio.",
    url: 'https://tarunls.com', // Replace with your actual URL
    siteName: 'Decksite',
    images: [
      {
        url: '/cover.jpg', // The thumbnail image from your public folder
        width: 1200,
        height: 630,
        alt: 'Tarun Sankar | Decksite Preview',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tarun Sankar',
    description: 'A high-fidelity card-based digital portfolio.',
    images: ['/cover.jpg'],
  },
};

// 2. Initialize Fonts
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
    <html lang="en" className={`${cinzel.variable}`}>
      <head>
        {/* 3. Critical Image Preloading */}
        <link rel="preload" href="/cover.jpg" as="image" fetchPriority="high"/>
        <link rel="preload" href="/anticover.jpeg" as="image" fetchPriority="high"/>
        <link rel="preload" href="/darkknight.png" as="image" fetchPriority="high"/>
        <link rel="preload" href="/lightknight.png" as="image" fetchPriority="high"/>
        <link rel="preload" href="/cards/time702-copy-6_51163893512_l.jpg" as="image" fetchPriority="high"/>
      </head>
      
      {/* 4. Apply Inter as the default body font */}
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
