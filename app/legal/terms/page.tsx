import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { SkipLink } from '@/components/skip-link';
import { CookieBanner } from '@/components/cookie-banner';
import { Scale, AlertTriangle, Info } from 'lucide-react';
import { Alert, AlertDescription } from '@/components/ui/alert';
import type { Metadata } from 'next';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://cyberlgl.com';

export const metadata: Metadata = {
  title: 'Terms of Use',
  description: 'Terms and conditions for using the CyberLegal website. Important disclaimers about legal advice and attorney-client relationships.',
  alternates: {
    canonical: `${baseUrl}/legal/terms`,
  },
  openGraph: {
    title: 'Terms of Use | CyberLegal',
    description: 'Terms and conditions for using our website.',
    url: `${baseUrl}/legal/terms`,
    siteName: 'CyberLegal',
    images: [
      {
        url: `${baseUrl}/api/og?title=Terms of Use&subtitle=Website terms and conditions&page=terms`,
        width: 1200,
        height: 630,
        alt: 'Terms of Use',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function TermsPage() {
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
                <Scale className="h-16 w-16" />
              </div>
              <h1 className="font-display text-4xl font-bold md:text-5xl lg:text-6xl">
                Terms of Use
              </h1>
              <p className="mt-6 text-lg text-white/90">
                Terms and conditions for using the CyberLegal website
              </p>
              <p className="mt-4 text-sm text-white/80">
                <strong>Last Updated:</strong> October 1, 2025
              </p>
            </div>
          </div>
        </section>

        {/* Important Disclaimers */}
        <section className="border-b border-border bg-destructive/5 py-12">
          <div className="container mx-auto px-4 md:px-8">
            <div className="mx-auto max-w-4xl space-y-6">
              <Alert>
                <AlertTriangle className="h-5 w-5" />
                <AlertDescription className="ml-2">
                  <strong className="text-base">Important:</strong> This website is for informational purposes only. It does <strong>not</strong> provide legal advice and does <strong>not</strong> create an attorney-client relationship.
                </AlertDescription>
              </Alert>

              <Alert>
                <Info className="h-5 w-5" />
                <AlertDescription className="ml-2">
                  <strong className="text-base">For Legal Advice:</strong> Contact us to discuss your specific situation. An attorney-client relationship is established only when we provide a signed engagement letter.
                </AlertDescription>
              </Alert>
            </div>
          </div>
        </section>

        {/* Terms Content */}
        <article className="prose prose-slate mx-auto max-w-4xl px-4 py-16 dark:prose-invert md:px-8 md:py-24">
          <div className="space-y-12">
            
            <section id="not-legal-advice">
              <h2 className="font-display text-3xl font-bold">1. Not Legal Advice</h2>
              <p className="text-lg">
                Content on this Site—including blog posts, FAQs, case summaries, and resources—is provided for <strong>general informational purposes only</strong>. It does not constitute legal advice and should not be relied upon as such.
              </p>
              <div className="mt-4 rounded-lg bg-warning/10 p-6">
                <h3 className="mb-2 font-semibold">Legal advice requires:</h3>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Analysis of your specific facts and circumstances</li>
                  <li>Understanding of applicable laws and jurisdictions</li>
                  <li>A formal attorney-client relationship</li>
                </ul>
              </div>
              <p className="mt-4"><strong>Regulations change frequently.</strong> Information on this Site may become outdated. Always verify current law and consult with legal counsel before making decisions.</p>
            </section>

            <section id="no-attorney-client">
              <h2 className="font-display text-3xl font-bold">2. No Attorney-Client Relationship</h2>
              <p className="text-lg">
                <strong>Using this Site, submitting a contact form, or calling our general business line does NOT create an attorney-client relationship.</strong>
              </p>
              <p className="mt-4">An attorney-client relationship is established <strong>only when:</strong></p>
              <ol className="list-decimal pl-6 space-y-2">
                <li>We conduct a <strong>conflicts check</strong></li>
                <li>We agree to represent you in writing via an <strong>engagement letter</strong></li>
                <li>You accept the engagement letter and agree to our terms</li>
              </ol>
              <p className="mt-4">Until a signed engagement letter is in place, you should:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li><strong>Not</strong> rely on information from this Site as legal advice</li>
                <li><strong>Not</strong> share confidential or privileged information</li>
                <li>Consult with a qualified attorney in your jurisdiction for specific guidance</li>
              </ul>
            </section>

            <section id="dpo">
              <h2 className="font-display text-3xl font-bold">3. Data Protection Officer (DPO)</h2>
              <p>For questions about how we process your personal data:</p>
              <div className="mt-4 rounded-lg border border-border bg-card p-6">
                <p><strong>DPO:</strong> [Name / Email]</p>
                <p className="mt-2"><strong>Email:</strong> <a href="mailto:privacy@cyberlgl.com" className="text-primary hover:underline">privacy@cyberlgl.com</a></p>
                <p className="mt-2">See our <a href="/legal/privacy" className="text-primary hover:underline">Privacy Policy</a> for full details on data processing.</p>
              </div>
            </section>

            <section id="confidentiality">
              <h2 className="font-display text-3xl font-bold">4. Confidentiality Notice</h2>
              <div className="rounded-lg border-l-4 border-destructive bg-destructive/5 p-6">
                <p className="font-semibold">Submitting a contact form or sending an email does <strong>NOT</strong> create an attorney-client relationship.</p>
                <p className="mt-4">Before we confirm representation:</p>
                <ul className="mt-2 list-disc pl-6 space-y-1">
                  <li>Communications are <strong>not confidential</strong> or privileged</li>
                  <li>We may be unable to respond due to conflicts of interest</li>
                  <li>We are not obligated to accept your matter</li>
                </ul>
                <p className="mt-4"><strong>For confidential communications:</strong></p>
                <ul className="mt-2 list-disc pl-6 space-y-1">
                  <li>Wait until we confirm engagement via a signed engagement letter</li>
                  <li>Use our PGP public key for encrypted email</li>
                  <li>Call our 24/7 incident hotline for time-sensitive matters: <a href="tel:+40745304772" className="text-primary hover:underline">+40 745 304 772</a></li>
                </ul>
              </div>
            </section>

            <section id="contact-terms">
              <h2 className="font-display text-3xl font-bold">5. Contact Us</h2>
              <p>If you have questions about these Terms of Use:</p>
              <div className="mt-4 rounded-lg border border-border bg-card p-6">
                <p><strong>Email:</strong> <a href="mailto:legal@cyberlgl.com" className="text-primary hover:underline">legal@cyberlgl.com</a><br />
                <strong>Phone:</strong> <a href="tel:+40745304772" className="text-primary hover:underline">+40 745 304 772</a><br />
                <strong>Mail:</strong> CyberGlobal Law LTD, [Street Address], [City, Postal Code], [Country]</p>
              </div>
            </section>

            <div className="mt-12 text-center text-sm text-muted-foreground">
              <p><strong>Last Updated:</strong> October 1, 2025</p>
              <p className="mt-2">© 2025 CyberLegal. All rights reserved.</p>
            </div>
          </div>
        </article>
      </main>

      <Footer />
      <CookieBanner />
    </>
  );
}

