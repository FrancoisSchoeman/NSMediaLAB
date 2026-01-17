import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Metadata } from 'next';

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
    <div className="flex flex-col sm:items-center justify-between relative w-full h-full">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <section className="min-h-full pt-16">
        <div className="flex sm:justify-center flex-col">
          <h1 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
            Privacy Policy
          </h1>
          <p className="max-w-[40ch] sm:max-w-[700px] mt-4 text-left text-neutral-600 md:text-xl">
            Last Updated: 2024-04-03
          </p>
          <p className="max-w-[40ch] sm:max-w-[700px] mt-4 text-left text-neutral-600 md:text-xl">
            At NS MediaLAB, we are committed to protecting your privacy. This
            Privacy Policy outlines the types of information we collect from
            you, including information collected via our use of Google
            Analytics, Google reCaptcha V3, and through our contact form
            submissions, which are saved in our database.
          </p>
          <p className="max-w-[40ch] sm:max-w-[700px] mt-4 text-left text-neutral-600 md:text-xl">
            Please be assured that we do not sell any personal data to third
            parties. Our use of Google Analytics and Google reCaptcha V3 is to
            enhance your user experience and protect our site from spam and
            abuse respectively. Information collected through our contact forms
            is used solely for the purpose of responding to your inquiries and
            providing you with the services you have requested.
          </p>
          <p className="max-w-[40ch] sm:max-w-[700px] mt-4 text-left text-neutral-600 md:text-xl">
            For more detailed information on how we use and protect your
            information, as well as your rights regarding your data, please
            contact us directly.
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
