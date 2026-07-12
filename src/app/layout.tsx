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
          and is meant to sit over whatever's at the top of the page (the
          Hero, once built). Pages/sections without a hero-style top
          section are responsible for their own top spacing so they don't
          render underneath the fixed header. See src/app/page.tsx for the
          placeholder handling this correctly in the meantime.
        */}
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
