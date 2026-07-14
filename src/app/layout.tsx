import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import { SkipToContent } from "@/components/layout/SkipToContent";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import "@/styles/globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Deepanshu Rawat",
  description:
    "Software engineer building intelligent systems using AI, Machine Learning, Data Analytics, Computer Vision, and IoT.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable}`}
      suppressHydrationWarning
    >
      <body className="min-h-screen antialiased">
        <SkipToContent />
        <Header />
        {/*
          No top padding here on purpose — the header starts transparent
          and sits over the Hero. The Hero (and any future top-of-page
          section) is responsible for its own top spacing so it isn't
          hidden underneath the fixed header; standalone pages without a
          hero-style top section will need the same treatment when built.
        */}
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
