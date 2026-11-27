import React from 'react';
import Link from 'next/link';
import { ArrowRight, BookOpen } from 'lucide-react';
import { LocationLandingPage } from '@/data/locationLandingPages';

interface LocationFinalCTAProps {
  location: LocationLandingPage;
}

export default function LocationFinalCTA({ location }: LocationFinalCTAProps) {
  return (
    <section className="py-14 sm:py-20 bg-[#0B2545] text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5 reveal-on-scroll">
        <span className="inline-block px-3.5 py-1 rounded-full text-xs font-bold tracking-wider uppercase bg-[#16A34A]/20 border border-[#16A34A]/40 text-[#4ADE80]">
          Enroll Online From {location.name}
        </span>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight">
          Start Learning With Discipline in {location.name}
        </h2>
        <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto">
          Join students, professionals, and traders from {location.name} ({location.state}) mastering charts, option chain analysis, and strict risk control without advisory noise.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-2">
          <Link
            href="/our-packages"
            className="btn-smooth touch-target w-full sm:w-auto px-7 py-3.5 rounded-xl font-bold text-sm bg-[#16A34A] hover:bg-[#15803D] text-white inline-flex items-center justify-center gap-2 shadow-lg"
          >
            <BookOpen className="w-4 h-4" />
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
        <p className="text-xs text-slate-400 pt-2">
          100% online education platform • Zero stock tips or recommendations • SEBI compliant learning.
        </p>
      </div>
    </section>
  );
}
