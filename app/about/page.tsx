import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { LottiePlayer } from "@/components/LottiePlayer";
import { Badge } from "@/components/ui/badge";

import { Metadata } from "next";

import cube from "../../public/rubiks-cube.json";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About | NS MediaLAB",
  description:
    "NS MediaLAB is more than just a business; it&apos;s a passion project born out of a love for connecting brands with their audiences on social media.",
  keywords:
    "social media marketing South Africa, Facebook management, Instagram marketing, content creation, social media ads, social media strategy, South African businesses, analytics, reporting, affordable social media services",
};

export default function AboutPage() {
  return (
    <div className="my-16 flex min-h-screen flex-col sm:items-center justify-between">
      <section className="w-full sm:text-center flex flex-col justify-start sm:items-center">
        <div className="space-y-12">
          <div className="flex flex-col items-start justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="mb-4 text-3xl font-bold tracking-tighter sm:text-5xl">
                About NS MediaLAB
              </h1>
              <p className="max-w-[40ch] sm:max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                NS MediaLAB is more than just a business; it&apos;s a passion
                project born out of a love for connecting brands with their
                audiences on social media.
              </p>

              <p className="max-w-[40ch] sm:max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Based in the picturesque Stilbaai, Western Cape, we&apos;ve been
                proudly serving over 45 small businesses since our inception 3
                years ago.
              </p>

              <p className="max-w-[40ch] sm:max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Our approach is simple: understand each client&apos;s unique
                needs and craft a strategy that delivers results, all while
                maintaining that one-on-one service that makes our clients feel
                valued and understood.
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
            <p className="max-w-[40ch] sm:max-w-[900px] text-left text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Ready to take your social media to the next level? Contact NS
              MediaLAB today to start crafting a strategy that speaks to your
              brand&apos;s unique voice and goals.
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
