import { Metadata } from 'next';
import { Button } from '@/components/ui/button';
import { AnimatedCard } from '@/components/AnimatedCard';
import {
  Users,
  PenTool,
  BarChart3,
  Megaphone,
  Lightbulb,
  Camera,
  CheckCircle2,
  MapPin,
  Target,
} from 'lucide-react';
import bgImage from '@/public/bg-image.webp';

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Comprehensive social media marketing services including management, content creation, advertising campaigns, Google Ads, Google My Business, analytics, strategy consultation, and professional photography.',
  keywords:
    'social media management, content creation, advertising campaigns, Google Ads, Google My Business, analytics reporting, strategy consultation, product photography, lifestyle photography, South Africa',
};

const services = [
  {
    title: 'Social Media Management',
    icon: <Users className="h-8 w-8" />,
    description:
      'Full account management across all major platforms. We handle the daily grind so you can focus on your business.',
    features: [
      'Hands-off account management',
      'Multi-platform expertise (Facebook, Instagram, YouTube, LinkedIn, TikTok)',
      'Community management & engagement',
      'Consistent posting schedule',
      'Audience growth strategies',
    ],
  },
  {
    title: 'Content Creation',
    icon: <PenTool className="h-8 w-8" />,
    description:
      'Eye-catching visuals and compelling copy that resonates with your target audience and tells your brand story.',
    features: [
      'Custom graphics & visuals',
      'Engaging video content',
      'Compelling captions & copywriting',
      'Story & reel creation',
      'Authentic brand voice development',
    ],
  },
  {
    title: 'Advertising Campaigns',
    icon: <Megaphone className="h-8 w-8" />,
    description:
      'Strategic paid advertising to boost your reach, engagement, and conversions on social media platforms.',
    features: [
      'Facebook & Instagram Ads',
      'TikTok & LinkedIn Ads',
      'Budget optimization',
      'Audience targeting',
      'A/B testing & optimization',
    ],
  },
  {
    title: 'Google Ads',
    icon: <Target className="h-8 w-8" />,
    description:
      'Drive targeted traffic and conversions with expertly managed Google Ads campaigns across Search, Display, and YouTube.',
    features: [
      'Search & Display campaigns',
      'YouTube video ads',
      'Keyword research & optimization',
      'Conversion tracking setup',
      'Performance monitoring & reporting',
    ],
  },
  {
    title: 'Google My Business',
    icon: <MapPin className="h-8 w-8" />,
    description:
      'Optimize your local presence and help customers find you with a fully managed Google Business Profile.',
    features: [
      'Profile setup & optimization',
      'Regular posts & updates',
      'Review management & responses',
      'Photo & content updates',
      'Local SEO optimization',
    ],
  },
  {
    title: 'Analytics & Reporting',
    icon: <BarChart3 className="h-8 w-8" />,
    description:
      'Data-driven insights to understand what\'s working and continuously improve your social media strategy.',
    features: [
      'Monthly performance reports',
      'Key metric tracking',
      'Competitor analysis',
      'ROI measurement',
      'Actionable recommendations',
    ],
  },
  {
    title: 'Strategy Consultation',
    icon: <Lightbulb className="h-8 w-8" />,
    description:
      'Expert guidance to align your social media efforts with your business goals and create a winning strategy.',
    features: [
      'Social media audit',
      'Goal setting & planning',
      'Platform recommendations',
      'Content calendar creation',
      'Ongoing strategic support',
    ],
  },
  {
    title: 'Product & Lifestyle Photography',
    icon: <Camera className="h-8 w-8" />,
    description:
      'Professional photography services to showcase your products or services in the best light.',
    features: [
      'Product photography',
      'Lifestyle & brand shoots',
      'Social media content photos',
      'Event coverage',
      'Photo editing & retouching',
    ],
  },
];

export default function ServicesPage() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Social Media Marketing Services | NS MediaLAB',
    description:
      'Comprehensive social media marketing services including management, content creation, advertising campaigns, Google Ads, Google My Business, analytics, strategy consultation, and photography.',
    provider: {
      '@type': 'LocalBusiness',
      name: 'NS MediaLAB',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Stilbaai',
        addressRegion: 'Western Cape',
        addressCountry: 'ZA',
      },
    },
    serviceType: services.map((s) => s.title),
    areaServed: {
      '@type': 'Country',
      name: 'South Africa',
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
        <section className="text-center">
          <div className="px-4 sm:px-6 lg:px-8 pt-16 md:pt-20 mx-auto max-w-7xl flex items-center justify-center">
            <div className="max-w-3xl">
              <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium text-primary backdrop-blur-xl bg-gradient-to-r from-black/10 to-black/5 border border-black/10 shadow-[inset_0_1px_1px_rgba(255,255,255,0.6)] rounded-full">
                Our Services
              </span>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900">
                Everything You Need to Dominate Social Media
              </h1>
              <p className="mt-4 text-lg text-gray-700">
                From strategy to execution, I offer comprehensive services designed 
                to help your business thrive on social media. Each service is tailored 
                to your unique needs and goals.
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <AnimatedCard key={index} delay={index * 0.1} className="h-full">
                  <div className="flex flex-col h-full">
                    {/* Icon & Title */}
                    <div className="flex items-start gap-4 mb-4">
                      <div className="p-3 rounded-full backdrop-blur-xl bg-gradient-to-br from-white/70 to-white/50 border border-white/60 shadow-[inset_0_1px_1px_rgba(255,255,255,0.8)] text-primary flex-shrink-0">
                        {service.icon}
                      </div>
                      <div>
                        <h2 className="text-xl font-semibold text-gray-900">
                          {service.title}
                        </h2>
                        <p className="text-gray-700 mt-1">{service.description}</p>
                      </div>
                    </div>

                    {/* Features */}
                    <ul className="space-y-2 mt-4 flex-grow">
                      {service.features.map((feature, featureIndex) => (
                        <li
                          key={featureIndex}
                          className="flex items-start gap-2 text-sm text-gray-700"
                        >
                          <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    {/* CTA */}
                    <div className="mt-6 pt-4 border-t border-white/40">
                      <Button asChild variant="outline" className="w-full">
                        <a href={`/contact?service=${encodeURIComponent(service.title)}`}>
                          Get a Quote for {service.title}
                        </a>
                      </Button>
                    </div>
                  </div>
                </AnimatedCard>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Button asChild size="lg">
                <a href="/pricing">View Pricing Packages</a>
              </Button>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto p-8 rounded-3xl backdrop-blur-xl bg-gradient-to-br from-white/60 via-white/40 to-white/30 border border-white/60 shadow-[0_8px_32px_rgba(0,0,0,0.08),inset_0_1px_1px_rgba(255,255,255,0.8)]">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                Not Sure What You Need?
              </h2>
              <p className="mt-4 text-gray-700">
                Let&apos;s chat! I offer free consultations to understand your business and recommend the best services for your goals.
              </p>
              <div className="mt-4 flex flex-wrap justify-center gap-3">
                {['Personalized recommendations', 'No-obligation consultation', 'Custom packages available'].map((benefit, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center gap-1.5 px-3 py-1 text-sm text-gray-700 backdrop-blur-xl bg-gradient-to-r from-black/10 to-black/5 border border-black/10 shadow-[inset_0_1px_1px_rgba(255,255,255,0.6)] rounded-full"
                  >
                    <CheckCircle2 className="h-3.5 w-3.5 text-primary" />
                    {benefit}
                  </span>
                ))}
              </div>
              <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button asChild size="lg">
                  <a href="/contact">Schedule a Free Call</a>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <a href="/faqs">View FAQs</a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
