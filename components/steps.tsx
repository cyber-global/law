import { cn } from '@/lib/utils';
import { LucideIcon } from 'lucide-react';

interface Step {
  number: number;
  title: string;
  description: string;
  icon?: LucideIcon;
}

interface StepsProps {
  steps: Step[];
  className?: string;
}

export function Steps({ steps, className }: StepsProps) {
  return (
    <section className={cn('py-16 md:py-24', className)}>
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid gap-8 md:grid-cols-3 md:gap-12">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isLast = index === steps.length - 1;

            return (
              <div key={step.number} className="relative">
                {/* Connector line (desktop only) */}
                {!isLast && (
                  <div className="absolute left-1/2 top-12 hidden h-0.5 w-full bg-gradient-to-r from-primary/50 to-accent/50 md:block" />
                )}

                <div className="relative flex flex-col items-center text-center">
                  {/* Number circle */}
                  <div className="relative z-10 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent text-2xl font-bold text-white shadow-lg">
                    {step.number}
                  </div>

                  {/* Icon (if provided) */}
                  {Icon && (
                    <div className="mt-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Icon className="h-6 w-6" />
                    </div>
                  )}

                  {/* Content */}
                  <div className="mt-6">
                    <h3 className="font-display text-xl font-semibold md:text-2xl">
                      {step.title}
                    </h3>
                    <p className="mt-3 text-muted-foreground md:text-lg">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

