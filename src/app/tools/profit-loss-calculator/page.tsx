import type { Metadata } from 'next';
import CalculatorShell from '@/components/tools/CalculatorShell';
import { ProfitLossWidget } from '@/components/tools/CalculatorWidgets';
import { buildPageMetadata } from '@/lib/seo';

export const metadata: Metadata = buildPageMetadata({
  title: 'Stock Trading Profit & Loss Calculator | Stock Market Mumbai',
  description:
    'Calculate hypothetical gross profit, loss, turnover and percentage return across buy and sell prices for equity study journals.',
  path: '/tools/profit-loss-calculator',
});

const FAQS = [
  { q: 'Does gross P&L include brokerage and statutory taxes?', a: 'No. This tool calculates gross price difference. Use our Brokerage Calculator to estimate illustrative charges and net P&L.' },
  { q: 'How is percentage return calculated?', a: 'Return % = ((Sell Price − Buy Price) ÷ Buy Price) × 100 for long equity examples.' },
  { q: 'Can beginners use this calculator for simulated journals?', a: 'Yes, it helps calculate hypothetical gross outcomes cleanly during paper-study exercises.' },
];

export default function Page() {
  return (
    <CalculatorShell
      title="Stock Trading Profit & Loss Calculator"
      subtitle="Calculate hypothetical gross profit, loss, turnover, and percentage return."
      path="/tools/profit-loss-calculator"
      assumptions="Computes Gross P&L = (Sell Price − Buy Price) × Quantity. Does not deduct brokerage, STT, GST, exchange turnover fees, or stamp duty."
      relatedLinks={[
        { title: 'Brokerage Calculator', href: '/tools/brokerage-calculator' },
        { title: 'Trading Psychology Guide', href: '/trading-psychology' },
        { title: 'Intraday Trading Basics', href: '/intraday-trading-basics' },
      ]}
      faqs={FAQS}
    >
      <ProfitLossWidget />
    </CalculatorShell>
  );
}
