import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { SkipLink } from '@/components/skip-link';
import { CookieBanner } from '@/components/cookie-banner';
import { Shield, Globe, Users, FileText, Award, CheckCircle, Calendar } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://cyberlgl.com';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Mission, values, and approach to cyber law and incident response across the EU.',
  alternates: {
    canonical: `${baseUrl}/about`,
  },
  openGraph: {
    title: 'About Us | CyberLegal',
    description: 'Mission, values, and approach to cyber law and incident response across the EU.',
    url: `${baseUrl}/about`,
    siteName: 'CyberLegal',
    images: [
      {
        url: `${baseUrl}/api/og?title=About Us&subtitle=Mission, values, and approach to cyber law&page=about`,
        width: 1200,
        height: 630,
        alt: 'About CyberLegal',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Us | CyberLegal',
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
                About CyberLegal
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
                CyberLegal is a Specialized cyber law practice focused on <strong>clarity, speed, and defensibility</strong>. We help organizations navigate the intersection of cybersecurity and law—where technical incidents become legal, regulatory, and business challenges.
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
        <section className="bg-slate-800/50 py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-8">
            <div className="mx-auto max-w-5xl">
              <h2 className="mb-6 text-center font-display text-3xl font-bold md:text-4xl text-white">
                Who We Serve
              </h2>
              <p className="mb-12 text-center text-lg text-slate-300">
                We work with organizations across sectors that face complex cyber-legal challenges
              </p>

              <div className="grid gap-6 md:grid-cols-2">
                {sectors.map((sector) => {
                  const Icon = sector.icon;
                  return (
                    <div
                      key={sector.name}
                      className="rounded-lg border border-white/10 bg-white/5 backdrop-blur-sm p-6 hover:bg-white/10 transition-all duration-300"
                    >
                      <div className="mb-4 flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan-400/20 text-cyan-400 border border-cyan-400/30">
                          <Icon className="h-5 w-5" />
                        </div>
                        <h3 className="font-semibold text-white">{sector.name}</h3>
                      </div>
                      <p className="text-sm text-slate-300">{sector.description}</p>
                    </div>
                  );
                })}
              </div>

              <div className="mt-8 rounded-lg border border-white/10 bg-white/5 backdrop-blur-sm p-6">
                <h3 className="mb-3 font-semibold text-white">Also serving:</h3>
                <p className="text-sm text-slate-300">
                  <strong>Insurers & Brokers:</strong> Cyber insurance carriers and brokers coordinating panel counsel and claims support
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Founder */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-8">
            <div className="mx-auto max-w-5xl">
              <h2 className="mb-12 text-center font-display text-3xl font-bold md:text-4xl">
                Our Founder
              </h2>

              <div className="grid gap-8 md:grid-cols-2 md:gap-12 items-center">
                <div className="order-2 md:order-1">
                  <h3 className="mb-2 font-display text-2xl font-bold">Nader Bakri</h3>
                  <p className="mb-4 text-lg text-primary font-semibold">Founder, CyberLegal</p>
                  <p className="text-muted-foreground leading-relaxed">
                    Nader Bakri is an experienced (7+ years) cyber law counsel who helps organizations turn complex security events into clear, defensible legal outcomes. At CyberLegal he leads incident response and breach counsel, coordinating privileged fact-finding, notification strategy (data subjects, partners, authorities), and regulator/CSIRT engagement. His advisory work covers GDPR, NIS2, DORA, and eIDAS2 readiness; contract frameworks (DPAs, SCCs, cloud terms, SaaS SLAs); cross-border transfers and SCCs with TIAs; and legally sound digital forensics, litigation holds, and eDiscovery. He routinely supports insurance coverage analysis and negotiations, aiming to reduce penalties, accelerate resolution, and document a regulator-ready compliance posture.
                  </p>
                </div>

                <div className="order-1 md:order-2 flex justify-center">
                  <div className="relative aspect-square w-full max-w-sm overflow-hidden rounded-2xl border border-border shadow-xl">
                    <Image
                      src="/nader bakri - founder.jpeg"
                      alt="Nader Bakri, Founder of CyberLegal"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      priority
                    />
                  </div>
                </div>
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
                    <strong className="text-foreground">Primary focus:</strong> USA, GCC,EU(all 27 member states), with particular expertise in Romania, Germany, France, and the Netherlands.
                  </p>
                  <p className="text-muted-foreground">
                    <strong className="text-foreground">Cross-border work:</strong> We regularly coordinate with counsel in the UK, US, and Switzerland for multi-jurisdictional incidents and contracts.
                  </p>
                </div>

                <div>
                  <h2 className="mb-4 font-display text-2xl font-bold">Languages</h2>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">English</Badge>
                    <Badge variant="secondary">Romanian</Badge>
                    <Badge variant="secondary">Italian</Badge>
                    <Badge variant="secondary">Arabic</Badge>
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

        {/* Why "CyberLegal" */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-8">
            <div className="mx-auto max-w-4xl">
              <div className="rounded-2xl border border-primary/20 bg-primary/5 p-8 md:p-12">
                <h2 className="mb-4 font-display text-2xl font-bold md:text-3xl">
                  Why "CyberLegal"?
                </h2>
                <p className="mb-4 text-lg text-muted-foreground">
                  Cyber incidents don't respect borders. A ransomware attack on a SaaS company in Romania can trigger GDPR notifications in Germany, NIS2 reporting in France, contractual disputes with a US cloud provider, and insurance claims in the UK.
                </p>
                <p className="text-lg">
                  We're "CyberLegal" because we help you manage the <strong className="text-primary">global legal ripple effects</strong> of local cyber incidents.
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
                Book a consultation to discuss your legal needs and how we can help protect your organization.
              </p>
              <div className="flex justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-md bg-white px-8 py-4 font-semibold text-indigo-600 transition-all hover:bg-white/90 hover:scale-105 shadow-xl"
                >
                  <Calendar className="h-5 w-5" />
                  Book a Consultation
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

