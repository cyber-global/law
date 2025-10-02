import { Phone, Shield, FileSignature, Search, Scale } from 'lucide-react';
import { ServiceCard } from './service-card';
import { SectionContainer, SectionHeader } from './section-container';

export function ServicesPreview() {
  const services = [
    {
      title: 'Incident Response & Breach Counsel (24/7)',
      summary: 'Rapid legal triage, notification strategy, regulator liaison, and post-incident remediation.',
      bullets: [
        '24/7 first-response counsel',
        'Privileged fact-finding',
        'Notification strategy (DPAs/CSIRTs)',
        'Regulator liaison',
      ],
      outcomes: ['Shorter downtime', 'Reduced penalties', 'Defensible record'],
      href: '/services#incident-response',
      icon: Phone,
      featured: true,
    },
    {
      title: 'Regulatory Compliance & Audits',
      summary: 'Gap assessments for GDPR, NIS2, DORA, eIDAS2, plus DPIAs, RoPAs, and audit prep.',
      bullets: [
        'Readiness reviews',
        'DPIAs, TIAs, RoPAs',
        'NIS2 governance design',
        'Audit preparation',
      ],
      outcomes: ['Clean audits', 'Regulator-ready artefacts'],
      href: '/services#compliance',
      icon: Shield,
    },
    {
      title: 'Contracts & Vendor Risk',
      summary: 'DPAs, SCCs, security addenda, cloud terms, and supply-chain cyber clauses.',
      bullets: [
        'Practical DPAs with TOMs',
        'SCC selection + TIAs',
        'Cloud & SaaS terms',
        'Supply-chain mapping',
      ],
      outcomes: ['Faster deals', 'Audit-proof vendor stack'],
      href: '/services#contracts',
      icon: FileSignature,
    },
    {
      title: 'Digital Forensics & eDiscovery',
      summary: 'Evidence preservation, chain-of-custody, forensic reporting, and litigation holds.',
      bullets: [
        'Legal hold process',
        'Forensic collection oversight',
        'Chain-of-custody artefacts',
        'Expert reports',
      ],
      outcomes: ['Admissible evidence', 'Controlled costs'],
      href: '/services#forensics',
      icon: Search,
    },
    {
      title: 'Cyber Disputes & Enforcement',
      summary: 'Defense in investigations, insurance recovery, and representation before authorities.',
      bullets: [
        'DPA investigations defense',
        'Insurance policy analysis',
        'Insurer negotiations',
        'Civil claims representation',
      ],
      outcomes: ['Reduced fines', 'Faster resolution'],
      href: '/services#disputes',
      icon: Scale,
    },
  ];

  return (
    <SectionContainer>
      <SectionHeader
        title="How We Help"
        description="Five core practice areas covering the full lifecycle of cyber-legal challenges"
      />

      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <ServiceCard key={service.href} {...service} />
        ))}
      </div>
    </SectionContainer>
  );
}

