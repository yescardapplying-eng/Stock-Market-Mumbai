import type { Metadata } from 'next';
import LegalPageLayout from '@/components/legal/LegalPageLayout';

export const metadata: Metadata = {
  title: 'Refund & Cancellation Policy | Stock Market Mumbai',
  description: 'Transparent fee, refund, and plan upgrade terms for Stock Market Mumbai programs.',
  alternates: { canonical: 'https://stockmarketmumbai.in/refund-and-cancellation' },
};

export default function Page() {
  return (
    <LegalPageLayout
      title="Refund & Cancellation Policy"
      lastUpdated="November 2026"
      sections={[
        {
          title: 'Transparent Enrollment Review',
          content: <p>Students are encouraged to review our curriculum, demo orientation, and non-advisory policy thoroughly before completing tuition payment for Basic, Our Pro, or Ultra Pro plans.</p>,
        },
        {
          title: 'Cancellation Window',
          content: <p>Refund requests submitted within 48 hours of enrollment, provided digital study materials and live sessions have not been accessed, are reviewed on a case-by-case basis.</p>,
        },
        {
          title: 'Plan Upgrades',
          content: <p>Learners may upgrade from Basic Plan to Our Pro or Ultra Pro by contacting info@stockmarketmumbai.in and paying the balance fee.</p>,
        },
      ]}
      faqs={[
        { q: 'How do I request a plan upgrade?', a: 'Write to info@stockmarketmumbai.in with your registered mobile number and plan details.' },
        { q: 'Are refunds processed after digital PDFs are downloaded?', a: 'Once digital course portals and PDF libraries are accessed, fees are generally non-refundable.' },
        { q: 'How long do approved refunds take?', a: 'Approved refunds are credited back to the original payment method within 7 to 10 business days.' },
      ]}
    />
  );
}

