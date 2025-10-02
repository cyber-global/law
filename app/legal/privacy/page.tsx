import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { SkipLink } from '@/components/skip-link';
import { CookieBanner } from '@/components/cookie-banner';
import { Shield, Lock, Eye, FileText } from 'lucide-react';
import type { Metadata } from 'next';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://cybergloballaw.com';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'How CyberGlobal Law collects, uses, and protects your personal data in accordance with GDPR and data protection laws.',
  alternates: {
    canonical: `${baseUrl}/legal/privacy`,
  },
  openGraph: {
    title: 'Privacy Policy | CyberGlobal Law',
    description: 'How we protect your personal data in accordance with GDPR.',
    url: `${baseUrl}/legal/privacy`,
    siteName: 'CyberGlobal Law',
    images: [
      {
        url: `${baseUrl}/api/og?title=Privacy Policy&subtitle=GDPR-compliant data protection&page=privacy`,
        width: 1200,
        height: 630,
        alt: 'Privacy Policy',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function PrivacyPage() {
  return (
    <>
      <SkipLink />
      <Header />

      <main id="main-content">
        {/* Hero */}
        <section className="bg-gradient-to-br from-indigo-600 via-purple-600 to-cyan-500 py-16 text-white md:py-24">
          <div className="container mx-auto px-4 md:px-8">
            <div className="mx-auto max-w-4xl text-center">
              <div className="mb-6 flex justify-center">
                <Shield className="h-16 w-16" />
              </div>
              <h1 className="font-display text-4xl font-bold md:text-5xl lg:text-6xl">
                Privacy Policy
              </h1>
              <p className="mt-6 text-lg text-white/90">
                How we collect, use, and protect your personal data in accordance with GDPR
              </p>
              <p className="mt-4 text-sm text-white/80">
                <strong>Last Updated:</strong> October 1, 2025
              </p>
            </div>
          </div>
        </section>

        {/* Key Points Summary */}
        <section className="border-b border-border bg-muted/30 py-12">
          <div className="container mx-auto px-4 md:px-8">
            <div className="mx-auto max-w-5xl">
              <h2 className="mb-8 text-center font-display text-2xl font-bold">
                Your Privacy Rights at a Glance
              </h2>
              <div className="grid gap-6 md:grid-cols-3">
                <div className="rounded-lg border border-border bg-background p-6 text-center">
                  <Lock className="mx-auto mb-4 h-8 w-8 text-primary" />
                  <h3 className="mb-2 font-semibold">GDPR Compliant</h3>
                  <p className="text-sm text-muted-foreground">
                    Full compliance with EU data protection regulations
                  </p>
                </div>
                <div className="rounded-lg border border-border bg-background p-6 text-center">
                  <Eye className="mx-auto mb-4 h-8 w-8 text-primary" />
                  <h3 className="mb-2 font-semibold">Your Rights</h3>
                  <p className="text-sm text-muted-foreground">
                    Access, rectification, erasure, and data portability
                  </p>
                </div>
                <div className="rounded-lg border border-border bg-background p-6 text-center">
                  <FileText className="mx-auto mb-4 h-8 w-8 text-primary" />
                  <h3 className="mb-2 font-semibold">Transparency</h3>
                  <p className="text-sm text-muted-foreground">
                    Clear information about data collection and use
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Privacy Policy Content */}
        <article className="prose prose-slate mx-auto max-w-4xl px-4 py-16 dark:prose-invert md:px-8 md:py-24">
          {/* Content from MDX file */}
          <div className="space-y-12">
            
            <section id="data-controller">
              <h2 className="font-display text-3xl font-bold">1. Data Controller</h2>
              <p><strong>CyberGlobal Law</strong><br />
              Constantin Brancusi 78<br />
              [City, Postal Code]<br />
              [Country]</p>
              <p><strong>Email:</strong> <a href="mailto:nader.bakri@cybergl.com">nader.bakri@cybergl.com</a><br />
              <strong>Phone:</strong> <a href="tel:+40745304772">+40 745 304 772</a></p>
              <p><strong>Data Protection Officer (DPO):</strong> [Name / Email] <em>(if applicable)</em></p>
            </section>

            <section id="lawful-bases">
              <h2 className="font-display text-3xl font-bold">2. Lawful Bases for Processing (GDPR Article 6)</h2>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="p-3 text-left font-semibold">Purpose</th>
                      <th className="p-3 text-left font-semibold">Lawful Basis</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-border">
                      <td className="p-3">Responding to inquiries</td>
                      <td className="p-3">Legitimate interest (6(1)(f)) or Contract (6(1)(b))</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="p-3">Providing legal services</td>
                      <td className="p-3">Contract (6(1)(b))</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="p-3">Marketing communications</td>
                      <td className="p-3">Consent (6(1)(a))</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="p-3">Website analytics</td>
                      <td className="p-3">Consent (6(1)(a)) or Legitimate interest (6(1)(f))</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="p-3">Legal obligations (AML, bar rules)</td>
                      <td className="p-3">Legal obligation (6(1)(c))</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="mt-4 text-sm text-muted-foreground">
                For <strong>special category data</strong> (sensitive personal data in legal matters), we rely on GDPR Article 9(2)(f) (legal claims) or explicit consent.
              </p>
            </section>

            <section id="data-subject-rights">
              <h2 className="font-display text-3xl font-bold">3. Your Data Subject Rights (GDPR)</h2>
              <p>You have the following rights under GDPR:</p>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="p-3 text-left font-semibold">Right</th>
                      <th className="p-3 text-left font-semibold">What It Means</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-border">
                      <td className="p-3 font-medium">Access (Art. 15)</td>
                      <td className="p-3">Request a copy of your personal data</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="p-3 font-medium">Rectification (Art. 16)</td>
                      <td className="p-3">Correct inaccurate or incomplete data</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="p-3 font-medium">Erasure (Art. 17)</td>
                      <td className="p-3">Request deletion ("right to be forgotten")</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="p-3 font-medium">Restriction (Art. 18)</td>
                      <td className="p-3">Limit how we process your data</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="p-3 font-medium">Data Portability (Art. 20)</td>
                      <td className="p-3">Receive your data in a machine-readable format</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="p-3 font-medium">Object (Art. 21)</td>
                      <td className="p-3">Object to processing based on legitimate interest</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="p-3 font-medium">Withdraw Consent (Art. 7(3))</td>
                      <td className="p-3">Withdraw consent for marketing or analytics</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="p-3 font-medium">Complain (Art. 77)</td>
                      <td className="p-3">Lodge a complaint with your supervisory authority</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="mt-6 rounded-lg bg-primary/5 p-6">
                <h3 className="mb-2 font-semibold">To Exercise Your Rights:</h3>
                <p>Email <a href="mailto:nader.bakri@cybergl.com" className="text-primary hover:underline">nader.bakri@cybergl.com</a> with your request. We will respond within <strong>1 month</strong> (may be extended by 2 months for complex requests).</p>
              </div>
            </section>

            <section id="cookies">
              <h2 className="font-display text-3xl font-bold">4. Cookies & Tracking Technologies</h2>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="p-3 text-left font-semibold">Cookie Type</th>
                      <th className="p-3 text-left font-semibold">Purpose</th>
                      <th className="p-3 text-left font-semibold">Duration</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-border">
                      <td className="p-3 font-medium">Essential</td>
                      <td className="p-3">Session management, security</td>
                      <td className="p-3">Session</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="p-3 font-medium">Analytics</td>
                      <td className="p-3">Vercel Analytics, usage tracking</td>
                      <td className="p-3">12 months</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="p-3 font-medium">Preferences</td>
                      <td className="p-3">Theme (dark/light mode), language</td>
                      <td className="p-3">12 months</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="mt-4">We <strong>do not</strong> use third-party advertising cookies or trackers.</p>
              <p className="mt-4">On your first visit, we display a <strong>cookie banner</strong> asking for consent. You can accept all cookies or choose necessary only.</p>
            </section>

            <section id="dpo-contact">
              <h2 className="font-display text-3xl font-bold">5. Contact the Data Protection Officer</h2>
              <div className="rounded-lg border border-border bg-card p-6">
                <p className="mb-4">If you have questions, concerns, or requests regarding this Privacy Policy or our data practices:</p>
                <p><strong>Email:</strong> <a href="mailto:nader.bakri@cybergl.com" className="text-primary hover:underline">nader.bakri@cybergl.com</a><br />
                <strong>Phone:</strong> <a href="tel:+40745304772" className="text-primary hover:underline">+40 745 304 772</a><br />
                <strong>Mail:</strong> CyberGlobal Law, Constantin Brancusi 78, Cluj-Napoca, Romania</p>
              </div>
            </section>

            <section id="supervisory-authority">
              <h2 className="font-display text-3xl font-bold">6. Supervisory Authority</h2>
              <p>You have the right to lodge a complaint with your <strong>supervisory authority</strong> (Data Protection Authority) if you believe we have not handled your data in accordance with GDPR.</p>
              <div className="mt-4 rounded-lg bg-muted/50 p-6">
                <p className="mb-2 font-semibold">Example (Romania):</p>
                <p><a href="https://www.dataprotection.ro/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                  Autoritatea Națională de Supraveghere a Prelucrării Datelor cu Caracter Personal (ANSPDCP)
                </a></p>
                <p className="mt-4"><a href="https://edpb.europa.eu/about-edpb/board/members_en" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                  Find your EU Data Protection Authority →
                </a></p>
              </div>
            </section>

            <div className="mt-12 rounded-lg border-l-4 border-primary bg-primary/5 p-6">
              <p className="text-sm">
                <strong>Note:</strong> This privacy policy is GDPR-compliant and covers all processing activities. For specific questions about how we handle your data, please contact our Data Protection Officer.
              </p>
            </div>
          </div>
        </article>
      </main>

      <Footer />
      <CookieBanner />
    </>
  );
}

