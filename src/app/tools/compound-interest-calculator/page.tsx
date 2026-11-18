import type { Metadata } from 'next';
import CalculatorShell from '@/components/tools/CalculatorShell';
import { CompoundInterestWidget } from '@/components/tools/CalculatorWidgets';
import { buildPageMetadata } from '@/lib/seo';

export const metadata: Metadata = buildPageMetadata({
  title: 'Compound Interest Calculator | Stock Market Mumbai',
  description:
    'Calculate hypothetical annual compound interest growth across time horizons to understand exponential compounding mathematics.',
  path: '/tools/compound-interest-calculator',
});

const FAQS = [
  { q: 'What formula is used for annual compound interest?', a: 'Total Value = Principal × (1 + Annual Rate / 100) ^ Years.' },
  { q: 'Why do stock market learners study compounding?', a: 'Understanding realistic compounding math helps learners evaluate long-term growth responsibly and recognize unrealistic return promises.' },
  { q: 'Are entered interest rates guaranteed in securities markets?', a: 'No. Any annual rate entered is purely a hypothetical number for mathematical illustration.' },
];

export default function Page() {
  return (
    <CalculatorShell
      title="Compound Interest Calculator"
      subtitle="Understand hypothetical annual compounding growth over multi-year horizons."
      path="/tools/compound-interest-calculator"
      assumptions="Uses annual compounding formula A = P × (1 + r)^t on hypothetical inputs. Does not account for inflation, taxes, or variable market returns."
      relatedLinks={[
        { title: 'SIP Calculator', href: '/tools/sip-calculator' },
        { title: 'Fundamental Analysis Guide', href: '/fundamental-analysis' },
        { title: 'Stock Market Basics', href: '/stock-market-basics' },
      ]}
      faqs={FAQS}
    >
      <CompoundInterestWidget />
    </CalculatorShell>
  );
}
