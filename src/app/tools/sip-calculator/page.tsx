import type { Metadata } from 'next';
import CalculatorShell from '@/components/tools/CalculatorShell';
import { SipWidget } from '@/components/tools/CalculatorWidgets';

export const metadata: Metadata = {
  title: 'SIP Calculator | Stock Market Mumbai',
  description: 'Simulate monthly SIP compounding growth for financial literacy and long-term planning.',
  alternates: { canonical: 'https://stockmarketmumbai.in/tools/sip-calculator' },
};

const FAQS = [
  { q: 'Are SIP returns guaranteed?', a: 'No. Market-linked SIP returns fluctuate and are never fixed or guaranteed.' },
  { q: 'Why does starting early improve SIP outcomes?', a: 'Compounding accelerates sharply in later years as returns generate returns.' },
  { q: 'Does Stock Market Mumbai recommend mutual funds?', a: 'No. This calculator is strictly for mathematical compounding education.' },
];

export default function Page() {
  return (
    <CalculatorShell
      title="SIP Calculator"
      subtitle="Explore how monthly disciplined contributions compound over time."
      faqs={FAQS}
    >
      <SipWidget />
    </CalculatorShell>
  );
}

