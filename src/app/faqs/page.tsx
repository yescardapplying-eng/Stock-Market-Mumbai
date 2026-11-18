import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import AccordionFaq from '@/components/ui/AccordionFaq';
import { buildBreadcrumbSchema, buildPageMetadata, safeJsonLd } from '@/lib/seo';

export const metadata: Metadata = buildPageMetadata({
  title: 'Stock Market Course FAQs | Online Classes, Fees & Learning',
  description:
    'Find answers about online stock market courses, course fees, beginner learning, technical analysis, F&O topics, recorded lessons and enrolment.',
  path: '/faqs',
});

const ALL_FAQS = [
  {
    q: 'Are the stock market classes conducted online?',
    a: 'Yes. Stock Market Mumbai operates 100% online with no physical classroom branch. Learners join remotely from home or work with a laptop, tablet, or smartphone and stable internet.',
  },
  {
    q: 'Can Mumbai-based beginners join these online classes?',
    a: 'Yes. Beginners living across South Mumbai, Central Mumbai, Western Suburbs, Eastern Suburbs, Thane, Kalwa, and Mira Road can enrol online.',
  },
  {
    q: 'Are prior finance or trading skills required to start?',
    a: 'No prior finance degree or trading background is required. The Basic Plan begins from market fundamentals, Demat mechanics, order types, and basic candlestick structure.',
  },
  {
    q: 'What topics are covered across your educational courses?',
    a: 'Depending on the selected plan, learners study stock market basics, technical analysis, candlestick patterns, fundamental ratios, futures and options basics, option chain concepts, trading psychology, and risk management.',
  },
  {
    q: 'What are the course durations and fees?',
    a: 'Basic Plan is ₹24,999 for 1 Month, Our Pro Plan is ₹55,999 for 6 Months, and Ultra Pro Plan is ₹95,999 for 1 Year. Full feature breakdowns are listed on our Packages page.',
  },
  {
    q: 'Are sessions live, recorded, or both?',
    a: 'Courses combine scheduled live online sessions with recorded HD video lessons accessible during your active plan validity for flexible revision.',
  },
  {
    q: 'Is 1-on-1 doubt resolution included in every package?',
    a: 'Basic Plan includes group doubt-clearing workshops. Monthly 1-on-1 doubt resolution calls are included in Our Pro Plan, and weekly 1-on-1 calls are included in Ultra Pro Plan.',
  },
  {
    q: 'Do you provide stock tips, buy/sell calls, or investment advice?',
    a: 'No. Stock Market Mumbai is strictly educational and non-advisory. We never offer stock tips, trading signals, portfolio management, or personalized buy/sell recommendations.',
  },
  {
    q: 'Does completing a course guarantee profits or returns?',
    a: 'No. Securities and derivatives trading always involves risk of capital loss, and no educational course can guarantee profits, win rates, or fixed income.',
  },
  {
    q: 'How do enrolment, portal access, and refund policies work?',
    a: 'Submit an enquiry via our Contact Us page or website form to receive schedule and enrolment details. Please review our Delivery & Access Policy and Refund & Cancellation Policy before completing admission.',
  },
];

export default function FaqsPage() {
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: 'Home', path: '/' },
    { name: 'FAQs', path: '/faqs' },
  ]);

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
        dangerouslySetInnerHTML={{ __html: safeJsonLd(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(faqSchema) }}
      />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex items-center space-x-2 text-xs text-slate-500">
            <li><Link href="/" className="hover:text-[#16A34A]">Home</Link></li>
            <li>/</li>
            <li className="text-[#0B2545] font-semibold" aria-current="page">FAQs</li>
          </ol>
        </nav>

        <div className="text-center mb-10 animate-fade-in-up">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase bg-[#DCFCE7] text-[#15803D] mb-2">
            Student Helpdesk
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0B2545]">
            Frequently Asked Questions About Stock Market Courses
          </h1>
          <p className="mt-2 text-sm text-slate-600 max-w-2xl mx-auto">
            Clear, factual answers on online classes, syllabus coverage, fees, risk awareness, and course policies.
          </p>
        </div>

        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm reveal-on-scroll">
          <AccordionFaq items={ALL_FAQS} defaultOpenIndex={null} />

          <div className="mt-8 pt-6 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
            <div className="flex flex-wrap gap-3 text-xs font-semibold text-[#0B2545]">
              <Link href="/our-services" className="hover:text-[#16A34A] hover:underline">
                Our Services
              </Link>
              <span>•</span>
              <Link href="/our-packages" className="hover:text-[#16A34A] hover:underline">
                Course Packages
              </Link>
              <span>•</span>
              <Link href="/refund-and-cancellation" className="hover:text-[#16A34A] hover:underline">
                Refund Policy
              </Link>
              <span>•</span>
              <Link href="/delivery-and-access" className="hover:text-[#16A34A] hover:underline">
                Access Policy
              </Link>
            </div>
            <Link
              href="/contact-us"
              className="btn-smooth inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-[#16A34A] hover:bg-[#15803D] text-white text-xs font-bold"
            >
              <span>Contact Us</span>
              <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
