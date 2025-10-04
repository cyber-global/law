"use client";
import * as React from "react";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

export default function MegaMenu() {
  return (
    <NavigationMenu className="hidden md:flex">
      <NavigationMenuList>
        {/* About Us */}
        <NavigationMenuItem>
          <Link 
            className="px-4 py-2 text-sm font-medium text-slate-200 hover:text-white hover:bg-white/10 rounded-md transition-all duration-200" 
            href="/about"
          >
            About Us
          </Link>
        </NavigationMenuItem>

        {/* Services with dropdown */}
        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-sm font-medium text-slate-200 hover:text-white hover:bg-white/10 data-[state=open]:text-white data-[state=open]:bg-white/10">
            Services
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="w-[600px] grid grid-cols-2 gap-6 p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 rounded-lg shadow-lg">
              <div>
                <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                  Legal Services
                </p>
                <ul className="space-y-2 text-sm">
                  <li><MenuLink href="/services#incident-response">Incident Response & Breach Counsel (24/7)</MenuLink></li>
                  <li><MenuLink href="/services#compliance">Regulatory Compliance & Audits</MenuLink></li>
                  <li><MenuLink href="/services#contracts">Contracts & Vendor/Cross-Border Data Risk</MenuLink></li>
                  <li><MenuLink href="/services#forensics">Digital Forensics & eDiscovery</MenuLink></li>
                  <li><MenuLink href="/services#disputes">Cyber Disputes, Enforcement & Insurance Recovery</MenuLink></li>
                </ul>
              </div>
              <div>
                <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                  Quick Access
                </p>
                <ul className="space-y-2 text-sm">
                  <li><MenuLink href="/services">All Services Overview</MenuLink></li>
                  <li><MenuLink href="/contact?topic=incident">Report an Incident</MenuLink></li>
                  <li><MenuLink href="/contact?topic=compliance">Compliance Assessment</MenuLink></li>
                  <li><MenuLink href="/contact">General Inquiry</MenuLink></li>
                </ul>
              </div>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>

        {/* Cybersecurity with dropdown */}
        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-sm font-medium text-slate-200 hover:text-white hover:bg-white/10 data-[state=open]:text-white data-[state=open]:bg-white/10">
            Cybersecurity
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="w-[500px] grid grid-cols-2 gap-6 p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 rounded-lg shadow-lg">
              <div>
                <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                  EU Regulations
                </p>
                <ul className="space-y-2 text-sm">
                  <li><MenuLink href="/cybersecurity#gdpr">GDPR Overview</MenuLink></li>
                  <li><MenuLink href="/cybersecurity#nis2">NIS2 Directive</MenuLink></li>
                  <li><MenuLink href="/cybersecurity#dora">DORA Regulation</MenuLink></li>
                  <li><MenuLink href="/cybersecurity#eidas2">eIDAS2 Framework</MenuLink></li>
                </ul>
              </div>
              <div>
                <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                  Collaboration
                </p>
                <ul className="space-y-2 text-sm">
                  <li><MenuLink href="/cybersecurity#legal-mssp">Legal + MSSP Partnership</MenuLink></li>
                  <li><MenuLink href="/cybersecurity#joint-offering">Joint Response Services</MenuLink></li>
                  <li><MenuLink href="/partners">Partner Network</MenuLink></li>
                  <li><MenuLink href="/contact?topic=readiness">Joint Readiness Session →</MenuLink></li>
                </ul>
              </div>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>

        {/* Partners */}
        <NavigationMenuItem>
          <Link 
            className="px-4 py-2 text-sm font-medium text-slate-200 hover:text-white hover:bg-white/10 rounded-md transition-all duration-200" 
            href="/partners"
          >
            Partners
          </Link>
        </NavigationMenuItem>

        {/* Contact Us */}
        <NavigationMenuItem>
          <Link 
            className="px-4 py-2 text-sm font-medium text-slate-200 hover:text-white hover:bg-white/10 rounded-md transition-all duration-200" 
            href="/contact"
          >
            Contact Us
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

function MenuLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className={cn(
        "block rounded-md px-3 py-2",
        "text-slate-700 hover:text-slate-900 hover:bg-slate-50",
        "dark:text-slate-200 dark:hover:text-white dark:hover:bg-white/5",
        "transition-colors",
        "focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
      )}
    >
      {children}
    </Link>
  );
}