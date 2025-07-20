import { ContactForm } from '@/components/ContactForm';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import {
  EnvelopeClosedIcon,
  MobileIcon,
  CameraIcon,
  HomeIcon,
  OpenInNewWindowIcon,
} from '@radix-ui/react-icons';

import { ReCaptchaProvider } from 'next-recaptcha-v3';

import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Contact Us | NS MediaLAB',
  description:
    'Ready to chat? Reach out through our contact form, email, or phone. Let&apos;s make your social media goals a reality together.',
  keywords:
    'social media marketing Stilbaai, Facebook management, Instagram marketing, content creation, social media ads, social media strategy, South African businesses, analytics, affordable social media services',
};

export default function ContactPage() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'Contact NS MediaLAB',
    description:
      'Contact NS MediaLAB for social media marketing services. Reach out through our contact form, email, or phone.',
    mainEntity: {
      '@type': 'LocalBusiness',
      name: 'NS MediaLAB',
      telephone: '082 619 1100',
      email: 'nadia@nsmedialab.co.za',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Stilbaai',
        addressRegion: 'Western Cape',
        addressCountry: 'South Africa',
      },
      contactPoint: [
        {
          '@type': 'ContactPoint',
          telephone: '082 619 1100',
          contactType: 'customer service',
          availableLanguage: ['English', 'Afrikaans'],
        },
        {
          '@type': 'ContactPoint',
          email: 'nadia@nsmedialab.co.za',
          contactType: 'customer service',
        },
      ],
    },
  };

  return (
    <ReCaptchaProvider reCaptchaKey="6LcNlogpAAAAANoTgI-aJf47IdQqaX9sN4LqQdaa">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className="grid gap-4 md:grid-cols-2 md:gap-16 my-16 relative w-full h-full">
        <div>
          <div className="mb-6 sm:mb-16">
            <h1 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
              Contact Us
            </h1>
            <p className="mt-2 sm:mt-4 mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
              Ready to chat? Reach out through our contact form, email, or
              phone. Let&apos;s make your social media goals a reality together.
            </p>
          </div>
          <ContactForm />
        </div>
        <div className="">
          <h2 className="mt-16 sm:mt-3 text-3xl font-bold tracking-tighter sm:text-5xl">
            Contact Details
          </h2>

          <p className="mt-2 sm:mt-4 mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
            If you have any questions or need assistance, feel free to contact
            us using the details below.
          </p>

          <ul className="my-6 sm:my-16 max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            <li>
              <Link
                href="mailto:nadia@nsmedialab.co.za?subject=New Message From NS MediaLAB Website"
                className="flex items-center gap-2 mt-4 mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400"
              >
                <Badge className="p-2 mr-2">
                  <EnvelopeClosedIcon width={20} height={20} />
                </Badge>
                nadia@nsmedialab.co.za
              </Link>
            </li>

            <Separator className="mt-4" />

            <li>
              <Link
                href="https://wa.me/27826191100"
                target="_blank"
                className="flex items-center gap-2 mt-4 mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400"
              >
                <Badge className="p-2 mr-2">
                  <MobileIcon width={20} height={20} />
                </Badge>
                WhatsApp
              </Link>
            </li>

            <Separator className="mt-4" />

            <li>
              <Link
                href="tel:0826191100"
                className="flex items-center gap-2 mt-4 mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400"
              >
                <Badge className="p-2 mr-2">
                  <MobileIcon width={20} height={20} />
                </Badge>
                082 619 1100
              </Link>
            </li>

            <Separator className="mt-4" />

            <li>
              <span className="flex items-center gap-2 mt-4 mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                <Badge className="p-2 mr-2">
                  <HomeIcon width={20} height={20} />
                </Badge>
                Stilbaai, Western Cape, South Africa
              </span>
            </li>

            <Separator className="mt-4" />

            <li>
              <Link
                href="https://nadianphotography.co.za/?utm_source=nsmedialab&utm_medium=referral"
                target="_blank"
                className="flex items-center gap-2 mt-4 mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400"
              >
                <Badge className="p-2 mr-2">
                  <CameraIcon width={20} height={20} />
                </Badge>
                nadianphotography.co.za <OpenInNewWindowIcon />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </ReCaptchaProvider>
  );
}
