import { Metadata } from 'next';

import HeroSocialParallax from '@/components/HeroSocialParallax';
import { SectionWrapper, SectionHeader } from '@/components/SectionWrapper';
import { ServiceCard } from '@/components/LinkCard';
import StatsSection from '@/components/StatsSection';
import TestimonialCarousel from '@/components/TestimonialCarousel';
import LogoCarousel from '@/components/LogoCarousel';
import { CTASection } from '@/components/CTASection';
import { TrustSection } from '@/components/TrustBadges';
import { Button } from '@/components/ui/button';

import {
  Users,
  PenTool,
  BarChart3,
  Megaphone,
  Lightbulb,
  Camera,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Expert Social Media Marketing in Stilbaai | NS MediaLAB',
  description:
    "Transform your brand with NS MediaLAB's personalised social media marketing services. Based in Stilbaai, we help small businesses grow on Facebook, Instagram, YouTube & more. Get a free consultation today!",
};

const services = [
  {
    title: 'Social Media Management',
    description:
      'Full account management across Facebook, Instagram, YouTube & more. We handle posting, engagement, and community building.',
    icon: <Users className="h-6 w-6" />,
  },
  {
    title: 'Content Creation',
    description:
      'Eye-catching graphics, compelling copy, and engaging videos tailored to your brand and audience.',
    icon: <PenTool className="h-6 w-6" />,
  },
  {
    title: 'Advertising Campaigns',
    description:
      'Strategic paid advertising on all major platforms to boost reach, engagement, and conversions.',
    icon: <Megaphone className="h-6 w-6" />,
  },
  {
    title: 'Analytics & Reporting',
    description:
      'Data-driven insights with regular reports to track performance and optimize your strategy.',
    icon: <BarChart3 className="h-6 w-6" />,
  },
  {
    title: 'Strategy Consultation',
    description:
      'Expert guidance to align your social media efforts with your business goals.',
    icon: <Lightbulb className="h-6 w-6" />,
  },
  {
    title: 'Photography',
    description:
      'Professional product and lifestyle photography to showcase your brand beautifully.',
    icon: <Camera className="h-6 w-6" />,
  },
];

export default function Home() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'NS MediaLAB - Social Media Marketing',
    description:
      'Professional social media marketing services for small businesses in South Africa',
    mainEntity: {
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
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* Hero Section */}
      <HeroSocialParallax />

      {/* Trust Stats Bar */}
      <TrustSection />

      {/* Services Section */}
      <SectionWrapper
        id="services"
        trackView
        sectionName="services"
        background="white"
      >
        <SectionHeader
          badge="Our Services"
          title="What We Offer"
          description="I see social media as a Rubik's Cube — each platform is a different face, and success happens when they all align. Let me help you solve yours."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              href="/services"
            />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button asChild size="lg">
            <a href="/services">View All Services</a>
          </Button>
        </div>
      </SectionWrapper>

      {/* Client Logos Section */}
      <SectionWrapper background="gray" trackView sectionName="clients">
        <SectionHeader
          badge="Our Clients"
          title="Trusted by Local Businesses"
          description="We've helped businesses across South Africa transform their social media presence."
        />
        <div className="mt-8">
          <LogoCarousel />
        </div>
      </SectionWrapper>

      {/* Testimonials Section */}
      <SectionWrapper
        id="testimonials"
        trackView
        sectionName="testimonials"
        background="white"
      >
        <SectionHeader
          badge="Testimonials"
          title="What Our Clients Say"
          description="Hear from businesses who have transformed their digital presence with NS MediaLAB."
        />

        <StatsSection />

        <div className="mt-8">
          <TestimonialCarousel />
        </div>

        <div className="mt-12 text-center">
          <Button asChild variant="outline" size="lg">
            <a href="/faqs">Read Our FAQs</a>
          </Button>
        </div>
      </SectionWrapper>

      {/* Final CTA Section */}
      <CTASection
        title="Ready to Solve Your Social Media Puzzle?"
        description="Let's work together to create a strategy that makes your brand stand out. I offer free consultations to understand your unique needs."
        primaryCTA={{ text: 'Get a Free Quote', href: '/contact' }}
        secondaryCTA={{ text: 'View Pricing', href: '/pricing' }}
        benefits={[
          'Personalized strategy for your business',
          'Transparent pricing with no hidden fees',
          'Quick response within 24 hours',
          'Based locally in Stilbaai, Western Cape',
        ]}
        variant="gradient"
      />
    </>
  );
}
