'use client';

import { useEffect, useState } from 'react';
import { AnimatedCard } from './AnimatedCard';

export default function PricingCards() {
  const [pricing, setPricing] = useState<Price[]>([]);

  interface Price {
    title: string;
    extra: string;
    price: string;
    features: string[];
  }

  useEffect(() => {
    fetch('../data.json')
      .then((response) => response.json())
      .then((data) => {
        setPricing(data.pricing);
      });
  }, []);

  return (
    <div className="grid grid-cols-1 gap-6 lg:gap-8 sm:grid-cols-4 text-left">
      {pricing.map((price: Price, index: number) => (
        <AnimatedCard key={index}>
          <h2 className="text-xl font-bold">{price.title}</h2>
          <h3 className="text-lg font-bold">{price.price}</h3>

          <ul className="list-disc ml-6">
            {price.features.map((feature: string, index: number) => (
              <li
                key={index}
                className="max-w-[40ch] sm:max-w-[900px] text-gray-500 dark:text-gray-400 py-1"
              >
                {feature}
              </li>
            ))}
          </ul>
          <p className="max-w-[40ch] sm:max-w-[900px] text-gray-500 dark:text-gray-400 pt-1">
            *{price.extra}
          </p>
          <p className="max-w-[40ch] sm:max-w-[900px] text-gray-500 dark:text-gray-400 pb-1">
            **Price varies per client needs
          </p>
        </AnimatedCard>
      ))}
    </div>
  );
}
