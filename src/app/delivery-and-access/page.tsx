import type { Metadata } from 'next';
import LegalPageLayout from '@/components/legal/LegalPageLayout';
import { buildPageMetadata } from '@/lib/seo';

export const metadata: Metadata = buildPageMetadata({
  title: 'Course Delivery and Access Policy | Stock Market Mumbai',
  description:
    'Course Delivery and Access Policy explaining online portal activation, session schedules, recorded access validity and support.',
  path: '/delivery-and-access',
});

export default function Page() {
  return (
    <LegalPageLayout
      title="Course Delivery and Access Policy"
      path="/delivery-and-access"
      lastUpdated="November 2026"
      sections={[
        {
          title: 'Digital Portal Activation',
          content: <p>Upon confirmed tuition registration, learning portal credentials, online cohort schedules, and PDF study resources are delivered via email within 24 hours.</p>,
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
        { q: 'How soon do I receive course access after enrolling?', a: 'Onboarding credentials and online batch schedules are sent within 24 hours of confirmation.' },
        { q: 'Can I access lectures on mobile and laptop?', a: 'Yes, our recorded videos and PDF notes are responsive across mobile, tablet, and desktop.' },
        { q: 'What happens if I miss a live webinar?', a: 'HD recordings are added to your portal within 24 hours of every live session.' },
      ]}
    />
  );
}
