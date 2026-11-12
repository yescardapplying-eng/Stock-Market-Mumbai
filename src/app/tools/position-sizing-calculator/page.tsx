import type { Metadata } from 'next';
import CalculatorShell from '@/components/tools/CalculatorShell';
import { PositionSizingWidget } from '@/components/tools/CalculatorWidgets';

export const metadata: Metadata = {
  title: 'Position Sizing Calculator | Risk Control Tool Mumbai',
  description: 'Calculate exact share quantity from capital, risk percentage, and stop-loss price.',
  alternates: { canonical: 'https://stockmarketmumbai.in/tools/position-sizing-calculator' },
};

const FAQS = [
  { q: 'Why is position sizing important?', a: 'It keeps every loss capped at a fixed percentage (like 1%) regardless of stop-loss width.' },
  { q: 'What formula does this calculator use?', a: 'Quantity = (Capital × Risk %) ÷ |Entry Price − Stop-Loss Price|.' },
  { q: 'Does Stock Market Mumbai teach this in live cohorts?', a: 'Yes, position sizing is taught from Day 1 in Basic, Our Pro, and Ultra Pro plans.' },
];

export default function Page() {
  return (
    <CalculatorShell
      title="Position Sizing Calculator"
      subtitle="Calculate disciplined share quantity based on capital and stop-loss risk."
      faqs={FAQS}
    >
      <PositionSizingWidget />
    </CalculatorShell>
  );
}

