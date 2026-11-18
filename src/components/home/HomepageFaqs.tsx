import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import AccordionFaq from '@/components/ui/AccordionFaq';
import { safeJsonLd } from '@/lib/seo';

const HOMEPAGE_FAQS = [
  {
    q: 'Are Stock Market Mumbai classes conducted online or in a physical classroom?',
    a: 'Stock Market Mumbai operates 100% online. Learners living across Mumbai and nearby areas attend interactive online sessions and access recorded lessons remotely without commuting to a physical center.',
  },
  {
    q: 'Do you provide stock tips, intraday calls, or investment advisory?',
    a: 'No. We never provide stock tips, buy/sell calls, or investment advice. Our sole focus is structured stock market education covering chart reading, derivatives concepts, and risk management.',
  },
  {
    q: 'Can complete beginners in Mumbai join these online stock market courses?',
    a: 'Yes. The Basic Plan begins from market fundamentals — NSE and BSE basics, Demat and order types, candlestick structure, and risk sizing — with no prior finance degree required.',
  },
  {
    q: 'What are the course packages and durations offered?',
    a: 'We offer three online learning plans: Basic Plan (₹24,999 for 1 Month), Our Pro Plan (₹55,999 for 6 Months), and Ultra Pro Plan (₹95,999 for 1 Year).',
  },
  {
    q: 'Does completing a stock market course guarantee trading profits?',
    a: 'No. Financial markets always carry risk of capital loss, and no educational program can guarantee profits or fixed returns. Our courses focus on building analytical skills and risk awareness.',
  },
  {
    q: 'Can working professionals in Mumbai attend online classes after office hours?',
    a: 'Yes. Online sessions are planned to accommodate students and working professionals, backed by recorded lectures available during your active plan period.',
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
        dangerouslySetInnerHTML={{ __html: safeJsonLd(faqSchema) }}
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
            Quick answers about our online stock market courses, fees, and non-advisory learning approach.
          </p>
        </div>

        {/* All 6 FAQs start closed; opening one smoothly closes the previous */}
        <AccordionFaq items={HOMEPAGE_FAQS} defaultOpenIndex={null} />

        <div className="text-center mt-8">
          <Link
            href="/faqs"
            className="btn-smooth touch-target inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-[#0B2545] hover:bg-[#13345E] text-white text-xs sm:text-sm font-bold"
          >
            <span>All FAQs</span>
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
