import type { Metadata } from 'next';
import LegalPageLayout from '@/components/legal/LegalPageLayout';
import { buildPageMetadata } from '@/lib/seo';

export const metadata: Metadata = buildPageMetadata({
  title: 'Stock Market Risk Disclosure | Stock Market Mumbai',
  description:
    'Stock Market Risk Disclosure explaining market risk, non-advisory educational scope and absence of profit guarantees at Stock Market Mumbai.',
  path: '/risk-disclosure',
});

export default function Page() {
  return (
    <LegalPageLayout
      title="Stock Market Risk Disclosure"
      path="/risk-disclosure"
      lastUpdated="November 2026"
      sections={[
        {
          title: 'Market Risk Warning',
          content: <p>Trading and investing in equities, futures, and options involve substantial risk of capital loss. Past historical chart examples never guarantee future market outcomes.</p>,
        },
        {
          title: 'Educational Non-Advisory Notice',
          content: <p>Stock Market Mumbai is NOT registered with SEBI as a Research Analyst or Investment Adviser. Always consult a qualified, registered financial adviser before committing real capital.</p>,
        },
        {
          title: 'No Return Promises',
          content: <p>We strictly prohibit profit guarantees or fixed-return claims. Education improves analytical literacy and risk awareness, not guaranteed income.</p>,
        },
      ]}
      faqs={[
        { q: 'Can completing a course eliminate trading losses?', a: 'No. Market losses are inherent to trading; education teaches risk awareness and how to plan downside limits.' },
        { q: 'Are live chart examples buy/sell recommendations?', a: 'No. Every chart example is strictly for historical and conceptual education.' },
        { q: 'Are F&O instruments high risk?', a: 'Yes. Derivatives carry leverage and time-decay risk, which can lead to rapid capital loss.' },
      ]}
    />
  );
}
