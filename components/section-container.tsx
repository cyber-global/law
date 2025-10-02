import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

interface SectionContainerProps {
  children: ReactNode;
  className?: string;
  id?: string;
  background?: 'default' | 'muted' | 'gradient';
}

export function SectionContainer({
  children,
  className,
  id,
  background = 'default',
}: SectionContainerProps) {
  return (
    <section
      id={id}
      className={cn(
        'py-16 md:py-24',
        background === 'muted' && 'bg-muted/30',
        background === 'gradient' && 'bg-gradient-to-b from-background via-muted/20 to-background',
        className
      )}
    >
      <div className="container mx-auto px-4 md:px-8">
        {children}
      </div>
    </section>
  );
}

interface SectionHeaderProps {
  title: string;
  description?: string;
  align?: 'left' | 'center';
  className?: string;
}

export function SectionHeader({
  title,
  description,
  align = 'center',
  className,
}: SectionHeaderProps) {
  return (
    <div className={cn('mx-auto max-w-3xl', align === 'center' && 'text-center', className)}>
      <h2 className="font-display text-3xl font-bold md:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-lg text-muted-foreground md:text-xl">
          {description}
        </p>
      )}
    </div>
  );
}

