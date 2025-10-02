import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { SkipLink } from '@/components/skip-link';
import { CookieBanner } from '@/components/cookie-banner';
import { PartnerCard } from '@/components/partner-card';
import { ContactForm } from '@/components/contact-form';
import { Shield, Search, Landmark, CheckCircle } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import type { Metadata } from 'next';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://cybergloballaw.com';

export const metadata: Metadata = {
  title: 'Our Partners',
  description: 'Trusted MSSPs, forensic firms, and insurance partners for coordinated cyber-legal response.',
  alternates: {
    canonical: `${baseUrl}/partners`,
  },
  openGraph: {
    title: 'Our Partners | CyberGlobal Law',
    description: 'Trusted MSSPs, forensic firms, and insurance partners for coordinated cyber-legal response.',
    url: `${baseUrl}/partners`,
    siteName: 'CyberGlobal Law',
    images: [
      {
        url: `${baseUrl}/api/og?title=Our Partners&subtitle=Trusted MSSPs, forensic firms, and insurance partners&page=partners`,
        width: 1200,
        height: 630,
        alt: 'CyberGlobal Law Partners',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function PartnersPage() {
  const partnerTypes = [
    {
      type: 'MSSPs',
      icon: Shield,
      services: [
        '24/7 Security Operations Center (SOC)',
        'Managed Detection & Response (MDR)',
        'Endpoint Detection & Response (EDR/XDR)',
        'SIEM and log management',
        'Incident response (P1/P2 SLAs)',
        'Penetration testing and red teaming',
        'vCISO and security architecture',
      ],
    },
    {
      type: 'Digital Forensics & IR',
      icon: Search,
      services: [
        'Evidence collection and chain-of-custody',
        'Malware analysis and threat attribution',
        'Timeline reconstruction and root-cause analysis',
        'Expert reports for regulators and courts',
        'eDiscovery and litigation support',
      ],
    },
    {
      type: 'Cyber Insurance',
      icon: Landmark,
      services: [
        'Policy analysis and coverage opinions',
        'Incident notice and claims support',
        'Vendor coordination (forensics, PR, credit monitoring)',
        'Coverage disputes and recovery litigation',
      ],
    },
  ];

  const criteria = [
    'Technical excellence with proven certifications (ISO 27001, SOC 2)',
    'Regional coverage (EU presence with cross-border capabilities)',
    'Clear communication (translate technical findings to business language)',
    'Independence (no hidden conflicts or sales incentives)',
    'Transparent pricing (no surprise fees or scope creep)',
  ];

  const caseVignettes = [
    {
      title: 'Ransomware + GDPR Notification',
      industry: 'SaaS Company, Romania',
      challenge: 'SaaS startup hit by ransomware; customer data potentially exfiltrated. Needed rapid containment, GDPR notification decision, and customer communications.',
      response: 'Legal: Privileged investigation, GDPR 72-hour notification to Romanian DPA, customer notification drafting. MSSP Partner: Threat containment, forensic imaging, malware analysis.',
      outcome: 'Notification completed within 48 hours, no regulatory fine, customer churn minimized.',
    },
    {
      title: 'NIS2 Supply Chain Incident',
      industry: 'Energy Sector, Germany',
      challenge: 'Critical supplier\'s IT systems compromised; potential service disruption. Client (essential entity under NIS2) needed to assess notification obligations and contractual liability.',
      response: 'Legal: NIS2 notification analysis, supplier contract review, regulator liaison with German CSIRT. Forensic Partner: Supplier-side forensics under legal privilege.',
      outcome: 'Supplier breach contained; client avoided NIS2 reporting (no service disruption); contract renegotiated with enhanced security clauses.',
    },
    {
      title: 'DORA Testing & Remediation',
      industry: 'Fintech, Netherlands',
      challenge: 'Fintech preparing for DORA compliance; needed threat-led penetration testing (TLPT) and legal review of findings.',
      response: 'Legal: DORA gap assessment, TLPT scoping, remediation roadmap with legal oversight. MSSP Partner: TLPT execution, findings report, remediation validation.',
      outcome: 'DORA-ready ICT risk management framework; clean audit from Dutch regulator (DNB).',
    },
  ];

  return (
    <>
      <SkipLink />
      <Header />

      <main id="main-content">
        {/* Hero */}
        <section className="bg-gradient-to-br from-indigo-600 via-purple-600 to-cyan-500 py-16 text-white md:py-24">
          <div className="container mx-auto px-4 md:px-8">
            <div className="mx-auto max-w-4xl text-center">
              <h1 className="font-display text-4xl font-bold md:text-5xl lg:text-6xl">
                Our Partners
              </h1>
              <p className="mt-6 text-lg text-white/90 md:text-xl">
                Trusted MSSPs, forensic firms, and insurance partners for coordinated cyber-legal response.
              </p>
            </div>
          </div>
        </section>

        {/* Why We Partner */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-8">
            <div className="mx-auto max-w-4xl">
              <h2 className="mb-6 text-center font-display text-3xl font-bold md:text-4xl">
                Why We Partner
              </h2>
              <p className="mb-8 text-center text-lg text-muted-foreground">
                Cyber incidents don't respect organizational silos. When an incident hits, you need legal counsel, technical responders, forensic experts, and insurance coordination. Rather than forcing you to coordinate multiple vendors, we've built trusted relationships with vetted partners so you get <strong>one team, multiple specialties</strong>.
              </p>

              <div className="mt-8 rounded-lg border border-border bg-card p-6">
                <h3 className="mb-4 font-semibold">Partner Criteria</h3>
                <ul className="space-y-3">
                  {criteria.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Partner Types */}
        <section className="bg-muted/30 py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-8">
            <div className="mx-auto max-w-6xl">
              <h2 className="mb-12 text-center font-display text-3xl font-bold md:text-4xl">
                Partner Types
              </h2>

              <div className="grid gap-8 md:grid-cols-3">
                {partnerTypes.map((partner) => {
                  const Icon = partner.icon;
                  return (
                    <div
                      key={partner.type}
                      className="rounded-lg border border-border bg-background p-6"
                    >
                      <div className="mb-4 flex items-center gap-3">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                          <Icon className="h-6 w-6" />
                        </div>
                        <h3 className="font-display text-xl font-semibold">{partner.type}</h3>
                      </div>
                      <ul className="space-y-2">
                        {partner.services.map((service, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                            <span>{service}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Case Vignettes */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-8">
            <div className="mx-auto max-w-5xl">
              <h2 className="mb-6 text-center font-display text-3xl font-bold md:text-4xl">
                Case Vignettes
              </h2>
              <p className="mb-12 text-center text-lg text-muted-foreground">
                Anonymized examples showing joint legal + technical response
              </p>

              <div className="space-y-8">
                {caseVignettes.map((vignette, idx) => (
                  <article
                    key={idx}
                    className="rounded-2xl border border-border bg-card p-8 shadow-lg"
                  >
                    <div className="mb-4 flex items-start justify-between gap-4">
                      <div>
                        <h3 className="font-display text-2xl font-bold">{vignette.title}</h3>
                        <Badge variant="outline" className="mt-2">
                          {vignette.industry}
                        </Badge>
                      </div>
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xl font-bold text-primary">
                        {idx + 1}
                      </div>
                    </div>

                    <div className="space-y-4 text-sm">
                      <div>
                        <h4 className="mb-2 font-semibold text-foreground">Challenge:</h4>
                        <p className="text-muted-foreground">{vignette.challenge}</p>
                      </div>

                      <div>
                        <h4 className="mb-2 font-semibold text-foreground">Response:</h4>
                        <p className="text-muted-foreground">{vignette.response}</p>
                      </div>

                      <div className="rounded-lg bg-success/10 p-4">
                        <h4 className="mb-2 font-semibold text-success">Outcome:</h4>
                        <p className="text-muted-foreground">{vignette.outcome}</p>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Become a Partner */}
        <section className="bg-muted/30 py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-8">
            <div className="mx-auto max-w-3xl">
              <h2 className="mb-6 text-center font-display text-3xl font-bold md:text-4xl">
                Become a Partner
              </h2>
              <p className="mb-8 text-center text-lg text-muted-foreground">
                We're always looking for high-quality technical and insurance partners who share our values of <strong>clarity, speed, and defensibility</strong>.
              </p>

              <div className="rounded-2xl border border-border bg-background p-8">
                <h3 className="mb-4 font-semibold">Partner Inquiry</h3>
                <p className="mb-6 text-sm text-muted-foreground">
                  If you're an MSSP, forensic firm, or insurer interested in collaboration, please reach out:
                </p>
                <ContactForm defaultTopic="partnership" />
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

