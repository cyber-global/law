import Link from 'next/link';
import { ExternalLink, MapPin, Wrench } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface PartnerCardProps {
  name: string;
  logo?: string;
  regions: string[];
  capabilities: string[];
  url?: string;
  description?: string;
  className?: string;
}

export function PartnerCard({
  name,
  logo,
  regions,
  capabilities,
  url,
  description,
  className,
}: PartnerCardProps) {
  return (
    <Card className={cn('transition-all hover:shadow-lg', className)}>
      <CardHeader>
        {/* Logo or name fallback */}
        {logo ? (
          <div className="mb-4 flex h-16 items-center justify-center">
            <img src={logo} alt={`${name} logo`} className="max-h-full max-w-full object-contain opacity-80 dark:opacity-70" />
          </div>
        ) : (
          <div className="mb-4 flex h-16 items-center justify-center rounded-lg bg-muted">
            <span className="font-display text-xl font-semibold text-muted-foreground">{name}</span>
          </div>
        )}

        <CardTitle className="text-xl">{name}</CardTitle>
        {description && (
          <CardDescription className="mt-2">{description}</CardDescription>
        )}
      </CardHeader>

      <CardContent className="space-y-4">
        {/* Regions */}
        {regions.length > 0 && (
          <div>
            <div className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              <MapPin className="h-3.5 w-3.5" />
              Regions
            </div>
            <div className="flex flex-wrap gap-1.5">
              {regions.map((region) => (
                <Badge key={region} variant="outline" className="text-xs">
                  {region}
                </Badge>
              ))}
            </div>
          </div>
        )}

        {/* Capabilities */}
        {capabilities.length > 0 && (
          <div>
            <div className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              <Wrench className="h-3.5 w-3.5" />
              Capabilities
            </div>
            <div className="flex flex-wrap gap-1.5">
              {capabilities.slice(0, 6).map((capability) => (
                <Badge key={capability} variant="secondary" className="text-xs">
                  {capability}
                </Badge>
              ))}
              {capabilities.length > 6 && (
                <Badge variant="secondary" className="text-xs">
                  +{capabilities.length - 6} more
                </Badge>
              )}
            </div>
          </div>
        )}
      </CardContent>

      {url && (
        <CardFooter>
          <Button asChild variant="ghost" className="w-full" size="sm">
            <Link href={url} target="_blank" rel="noopener noreferrer">
              Visit Website
              <ExternalLink className="ml-2 h-3.5 w-3.5" />
            </Link>
          </Button>
        </CardFooter>
      )}
    </Card>
  );
}

