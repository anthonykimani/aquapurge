"use client";

import * as React from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { carouselSource } from "@/helpers/carouselSource";

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [isAnimating, setIsAnimating] = React.useState(false);

  const goToSlide = (index: number) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex(index);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const previousSlide = () => {
    const newIndex =
      currentIndex === 0 ? carouselSource.length - 1 : currentIndex - 1;
    goToSlide(newIndex);
  };

  const nextSlide = () => {
    const newIndex =
      currentIndex === carouselSource.length - 1 ? 0 : currentIndex + 1;
    goToSlide(newIndex);
  };

  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") previousSlide();
      if (e.key === "ArrowRight") nextSlide();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentIndex]);

  return (
    <div 
      className="relative h-screen w-full overflow-hidden bg-background"
      role="region"
      aria-roledescription="carousel"
      aria-label="Image carousel"
    >
      {/* Slides */}
      <div 
        className="flex h-full transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {carouselSource.map((item, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-full h-full"
            aria-hidden={index !== currentIndex}
            role="group"
            aria-roledescription="slide"
            aria-label={`${index + 1} of ${carouselSource.length}`}
          >
            <Image
              src={item.image}
              alt={item.alt}
              className="object-cover w-full h-full"
              width={1920}
              height={1080}
              priority={index === currentIndex || index === (currentIndex + 1) % carouselSource.length}
            />
            {(item.title || item.description) && (
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6 text-white">
                {item.title && (
                  <h2 className="text-2xl font-bold mb-2">{item.title}</h2>
                )}
                {item.description && (
                  <p className="text-sm opacity-90">{item.description}</p>
                )}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <Button
        variant="ghost"
        size="icon"
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/20 hover:bg-background/40 text-white z-10"
        onClick={previousSlide}
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6" />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/20 hover:bg-background/40 text-white z-10"
        onClick={nextSlide}
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6" />
      </Button>

      {/* Dots Navigation */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {carouselSource.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={cn(
              "h-2 w-2 rounded-full transition-all",
              index === currentIndex 
                ? "bg-white w-4" 
                : "bg-white/50 hover:bg-white/75"
            )}
            aria-label={`Go to slide ${index + 1}`}
            aria-current={index === currentIndex}
          />
        ))}
      </div>
    </div>
  );
}

