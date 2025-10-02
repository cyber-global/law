import Link from 'next/link';
import { ArrowRight, Check, LucideIcon } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface ServiceCardProps {
  title: string;
  summary: string;
  bullets?: string[];
  outcomes?: string[];
  href: string;
  icon?: LucideIcon;
  featured?: boolean;
  className?: string;
}

export function ServiceCard({
  title,
  summary,
  bullets = [],
  outcomes = [],
  href,
  icon: Icon,
  featured = false,
  className,
}: ServiceCardProps) {
  return (
    <Card
      className={cn(
        'group relative overflow-hidden transition-all hover:shadow-xl hover:scale-[1.02]',
        featured && 'border-primary shadow-lg',
        className
      )}
    >
      {/* Gradient overlay for featured cards - removed for legibility */}

      <CardHeader className="relative">
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            {featured && (
              <Badge className="mb-3 bg-primary">Featured</Badge>
            )}
            <CardTitle className="font-display text-2xl">{title}</CardTitle>
          </div>
          {Icon && (
            <div className={cn(
              'flex h-12 w-12 items-center justify-center rounded-lg transition-colors',
              featured ? 'bg-primary/10 text-primary' : 'bg-muted text-muted-foreground'
            )}>
              <Icon className="h-6 w-6" />
            </div>
          )}
        </div>
        <CardDescription className="mt-3 text-base">{summary}</CardDescription>
      </CardHeader>

      {bullets.length > 0 && (
        <CardContent className="relative">
          <ul className="space-y-2">
            {bullets.slice(0, 4).map((bullet, index) => (
              <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                <span>{bullet}</span>
              </li>
            ))}
          </ul>

          {outcomes.length > 0 && (
            <div className="mt-6 rounded-lg bg-muted/50 p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                Outcomes
              </p>
              <div className="mt-2 flex flex-wrap gap-2">
                {outcomes.map((outcome, index) => (
                  <Badge key={index} variant="secondary" className="text-xs">
                    {outcome}
                  </Badge>
                ))}
              </div>
            </div>
          )}
        </CardContent>
      )}

      <CardFooter className="relative">
        <Button asChild variant="ghost" className="group/btn w-full">
          <Link href={href}>
            Learn More
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}

