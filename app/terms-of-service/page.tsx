import { Button } from '@/components/ui/button';
import { Metadata } from 'next';
import bgImage from '@/public/bg-image.webp';

export const metadata: Metadata = {
  title: 'Terms of Service | NS MediaLAB',
  description:
    'Our services include social media marketing, content creation, and other related services. We use tools like Google Analytics and Google reCaptcha V3 to enhance your experience and protect our website.',
  keywords:
    'social media marketing Stilbaai, Instagram marketing Stilbaai, YouTube marketing Stilbaai, social media advertising Still Bay, Facebook ads Still Bay, Instagram ads Stilbaai, YouTube ads Stilbaai, affordable social media marketing South Africa',
};

export default function PrivacyPolicy() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Terms of Service | NS MediaLAB',
    description:
      'Terms of Service for NS MediaLAB social media marketing services including service agreements and usage policies.',
    mainEntity: {
      '@type': 'TermsOfService',
      name: 'NS MediaLAB Terms of Service',
      dateModified: '2024-04-03',
      datePublished: '2024-04-03',
      publisher: {
        '@type': 'Organization',
        name: 'NS MediaLAB',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Stilbaai',
          addressRegion: 'Western Cape',
          addressCountry: 'South Africa',
        },
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
        
        <section className="py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <div className="glass-card p-8 md:p-12">
                <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium text-primary backdrop-blur-xl bg-gradient-to-r from-black/10 to-black/5 border border-black/10 shadow-[inset_0_1px_1px_rgba(255,255,255,0.6)] rounded-full">
                  Legal
                </span>
                <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-gray-900">
                  Terms of Service
                </h1>
                <p className="mt-4 text-gray-600 md:text-lg">
                  Last Updated: 2024-04-03
                </p>
                <div className="mt-8 space-y-6 text-gray-700 md:text-lg">
                  <p>
                    Welcome to NS MediaLAB. By accessing or using our services, you
                    agree to be bound by these Terms of Service. These terms apply to
                    all visitors, users, and others who wish to access or use our
                    service.
                  </p>
                  <p>
                    Our services include social media marketing, content creation, and
                    other related services. We use tools like Google Analytics and
                    Google reCaptcha V3 to enhance your experience and protect our
                    website.
                  </p>
                  <p>
                    You agree not to misuse our services or help anyone else do so. We
                    reserve the right to refuse service, terminate accounts, remove or
                    edit content, or cancel orders in our sole discretion.
                  </p>
                  <p>
                    By using our services, you agree to our collection, use, and sharing
                    of your information as outlined in our Privacy Policy. For any
                    questions about these terms, please contact me.
                  </p>
                </div>
                <div className="mt-8">
                  <Button asChild size="lg">
                    <a href="/contact">Contact Me</a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
