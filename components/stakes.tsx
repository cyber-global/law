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
    <SectionContainer background="dark">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl font-bold md:text-4xl lg:text-5xl text-white">
            What's at Stake
          </h2>
          <p className="text-lg text-slate-300 mt-4 max-w-2xl mx-auto">
            Understanding the consequences of cyber incidents and the benefits of proper legal preparation
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {/* If Mishandled */}
          <div className="rounded-2xl border border-red-500/30 bg-red-500/10 backdrop-blur-sm p-8 hover:bg-red-500/15 transition-all duration-300">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-500/20 text-red-400 border border-red-500/30">
                <AlertTriangle className="h-6 w-6" />
              </div>
              <h3 className="font-display text-2xl font-bold text-white">If Mishandled</h3>
            </div>
            <ul className="space-y-3">
              {failures.map((item, index) => (
                <li key={index} className="flex items-start gap-3 text-slate-300">
                  <span className="mt-1 text-red-400 font-bold">×</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* If Done Right */}
          <div className="rounded-2xl border border-emerald-500/30 bg-emerald-500/10 backdrop-blur-sm p-8 hover:bg-emerald-500/15 transition-all duration-300">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                <CheckCircle className="h-6 w-6" />
              </div>
              <h3 className="font-display text-2xl font-bold text-white">If Done Right</h3>
            </div>
            <ul className="space-y-3">
              {successes.map((item, index) => (
                <li key={index} className="flex items-start gap-3 text-slate-300">
                  <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-emerald-400" />
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

