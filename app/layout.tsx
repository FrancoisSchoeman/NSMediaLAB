import type { Metadata, Viewport } from 'next';
import { GoogleTagManager } from '@next/third-parties/google';
import { GoogleAnalytics } from '@next/third-parties/google';

import './globals.css';
import { GeistSans } from 'geist/font/sans';
import { Toaster } from '@/components/ui/toaster';

import { Header } from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppWidget from '@/components/WhatsAppWidget';
import { ScrollTracker } from '@/components/ScrollTracker';

const siteUrl = 'https://nsmedialab.co.za';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#3b82f6',
};

export const metadata: Metadata = {
  title: {
    default: 'Expert Social Media Marketing in Stilbaai | NS MediaLAB',
    template: '%s | NS MediaLAB',
  },
  description:
    'Transform your brand with NS MediaLAB\'s personalised social media marketing services. Based in Stilbaai, we help small businesses grow on Facebook, Instagram, YouTube & more. Get a free consultation today!',
  keywords: [
    'social media marketing Stilbaai',
    'Facebook marketing South Africa',
    'Instagram marketing',
    'YouTube content strategy',
    'small business marketing',
    'social media management',
    'content creation',
    'social media advertising',
    'digital marketing Stilbaai',
    'NS MediaLAB',
  ],
  authors: [{ name: 'Nadia', url: siteUrl }],
  creator: 'NS MediaLAB',
  publisher: 'NS MediaLAB',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_ZA',
    url: siteUrl,
    siteName: 'NS MediaLAB',
    title: 'Expert Social Media Marketing in Stilbaai | NS MediaLAB',
    description:
      'Transform your brand with personalised social media marketing. We help small businesses grow on Facebook, Instagram, YouTube & more. Free consultation available!',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'NS MediaLAB - Social Media Marketing Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Expert Social Media Marketing in Stilbaai | NS MediaLAB',
    description:
      'Transform your brand with personalised social media marketing. We help small businesses grow on Facebook, Instagram, YouTube & more.',
    images: ['/og-image.jpg'],
    creator: '@nsmedialab',
  },
  verification: {
    google: 'your-google-verification-code',
    other: {
      'msvalidate.01': '89E0EBD5DCE64D433C64F5C109F2E9C8',
    },
  },
  category: 'Marketing',
};

// Organization JSON-LD Schema
const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'NS MediaLAB',
  url: siteUrl,
  logo: `${siteUrl}/logo-black.webp`,
  description:
    'Professional social media marketing services for small businesses in South Africa. Based in Stilbaai, Western Cape.',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Stilbaai',
    addressRegion: 'Western Cape',
    addressCountry: 'ZA',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+27-82-619-1100',
    contactType: 'customer service',
    email: 'nadia@nsmedialab.co.za',
    availableLanguage: ['English', 'Afrikaans'],
  },
  sameAs: [
    'https://www.facebook.com/nsmedialab',
    'https://www.instagram.com/nsmedialab',
  ],
  foundingDate: '2021',
  founder: {
    '@type': 'Person',
    name: 'Nadia',
  },
  areaServed: {
    '@type': 'Country',
    name: 'South Africa',
  },
  serviceType: [
    'Social Media Marketing',
    'Content Creation',
    'Social Media Management',
    'Advertising Campaigns',
    'Strategy Consultation',
    'Product Photography',
  ],
};

// LocalBusiness JSON-LD Schema
const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': `${siteUrl}/#localbusiness`,
  name: 'NS MediaLAB',
  image: `${siteUrl}/og-image.jpg`,
  url: siteUrl,
  telephone: '+27826191100',
  email: 'nadia@nsmedialab.co.za',
  priceRange: 'R500-R5000',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Stilbaai',
    addressRegion: 'Western Cape',
    addressCountry: 'ZA',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: -34.3667,
    longitude: 21.4167,
  },
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    opens: '08:00',
    closes: '17:00',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-ZA" className="light">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
      </head>
      <body className={`${GeistSans.variable} font-sans antialiased bg-white text-foreground`}>
        <GoogleTagManager gtmId="GTM-P8C3JZJH" />
        <Header />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-primary text-primary-foreground px-4 py-2 rounded-lg z-50"
        >
          Skip to main content
        </a>
        <main
          id="main-content"
          className="min-h-screen"
        >
          {children}
        </main>
        <Toaster />
        <Footer />
        <WhatsAppWidget />
        <ScrollTracker />
        <GoogleAnalytics gaId="G-1J2SRELXN8" />
      </body>
    </html>
  );
}
