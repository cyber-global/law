'use client';

import { Suspense } from 'react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { SkipLink } from '@/components/skip-link';
import { CookieBanner } from '@/components/cookie-banner';
import { ContactForm } from '@/components/contact-form';
import { CalEmbed } from '@/components/cal-embed';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { useSearchParams } from 'next/navigation';
import type { ContactFormData } from '@/lib/validators';
import { generateLegalServiceSchema } from '@/lib/seo';

// Component that uses search params - needs to be wrapped in Suspense
function ContactContent() {
  const searchParams = useSearchParams();
  const topic = (searchParams.get('topic') as ContactFormData['topic']) || 'other';
  const name = searchParams.get('name') || undefined;
  const email = searchParams.get('email') || undefined;
  
  // Generate JSON-LD schema
  const legalServiceSchema = generateLegalServiceSchema();
  
  // Map topic to friendly display name for Cal.com notes
  const topicLabels: Record<string, string> = {
    incident: 'Incident Response',
    compliance: 'Regulatory Compliance', 
    contracts: 'Contracts & Vendor Risk',
    disputes: 'Disputes & Enforcement',
    forensics: 'Digital Forensics',
    readiness: 'Readiness Assessment',
    partnership: 'Partnership Inquiry',
    other: 'General Inquiry',
  };
  const topicLabel = topicLabels[topic] || 'General Inquiry';

  return (
    <>
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(legalServiceSchema) }}
      />

      <div className="min-h-screen flex flex-col">
        <SkipLink />
        <Header />

        <main id="main-content" className="flex-1">
          {/* Emergency Contact Banner */}
          <section className="bg-gradient-to-r from-red-600 via-red-700 to-red-800 py-4">
            <div className="container mx-auto px-4 md:px-8">
              <div className="flex items-center justify-center gap-4 text-white text-center">
                <Phone className="h-5 w-5 animate-pulse" />
                <p className="text-sm md:text-base">
                  <strong>Cyber Incident?</strong> Call our 24/7 hotline: 
                  <a 
                    href="tel:+40745304772"
                    className="ml-2 font-bold underline hover:text-red-200 transition-colors"
                  >
                    +40 745 304 772
                  </a>
                </p>
              </div>
            </div>
          </section>

          {/* Main Contact Section */}
          <section className="py-16 md:py-24">
            <div className="container mx-auto px-4 md:px-8">
              <div className="grid gap-12 lg:grid-cols-2">
                {/* Left Column - Contact Form & Office Info */}
                <div className="space-y-12">
                  {/* Contact Form */}
                  <div>
                    <h2 className="mb-6 font-display text-2xl font-bold md:text-3xl">
                      Send Us a Message
                    </h2>
                    <p className="mb-8 text-muted-foreground">
                      For non-urgent inquiries, please use the form below. We'll respond within 1 business day.
                    </p>

                    {/* The Contact Form with dark styling */}
                    <div className="bg-slate-800/30 border border-white/10 rounded-2xl p-8">
                      <ContactForm defaultTopic={topic} />
                    </div>
                  </div>

                  {/* Office Information - Moved below form */}
                  <div>
                    <h2 className="mb-6 font-display text-2xl font-bold md:text-3xl">
                      Office Information
                    </h2>

                    <div className="bg-slate-800/30 border border-white/10 rounded-2xl p-8 space-y-6">
                      <div className="flex items-start gap-4">
                        <Phone className="mt-1 h-5 w-5 text-cyan-400" />
                        <div>
                          <p className="font-semibold text-white">Business Phone</p>
                          <a href="tel:+40745304772" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                            +40 745 304 772
                          </a>
                          <p className="text-xs text-slate-400 mt-1">Monday–Friday, 9:00–18:00 CET</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <Phone className="mt-1 h-5 w-5 text-red-400" />
                        <div>
                          <p className="font-semibold text-red-400">24/7 Emergency Hotline</p>
                          <a href="tel:+40745304772" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                            +40 745 304 772
                          </a>
                          <p className="text-xs text-slate-400 mt-1">Available 24/7 for cyber incidents</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <Mail className="mt-1 h-5 w-5 text-cyan-400" />
                        <div>
                          <p className="font-semibold text-white">Email</p>
                          <a
                            href="mailto:nader.bakri@cybergl.com"
                            className="text-cyan-400 hover:text-cyan-300 transition-colors"
                          >
                            nader.bakri@cybergl.com
                          </a>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <MapPin className="mt-1 h-5 w-5 text-cyan-400" />
                        <div>
                          <p className="font-semibold text-white">Office</p>
                          <address className="text-slate-300 not-italic">
                            Constantin Brancusi 78<br />
                            Cluj-Napoca, Romania
                          </address>
                        </div>
                      </div>

                      <div className="border-t border-white/10 pt-4">
                        <div className="text-sm">
                          <span className="font-semibold text-white">Languages:</span>
                          <span className="text-slate-300 ml-2">English, Romanian, French</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Column - Cal.com Booking */}
                <div>
                  <div id="book">
                    <h2 className="mb-6 font-display text-2xl font-bold md:text-3xl">
                      Book a Consultation
                    </h2>
                    <p className="mb-6 text-muted-foreground">
                      Schedule a 30-minute consultation to discuss compliance, contracts, incident response planning, or regulatory matters.
                    </p>
                    <div className="rounded-lg border border-border bg-card p-6">
                      <CalEmbed 
                        variant="inline"
                        prefill={{
                          name,
                          email,
                          topic: topicLabel,
                          notes: topic !== 'other' ? `Inquiry type: ${topicLabel}` : undefined,
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>

        <Footer />
        <CookieBanner />
      </div>
    </>
  );
}

// Loading component for Suspense fallback
function ContactLoading() {
  return (
    <>
      <SkipLink />
      <Header />
      <main className="min-h-screen bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-foreground mb-4">Loading Contact Page...</h1>
            <p className="text-muted-foreground">Please wait while we load the page.</p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

// Main page component with Suspense boundary
export default function ContactPage() {
  return (
    <Suspense fallback={<ContactLoading />}>
      <ContactContent />
    </Suspense>
  );
}