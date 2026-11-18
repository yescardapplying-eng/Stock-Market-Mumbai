import React from 'react';
import Link from 'next/link';
import { Calculator, ShieldAlert, BookOpen } from 'lucide-react';
import AccordionFaq, { FaqItem } from '@/components/ui/AccordionFaq';
import { buildBreadcrumbSchema, safeJsonLd } from '@/lib/seo';

export default function CalculatorShell({
  title,
  subtitle,
  path,
  assumptions,
  relatedLinks = [],
  children,
  faqs,
}: {
  title: string;
  subtitle: string;
  path: string;
  assumptions?: string;
  relatedLinks?: { title: string; href: string }[];
  children: React.ReactNode;
  faqs: FaqItem[];
}) {
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: 'Home', path: '/' },
    { name: 'Calculators', path: '/tools' },
    { name: title, path },
  ]);

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
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
            <li><Link href="/tools" className="hover:text-[#16A34A]">Calculators</Link></li>
            <li>/</li>
            <li className="text-[#0B2545] font-semibold truncate" aria-current="page">{title}</li>
          </ol>
        </nav>

        <div className="text-center mb-10 animate-fade-in-up">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase bg-[#DCFCE7] text-[#15803D] mb-2">
            <Calculator className="w-3.5 h-3.5" aria-hidden="true" />
            Educational Tool
          </span>
          <h1 className="text-2xl sm:text-4xl font-extrabold text-[#0B2545]">{title}</h1>
          <p className="mt-2 text-sm text-slate-600 max-w-xl mx-auto">{subtitle}</p>
        </div>

        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm mb-8 reveal-on-scroll">
          {children}
        </div>

        {assumptions && (
          <div className="bg-white rounded-2xl p-5 border border-slate-200 text-xs text-slate-600 leading-relaxed mb-6 reveal-on-scroll">
            <strong className="text-[#0B2545] font-bold block mb-1">Formula &amp; Illustrative Assumptions:</strong>
            <p>{assumptions}</p>
          </div>
        )}

        <div className="bg-amber-50 rounded-2xl p-4 border border-amber-200 text-xs text-amber-900 mb-8 flex items-start gap-2.5 reveal-on-scroll">
          <ShieldAlert className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" aria-hidden="true" />
          <span>
            <strong>Educational Calculator:</strong> Outputs are hypothetical mathematical estimates for learning only and do not represent financial or investment advice.
          </span>
        </div>

        {relatedLinks.length > 0 && (
          <section className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200 shadow-xs mb-8 reveal-on-scroll">
            <h2 className="text-sm font-bold text-[#0B2545] mb-3 flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-[#16A34A]" aria-hidden="true" />
              <span>Related Learning Guides &amp; Calculators</span>
            </h2>
            <div className="flex flex-wrap gap-2">
              {relatedLinks.map((rl) => (
                <Link
                  key={rl.href}
                  href={rl.href}
                  className="px-3.5 py-2 rounded-xl bg-[#F8FAFC] hover:bg-[#DCFCE7] hover:text-[#15803D] border border-slate-200 text-xs font-semibold text-[#0B2545] transition-colors"
                >
                  {rl.title} &rarr;
                </Link>
              ))}
            </div>
          </section>
        )}

        <section className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm reveal-on-scroll">
          <h2 className="text-xl sm:text-2xl font-bold text-[#0B2545] mb-5">Calculator FAQs</h2>
          <AccordionFaq items={faqs} defaultOpenIndex={null} />
        </section>
      </div>
    </div>
  );
}
