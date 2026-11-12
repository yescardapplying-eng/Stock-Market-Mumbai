import type { Metadata } from 'next';
import LegalPageLayout from '@/components/legal/LegalPageLayout';

export const metadata: Metadata = {
  title: 'Risk Disclosure & Disclaimer | Stock Market Mumbai',
  description: 'Important market risk disclosure and non-advisory disclaimer for Stock Market Mumbai.',
  alternates: { canonical: 'https://stockmarketmumbai.in/risk-disclosure' },
};

export default function Page() {
  return (
    <LegalPageLayout
      title="Risk Disclosure & Disclaimer"
      lastUpdated="November 2026"
      sections={[
        {
          title: 'Market Risk Warning',
          content: <p>Trading and investing in equities, futures, and options involve substantial risk of capital loss. Past historical chart examples never guarantee future market outcomes.</p>,
        },
        {
          title: 'SEBI Non-Registration Notice',
          content: <p>Stock Market Mumbai is NOT registered with SEBI as a Research Analyst or Investment Adviser. Always consult a SEBI-registered adviser before committing real capital.</p>,
        },
        {
          title: 'No Return Promises',
          content: <p>We strictly prohibit profit guarantees or fixed-return claims. Education improves analytical discipline, not guaranteed income.</p>,
        },
      ]}
      faqs={[
        { q: 'Can completing a course eliminate trading losses?', a: 'No. Market losses are inherent to trading; education teaches how to cap and control those losses.' },
        { q: 'Are live chart examples buy/sell recommendations?', a: 'No. Every chart example is strictly for historical and conceptual education.' },
        { q: 'Are F&O instruments high risk?', a: 'Yes. Derivatives carry leverage and time-decay risk, which is why strict risk sizing is mandatory.' },
      ]}
    />
  );
}

