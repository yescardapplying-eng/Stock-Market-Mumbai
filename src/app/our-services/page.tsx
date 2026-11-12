import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { XCircle, ArrowRight, ShieldAlert } from 'lucide-react';
import AccordionFaq from '@/components/ui/AccordionFaq';

export const metadata: Metadata = {
  title: 'Our Services | Stock Market Courses & Workshops in Mumbai',
  description:
    'Explore 100% educational stock market courses in Mumbai: foundation classes, technical analysis workshops, option chain training, study notes, and doubt-clearing.',
  keywords: [
    'Stock market services Mumbai',
    'Technical analysis workshops Mumbai',
    'Option chain classes Mumbai',
    'Share market coaching Mumbai',
  ],
  alternates: {
    canonical: 'https://stockmarketmumbai.in/our-services',
  },
};

const SERVICES = [
  {
    id: 'stock-market-course',
    name: 'Stock Market Foundation',
    audience: 'Beginners in Mumbai starting from zero.',
    topics: [
      'NSE, BSE & SEBI market architecture',
      'IPO primary vs secondary market mechanics',
      'Order types, bid-ask & T+1 settlement',
      'Candlestick anatomy & trend basics',
      'Core capital loss control principles',
    ],
    duration: '1 Month (Basic Plan)',
    language: 'English, Hindi, Marathi',
    pricing: 'Included in Basic Plan',
    ctaText: 'View Plans',
    ctaHref: '/our-packages',
  },
  {
    id: 'technical-analysis-workshop',
    name: 'Technical Analysis Workshops',
    audience: 'Learners building objective chart-reading skills.',
    topics: [
      'Multi-timeframe structure (Daily, 1H, 15M)',
      'Support & resistance demand-supply zones',
      'Chart patterns: Flags, Double Tops & Bottoms',
      'Volume spread analysis & RSI confirmation',
      'Rule-based entry, stop-loss & exit rules',
    ],
    duration: '6 Months (Our Pro)',
    language: 'English, Hindi',
    pricing: 'Included in Our Pro Plan',
    ctaText: 'Apply Now',
    ctaHref: '/our-packages',
  },
  {
    id: 'derivatives-fno-masterclass',
    name: 'Option Chain & Derivatives',
    audience: 'Students learning mathematical option concepts.',
    topics: [
      'Futures pricing & expiry rollover mechanics',
      'Call-Put payoffs & ITM/ATM/OTM basics',
      'Option Greeks: Delta, Theta, Gamma & Vega',
      'NSE Option Chain: Open Interest & PCR',
      'Defined-risk hedging & leverage safety',
    ],
    duration: '6–12 Months',
    language: 'English, Hindi',
    pricing: 'Our Pro & Ultra Pro',
    ctaText: 'Enroll Now',
    ctaHref: '/our-packages',
  },
  {
    id: 'recorded-lectures-portal',
    name: 'Recorded HD Lecture Library',
    audience: 'Working professionals across Mumbai.',
    topics: [
      'Modular HD video lessons anytime',
      'Downloadable slide decks & summaries',
      'Historical NSE chart case studies',
      'Module-end self-assessment quizzes',
    ],
    duration: 'Full Plan Access',
    language: 'English, Hindi',
    pricing: 'All Active Plans',
    ctaText: 'Join Now',
    ctaHref: '/our-packages',
  },
  {
    id: 'curated-study-notes',
    name: 'Study Notes & E-Books',
    audience: 'Self-paced learners building reference guides.',
    topics: [
      'Candlestick Pattern Handbook (PDF)',
      'Position Sizing & R:R worksheets',
      'Fundamental Ratio Cheat-Sheet (ROE, P/E)',
      '200+ Stock Market Terms Glossary',
    ],
    duration: 'Permanent Access',
    language: 'English & Hindi',
    pricing: 'Included in All Plans',
    ctaText: 'Open Tools',
    ctaHref: '/tools',
  },
  {
    id: 'doubt-clearing-sessions',
    name: '1-on-1 Doubt Resolution',
    audience: 'Learners seeking personal academic feedback.',
    topics: [
      'Homework & chart markup reviews',
      'Indicator & position sizing checkups',
      'Trade journal discipline audits',
      'Overtrading & FOMO mindset coaching',
    ],
    duration: 'Weekly & Monthly',
    language: 'English, Hindi, Marathi',
    pricing: 'Our Pro & Ultra Pro',
    ctaText: 'Contact Us',
    ctaHref: '/contact-us',
  },
];

const SERVICE_FAQS = [
  {
    q: 'Do Stock Market Mumbai services include live buy or sell tips?',
    a: 'No. Stock Market Mumbai is 100% educational and strictly non-advisory. We never issue stock tips, intraday calls, or WhatsApp/Telegram signals. All chart studies are strictly for learning.',
  },
  {
    q: 'Are recorded lectures provided if I miss a live Mumbai cohort?',
    a: 'Yes. Every live session is recorded in HD and uploaded to your learning portal so working professionals across Mumbai can revise comfortably.',
  },
  {
    q: 'Which languages are taught in your Mumbai training programs?',
    a: 'Core sessions are delivered in English and Hindi, with doubt-clearing support also available in Marathi for Mumbai and Maharashtra learners.',
  },
];

export default function OurServicesPage() {
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
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceFaqSchema).replace(/</g, '\\u003c'),
        }}
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
            Mumbai Education
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0B2545] tracking-tight">
            Our Educational Services
          </h1>
          <p className="mt-3 text-sm sm:text-base text-[#1E293B]/80">
            Structured stock market courses in Mumbai built for chart clarity and capital safety.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7 mb-16">
          {SERVICES.map((s, idx) => (
            <div
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

                <ul className="space-y-1.5 text-xs sm:text-sm text-[#1E293B] mb-6">
                  {s.topics.map((topic) => (
                    <li key={topic} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#16A34A] mt-2 shrink-0" />
                      <span>{topic}</span>
                    </li>
                  ))}
                </ul>
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
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* What We Do NOT Provide */}
        <section className="bg-red-50/70 border border-red-200 rounded-3xl p-6 sm:p-10 mb-16 reveal-on-scroll">
          <div className="max-w-2xl mx-auto text-center mb-8">
            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-red-100 text-red-700 mb-2">
              <ShieldAlert className="w-3.5 h-3.5" />
              100% Non-Advisory Standard
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B2545]">
              What We Do NOT Offer
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {[
              { title: 'No Stock Tips', desc: 'Zero intraday calls or buy/sell alerts.' },
              { title: 'No Advisory Service', desc: 'Not a SEBI Research Analyst or Adviser.' },
              { title: 'No Fund Handling', desc: 'Never accept capital to trade for you.' },
              { title: 'No Profit Guarantees', desc: 'Markets carry risk; returns are never promised.' },
              { title: 'No Broker Tie-Ups', desc: '100% independent Mumbai learning academy.' },
              { title: 'No Login Access', desc: 'Never ask for demat passwords or OTPs.' },
            ].map((item) => (
              <div key={item.title} className="bg-white p-4 rounded-xl border border-red-100 shadow-xs card-hover-lift">
                <div className="flex items-center gap-2 text-red-600 mb-1">
                  <XCircle className="w-4 h-4 shrink-0" />
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
              Quick answers about our Mumbai stock market educational services.
            </p>
          </div>
          <AccordionFaq items={SERVICE_FAQS} defaultOpenIndex={null} />
        </section>
      </div>
    </div>
  );
}

