'use client';

import Link from 'next/link';
import { Phone, Menu, X } from 'lucide-react';
import { useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import MegaMenu from './mega-menu';
import { cn } from '@/lib/utils';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const mobileNavItems = [
    { href: '/about', label: 'About Us' },
    { href: '/services', label: 'Services' },
    { href: '/services#incident-response', label: '  → Incident Response' },
    { href: '/services#compliance', label: '  → Compliance' },
    { href: '/services#contracts', label: '  → Contracts' },
    { href: '/services#forensics', label: '  → Forensics' },
    { href: '/services#disputes', label: '  → Disputes' },
    { href: '/cybersecurity', label: 'Cybersecurity' },
    { href: '/partners', label: 'Partners' },
    { href: '/contact', label: 'Contact Us' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white dark:bg-slate-900 border-slate-200 dark:border-white/10">
      <div className="container flex h-20 max-w-screen-2xl items-center justify-center px-4 md:px-8">
        {/* Logo - Left side */}
        <div className="flex-1 flex justify-start">
          <Link href="/" className="flex items-center">
            <Image 
              src="/white logo no background.png"
              alt="CyberLegal"
              width={200}
              height={60}
              className="h-16 w-auto"
              priority
            />
          </Link>
        </div>

        {/* Desktop Mega Menu - Center */}
        <div className="hidden md:flex">
          <MegaMenu />
        </div>

        {/* Desktop CTA - Right side */}
        <div className="flex-1 flex justify-end">
          <div className="hidden md:flex md:items-center">
            <Button asChild size="sm" className="bg-cyan-400 hover:bg-cyan-300 text-slate-900 font-semibold shadow-lg border border-cyan-300">
              <Link href="/contact">
                Business Enquiries
              </Link>
            </Button>
          </div>
        </div>

        {/* Mobile Menu - Simple list (no mega menu on mobile) */}
        <div className="flex items-center gap-2 md:hidden">
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
                <div className="mt-6 pt-6 border-t border-slate-200 dark:border-white/10">
                  <Button asChild className="w-full bg-cyan-400 hover:bg-cyan-300 text-slate-900 font-semibold shadow-lg">
                    <Link href="/contact">Business Enquiries</Link>
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

