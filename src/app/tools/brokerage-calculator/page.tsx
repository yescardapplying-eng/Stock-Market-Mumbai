import type { Metadata } from 'next';
import CalculatorShell from '@/components/tools/CalculatorShell';
import { BrokerageWidget } from '@/components/tools/CalculatorWidgets';
import { buildPageMetadata } from '@/lib/seo';

export const metadata: Metadata = buildPageMetadata({
  title: 'Brokerage Calculator India | Stock Market Mumbai',
  description:
    'Estimate illustrative Indian equity intraday brokerage, STT, exchange fees, GST and net break-even P&L for educational cost awareness.',
  path: '/tools/brokerage-calculator',
});

const FAQS = [
  { q: 'Why do brokerage and statutory charges matter in active trading?', a: 'Frequent orders accumulate brokerage, STT, exchange fees, stamp duty, and GST, raising the move needed just to break even.' },
  { q: 'Are exact broker rates identical across all Indian brokers?', a: 'No. Brokerage slabs and statutory rates can change by broker and government notification. Always check your SEBI-registered broker’s current tariff sheet.' },
  { q: 'Is Stock Market Mumbai affiliated with any stockbroker?', a: 'No. We are an independent online educational platform with zero brokerage tie-ups.' },
];

export default function Page() {
  return (
    <CalculatorShell
      title="Brokerage Calculator India"
      subtitle="Estimate illustrative Indian equity intraday brokerage, statutory charges, and net P&L."
      path="/tools/brokerage-calculator"
      assumptions="Uses an illustrative discount-brokerage model (up to ₹20/order or 0.03%), sample intraday STT, exchange fee, and 18% GST for educational demonstration. Statutory rates vary by segment and official government updates — verify exact charges with your broker."
      relatedLinks={[
        { title: 'Intraday Trading Basics', href: '/intraday-trading-basics' },
        { title: 'Demat Account Basics', href: '/demat-account-basics' },
        { title: 'Profit & Loss Calculator', href: '/tools/profit-loss-calculator' },
      ]}
      faqs={FAQS}
    >
      <BrokerageWidget />
    </CalculatorShell>
  );
}
