import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { BookOpen, ArrowRight } from 'lucide-react';
import AccordionFaq from '@/components/ui/AccordionFaq';
import { EDUCATIONAL_TOPICS } from '@/data/educationalTopics';

export const metadata: Metadata = {
  title: 'Learning Resources | Stock Market Study Library Mumbai',
  description:
    'Browse 13 structured stock market study guides for Mumbai learners covering technical analysis, option chain, risk control, and candlesticks.',
  alternates: { canonical: 'https://stockmarketmumbai.in/resources' },
};

const RESOURCE_FAQS = [
  {
    q: 'Are these Mumbai learning resources free to read?',
    a: 'Yes, all 13 educational topic guides and 6 financial calculators on Stock Market Mumbai are free for learners.',
  },
  {
    q: 'Which guide should beginners read first?',
    a: 'Start with Stock Market Basics, followed by Demat Account Basics, Candlestick Patterns, and Capital Risk Management.',
  },
  {
    q: 'Do you provide downloadable PDFs inside paid plans?',
    a: 'Yes, Basic, Our Pro, and Ultra Pro plans include downloadable candlestick PDFs, ratio sheets, and live cohort workshops.',
  },
];

export default function ResourcesPage() {
  const topics = Object.values(EDUCATIONAL_TOPICS);

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: RESOURCE_FAQS.map((f) => ({
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex items-center space-x-2 text-xs text-slate-500">
            <li><Link href="/" className="hover:text-[#16A34A]">Home</Link></li>
            <li>/</li>
            <li className="text-[#0B2545] font-semibold">Resources</li>
          </ol>
        </nav>

        <div className="text-center max-w-2xl mx-auto mb-12 animate-fade-in-up">
          <span className="inline-block px-3.5 py-1 rounded-full text-xs font-bold uppercase bg-[#DCFCE7] text-[#15803D] mb-3">
            Study Library
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0B2545]">
            Educational Resources
          </h1>
          <p className="mt-3 text-sm sm:text-base text-[#1E293B]/80">
            Explore structured guides on charts, derivatives, fundamentals, and capital safety.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {topics.map((topic, idx) => (
            <div
              key={topic.slug}
              className={`bg-white rounded-2xl p-6 border border-slate-200 shadow-xs card-hover-lift reveal-on-scroll stagger-${(idx % 6) + 1} flex flex-col justify-between`}
            >
              <div>
                <div className="flex items-center justify-between text-[11px] font-bold mb-3">
                  <span className="px-2.5 py-0.5 rounded-full bg-[#DCFCE7] text-[#15803D]">
                    {topic.badge}
                  </span>
                  <span className="text-slate-400">{topic.difficulty}</span>
                </div>
                <h2 className="text-lg font-bold text-[#0B2545] mb-2">{topic.title}</h2>
                <p className="text-xs sm:text-sm text-slate-600 mb-5 leading-relaxed">
                  {topic.subtitle}
                </p>
              </div>
              <Link
                href={`/${topic.slug}`}
                className="btn-smooth inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-bold bg-[#0B2545] hover:bg-[#16A34A] text-white w-fit"
              >
                <BookOpen className="w-3.5 h-3.5" />
                <span>Read More</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          ))}
        </div>

        <section className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm max-w-4xl mx-auto reveal-on-scroll">
          <h2 className="text-2xl font-extrabold text-[#0B2545] text-center mb-6">
            Resource FAQs
          </h2>
          <AccordionFaq items={RESOURCE_FAQS} defaultOpenIndex={null} />
        </section>
      </div>
    </div>
  );
}

