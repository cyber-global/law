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
        {/* Services */}
        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-sm font-medium text-muted-foreground hover:text-foreground">
            Services
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="w-[720px] grid grid-cols-3 gap-6 p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 rounded-lg shadow-lg">
              <div>
                <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                  CyberLaw Services
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
                  Cybersecurity
                </p>
                <ul className="space-y-2 text-sm">
                  <li><MenuLink href="/cybersecurity">EU Cyber Regulations Overview</MenuLink></li>
                  <li><MenuLink href="/cybersecurity#legal-mssp">Legal + MSSP Collaboration</MenuLink></li>
                  <li><MenuLink href="/cybersecurity#partners">MSSP Capabilities via Partners</MenuLink></li>
                  <li><MenuLink href="/contact?topic=readiness">Request a Joint Readiness Session →</MenuLink></li>
                </ul>
              </div>
              <div>
                <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                  About
                </p>
                <ul className="space-y-2 text-sm">
                  <li><MenuLink href="/about">Who We Are</MenuLink></li>
                  <li><MenuLink href="/partners">Partners</MenuLink></li>
                  <li><MenuLink href="/contact">Contact & Scheduling</MenuLink></li>
                  <li><MenuLink href="/legal/privacy">Privacy & Terms</MenuLink></li>
                </ul>
              </div>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>

        {/* Simple top-level items */}
        <NavigationMenuItem>
          <Link className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors" href="/about">
            About
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors" href="/partners">
            Partners
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors" href="/contact">
            Contact
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
        "focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
      )}
    >
      {children}
    </Link>
  );
}

