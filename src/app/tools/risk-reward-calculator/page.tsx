import type { Metadata } from 'next';
import CalculatorShell from '@/components/tools/CalculatorShell';
import { RiskRewardWidget } from '@/components/tools/CalculatorWidgets';
import { buildPageMetadata } from '@/lib/seo';

export const metadata: Metadata = buildPageMetadata({
  title: 'Risk-Reward Calculator | Stock Market Mumbai',
  description:
    'Calculate hypothetical risk-to-reward ratio and break-even win rate from entry, stop-loss and target levels.',
  path: '/tools/risk-reward-calculator',
});

const FAQS = [
  { q: 'What does a 1:2 Risk-to-Reward ratio mean?', a: 'It means the hypothetical target distance is twice the planned stop-loss distance before accounting for trading charges.' },
  { q: 'How is break-even win rate calculated?', a: 'Break-even Win Rate = 1 ÷ (1 + Reward/Risk), excluding brokerage, taxes, and slippage.' },
  { q: 'Does a favorable R:R ratio guarantee a winning trade?', a: 'No. Wider targets can reduce hit probability, and market prices never move with certainty.' },
];

export default function Page() {
  return (
    <CalculatorShell
      title="Risk-Reward Calculator"
      subtitle="Evaluate hypothetical reward-to-risk ratio and mathematical break-even accuracy."
      path="/tools/risk-reward-calculator"
      assumptions="Computes Risk = |Entry − Stop-Loss|, Reward = |Target − Entry|, R:R = Reward ÷ Risk, and theoretical Break-Even Win Rate = 100 ÷ (1 + R:R) excluding transaction costs."
      relatedLinks={[
        { title: 'Risk Management Guide', href: '/risk-management' },
        { title: 'Position Sizing Calculator', href: '/tools/position-sizing-calculator' },
        { title: 'Technical Analysis Guide', href: '/technical-analysis' },
      ]}
      faqs={FAQS}
    >
      <RiskRewardWidget />
    </CalculatorShell>
  );
}
