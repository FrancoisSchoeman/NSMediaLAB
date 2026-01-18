import { Metadata } from 'next';
import { Button } from '@/components/ui/button';
import { AnimatedCounter } from '@/components/AnimatedCounter';
import {
  MapPin,
  Heart,
  Target,
  Sparkles,
  Users,
} from 'lucide-react';
import bgImage from '@/public/bg-image.webp';

export const metadata: Metadata = {
  title: 'About',
  description:
    "I'm Nadia, the strategist behind NS MediaLAB, helping brands connect with their audiences and align every platform into a cohesive social media story.",
  keywords:
    'Nadia NS MediaLAB, social media strategist Stilbaai, about NS MediaLAB, social media marketing expert South Africa',
};

const values = [
  {
    icon: <Heart className="h-6 w-6" />,
    title: 'Personal Touch',
    description:
      'Every business is unique. I take the time to understand your story and create strategies that feel authentically you.',
  },
  {
    icon: <Target className="h-6 w-6" />,
    title: 'Results-Driven',
    description:
      'I focus on what matters - growing your audience, boosting engagement, and driving real business results.',
  },
  {
    icon: <Sparkles className="h-6 w-6" />,
    title: 'Creative Excellence',
    description:
      'From eye-catching visuals to compelling copy, I create content that stands out in crowded feeds.',
  },
  {
    icon: <Users className="h-6 w-6" />,
    title: 'Client Partnership',
    description:
      'I work alongside you as a partner, not just a service provider. Your success is my success.',
  },
];

export default function AboutPage() {
  const years = new Date().getFullYear() - new Date('2021').getFullYear();

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    name: 'About NS MediaLAB',
    description:
      'Meet Nadia, the strategist behind NS MediaLAB, helping brands align their social media platforms into a cohesive story.',
    mainEntity: {
      '@type': 'LocalBusiness',
      name: 'NS MediaLAB',
      description: `Social media marketing services based in Stilbaai, Western Cape, helping over 35 small businesses grow their presence over the past ${years} years.`,
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Stilbaai',
        addressRegion: 'Western Cape',
        addressCountry: 'ZA',
      },
      foundingDate: '2021',
    },
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-fixed"
      style={{ backgroundImage: `url(${bgImage.src})` }}
    >
      <div className="min-h-screen bg-white/70 backdrop-blur-[8px] pt-16">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />

        {/* Hero Section */}
        <section className="text-center sm:text-left">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 md:pt-20">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium text-primary backdrop-blur-xl bg-gradient-to-r from-black/10 to-black/5 border border-black/10 shadow-[inset_0_1px_1px_rgba(255,255,255,0.6)] rounded-full">
                  About NS MediaLAB
                </span>
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900">
                  Hi, I&apos;m Nadia
                </h1>
                <p className="mt-4 text-lg text-gray-700">
                  I&apos;m the strategist behind NS MediaLAB. What started as a passion 
                  for helping brands connect with their audiences has grown into a mission: 
                  to turn every platform into a perfectly aligned piece of your social media cube.
                </p>
                <p className="mt-4 text-gray-700">
                  Based in the beautiful coastal town of Stilbaai, Western Cape, I&apos;ve had 
                  the privilege of helping over 35 small businesses grow their digital presence 
                  over the past {years} years.
                </p>
                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                  <Button asChild size="lg">
                    <a href="/contact">Let&apos;s Work Together</a>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <a href="/services">View Services</a>
                  </Button>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-6">
                <div className="glass-card p-6 text-center">
                  <AnimatedCounter end={35} suffix="+" label="Happy Clients" />
                </div>
                <div className="glass-card p-6 text-center">
                  <AnimatedCounter end={years} suffix="" label="Years Experience" />
                </div>
                <div className="glass-card p-6 text-center">
                  <AnimatedCounter end={100} suffix="%" label="Satisfaction" />
                </div>
                <div className="glass-card p-6 text-center flex items-center justify-center">
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-1 text-primary mb-2">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div className="text-sm text-gray-700">Stilbaai, WC</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* My Approach */}
        <section className="py-16 md:py-20">
          <div className="max-w-3xl p-4 sm:p-6 lg:p-8 glass-card mx-4 sm:mx-auto">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium text-primary backdrop-blur-xl bg-gradient-to-r from-black/10 to-black/5 border border-black/10 shadow-[inset_0_1px_1px_rgba(255,255,255,0.6)] rounded-full">
                My Approach
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Like Solving a Rubik&apos;s Cube
              </h2>
              <p className="mt-4 text-gray-700 max-w-2xl mx-auto">
                I see social media as a Rubik&apos;s Cube — each platform is a different face, and success happens when they all align perfectly.
              </p>
            </div>

            <div className="mt-8 max-w-3xl mx-auto space-y-6 text-gray-700 text-center">
              <p>
                My approach is simple but effective: I take the time to understand what makes 
                your brand unique, then craft strategies that spark engagement, boost visibility, 
                and create meaningful connections.
              </p>
              <p>
                From posts and visuals to video strategies and targeted ad campaigns, I design 
                every piece of content with purpose. I focus on both organic growth and paid 
                campaigns, crafting strategies that bring structure to complexity, clarity to 
                messaging, and storytelling that genuinely engages your audience.
              </p>
              <p>
                Together, we&apos;ll solve your social media cube, ensuring every platform 
                interacts in harmony to drive engagement, visibility, and measurable growth.
              </p>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="pb-16 md:pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium text-primary backdrop-blur-xl bg-gradient-to-r from-black/10 to-black/5 border border-black/10 shadow-[inset_0_1px_1px_rgba(255,255,255,0.6)] rounded-full">
                Why Work With Me
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                What Sets NS MediaLAB Apart
              </h2>
              <p className="mt-4 text-gray-700 max-w-2xl mx-auto">
                I&apos;m not a big agency. I&apos;m a dedicated partner who treats your business like my own.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="glass-card p-6"
                >
                  <div className="p-3 rounded-full backdrop-blur-xl bg-gradient-to-br from-white/70 to-white/50 border border-white/60 shadow-[inset_0_1px_1px_rgba(255,255,255,0.8)] text-primary w-fit mb-4">
                    {value.icon}
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{value.title}</h3>
                  <p className="text-sm text-gray-700">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto p-8 rounded-3xl backdrop-blur-xl bg-gradient-to-br from-white/60 via-white/40 to-white/30 border border-white/60 shadow-[0_8px_32px_rgba(0,0,0,0.08),inset_0_1px_1px_rgba(255,255,255,0.8)]">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                Ready to Grow Your Social Media Presence?
              </h2>
              <p className="mt-4 text-gray-700">
                Let&apos;s chat about your business and how I can help you grow your online presence. Free consultation included!
              </p>
              <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button asChild size="lg">
                  <a href="/contact">Get in Touch</a>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <a href="/pricing">View Pricing</a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
