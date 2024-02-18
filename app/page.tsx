import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { LottiePlayer } from "@/components/LottiePlayer";
import { Badge } from "@/components/ui/badge";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import cube from "../public/rubiks-cube.json";
import elevatingCube from "../public/rubiks-cube-elevating.json";
import { Chart } from "@/components/Chart";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between">
      <section className="pt-16 sm:pt-0">
        <div className="grid gap-4 md:grid-cols-2 md:gap-16">
          <div className="flex justify-center flex-col">
            <h1 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
              Elevate Your Brand with Social Media Marketing
            </h1>
            <p className="max-w-[40ch] sm:max-w-[700px] mt-4 mx-auto text-gray-500 md:text-xl dark:text-gray-400">
              {/* We provide innovative solutions to expand your brand&apos;s reach
              on social media platforms. Let&apos;s grow together. */}
              Welcome to NS MediaLAB, your dedicated partner in navigating the
              bustling world of social media marketing. We bring a personal
              touch to each campaign, focusing on Facebook, Instagram, and
              YouTube to elevate your brand&apos;s presence. Our mission? To
              craft bespoke strategies that resonate with your target audience,
              fostering engagement and growth.
            </p>
            <div className="my-4">
              <Button asChild>
                <Link href="/contact">Get Started</Link>
              </Button>
            </div>
          </div>
          <div className="flex flex-col items-center space-y-4 justify-start">
            <LottiePlayer
              src={elevatingCube}
              height="400px"
              width="400px"
              speed={0.7}
            />
          </div>
        </div>
      </section>

      <Separator className="my-16" />

      <section className="w-full">
        <div className="space-y-12">
          <div className="flex flex-col items-start justify-center space-y-4">
            <div className="space-y-2">
              <Link href="/services">
                <Badge>Services</Badge>
              </Link>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                What We Offer
              </h2>
              <p className="max-w-[40ch] sm:max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                {/* We offer a wide range of social media marketing services to help
                your business grow. */}
                At NS MediaLAB, we understand that each platform offers unique
                opportunities. From curating engaging content for Facebook and
                Instagram to developing compelling video strategies for YouTube,
                our services are designed to meet your specific needs. We
                believe in organic growth, tailored content, and the power of
                social media storytelling to connect with audiences
                meaningfully.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6 lg:gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <Link href="/services">
              <div className="grid gap-1 bg-slate-100 hover:bg-slate-200 rounded-lg p-6 dark:bg-slate-800 dark:hover:bg-slate-700 dark:highlight-white/5 transition-colors">
                <h3 className="text-lg font-bold">Social Media Management</h3>
                <p className="max-w-[40ch] sm:max-w-[900px] text-sm text-gray-500 dark:text-gray-400">
                  We manage your social media accounts, ensuring consistent and
                  engaging content for your audience.
                </p>
              </div>
            </Link>
            <Link href="/services">
              <div className="grid gap-1 bg-slate-100 hover:bg-slate-200 rounded-lg p-6 dark:bg-slate-800 dark:hover:bg-slate-700 dark:highlight-white/5 transition-colors">
                <h3 className="text-lg font-bold">Content Creation</h3>
                <p className="max-w-[40ch] sm:max-w-[900px] text-sm text-gray-500 dark:text-gray-400">
                  Our team of creative professionals will create high-quality
                  content that resonates with your audience.
                </p>
              </div>
            </Link>
            <Link href="/services">
              <div className="grid gap-1 bg-slate-100 hover:bg-slate-200 rounded-lg p-6 dark:bg-slate-800 dark:hover:bg-slate-700 dark:highlight-white/5 transition-colors">
                <h3 className="text-lg font-bold">Advertising Campaigns</h3>
                <p className="max-w-[40ch] sm:max-w-[900px] text-sm text-gray-500 dark:text-gray-400">
                  We create and manage effective advertising campaigns to reach
                  a wider audience and drive more traffic to your business.
                </p>
              </div>
            </Link>
            <Link href="/services">
              <div className="grid gap-1 bg-slate-100 hover:bg-slate-200 rounded-lg p-6 dark:bg-slate-800 dark:hover:bg-slate-700 dark:highlight-white/5 transition-colors">
                <h3 className="text-lg font-bold">Analytics & Reporting</h3>
                <p className="max-w-[40ch] sm:max-w-[900px] text-sm text-gray-500 dark:text-gray-400">
                  We provide detailed reports on your social media performance
                  and insights on how to improve.
                </p>
              </div>
            </Link>
            <Link href="/services">
              <div className="grid gap-1 bg-slate-100 hover:bg-slate-200 rounded-lg p-6 dark:bg-slate-800 dark:hover:bg-slate-700 dark:highlight-white/5 transition-colors">
                <h3 className="text-lg font-bold">Paid Advertising</h3>
                <p className="max-w-[40ch] sm:max-w-[900px] text-sm text-gray-500 dark:text-gray-400">
                  We manage your social media advertising campaigns to reach a
                  wider audience.
                </p>
              </div>
            </Link>
            <Link href="/services">
              <div className="grid gap-1 bg-slate-100 hover:bg-slate-200 rounded-lg p-6 dark:bg-slate-800 dark:hover:bg-slate-700 dark:highlight-white/5 transition-colors">
                <h3 className="text-lg font-bold">Strategy Consultation</h3>
                <p className="max-w-[40ch] sm:max-w-[900px] text-sm text-gray-500 dark:text-gray-400">
                  We provide strategic consultation to align your social media
                  efforts with your business goals.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <Separator className="my-16" />

      <section className="w-full">
        <div className="space-y-12">
          <div className="flex flex-col items-start justify-center space-y-4">
            <div className="space-y-2">
              <Badge>Testimonials</Badge>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                What Some of Our Clients Say
              </h2>
              <p className="max-w-[40ch] sm:max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Hear from our satisfied clients who have seen their digital
                presence transform. From increased engagement rates to
                significant follower growth, our testimonials speak to the
                effectiveness and personal attention each project receives.
              </p>
            </div>
          </div>
          <div className="pt-6 w-64 sm:w-full">
            <TestimonialCarousel />
          </div>
        </div>
      </section>

      <Separator className="my-16" />

      <section className="w-full">
        <div className="grid gap-4 md:grid-cols-2 md:gap-16">
          <div className="flex flex-col items-start justify-center space-y-2">
            <Badge>Our Results</Badge>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Your Growth is Our Success
            </h2>
            <p className="max-w-[40ch] sm:max-w-[900px] text-left text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Our portfolio showcases a range of success stories, demonstrating
              how strategic social media marketing can lead to tangible business
              growth. Let these stories inspire your next campaign.
            </p>
            <div className="py-4">
              <Button asChild>
                <Link href="/contact">Get Started</Link>
              </Button>
            </div>
          </div>

          <div className="flex flex-col items-center space-y-4 justify-start">
            <Chart />
            <p className="max-w-[40ch] sm:max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Average client Facebook page % growth over 12 months.
            </p>
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

      <div className="mb-16"></div>
    </div>
  );
}
