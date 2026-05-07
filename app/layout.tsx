import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
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
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`} suppressHydrationWarning>
      <body>
        <Navbar />
        <main style={{ minHeight: '100vh', paddingTop: '60px' }}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
