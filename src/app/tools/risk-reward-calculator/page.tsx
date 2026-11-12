import type { Metadata } from 'next';
import CalculatorShell from '@/components/tools/CalculatorShell';
import { RiskRewardWidget } from '@/components/tools/CalculatorWidgets';

export const metadata: Metadata = {
  title: 'Risk-Reward Calculator | Stock Market Mumbai',
  description: 'Calculate risk-to-reward ratio and break-even win rate for educational chart setups.',
  alternates: { canonical: 'https://stockmarketmumbai.in/tools/risk-reward-calculator' },
};

const FAQS = [
  { q: 'What is a healthy Risk-to-Reward ratio?', a: 'Many disciplined learners study setups with at least 1:2 or higher reward-to-risk expectancy.' },
  { q: 'How does R:R reduce win-rate pressure?', a: 'At 1:2 R:R, even a 40% win rate produces positive mathematical expectancy over many sessions.' },
  { q: 'Should R:R be checked before entering?', a: 'Yes, always define stop-loss and target zones before placing any order.' },
];

export default function Page() {
  return (
    <CalculatorShell
      title="Risk-Reward Calculator"
      subtitle="Check reward-to-risk ratio and required break-even accuracy."
      faqs={FAQS}
    >
      <RiskRewardWidget />
    </CalculatorShell>
  );
}

