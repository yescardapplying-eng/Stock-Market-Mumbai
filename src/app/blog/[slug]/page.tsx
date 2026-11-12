import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Clock, ShieldAlert } from 'lucide-react';
import AccordionFaq from '@/components/ui/AccordionFaq';
import { BLOG_POSTS } from '@/data/blogArticles';

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
  if (!post) return { title: 'Article Not Found' };

  return {
    title: `${post.title} | Stock Market Mumbai`,
    description: post.excerpt,
    keywords: post.keywords,
    alternates: { canonical: `https://stockmarketmumbai.in/blog/${post.slug}` },
  };
}

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) notFound();

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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema).replace(/</g, '\\u003c') }}
      />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex items-center space-x-2 text-xs text-slate-500">
            <li><Link href="/" className="hover:text-[#16A34A]">Home</Link></li>
            <li>/</li>
            <li><Link href="/blog" className="hover:text-[#16A34A]">Blog</Link></li>
            <li>/</li>
            <li className="text-[#0B2545] font-semibold truncate max-w-[180px] sm:max-w-none">{post.title}</li>
          </ol>
        </nav>

        <article className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm mb-10 animate-fade-in-up">
          <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500 mb-4">
            <span className="px-3 py-1 rounded-full bg-[#DCFCE7] text-[#15803D] font-bold">
              {post.category}
            </span>
            <span className="inline-flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              {post.readTime}
            </span>
            <span>Updated: {post.lastUpdated}</span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-extrabold text-[#0B2545] mb-4 leading-tight">
            {post.title}
          </h1>
          <p className="text-sm sm:text-base text-slate-600 mb-8 leading-relaxed">{post.excerpt}</p>

          <div className="space-y-6">
            {post.sections.map((sec) => (
              <section key={sec.heading} className="border-t border-slate-100 pt-5">
                <h2 className="text-lg sm:text-xl font-bold text-[#0B2545] mb-2">{sec.heading}</h2>
                <p className="text-sm sm:text-base text-[#1E293B]/85 leading-relaxed">{sec.body}</p>
              </section>
            ))}
          </div>

          <div className="mt-8 bg-amber-50 rounded-2xl p-4 border border-amber-200 text-xs text-amber-900 flex items-start gap-2.5">
            <ShieldAlert className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
            <span>
              <strong>Educational Note:</strong> Strictly informational. Stock Market Mumbai provides zero buy/sell tips or advisory calls.
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

