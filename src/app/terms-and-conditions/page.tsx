import type { Metadata } from 'next';
import LegalPageLayout from '@/components/legal/LegalPageLayout';
import { buildPageMetadata } from '@/lib/seo';

export const metadata: Metadata = buildPageMetadata({
  title: 'Terms and Conditions | Stock Market Mumbai',
  description:
    'Terms and Conditions summarizing website usage, online course access rules, user obligations and jurisdiction for Stock Market Mumbai.',
  path: '/terms-and-conditions',
});

export default function Page() {
  return (
    <LegalPageLayout
      title="Terms and Conditions"
      path="/terms-and-conditions"
      lastUpdated="November 2026"
      sections={[
        {
          title: 'Educational Scope Only',
          content: <p>All courses, PDFs, webinars, and calculators on Stock Market Mumbai are strictly educational. Enrollment does not constitute investment advice or research analysis.</p>,
        },
        {
          title: 'Student Conduct',
          content: <p>Course materials and recorded sessions are licensed for single-student personal learning and may not be redistributed or resold.</p>,
        },
        {
          title: 'Jurisdiction',
          content: <p>These terms are governed by applicable Indian laws with jurisdiction in Mumbai, Maharashtra.</p>,
        },
      ]}
      faqs={[
        { q: 'Does enrolling in a course make Stock Market Mumbai my adviser?', a: 'No. We are purely an online educational platform and provide zero advisory or buy/sell recommendations.' },
        { q: 'Can I share my portal login with friends?', a: 'No. Course access is strictly individual for the enrolled learner.' },
        { q: 'Where are legal disputes governed?', a: 'All terms are governed under Indian law within Mumbai, Maharashtra jurisdiction.' },
      ]}
    />
  );
}
