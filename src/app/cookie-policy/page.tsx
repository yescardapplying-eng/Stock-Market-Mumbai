import type { Metadata } from 'next';
import LegalPageLayout from '@/components/legal/LegalPageLayout';
import { buildPageMetadata } from '@/lib/seo';

export const metadata: Metadata = buildPageMetadata({
  title: 'Cookie Policy | Stock Market Mumbai',
  description:
    'Cookie Policy detailing essential browser storage and preference technologies used on Stock Market Mumbai.',
  path: '/cookie-policy',
});

export default function Page() {
  return (
    <LegalPageLayout
      title="Cookie Policy"
      path="/cookie-policy"
      lastUpdated="November 2026"
      sections={[
        {
          title: 'Essential Functional Cookies',
          content: <p>Stock Market Mumbai uses minimal essential storage for language preference, smooth navigation, and site security.</p>,
        },
        {
          title: 'Performance & Reliability',
          content: <p>Basic browser and server diagnostics help keep pages responsive across mobile and desktop devices.</p>,
        },
        {
          title: 'Managing Cookies',
          content: <p>You can clear or disable cookies anytime from your browser privacy settings.</p>,
        },
      ]}
      faqs={[
        { q: 'Does Stock Market Mumbai store financial data in cookies?', a: 'No. We never store banking, payment, or trading account data in browser cookies.' },
        { q: 'Can I disable cookies and still browse courses?', a: 'Yes, all educational pages and calculators remain accessible even with cookies restricted.' },
        { q: 'Do you run intrusive third-party ad trackers?', a: 'No. Our focus is clean, distraction-free educational browsing.' },
      ]}
    />
  );
}
