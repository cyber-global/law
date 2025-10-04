
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { SkipLink } from '@/components/skip-link';
import { CookieBanner } from '@/components/cookie-banner';
import { Hero } from '@/components/hero';

export default function HomePage() {
  return (
    <>
      <SkipLink />
      <Header />
      
      <main id="main-content">
        <Hero
          headline="When cyber risk turns legal, speed and defensibility matter."
          subheadline="CyberLegal helps CISOs and General Counsel manage incidents, regulators, and contracts across borders—24/7."
          primaryCTA={{
            text: 'Book a Meeting',
            href: '/contact',
          }}
          credibilityChips={['GDPR', 'NIS2', 'DORA', 'eIDAS2', 'Cross-border data', 'eDiscovery']}
        />

        {/* Placeholder for additional homepage sections */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container mx-auto px-4 md:px-8 text-center">
            <h2 className="font-display text-3xl font-bold md:text-4xl lg:text-5xl">
              Welcome to CyberLegal
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
              Your complete cyber law platform is being built. All components, content, and integrations are ready!
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/services" className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors">
                View Our Services
              </a>
              <a href="/contact" className="inline-flex items-center justify-center rounded-md border border-input bg-background px-6 py-3 text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-colors">
                Get in Touch
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <CookieBanner />
    </>
  );
}

