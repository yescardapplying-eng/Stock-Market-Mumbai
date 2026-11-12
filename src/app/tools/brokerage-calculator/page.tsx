import type { Metadata } from 'next';
import CalculatorShell from '@/components/tools/CalculatorShell';
import { BrokerageWidget } from '@/components/tools/CalculatorWidgets';

export const metadata: Metadata = {
  title: 'Brokerage & Tax Calculator | Stock Market Mumbai',
  description: 'Estimate equity intraday brokerage, STT, exchange fees, GST, and net P&L.',
  alternates: { canonical: 'https://stockmarketmumbai.in/tools/brokerage-calculator' },
};

const FAQS = [
  { q: 'Why do statutory charges matter for intraday traders?', a: 'Frequent small entries accumulate STT, GST, and exchange fees that raise your break-even point.' },
  { q: 'Which charges are included here?', a: 'Illustrative discount brokerage, STT, NSE transaction fees, and 18% GST.' },
  { q: 'Is Stock Market Mumbai a stockbroker?', a: 'No, we are strictly an educational academy with zero brokerage ties.' },
];

export default function Page() {
  return (
    <CalculatorShell
      title="Brokerage Calculator"
      subtitle="Estimate illustrative statutory taxes and net break-even P&L."
      faqs={FAQS}
    >
      <BrokerageWidget />
    </CalculatorShell>
  );
}

