import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Check, Sparkles, AlertCircle, ArrowRight } from 'lucide-react';
import AccordionFaq from '@/components/ui/AccordionFaq';
import { MUMBAI_PACKAGES, PACKAGE_COMPARISON_ROWS } from '@/data/packagesData';

export const metadata: Metadata = {
  title: 'Our Packages | Stock Market Course Fees in Mumbai',
  description:
    'Compare Stock Market Mumbai educational packages: Basic Plan (₹24,999 / 1 Month), Our Pro Plan (₹55,999 / 6 Months), and Ultra Pro Plan (₹95,999 / 1 Year).',
  keywords: [
    'Stock market course fees Mumbai',
    'Share market classes fees Mumbai',
    'Trading course packages Mumbai',
    'Basic Plan Our Pro Ultra Pro Mumbai',
  ],
  alternates: {
    canonical: 'https://stockmarketmumbai.in/our-packages',
  },
};

const PACKAGE_FAQS = [
  {
    q: 'What is included in Basic Plan, Our Pro Plan, and Ultra Pro Plan?',
    a: 'Basic Plan (₹24,999 / 1 Month) covers market foundations and risk basics. Our Pro Plan (₹55,999 / 6 Months) adds technical analysis, option chain training, and monthly 1-on-1 calls. Ultra Pro Plan (₹95,999 / 1 Year) provides full annual mentorship and weekly 1-on-1 reviews.',
  },
  {
    q: 'Do any of these packages guarantee trading profits or tips?',
    a: 'No. All three packages are 100% educational. We never provide buy/sell calls, stock tips, or income guarantees. Our focus is teaching chart discipline and capital loss control.',
  },
  {
    q: 'Can I upgrade from Basic Plan to Our Pro or Ultra Pro later?',
    a: 'Yes. Mumbai learners enrolled in the Basic Plan can upgrade to Our Pro or Ultra Pro within their active period by paying the fee difference.',
  },
];

export default function OurPackagesPage() {
  const packageSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: PACKAGE_FAQS.map((faq) => ({
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
          __html: JSON.stringify(packageSchema).replace(/</g, '\\u003c'),
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex items-center space-x-2 text-xs text-slate-500">
            <li>
              <Link href="/" className="hover:text-[#16A34A]">Home</Link>
            </li>
            <li>/</li>
            <li className="text-[#0B2545] font-semibold" aria-current="page">Our Packages</li>
          </ol>
        </nav>

        {/* Page Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-14 animate-fade-in-up">
          <span className="inline-block px-3.5 py-1 rounded-full text-xs font-bold tracking-wider uppercase bg-[#DCFCE7] text-[#15803D] mb-3">
            Tuition Plans
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0B2545] tracking-tight">
            Our Educational Packages
          </h1>
          <p className="mt-3 text-sm sm:text-base text-[#1E293B]/80">
            Choose a structured 1-month, 6-month, or 1-year learning track in Mumbai.
          </p>
        </div>

        {/* 3 Package Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch mb-16">
          {MUMBAI_PACKAGES.map((pkg, idx) => (
            <div
              key={pkg.id}
              className={`rounded-3xl p-6 sm:p-8 flex flex-col justify-between relative card-hover-lift reveal-on-scroll stagger-${idx + 1} ${
                pkg.isPopular
                  ? 'bg-white border-2 border-[#16A34A] shadow-2xl lg:-translate-y-2'
                  : 'bg-white border border-slate-200 shadow-md'
              }`}
            >
              {pkg.isPopular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#16A34A] text-white text-xs font-extrabold uppercase tracking-wider px-4 py-1.5 rounded-full shadow-md flex items-center gap-1.5 whitespace-nowrap">
                  <Sparkles className="w-3.5 h-3.5" />
                  {pkg.badge}
                </div>
              )}

              <div>
                <div className="border-b border-slate-100 pb-5 mb-5">
                  <h2 className="text-xl font-extrabold text-[#0B2545]">{pkg.name}</h2>
                  <p className="text-xs text-slate-500 mt-1">{pkg.description}</p>

                  <div className="mt-4 flex items-baseline gap-2">
                    <span className="text-3xl sm:text-4xl font-black text-[#0B2545]">{pkg.price}</span>
                    <span className="text-xs font-semibold text-slate-500">/ {pkg.duration}</span>
                  </div>
                </div>

                <div className="space-y-3 mb-8">
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Key Learning USPs:
                  </p>
                  <ul className="space-y-3">
                    {pkg.usps.map((usp) => (
                      <li key={usp} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#1E293B]">
                        <div className="w-4 h-4 rounded-full bg-[#DCFCE7] text-[#16A34A] flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-3 h-3 stroke-[3]" />
                        </div>
                        <span>{usp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div>
                <Link
                  href="/contact-us"
                  className={`btn-smooth touch-target w-full py-3.5 px-4 rounded-xl text-center text-sm font-bold flex items-center justify-center gap-2 ${
                    pkg.isPopular
                      ? 'bg-[#16A34A] hover:bg-[#15803D] text-white shadow-lg'
                      : 'bg-[#0B2545] hover:bg-[#13345E] text-white'
                  }`}
                >
                  <span>{pkg.ctaLabel}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <p className="text-[11px] text-center text-slate-400 mt-3">
                  100% educational curriculum • Certificate included
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Comparison Dashboard */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm mb-14 reveal-on-scroll overflow-hidden">
          <div className="max-w-2xl mb-7">
            <span className="inline-block px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-[#0B2545] text-white mb-2">
              Comparison Dashboard
            </span>
            <h2 className="text-2xl font-extrabold text-[#0B2545]">
              Compare Learning Tracks
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Side-by-side comparison of Basic Plan, Our Pro Plan, and Ultra Pro Plan.
            </p>
          </div>

          <div className="overflow-x-auto -mx-2 px-2">
            <table className="w-full text-left text-sm border-collapse min-w-[600px]">
              <thead>
                <tr className="bg-[#0B2545] text-white text-xs font-bold uppercase">
                  <th className="py-3.5 px-4 rounded-tl-xl">Curriculum Feature</th>
                  <th className="py-3.5 px-4 text-center">Basic Plan (1 Mo)</th>
                  <th className="py-3.5 px-4 text-center bg-[#16A34A] text-white">
                    Our Pro Plan (6 Mo)
                  </th>
                  <th className="py-3.5 px-4 text-center rounded-tr-xl">Ultra Pro Plan (1 Yr)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-[#1E293B] text-xs sm:text-sm">
                {PACKAGE_COMPARISON_ROWS.map((row) => (
                  <tr key={row.feature} className="hover:bg-[#F8FAFC] transition-colors">
                    <td className="py-3.5 px-4 font-semibold text-[#0B2545]">{row.feature}</td>
                    <td className="py-3.5 px-4 text-center font-medium">{row.basic}</td>
                    <td className="py-3.5 px-4 text-center font-bold bg-[#DCFCE7]/40 text-[#15803D]">
                      {row.pro}
                    </td>
                    <td className="py-3.5 px-4 text-center font-semibold">{row.ultra}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Certificate & Non-Advisory Note */}
        <div className="bg-amber-50 rounded-2xl p-5 border border-amber-200 mb-14 text-xs text-amber-900 leading-relaxed reveal-on-scroll">
          <div className="flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
            <div>
              <strong className="font-bold">Educational Transparency: </strong>
              Certificates verify syllabus completion at Stock Market Mumbai and are not SEBI licenses. We never promise trading profits or provide advisory calls.
            </div>
          </div>
        </div>

        {/* 3 SEO FAQs */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm max-w-4xl mx-auto reveal-on-scroll">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B2545]">
              Package FAQs
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-2">
              Questions on plan durations, fees, and educational certification.
            </p>
          </div>
          <AccordionFaq items={PACKAGE_FAQS} defaultOpenIndex={null} />
        </section>
      </div>
    </div>
  );
}

