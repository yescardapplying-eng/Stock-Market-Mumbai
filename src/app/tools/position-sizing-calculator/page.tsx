import type { Metadata } from 'next';
import CalculatorShell from '@/components/tools/CalculatorShell';
import { PositionSizingWidget } from '@/components/tools/CalculatorWidgets';
import { buildPageMetadata } from '@/lib/seo';

export const metadata: Metadata = buildPageMetadata({
  title: 'Position Sizing Calculator | Stock Market Mumbai',
  description:
    'Calculate hypothetical share quantity from study capital, risk percentage, entry price and stop-loss level for stock market risk education.',
  path: '/tools/position-sizing-calculator',
});

const FAQS = [
  { q: 'Why is position sizing important in risk management?', a: 'Position sizing keeps planned exposure proportional to total study capital regardless of how wide or narrow a stop-loss distance is.' },
  { q: 'What formula does this calculator use?', a: 'Quantity = (Capital × Risk %) ÷ |Entry Price − Stop-Loss Price| (excluding brokerage, taxes, and slippage).' },
  { q: 'Does position sizing eliminate gap risk?', a: 'No. Market gaps or illiquidity can still cause real fills beyond a planned stop-loss price.' },
];

export default function Page() {
  return (
    <CalculatorShell
      title="Position Sizing Calculator"
      subtitle="Calculate hypothetical share quantity from study capital, risk percentage, and stop-loss distance."
      path="/tools/position-sizing-calculator"
      assumptions="Uses Quantity = floor((Capital × Risk%) ÷ |Entry − Stop-Loss|). Illustrative educational estimate excluding brokerage, statutory levies, and slippage."
      relatedLinks={[
        { title: 'Risk Management Guide', href: '/risk-management' },
        { title: 'Risk-Reward Calculator', href: '/tools/risk-reward-calculator' },
        { title: 'Swing Trading Explained', href: '/swing-trading-explained' },
      ]}
      faqs={FAQS}
    >
      <PositionSizingWidget />
    </CalculatorShell>
  );
}
