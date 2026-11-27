import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import AccordionFaq from '@/components/ui/AccordionFaq';
import { safeJsonLd } from '@/lib/seo';
import { LocationLandingPage } from '@/data/locationLandingPages';

interface LocationFaqsProps {
  location: LocationLandingPage;
}

export default function LocationFaqs({ location }: LocationFaqsProps) {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: location.faqs.map((faq) => ({
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
            {location.name} FAQs
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0B2545] tracking-tight">
            Frequently Asked Questions in {location.name}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#1E293B]/80">
            Answers to common questions regarding online stock market training, batch timings, and fee structures for learners in {location.name}, {location.state}.
          </p>
        </div>

        {/* Accordion FAQ with all 6 items */}
        <AccordionFaq items={location.faqs} defaultOpenIndex={null} />

        <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
          <Link
            href="/faqs"
            className="btn-smooth touch-target inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-[#0B2545] hover:bg-[#13345E] text-white text-xs sm:text-sm font-bold"
          >
            <span>All General FAQs</span>
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </Link>
          <Link
            href="/service-areas"
            className="btn-smooth touch-target inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-[#0B2545] text-xs sm:text-sm font-bold border border-slate-200"
          >
            <span>View All Service Areas</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
