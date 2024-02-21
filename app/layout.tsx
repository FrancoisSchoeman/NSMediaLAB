import type { Metadata } from "next";
import "./globals.css";
// GeistSans: --font-geist-sans
import { GeistSans } from "geist/font/sans";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";

import { Header } from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Expert Social Media Marketing in Stilbaai | NS MediaLAB",
  description:
    "Elevate your brand with NS MediaLAB’s personalised social media marketing services for Facebook, Instagram, and YouTube. Based in Stilbaai, we specialise in growing small businesses.",
  keywords:
    "NS MediaLAB, social media marketing, Stilbaai, Facebook marketing, Instagram engagement, YouTube content strategy, small business growth, social media management, content creation, social media advertising, social media analytics, social media strategy, social media services, social media agency, social media marketing agency, social media marketing services, social media marketing company, social media marketing expert, social media marketing specialist, social media marketing professional",
  robots: {
    index: true,
    follow: true,
  },
  metadataBase: new URL("https://nsmedialab.co.za"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    images: "/og-image.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-ZA">
      <body className={`${GeistSans.variable} font-sans`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <Header />
          <main className="px-4 sm:px-8 md:px-0 max-w-[1300px] mx-auto">
            {children}
          </main>
          <Toaster />
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
