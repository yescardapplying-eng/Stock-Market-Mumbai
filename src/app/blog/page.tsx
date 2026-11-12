import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Clock, BookOpen } from 'lucide-react';
import AccordionFaq from '@/components/ui/AccordionFaq';
import { BLOG_POSTS } from '@/data/blogArticles';

export const metadata: Metadata = {
  title: 'Mumbai Stock Market Blog | Educational Trading Articles',
  description:
    'Read educational articles on risk management, price action, option chain analysis, and beginner trading roadmaps for Mumbai learners.',
  alternates: { canonical: 'https://stockmarketmumbai.in/blog' },
};

const BLOG_FAQS = [
  {
    q: 'Are blog articles on Stock Market Mumbai meant as stock recommendations?',
    a: 'No. Every article is strictly educational and focuses on risk control, chart concepts, and market mechanics.',
  },
  {
    q: 'How often are Mumbai trading guides updated?',
    a: 'Our academic team updates guides regularly to reflect current NSE settlement rules, option chain behavior, and risk practices.',
  },
  {
    q: 'Can I request a topic for your next educational article?',
    a: 'Yes! Use our Contact Us form to suggest market concepts you would like explained clearly.',
  },
];

export default function BlogIndexPage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: BLOG_FAQS.map((f) => ({
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
            <li className="text-[#0B2545] font-semibold">Blog</li>
          </ol>
        </nav>

        <div className="text-center max-w-2xl mx-auto mb-12 animate-fade-in-up">
          <span className="inline-block px-3.5 py-1 rounded-full text-xs font-bold uppercase bg-[#DCFCE7] text-[#15803D] mb-3">
            Mumbai Market Blog
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0B2545]">
            Educational Articles
          </h1>
          <p className="mt-3 text-sm sm:text-base text-[#1E293B]/80">
            Practical reading on capital protection, price action, and derivatives basics.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-7 mb-16">
          {BLOG_POSTS.map((post, idx) => (
            <article
              key={post.slug}
              className={`bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs card-hover-lift reveal-on-scroll stagger-${(idx % 4) + 1} flex flex-col justify-between`}
            >
              <div>
                <div className="flex items-center justify-between text-xs text-slate-500 mb-3">
                  <span className="px-2.5 py-0.5 rounded-full bg-[#DCFCE7] text-[#15803D] font-bold">
                    {post.category}
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    {post.readTime}
                  </span>
                </div>
                <h2 className="text-xl font-bold text-[#0B2545] mb-2">{post.title}</h2>
                <p className="text-sm text-slate-600 mb-5 leading-relaxed">{post.excerpt}</p>
              </div>
              <Link
                href={`/blog/${post.slug}`}
                className="btn-smooth inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl text-xs font-bold bg-[#16A34A] hover:bg-[#15803D] text-white w-fit"
              >
                <BookOpen className="w-3.5 h-3.5" />
                <span>Read More</span>
              </Link>
            </article>
          ))}
        </div>

        <section className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm max-w-4xl mx-auto reveal-on-scroll">
          <h2 className="text-2xl font-extrabold text-[#0B2545] text-center mb-6">
            Blog FAQs
          </h2>
          <AccordionFaq items={BLOG_FAQS} defaultOpenIndex={null} />
        </section>
      </div>
    </div>
  );
}

