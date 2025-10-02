import { AlertTriangle, CheckCircle } from 'lucide-react';
import { SectionContainer } from './section-container';

export function Stakes() {
  const failures = [
    'Regulatory fines up to 4% of turnover (GDPR) or €10M+ (NIS2)',
    'Class actions and contractual disputes',
    'Extended downtime waiting for legal clarity',
    'Customer churn and reputational damage',
    'Insurance denial due to inadequate documentation',
  ];

  const successes = [
    'Faster recovery with clear legal guidance',
    'Reduced penalties through proper notification',
    'Audit-ready documentation for regulators',
    'Preserved stakeholder trust',
    'Maximized insurance coverage and reimbursement',
  ];

  return (
    <SectionContainer background="gradient">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl font-bold md:text-4xl lg:text-5xl">
            What's at Stake
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {/* If Mishandled */}
          <div className="rounded-2xl border border-destructive/20 bg-destructive/5 p-8">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-destructive/10 text-destructive">
                <AlertTriangle className="h-6 w-6" />
              </div>
              <h3 className="font-display text-2xl font-bold">If Mishandled</h3>
            </div>
            <ul className="space-y-3">
              {failures.map((item, index) => (
                <li key={index} className="flex items-start gap-3 text-muted-foreground">
                  <span className="mt-1 text-destructive">×</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* If Done Right */}
          <div className="rounded-2xl border border-success/20 bg-success/5 p-8">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-success/10 text-success">
                <CheckCircle className="h-6 w-6" />
              </div>
              <h3 className="font-display text-2xl font-bold">If Done Right</h3>
            </div>
            <ul className="space-y-3">
              {successes.map((item, index) => (
                <li key={index} className="flex items-start gap-3 text-muted-foreground">
                  <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-success" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}

