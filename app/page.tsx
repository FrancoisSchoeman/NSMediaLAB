import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { LottiePlayer } from "@/components/LottiePlayer";
import { Badge } from "@/components/ui/badge";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import cube from "../public/rubiks-cube.json";
import elevatingCube from "../public/rubiks-cube-elevating.json";
import Link from "next/link";
import LogoCarousel from "@/components/LogoCarousel";

export default function Home() {
  return (
    <div className="flex flex-col sm:items-center justify-between relative w-full h-full">
      <section className="min-h-full grid gap-4 md:grid-cols-2 md:gap-16 pt-16">
        <div className="flex sm:justify-center flex-col">
          <h1 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
            Elevate Your Brand with Social Media Marketing
          </h1>
          <p className="max-w-[40ch] sm:max-w-[700px] mt-4 mx-auto text-gray-500 md:text-xl dark:text-gray-400">
            Welcome to NS MediaLAB, your go-to specialist for mastering the
            dynamic realm of social media marketing. Here, a unique personal
            approach underpins every campaign, with a focus on Facebook,
            Instagram, and YouTube to amplify your brand&apos;s visibility. Our
            goal is to develop tailored strategies that connect with your
            intended audience, encouraging interaction and expansion.
          </p>
          <div className="my-8 sm:my-4 flex gap-4">
            <Button asChild>
              <Link href="/contact">Contact Us</Link>
            </Button>
            <Button asChild>
              <Link href="/pricing">Our Pricing</Link>
            </Button>
          </div>
        </div>
        <div className="flex flex-col items-center space-y-4 justify-center">
          <LottiePlayer
            src={elevatingCube}
            height="400px"
            width="400px"
            speed={0.7}
          />
        </div>
      </section>

      <Separator className="mb-16 sm:my-16" />

      <section className="w-full sm:text-center flex flex-col justify-start sm:items-center space-y-6 sm:space-y-12">
        <div className="flex flex-col items-start justify-center space-y-4">
          <div className="space-y-2">
            <Link href="/services">
              <Badge>Services</Badge>
            </Link>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              What We Provide
            </h2>
            <p className="max-w-[40ch] sm:max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              At NS MediaLAB, we recognise that every platform presents distinct
              opportunities. From crafting engaging content for Facebook and
              Instagram to devising compelling video strategies for YouTube, our
              offerings are tailored to suit your precise requirements. We
              advocate for organic growth, customised content, and the strength
              of social media storytelling to forge significant connections with
              audiences.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 lg:gap-8 sm:grid-cols-2 lg:grid-cols-3 auto-rows-max">
          <Link href="/services">
            <div className="flex flex-col justify-start items-start text-left min-h-36 bg-slate-100 hover:bg-slate-200 rounded-lg p-6 dark:bg-slate-800 dark:hover:bg-slate-700 dark:highlight-white/5 transition-colors">
              <h3 className="text-lg font-bold">Social Media Management</h3>
              <p className="max-w-[40ch] sm:max-w-[900px] text-sm text-gray-500 dark:text-gray-400">
                We manage your social media accounts, ensuring consistent and
                engaging content for your audience.
              </p>
            </div>
          </Link>
          <Link href="/services">
            <div className="flex flex-col justify-start items-start text-left min-h-36 bg-slate-100 hover:bg-slate-200 rounded-lg p-6 dark:bg-slate-800 dark:hover:bg-slate-700 dark:highlight-white/5 transition-colors">
              <h3 className="text-lg font-bold">Content Creation</h3>
              <p className="max-w-[40ch] sm:max-w-[900px] text-sm text-gray-500 dark:text-gray-400">
                We create high-quality content that resonates with your
                audience.
              </p>
            </div>
          </Link>
          <Link href="/services">
            <div className="flex flex-col justify-start items-start text-left min-h-36 bg-slate-100 hover:bg-slate-200 rounded-lg p-6 dark:bg-slate-800 dark:hover:bg-slate-700 dark:highlight-white/5 transition-colors">
              <h3 className="text-lg font-bold">Advertising Campaigns</h3>
              <p className="max-w-[40ch] sm:max-w-[900px] text-sm text-gray-500 dark:text-gray-400">
                We create and manage effective advertising campaigns to reach a
                wider audience and drive more traffic to your business.
              </p>
            </div>
          </Link>
          <Link href="/services">
            <div className="flex flex-col justify-start items-start text-left min-h-36 bg-slate-100 hover:bg-slate-200 rounded-lg p-6 dark:bg-slate-800 dark:hover:bg-slate-700 dark:highlight-white/5 transition-colors">
              <h3 className="text-lg font-bold">Analytics & Reporting</h3>
              <p className="max-w-[40ch] sm:max-w-[900px] text-sm text-gray-500 dark:text-gray-400">
                We provide detailed reports on your social media performance and
                insights on how to improve.
              </p>
            </div>
          </Link>
          <Link href="/services">
            <div className="flex flex-col justify-start items-start text-left min-h-36 bg-slate-100 hover:bg-slate-200 rounded-lg p-6 dark:bg-slate-800 dark:hover:bg-slate-700 dark:highlight-white/5 transition-colors">
              <h3 className="text-lg font-bold">Paid Advertising</h3>
              <p className="max-w-[40ch] sm:max-w-[900px] text-sm text-gray-500 dark:text-gray-400">
                We manage your social media advertising campaigns to reach a
                wider audience.
              </p>
            </div>
          </Link>
          <Link href="/services">
            <div className="flex flex-col justify-start items-start text-left min-h-36 bg-slate-100 hover:bg-slate-200 rounded-lg p-6 dark:bg-slate-800 dark:hover:bg-slate-700 dark:highlight-white/5 transition-colors">
              <h3 className="text-lg font-bold">Strategy Consultation</h3>
              <p className="max-w-[40ch] sm:max-w-[900px] text-sm text-gray-500 dark:text-gray-400">
                We provide strategic consultation to align your social media
                efforts with your business goals.
              </p>
            </div>
          </Link>
        </div>
        <Button asChild className="self-start sm:self-center">
          <Link href="/services">Go to Services</Link>
        </Button>
      </section>

      <Separator className="my-16" />

      <section className="w-full sm:text-center flex flex-col justify-start sm:items-center">
        <div className="space-y-6 sm:space-y-12">
          <div className="flex flex-col items-center justify-center space-y-4">
            <div className="space-y-2">
              <Badge>Testimonials</Badge>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                What Our Clients Have to Say
              </h2>
              <p className="max-w-[40ch] sm:max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Hear from some our satisfied clients who have seen their digital
                presence transform. From increased engagement rates to
                significant follower growth, our testimonials speak to the
                effectiveness and personal attention each project receives.
              </p>
            </div>
          </div>
          <div className="sm:pt-6 w-72 sm:w-full">
            <TestimonialCarousel />
          </div>
        </div>
        <Button asChild className="mt-6 sm:mt-12 self-start sm:self-center">
          <Link href="/faqs">Read Our FAQs</Link>
        </Button>
      </section>

      <Separator className="my-16" />

      <section className="w-full sm:text-center flex flex-col justify-start sm:items-center">
        {/* <div className="grid gap-4 md:grid-cols-2 md:gap-16"> */}
        <div className="flex flex-col sm:items-center justify-center items-start space-y-4 sm:space-y-2">
          <Badge>Our Results</Badge>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
            Some Of Our Clients
          </h2>
          <p className="max-w-[40ch] sm:max-w-[900px] text-left text-gray-500 md:text-xl/relaxed sm:text-center lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            Our portfolio features a variety of clients who have experienced
            real business growth through strategic social media marketing,
            showcasing our successful partnerships.
          </p>
          <div className="w-72 sm:w-full pt-4 my-6 sm:my-0">
            <LogoCarousel />
          </div>
          <div className="pb-0 sm:py-4">
            <Button asChild>
              <Link href="/pricing">Our Pricing</Link>
            </Button>
          </div>
        </div>
      </section>

      <Separator className="my-16 sm:mb-0" />

      <section className="w-full">
        <div className="grid gap-4 md:grid-cols-2 md:gap-16">
          <div className="flex flex-col sm:items-start justify-center space-y-4 sm:space-y-2">
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
            <div className="sm:my-4 flex gap-4">
              <Button asChild>
                <Link href="/contact">Contact Us</Link>
              </Button>
              <Button asChild>
                <Link href="/pricing">Our Pricing</Link>
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
