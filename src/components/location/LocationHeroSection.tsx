'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  BookOpen,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Activity,
  ChevronRight,
  Home,
  MapPin,
} from 'lucide-react';
import { LocationLandingPage } from '@/data/locationLandingPages';

interface LocationHeroSectionProps {
  location: LocationLandingPage;
}

const SAMPLE_STUDY_EXAMPLES = [
  {
    topic: 'Position Sizing Example',
    question: 'On a hypothetical ₹1,00,000 study capital with 1% max risk, how is quantity calculated?',
    mentorReply: 'With a 25-point stop-loss (hypothetical): Position Size = ₹1,000 ÷ 25 = 40 shares.',
    metricLabel: 'Sample Size',
    metricValue: '40 Qty | Risk ₹1,000',
    riskTag: 'R:R 1:2.5',
  },
  {
    topic: 'Option Chain Concept',
    question: 'What does rising Put Open Interest at a strike price indicate in option chain study?',
    mentorReply: 'In conceptual analysis, higher Put OI is studied as a possible support reference zone alongside price.',
    metricLabel: 'Sample PCR',
    metricValue: '1.18 (Concept Study)',
    riskTag: 'OI Study',
  },
  {
    topic: 'Drawdown Discipline',
    question: 'What is the purpose of setting a daily drawdown cap during practice?',
    mentorReply: 'Stopping after a predefined daily limit helps prevent emotional decisions and protects study discipline.',
    metricLabel: 'Risk Rule',
    metricValue: '1%–2% Cap Example',
    riskTag: 'Max Risk 1%',
  },
  {
    topic: 'Volume Confirmation',
    question: 'Why do technical analysts compare breakout candles against average volume?',
    mentorReply: 'Higher relative volume helps learners distinguish stronger participation from low-volume false moves.',
    metricLabel: 'Sample Vol',
    metricValue: '1.8x Avg Volume',
    riskTag: 'Trend Study',
  },
];

export default function LocationHeroSection({ location }: LocationHeroSectionProps) {
  const [activeChatIndex, setActiveChatIndex] = useState(0);
  const [studyTicks, setStudyTicks] = useState({
    sampleLevel: 24500,
    riskCap: '1.0%',
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveChatIndex((prev) => (prev + 1) % SAMPLE_STUDY_EXAMPLES.length);
      setStudyTicks((prev) => ({
        sampleLevel: prev.sampleLevel === 24500 ? 24540 : 24500,
        riskCap: prev.riskCap === '1.0%' ? '0.5%–1%' : '1.0%',
      }));
    }, 3200);
    return () => clearInterval(interval);
  }, []);

  const currentChat = SAMPLE_STUDY_EXAMPLES[activeChatIndex];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#0B2545] via-[#091E3A] to-[#071A33] text-white pt-6 pb-16 lg:pt-8 lg:pb-22">
      {/* Subtle Background Grid */}
      <div
        className="absolute inset-0 opacity-10 bg-[radial-gradient(#16A34A_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Navigation */}
        <nav
          aria-label="Breadcrumb"
          className="mb-6 flex items-center space-x-2 text-xs text-slate-300"
        >
          <Link
            href="/"
            className="flex items-center gap-1 hover:text-[#4ADE80] transition-colors"
          >
            <Home className="w-3.5 h-3.5" aria-hidden="true" />
            <span>Home</span>
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-500" aria-hidden="true" />
          <Link
            href="/service-areas"
            className="hover:text-[#4ADE80] transition-colors"
          >
            Service Areas
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-500" aria-hidden="true" />
          <span className="text-[#4ADE80] font-semibold truncate">
            {location.name}
          </span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column */}
          <div className="lg:col-span-6 space-y-5 text-center lg:text-left animate-fade-in-up">
            {/* Tagline Badge (max 5 words) */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#16A34A]/20 border border-[#16A34A]/40 text-[#4ADE80] text-xs sm:text-sm font-semibold">
              <ShieldCheck className="w-4 h-4 shrink-0 text-[#22C55E]" aria-hidden="true" />
              <span>{location.tagline}</span>
            </div>

            {/* Localized H1 */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.15]">
              Online Stock Market Classes in {location.name}
            </h1>

            {/* 15-Word Subheading */}
            <p className="text-sm sm:text-base lg:text-lg text-slate-300 leading-relaxed max-w-xl mx-auto lg:mx-0">
              {location.intro}
            </p>

            {/* Location & Region Badge */}
            <div className="inline-flex items-center gap-1.5 text-xs text-slate-300 bg-white/5 border border-white/10 px-3 py-1 rounded-full">
              <MapPin className="w-3.5 h-3.5 text-[#4ADE80]" aria-hidden="true" />
              <span>
                {location.region} • {location.state} (100% Online Access)
              </span>
            </div>

            {/* 4 Key Educational Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1 text-xs sm:text-sm text-slate-200 text-left max-w-lg mx-auto lg:mx-0">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#22C55E] shrink-0" aria-hidden="true" />
                <span>Zero Stock Tips or Calls</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#22C55E] shrink-0" aria-hidden="true" />
                <span>100% Online Structured Classes</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#22C55E] shrink-0" aria-hidden="true" />
                <span>Risk Management Focus</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#22C55E] shrink-0" aria-hidden="true" />
                <span>Accessible from {location.name}</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-3">
              <Link
                href="/our-packages"
                className="btn-smooth touch-target w-full sm:w-auto px-7 py-3.5 rounded-xl font-bold text-sm text-white bg-[#16A34A] hover:bg-[#15803D] shadow-lg flex items-center justify-center gap-2"
              >
                <BookOpen className="w-4 h-4" aria-hidden="true" />
                <span>View Plans</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>

              <Link
                href="/contact-us"
                className="btn-smooth touch-target w-full sm:w-auto px-7 py-3.5 rounded-xl font-bold text-sm text-white bg-white/10 hover:bg-white/15 border border-white/25 flex items-center justify-center gap-2"
              >
                <span>Contact Us</span>
              </Link>
            </div>

            <p className="text-xs text-slate-400 pt-1">
              Live online interactive mentorship with weekend and evening batches for learners across {location.name}.
            </p>
          </div>

          {/* Right Column: Live Study Desk Demo */}
          <div className="lg:col-span-6 flex justify-center animate-fade-in-up stagger-2">
            <div className="relative w-full max-w-lg bg-gradient-to-br from-white/12 to-white/5 border border-white/15 rounded-3xl p-4 sm:p-6 backdrop-blur-md shadow-2xl">
              <div
                className="absolute -top-8 -right-8 w-32 h-32 bg-[#16A34A]/25 rounded-full blur-3xl pointer-events-none"
                aria-hidden="true"
              />

              {/* Top Bar */}
              <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-3.5 gap-2">
                <div className="flex items-center gap-2 min-w-0">
                  <div className="w-8 h-8 rounded-lg bg-[#16A34A] flex items-center justify-center text-white shrink-0">
                    <Activity className="w-4 h-4" aria-hidden="true" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs font-bold text-white flex items-center gap-1.5 truncate">
                      <span>STUDY DESK DEMO</span>
                      <span className="text-[10px] px-1.5 py-0.5 rounded bg-white/10 text-[#4ADE80]">
                        {location.name}
                      </span>
                    </div>
                    <div className="text-[10px] text-slate-300 truncate">
                      Hypothetical Chart &amp; Q&amp;A Concept Study
                    </div>
                  </div>
                </div>
                <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#4ADE80] bg-[#16A34A]/15 px-2.5 py-1 rounded-full border border-[#16A34A]/30 shrink-0">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#4ADE80]" />
                  Live Online
                </span>
              </div>

              {/* Simulated Metrics Strip */}
              <div className="grid grid-cols-3 gap-2 mb-3.5 text-center">
                <div className="p-2 rounded-xl bg-[#071A33]/80 border border-white/10">
                  <span className="text-[10px] text-slate-400 block">Sample Level</span>
                  <span className="text-xs sm:text-sm font-extrabold text-white tabular-nums">
                    {studyTicks.sampleLevel.toLocaleString('en-IN')}
                  </span>
                </div>
                <div className="p-2 rounded-xl bg-[#071A33]/80 border border-white/10">
                  <span className="text-[10px] text-slate-400 block">Risk Per Trade</span>
                  <span className="text-xs sm:text-sm font-extrabold text-[#4ADE80] tabular-nums">
                    {studyTicks.riskCap}
                  </span>
                </div>
                <div className="p-2 rounded-xl bg-[#071A33]/80 border border-white/10">
                  <span className="text-[10px] text-slate-400 block">Delivery</span>
                  <span className="text-xs sm:text-sm font-extrabold text-white">
                    100% Online
                  </span>
                </div>
              </div>

              {/* Active Q&A Example */}
              <div className="bg-[#071A33]/90 rounded-2xl p-4 border border-white/10 space-y-2.5">
                <div className="flex items-center justify-between text-[11px]">
                  <span className="text-[#4ADE80] font-bold">
                    {currentChat.topic}
                  </span>
                  <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-[#16A34A]/20 text-[#4ADE80] border border-[#16A34A]/30">
                    {currentChat.riskTag}
                  </span>
                </div>
                <div className="text-xs text-slate-200">
                  <span className="text-slate-400 font-semibold">Q: </span>
                  {currentChat.question}
                </div>
                <div className="text-xs text-slate-300 pt-1 border-t border-white/10 leading-relaxed">
                  <span className="text-[#4ADE80] font-bold">Mentor Note: </span>
                  {currentChat.mentorReply}
                </div>
              </div>

              {/* Footnote */}
              <p className="text-[10px] text-slate-400 text-center mt-3">
                Educational demonstration only. No financial advisory or stock tips.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
