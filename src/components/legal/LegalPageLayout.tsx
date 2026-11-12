import React from 'react';
import Link from 'next/link';
import { Scale, AlertCircle } from 'lucide-react';
import AccordionFaq, { FaqItem } from '@/components/ui/AccordionFaq';

interface LegalSection {
  title: string;
  content: React.ReactNode;
}

interface LegalPageLayoutProps {
  title: string;
  lastUpdated: string;
  sections: LegalSection[];
  faqs: FaqItem[];
}

export default function LegalPageLayout({
  title,
  lastUpdated,
  sections,
  faqs,
}: LegalPageLayoutProps) {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
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
          __html: JSON.stringify(faqSchema).replace(/</g, '\\u003c'),
        }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex items-center space-x-2 text-xs text-slate-500">
            <li>
              <Link href="/" className="hover:text-[#16A34A]">Home</Link>
            </li>
            <li>/</li>
            <li className="text-[#0B2545] font-semibold" aria-current="page">
              {title}
            </li>
          </ol>
        </nav>

        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm mb-8 animate-fade-in-up">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#DCFCE7] text-[#15803D] mb-3">
            <Scale className="w-3.5 h-3.5" />
            Official Policy
          </span>
          <h1 className="text-2xl sm:text-4xl font-extrabold text-[#0B2545] tracking-tight">
            {title}
          </h1>
          <p className="text-xs text-slate-500 mt-2">
            Last Updated: {lastUpdated} • Stock Market Mumbai (stockmarketmumbai.in)
          </p>
        </div>

        <div className="bg-amber-50 rounded-2xl p-5 border border-amber-200 mb-8 text-xs text-amber-900 leading-relaxed flex items-start gap-3 reveal-on-scroll">
          <AlertCircle className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
          <div>
            <strong>Educational Compliance: </strong>
            Stock Market Mumbai operates strictly as an educational training platform and is not SEBI-registered for advisory or research calls.
          </div>
        </div>

        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm mb-10 space-y-6 reveal-on-scroll">
          {sections.map((sec, idx) => (
            <section key={sec.title} className="border-b border-slate-100 pb-6 last:border-b-0 last:pb-0">
              <h2 className="text-lg sm:text-xl font-bold text-[#0B2545] mb-2">
                {idx + 1}. {sec.title}
              </h2>
              <div className="text-xs sm:text-sm text-[#1E293B]/85 leading-relaxed space-y-2">
                {sec.content}
              </div>
            </section>
          ))}
        </div>

        {/* 3 Page-Specific Policy FAQs */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm reveal-on-scroll">
          <h2 className="text-xl sm:text-2xl font-bold text-[#0B2545] mb-6">
            Policy FAQs
          </h2>
          <AccordionFaq items={faqs} defaultOpenIndex={null} />
        </div>
      </div>
    </div>
  );
}

