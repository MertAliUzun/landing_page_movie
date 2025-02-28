import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Zen: Movie Collection | Movie Collection/Wishlist App",
  description: "Zen: Movie Collection is a sleek and user-friendly app to track, rate, and organize your favorite movies. Create a wishlist and explore new films effortlessly.",

    openGraph: {
      title: "Zen: Movie Collection | Track & Organize Your Movies",
      description: "Effortlessly track, rate, and organize your favorite movies. Create a wishlist and explore new films with Zen: Movie Collection.",
      images: [
        {
          url: "https://res.cloudinary.com/dper5kp88/image/upload/v1740744522/khv36ufpawmbcu3mnbyi.jpg",
          width: 1200,
          height: 630,
          alt: "Zen: Movie Collection",
        },
      ],
      siteName: "Zen: Movie Collection",
    },
    twitter: {
      card: "summary_large_image",
      title: "Zen: Movie Collection | Track & Organize Your Movies",
      description: "Easily manage your movie collection, rate films, and build a wishlist with Zen: Movie Collection.",
      images: "https://res.cloudinary.com/dper5kp88/image/upload/v1740744522/khv36ufpawmbcu3mnbyi.jpg",  
    },
    alternates: {
      canonical: "./",
    },
    icons: {
      icon: "/favicon.ico",
      shortcut: "/favicon.ico",
    },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
