import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { LottiePlayer } from "@/components/LottiePlayer";
import { Badge } from "@/components/ui/badge";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import cube from "../public/rubiks-cube.json";
import elevatingCube from "../public/rubiks-cube-elevating.json";
import { Chart } from "@/components/Chart";

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
              We provide innovative solutions to expand your brand&apos;s reach
              on social media platforms. Let&apos;s grow together.
            </p>
            <div className="my-4">
              <Button>Get Started</Button>
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

      <Separator className="mb-16" />

      <section className="w-full">
        <div className="space-y-12">
          <div className="flex flex-col items-start justify-center space-y-4">
            <div className="space-y-2">
              <Badge>Services</Badge>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                What We Offer
              </h2>
              <p className="max-w-[40ch] sm:max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                We offer a wide range of social media marketing services to help
                your business grow.
              </p>
              <p className="max-w-[40ch] sm:max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Let&apos;s take a look at what we can do for you.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6 lg:gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="grid gap-1 bg-slate-100 rounded-lg p-6 dark:bg-slate-800 dark:highlight-white/5">
              <h3 className="text-lg font-bold">Social Media Management</h3>
              <p className="max-w-[40ch] sm:max-w-[900px] text-sm text-gray-500 dark:text-gray-400">
                We manage your social media accounts, ensuring consistent and
                engaging content for your audience.
              </p>
            </div>
            <div className="grid gap-1 bg-slate-100 rounded-lg p-6 dark:bg-slate-800 dark:highlight-white/5">
              <h3 className="text-lg font-bold">Content Creation</h3>
              <p className="max-w-[40ch] sm:max-w-[900px] text-sm text-gray-500 dark:text-gray-400">
                Our team of creative professionals will create high-quality
                content that resonates with your audience.
              </p>
            </div>
            <div className="grid gap-1 bg-slate-100 rounded-lg p-6 dark:bg-slate-800 dark:highlight-white/5">
              <h3 className="text-lg font-bold">Advertising Campaigns</h3>
              <p className="max-w-[40ch] sm:max-w-[900px] text-sm text-gray-500 dark:text-gray-400">
                We create and manage effective advertising campaigns to reach a
                wider audience and drive more traffic to your business.
              </p>
            </div>
            <div className="grid gap-1 bg-slate-100 rounded-lg p-6 dark:bg-slate-800 dark:highlight-white/5">
              <h3 className="text-lg font-bold">Analytics & Reporting</h3>
              <p className="max-w-[40ch] sm:max-w-[900px] text-sm text-gray-500 dark:text-gray-400">
                We provide detailed reports on your social media performance and
                insights on how to improve.
              </p>
            </div>
            <div className="grid gap-1 bg-slate-100 rounded-lg p-6 dark:bg-slate-800 dark:highlight-white/5">
              <h3 className="text-lg font-bold">Paid Advertising</h3>
              <p className="max-w-[40ch] sm:max-w-[900px] text-sm text-gray-500 dark:text-gray-400">
                We manage your social media advertising campaigns to reach a
                wider audience.
              </p>
            </div>
            <div className="grid gap-1 pr-4 bg-slate-100 rounded-lg p-6 dark:bg-slate-800 dark:highlight-white/5">
              <h3 className="text-lg font-bold">Strategy Consultation</h3>
              <p className="max-w-[40ch] sm:max-w-[900px] text-sm text-gray-500 dark:text-gray-400">
                We provide strategic consultation to align your social media
                efforts with your business goals.
              </p>
            </div>
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
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
              NS MediaLAB has helped numerous businesses grow their social media
              presence and increase their revenue.
            </p>
            <p className="max-w-[40ch] sm:max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Let&apos;s take a look at some of our results.
            </p>
            <div className="py-4">
              <Button>Get Started</Button>
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
            <Badge>Contact Us</Badge>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Get In Touch
            </h2>
            <p className="max-w-[40ch] sm:max-w-[900px] text-left text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Ready to take your social media marketing to the next level?
            </p>
            <p className="max-w-[40ch] sm:max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Contact us today to get started.
            </p>
            <div className="py-4">
              <Button>Get Started</Button>
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
