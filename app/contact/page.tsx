import { ContactForm } from '@/components/ContactForm';
import { TrustBadges } from '@/components/TrustBadges';
import { ReCaptchaProvider } from 'next-recaptcha-v3';
import { Metadata } from 'next';
import {
  Mail,
  Phone,
  MapPin,
  MessageCircle,
  Clock,
  CheckCircle2,
  ExternalLink,
} from 'lucide-react';
import nadianPhotography from '@/public/nadian-photography-logo.webp';

export const metadata: Metadata = {
  title: 'Contact Me',
  description:
    "Get in touch with NS MediaLAB for a free consultation. Let's discuss how we can transform your social media presence and grow your business.",
  keywords:
    'contact NS MediaLAB, social media consultation Stilbaai, free marketing consultation, social media help South Africa',
};

const contactMethods = [
  {
    icon: <Mail className="h-5 w-5" />,
    label: 'Email',
    value: 'nadia@nsmedialab.co.za',
    href: 'mailto:nadia@nsmedialab.co.za?subject=New Inquiry from Website',
    description: 'Best for detailed inquiries',
  },
  {
    icon: <MessageCircle className="h-5 w-5" />,
    label: 'WhatsApp',
    value: 'Chat with me',
    href: 'https://wa.me/27826191100',
    description: 'Quick responses',
    external: true,
  },
  {
    icon: <Phone className="h-5 w-5" />,
    label: 'Phone',
    value: '082 619 1100',
    href: 'tel:+27826191100',
    description: 'Mon-Fri, 9am-5pm',
  },
  {
    icon: <MapPin className="h-5 w-5" />,
    label: 'Location',
    value: 'Stilbaai, Western Cape',
    description: 'South Africa',
  },
];

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
      telephone: '+27826191100',
      email: 'nadia@nsmedialab.co.za',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Stilbaai',
        addressRegion: 'Western Cape',
        addressCountry: 'ZA',
      },
      contactPoint: [
        {
          '@type': 'ContactPoint',
          telephone: '+27826191100',
          contactType: 'customer service',
          availableLanguage: ['English', 'Afrikaans'],
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

      {/* Hero Section */}
      <section className="bg-gray-50/50 border-b border-border/40 pt-16 text-center">
        <div className="px-4 sm:px-6 lg:px-8 py-16 md:py-20 mx-auto max-w-7xl flex items-center justify-center">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">
              Let&apos;s Talk About Your Social Media
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Ready to transform your online presence? Get in touch for a free consultation. 
              I&apos;d love to hear about your business and discuss how we can help you grow.
            </p>
            <div className="mt-6">
              <TrustBadges
                badges={[
                  { icon: 'clock', text: 'Response within 24hrs' },
                  { icon: 'check', text: 'Free Consultation' },
                  { icon: 'shield', text: 'No Obligation' },
                ]}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Contact Form - Takes more space */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-2xl border border-border/50 shadow-sm p-6 md:p-8">
              <h2 className="text-2xl font-semibold text-foreground mb-2">
                Send a Message
              </h2>
              <p className="text-muted-foreground mb-8">
                Fill out the form below and I&apos;ll get back to you as soon as possible.
              </p>
              <ContactForm />
            </div>
          </div>

          {/* Contact Info Sidebar */}
          <div className="lg:col-span-2 space-y-8">
            {/* Contact Methods */}
            <div>
              <h2 className="text-xl font-semibold text-foreground mb-6">
                Other Ways to Reach Me
              </h2>
              <div className="space-y-4">
                {contactMethods.map((method, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 p-4 rounded-xl bg-gray-50/50 border border-border/30 hover:border-primary/30 transition-colors"
                  >
                    <div className="p-2 rounded-lg bg-primary/10 text-primary">
                      {method.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm text-muted-foreground">{method.label}</p>
                      {method.href ? (
                        <a
                          href={method.href}
                          target={method.external ? '_blank' : undefined}
                          rel={method.external ? 'noopener noreferrer' : undefined}
                          className="font-medium text-foreground hover:text-primary transition-colors flex items-center gap-1"
                        >
                          {method.value}
                          {method.external && <ExternalLink className="h-3 w-3" />}
                        </a>
                      ) : (
                        <p className="font-medium text-foreground">{method.value}</p>
                      )}
                      {method.description && (
                        <p className="text-xs text-muted-foreground mt-0.5">
                          {method.description}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Photography Link */}
            <div className="flex items-start gap-4 p-4 rounded-xl bg-gray-50/50 border border-border/30 hover:border-primary/30 transition-colors">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg text-primary">
                  <img src="/nadian-photography-logo.webp" alt="Nadian Photography" width={40} height={40} />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Need Photography?</p>
                  <a
                    href="https://nadianphotography.co.za/?utm_source=nsmedialab&utm_medium=referral"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-foreground hover:text-primary transition-colors flex items-center gap-1"
                  >
                    nadianphotography.co.za
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </div>
              </div>
            </div>

            {/* What to Expect */}
            <div className="bg-gradient-cta rounded-2xl p-6">
              <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                <Clock className="h-5 w-5 text-primary" />
                What to Expect
              </h3>
              <ul className="space-y-3">
                {[
                  'Response within 24 hours',
                  'Free initial consultation call',
                  'Customized strategy proposal',
                  'No pressure, no obligations',
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </ReCaptchaProvider>
  );
}
