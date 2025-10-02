import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { SkipLink } from '@/components/skip-link';
import { CookieBanner } from '@/components/cookie-banner';
import { Shield, Globe, Users, FileText, Award, CheckCircle } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import type { Metadata } from 'next';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://cybergloballaw.com';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Mission, values, and approach to cyber law and incident response across the EU.',
  alternates: {
    canonical: `${baseUrl}/about`,
  },
  openGraph: {
    title: 'About Us | CyberGlobal Law',
    description: 'Mission, values, and approach to cyber law and incident response across the EU.',
    url: `${baseUrl}/about`,
    siteName: 'CyberGlobal Law',
    images: [
      {
        url: `${baseUrl}/api/og?title=About Us&subtitle=Mission, values, and approach to cyber law&page=about`,
        width: 1200,
        height: 630,
        alt: 'About CyberGlobal Law',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Us | CyberGlobal Law',
    description: 'Mission, values, and approach to cyber law and incident response across the EU.',
    images: [`${baseUrl}/api/og?title=About Us&subtitle=Mission, values, and approach to cyber law&page=about`],
  },
};

export default function AboutPage() {
  const sectors = [
    {
      name: 'SaaS & Technology',
      description: 'Data-intensive startups and scale-ups navigating GDPR, cross-border data flows, and customer contracts',
      icon: Globe,
    },
    {
      name: 'Fintech & Financial Services',
      description: 'Banks, payment processors, and fintech facing DORA, PSD2, and NIS2 compliance',
      icon: Shield,
    },
    {
      name: 'Healthcare & Life Sciences',
      description: 'Hospitals, research institutions, and health tech managing sensitive personal data and critical systems',
      icon: Users,
    },
    {
      name: 'Critical Infrastructure',
      description: 'Energy, transport, and industrial operators subject to NIS2 and sector-specific security rules',
      icon: FileText,
    },
  ];

  const values = [
    {
      title: 'Calm under pressure',
      description: 'Incidents are chaotic. We bring structure and clear options.',
      icon: Shield,
    },
    {
      title: 'Practical',
      description: 'Our advice works in the real world, not just in theory.',
      icon: CheckCircle,
    },
    {
      title: 'Defensible',
      description: 'We document decisions and processes to withstand regulatory and legal scrutiny.',
      icon: FileText,
    },
    {
      title: 'Collaborative',
      description: 'We work alongside your technical, compliance, and business teams—and with your existing counsel when needed.',
      icon: Users,
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
                About CyberGlobal Law
              </h1>
              <p className="mt-6 text-lg text-white/90 md:text-xl">
                Clarity, speed, and defensibility in cyber law and incident response.
              </p>
            </div>
          </div>
        </section>

        {/* Mission & Values */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-8">
            <div className="mx-auto max-w-4xl">
              <h2 className="mb-6 text-center font-display text-3xl font-bold md:text-4xl">
                Mission & Values
              </h2>
              <p className="mb-8 text-center text-lg text-muted-foreground">
                CyberGlobal Law is a boutique cyber law practice focused on <strong>clarity, speed, and defensibility</strong>. We help organizations navigate the intersection of cybersecurity and law—where technical incidents become legal, regulatory, and business challenges.
              </p>

              <div className="mt-12 grid gap-6 md:grid-cols-2">
                {values.map((value) => {
                  const Icon = value.icon;
                  return (
                    <div
                      key={value.title}
                      className="rounded-lg border border-border bg-card p-6 transition-all hover:border-primary/50 hover:shadow-md"
                    >
                      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <Icon className="h-6 w-6" />
                      </div>
                      <h3 className="mb-2 font-semibold">{value.title}</h3>
                      <p className="text-sm text-muted-foreground">{value.description}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Who We Serve */}
        <section className="bg-muted/30 py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-8">
            <div className="mx-auto max-w-5xl">
              <h2 className="mb-6 text-center font-display text-3xl font-bold md:text-4xl">
                Who We Serve
              </h2>
              <p className="mb-12 text-center text-lg text-muted-foreground">
                We work with organizations across sectors that face complex cyber-legal challenges
              </p>

              <div className="grid gap-6 md:grid-cols-2">
                {sectors.map((sector) => {
                  const Icon = sector.icon;
                  return (
                    <div
                      key={sector.name}
                      className="rounded-lg border border-border bg-background p-6"
                    >
                      <div className="mb-4 flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/10 text-accent">
                          <Icon className="h-5 w-5" />
                        </div>
                        <h3 className="font-semibold">{sector.name}</h3>
                      </div>
                      <p className="text-sm text-muted-foreground">{sector.description}</p>
                    </div>
                  );
                })}
              </div>

              <div className="mt-8 rounded-lg border border-border bg-card p-6">
                <h3 className="mb-3 font-semibold">Also serving:</h3>
                <p className="text-sm text-muted-foreground">
                  <strong>Insurers & Brokers:</strong> Cyber insurance carriers and brokers coordinating panel counsel and claims support
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Jurisdictions & Languages */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-8">
            <div className="mx-auto max-w-4xl">
              <div className="grid gap-8 md:grid-cols-2">
                <div>
                  <h2 className="mb-4 font-display text-2xl font-bold">Jurisdictions</h2>
                  <p className="mb-4 text-muted-foreground">
                    <strong className="text-foreground">Primary focus:</strong> European Union (all 27 member states), with particular expertise in Romania, Germany, France, and the Netherlands.
                  </p>
                  <p className="text-muted-foreground">
                    <strong className="text-foreground">Cross-border work:</strong> We regularly coordinate with counsel in the UK, US, and Switzerland for multi-jurisdictional incidents and contracts.
                  </p>
                </div>

                <div>
                  <h2 className="mb-4 font-display text-2xl font-bold">Languages</h2>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">English (primary)</Badge>
                    <Badge variant="secondary">Romanian (fluent)</Badge>
                    <Badge variant="secondary">French (working proficiency)</Badge>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Approach */}
        <section className="bg-muted/30 py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-8">
            <div className="mx-auto max-w-4xl">
              <h2 className="mb-6 text-center font-display text-3xl font-bold md:text-4xl">
                Our Approach
              </h2>

              <div className="mt-12 space-y-8">
                <div className="rounded-lg border border-border bg-background p-6">
                  <h3 className="mb-3 font-display text-xl font-semibold">
                    Playbooks, Not Just Advice
                  </h3>
                  <p className="text-muted-foreground">
                    We don't just tell you what the law requires—we provide <strong>structured playbooks</strong> and <strong>decision trees</strong> so your teams know exactly what to do when an incident hits or a regulator asks questions.
                  </p>
                </div>

                <div className="rounded-lg border border-border bg-background p-6">
                  <h3 className="mb-3 font-display text-xl font-semibold">
                    Artefacts, Not Just Opinions
                  </h3>
                  <p className="mb-4 text-muted-foreground">
                    Compliance and incident response require documentation. We deliver <strong>audit-ready artefacts</strong>:
                  </p>
                  <ul className="grid gap-2 text-sm text-muted-foreground md:grid-cols-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      DPAs and SCCs
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      DPIAs and TIAs
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      Records of Processing Activities
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      Incident timelines and logs
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      Forensic chain-of-custody
                    </li>
                  </ul>
                </div>

                <div className="rounded-lg border border-border bg-background p-6">
                  <h3 className="mb-3 font-display text-xl font-semibold">
                    Communication Cadence
                  </h3>
                  <p className="text-muted-foreground">
                    Incidents move fast. We set up <strong>structured check-ins</strong> (often daily during active incidents) and use your preferred communication channels (Slack, Teams, Signal) to stay in sync.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-8">
            <div className="mx-auto max-w-4xl">
              <h2 className="mb-6 text-center font-display text-3xl font-bold md:text-4xl">
                Team
              </h2>
              <p className="mb-12 text-center text-lg text-muted-foreground">
                Our team combines legal expertise with technical literacy. We understand security controls, forensic processes, and incident response workflows—not just the legal requirements around them.
              </p>

              <div className="rounded-lg border border-border bg-card p-8 text-center">
                <p className="mb-4 text-muted-foreground">
                  <strong className="text-foreground">Team profiles coming soon</strong>
                </p>
                <p className="text-sm text-muted-foreground">
                  Bar admissions: [List jurisdictions] • Certifications: CIPP/E (IAPP), CISSP, CISM
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Memberships & Credentials */}
        <section className="bg-muted/30 py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-8">
            <div className="mx-auto max-w-4xl">
              <h2 className="mb-6 text-center font-display text-3xl font-bold md:text-4xl">
                Memberships & Credentials
              </h2>

              <div className="mt-8 grid gap-4 md:grid-cols-2">
                <div className="rounded-lg border border-border bg-background p-6">
                  <div className="mb-3 flex items-center gap-3">
                    <Award className="h-6 w-6 text-primary" />
                    <h3 className="font-semibold">International Association of Privacy Professionals (IAPP)</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">CIPP/E certified</p>
                </div>

                <div className="rounded-lg border border-border bg-background p-6">
                  <div className="mb-3 flex items-center gap-3">
                    <Award className="h-6 w-6 text-primary" />
                    <h3 className="font-semibold">Cloud Security Alliance (CSA)</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">Member</p>
                </div>

                <div className="rounded-lg border border-border bg-background p-6">
                  <div className="mb-3 flex items-center gap-3">
                    <Award className="h-6 w-6 text-primary" />
                    <h3 className="font-semibold">European Bar Associations</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">[Specific bar memberships]</p>
                </div>

                <div className="rounded-lg border border-border bg-background p-6">
                  <div className="mb-3 flex items-center gap-3">
                    <Award className="h-6 w-6 text-primary" />
                    <h3 className="font-semibold">Panel Counsel</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">Listed with leading cyber insurers and MSSPs</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why "CyberGlobal" */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-8">
            <div className="mx-auto max-w-4xl">
              <div className="rounded-2xl border border-primary/20 bg-primary/5 p-8 md:p-12">
                <h2 className="mb-4 font-display text-2xl font-bold md:text-3xl">
                  Why "CyberGlobal"?
                </h2>
                <p className="mb-4 text-lg text-muted-foreground">
                  Cyber incidents don't respect borders. A ransomware attack on a SaaS company in Romania can trigger GDPR notifications in Germany, NIS2 reporting in France, contractual disputes with a US cloud provider, and insurance claims in the UK.
                </p>
                <p className="text-lg">
                  We're "CyberGlobal" because we help you manage the <strong className="text-primary">global legal ripple effects</strong> of local cyber incidents.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-br from-indigo-600 via-purple-600 to-cyan-500 py-16 text-white md:py-24">
          <div className="container mx-auto px-4 md:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="mb-4 font-display text-3xl font-bold md:text-4xl">
                Ready to Work Together?
              </h2>
              <p className="mb-8 text-lg text-white/90">
                Book a consultation or call our 24/7 hotline to discuss your specific needs.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-md bg-white px-6 py-3 font-semibold text-indigo-600 transition-all hover:bg-white/90 hover:scale-105"
                >
                  Book a Consultation
                </Link>
                <Link
                  href="tel:+40745304772"
                  className="inline-flex items-center justify-center gap-2 rounded-md border-2 border-white bg-white text-indigo-600 px-6 py-3 font-semibold transition-all hover:bg-white/90 hover:scale-105"
                >
                  Call 24/7 Hotline
                </Link>
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

