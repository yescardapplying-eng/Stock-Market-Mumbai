import type { Metadata } from 'next';
import LegalPageLayout from '@/components/legal/LegalPageLayout';

export const metadata: Metadata = {
  title: 'Delivery & Access Policy | Stock Market Mumbai',
  description: 'How live cohort links, recorded videos, and PDF study notes are delivered to enrolled learners.',
  alternates: { canonical: 'https://stockmarketmumbai.in/delivery-and-access' },
};

export default function Page() {
  return (
    <LegalPageLayout
      title="Delivery & Access Policy"
      lastUpdated="November 2026"
      sections={[
        {
          title: 'Digital Portal Activation',
          content: <p>Upon confirmed tuition registration, learning portal credentials, cohort schedules, and PDF study resources are delivered via email within 24 hours.</p>,
        },
        {
          title: 'Access Validity',
          content: <p>Access remains active for the exact duration of your chosen package: 1 Month (Basic), 6 Months (Our Pro), or 1 Year (Ultra Pro).</p>,
        },
        {
          title: 'Technical Support',
          content: <p>For login or recording access assistance, contact info@stockmarketmumbai.in during academic hours.</p>,
        },
      ]}
      faqs={[
        { q: 'How soon do I receive course access after enrolling?', a: 'Onboarding credentials and batch schedules are sent within 24 hours of confirmation.' },
        { q: 'Can I access lectures on mobile and laptop?', a: 'Yes, our recorded videos and PDF notes are responsive across mobile, tablet, and desktop.' },
        { q: 'What happens if I miss a live webinar?', a: 'HD recordings are added to your portal within 24 hours of every live session.' },
      ]}
    />
  );
}

