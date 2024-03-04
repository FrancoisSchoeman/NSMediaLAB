import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { StarFilledIcon } from "@radix-ui/react-icons";

import data from "../data.json";

const reviews = data.reviews;

export default function TestimonialCarousel() {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      orientation="horizontal"
      className="w-full"
    >
      <CarouselContent className="">
        {reviews.map((review, index) => (
          <CarouselItem key={index} className="h-full max-w-lg text-left">
            <Card className="flex flex-col flex-nowrap justify-between items-start min-h-56">
              <CardContent className="py-6">
                <div className="flex items-center space-x-2 mb-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <StarFilledIcon
                      key={star}
                      className={`w-4 h-4 ${
                        star <= review.stars
                          ? "text-primary"
                          : "text-muted-foreground"
                      }`}
                    />
                  ))}
                </div>
                <p>{review.review}</p>
                <p className="font-bold">{review.name}</p>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
