import React from 'react';
import AccordionFaq from '@/components/ui/AccordionFaq';

const HOMEPAGE_FAQS = [
  {
    q: 'What is Stock Market Mumbai?',
    a: 'Stock Market Mumbai (stockmarketmumbai.in) is a 100% educational training platform for Mumbai learners. We teach chart reading, price action, option chain analysis, and mathematical capital risk control.',
  },
  {
    q: 'Do you provide stock tips or buy/sell calls?',
    a: 'No. We never provide stock tips, intraday calls, or investment advisory. We are an educational academy focused on helping traders control losses and analyze markets independently.',
  },
  {
    q: 'Are your Mumbai stock market classes beginner-friendly?',
    a: 'Yes. Our Basic Plan starts from zero — covering demat basics, NSE/BSE order matching, candlestick patterns, and stop-loss calculation in English, Hindi, and Marathi.',
  },
  {
    q: 'What are your course packages and durations?',
    a: 'We offer three structured programs: Basic Plan (₹24,999 / 1 Month), Our Pro Plan (₹55,999 / 6 Months), and Ultra Pro Plan (₹95,999 / 1 Year).',
  },
  {
    q: 'How do your courses help control capital loss?',
    a: 'From Day 1, we teach strict position sizing, the 1% per-trade risk rule, daily drawdown limits, and objective trade journaling so learners protect their capital.',
  },
  {
    q: 'Can working professionals in Mumbai attend sessions?',
    a: 'Yes. Live interactive cohorts run in convenient evening and weekend slots, backed by 24/7 HD recorded lectures and dedicated doubt-clearing calls.',
  },
];

export default function HomepageFaqs() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: HOMEPAGE_FAQS.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.a,
      },
    })),
  };

  return (
    <section className="py-14 sm:py-20 bg-white border-b border-slate-200">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema).replace(/</g, '\\u003c') }}
      />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 reveal-on-scroll">
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <span className="inline-block px-3.5 py-1 rounded-full text-xs font-bold tracking-wider uppercase bg-[#DCFCE7] text-[#15803D] mb-3">
            Common Questions
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0B2545] tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#1E293B]/80">
            Clear answers about our Mumbai stock market courses and educational ethics.
          </p>
        </div>

        {/* All 6 FAQs start closed; opening one smoothly closes the previous */}
        <AccordionFaq items={HOMEPAGE_FAQS} defaultOpenIndex={null} />
      </div>
    </section>
  );
}

