// app/layout.tsx
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* Preload critical hero images */}
        <link rel="preload" href="/cover.jpg" as="image" fetchPriority="high"/>
        <link rel="preload" href="/anticover.jpeg" as="image" fetchPriority="high"/>
        {/* Preload the card background */}
        <link rel="preload" href="/cards/time702-copy-6_51163893512_l" as="image" fetchPriority="high"/>
      </head>
      <body>{children}</body>
    </html>
  );
}