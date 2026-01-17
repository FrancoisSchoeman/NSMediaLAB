import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { LottiePlayer } from '@/components/LottiePlayer';
import { Badge } from '@/components/ui/badge';

import { Metadata } from 'next';

import cube from '../../public/rubiks-cube.json';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About | NS MediaLAB',
  description:
    "I'm Nadia, the strategist behind NS MediaLAB, helping brands connect with their audiences and align every platform into a cohesive social media story.",
  keywords:
    'social media marketing Stilbaai, Facebook management, Instagram marketing, content creation, social media ads, social media strategy, South African businesses, analytics, affordable social media services',
};

export default function AboutPage() {
  const years = new Date().getFullYear() - new Date('2021').getFullYear();
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    name: 'About NS MediaLAB',
    description:
      'Meet Nadia, the strategist behind NS MediaLAB, helping brands align their social media platforms into a cohesive story that resonates with audiences.',
    mainEntity: {
      '@type': 'LocalBusiness',
      name: 'NS MediaLAB',
      description:
        `Social media marketing services based in Stilbaai, Western Cape, helping over 35 small businesses grow their presence over the past ${years} years.`,
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Stilbaai',
        addressRegion: 'Western Cape',
        addressCountry: 'South Africa',
      },
      foundingDate: '2021',
      numberOfEmployees: '1-10',
      serviceArea: {
        '@type': 'GeoCircle',
        geoMidpoint: {
          '@type': 'GeoCoordinates',
          latitude: -34.3667,
          longitude: 21.4167,
        },
        geoRadius: '100000',
      },
    },
  };

  return (
    <div className="my-16 flex min-h-screen relative w-full h-full flex-col sm:items-center justify-between">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <section className="w-full sm:text-center flex flex-col justify-start sm:items-center">
        <div className="space-y-6 sm:space-y-12">
          <div className="flex flex-col items-start justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="mb-4 text-3xl font-bold tracking-tighter sm:text-5xl">
                About NS MediaLAB
              </h1>
              <p className="max-w-[40ch] sm:max-w-[900px] text-neutral-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                I&apos;m Nadia, the strategist behind NS MediaLAB. What started
                as a passion for helping brands connect with their audiences has
                grown into a mission: to turn every platform into a perfectly
                aligned piece of your social media cube.
              </p>

              <p className="max-w-[40ch] sm:max-w-[900px] text-neutral-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Based in the beautiful coastal town of Stilbaai, Western Cape,
                I&apos;ve had the privilege of helping over 35 small businesses
                grow their digital presence over the past {years} years.
              </p>

              <p className="max-w-[40ch] sm:max-w-[900px] text-neutral-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                My approach is simple but effective: I take the time to
                understand what makes your brand unique, then craft strategies
                that spark engagement, boost visibility, and create meaningful
                connections.
              </p>

              <p className="max-w-[40ch] sm:max-w-[900px] text-neutral-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Let&apos;s turn your social media puzzle into a story that clicks
                with your audience - one platform at a time.
              </p>
            </div>
          </div>
          <Button asChild className="self-start sm:self-center">
            <Link href="/services">Our Services</Link>
          </Button>
        </div>
      </section>

      <Separator className="my-16 sm:mb-0" />

      <section className="w-full">
        <div className="grid gap-4 md:grid-cols-2 md:gap-16">
          <div className="flex flex-col items-start justify-center space-y-2">
            <Link href="/contact">
              <Badge>Contact Us</Badge>
            </Link>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Get In Touch
            </h2>
            <p className="max-w-[40ch] sm:max-w-[900px] text-left text-neutral-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Eager to elevate your social media presence? Get in touch with NS
              MediaLAB today to begin devising a strategy that resonates with
              your brand&apos;s distinctive voice and objectives.
            </p>
            <div className="py-4">
              <Button asChild>
                <Link href="/contact">Get Started</Link>
              </Button>
            </div>
          </div>

          <div className="flex flex-col items-center space-y-4 justify-start">
            <LottiePlayer src={cube} height="400px" width="400px" speed={0.5} />
          </div>
        </div>
      </section>
    </div>
  );
}
