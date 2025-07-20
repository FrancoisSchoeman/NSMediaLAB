import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { LottiePlayer } from '@/components/LottiePlayer';
import { Badge } from '@/components/ui/badge';
import TestimonialCarousel from '@/components/TestimonialCarousel';
import cube from '../public/rubiks-cube.json';
import elevatingCube from '../public/rubiks-cube-elevating.json';
import Link from 'next/link';
import LogoCarousel from '@/components/LogoCarousel';
import { LinkCard } from '@/components/LinkCard';
import AnimatedTitle from '@/components/AnimatedTitle';
import StatsSection from '@/components/StatsSection';

export default function Home() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'NS MediaLAB',
    description: 'Social media marketing services in Stilbaai',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Stilbaai',
      addressRegion: 'Western Cape',
      addressCountry: 'South Africa',
    },
    telephone: '082 619 1100',
    email: 'nadia@nsmedialab.co.za',
  };

  return (
    <div className="flex flex-col sm:items-center justify-between relative w-full h-full">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <section className="min-h-full grid gap-4 md:grid-cols-2 md:gap-16 pt-16">
        <div className="flex sm:justify-center flex-col">
          <AnimatedTitle text="Amplify Your Brand with Social Media Marketing" />
          <p className="max-w-[40ch] sm:max-w-[700px] mt-4 mx-auto text-gray-500 md:text-xl dark:text-gray-400">
            Hey there! At NS MediaLAB, we&apos;re passionate about making your
            brand shine on social media. We take the time to get to know what
            makes your brand unique, crafting personalized campaigns and
            eye-catching posts for platforms like Facebook, Instagram, and
            YouTube. Our mission? To create strategies that truly click with
            your audience, spark engagement, and help your brand grow. Let’s
            team up and make some waves!
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
            aria-label="Animated 3D cube representing social media growth"
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
              What We Offer
            </h2>
            <p className="max-w-[40ch] sm:max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              At NS MediaLAB, we understand that each platform offers unique
              possibilities. Whether it’s creating captivating content for
              Facebook and Instagram or developing impactful video strategies
              for YouTube, our services are carefully designed to meet your
              specific needs. We believe in both organic and paid growth,
              delivering tailored content, and harnessing the power of social
              media storytelling to build meaningful connections with your
              audience.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 lg:gap-8 sm:grid-cols-2 lg:grid-cols-3 auto-rows-max">
          <LinkCard href="/services">
            <h3 className="text-lg font-bold">Social Media Management</h3>
            <p className="max-w-[40ch] sm:max-w-[900px] text-sm text-gray-500 dark:text-gray-400">
              We manage your social media accounts, ensuring consistent and
              engaging content for your audience.
            </p>
          </LinkCard>
          <LinkCard href="/services">
            <h3 className="text-lg font-bold">Content Creation</h3>
            <p className="max-w-[40ch] sm:max-w-[900px] text-sm text-gray-500 dark:text-gray-400">
              We create high-quality content that resonates with your audience.
            </p>
          </LinkCard>
          <LinkCard href="/services">
            <h3 className="text-lg font-bold">Advertising Campaigns</h3>
            <p className="max-w-[40ch] sm:max-w-[900px] text-sm text-gray-500 dark:text-gray-400">
              We create and manage effective advertising campaigns to reach a
              wider audience and drive more traffic to your business.
            </p>
          </LinkCard>
          <LinkCard href="/services">
            <h3 className="text-lg font-bold">Analytics & Reporting</h3>
            <p className="max-w-[40ch] sm:max-w-[900px] text-sm text-gray-500 dark:text-gray-400">
              We provide detailed reports on your social media performance and
              insights on how to improve.
            </p>
          </LinkCard>
          <LinkCard href="/services">
            <h3 className="text-lg font-bold">Strategy Consultation</h3>
            <p className="max-w-[40ch] sm:max-w-[900px] text-sm text-gray-500 dark:text-gray-400">
              We provide strategic consultation to align your social media
              efforts with your business goals.
            </p>
          </LinkCard>
          <LinkCard href="/services">
            <h3 className="text-lg font-bold">
              Product & Lifestyle Photography
            </h3>
            <p className="max-w-[40ch] sm:max-w-[900px] text-sm text-gray-500 dark:text-gray-400">
              We provide high-quality photography services to showcase your
              products or services.
            </p>
          </LinkCard>
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
            <StatsSection />
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

      <div className="mb-16"></div>
    </div>
  );
}
