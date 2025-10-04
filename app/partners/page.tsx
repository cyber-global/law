import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { SkipLink } from '@/components/skip-link';
import { CookieBanner } from '@/components/cookie-banner';
import { PartnerCard } from '@/components/partner-card';
import { Shield, Search, Landmark, CheckCircle, Calendar, ExternalLink } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://cyberlgl.com';

export const metadata: Metadata = {
  title: 'Our Partners',
  description: 'Trusted MSSPs, forensic firms, and insurance partners for coordinated cyber-legal response.',
  alternates: {
    canonical: `${baseUrl}/partners`,
  },
  openGraph: {
    title: 'Our Partners | CyberLegal',
    description: 'Trusted MSSPs, forensic firms, and insurance partners for coordinated cyber-legal response.',
    url: `${baseUrl}/partners`,
    siteName: 'CyberLegal',
    images: [
      {
        url: `${baseUrl}/api/og?title=Our Partners&subtitle=Trusted MSSPs, forensic firms, and insurance partners&page=partners`,
        width: 1200,
        height: 630,
        alt: 'CyberLegal Partners',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function PartnersPage() {
  // Our trusted partners with actual logos and contrast specifications
  const partners = [
    {
      name: 'CyberGlobal',
      website: 'cybergl.com',
      url: 'https://cybergl.com',
      logo: '/partners/cyberglobal.svg',
      logoType: 'dark', // Assume dark logo, use light background
      description: 'Global cybersecurity solutions and managed security services provider',
      services: ['SOC/MDR Services', 'Incident Response', 'Threat Intelligence', 'Security Architecture'],
      region: 'Global',
    },
    {
      name: 'Cube Enterprise',
      website: 'cube-enterprise.com', 
      url: 'https://cube-enterprise.com',
      logo: '/partners/cube enterprise.webp',
      logoType: 'mixed', // Mixed colors, use neutral background
      description: 'Enterprise security solutions and consulting services',
      services: ['Enterprise Security', 'Risk Assessment', 'Compliance Consulting', 'Security Training'],
      region: 'Europe',
    },
    {
      name: 'CyberGlobal Bahrain',
      website: 'cybergl.com/bh',
      url: 'https://cybergl.com/bh/',
      logo: '/partners/cyberglobal bahrain.svg',
      logoType: 'dark', // Assume dark logo, use light background
      description: 'Regional cybersecurity expertise for Middle East operations',
      services: ['Regional SOC', 'Local Incident Response', 'Regulatory Compliance', 'Cross-border Coordination'],
      region: 'Middle East',
    },
    {
      name: 'CT Defense', 
      website: 'ctdefense.com',
      url: 'https://ctdefense.com',
      logo: '/partners/ctdefense.svg',
      logoType: 'light', // Assume light/white logo, use dark background
      description: 'Specialized cyber defense and digital forensics capabilities',
      services: ['Digital Forensics', 'Malware Analysis', 'Threat Hunting', 'Expert Testimony'],
      region: 'Europe/US',
    },
  ];

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

        {/* Our Trusted Partners */}
        <section className="bg-slate-800/50 py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-8">
            <div className="mx-auto max-w-6xl">
              <h2 className="mb-6 text-center font-display text-3xl font-bold md:text-4xl text-white">
                Our Trusted Partners
              </h2>
              <p className="mb-12 text-center text-lg text-slate-300 max-w-3xl mx-auto">
                We work with carefully selected partners who share our commitment to excellence, transparency, and rapid response across global markets.
              </p>

              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
                {partners.map((partner) => (
                  <div
                    key={partner.name}
                    className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-8 hover:bg-white/10 transition-all duration-300"
                  >
                    <div className="flex items-start gap-4 mb-6">
                      {/* Partner Logo - Adaptive contrast solution */}
                      <div className={`group relative flex h-20 w-20 items-center justify-center rounded-xl p-3 border-2 shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 ${
                        partner.logoType === 'light' 
                          ? 'bg-slate-800 border-slate-600' // Dark background for light/white logos
                          : partner.logoType === 'mixed'
                          ? 'bg-gradient-to-br from-slate-50 to-slate-100 border-slate-200'  // Gradient for colored logos  
                          : 'bg-gradient-to-br from-slate-100 to-slate-200 border-slate-300' // Light gradient for dark logos
                      }`}>
                        <Image
                          src={partner.logo}
                          alt={`${partner.name} logo`}
                          width={80}
                          height={80}
                          className={`w-full h-full object-contain transition-transform group-hover:scale-105 ${
                            partner.logoType === 'light'
                              ? 'filter brightness-110 contrast-110' // Enhance light logos on dark background
                              : partner.logoType === 'mixed' 
                              ? 'filter contrast-130 saturate-125'   // Enhance mixed logos
                              : 'filter contrast-125 brightness-90'  // Ensure dark logos show well
                          }`}
                        />
                        {/* Subtle definition ring */}
                        <div className={`absolute inset-1 rounded-lg border pointer-events-none ${
                          partner.logoType === 'light' ? 'border-white/10' : 'border-black/5'
                        }`}></div>
                        
                        {/* Company name label on hover */}
                        <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                          <div className="bg-slate-900 text-white text-xs px-2 py-1 rounded whitespace-nowrap">
                            {partner.name}
                          </div>
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="font-display text-xl font-bold text-white">{partner.name}</h3>
                          <Badge variant="outline" className="text-xs border-cyan-400/30 text-cyan-400">
                            {partner.region}
                          </Badge>
                        </div>
                        <div className="flex items-center gap-2 text-slate-400 text-sm mb-3">
                          <ExternalLink className="h-4 w-4" />
                          <a 
                            href={partner.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-cyan-400 transition-colors"
                          >
                            {partner.website}
                          </a>
                        </div>
                        <p className="text-slate-300 text-sm leading-relaxed">
                          {partner.description}
                        </p>
                      </div>
                    </div>

                    {/* Services */}
                    <div className="border-t border-white/10 pt-4">
                      <h4 className="text-sm font-semibold text-white mb-3">Key Services:</h4>
                      <div className="flex flex-wrap gap-2">
                        {partner.services.map((service, idx) => (
                          <Badge 
                            key={idx} 
                            variant="secondary" 
                            className="text-xs bg-white/10 text-slate-300 border-white/10"
                          >
                            {service}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
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

        {/* Partner with Us CTA */}
        <section className="bg-gradient-to-br from-indigo-600 via-purple-600 to-cyan-500 py-16 md:py-24">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:4rem_4rem]" />
          
          <div className="container relative mx-auto px-4 md:px-8">
            <div className="mx-auto max-w-4xl text-center text-white">
              <h2 className="font-display text-3xl font-bold md:text-4xl lg:text-5xl mb-6">
                Ready to Partner with Us?
              </h2>
              <p className="text-lg text-white/90 md:text-xl mb-8 max-w-2xl mx-auto">
                We're always looking for high-quality technical and insurance partners who share our values of clarity, speed, and defensibility.
              </p>

              <div className="flex justify-center">
                <Button
                  asChild
                  size="lg"
                  className="bg-white text-indigo-600 hover:bg-white/90 hover:scale-105 transition-all shadow-xl font-semibold px-8"
                >
                  <Link href="/contact?topic=partnership">
                    <Calendar className="mr-2 h-5 w-5" />
                    Discuss Partnership
                  </Link>
                </Button>
              </div>

              <p className="mt-8 text-sm text-white/80">
                <strong>Partnership Areas:</strong> MSSPs • Digital Forensics • Cyber Insurance • RegTech
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

