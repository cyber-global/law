'use client';

import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Phone, Calendar } from 'lucide-react';
import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';

interface HeroProps {
  headline: string;
  subheadline: string;
  primaryCTA?: {
    text: string;
    href: string;
  };
  secondaryCTA?: {
    text: string;
    href: string;
  };
  credibilityChips?: string[];
}

export function Hero({
  headline,
  subheadline,
  primaryCTA = { text: 'Book a Meeting', href: '/contact' },
  secondaryCTA, // No secondary CTA
  credibilityChips = ['GDPR', 'NIS2', 'DORA', 'eIDAS2', 'Cross-border data', 'eDiscovery'],
}: HeroProps) {
  // Respect user's motion preference
  const prefersReducedMotion = useReducedMotion();

  // Animation variants with reduced motion support
  const fadeUpVariants = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: prefersReducedMotion ? 0 : 0.6,
        ease: [0.22, 1, 0.36, 1], // Ease-out curve
      }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: prefersReducedMotion ? 0 : 0.15,
        delayChildren: prefersReducedMotion ? 0 : 0.1,
      }
    }
  };

  const chipVariants = {
    hidden: { opacity: 0, scale: prefersReducedMotion ? 1 : 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: prefersReducedMotion ? 0 : 0.4,
        ease: 'easeOut',
      }
    }
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-indigo-600 via-sky-500 to-cyan-400 text-white">
      {/* Grid overlay - subtle pattern per BRIEF */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
      
      {/* Noise texture overlay - subtle depth per BRIEF */}
      <div className="absolute inset-0 opacity-[0.015] mix-blend-overlay">
        <svg className="h-full w-full">
          <filter id="noise">
            <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="4" stitchTiles="stitch" />
          </filter>
          <rect width="100%" height="100%" filter="url(#noise)" />
        </svg>
      </div>

      {/* Content with animations */}
      <div className="container relative mx-auto px-4 py-12 md:px-8 md:py-20 lg:py-24">
        <motion.div 
          className="mx-auto max-w-4xl text-center"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          {/* Headline with fade-up */}
          <motion.h1 
            className="font-display text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
            variants={fadeUpVariants}
          >
            {headline}
          </motion.h1>

          {/* Subheadline with fade-up */}
          <motion.p 
            className="mt-6 text-lg text-white/90 sm:text-xl md:text-2xl md:leading-relaxed"
            variants={fadeUpVariants}
          >
            {subheadline}
          </motion.p>

          {/* CTAs with fade-up */}
          {/* Single centered CTA */}
          <motion.div
            className="mt-10 flex justify-center"
            variants={fadeUpVariants}
          >
            <motion.div
              whileHover={prefersReducedMotion ? {} : { scale: 1.05 }}
              whileTap={prefersReducedMotion ? {} : { scale: 0.98 }}
            >
              <Button
                asChild
                size="lg"
                className="bg-white text-indigo-600 hover:bg-white/90 transition-all shadow-xl font-semibold px-8"
              >
                <Link href={primaryCTA.href}>
                  <Calendar className="mr-2 h-5 w-5" />
                  {primaryCTA.text}
                </Link>
              </Button>
            </motion.div>
          </motion.div>

          {/* Credibility chips with staggered fade-in */}
          {credibilityChips && credibilityChips.length > 0 && (
            <motion.div 
              className="mt-12 flex flex-wrap items-center justify-center gap-3"
              variants={staggerContainer}
            >
              {credibilityChips.map((chip, index) => (
                <motion.div
                  key={chip}
                  variants={chipVariants}
                  custom={index}
                >
                  <Badge
                    variant="outline"
                    className="border-white bg-white text-indigo-600 hover:bg-white/90 transition-colors"
                  >
                    {chip}
                  </Badge>
                </motion.div>
              ))}
            </motion.div>
          )}
        </motion.div>
      </div>

      {/* Bottom fade gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}

