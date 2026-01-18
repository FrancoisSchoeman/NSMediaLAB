import { Metadata } from 'next';
import { Button } from '@/components/ui/button';
import PricingCards from '@/components/PricingCards';
import { TrustBadges } from '@/components/TrustBadges';
import { CheckCircle2, HelpCircle } from 'lucide-react';
import bgImage from '@/public/bg-image.webp';

export const metadata: Metadata = {
  title: 'Pricing',
  description:
    'Pricing plans for social media marketing services. Choose from our packages or get a custom quote tailored to your business needs.',
  keywords:
    'social media marketing pricing, affordable social media packages, Facebook marketing cost, Instagram marketing pricing, South Africa social media services cost',
};

const includedInAllPackages = [
  'Content calendar',
  'Monthly strategy planning',
  'Community management',
  'Direct WhatsApp support',
  'Performance reporting',
];

export default function PricingPage() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Pricing | NS MediaLAB',
    description:
      'Pricing plans for social media marketing services with flexible packages for every budget.',
    mainEntity: {
      '@type': 'LocalBusiness',
      name: 'NS MediaLAB',
      priceRange: 'R500-R5000',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Stilbaai',
        addressRegion: 'Western Cape',
        addressCountry: 'ZA',
      },
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
        <section className="">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 md:pt-20">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium text-primary backdrop-blur-xl bg-gradient-to-r from-black/10 to-black/5 border border-black/10 shadow-[inset_0_1px_1px_rgba(255,255,255,0.6)] rounded-full">
              Pricing
            </span>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900">
              Pricing Plans
            </h1>
            <p className="mt-4 text-lg text-gray-700">
              Choose a package that fits your needs. All packages are customizable 
              based on your specific requirements. No hidden fees, no surprises.
            </p>
            <div className="mt-6">
              <TrustBadges
                badges={[
                  { icon: 'check', text: 'No Lock-in Contracts' },
                  { icon: 'check', text: 'Cancel Anytime' },
                  { icon: 'check', text: 'Custom Quotes Available' },
                ]}
              />
            </div>
          </div>
        </div>
      </section>

        {/* Pricing Cards */}
        <section className="py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <PricingCards />

            <div className="mt-12 text-center">
              <p className="text-sm text-gray-600 mb-4">
                * Prices vary based on client needs and scope of work
              </p>
              <Button asChild size="lg">
                <a href="/contact">Get a Custom Quote</a>
              </Button>
            </div>
          </div>
        </section>

        {/* What's Included */}
        <section className="py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium text-primary backdrop-blur-xl bg-gradient-to-r from-black/10 to-black/5 border border-black/10 shadow-[inset_0_1px_1px_rgba(255,255,255,0.6)] rounded-full">
                Included
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                What&apos;s Included in Every Package
              </h2>
              <p className="mt-4 text-gray-700 max-w-2xl mx-auto">
                No matter which package you choose, you&apos;ll always get these core benefits.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
              {includedInAllPackages.map((item, index) => (
                <div
                  key={index}
                  className='glass-card flex items-center gap-3 p-4'
                >
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-sm font-medium text-gray-900">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Preview */}
        <section className="py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto p-8 rounded-3xl backdrop-blur-xl bg-gradient-to-br from-white/60 via-white/40 to-white/30 border border-white/60 shadow-[0_8px_32px_rgba(0,0,0,0.08),inset_0_1px_1px_rgba(255,255,255,0.8)]">
              <div className="p-3 rounded-full backdrop-blur-xl bg-gradient-to-br from-white/70 to-white/50 border border-white/60 shadow-[inset_0_1px_1px_rgba(255,255,255,0.8)] text-primary w-fit mx-auto mb-4">
                <HelpCircle className="h-8 w-8" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                Have Questions?
              </h2>
              <p className="mt-4 text-gray-700">
                Check out our frequently asked questions or get in touch directly. 
                I&apos;m always happy to help clarify any questions about pricing or services.
              </p>
              <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button asChild variant="outline">
                  <a href="/faqs">View FAQs</a>
                </Button>
                <Button asChild>
                  <a href="/contact">Contact Me</a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
