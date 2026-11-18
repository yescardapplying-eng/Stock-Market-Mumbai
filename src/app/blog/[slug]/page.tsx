import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Clock, ShieldAlert, Calendar, BookOpen, Calculator } from 'lucide-react';
import AccordionFaq from '@/components/ui/AccordionFaq';
import { BLOG_POSTS } from '@/data/blogArticles';
import {
  DEFAULT_OG_IMAGE,
  SITE_NAME,
  SITE_URL,
  buildBreadcrumbSchema,
  buildPageMetadata,
  canonicalUrl,
  safeJsonLd,
} from '@/lib/seo';

export async function generateStaticParams() {
  return BLOG_POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) {
    return {
      title: { absolute: 'Article Not Found | Stock Market Mumbai' },
      robots: { index: false, follow: true },
    };
  }

  return buildPageMetadata({
    title: post.seoTitle,
    description: post.excerpt,
    path: `/blog/${post.slug}`,
    type: 'article',
    publishedTime: post.publishedDate,
    modifiedTime: post.lastUpdated,
  });
}

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) notFound();

  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: 'Home', path: '/' },
    { name: 'Blog', path: '/blog' },
    { name: post.title, path: `/blog/${post.slug}` },
  ]);

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    image: `${SITE_URL}${DEFAULT_OG_IMAGE}`,
    datePublished: post.publishedDate,
    dateModified: post.lastUpdated,
    author: {
      '@type': 'Organization',
      name: post.authorName,
      url: SITE_URL,
    },
    publisher: {
      '@type': 'Organization',
      name: SITE_NAME,
      url: SITE_URL,
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_URL}/images/brand/stock-market-mumbai-logo.png`,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': canonicalUrl(`/blog/${post.slug}`),
    },
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: post.faqs.map((f) => ({
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
        dangerouslySetInnerHTML={{ __html: safeJsonLd(articleSchema) }}
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
            <li><Link href="/blog" className="hover:text-[#16A34A]">Blog</Link></li>
            <li>/</li>
            <li className="text-[#0B2545] font-semibold truncate max-w-[180px] sm:max-w-none" aria-current="page">
              {post.title}
            </li>
          </ol>
        </nav>

        <article className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm mb-10 animate-fade-in-up">
          <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500 mb-4">
            <span className="px-3 py-1 rounded-full bg-[#DCFCE7] text-[#15803D] font-bold">
              {post.category}
            </span>
            <span className="inline-flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" aria-hidden="true" />
              {post.readTime}
            </span>
            <span className="inline-flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5" aria-hidden="true" />
              Published: {post.publishedDate}
            </span>
            <span>Updated: {post.lastUpdated}</span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-extrabold text-[#0B2545] mb-3 leading-tight">
            {post.title}
          </h1>
          <p className="text-xs text-slate-400 mb-4">By {post.authorName}</p>
          <p className="text-sm sm:text-base text-slate-600 mb-8 leading-relaxed">{post.excerpt}</p>

          <div className="space-y-6">
            {post.sections.map((sec) => (
              <section key={sec.heading} className="border-t border-slate-100 pt-5">
                <h2 className="text-lg sm:text-xl font-bold text-[#0B2545] mb-2">{sec.heading}</h2>
                <p className="text-sm sm:text-base text-[#1E293B]/85 leading-relaxed">{sec.body}</p>
              </section>
            ))}
          </div>

          {/* Contextual Related Guide & Tool Links */}
          <div className="mt-8 pt-6 border-t border-slate-100 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link
              href={post.relatedGuide.href}
              className="p-4 rounded-2xl bg-[#F8FAFC] border border-slate-200 hover:border-[#16A34A] transition-colors flex items-start gap-3"
            >
              <BookOpen className="w-5 h-5 text-[#16A34A] shrink-0 mt-0.5" aria-hidden="true" />
              <div>
                <span className="text-[11px] font-bold uppercase text-slate-400 block">
                  Comprehensive Guide
                </span>
                <span className="text-sm font-bold text-[#0B2545]">{post.relatedGuide.title} &rarr;</span>
              </div>
            </Link>
            <Link
              href={post.relatedTool.href}
              className="p-4 rounded-2xl bg-[#F8FAFC] border border-slate-200 hover:border-[#16A34A] transition-colors flex items-start gap-3"
            >
              <Calculator className="w-5 h-5 text-[#16A34A] shrink-0 mt-0.5" aria-hidden="true" />
              <div>
                <span className="text-[11px] font-bold uppercase text-slate-400 block">
                  Related Calculator
                </span>
                <span className="text-sm font-bold text-[#0B2545]">{post.relatedTool.title} &rarr;</span>
              </div>
            </Link>
          </div>

          <div className="mt-8 bg-amber-50 rounded-2xl p-4 border border-amber-200 text-xs text-amber-900 flex items-start gap-2.5">
            <ShieldAlert className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" aria-hidden="true" />
            <span>
              <strong>Educational Note:</strong> Strictly informational. Numerical illustrations are hypothetical examples only. Stock Market Mumbai provides zero stock tips, buy/sell calls, or investment advice.
            </span>
          </div>
        </article>

        <section className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm reveal-on-scroll">
          <h2 className="text-xl sm:text-2xl font-bold text-[#0B2545] mb-6">
            Article FAQs
          </h2>
          <AccordionFaq items={post.faqs} defaultOpenIndex={null} />
        </section>
      </div>
    </div>
  );
}
