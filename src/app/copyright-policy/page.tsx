import type { Metadata } from 'next';
import LegalPageLayout from '@/components/legal/LegalPageLayout';
import { buildPageMetadata } from '@/lib/seo';

export const metadata: Metadata = buildPageMetadata({
  title: 'Copyright Policy | Stock Market Mumbai',
  description:
    'Copyright Policy detailing content ownership, permitted personal study usage and redistribution restrictions on stockmarketmumbai.in.',
  path: '/copyright-policy',
});

export default function Page() {
  return (
    <LegalPageLayout
      title="Copyright Policy"
      path="/copyright-policy"
      lastUpdated="November 2026"
      sections={[
        {
          title: 'Ownership of Materials',
          content: <p>All syllabus modules, PDFs, chart diagrams, calculators, and branding on Stock Market Mumbai belong exclusively to Stock Market Mumbai.</p>,
        },
        {
          title: 'Permitted Personal Study',
          content: <p>Enrolled students may use provided notes strictly for personal offline study and revision.</p>,
        },
        {
          title: 'Prohibited Redistribution',
          content: <p>Re-uploading recorded lectures, selling notes, or mirroring website content without written permission is strictly prohibited.</p>,
        },
      ]}
      faqs={[
        { q: 'Can I print study PDFs for my personal revision?', a: 'Yes, enrolled learners may print notes strictly for personal academic study.' },
        { q: 'Can I repost course videos on YouTube or Telegram?', a: 'No. Recording, reposting, or sharing paid cohort videos violates copyright terms.' },
        { q: 'How can I request citation permission?', a: 'Contact info@stockmarketmumbai.in for written academic citation permissions.' },
      ]}
    />
  );
}
