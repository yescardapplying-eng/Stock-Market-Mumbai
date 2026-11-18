import type { Metadata } from 'next';
import CalculatorShell from '@/components/tools/CalculatorShell';
import { SipWidget } from '@/components/tools/CalculatorWidgets';
import { buildPageMetadata } from '@/lib/seo';

export const metadata: Metadata = buildPageMetadata({
  title: 'SIP Calculator Online | Stock Market Mumbai',
  description:
    'Simulate hypothetical monthly SIP compounding growth across time horizons for long-term financial literacy.',
  path: '/tools/sip-calculator',
});

const FAQS = [
  { q: 'Are SIP returns fixed or guaranteed in Indian markets?', a: 'No. Market-linked investments fluctuate with equity and debt market cycles; assumed rates are purely hypothetical inputs.' },
  { q: 'Why does investment horizon affect compounding strongly?', a: 'Over longer horizons, hypothetical returns earned in earlier years begin compounding alongside new monthly contributions.' },
  { q: 'Does Stock Market Mumbai recommend specific mutual funds?', a: 'No. This tool is strictly for mathematical compounding literacy, not mutual fund advisory.' },
];

export default function Page() {
  return (
    <CalculatorShell
      title="SIP Calculator Online"
      subtitle="Explore hypothetical monthly contribution compounding over multi-year horizons."
      path="/tools/sip-calculator"
      assumptions="Uses standard monthly compounding future-value math: FV = P × [((1 + r)^n − 1) / r] × (1 + r), where r is hypothetical monthly rate. Excludes expense ratios, exit loads, taxes, and market volatility."
      relatedLinks={[
        { title: 'Compound Interest Calculator', href: '/tools/compound-interest-calculator' },
        { title: 'Fundamental Analysis Guide', href: '/fundamental-analysis' },
        { title: 'Stock Market Basics', href: '/stock-market-basics' },
      ]}
      faqs={FAQS}
    >
      <SipWidget />
    </CalculatorShell>
  );
}
