'use client';

import { Hero } from '@/components/hero';
import { AlertBar } from '@/components/alert-bar';
import { SkipLink } from '@/components/skip-link';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { CookieBanner } from '@/components/cookie-banner';
import { Steps } from '@/components/steps';
import { FAQSection } from '@/components/faq-section';
import { EmpathyAuthority } from '@/components/empathy-authority';
import { ServicesPreview } from '@/components/services-preview';
import { Stakes } from '@/components/stakes';
import { FinalCTA } from '@/components/final-cta';
import { Phone, Users, FileCheck } from 'lucide-react';
import { generateLegalServiceSchema, generateFAQPageSchema } from '@/lib/seo';

export default function HomePage() {
  const threeSteps = [
    {
      number: 1,
      title: 'Call',
      description: 'Connect with breach counsel now.',
      icon: Phone,
    },
    {
      number: 2,
      title: 'Stabilize',
      description: 'Privileged facts, scope, and notifications.',
      icon: Users,
    },
    {
      number: 3,
      title: 'Resolve',
      description: 'Close out with regulator-ready evidence.',
      icon: FileCheck,
    },
  ];

  const faqs = [
    {
      question: 'When do we notify under GDPR/NIS2?',
      answer:
        'GDPR requires notification within 72 hours to the DPA for breaches likely to result in risk. NIS2 requires essential/important entities to report significant incidents: early warning within 24 hours, detailed notification within 72 hours, and final report within 1 month. You may need to notify under both if an incident affects personal data and qualifies as a significant NIS2 incident.',
    },
    {
      question: "What if we don't have logs?",
      answer:
        "Missing logs are a common challenge. Document what you do know, explain the gap honestly to regulators, and show immediate remediation steps. We help you reconstruct available evidence and draft notifications that explain gaps without creating additional liability. Proactively, implement centralized logging (SIEM) with proper retention periods.",
    },
    {
      question: 'Can you work with our MSSP?',
      answer:
        "Yes—and we strongly recommend it. Your MSSP handles containment and forensics; we handle notifications and regulator liaison. We establish joint workflows, shared timelines, and attorney-client privilege protection. If you don't have an MSSP, we can introduce vetted partners.",
    },
    {
      question: 'Do you handle cross-border SaaS vendors?',
      answer:
        'Yes. Cross-border SaaS contracts are a core practice area. We provide practical DPAs, SCCs, and Transfer Impact Assessments (TIAs) for EU↔US, EU↔UK, and other third-country transfers. Our contracts pass customer due diligence, ISO 27001 audits, and DPA scrutiny.',
    },
  ];

  // Generate JSON-LD schemas
  const legalServiceSchema = generateLegalServiceSchema();
  const faqSchema = generateFAQPageSchema(faqs);

  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(legalServiceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="min-h-screen flex flex-col">
        <SkipLink />
        <AlertBar />
        <Header />

      <main id="main-content" className="flex-1">
        {/* Hero Section */}
        <Hero
          headline="When cyber risk turns legal, speed and defensibility matter."
          subheadline="CyberGlobal Law helps CISOs and General Counsel manage incidents, regulators, and contracts across borders—24/7."
          primaryCTA={{
            text: 'Call the 24/7 Incident Hotline',
            href: 'tel:+40745304772',
          }}
          secondaryCTA={{
            text: 'Book a 30-min Consultation',
            href: '/contact#book',
          }}
          credibilityChips={['GDPR', 'NIS2', 'DORA', 'eIDAS2', 'Cross-border data', 'eDiscovery']}
        />

        {/* Empathy + Authority */}
        <EmpathyAuthority />

        {/* The Plan: 3 Steps */}
        <Steps steps={threeSteps} />

        {/* Services Preview */}
        <ServicesPreview />

        {/* What's at Stake */}
        <Stakes />

        {/* FAQs */}
        <FAQSection faqs={faqs} />

        {/* Final CTA */}
        <FinalCTA />
      </main>

        <Footer />
        <CookieBanner />
      </div>
    </>
  );
}
