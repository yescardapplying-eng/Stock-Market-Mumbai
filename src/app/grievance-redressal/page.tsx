import type { Metadata } from 'next';
import LegalPageLayout from '@/components/legal/LegalPageLayout';

export const metadata: Metadata = {
  title: 'Grievance Redressal | Stock Market Mumbai',
  description: 'Student support and grievance escalation process for Stock Market Mumbai.',
  alternates: { canonical: 'https://stockmarketmumbai.in/grievance-redressal' },
};

export default function Page() {
  return (
    <LegalPageLayout
      title="Grievance Redressal"
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
        { q: 'What is the typical response time for student grievances?', a: 'We acknowledge tickets within 24 hours and resolve most academic issues within 3–5 business days.' },
        { q: 'Where is your administrative desk based?', a: 'Our academic coordination desk operates in Mumbai, Maharashtra, India.' },
      ]}
    />
  );
}

