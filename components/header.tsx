'use client';

import Link from 'next/link';
import { Phone, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { HotlineBadge } from './hotline-badge';
import { ThemeToggle } from './theme-toggle';
import MegaMenu from './mega-menu';
import { cn } from '@/lib/utils';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const mobileNavItems = [
    { href: '/services', label: 'Services' },
    { href: '/services#incident-response', label: '  → Incident Response' },
    { href: '/services#compliance', label: '  → Compliance' },
    { href: '/services#contracts', label: '  → Contracts' },
    { href: '/services#forensics', label: '  → Forensics' },
    { href: '/services#disputes', label: '  → Disputes' },
    { href: '/cybersecurity', label: 'Cybersecurity' },
    { href: '/about', label: 'About' },
    { href: '/partners', label: 'Partners' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white dark:bg-slate-900 border-slate-200 dark:border-white/10">
      <div className="container flex h-16 max-w-screen-2xl items-center justify-between px-4 md:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <div className="font-display text-xl font-bold text-primary">
            CyberGlobal<span className="text-accent">Law</span>
          </div>
        </Link>

        {/* Desktop Mega Menu */}
        <MegaMenu />

        {/* Desktop CTAs */}
        <div className="hidden md:flex md:items-center md:gap-4">
          <ThemeToggle />
          <HotlineBadge />
          <Button asChild size="sm">
            <Link href="/contact">
              <Phone className="mr-2 h-4 w-4" />
              Call 24/7
            </Link>
          </Button>
        </div>

        {/* Mobile Menu - Simple list (no mega menu on mobile) */}
        <div className="flex items-center gap-2 md:hidden">
          <HotlineBadge compact />
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Toggle menu">
                {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-white dark:bg-slate-900 border-slate-200 dark:border-white/10">
              <nav className="flex flex-col gap-3 mt-8">
                {mobileNavItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "text-base font-medium transition-colors rounded-md px-3 py-2",
                      "hover:bg-slate-50 dark:hover:bg-white/5",
                      item.label.startsWith('  →') 
                        ? "text-sm text-slate-600 dark:text-slate-400 pl-4" 
                        : "text-slate-900 dark:text-slate-100"
                    )}
                  >
                    {item.label}
                  </Link>
                ))}
                <div className="mt-6 pt-6 border-t border-slate-200 dark:border-white/10 flex flex-col gap-3">
                  <Button asChild className="w-full">
                    <Link href="tel:+40745304772">
                      <Phone className="mr-2 h-4 w-4" />
                      Call 24/7 Hotline
                    </Link>
                  </Button>
                  <Button asChild variant="outline" className="w-full border-slate-200 dark:border-white/10">
                    <Link href="/contact">Book Consultation</Link>
                  </Button>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

