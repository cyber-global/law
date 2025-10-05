'use client';

import { Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

export function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-indigo-600 via-purple-600 to-cyan-500 py-16 md:py-24">
      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      <div className="container relative mx-auto px-4 md:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-8 lg:grid-cols-[auto_1fr] lg:gap-12 items-center">
            {/* Founder Image */}
            <div className="flex justify-center lg:justify-start">
              <div className="relative">
                <div className="relative h-32 w-32 md:h-40 md:w-40 lg:h-48 lg:w-48 overflow-hidden rounded-full border-4 border-white/20 shadow-2xl">
                  <Image
                    src="/nader bakri - founder.jpeg"
                    alt="Nader Bakri, Founder of CyberLegal"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 128px, (max-width: 1024px) 160px, 192px"
                  />
                </div>
                {/* Decorative ring */}
                <div className="absolute inset-0 rounded-full border-2 border-white/10 animate-pulse" style={{ transform: 'scale(1.1)' }} />
              </div>
            </div>

            {/* Content */}
            <div className="text-center lg:text-left text-white">
              <h2 className="font-display text-3xl font-bold md:text-4xl lg:text-5xl">
                Ready When You Need Us
              </h2>
              <p className="mt-4 text-lg text-white/90 md:text-xl">
                Whether you're facing an active incident or planning ahead, I'm here to help.
              </p>
              
              <p className="mt-4 text-base text-white/80 italic">
                "Seven years of turning complex security events into clear, defensible legal outcomes—24/7."
              </p>
              
              <p className="mt-2 text-sm font-semibold text-cyan-300">
                — Nader Bakri, Founder
              </p>

              <div className="mt-8 flex justify-center lg:justify-start">
                {/* Book Consultation */}
                <Button
                  asChild
                  size="lg"
                  className="bg-white text-indigo-600 hover:bg-white/90 hover:scale-105 transition-all shadow-xl font-semibold px-8"
                >
                  <a
                    href={`https://cal.com/${process.env.NEXT_PUBLIC_CALCOM_LINK || 'cyberglobal-law/30min'}?notes=Inquiry from homepage - General consultation`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Calendar className="mr-2 h-5 w-5" />
                    Book a Consultation
                  </a>
                </Button>
              </div>

              <p className="mt-6 text-sm text-white/80">
                <strong>Response SLA:</strong> 30-minute callback for incidents · Next business day for consultations
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

