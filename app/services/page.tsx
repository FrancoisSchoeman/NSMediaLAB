import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { LottiePlayer } from '@/components/LottiePlayer';
import { Badge } from '@/components/ui/badge';
import { Metadata } from 'next';
import Link from 'next/link';
import { AnimatedCard } from '@/components/AnimatedCard';

import cube from '../../public/rubiks-cube.json';

export const metadata: Metadata = {
  title: 'Services | NS MediaLAB',
  description:
    'Dive deeper into our services with detailed descriptions of how we approach each platform, ensuring your business stands out in the digital crowd.',
  keywords:
    'social media marketing Still Bay, Facebook management, Instagram marketing Stilbaai, content creation, social media ads, social media strategy, South African businesses, analytics, affordable social media services',
};

export default function ServicesPage() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Social Media Marketing Services | NS MediaLAB',
    description:
      'Comprehensive social media marketing services including management, content creation, advertising campaigns, analytics, strategy consultation, and photography.',
    provider: {
      '@type': 'LocalBusiness',
      name: 'NS MediaLAB',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Stilbaai',
        addressRegion: 'Western Cape',
        addressCountry: 'South Africa',
      },
      telephone: '082 619 1100',
      email: 'nadia@nsmedialab.co.za',
    },
    serviceType: [
      'Social Media Management',
      'Content Creation',
      'Advertising Campaigns',
      'Analytics & Reporting',
      'Strategy Consultation',
      'Product & Lifestyle Photography',
    ],
    areaServed: {
      '@type': 'Country',
      name: 'South Africa',
    },
    availableChannel: [
      {
        '@type': 'ServiceChannel',
        name: 'Facebook Management',
      },
      {
        '@type': 'ServiceChannel',
        name: 'Instagram Marketing',
      },
      {
        '@type': 'ServiceChannel',
        name: 'YouTube Marketing',
      },
      {
        '@type': 'ServiceChannel',
        name: 'LinkedIn Marketing',
      },
      {
        '@type': 'ServiceChannel',
        name: 'Twitter Marketing',
      },
      {
        '@type': 'ServiceChannel',
        name: 'TikTok Marketing',
      },
    ],
  };

  return (
    <div className="my-12 flex min-h-screen flex-col sm:items-center justify-center relative w-full h-full">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <section className="w-full sm:text-center flex flex-col justify-start sm:items-center">
        <div className="space-y-6 sm:space-y-12">
          <div className="flex flex-col items-center justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Services
              </h1>
              <p className="max-w-[40ch] sm:max-w-[900px] text-neutral-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Dive deeper into our services with detailed descriptions of how
                we approach each platform, ensuring your business stands out in
                the digital crowd.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 lg:gap-8 sm:grid-cols-2 lg:grid-cols-3 auto-rows-max">
            <AnimatedCard>
              <h3 className="text-lg font-bold">Social Media Management</h3>
              <ul className="list-disc ml-6">
                <li className="max-w-[40ch] sm:max-w-[900px] text-neutral-600 py-1">
                  <strong>Hands-off account management:</strong> Ditch the daily
                  posting grind and focus on running your business while we keep
                  your social media channels buzzing with engaging content.
                </li>
                <li className="max-w-[40ch] sm:max-w-[900px] text-neutral-600 py-1">
                  <strong>Platform expertise:</strong> Whether it&apos;s
                  Facebook, Instagram, YouTube, LinkedIn, Twitter, or even
                  TikTok, we know the unique nuances of each platform to
                  maximize your reach and engagement.
                </li>
                <li className="max-w-[40ch] sm:max-w-[900px] text-neutral-600 py-1">
                  <strong>Community management:</strong> We&apos;ll respond to
                  comments and messages promptly, fostering positive brand
                  interactions and building loyal followings.
                </li>
              </ul>
            </AnimatedCard>

            <AnimatedCard>
              <h3 className="text-lg font-bold">Content Creation</h3>
              <ul className="list-disc ml-6">
                <li className="max-w-[40ch] sm:max-w-[900px] text-neutral-600 py-1">
                  <strong>Eye-catching visuals:</strong> Say goodbye to stock
                  photos! We&apos;ll create stunning graphics, videos, and other
                  content that resonates with your target audience.
                </li>
                <li className="max-w-[40ch] sm:max-w-[900px] text-neutral-600 py-1">
                  <strong>Compelling copy:</strong> Our wordsmiths craft
                  captivating captions, stories, and ads that grab attention and
                  drive action.
                </li>
                <li className="max-w-[40ch] sm:max-w-[900px] text-neutral-600 py-1">
                  <strong>Authentic brand voice:</strong> We&apos;ll capture
                  your unique brand personality and translate it into engaging
                  social media content.
                </li>
              </ul>
            </AnimatedCard>

            <AnimatedCard>
              <h3 className="text-lg font-bold">Advertising Campaigns</h3>
              <ul className="list-disc ml-6">
                <li className="max-w-[40ch] sm:max-w-[900px] text-neutral-600 py-1">
                  <strong>Boost your reach & engagement:</strong> Take your
                  social media presence to the next level with paid advertising
                  campaigns on all major platforms.
                </li>
                <li className="max-w-[40ch] sm:max-w-[900px] text-neutral-600 py-1">
                  <strong>Expert campaign management:</strong> We&apos;ll handle
                  everything from budget allocation to ad creation and
                  optimization.
                </li>
                <li className="max-w-[40ch] sm:max-w-[900px] text-neutral-600 py-1">
                  <strong>Measurable results:</strong> Track your ad performance
                  and see the returns on your investment.
                </li>
              </ul>
            </AnimatedCard>

            <AnimatedCard>
              <h3 className="text-lg font-bold">Analytics & Reporting</h3>
              <ul className="list-disc ml-6">
                <li className="max-w-[40ch] sm:max-w-[900px] text-neutral-600 py-1">
                  <strong>Data-driven insights:</strong> We don&apos;t just post
                  and pray. We track key metrics and provide actionable insights
                  to help you understand what&apos;s working and what&apos;s
                  not.
                </li>
                <li className="max-w-[40ch] sm:max-w-[900px] text-neutral-600 py-1">
                  <strong>Customizable reports:</strong> Get the data you need,
                  delivered in a format that&apos;s easy to understand and
                  digest.
                </li>
                <li className="max-w-[40ch] sm:max-w-[900px] text-neutral-600 py-1">
                  <strong>Continuous improvement:</strong> We use data to
                  constantly refine your social media strategy for better
                  results.
                </li>
              </ul>
            </AnimatedCard>

            <AnimatedCard>
              <h3 className="text-lg font-bold">Strategy Consultation</h3>
              <ul className="list-disc ml-6">
                <li className="max-w-[40ch] sm:max-w-[900px] text-neutral-600 py-1">
                  <strong>Unclear social media goals?</strong> We&apos;ll help
                  you develop a clear and actionable social media strategy
                  aligned with your overall business objectives.
                </li>
                <li className="max-w-[40ch] sm:max-w-[900px] text-neutral-600 py-1">
                  <strong>Industry expertise:</strong> Leverage our knowledge of
                  the South African social media landscape to create a winning
                  strategy.
                </li>
                <li className="max-w-[40ch] sm:max-w-[900px] text-neutral-600 py-1">
                  <strong>Ongoing support:</strong> We&apos;ll be your ongoing
                  partner, providing guidance and support as your social media
                  presence grows.
                </li>
              </ul>
            </AnimatedCard>

            <AnimatedCard>
              <h3 className="text-lg font-bold">
                Product & Lifestyle Photography
              </h3>
              <ul className="list-disc ml-6">
                <li className="max-w-[40ch] sm:max-w-[900px] text-neutral-600 py-1">
                  <strong>Showcase your brand at its best:</strong>{' '}
                  High-quality, styled product and lifestyle shots that capture
                  attention and drive engagement.
                </li>
                <li className="max-w-[40ch] sm:max-w-[900px] text-neutral-600 py-1">
                  <strong>Tailored visual storytelling:</strong> Every image is
                  crafted to reflect your brand&apos;s identity and connect with
                  your target audience.
                </li>
                <li className="max-w-[40ch] sm:max-w-[900px] text-neutral-600 py-1">
                  <strong>From studio to on-location:</strong> Whether it&apos;s
                  clean studio shots or dynamic lifestyle settings, we deliver
                  visuals that sell.
                </li>
              </ul>
            </AnimatedCard>
          </div>

          <div className="my-4 flex sm:justify-center gap-4">
            <Button asChild>
              <Link href="/pricing">Our Pricing</Link>
            </Button>
            <Button asChild>
              <Link href="/faqs">Go To FAQs</Link>
            </Button>
          </div>
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
              Interested in leveraging the potential of social media for your
              business?
            </h2>
            <p className="max-w-[40ch] sm:max-w-[900px] text-left text-neutral-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Contact NS MediaLAB today to arrange a free consultation, and
              explore how we can support you in achieving your social media
              objectives.
            </p>
            <div className="py-4">
              <Button asChild>
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>

          <div className="flex flex-col items-center space-y-4 justify-start">
            <LottiePlayer
              src={cube}
              height="400px"
              width="400px"
              speed={0.5}
              aria-label="Animated 3D cube representing social media growth"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
