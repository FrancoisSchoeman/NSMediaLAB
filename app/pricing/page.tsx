import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import { LottiePlayer } from '@/components/LottiePlayer';
import { Metadata } from 'next';

import cube from '../../public/rubiks-cube.json';
import PricingCards from '@/components/PricingCards';

export const metadata: Metadata = {
  title: 'Pricing | NS MediaLAB',
  description:
    'Looking to dominate Facebook, Instagram, and YouTube for your South African business? NS MediLAB offers expert social media marketing services including content creation, advertising campaigns, analytics & reporting, and strategy consultation. Free consultations available!',
  keywords:
    'social media marketing Stilbaai, Instagram marketing Stilbaai, YouTube marketing Stilbaai, social media advertising Still Bay, Facebook ads Still Bay, Instagram ads Stilbaai, YouTube ads Stilbaai, affordable social media marketing South Africa',
};

export default function PricingPage() {
  return (
    <div className="my-12 flex min-h-screen flex-col sm:items-center justify-center relative w-full h-full">
      <section className="w-full sm:text-center flex flex-col justify-start sm:items-center">
        <div className="space-y-6 sm:space-y-12">
          <div className="flex flex-col items-center justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Pricing
              </h1>
              <p className="max-w-[40ch] sm:max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Looking to dominate Facebook, Instagram, and YouTube for your
                South African business? NS MediaLAB offers expert social media
                marketing services including content creation, advertising
                campaigns, analytics & reporting, and strategy consultation.
              </p>
            </div>
          </div>

          <PricingCards />

          <Button asChild>
            <Link href="/contact">Contact Us</Link>
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
              Keen to harness the potential of social media for your business?
            </h2>
            <p className="max-w-[40ch] sm:max-w-[900px] text-left text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Get in touch with NS MediaLAB today for a free consultation and
              discover how we can assist you in reaching your social media
              objectives!
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
