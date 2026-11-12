import type { Metadata } from 'next';
import CalculatorShell from '@/components/tools/CalculatorShell';
import { ProfitLossWidget } from '@/components/tools/CalculatorWidgets';

export const metadata: Metadata = {
  title: 'Profit & Loss Calculator | Stock Market Mumbai',
  description: 'Calculate gross profit, loss, turnover, and return percentage for equity case studies.',
  alternates: { canonical: 'https://stockmarketmumbai.in/tools/profit-loss-calculator' },
};

const FAQS = [
  { q: 'Does gross P&L include brokerage and STT?', a: 'No, this shows gross price difference. Use our Brokerage Calculator to view net P&L after taxes.' },
  { q: 'How is percentage return calculated?', a: 'Return % = ((Sell Price − Buy Price) ÷ Buy Price) × 100.' },
  { q: 'Can beginners use this for paper journals?', a: 'Yes, it helps log paper-trade outcomes accurately in study journals.' },
];

export default function Page() {
  return (
    <CalculatorShell
      title="Profit & Loss Calculator"
      subtitle="Calculate gross P&L and return percentage cleanly."
      faqs={FAQS}
    >
      <ProfitLossWidget />
    </CalculatorShell>
  );
}

