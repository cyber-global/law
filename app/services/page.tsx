import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { SkipLink } from '@/components/skip-link';
import { CookieBanner } from '@/components/cookie-banner';
import { Check, ArrowRight, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import type { Metadata } from 'next';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://cyberlgl.com';

export const metadata: Metadata = {
  title: 'Our Services',
  description: 'Comprehensive cyber law services from 24/7 incident response to compliance, contracts, forensics, and disputes.',
  alternates: {
    canonical: `${baseUrl}/services`,
  },
  openGraph: {
    title: 'Our Services | CyberLegal',
    description: 'Comprehensive cyber law services from 24/7 incident response to compliance, contracts, forensics, and disputes.',
    url: `${baseUrl}/services`,
    siteName: 'CyberLegal',
    images: [
      {
        url: `${baseUrl}/api/og?title=Our Services&subtitle=24/7 Incident Response • Compliance • Contracts • Forensics&page=services`,
        width: 1200,
        height: 630,
        alt: 'CyberLegal Services',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function ServicesPage() {
  // Services data (from content/services/*.mdx)
  const services = [
    {
      slug: 'incident-response',
      title: 'Incident Response & Breach Counsel (24/7)',
      summary: 'Rapid legal triage, notification strategy, regulator liaison, client/partner communications, and post-incident remediation guidance (GDPR/NIS2 ready).',
      bullets: [
        '24/7 first-response counsel and decisioning',
        'Legally privileged fact-finding, timeline & scope control',
        'Notification strategy (data subjects, partners, DPAs/CSIRTs)',
        'Regulator and law-enforcement liaison',
        'Drafting: notices, Q&As, board updates, media lines',
        'Post-incident remediation plan (policies, controls, lessons learned)',
      ],
      outcomes: ['Shorter downtime', 'Reduced penalties', 'Defensible record'],
      order: 1,
    },
    {
      slug: 'compliance',
      title: 'Regulatory Compliance & Audits',
      summary: 'Gap assessments and ongoing counsel for GDPR, NIS2, DORA, eIDAS2, sector rules (finance/health/critical infra), plus policies, DPIAs, RoPAs, and audit prep.',
      bullets: [
        'Readiness reviews and remediation roadmaps',
        'DPIAs, TIAs, RoPAs, SoAs, incident playbooks',
        'NIS2 governance, roles & reporting design',
        'DORA ops resilience mapping with cyber controls',
        'eIDAS2 trust services, identity & signing flows',
        'Internal audits and external audit preparation',
      ],
      outcomes: ['Clean audits', 'Regulator-ready artefacts', 'Reduced overhead'],
      order: 2,
    },
    {
      slug: 'contracts',
      title: 'Contracts & Vendor/Cross-Border Data Risk',
      summary: 'Drafting/negotiating DPAs, SCCs, security addenda, cloud terms, SaaS SLAs, and supply-chain cyber clauses; third-country transfer strategies.',
      bullets: [
        'Practical DPAs with Annexes (TOMs) that engineers can implement',
        'SCC selection + transfer tools (TIA/DTIA)',
        'Cloud & SaaS terms (shared responsibility, logs, breach steps)',
        'Service levels & remedies aligned to risk',
        'Supply-chain mapping and pass-through obligations',
      ],
      outcomes: ['Faster deals', 'Fewer renegotiations', 'Audit-proof vendor stack'],
      order: 3,
    },
    {
      slug: 'forensics',
      title: 'Digital Forensics & eDiscovery (Legally Defensible)',
      summary: 'Evidence preservation, chain-of-custody oversight, forensic reporting, litigation holds, and eDiscovery that stands up in court and with regulators.',
      bullets: [
        'Legal hold process and custodian notices',
        'Forensic collection scope & vendor oversight',
        'Chain-of-custody artefacts and integrity checks',
        'Defensible search protocols and review workflows',
        'Expert reports for regulators/courts',
      ],
      outcomes: ['Admissible evidence', 'Lower dispute risk', 'Controlled costs'],
      order: 4,
    },
    {
      slug: 'disputes',
      title: 'Cyber Disputes, Enforcement & Insurance Recovery',
      summary: 'Defense in investigations, fines, and litigation; coverage analysis and insurer negotiations; representation before supervisory authorities and CSIRTs.',
      bullets: [
        'DPA/CSIRT investigations defense',
        'Settlement/undertakings strategy',
        'Insurance policy analysis and notice support',
        'Insurer/broker negotiations; panel-counsel coordination',
        'Representation in civil claims & class actions',
      ],
      outcomes: ['Reduced fines/exposure', 'Faster resolution', 'Recovered costs'],
      order: 5,
    },
  ];

  return (
    <>
      <SkipLink />
      <Header />

      <main id="main-content">
        {/* Page Header */}
        <section className="bg-gradient-to-br from-indigo-600 via-purple-600 to-cyan-500 py-16 text-white md:py-24">
          <div className="container mx-auto px-4 md:px-8">
            <div className="mx-auto max-w-4xl text-center">
              <h1 className="font-display text-4xl font-bold md:text-5xl lg:text-6xl">
                Our Services
              </h1>
              <p className="mt-6 text-lg text-white/90 md:text-xl">
                End-to-end cyber law counsel across the incident lifecycle—from proactive compliance
                to 24/7 breach response, forensics, and regulatory defense.
              </p>
            </div>
          </div>
        </section>

        {/* Services List */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-8">
            <div className="mx-auto max-w-5xl space-y-20">
              {services.map((service, index) => (
                <article
                  key={service.slug}
                  id={service.slug}
                  className="scroll-mt-20 rounded-2xl border border-border bg-card p-8 shadow-lg transition-all hover:shadow-xl md:p-12"
                >
                  {/* Service Number & Title */}
                  <div className="mb-6 flex items-start gap-6">
                    <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent text-2xl font-bold text-white shadow-lg">
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <h2 className="font-display text-3xl font-bold md:text-4xl">
                        {service.title}
                      </h2>
                      <p className="mt-3 text-lg text-muted-foreground md:text-xl">
                        {service.summary}
                      </p>
                    </div>
                  </div>

                  {/* What You Get */}
                  {service.bullets && service.bullets.length > 0 && (
                    <div className="mb-8">
                      <h3 className="mb-4 text-lg font-semibold">What You Get</h3>
                      <ul className="grid gap-3 md:grid-cols-2">
                        {service.bullets.map((bullet, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                            <span className="text-muted-foreground">{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Outcomes */}
                  {service.outcomes && service.outcomes.length > 0 && (
                    <div className="mb-8 rounded-lg bg-gradient-to-br from-primary/5 via-transparent to-accent/5 p-6">
                      <h3 className="mb-4 text-lg font-semibold">Outcomes</h3>
                      <div className="flex flex-wrap gap-2">
                        {service.outcomes.map((outcome, idx) => (
                          <Badge key={idx} variant="secondary" className="text-sm">
                            {outcome}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* CTA */}
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between border-t border-border pt-6">
                    <p className="text-sm text-muted-foreground">
                      Ready to discuss this service?
                    </p>
                    <Button asChild size="lg">
                      <Link href="/contact?topic=services">
                        Talk to Counsel
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Link>
                    </Button>
                  </div>
                </article>
              ))}
            </div>

            {/* Bottom CTA */}
            <div className="mt-16 rounded-2xl bg-gradient-to-br from-indigo-600 via-purple-600 to-cyan-500 p-8 text-center text-white md:p-12">
              <h2 className="font-display text-2xl font-bold md:text-3xl">
                Not sure which service you need?
              </h2>
              <p className="mt-4 text-lg text-white/90">
                Book a consultation to discuss your specific legal needs and compliance requirements.
              </p>
              <div className="mt-8 flex justify-center">
                <Button
                  asChild
                  size="lg"
                  className="bg-white text-indigo-600 hover:bg-white/90 hover:scale-105 transition-all shadow-xl font-semibold px-8"
                >
                  <Link href="/contact">
                    <Calendar className="mr-2 h-5 w-5" />
                    Book a Consultation
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <CookieBanner />
    </>
  );
}
