'use client';

import * as React from 'react';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { StarFilledIcon } from '@radix-ui/react-icons';
import { Quote } from 'lucide-react';

type Review = {
  name: string;
  review: string;
  stars: number;
  company?: string;
};

export default function TestimonialCarousel() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('../data.json')
      .then((response) => response.json())
      .then((data) => {
        setReviews(data.reviews);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="animate-pulse text-muted-foreground">Loading testimonials...</div>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <Carousel
        opts={{
          align: 'start',
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent className="-ml-4">
          {reviews.map((review, index) => (
            <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
              <TestimonialCard review={review} index={index} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="flex justify-center gap-4 mt-8">
          <CarouselPrevious className="static translate-y-0" />
          <CarouselNext className="static translate-y-0" />
        </div>
      </Carousel>
    </motion.div>
  );
}

function TestimonialCard({ review, index }: { review: Review; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="h-full"
    >
      <Card className="h-full bg-white border-border/50 shadow-sm hover:shadow-md transition-shadow">
        <CardContent className="p-6 flex flex-col h-full">
          {/* Quote Icon */}
          <Quote className="h-8 w-8 text-primary/20 mb-4" />

          {/* Stars */}
          <div className="flex items-center gap-1 mb-4">
            {[1, 2, 3, 4, 5].map((star) => (
              <StarFilledIcon
                key={star}
                className={`w-4 h-4 ${
                  star <= review.stars ? 'text-yellow-400' : 'text-gray-200'
                }`}
              />
            ))}
          </div>

          {/* Review Text */}
          <p className="text-muted-foreground text-sm leading-relaxed flex-grow mb-4">
            &ldquo;{review.review}&rdquo;
          </p>

          {/* Author */}
          <div className="border-t border-border/50 pt-4 mt-auto">
            <p className="font-semibold text-foreground">{review.name}</p>
            {review.company && (
              <p className="text-sm text-muted-foreground">{review.company}</p>
            )}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
