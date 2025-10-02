'use client';

import Link from 'next/link';
import { Phone, Mail, MapPin, Linkedin, Twitter } from 'lucide-react';
import { HotlineBadge } from './hotline-badge';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      { label: 'Incident Response', href: '/services#incident-response' },
      { label: 'Regulatory Compliance', href: '/services#compliance' },
      { label: 'Contracts & Vendor Risk', href: '/services#contracts' },
      { label: 'Digital Forensics', href: '/services#forensics' },
      { label: 'Cyber Disputes', href: '/services#disputes' },
    ],
    company: [
      { label: 'About', href: '/about' },
      { label: 'Cybersecurity', href: '/cybersecurity' },
      { label: 'Partners', href: '/partners' },
      { label: 'Contact', href: '/contact' },
    ],
    legal: [
      { label: 'Privacy Policy', href: '/legal/privacy' },
      { label: 'Terms of Use', href: '/legal/terms' },
    ],
  };

  const socialLinks = [
    { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
  ];

  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="container mx-auto px-4 py-12 md:px-8 md:py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block">
              <div className="font-display text-2xl font-bold text-primary">
                CyberGlobal<span className="text-accent">Law</span>
              </div>
            </Link>
            <p className="mt-4 max-w-md text-sm text-muted-foreground">
              Boutique Cyber Law practice with 24/7 incident response and proactive compliance 
              across EU (GDPR/NIS2/DORA/eIDAS2) and cross-border work.
            </p>

            {/* Contact info */}
            <div className="mt-6 space-y-3">
              <div className="flex items-center gap-2 text-sm">
                <Phone className="h-4 w-4 text-muted-foreground" />
                <a href="tel:+40745304772" className="hover:text-primary transition-colors">
                  +40 745 304 772
                </a>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Mail className="h-4 w-4 text-muted-foreground" />
                <a href="mailto:nader.bakri@cybergl.com" className="hover:text-primary transition-colors">
                  nader.bakri@cybergl.com
                </a>
              </div>
              <div className="flex items-start gap-2 text-sm">
                <MapPin className="h-4 w-4 text-muted-foreground mt-0.5" />
                <address className="not-italic text-muted-foreground">
                  Constantin Brancusi 78<br />
                  Cluj-Napoca, Romania
                </address>
              </div>
            </div>

            {/* Hotline badge */}
            <div className="mt-6">
              <HotlineBadge />
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-foreground">Services</h3>
            <ul className="mt-4 space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-foreground">Company</h3>
            <ul className="mt-4 space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold text-foreground">Legal</h3>
            <ul className="mt-4 space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 md:flex-row">
          <p className="text-sm text-muted-foreground">
            © {currentYear} CyberGlobal Law. All rights reserved.
          </p>

          {/* Social links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground transition-colors hover:text-primary"
                  aria-label={social.label}
                >
                  <Icon className="h-5 w-5" />
                </a>
              );
            })}
          </div>
        </div>

        {/* Bar membership statement */}
        <div className="mt-6 text-center text-xs text-muted-foreground">
          Licensed to practice law in [Jurisdiction]. Bar membership: [Bar Association].
        </div>
      </div>
    </footer>
  );
}

