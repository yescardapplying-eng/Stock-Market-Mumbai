import React from 'react';
import Link from 'next/link';
import { Calculator, ShieldAlert } from 'lucide-react';
import AccordionFaq, { FaqItem } from '@/components/ui/AccordionFaq';

export default function CalculatorShell({
  title,
  subtitle,
  children,
  faqs,
}: {
  title: string;
  subtitle: string;
  children: React.ReactNode;
  faqs: FaqItem[];
}) {
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema).replace(/</g, '\\u003c') }}
      />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex items-center space-x-2 text-xs text-slate-500">
            <li><Link href="/" className="hover:text-[#16A34A]">Home</Link></li>
            <li>/</li>
            <li><Link href="/tools" className="hover:text-[#16A34A]">Tools</Link></li>
            <li>/</li>
            <li className="text-[#0B2545] font-semibold truncate">{title}</li>
          </ol>
        </nav>

        <div className="text-center mb-10 animate-fade-in-up">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase bg-[#DCFCE7] text-[#15803D] mb-2">
            <Calculator className="w-3.5 h-3.5" />
            Educational Tool
          </span>
          <h1 className="text-2xl sm:text-4xl font-extrabold text-[#0B2545]">{title}</h1>
          <p className="mt-2 text-sm text-slate-600 max-w-xl mx-auto">{subtitle}</p>
        </div>

        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm mb-8 reveal-on-scroll">
          {children}
        </div>

        <div className="bg-amber-50 rounded-2xl p-4 border border-amber-200 text-xs text-amber-900 mb-10 flex items-start gap-2.5 reveal-on-scroll">
          <ShieldAlert className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
          <span>
            <strong>Educational Calculator:</strong> Numbers are for educational risk simulation only and do not represent financial advice.
          </span>
        </div>

        <section className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm reveal-on-scroll">
          <h2 className="text-xl sm:text-2xl font-bold text-[#0B2545] mb-5">Calculator FAQs</h2>
          <AccordionFaq items={faqs} defaultOpenIndex={null} />
        </section>
      </div>
    </div>
  );
}

