import type { Metadata } from 'next';
import LegalPageLayout from '@/components/legal/LegalPageLayout';

export const metadata: Metadata = {
  title: 'Cookie Policy | Stock Market Mumbai',
  description: 'Information on essential cookies and browser preferences used on stockmarketmumbai.in.',
  alternates: { canonical: 'https://stockmarketmumbai.in/cookie-policy' },
};

export default function Page() {
  return (
    <LegalPageLayout
      title="Cookie Policy"
      lastUpdated="November 2026"
      sections={[
        {
          title: 'Essential Functional Cookies',
          content: <p>Stock Market Mumbai uses minimal essential storage for language preference, smooth navigation, and site security.</p>,
        },
        {
          title: 'Analytics & Performance',
          content: <p>Aggregated performance metrics help improve page load speed across Mumbai mobile and desktop networks.</p>,
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

