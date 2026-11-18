import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { BookOpen, ArrowRight, Calculator, FileText } from 'lucide-react';
import AccordionFaq from '@/components/ui/AccordionFaq';
import { EDUCATIONAL_TOPICS } from '@/data/educationalTopics';
import { buildBreadcrumbSchema, buildPageMetadata, safeJsonLd } from '@/lib/seo';

export const metadata: Metadata = buildPageMetadata({
  title: 'Free Stock Market Learning Resources & Guides | India',
  description:
    'Explore stock market learning guides on market basics, technical analysis, fundamental analysis, risk management, derivatives, IPOs and trading psychology.',
  path: '/resources',
});

const RESOURCE_FAQS = [
  {
    q: 'Are the online reading guides on Stock Market Mumbai free to read?',
    a: 'Yes. All 13 structured stock market reading guides and our 6 online financial calculators on this website are freely accessible for self-study.',
  },
  {
    q: 'Which learning guide should beginners read first?',
    a: 'Begin with Stock Market Basics for Beginners in India, followed by Demat and Trading Accounts Explained, Candlestick Patterns, and Stock Market Risk Management.',
  },
  {
    q: 'How are these guides different from paid online courses?',
    a: 'These guides introduce core concepts for self-paced reading. Paid online packages add structured live sessions, recorded video libraries, worksheets, and doubt-clearing support.',
  },
];

export default function ResourcesPage() {
  const topics = Object.values(EDUCATIONAL_TOPICS);
  const beginnerTopics = topics.filter((t) => t.difficulty === 'Beginner');
  const intermediateTopics = topics.filter((t) => t.difficulty === 'Intermediate');
  const advancedTopics = topics.filter((t) => t.difficulty === 'Advanced');

  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: 'Home', path: '/' },
    { name: 'Learning Resources', path: '/resources' },
  ]);

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: RESOURCE_FAQS.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };

  const renderGroup = (heading: string, id: string, desc: string, items: typeof topics) => (
    <section id={id} className="mb-14 scroll-mt-24">
      <div className="mb-6">
        <h2 className="text-xl sm:text-2xl font-extrabold text-[#0B2545]">{heading}</h2>
        <p className="text-xs sm:text-sm text-slate-600 mt-1">{desc}</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((topic, idx) => (
          <article
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
              <h3 className="text-lg font-bold text-[#0B2545] mb-2">{topic.title}</h3>
              <p className="text-xs sm:text-sm text-slate-600 mb-5 leading-relaxed">
                {topic.subtitle}
              </p>
            </div>
            <Link
              href={`/${topic.slug}`}
              className="btn-smooth inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-bold bg-[#0B2545] hover:bg-[#16A34A] text-white w-fit"
            >
              <BookOpen className="w-3.5 h-3.5" aria-hidden="true" />
              <span>Read More</span>
              <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
            </Link>
          </article>
        ))}
      </div>
    </section>
  );

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
            <li className="text-[#0B2545] font-semibold" aria-current="page">Learning Resources</li>
          </ol>
        </nav>

        <div className="text-center max-w-3xl mx-auto mb-10 animate-fade-in-up">
          <span className="inline-block px-3.5 py-1 rounded-full text-xs font-bold uppercase bg-[#DCFCE7] text-[#15803D] mb-3">
            Study Library
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0B2545]">
            Stock Market Learning Resources and Educational Guides
          </h1>
          <p className="mt-3 text-sm sm:text-base text-[#1E293B]/80">
            Browse our 13 educational guides organized by Beginner, Intermediate, and Advanced topics for structured self-study.
          </p>

          {/* Category Jump Links */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 mt-6">
            <a href="#beginner-guides" className="px-4 py-2 rounded-full bg-white border border-slate-200 text-xs font-bold text-[#0B2545] hover:border-[#16A34A] hover:text-[#16A34A]">
              Beginner ({beginnerTopics.length})
            </a>
            <a href="#intermediate-guides" className="px-4 py-2 rounded-full bg-white border border-slate-200 text-xs font-bold text-[#0B2545] hover:border-[#16A34A] hover:text-[#16A34A]">
              Intermediate ({intermediateTopics.length})
            </a>
            <a href="#advanced-guides" className="px-4 py-2 rounded-full bg-white border border-slate-200 text-xs font-bold text-[#0B2545] hover:border-[#16A34A] hover:text-[#16A34A]">
              Advanced ({advancedTopics.length})
            </a>
            <Link href="/tools" className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#0B2545] text-xs font-bold text-white hover:bg-[#16A34A]">
              <Calculator className="w-3.5 h-3.5" aria-hidden="true" />
              <span>Calculators</span>
            </Link>
            <Link href="/blog" className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#16A34A] text-xs font-bold text-white hover:bg-[#15803D]">
              <FileText className="w-3.5 h-3.5" aria-hidden="true" />
              <span>Blog</span>
            </Link>
          </div>
        </div>

        {renderGroup(
          'Beginner Guides — Market Foundations',
          'beginner-guides',
          'Start here to learn Indian stock exchanges, Demat accounts, IPO basics, candlestick anatomy, and structured learning paths.',
          beginnerTopics
        )}

        {renderGroup(
          'Intermediate Guides — Analysis, Risk & Psychology',
          'intermediate-guides',
          'Build chart-reading skills, evaluate company financial statements, understand intraday/swing concepts, and apply risk management.',
          intermediateTopics
        )}

        {renderGroup(
          'Advanced Guides — Derivatives & Option Chain',
          'advanced-guides',
          'Explore futures pricing, option payoffs, Open Interest, Put-Call Ratio, and Option Greeks conceptually.',
          advancedTopics
        )}

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
