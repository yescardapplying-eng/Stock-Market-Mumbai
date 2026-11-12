import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function FinalCTA() {
  return (
    <section className="py-14 sm:py-20 bg-[#0B2545] text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5 reveal-on-scroll">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight">
          Start Learning With Discipline
        </h2>
        <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto">
          Join Mumbai learners mastering charts, option chain data, and strict capital risk control.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-2">
          <Link
            href="/our-packages"
            className="btn-smooth touch-target w-full sm:w-auto px-7 py-3.5 rounded-xl font-bold text-sm bg-[#16A34A] hover:bg-[#15803D] text-white inline-flex items-center justify-center gap-2 shadow-lg"
          >
            <span>View Plans</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="/contact-us"
            className="btn-smooth touch-target w-full sm:w-auto px-7 py-3.5 rounded-xl font-bold text-sm bg-white/10 hover:bg-white/20 border border-white/25 text-white inline-flex items-center justify-center"
          >
            <span>Contact Us</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

