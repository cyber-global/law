'use client';

import { AlertCircle, Phone, X } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import { cn } from '@/lib/utils';

export function AlertBar() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="relative bg-gradient-to-r from-indigo-600 via-indigo-700 to-indigo-800 text-white">
      <div className="container mx-auto flex items-center justify-between gap-4 px-4 py-3 md:px-8">
        <div className="flex items-center gap-3 flex-1">
          <AlertCircle className="h-5 w-5 flex-shrink-0 animate-pulse" />
          <p className="text-sm font-medium md:text-base">
            <span className="font-semibold">Cyber Incident?</span>
            <span className="hidden sm:inline"> Call our 24/7 breach counsel hotline now.</span>
            <span className="sm:hidden"> 24/7 hotline available.</span>
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Link
            href="tel:+40745304772"
            className="inline-flex items-center gap-2 rounded-full bg-white text-indigo-700 px-4 py-2 text-sm font-semibold transition-all hover:bg-white/90 hover:scale-105"
          >
            <Phone className="h-4 w-4" />
            <span className="hidden sm:inline">Call Now</span>
          </Link>
          <button
            onClick={() => setIsVisible(false)}
            className="rounded-full p-1 hover:bg-white/10 transition-colors"
            aria-label="Close alert"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}

