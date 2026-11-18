import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Calculator, ArrowRight } from 'lucide-react';
import AccordionFaq from '@/components/ui/AccordionFaq';
import { buildBreadcrumbSchema, buildPageMetadata, safeJsonLd } from '@/lib/seo';

export const metadata: Metadata = buildPageMetadata({
  title: 'Free Stock Market Calculators & Financial Tools Online',
  description:
    'Explore stock-market calculators for position sizing, risk-reward, profit and loss, brokerage costs, SIP investments and compound interest.',
  path: '/tools',
});

const TOOLS = [
  {
    name: 'Position Sizing Calculator',
    desc: 'Estimate share quantity from hypothetical capital, risk percentage, and stop-loss distance.',
    href: '/tools/position-sizing-calculator',
  },
  {
    name: 'Risk-Reward Calculator',
    desc: 'Evaluate risk-to-reward ratio and break-even win rate on hypothetical chart setups.',
    href: '/tools/risk-reward-calculator',
  },
  {
    name: 'Profit & Loss Calculator',
    desc: 'Compute gross P&L and percentage change across hypothetical entry and exit prices.',
    href: '/tools/profit-loss-calculator',
  },
  {
    name: 'Brokerage Calculator',
    desc: 'Estimate illustrative brokerage, STT, GST, and statutory exchange charges in India.',
    href: '/tools/brokerage-calculator',
  },
  {
    name: 'SIP Calculator',
    desc: 'Simulate hypothetical monthly compounding growth across multi-year horizons.',
    href: '/tools/sip-calculator',
  },
  {
    name: 'Compound Interest Calculator',
    desc: 'Understand exponential compounding mathematics over long study horizons.',
    href: '/tools/compound-interest-calculator',
  },
];

const TOOLS_FAQS = [
  {
    q: 'Are these online stock market calculators free to use?',
    a: 'Yes. All six educational risk and compounding calculators on Stock Market Mumbai are free to use in your browser.',
  },
  {
    q: 'Which calculator helps learners practice capital risk planning?',
    a: 'The Position Sizing Calculator and Risk-Reward Calculator help practice calculating quantity and planned stop-loss exposure before any hypothetical setup.',
  },
  {
    q: 'Do these calculators provide investment advice or store personal data?',
    a: 'No. Calculations run strictly in your browser for educational illustration and do not constitute investment advice.',
  },
];

export default function ToolsIndexPage() {
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: 'Home', path: '/' },
    { name: 'Calculators', path: '/tools' },
  ]);

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: TOOLS_FAQS.map((f) => ({
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex items-center space-x-2 text-xs text-slate-500">
            <li><Link href="/" className="hover:text-[#16A34A]">Home</Link></li>
            <li>/</li>
            <li className="text-[#0B2545] font-semibold" aria-current="page">Calculators</li>
          </ol>
        </nav>

        <div className="text-center max-w-3xl mx-auto mb-12 animate-fade-in-up">
          <span className="inline-block px-3.5 py-1 rounded-full text-xs font-bold uppercase bg-[#DCFCE7] text-[#15803D] mb-3">
            Learning Utilities
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0B2545]">
            Free Stock Market Calculators &amp; Financial Tools Online
          </h1>
          <p className="mt-3 text-sm sm:text-base text-[#1E293B]/80">
            Interactive educational calculators for practicing position sizing, risk-reward ratios, illustrative Indian brokerage charges, and compounding math.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {TOOLS.map((tool, idx) => (
            <article
              key={tool.href}
              className={`bg-white rounded-2xl p-6 border border-slate-200 shadow-xs card-hover-lift reveal-on-scroll stagger-${(idx % 6) + 1} flex flex-col justify-between`}
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#0B2545] text-[#22C55E] flex items-center justify-center mb-4">
                  <Calculator className="w-5 h-5" aria-hidden="true" />
                </div>
                <h2 className="text-lg font-bold text-[#0B2545] mb-2">{tool.name}</h2>
                <p className="text-xs sm:text-sm text-slate-600 mb-5">{tool.desc}</p>
              </div>
              <Link
                href={tool.href}
                className="btn-smooth inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-bold bg-[#16A34A] hover:bg-[#15803D] text-white w-fit"
              >
                <span>Open Tool</span>
                <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
              </Link>
            </article>
          ))}
        </div>

        <section className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm max-w-4xl mx-auto reveal-on-scroll">
          <h2 className="text-2xl font-extrabold text-[#0B2545] text-center mb-6">Tools FAQs</h2>
          <AccordionFaq items={TOOLS_FAQS} defaultOpenIndex={null} />
        </section>
      </div>
    </div>
  );
}
