'use client';

import { Phone } from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

interface HotlineBadgeProps {
  compact?: boolean;
  className?: string;
}

export function HotlineBadge({ compact = false, className }: HotlineBadgeProps) {
  return (
    <Link
      href="tel:+40745304772"
      className={cn(
        'inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1.5 text-sm font-medium text-primary ring-1 ring-primary/20 transition-all hover:bg-primary/20 hover:ring-primary/30',
        compact && 'px-2 py-1',
        className
      )}
    >
      <Phone className={cn('h-4 w-4', compact && 'h-3.5 w-3.5')} />
      {!compact && <span className="hidden sm:inline">24/7 Emergency</span>}
    </Link>
  );
}

