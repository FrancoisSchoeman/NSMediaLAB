import { Button } from '@/components/ui/button';
import { Metadata } from 'next';
import bgImage from '@/public/bg-image.webp';

export const metadata: Metadata = {
  title: 'Privacy Policy | NS MediaLAB',
  description:
    'Please be assured that we do not sell any personal data to third parties. Our use of Google Analytics and Google reCaptcha V3 is to enhance your user experience and protect our site from spam and abuse respectively. Information collected through our contact forms is used solely for the purpose of responding to your inquiries and providing you with the services you have requested.',
  keywords:
    'social media marketing Stilbaai, Instagram marketing Stilbaai, YouTube marketing Stilbaai, social media advertising Still Bay, Facebook ads Still Bay, Instagram ads Stilbaai, YouTube ads Stilbaai, affordable social media marketing South Africa',
};

export default function PrivacyPolicy() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Privacy Policy | NS MediaLAB',
    description:
      'NS MediaLAB privacy policy outlining how we collect, use, and protect your personal information including our use of Google Analytics and reCaptcha.',
    mainEntity: {
      '@type': 'PrivacyPolicy',
      name: 'NS MediaLAB Privacy Policy',
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
                  Privacy Policy
                </h1>
                <p className="mt-4 text-gray-600 md:text-lg">
                  Last Updated: 2024-04-03
                </p>
                <div className="mt-8 space-y-6 text-gray-700 md:text-lg">
                  <p>
                    At NS MediaLAB, we are committed to protecting your privacy. This
                    Privacy Policy outlines the types of information we collect from
                    you, including information collected via our use of Google
                    Analytics, Google reCaptcha V3, and through our contact form
                    submissions, which are saved in our database.
                  </p>
                  <p>
                    Please be assured that we do not sell any personal data to third
                    parties. Our use of Google Analytics and Google reCaptcha V3 is to
                    enhance your user experience and protect our site from spam and
                    abuse respectively. Information collected through our contact forms
                    is used solely for the purpose of responding to your inquiries and
                    providing you with the services you have requested.
                  </p>
                  <p>
                    For more detailed information on how we use and protect your
                    information, as well as your rights regarding your data, please
                    contact me directly.
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
