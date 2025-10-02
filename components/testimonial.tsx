'use client';

import { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
  image?: string;
}

interface TestimonialSliderProps {
  testimonials: Testimonial[];
  className?: string;
}

export function TestimonialSlider({ testimonials, className }: TestimonialSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  if (!testimonials || testimonials.length === 0) {
    return null;
  }

  const currentTestimonial = testimonials[currentIndex];

  return (
    <div className={cn('relative', className)}>
      <Card className="border-none bg-gradient-to-br from-primary/5 via-transparent to-accent/5 shadow-lg">
        <CardContent className="relative p-8 md:p-12">
          {/* Quote icon */}
          <Quote className="absolute left-8 top-8 h-12 w-12 text-primary/20" />

          {/* Content */}
          <div className="relative mx-auto max-w-3xl">
            <blockquote className="text-lg md:text-xl lg:text-2xl font-medium leading-relaxed">
              "{currentTestimonial.quote}"
            </blockquote>

            <div className="mt-8 flex items-center gap-4">
              {currentTestimonial.image && (
                <div className="h-12 w-12 overflow-hidden rounded-full bg-muted">
                  <img
                    src={currentTestimonial.image}
                    alt={currentTestimonial.author}
                    className="h-full w-full object-cover"
                  />
                </div>
              )}
              <div>
                <div className="font-semibold text-foreground">
                  {currentTestimonial.author}
                </div>
                <div className="text-sm text-muted-foreground">
                  {currentTestimonial.role}, {currentTestimonial.company}
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Navigation */}
      {testimonials.length > 1 && (
        <div className="mt-6 flex items-center justify-center gap-4">
          <Button
            variant="outline"
            size="icon"
            onClick={goToPrevious}
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>

          {/* Dots indicator */}
          <div className="flex gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={cn(
                  'h-2 w-2 rounded-full transition-all',
                  index === currentIndex
                    ? 'w-6 bg-primary'
                    : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                )}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          <Button
            variant="outline"
            size="icon"
            onClick={goToNext}
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      )}
    </div>
  );
}

