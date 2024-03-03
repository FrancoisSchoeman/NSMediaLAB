import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { LottiePlayer } from "@/components/LottiePlayer";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

import { Metadata } from "next";

import cube from "../../public/rubiks-cube.json";

export const metadata: Metadata = {
  title: "Frequently Asked Questions | NS MediaLAB",
  description:
    "Discover answers to your burning questions about social media marketing, our processes, and how you can start working with NS MediaLAB to boost your online presence.",
  keywords:
    "social media marketing South Africa, Facebook management, Instagram marketing, content creation, social media ads, social media strategy, South African businesses, analytics, reporting, affordable social media services",
};

export default function FAQsPage() {
  return (
    <div className="my-16 flex min-h-screen flex-col sm:items-center justify-between relative w-full h-full">
      <section className="w-full sm:text-center flex flex-col justify-start sm:items-center">
        <div className="space-y-12">
          <div className="flex flex-col items-start justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="mb-4 text-3xl font-bold tracking-tighter sm:text-5xl">
                FAQs
              </h1>
              <p className="max-w-[40ch] sm:max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Discover answers to your burning questions about social media
                marketing, our processes, and how you can start working with NS
                MediaLAB to boost your online presence.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full">
        <Separator className="mt-16" />

        <div>
          <Accordion
            type="single"
            collapsible
            className="text-lg w-full text-left"
          >
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-left">
                Do I really need social media marketing for my business?
              </AccordionTrigger>
              <AccordionContent className="text-lg text-left">
                <p>
                  In short, yes! South Africans are highly active on social
                  media, with almost 90% using platforms like Facebook and
                  Instagram daily. This presents a massive opportunity to reach
                  your target audience, build brand awareness, and boost sales.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger className="text-left">
                Which platforms should I be on?
              </AccordionTrigger>
              <AccordionContent className="text-lg text-left">
                <p>
                  The best platforms for your business depend on your target
                  audience and industry. We can help you identify the right
                  platforms and develop a tailored strategy to maximize your
                  reach and engagement. Facebook excels at building community,
                  Instagram is visual-driven, and YouTube is perfect for video
                  content.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger className="text-left">
                What kind of content can you create?
              </AccordionTrigger>
              <AccordionContent className="text-lg text-left">
                <p>
                  We create a variety of eye-catching and engaging content
                  tailored to each platform, including:
                </p>
                <ul className="list-disc ml-6">
                  <li>
                    Facebook: Engaging posts, polls, questions, and live videos.
                  </li>
                  <li>
                    Instagram: Stunning photos, reels, stories, and IGTV
                    content.
                  </li>
                  <li>
                    YouTube: High-quality explainer videos, product demos, and
                    behind-the-scenes content.
                  </li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger className="text-left">
                I&apos;m on a tight budget. Can you still help me?
              </AccordionTrigger>
              <AccordionContent className="text-lg text-left">
                <p>
                  Absolutely! We offer flexible packages and transparent pricing
                  to fit your needs and budget. We can also help you optimize
                  your spending and measure your results to ensure you&apos;re
                  getting the most bang for your buck.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5">
              <AccordionTrigger className="text-left">
                What kind of results can I expect?
              </AccordionTrigger>
              <AccordionContent className="text-lg text-left">
                <p>
                  Our goal is to help you achieve your specific social media
                  goals, whether it&apos;s increasing brand awareness, driving
                  website traffic, generating leads, or boosting sales.
                  We&apos;ll provide you with regular reports so you can track
                  your progress and see the impact of our work.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6">
              <AccordionTrigger className="text-left">
                Do you offer paid advertising services?
              </AccordionTrigger>
              <AccordionContent className="text-lg text-left">
                <p>
                  Yes, we can help you create and manage effective paid
                  advertising campaigns on all three platforms. We&apos;ll
                  target your ideal audience and deliver compelling ad creatives
                  to maximize your reach and return on investment (ROI).
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-7">
              <AccordionTrigger className="text-left">
                Do you offer free consultations?
              </AccordionTrigger>
              <AccordionContent className="text-lg text-left">
                <p>
                  Absolutely! We&apos;d love to discuss your social media needs
                  and goals in more detail. Schedule a free consultation today
                  and see how we can help you dominate the South African social
                  media landscape!
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      <Separator className="mb-16 sm:mb-0" />

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
