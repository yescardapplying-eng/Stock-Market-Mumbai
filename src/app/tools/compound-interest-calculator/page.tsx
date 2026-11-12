import type { Metadata } from 'next';
import CalculatorShell from '@/components/tools/CalculatorShell';
import { CompoundInterestWidget } from '@/components/tools/CalculatorWidgets';

export const metadata: Metadata = {
  title: 'Compound Interest Calculator | Stock Market Mumbai',
  description: 'Understand exponential compounding mathematics across time horizons.',
  alternates: { canonical: 'https://stockmarketmumbai.in/tools/compound-interest-calculator' },
};

const FAQS = [
  { q: 'What is the formula for annual compounding?', a: 'Total = Principal × (1 + Rate / 100) ^ Years.' },
  { q: 'Why do learners study compounding alongside trading?', a: 'Understanding steady compounding prevents chasing risky overnight doubling schemes.' },
  { q: 'Are rates shown guaranteed in markets?', a: 'No, rates are purely hypothetical inputs for educational math study.' },
];

export default function Page() {
  return (
    <CalculatorShell
      title="Compound Interest Calculator"
      subtitle="Study mathematical growth over multi-year horizons."
      faqs={FAQS}
    >
      <CompoundInterestWidget />
    </CalculatorShell>
  );
}

