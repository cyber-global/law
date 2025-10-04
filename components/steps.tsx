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
    <section className={cn('py-16 md:py-24 bg-slate-800/50', className)}>
      <div className="container mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Our Process
          </h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Three simple steps to get you the legal support you need
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3 md:gap-12">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isLast = index === steps.length - 1;

            return (
              <div key={step.number} className="relative">
                {/* Connector line (desktop only) */}
                {!isLast && (
                  <div className="absolute left-1/2 top-12 hidden h-0.5 w-full bg-gradient-to-r from-cyan-400/60 to-indigo-400/60 md:block" />
                )}

                <div className="relative flex flex-col items-center text-center bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300">
                  {/* Number circle - High contrast */}
                  <div className="relative z-10 flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-cyan-400 to-indigo-500 text-3xl font-bold text-slate-900 shadow-2xl border-4 border-white/20">
                    {step.number}
                  </div>

                  {/* Icon (if provided) */}
                  {Icon && (
                    <div className="mt-4 flex h-12 w-12 items-center justify-center rounded-full bg-cyan-400/20 text-cyan-400 border border-cyan-400/30">
                      <Icon className="h-6 w-6" />
                    </div>
                  )}

                  {/* Content */}
                  <div className="mt-6">
                    <h3 className="font-display text-xl font-semibold md:text-2xl text-white">
                      {step.title}
                    </h3>
                    <p className="mt-3 text-slate-300 md:text-lg leading-relaxed">
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

