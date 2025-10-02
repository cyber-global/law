import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { SkipLink } from '@/components/skip-link';
import { CookieBanner } from '@/components/cookie-banner';
import { SectionContainer, SectionHeader } from '@/components/section-container';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Shield, Users, Network, ArrowRight, CheckCircle } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://cybergloballaw.com';

export const metadata: Metadata = {
  title: 'Cybersecurity & EU Regulations',
  description: 'Plain-English explainers for GDPR, NIS2, DORA, eIDAS2, and how legal and technical teams work together.',
  alternates: {
    canonical: `${baseUrl}/cybersecurity`,
  },
  openGraph: {
    title: 'Cybersecurity & EU Regulations | CyberGlobal Law',
    description: 'Plain-English explainers for GDPR, NIS2, DORA, eIDAS2, and how legal and technical teams work together.',
    url: `${baseUrl}/cybersecurity`,
    siteName: 'CyberGlobal Law',
    images: [
      {
        url: `${baseUrl}/api/og?title=Cybersecurity %26 EU Regulations&subtitle=GDPR • NIS2 • DORA • eIDAS2&page=cybersecurity`,
        width: 1200,
        height: 630,
        alt: 'Cybersecurity & EU Regulations',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function CybersecurityPage() {
  const regulations = [
    {
      name: 'GDPR',
      fullName: 'General Data Protection Regulation',
      description: 'Protects personal data of EU residents. Requires security measures, breach notification (72 hours to DPAs for certain breaches), and Data Protection Impact Assessments (DPIAs) for high-risk processing.',
      applies: 'Any organization processing EU residents\' personal data—regardless of where the organization is based.',
      intersection: 'Security controls (encryption, access controls) are legal requirements under Article 32. Breach detection and notification timelines require coordinated IR processes. Data subject rights need technical implementation.',
      color: 'from-blue-500 to-blue-600',
    },
    {
      name: 'NIS2',
      fullName: 'Network and Information Security Directive 2',
      description: 'Raises security and incident reporting for essential and important entities in critical sectors (energy, transport, finance, health, digital infrastructure). Introduces board accountability and supply chain security obligations.',
      applies: 'Medium and large organizations in designated sectors, based on size, sector, and criticality. Member states are transposing NIS2 into national law.',
      intersection: 'Incident reporting: 24-hour early warning, 72-hour detailed notification, final report. Supply chain security requires legal contracts + technical vendor risk assessments. Governance needs board-level oversight with legal + technical briefings.',
      color: 'from-indigo-500 to-indigo-600',
    },
    {
      name: 'DORA',
      fullName: 'Digital Operational Resilience Act',
      description: 'Targets financial entities (banks, insurers, investment firms, crypto firms) with detailed ICT risk management, third-party risk, incident reporting, and resilience testing requirements.',
      applies: 'Financial institutions and their critical ICT service providers (cloud, data centers, managed security).',
      intersection: 'ICT risk management maps security controls to DORA requirements. Third-party risk needs legal contracts (exit plans, audit rights) + technical criticality assessments. Testing includes threat-led penetration testing (TLPT) with legal oversight.',
      color: 'from-purple-500 to-purple-600',
    },
    {
      name: 'eIDAS2',
      fullName: 'Electronic Identification, Authentication and Trust Services',
      description: 'Updates trust services (e-signatures, seals, time stamps, certificates) and introduces a framework for digital identity wallets across the EU.',
      applies: 'Trust service providers (TSPs), organizations relying on qualified electronic signatures, and eventually users of EU Digital Identity Wallets.',
      intersection: 'Trust services require legal licensing + technical security audits. Digital wallets need privacy (GDPR), security (technical architecture), and cross-border recognition (legal framework).',
      color: 'from-cyan-500 to-cyan-600',
    },
  ];

  const legalResponsibilities = [
    'Notification strategy',
    'Regulator liaison',
    'Drafting notices & Q&As',
    'Attorney-client privilege protection',
    'Contractual liability analysis',
  ];

  const msspResponsibilities = [
    'Threat containment & eradication',
    'Forensic analysis & root cause',
    'Log collection & evidence preservation',
    'Technical remediation & patching',
    'Vendor coordination (EDR, SIEM, etc.)',
  ];

  const msspServices = [
    { name: 'SOC/MDR', description: '24/7 Security Operations Center and Managed Detection & Response' },
    { name: 'Threat Hunting', description: 'Proactive threat identification across your environment' },
    { name: 'EDR/XDR', description: 'Endpoint and extended detection & response platforms' },
    { name: 'SIEM', description: 'Security Information and Event Management (log aggregation, correlation, alerting)' },
    { name: 'Incident Response', description: 'P1/P2 SLAs with on-call technical responders' },
    { name: 'Pen Testing & Red Team', description: 'Offensive security assessments and simulation exercises' },
    { name: 'vCISO', description: 'Virtual CISO services for strategic security guidance' },
    { name: 'Security Architecture', description: 'Design and implementation of secure cloud, network, and identity architectures' },
  ];

  return (
    <>
      <SkipLink />
      <Header />

      <main id="main-content">
        {/* Page Hero */}
        <section className="bg-gradient-to-br from-indigo-600 via-purple-600 to-cyan-500 py-16 text-white md:py-24">
          <div className="container mx-auto px-4 md:px-8">
            <div className="mx-auto max-w-4xl text-center">
              <h1 className="font-display text-4xl font-bold md:text-5xl lg:text-6xl">
                Cybersecurity & EU Regulations
              </h1>
              <p className="mt-6 text-lg text-white/90 md:text-xl">
                Where legal obligations meet technical controls. Understand GDPR, NIS2, DORA, and eIDAS2—and how legal + technical teams work together.
              </p>
            </div>
          </div>
        </section>

        {/* Section 1: EU Cyber Regulations Overview */}
        <SectionContainer>
          <SectionHeader
            title="EU Cyber Regulations: Plain-English Overview"
            description="GDPR protects personal data; NIS2 raises security and reporting for essential/important entities; DORA targets operational resilience in finance; eIDAS2 sets trust services and digital identity. Together, they define when to prevent, detect, notify, and prove."
          />

          <div className="mt-12 grid gap-8 lg:gap-12">
            {regulations.map((reg, index) => (
              <article
                key={reg.name}
                className="rounded-2xl border border-border bg-card p-8 shadow-lg transition-all hover:shadow-xl"
              >
                <div className="mb-6 flex items-start gap-4">
                  <div className={`flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-gradient-to-br ${reg.color} text-2xl font-bold text-white shadow-lg`}>
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3">
                      <h3 className="font-display text-2xl font-bold">{reg.name}</h3>
                      <Badge variant="outline">{reg.fullName}</Badge>
                    </div>
                  </div>
                </div>

                <div className="space-y-4 text-muted-foreground">
                  <div>
                    <h4 className="mb-2 font-semibold text-foreground">What it does:</h4>
                    <p>{reg.description}</p>
                  </div>

                  <div>
                    <h4 className="mb-2 font-semibold text-foreground">Who it applies to:</h4>
                    <p>{reg.applies}</p>
                  </div>

                  <div className="rounded-lg bg-primary/5 p-4">
                    <h4 className="mb-2 font-semibold text-foreground">Key legal-technical intersection:</h4>
                    <p>{reg.intersection}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </SectionContainer>

        {/* Section 2: How Legal + MSSP Work Together */}
        <SectionContainer background="muted">
          <SectionHeader
            title="How Legal + MSSP Work Together"
            description="Effective incident response and compliance require one team with two specialties: legal counsel and technical responders working from a shared playbook."
          />

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {/* Legal Counsel Responsibilities */}
            <div className="rounded-2xl border border-primary/20 bg-primary/5 p-8">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/20 text-primary">
                  <Shield className="h-6 w-6" />
                </div>
                <h3 className="font-display text-2xl font-bold">Legal Counsel</h3>
              </div>
              <ul className="space-y-3">
                {legalResponsibilities.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* MSSP/Technical Team Responsibilities */}
            <div className="rounded-2xl border border-accent/20 bg-accent/5 p-8">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/20 text-accent">
                  <Network className="h-6 w-6" />
                </div>
                <h3 className="font-display text-2xl font-bold">MSSP/Technical Team</h3>
              </div>
              <ul className="space-y-3">
                {msspResponsibilities.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Shared Playbook */}
          <div className="mt-8 rounded-2xl border border-border bg-background p-8">
            <h3 className="mb-4 font-display text-xl font-bold">The Shared Playbook</h3>
            <p className="mb-6 text-muted-foreground">
              Effective incident response requires <strong>joint ownership</strong> of:
            </p>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="flex items-start gap-3">
                <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <span>Incident response runbooks (who does what, when)</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <span>Log retention policies (legal hold + technical capabilities)</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <span>Escalation matrices (when to call legal/MSSP/board)</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <span>Reporting timelines (GDPR 72h, NIS2 24/72h, DORA 24/72h)</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <span>Communications (legal drafts notices, MSSP provides technical summaries)</span>
              </div>
            </div>
          </div>
        </SectionContainer>

        {/* Section 3: MSSP Services via Partners */}
        <SectionContainer>
          <SectionHeader
            title="MSSP Services via Partners"
            description="We work with vetted MSSP partners who provide comprehensive security operations and incident response capabilities."
          />

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {msspServices.map((service) => (
              <div
                key={service.name}
                className="rounded-lg border border-border bg-card p-6 transition-all hover:border-accent/50 hover:shadow-md"
              >
                <h3 className="mb-2 font-semibold text-accent">{service.name}</h3>
                <p className="text-sm text-muted-foreground">{service.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <p className="text-sm text-muted-foreground">
              <strong>Geography:</strong> EU (with focus on CEE, DACH, Benelux)
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              <strong>Referral process:</strong> We introduce you and coordinate joint engagements
            </p>
          </div>
        </SectionContainer>

        {/* Section 4: Joint Offering */}
        <SectionContainer background="gradient">
          <div className="mx-auto max-w-4xl">
            <div className="rounded-2xl border border-border bg-background p-8 shadow-xl md:p-12">
              <div className="mb-6 flex items-center justify-center">
                <div className="flex items-center gap-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Shield className="h-8 w-8" />
                  </div>
                  <div className="text-4xl font-bold text-muted-foreground">+</div>
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-accent/10 text-accent">
                    <Network className="h-8 w-8" />
                  </div>
                </div>
              </div>

              <h2 className="mb-4 text-center font-display text-3xl font-bold md:text-4xl">
                One Team, Two Specialties
              </h2>
              <p className="mb-8 text-center text-lg text-muted-foreground">
                Our joint offering combines legal privilege with technical expertise for seamless incident response and compliance.
              </p>

              <div className="grid gap-6 md:grid-cols-2">
                <div className="rounded-lg bg-primary/5 p-6">
                  <h3 className="mb-3 font-semibold text-primary">Legal Privilege</h3>
                  <p className="text-sm text-muted-foreground">
                    Our engagement protects analysis and decision-making from discovery. Attorney-client privilege shields sensitive findings during investigations and regulatory proceedings.
                  </p>
                </div>

                <div className="rounded-lg bg-accent/5 p-6">
                  <h3 className="mb-3 font-semibold text-accent">Technical Execution</h3>
                  <p className="text-sm text-muted-foreground">
                    MSSPs execute containment, forensics, and remediation under legal oversight. Technical teams work with privilege protection while maintaining operational effectiveness.
                  </p>
                </div>
              </div>

              <div className="mt-8 rounded-lg bg-muted/50 p-6">
                <h3 className="mb-3 font-semibold">Unified Timeline</h3>
                <p className="text-sm text-muted-foreground">
                  One shared incident timeline for both technical and legal reporting. Real-time updates via your preferred communication channels (Slack, Teams, Signal).
                </p>
              </div>
            </div>
          </div>
        </SectionContainer>

        {/* Section 5: Joint Readiness Session CTA */}
        <section className="relative overflow-hidden bg-gradient-to-br from-indigo-600 via-purple-600 to-cyan-500 py-16 text-white md:py-24">
          {/* Grid overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:4rem_4rem]" />

          <div className="container relative mx-auto px-4 md:px-8">
            <div className="mx-auto max-w-4xl text-center">
              <div className="mb-6 flex items-center justify-center">
                <Users className="h-16 w-16" />
              </div>
              <h2 className="font-display text-3xl font-bold md:text-4xl lg:text-5xl">
                Request a Joint Readiness Session
              </h2>
              <p className="mt-6 text-lg text-white/90 md:text-xl">
                Want to ensure your legal and technical teams are aligned on incident response, compliance, and reporting? Book a joint readiness session with our legal counsel and one of our MSSP partners.
              </p>

              <div className="mt-8 rounded-lg bg-white/20 p-6">
                <p className="mb-4 font-semibold">We'll review your:</p>
                <div className="grid gap-3 text-left md:grid-cols-2">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="mt-0.5 h-5 w-5 shrink-0" />
                    <span>Incident response playbooks</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="mt-0.5 h-5 w-5 shrink-0" />
                    <span>Notification timelines and decision trees</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="mt-0.5 h-5 w-5 shrink-0" />
                    <span>Log retention and forensic readiness</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="mt-0.5 h-5 w-5 shrink-0" />
                    <span>Vendor contracts and supply chain risk</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="mt-0.5 h-5 w-5 shrink-0" />
                    <span>Compliance artefacts (DPIAs, RoPAs, SoAs)</span>
                  </div>
                </div>
              </div>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
                <Button
                  asChild
                  size="lg"
                  className="bg-white text-indigo-600 hover:bg-white/90 hover:scale-105 transition-all shadow-xl"
                >
                  <Link href="/contact?topic=readiness">
                    Request a Readiness Session
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-white bg-white text-indigo-600 hover:bg-white/90 hover:scale-105 transition-all"
                >
                  <Link href="tel:+40745304772">Call 24/7 Hotline</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Resources */}
        <SectionContainer>
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-6 text-center font-display text-2xl font-bold">
              Regulatory Resources
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              <a
                href="https://eur-lex.europa.eu/eli/reg/2016/679/oj"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between rounded-lg border border-border bg-card p-4 transition-all hover:border-primary hover:shadow-md"
              >
                <span className="font-medium">GDPR Full Text</span>
                <ArrowRight className="h-4 w-4 text-muted-foreground" />
              </a>
              <a
                href="https://eur-lex.europa.eu/eli/dir/2022/2555/oj"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between rounded-lg border border-border bg-card p-4 transition-all hover:border-primary hover:shadow-md"
              >
                <span className="font-medium">NIS2 Directive</span>
                <ArrowRight className="h-4 w-4 text-muted-foreground" />
              </a>
              <a
                href="https://eur-lex.europa.eu/eli/reg/2022/2554/oj"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between rounded-lg border border-border bg-card p-4 transition-all hover:border-primary hover:shadow-md"
              >
                <span className="font-medium">DORA Regulation</span>
                <ArrowRight className="h-4 w-4 text-muted-foreground" />
              </a>
              <a
                href="https://eur-lex.europa.eu/eli/reg/2024/1183/oj"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between rounded-lg border border-border bg-card p-4 transition-all hover:border-primary hover:shadow-md"
              >
                <span className="font-medium">eIDAS2 Regulation</span>
                <ArrowRight className="h-4 w-4 text-muted-foreground" />
              </a>
            </div>
          </div>
        </SectionContainer>
      </main>

      <Footer />
      <CookieBanner />
    </>
  );
}

