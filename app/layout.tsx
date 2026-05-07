import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-heading",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Jasmine · Thanh Thuy",
    template: "%s | Jasmine · Thanh Thuy",
  },
  description:
    "I'm Jasmine (Thanh Thuy) — a curious student exploring the world one idea at a time. My interests span Computer Vision, AI Agents, LLMs, TinyML, and IoT.",
  keywords: ["AI", "Machine Learning", "Computer Vision", "LLM", "TinyML", "IoT", "Research", "Blog"],
  authors: [{ name: "Jasmine Thanh Thuy", url: "https://thanhthuii24.github.io" }],
  openGraph: {
    title: "Jasmine · Thanh Thuy",
    description: "Curious student exploring AI — Computer Vision, LLMs, TinyML & IoT.",
    url: "https://thanhthuii24.github.io",
    siteName: "jasmint",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable} ${cormorant.variable}`} suppressHydrationWarning>
      <body>
        <div style={{
          position: 'fixed',
          top: 0, left: 0, width: '100vw', height: '100vh',
          pointerEvents: 'none',
          zIndex: 9999,
          opacity: 0.03,
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }} />
        <Navbar />
        <main style={{ minHeight: '100vh', paddingTop: '60px' }}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
