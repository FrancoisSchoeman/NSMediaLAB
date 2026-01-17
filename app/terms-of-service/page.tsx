import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Metadata } from 'next';

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
    <div className="flex flex-col sm:items-center justify-between relative w-full h-full">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <section className="min-h-full pt-16">
        <div className="flex sm:justify-center flex-col">
          <h1 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
            Terms of Service
          </h1>
          <p className="max-w-[40ch] sm:max-w-[700px] mt-4 text-left text-neutral-600 md:text-xl">
            Last Updated: 2024-04-03
          </p>
          <p className="max-w-[40ch] sm:max-w-[700px] mt-4 text-left text-neutral-600 md:text-xl">
            Welcome to NS MediaLAB. By accessing or using our services, you
            agree to be bound by these Terms of Service. These terms apply to
            all visitors, users, and others who wish to access or use our
            service.
          </p>
          <p className="max-w-[40ch] sm:max-w-[700px] mt-4 text-left text-neutral-600 md:text-xl">
            Our services include social media marketing, content creation, and
            other related services. We use tools like Google Analytics and
            Google reCaptcha V3 to enhance your experience and protect our
            website.
          </p>
          <p className="max-w-[40ch] sm:max-w-[700px] mt-4 text-left text-neutral-600 md:text-xl">
            You agree not to misuse our services or help anyone else do so. We
            reserve the right to refuse service, terminate accounts, remove or
            edit content, or cancel orders in our sole discretion.
          </p>
          <p className="max-w-[40ch] sm:max-w-[700px] mt-4 text-left text-neutral-600 md:text-xl">
            By using our services, you agree to our collection, use, and sharing
            of your information as outlined in our Privacy Policy. For any
            questions about these terms, please contact us.
          </p>
          <div className="my-8 sm:my-4 flex gap-4">
            <Button asChild>
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>

      <div className="mb-16"></div>
    </div>
  );
}
