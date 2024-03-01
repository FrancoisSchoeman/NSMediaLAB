"use client";

import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import Autoplay from "embla-carousel-autoplay";

import data from "../public/data.json";

const images = data.images;

export default function LogoCarousel() {
  return (
    <Carousel
      opts={{
        align: "center",
      }}
      orientation="horizontal"
      className="w-full"
      plugins={[
        Autoplay({
          delay: 2000,
        }),
      ]}
    >
      <CarouselContent className="-ml-1 mb-1">
        {images.map((image, index) => (
          // <CarouselItem key={index} className="h-full max-w-lg text-left">
          <CarouselItem key={index} className="pl-1 basis-1/7">
            <Card className="p-0 mx-2">
              <CardContent className="flex aspect-square items-center justify-center p-0">
                {/* /client-logos/image.png */}
                <a
                  href={`${image.facebook}?utm_source=nsmedialab&utm_medium=logo_carousel`}
                  target="_blank"
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    width={100}
                    className="rounded bg-white"
                  />
                </a>
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
