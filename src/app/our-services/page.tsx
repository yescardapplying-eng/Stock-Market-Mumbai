import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { XCircle, ArrowRight, ShieldAlert } from 'lucide-react';
import AccordionFaq from '@/components/ui/AccordionFaq';
import { buildBreadcrumbSchema, buildPageMetadata, safeJsonLd } from '@/lib/seo';

export const metadata: Metadata = buildPageMetadata({
  title: 'Online Stock Market Courses & Training | Stock Market Mumbai',
  description:
    'Explore online stock market education from Stock Market Mumbai, including foundation lessons, technical analysis, options concepts, recorded lectures, study notes and doubt resolution.',
  path: '/our-services',
});

const SERVICES = [
  {
    id: 'stock-market-course',
    name: 'Stock Market Foundation',
    audience: 'Online beginner track for learners in Mumbai starting from scratch.',
    topics: [
      'NSE, BSE, and SEBI market structure overview',
      'Primary IPO vs secondary market mechanics',
      'Order types, bid-ask spread, and T+1 settlement',
      'Demat and trading account fundamentals',
      'Candlestick basics and capital risk awareness',
    ],
    duration: '1 Month (Basic Plan)',
    language: 'English, Hindi, Marathi',
    pricing: 'Included in Basic Plan',
    relatedLinks: [
      { label: 'Stock Market Basics Guide', href: '/stock-market-basics' },
      { label: 'Demat Account Basics', href: '/demat-account-basics' },
    ],
    ctaText: 'View Plans',
    ctaHref: '/our-packages',
  },
  {
    id: 'technical-analysis-workshop',
    name: 'Technical Analysis Workshops',
    audience: 'Online chart-reading sessions for structured price analysis.',
    topics: [
      'Multi-timeframe structure (Daily, 1H, 15M)',
      'Support, resistance, and trend identification',
      'Candlestick geometry and chart pattern context',
      'Volume analysis and momentum indicators (RSI)',
      'Structured stop-loss and risk-reward planning',
    ],
    duration: '6 Months (Our Pro)',
    language: 'English, Hindi',
    pricing: 'Included in Our Pro Plan',
    relatedLinks: [
      { label: 'Technical Analysis Guide', href: '/technical-analysis' },
      { label: 'Candlestick Patterns Guide', href: '/candlestick-patterns' },
    ],
    ctaText: 'Apply Now',
    ctaHref: '/our-packages',
  },
  {
    id: 'derivatives-fno-masterclass',
    name: 'Option Chain & Derivatives',
    audience: 'Online conceptual training on Indian futures and options.',
    topics: [
      'Futures pricing, lot size, and expiry mechanics',
      'Call and Put option payoffs (ITM, ATM, OTM)',
      'Option Greeks: Delta, Theta, Gamma, and Vega',
      'NSE Option Chain: Open Interest, PCR, and IV',
      'Leverage awareness and defined-risk hedging concepts',
    ],
    duration: '6–12 Months',
    language: 'English, Hindi',
    pricing: 'Our Pro & Ultra Pro',
    relatedLinks: [
      { label: 'F&O Basics Guide', href: '/fo-basics' },
      { label: 'Option Chain Explained', href: '/option-chain-explained' },
    ],
    ctaText: 'Enroll Now',
    ctaHref: '/our-packages',
  },
  {
    id: 'recorded-lectures-portal',
    name: 'Recorded HD Lecture Library',
    audience: 'Online revision portal for Mumbai students and working professionals.',
    topics: [
      'On-demand modular video lessons during active plan period',
      'Session recaps for learners who miss live online classes',
      'Historical NSE chart case studies for revision',
      'Self-assessment exercises to reinforce key concepts',
    ],
    duration: 'Active Plan Validity',
    language: 'English, Hindi',
    pricing: 'Included in Active Plans',
    relatedLinks: [
      { label: 'Delivery & Access Policy', href: '/delivery-and-access' },
      { label: 'Learning Resources', href: '/resources' },
    ],
    ctaText: 'Join Now',
    ctaHref: '/our-packages',
  },
  {
    id: 'curated-study-notes',
    name: 'Study Notes & Worksheets',
    audience: 'Structured online reference materials for enrolled learners.',
    topics: [
      'Candlestick and chart structure reference sheets',
      'Position sizing and risk-reward calculation worksheets',
      'Fundamental financial ratio summary sheets',
      'Key stock market terminology glossary',
    ],
    duration: 'Active Plan Access',
    language: 'English & Hindi',
    pricing: 'Included in All Plans',
    relatedLinks: [
      { label: 'Risk Management Guide', href: '/risk-management' },
      { label: 'Financial Calculators', href: '/tools' },
    ],
    ctaText: 'Open Tools',
    ctaHref: '/tools',
  },
  {
    id: 'doubt-clearing-sessions',
    name: '1-on-1 Doubt Resolution',
    audience: 'Scheduled online academic Q&A support based on enrolled plan.',
    topics: [
      'Clarifying syllabus modules and chart-reading concepts',
      'Reviewing hypothetical position-sizing exercises',
      'Discussing study journal structure and discipline',
      'Strictly educational — no personalized buy/sell instructions',
    ],
    duration: 'Monthly / Weekly by Plan',
    language: 'English, Hindi, Marathi',
    pricing: 'Our Pro & Ultra Pro',
    relatedLinks: [
      { label: 'Compare Course Plans', href: '/our-packages' },
      { label: 'Course FAQs', href: '/faqs' },
    ],
    ctaText: 'Contact Us',
    ctaHref: '/contact-us',
  },
];

const SERVICE_FAQS = [
  {
    q: 'Are all Stock Market Mumbai courses delivered online?',
    a: 'Yes. All programs, workshops, recorded lessons, and doubt sessions are delivered 100% online so learners across Mumbai and nearby areas can attend remotely.',
  },
  {
    q: 'Do your services include live buy/sell calls or stock tips?',
    a: 'No. Stock Market Mumbai is strictly an educational platform and does not issue stock tips, intraday calls, or personalized investment advice.',
  },
  {
    q: 'Which course plans include recorded lectures and 1-on-1 doubt sessions?',
    a: 'Recorded session access is included during active plan validity across all plans. Group doubt support is in Basic Plan, monthly 1-on-1 calls in Our Pro Plan, and weekly 1-on-1 calls in Ultra Pro Plan.',
  },
];

export default function OurServicesPage() {
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: 'Home', path: '/' },
    { name: 'Our Services', path: '/our-services' },
  ]);

  const serviceFaqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: SERVICE_FAQS.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.a,
      },
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
        dangerouslySetInnerHTML={{ __html: safeJsonLd(serviceFaqSchema) }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex items-center space-x-2 text-xs text-slate-500">
            <li>
              <Link href="/" className="hover:text-[#16A34A]">Home</Link>
            </li>
            <li>/</li>
            <li className="text-[#0B2545] font-semibold" aria-current="page">Our Services</li>
          </ol>
        </nav>

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-14 animate-fade-in-up">
          <span className="inline-block px-3.5 py-1 rounded-full text-xs font-bold tracking-wider uppercase bg-[#DCFCE7] text-[#15803D] mb-3">
            Online Mumbai Education
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0B2545] tracking-tight">
            Our Online Stock Market Educational Services
          </h1>
          <p className="mt-3 text-sm sm:text-base text-[#1E293B]/80">
            Structured online stock market courses, workshops, recorded lessons, and study support designed for learners in Mumbai.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7 mb-16">
          {SERVICES.map((s, idx) => (
            <article
              key={s.id}
              className={`bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs card-hover-lift reveal-on-scroll stagger-${(idx % 6) + 1} flex flex-col justify-between`}
            >
              <div>
                <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#15803D] bg-[#DCFCE7] px-3 py-1 rounded-full">
                    {s.duration}
                  </span>
                  <span className="text-xs font-semibold text-slate-500">
                    {s.language}
                  </span>
                </div>

                <h2 className="text-xl font-bold text-[#0B2545] mb-1.5">{s.name}</h2>
                <p className="text-xs text-slate-500 mb-4">{s.audience}</p>

                <ul className="space-y-1.5 text-xs sm:text-sm text-[#1E293B] mb-5">
                  {s.topics.map((topic) => (
                    <li key={topic} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#16A34A] mt-2 shrink-0" />
                      <span>{topic}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 mb-5">
                  {s.relatedLinks.map((rl) => (
                    <Link
                      key={rl.href}
                      href={rl.href}
                      className="text-xs font-semibold text-[#0B2545] bg-[#F8FAFC] hover:bg-[#DCFCE7] hover:text-[#15803D] px-3 py-1.5 rounded-lg border border-slate-200 transition-colors"
                    >
                      {rl.label} &rarr;
                    </Link>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-4">
                <div>
                  <span className="text-[11px] text-slate-400 block">Access</span>
                  <span className="text-xs sm:text-sm font-bold text-[#0B2545]">{s.pricing}</span>
                </div>
                <Link
                  href={s.ctaHref}
                  className="btn-smooth touch-target inline-flex items-center justify-center px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-white bg-[#16A34A] hover:bg-[#15803D] gap-1.5"
                >
                  <span>{s.ctaText}</span>
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* What We Do NOT Provide */}
        <section className="bg-red-50/70 border border-red-200 rounded-3xl p-6 sm:p-10 mb-16 reveal-on-scroll">
          <div className="max-w-2xl mx-auto text-center mb-8">
            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-red-100 text-red-700 mb-2">
              <ShieldAlert className="w-3.5 h-3.5" aria-hidden="true" />
              Non-Advisory Standard
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B2545]">
              What We Do NOT Offer
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {[
              { title: 'No Stock Tips', desc: 'Zero intraday calls, signal channels, or buy/sell alerts.' },
              { title: 'No Advisory Service', desc: 'Educational training only — no personalized investment advice.' },
              { title: 'No Fund Handling', desc: 'We never accept client money or trade on anyone’s behalf.' },
              { title: 'No Profit Guarantees', desc: 'Markets carry risk; returns or income are never promised.' },
              { title: 'No Broker Tie-Ups', desc: 'Independent online stock market education platform.' },
              { title: 'No Login Access', desc: 'We never ask for demat passwords, PINs, or OTPs.' },
            ].map((item) => (
              <div key={item.title} className="bg-white p-4 rounded-xl border border-red-100 shadow-xs card-hover-lift">
                <div className="flex items-center gap-2 text-red-600 mb-1">
                  <XCircle className="w-4 h-4 shrink-0" aria-hidden="true" />
                  <h3 className="text-xs font-bold text-[#0B2545]">{item.title}</h3>
                </div>
                <p className="text-xs text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 3 SEO FAQs */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm max-w-4xl mx-auto reveal-on-scroll">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B2545]">
              Services FAQs
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-2">
              Quick answers about our online stock market training formats and support.
            </p>
          </div>
          <AccordionFaq items={SERVICE_FAQS} defaultOpenIndex={null} />
          <div className="text-center mt-7">
            <Link
              href="/faqs"
              className="btn-smooth inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-[#0B2545] hover:bg-[#13345E] text-white text-xs font-bold"
            >
              <span>All FAQs</span>
              <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
