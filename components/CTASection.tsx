'use client';

import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { sendGTMEvent } from '@next/third-parties/google';
import cube from '@/public/rubiks-cube.json';

// Dynamic import with SSR disabled to prevent "document is not defined" error during static export
const LottiePlayer = dynamic(
  () => import('@/components/LottiePlayer').then((mod) => mod.LottiePlayer),
  { ssr: false }
);
import { CheckCircle2 } from 'lucide-react';

interface CTASectionProps {
  title?: string;
  description?: string;
  primaryCTA?: {
    text: string;
    href: string;
  };
  secondaryCTA?: {
    text: string;
    href: string;
  };
  showCube?: boolean;
  benefits?: string[];
  variant?: 'default' | 'gradient';
}

export function CTASection({
  title = 'Ready to Grow Your Social Media Presence?',
  description = "Let's work together to create a strategy that makes your brand stand out. Get a free consultation today.",
  primaryCTA = { text: 'Get a Free Quote', href: '/contact' },
  secondaryCTA = { text: 'View Pricing', href: '/pricing' },
  showCube = true,
  benefits,
  variant = 'default',
}: CTASectionProps) {
  const handleCTAClick = (ctaText: string) => {
    sendGTMEvent({
      event: 'cta_click',
      cta_location: 'cta_section',
      cta_text: ctaText,
    });
  };

  return (
    <section
      className={`py-16 md:py-24 ${
        variant === 'gradient' ? 'bg-gradient-cta' : 'bg-gray-50/50'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-4">
              {title}
            </h2>
            <p className="text-lg text-muted-foreground mb-6">{description}</p>

            {benefits && benefits.length > 0 && (
              <ul className="space-y-3 mb-8">
                {benefits.map((benefit, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-center gap-3 text-muted-foreground"
                  >
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                    {benefit}
                  </motion.li>
                ))}
              </ul>
            )}

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="lg"
                className="shadow-lg hover:shadow-xl transition-shadow"
                onClick={() => handleCTAClick(primaryCTA.text)}
              >
                <a href={primaryCTA.href}>{primaryCTA.text}</a>
              </Button>
              {secondaryCTA && (
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  onClick={() => handleCTAClick(secondaryCTA.text)}
                >
                  <a href={secondaryCTA.href}>{secondaryCTA.text}</a>
                </Button>
              )}
            </div>
          </motion.div>

          {/* Cube Animation */}
          {showCube && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex justify-center relative"
            >
              {/* Decorative blur behind cube */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-64 h-64 rounded-full blur-shape-blue blur-3xl opacity-50" />
                <div className="absolute w-48 h-48 rounded-full blur-shape-orange blur-3xl opacity-30 translate-x-12 translate-y-12" />
              </div>
              <LottiePlayer
                src={cube}
                height="350px"
                width="350px"
                speed={0.5}
                aria-label="Animated Rubik's cube representing social media strategy"
              />
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
