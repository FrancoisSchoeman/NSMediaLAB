import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { LottiePlayer } from "@/components/LottiePlayer";
import { Badge } from "@/components/ui/badge";
import { Metadata } from "next";
import Link from "next/link";

import cube from "../../public/rubiks-cube.json";

export const metadata: Metadata = {
  title: "Services | NS MediaLAB",
  description:
    "Dive deeper into our services with detailed descriptions of how we approach each platform, ensuring your business stands out in the digital crowd.",
  keywords:
    "social media marketing South Africa, Facebook management, Instagram marketing, content creation, social media ads, social media strategy, South African businesses, analytics, reporting, affordable social media services",
};

export default function ServicesPage() {
  return (
    <div className="my-12 flex min-h-screen flex-col sm:items-center justify-center">
      <section className="w-full sm:text-center flex flex-col justify-start sm:items-center">
        <div className="space-y-12">
          <div className="flex flex-col items-center justify-center space-y-4">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Services
              </h2>
              <p className="max-w-[40ch] sm:max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Dive deeper into our services with detailed descriptions of how
                we approach each platform, ensuring your business stands out in
                the digital crowd.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 lg:gap-8 sm:grid-cols-2 text-left">
            <div className="grid gap-1 bg-slate-100 rounded-lg p-6 dark:bg-slate-800 dark:highlight-white/5">
              <h3 className="text-lg font-bold">Social Media Management</h3>
              <ul className="list-disc ml-6">
                <li className="max-w-[40ch] sm:max-w-[900px] text-gray-500 dark:text-gray-400 py-1">
                  <strong>Hands-off account management:</strong> Ditch the daily
                  posting grind and focus on running your business while we keep
                  your social media channels buzzing with engaging content.
                </li>
                <li className="max-w-[40ch] sm:max-w-[900px] text-gray-500 dark:text-gray-400 py-1">
                  <strong>Platform expertise:</strong> Whether it&apos;s
                  Facebook, Instagram, LinkedIn, Twitter, or even TikTok, we
                  know the unique nuances of each platform to maximize your
                  reach and engagement.
                </li>
                <li className="max-w-[40ch] sm:max-w-[900px] text-gray-500 dark:text-gray-400 py-1">
                  <strong>Community management:</strong> We&apos;ll respond to
                  comments and messages promptly, fostering positive brand
                  interactions and building loyal followings.
                </li>
              </ul>
            </div>

            <div className="grid gap-1 bg-slate-100 rounded-lg p-6 dark:bg-slate-800 dark:highlight-white/5">
              <h3 className="text-lg font-bold">Content Creation</h3>
              <ul className="list-disc ml-6">
                <li className="max-w-[40ch] sm:max-w-[900px] text-gray-500 dark:text-gray-400 py-1">
                  <strong>Eye-catching visuals:</strong> Say goodbye to stock
                  photos! We&apos;ll create stunning graphics, videos, and other
                  content that resonates with your target audience.
                </li>
                <li className="max-w-[40ch] sm:max-w-[900px] text-gray-500 dark:text-gray-400 py-1">
                  <strong>Compelling copy:</strong> Our wordsmiths craft
                  captivating captions, stories, and ads that grab attention and
                  drive action.
                </li>
                <li className="max-w-[40ch] sm:max-w-[900px] text-gray-500 dark:text-gray-400 py-1">
                  <strong>Authentic brand voice:</strong> We&apos;ll capture
                  your unique brand personality and translate it into engaging
                  social media content.
                </li>
              </ul>
            </div>

            <div className="grid gap-1 bg-slate-100 rounded-lg p-6 dark:bg-slate-800 dark:highlight-white/5">
              <h3 className="text-lg font-bold">Advertising Campaigns</h3>
              <ul className="list-disc ml-6">
                <li className="max-w-[40ch] sm:max-w-[900px] text-gray-500 dark:text-gray-400 py-1">
                  <strong>Laser-targeted ads:</strong> Reach the right people
                  with laser-focused ad campaigns that deliver maximum results
                  for your budget.
                </li>
                <li className="max-w-[40ch] sm:max-w-[900px] text-gray-500 dark:text-gray-400 py-1">
                  <strong>Performance optimization:</strong> We&apos;ll
                  constantly tweak and optimize your ads to ensure you&apos;re
                  getting the most bang for your buck.
                </li>
                <li className="max-w-[40ch] sm:max-w-[900px] text-gray-500 dark:text-gray-400 py-1">
                  <strong>Clear goals & transparency:</strong> We&apos;ll define
                  clear campaign goals and keep you informed every step of the
                  way.
                </li>
              </ul>
            </div>

            <div className="grid gap-1 bg-slate-100 rounded-lg p-6 dark:bg-slate-800 dark:highlight-white/5">
              <h3 className="text-lg font-bold">Analytics & Reporting</h3>
              <ul className="list-disc ml-6">
                <li className="max-w-[40ch] sm:max-w-[900px] text-gray-500 dark:text-gray-400 py-1">
                  <strong>Data-driven insights:</strong> We don&apos;t just post
                  and pray. We track key metrics and provide actionable insights
                  to help you understand what&apos;s working and what&apos;s
                  not.
                </li>
                <li className="max-w-[40ch] sm:max-w-[900px] text-gray-500 dark:text-gray-400 py-1">
                  <strong>Customizable reports:</strong> Get the data you need,
                  delivered in a format that&apos;s easy to understand and
                  digest.
                </li>
                <li className="max-w-[40ch] sm:max-w-[900px] text-gray-500 dark:text-gray-400 py-1">
                  <strong>Continuous improvement:</strong> We use data to
                  constantly refine your social media strategy for better
                  results.
                </li>
              </ul>
            </div>

            <div className="grid gap-1 bg-slate-100 rounded-lg p-6 dark:bg-slate-800 dark:highlight-white/5">
              <h3 className="text-lg font-bold">Paid Advertising</h3>
              <ul className="list-disc ml-6">
                <li className="max-w-[40ch] sm:max-w-[900px] text-gray-500 dark:text-gray-400 py-1">
                  <strong>Boost your reach & engagement:</strong> Take your
                  social media presence to the next level with paid advertising
                  campaigns on all major platforms.
                </li>
                <li className="max-w-[40ch] sm:max-w-[900px] text-gray-500 dark:text-gray-400 py-1">
                  <strong>Expert campaign management:</strong> We&apos;ll handle
                  everything from budget allocation to ad creation and
                  optimization.
                </li>
                <li className="max-w-[40ch] sm:max-w-[900px] text-gray-500 dark:text-gray-400 py-1">
                  <strong>Measurable results:</strong> Track your ad performance
                  and see the ROI on your investment.
                </li>
              </ul>
            </div>

            <div className="grid gap-1 pr-4 bg-slate-100 rounded-lg p-6 dark:bg-slate-800 dark:highlight-white/5">
              <h3 className="text-lg font-bold">Strategy Consultation</h3>
              <ul className="list-disc ml-6">
                <li className="max-w-[40ch] sm:max-w-[900px] text-gray-500 dark:text-gray-400 py-1">
                  <strong>Unclear social media goals?</strong> We&apos;ll help
                  you develop a clear and actionable social media strategy
                  aligned with your overall business objectives.
                </li>
                <li className="max-w-[40ch] sm:max-w-[900px] text-gray-500 dark:text-gray-400 py-1">
                  <strong>Industry expertise:</strong> Leverage our knowledge of
                  the South African social media landscape to create a winning
                  strategy.
                </li>
                <li className="max-w-[40ch] sm:max-w-[900px] text-gray-500 dark:text-gray-400 py-1">
                  <strong>Ongoing support:</strong> We&apos;ll be your ongoing
                  partner, providing guidance and support as your social media
                  presence grows.
                </li>
              </ul>
            </div>
          </div>
          <Button asChild>
            <Link href="/faqs">Go To FAQs</Link>
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
