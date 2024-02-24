import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { LottiePlayer } from "@/components/LottiePlayer";
import { Metadata } from "next";

import cube from "../../public/rubiks-cube.json";
import data from "../../public/data.json";

export const metadata: Metadata = {
  title: "Pricing | NS MediaLAB",
  description:
    "Looking to dominate Facebook, Instagram, and YouTube for your South African business? NS MediLAB offers expert social media marketing services including content creation, advertising campaigns, analytics & reporting, and strategy consultation. Free consultations available!",
  keywords:
    "social media marketing South Africa, Facebook management South Africa, Instagram marketing South Africa, YouTube marketing South Africa, social media content creation South Africa, social media advertising South Africa, Facebook ads South Africa, Instagram ads South Africa, YouTube ads South Africa, social media strategy South Africa, affordable social media marketing South Africa, small business social media marketing South Africa",
};

interface Price {
  title: string;
  extra: string;
  price: string;
  features: string[];
}

export default function PricingPage() {
  const pricing = data.pricing;

  return (
    <div className="my-12 flex min-h-screen flex-col sm:items-center justify-center">
      <section className="w-full sm:text-center flex flex-col justify-start sm:items-center">
        <div className="space-y-12">
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

          <div className="grid grid-cols-2 gap-6 lg:gap-8 sm:grid-cols-3 text-left">
            {pricing.map((price: Price, index: number) => (
              <div
                key={index}
                className="bg-slate-100 rounded-lg p-6 dark:bg-slate-800 dark:highlight-white/5"
              >
                <h2 className="text-xl font-bold">{price.title}</h2>
                <h3 className="text-lg font-bold">{price.price}</h3>

                <ul className="list-disc ml-6">
                  {price.features.map((feature: string, index: number) => (
                    <li
                      key={index}
                      className="max-w-[40ch] sm:max-w-[900px] text-gray-500 dark:text-gray-400 py-1"
                    >
                      {feature}
                    </li>
                  ))}
                </ul>
                <p className="max-w-[40ch] sm:max-w-[900px] text-gray-500 dark:text-gray-400 py-1">
                  *{price.extra}
                </p>
              </div>
            ))}
          </div>
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
              Ready to unlock the power of social media for your business?
            </h2>
            <p className="max-w-[40ch] sm:max-w-[900px] text-left text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Contact NS MediaLAB today for a free consultation and see how we
              can help you achieve your social media goals!
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
