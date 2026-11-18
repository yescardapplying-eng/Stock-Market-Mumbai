import type { Metadata } from 'next';
import LegalPageLayout from '@/components/legal/LegalPageLayout';
import { buildPageMetadata } from '@/lib/seo';

export const metadata: Metadata = buildPageMetadata({
  title: 'Grievance Redressal Policy | Stock Market Mumbai',
  description:
    'Grievance Redressal Policy outlining student support channels, response timelines and misconduct reporting at Stock Market Mumbai.',
  path: '/grievance-redressal',
});

export default function Page() {
  return (
    <LegalPageLayout
      title="Grievance Redressal Policy"
      path="/grievance-redressal"
      lastUpdated="November 2026"
      sections={[
        {
          title: 'Dedicated Student Desk',
          content: <p>If you experience any issue regarding course scheduling, study material access, or communication, please write to info@stockmarketmumbai.in.</p>,
        },
        {
          title: 'Resolution Timeline',
          content: <p>All inquiries receive an acknowledgment within 24 business hours and target resolution within 3 to 5 business days.</p>,
        },
        {
          title: 'Zero Misconduct Policy',
          content: <p>If anyone falsely claims to represent Stock Market Mumbai offering trading tips or asking for funds, report it immediately to info@stockmarketmumbai.in.</p>,
        },
      ]}
      faqs={[
        { q: 'How do I report an impersonator offering tips in your name?', a: 'Email screenshots immediately to info@stockmarketmumbai.in so we can take action and warn learners.' },
        { q: 'What is the typical response time for student grievances?', a: 'We acknowledge tickets within 24 business hours and aim to resolve academic issues within 3–5 business days.' },
        { q: 'How is student support operated?', a: 'Our student support and grievance desk operates online for learners across Mumbai and India via info@stockmarketmumbai.in.' },
      ]}
    />
  );
}
