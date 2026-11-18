import React from 'react';
import Link from 'next/link';
import { BookOpen, ShieldAlert, Clock, ExternalLink, Lightbulb } from 'lucide-react';
import AccordionFaq from '@/components/ui/AccordionFaq';
import { TopicPageContent } from '@/data/educationalTopics';
import { buildBreadcrumbSchema, safeJsonLd } from '@/lib/seo';

export default function EducationalTopicPageView({ topic }: { topic: TopicPageContent }) {
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: 'Home', path: '/' },
    { name: 'Learning Resources', path: '/resources' },
    { name: topic.title, path: `/${topic.slug}` },
  ]);

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: topic.faqs.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: f.answer,
      },
    })),
  };

  const faqItems = topic.faqs.map((f) => ({ q: f.question, a: f.answer }));

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
            <li>
              <Link href="/" className="hover:text-[#16A34A]">Home</Link>
            </li>
            <li>/</li>
            <li>
              <Link href="/resources" className="hover:text-[#16A34A]">Learning Resources</Link>
            </li>
            <li>/</li>
            <li className="text-[#0B2545] font-semibold truncate max-w-[200px] sm:max-w-none" aria-current="page">
              {topic.title}
            </li>
          </ol>
        </nav>

        {/* Header */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm mb-10 animate-fade-in-up">
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#DCFCE7] text-[#15803D]">
              {topic.badge}
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-slate-100 text-[#0B2545]">
              {topic.difficulty}
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-slate-100 text-slate-600 flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-slate-400" aria-hidden="true" />
              {topic.readTime}
            </span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-extrabold text-[#0B2545] tracking-tight leading-tight">
            {topic.title}
          </h1>
          <p className="mt-3 text-sm sm:text-base text-[#1E293B]/80 max-w-3xl leading-relaxed">
            {topic.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Main Body */}
          <div className="lg:col-span-8 space-y-8">
            {topic.sections.map((sec, idx) => (
              <section
                key={sec.id}
                id={sec.id}
                className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-4 card-hover-lift reveal-on-scroll"
              >
                <div className="flex items-center gap-3 border-b border-slate-100 pb-3">
                  <span className="w-8 h-8 rounded-lg bg-[#DCFCE7] text-[#16A34A] flex items-center justify-center font-bold text-sm shrink-0">
                    {idx + 1}
                  </span>
                  <h2 className="text-lg sm:text-xl font-bold text-[#0B2545]">{sec.title}</h2>
                </div>
                <p className="text-sm text-[#1E293B]/85 leading-relaxed">{sec.summary}</p>
                <ul className="space-y-2 text-xs sm:text-sm text-[#1E293B]">
                  {sec.points.map((pt) => (
                    <li key={pt} className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#16A34A] mt-2 shrink-0" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </section>
            ))}

            {/* Hypothetical Example Box */}
            {topic.hypotheticalExample && (
              <section className="bg-[#0B2545]/5 rounded-2xl p-6 sm:p-7 border border-[#0B2545]/15 space-y-2.5 reveal-on-scroll">
                <div className="flex items-center gap-2 text-[#0B2545]">
                  <Lightbulb className="w-5 h-5 text-[#16A34A] shrink-0" aria-hidden="true" />
                  <h2 className="text-base sm:text-lg font-bold">
                    {topic.hypotheticalExample.heading}
                  </h2>
                </div>
                <p className="text-xs sm:text-sm text-[#1E293B]/85 leading-relaxed">
                  {topic.hypotheticalExample.body}
                </p>
                <p className="text-[11px] text-slate-500">
                  Note: Illustrative hypothetical example strictly for conceptual understanding — not a trading recommendation.
                </p>
              </section>
            )}

            {/* Official Market & Regulatory References */}
            {topic.officialReferences && topic.officialReferences.length > 0 && (
              <section className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs space-y-3 reveal-on-scroll">
                <h2 className="text-base font-bold text-[#0B2545]">
                  Official Indian Market &amp; Regulatory References
                </h2>
                <ul className="space-y-2 text-xs sm:text-sm">
                  {topic.officialReferences.map((ref) => (
                    <li key={ref.url}>
                      <a
                        href={ref.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-[#0B2545] hover:text-[#16A34A] hover:underline font-medium"
                      >
                        <span>{ref.label}</span>
                        <ExternalLink className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                      </a>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {/* Educational Disclaimer */}
            <div className="bg-amber-50 rounded-2xl p-5 border border-amber-200 text-xs text-amber-900 leading-relaxed reveal-on-scroll">
              <div className="flex items-start gap-3">
                <ShieldAlert className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <strong className="font-bold">Educational Content Only: </strong>
                  Published strictly for stock market literacy. Zero stock tips, buy/sell recommendations, or personalized investment advice.
                </div>
              </div>
            </div>

            {/* 3 Page-Specific SEO FAQs */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs reveal-on-scroll">
              <h2 className="text-xl sm:text-2xl font-bold text-[#0B2545] mb-2">
                Frequently Asked Questions
              </h2>
              <p className="text-xs text-slate-500 mb-5">
                Key clarifications related to {topic.title}.
              </p>
              <AccordionFaq items={faqItems} defaultOpenIndex={null} />
            </div>
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-4 space-y-6">
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs lg:sticky lg:top-28 reveal-on-scroll">
              <h2 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                In This Guide
              </h2>
              <ul className="space-y-2 text-xs font-semibold text-[#1E293B]">
                {topic.sections.map((sec) => (
                  <li key={sec.id}>
                    <a
                      href={`#${sec.id}`}
                      className="hover:text-[#16A34A] hover:underline flex items-center gap-2 py-1"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#16A34A]" />
                      <span>{sec.title}</span>
                    </a>
                  </li>
                ))}
              </ul>

              <div className="mt-6 pt-5 border-t border-slate-100">
                <h2 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                  Related Guides &amp; Tools
                </h2>
                <div className="space-y-2">
                  {topic.relatedLinks.map((rl) => (
                    <Link
                      key={rl.href}
                      href={rl.href}
                      className="block p-2.5 rounded-lg bg-[#F8FAFC] hover:bg-[#DCFCE7] hover:text-[#15803D] text-xs font-semibold text-[#0B2545] transition-colors"
                    >
                      {rl.title} &rarr;
                    </Link>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-5 border-t border-slate-100">
                <div className="bg-[#0B2545] text-white p-5 rounded-xl text-center space-y-3">
                  <BookOpen className="w-8 h-8 text-[#22C55E] mx-auto" aria-hidden="true" />
                  <h3 className="text-sm font-bold">Online Course Tracks</h3>
                  <p className="text-xs text-slate-300">
                    Study structured market concepts and risk management online with Stock Market Mumbai.
                  </p>
                  <div className="flex flex-col gap-2">
                    <Link
                      href="/our-packages"
                      className="btn-smooth block touch-target py-2.5 px-4 rounded-lg bg-[#16A34A] hover:bg-[#15803D] text-white text-xs font-bold"
                    >
                      View Plans
                    </Link>
                    <Link
                      href="/our-services"
                      className="text-[11px] font-semibold text-slate-300 hover:text-white hover:underline"
                    >
                      Explore Online Services &rarr;
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
