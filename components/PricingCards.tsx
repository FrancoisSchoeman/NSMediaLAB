'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { sendGTMEvent } from '@next/third-parties/google';
import { CheckCircle2, Star } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Price {
  title: string;
  extra: string;
  price: string;
  features: string[];
  popular?: boolean;
}

export default function PricingCards() {
  const [pricing, setPricing] = useState<Price[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('../data.json')
      .then((response) => response.json())
      .then((data) => {
        setPricing(data.pricing);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const handlePackageClick = (packageName: string) => {
    sendGTMEvent({
      event: 'pricing_package_click',
      package_name: packageName,
    });
  };

  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[1, 2, 3, 4].map((i) => (
          <div 
            key={i} 
            className="h-96 rounded-3xl glass-card animate-pulse" 
          />
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {pricing.map((price, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: index * 0.1 }}
          className="relative"
        >
          {/* Popular Badge */}
          {index === 1 && (
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
              <span className="inline-flex items-center gap-1 px-3 py-1 text-xs font-semibold text-primary-foreground bg-primary rounded-full">
                <Star className="h-3 w-3" />
                Most Popular
              </span>
            </div>
          )}

          <div
            className={cn(
              'h-full flex flex-col p-6 rounded-3xl transition-all duration-300',
              'glass-card',
              'hover:scale-[1.02]',
              index === 1 && 'glass-card-highlight'
            )}
          >
            {/* Header */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-900">{price.title}</h3>
              <div className="mt-2">
                <span className="text-3xl font-bold text-gray-900">{price.price}</span>
              </div>
            </div>

            {/* Features */}
            <div className="flex-grow mb-6 p-4 rounded-2xl backdrop-blur-lg bg-[linear-gradient(160deg,rgba(255,255,255,0.85)_0%,rgba(255,255,255,0.6)_40%,rgba(255,255,255,0.75)_100%)] border-2 border-white/90 shadow-[0_4px_16px_rgba(0,0,0,0.06),inset_0_2px_4px_rgba(255,255,255,1),inset_0_-1px_2px_rgba(0,0,0,0.03)]">
              <ul className="space-y-3">
                {price.features.map((feature, featureIndex) => (
                  <li
                    key={featureIndex}
                    className="flex items-start gap-2 text-sm text-gray-700"
                  >
                    <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Extra Info */}
            <p className="text-xs text-gray-500 mb-4">*{price.extra}</p>

            {/* CTA Button */}
            <Button
              asChild
              variant={index === 1 ? 'default' : 'outline'}
              className="w-full"
              onClick={() => handlePackageClick(price.title)}
            >
              <a href={`/contact?package=${encodeURIComponent(price.title)}`}>
                Get Started
              </a>
            </Button>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
