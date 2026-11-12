import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import AccordionFaq from '@/components/ui/AccordionFaq';

export const metadata: Metadata = {
  title: 'FAQs | Stock Market Mumbai Education Questions',
  description:
    'Frequently asked questions about Stock Market Mumbai courses, fees, beginner eligibility, and 100% non-advisory policy.',
  alternates: { canonical: 'https://stockmarketmumbai.in/faqs' },
};

const ALL_FAQS = [
  {
    q: 'Is Stock Market Mumbai a SEBI-registered advisory?',
    a: 'No. Stock Market Mumbai is strictly an educational institute and does not offer tips, stock recommendations, or portfolio management.',
  },
  {
    q: 'What are the fees for your Mumbai trading programs?',
    a: 'Basic Plan is ₹24,999 (1 Month), Our Pro Plan is ₹55,999 (6 Months), and Ultra Pro Plan is ₹95,999 (1 Year).',
  },
  {
    q: 'Can beginners without finance backgrounds join?',
    a: 'Yes! Our Basic Plan starts from market basics, demat concepts, candlesticks, and capital risk rules in simple language.',
  },
];

export default function FaqsPage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: ALL_FAQS.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };

  return (
    <div className="bg-[#F8FAFC] min-h-screen py-10 sm:py-14">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema).replace(/</g, '\\u003c') }}
      />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex items-center space-x-2 text-xs text-slate-500">
            <li><Link href="/" className="hover:text-[#16A34A]">Home</Link></li>
            <li>/</li>
            <li className="text-[#0B2545] font-semibold">FAQs</li>
          </ol>
        </nav>

        <div className="text-center mb-10 animate-fade-in-up">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase bg-[#DCFCE7] text-[#15803D] mb-2">
            Student Helpdesk
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0B2545]">
            Frequently Asked Questions
          </h1>
          <p className="mt-2 text-sm text-slate-600">
            Clear answers about our Mumbai stock market education tracks.
          </p>
        </div>

        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm reveal-on-scroll">
          <AccordionFaq items={ALL_FAQS} defaultOpenIndex={null} />
        </div>
      </div>
    </div>
  );
}

