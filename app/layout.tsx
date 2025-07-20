import type { Metadata } from 'next';
import { GoogleTagManager } from '@next/third-parties/google';
import { GoogleAnalytics } from '@next/third-parties/google';

import './globals.css';
// GeistSans: --font-geist-sans
import { GeistSans } from 'geist/font/sans';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/toaster';

import { Header } from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Expert Social Media Marketing in Stilbaai | NS MediaLAB',
  description:
    'Elevate your brand with NS MediaLAB’s personalised social media marketing services for Facebook, Instagram, and YouTube. Based in Stilbaai, we specialise in growing small businesses.',
  keywords:
    'NS MediaLAB, social media marketing, Stilbaai, Facebook marketing, Instagram engagement, YouTube content strategy, small business growth, social media management, content creation, social media advertising, social media analytics, social media strategy, social media services, social media agency, social media marketing agency, social media marketing services, social media marketing company, social media marketing expert, social media marketing specialist, social media marketing professional',
  robots: {
    index: true,
    follow: true,
  },
  metadataBase: new URL('https://nsmedialab.co.za'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    images: '/og-image.jpg',
  },
  other: {
    // Bing Webmaster Tools
    'msvalidate.01': '89E0EBD5DCE64D433C64F5C109F2E9C8',
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
        <GoogleTagManager gtmId="GTM-P8C3JZJH" />
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <Header />
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-primary text-primary-foreground px-4 py-2 rounded"
          >
            Skip to main content
          </a>
          <main
            id="main-content"
            className="px-4 sm:px-8 md:px-0 max-w-[1300px] mx-auto z-10"
          >
            {children}
          </main>
          <Toaster />
          <Footer />
        </ThemeProvider>
        <GoogleAnalytics gaId="G-1J2SRELXN8" />
      </body>
    </html>
  );
}
