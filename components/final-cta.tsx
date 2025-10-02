'use client';

import { Phone, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import Link from 'next/link';
import { CalEmbed } from './cal-embed';

export function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-indigo-600 via-purple-600 to-cyan-500 py-16 md:py-24">
      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      <div className="container relative mx-auto px-4 md:px-8">
        <div className="mx-auto max-w-4xl text-center text-white">
          <h2 className="font-display text-3xl font-bold md:text-4xl lg:text-5xl">
            Ready When You Need Us
          </h2>
          <p className="mt-4 text-lg text-white/90 md:text-xl">
            Whether you're facing an active incident or planning ahead, we're here to help.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
            {/* Call Hotline */}
            <Button
              asChild
              size="lg"
              className="bg-white text-indigo-600 hover:bg-white/90 hover:scale-105 transition-all shadow-xl"
            >
              <Link href="tel:+40745304772">
                <Phone className="mr-2 h-5 w-5" />
                Call 24/7 Incident Hotline
              </Link>
            </Button>

            {/* Book Consultation - Opens Cal.com Modal */}
            <Dialog>
              <DialogTrigger asChild>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white bg-white text-indigo-600 hover:bg-white/90 hover:scale-105 transition-all"
                >
                  <Calendar className="mr-2 h-5 w-5" />
                  Book a Consultation
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-4xl max-h-[90vh] overflow-auto">
                <div className="h-[600px]">
                  <CalEmbed 
                    variant="inline"
                    prefill={{
                      notes: 'Inquiry from homepage - General consultation',
                    }}
                  />
                </div>
              </DialogContent>
            </Dialog>
          </div>

          <p className="mt-8 text-sm text-white/80">
            <strong>Response SLA:</strong> 30-minute callback for incidents · Next business day for consultations
          </p>
        </div>
      </div>
    </section>
  );
}

