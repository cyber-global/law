import { Award, Shield, Globe, Clock } from 'lucide-react';
import { SectionContainer, SectionHeader } from './section-container';

export function EmpathyAuthority() {
  const credentials = [
    { icon: Award, label: '15+ years', description: 'Combined experience in cyber law' },
    { icon: Shield, label: '50+ incidents', description: 'Managed across EU, UK, US' },
    { icon: Clock, label: 'Panel counsel', description: 'For leading cyber insurers' },
    { icon: Globe, label: 'Multi-lingual', description: 'English, Romanian, French' },
  ];

  return (
    <SectionContainer background="muted">
      <div className="mx-auto max-w-4xl text-center">
        <SectionHeader
          title="You're Under Pressure. We Get It."
          description="You're under pressure to act fast, inform the right people, and avoid over-disclosure. We've helped organizations across SaaS, finance, healthcare, and critical infrastructure navigate incidents and audits with calm, clear steps and a defensible record."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {credentials.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.label}
                className="rounded-lg border border-border bg-background p-6 text-center transition-all hover:border-primary/50 hover:shadow-md"
              >
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Icon className="h-6 w-6" />
                </div>
                <div className="mt-4 font-display text-2xl font-bold">{item.label}</div>
                <div className="mt-1 text-sm text-muted-foreground">{item.description}</div>
              </div>
            );
          })}
        </div>
      </div>
    </SectionContainer>
  );
}

