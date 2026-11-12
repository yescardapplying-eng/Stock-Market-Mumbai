import React from 'react';
import Link from 'next/link';
import { BookOpen, ArrowRight, Clock } from 'lucide-react';
import { BLOG_POSTS } from '@/data/blogArticles';

export default function BlogArticlesSection() {
  return (
    <section className="py-14 sm:py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12 reveal-on-scroll">
          <div>
            <span className="inline-block px-3.5 py-1 rounded-full text-xs font-bold tracking-wider uppercase bg-[#0B2545]/10 text-[#0B2545] mb-2">
              Mumbai Insights
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0B2545] tracking-tight">
              Educational Guides
            </h2>
          </div>

          <Link
            href="/blog"
            className="btn-smooth touch-target px-5 py-2.5 rounded-xl text-sm font-bold bg-[#16A34A] hover:bg-[#15803D] text-white inline-flex items-center justify-center gap-2 w-fit"
          >
            <span>View Blog</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {BLOG_POSTS.map((post, idx) => (
            <article
              key={post.slug}
              className={`bg-[#F8FAFC] rounded-2xl p-6 border border-slate-200 card-hover-lift reveal-on-scroll stagger-${idx + 1} flex flex-col justify-between`}
            >
              <div>
                <div className="flex items-center justify-between text-[11px] font-semibold text-slate-500 mb-3">
                  <span className="px-2.5 py-0.5 rounded-full bg-[#DCFCE7] text-[#15803D] font-bold">
                    {post.category}
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {post.readTime}
                  </span>
                </div>
                <h3 className="text-base font-bold text-[#0B2545] mb-2 leading-snug">
                  {post.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#1E293B]/80 leading-relaxed mb-5">
                  {post.excerpt}
                </p>
              </div>

              <Link
                href={`/blog/${post.slug}`}
                className="btn-smooth inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-bold bg-[#0B2545] hover:bg-[#16A34A] text-white w-fit"
              >
                <BookOpen className="w-3.5 h-3.5" />
                <span>Read More</span>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

