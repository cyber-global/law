'use client';

import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { SkipLink } from '@/components/skip-link';
import { CookieBanner } from '@/components/cookie-banner';
import { ContactForm } from '@/components/contact-form';
import { CalEmbed } from '@/components/cal-embed';
import { Phone, Mail, MapPin, Download, Clock } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { useSearchParams } from 'next/navigation';
import type { ContactFormData } from '@/lib/validators';
import { generateLegalServiceSchema } from '@/lib/seo';

export default function ContactPage() {
  const searchParams = useSearchParams();
  const topic = (searchParams.get('topic') as ContactFormData['topic']) || 'other';
  const name = searchParams.get('name') || undefined;
  const email = searchParams.get('email') || undefined;
  
  // Generate JSON-LD schema
  const legalServiceSchema = generateLegalServiceSchema();
  
  // Map topic to friendly display name for Cal.com notes
  const topicLabels: Record<ContactFormData['topic'], string> = {
    incident: 'Incident Response',
    compliance: 'Regulatory Compliance',
    contracts: 'Contracts & Vendor Risk',
    disputes: 'Disputes & Enforcement',
    forensics: 'Digital Forensics',
    readiness: 'Readiness Assessment',
    partnership: 'Partnership Inquiry',
    other: 'General Inquiry',
  };
  
  const topicLabel = topicLabels[topic];

  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(legalServiceSchema) }}
      />

      <SkipLink />
      <Header />

      <main id="main-content">
        {/* Hero */}
        <section className="bg-gradient-to-br from-indigo-600 via-purple-600 to-cyan-500 py-16 text-white md:py-24">
          <div className="container mx-auto px-4 md:px-8">
            <div className="mx-auto max-w-4xl text-center">
              <h1 className="font-display text-4xl font-bold md:text-5xl lg:text-6xl">
                Contact Us
              </h1>
              <p className="mt-6 text-lg text-white/90 md:text-xl">
                Get in touch for 24/7 incident response, consultations, or general inquiries.
              </p>
            </div>
          </div>
        </section>

        {/* 24/7 Hotline */}
        <section className="border-b border-border bg-destructive/5 py-12">
          <div className="container mx-auto px-4 md:px-8">
            <div className="mx-auto max-w-4xl text-center">
              <Badge variant="destructive" className="mb-4 text-base">
                🚨 Cyber Incident in Progress?
              </Badge>
              <h2 className="mb-4 font-display text-3xl font-bold md:text-4xl">
                Call Our 24/7 Incident Hotline
              </h2>
              <a
                href="tel:+40745304772"
                className="inline-block font-display text-4xl font-bold text-primary hover:text-primary/80 md:text-5xl"
              >
                +40 745 304 772
              </a>
              <p className="mt-4 flex items-center justify-center gap-2 text-sm text-muted-foreground">
                <Clock className="h-4 w-4" />
                <strong>Response SLA:</strong> Callback within 30 minutes, 24/7/365
              </p>
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4 py-16 md:px-8 md:py-24">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="mb-6 font-display text-2xl font-bold md:text-3xl">
                Send Us a Message
              </h2>
              <p className="mb-8 text-muted-foreground">
                For non-urgent inquiries, please use the form below. We'll respond within 1 business day.
              </p>

              {/* Confidentiality Notice */}
              <Alert className="mb-6">
                <AlertDescription className="text-sm">
                  <strong>Confidentiality Notice:</strong> Submitting this form does <strong>not</strong> create an attorney-client relationship. Please do not include confidential or sensitive information until we confirm representation via an engagement letter.
                </AlertDescription>
              </Alert>

              {/* The Contact Form */}
              <ContactForm defaultTopic={topic} />

              {/* PGP Key */}
              <div className="mt-6 rounded-lg border border-border bg-muted/30 p-4">
                <p className="mb-2 text-sm font-semibold">For highly sensitive matters:</p>
                <a
                  href="/pgp-public-key.asc"
                  className="inline-flex items-center gap-2 text-sm text-primary hover:underline"
                >
                  <Download className="h-4 w-4" />
                  Download PGP Public Key
                </a>
              </div>
            </div>

            {/* Right Column - Cal.com & Office Info */}
            <div className="space-y-8">
              {/* Cal.com Booking */}
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

              {/* Office Information */}
              <div>
                <h2 className="mb-6 font-display text-2xl font-bold md:text-3xl">
                  Office Information
                </h2>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Phone className="mt-1 h-5 w-5 text-muted-foreground" />
                    <div>
                      <p className="font-semibold">Phone</p>
                      <a href="tel:+40745304772" className="text-sm text-primary hover:underline">
                        +40 745 304 772
                      </a>
                      <p className="text-xs text-muted-foreground">(Business hours)</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="mt-1 h-5 w-5 text-destructive" />
                    <div>
                      <p className="font-semibold text-destructive">24/7 Incident Hotline</p>
                      <a href="tel:+40745304772" className="text-sm text-primary hover:underline">
                        +40 745 304 772
                      </a>
                      <p className="text-xs text-muted-foreground">(Always available)</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Mail className="mt-1 h-5 w-5 text-muted-foreground" />
                    <div>
                      <p className="font-semibold">Email</p>
                      <a
                        href="mailto:nader.bakri@cybergl.com"
                        className="text-sm text-primary hover:underline"
                      >
                        nader.bakri@cybergl.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <MapPin className="mt-1 h-5 w-5 text-muted-foreground" />
                    <div>
                      <p className="font-semibold">Office</p>
                      <address className="text-sm not-italic text-muted-foreground">
                        Constantin Brancusi 78
                        <br />
                        [City, Postal Code]
                        <br />
                        [Country]
                      </address>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="mt-1 h-5 w-5 text-muted-foreground" />
                    <div>
                      <p className="font-semibold">Business Hours</p>
                      <p className="text-sm text-muted-foreground">
                        Monday–Friday, 9:00–18:00 CET/CEST
                      </p>
                      <p className="text-xs text-muted-foreground">
                        (24/7 hotline available for incidents)
                      </p>
                    </div>
                  </div>
                </div>

                {/* Timezone & Languages */}
                <div className="mt-6 rounded-lg border border-border bg-muted/30 p-4">
                  <div className="mb-3">
                    <p className="text-sm font-semibold">Timezone</p>
                    <p className="text-sm text-muted-foreground">
                      Central European Time (CET/CEST)
                    </p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold">Languages</p>
                    <div className="mt-2 flex flex-wrap gap-2">
                      <Badge variant="secondary">English</Badge>
                      <Badge variant="secondary">Romanian</Badge>
                      <Badge variant="secondary">French</Badge>
                    </div>
                  </div>
                </div>
              </div>

              {/* Response Times */}
              <div>
                <h3 className="mb-4 font-semibold">Routing & Response Times</h3>
                <div className="space-y-2 rounded-lg border border-border bg-card p-4 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Incident hotline:</span>
                    <span className="font-semibold">Within 30 minutes</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Consultation requests:</span>
                    <span className="font-semibold">Within 4 hours</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">General inquiries:</span>
                    <span className="font-semibold">Within 1 business day</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Partnership inquiries:</span>
                    <span className="font-semibold">Within 2 business days</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Data Protection Notice */}
        <section className="border-t border-border bg-muted/30 py-8">
          <div className="container mx-auto px-4 md:px-8">
            <div className="mx-auto max-w-4xl text-center">
              <p className="text-sm text-muted-foreground">
                <strong>Data Protection Notice:</strong> Your contact information is processed in accordance with our{' '}
                <a href="/legal/privacy" className="text-primary hover:underline">
                  Privacy Policy
                </a>
                . We use your information solely to respond to your inquiry and do not share it with third parties without your consent.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <CookieBanner />
    </>
  );
}

