import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { BookOpen, Home, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: {
    absolute: 'Page Not Found (404) | Stock Market Mumbai',
  },
  description: 'The requested page could not be found on Stock Market Mumbai.',
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  return (
    <section className="bg-[#F8FAFC] min-h-[70vh] flex items-center py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-xl mx-auto text-center bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-sm space-y-5">
        <span className="inline-block px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#DCFCE7] text-[#15803D]">
          404 Error
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0B2545]">
          Page Not Found
        </h1>
        <p className="text-sm sm:text-base text-[#1E293B]/80 leading-relaxed">
          The page you are looking for may have moved or does not exist. Explore our online stock market courses, learning guides, or calculators below.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <Link
            href="/"
            className="btn-smooth touch-target w-full sm:w-auto px-6 py-3 rounded-xl bg-[#0B2545] hover:bg-[#13345E] text-white text-sm font-bold inline-flex items-center justify-center gap-2"
          >
            <Home className="w-4 h-4" />
            <span>Go Home</span>
          </Link>
          <Link
            href="/our-packages"
            className="btn-smooth touch-target w-full sm:w-auto px-6 py-3 rounded-xl bg-[#16A34A] hover:bg-[#15803D] text-white text-sm font-bold inline-flex items-center justify-center gap-2"
          >
            <BookOpen className="w-4 h-4" />
            <span>View Plans</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <nav aria-label="Helpful Links" className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs font-semibold text-[#0B2545]">
          <Link href="/our-services" className="hover:text-[#16A34A] hover:underline">
            Our Services
          </Link>
          <Link href="/resources" className="hover:text-[#16A34A] hover:underline">
            Learning Resources
          </Link>
          <Link href="/tools" className="hover:text-[#16A34A] hover:underline">
            Calculators
          </Link>
          <Link href="/faqs" className="hover:text-[#16A34A] hover:underline">
            FAQs
          </Link>
          <Link href="/contact-us" className="hover:text-[#16A34A] hover:underline">
            Contact Us
          </Link>
        </nav>
      </div>
    </section>
  );
}
