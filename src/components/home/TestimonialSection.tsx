'use client';

import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, MessageSquareQuote, Info } from 'lucide-react';

export interface FeedbackItem {
  id: string;
  name: string;
  initials: string;
  avatarBg: string;
  area: string;
  track: string;
  feedback: string;
}

const LEARNER_FEEDBACK_ITEMS: FeedbackItem[] = [
  {
    id: 'fb-1',
    name: 'Learner Feedback — Andheri',
    initials: 'LF',
    avatarBg: 'bg-[#0B2545]',
    area: 'Andheri West, Mumbai (Online)',
    track: 'Our Pro Plan (6 Months)',
    feedback:
      'Focused completely on chart structure, price action concepts, and position sizing math without distracting stock tips or calls.',
  },
  {
    id: 'fb-2',
    name: 'Learner Feedback — Bandra',
    initials: 'LF',
    avatarBg: 'bg-[#16A34A]',
    area: 'Bandra, Mumbai (Online)',
    track: 'Basic Plan (1 Month)',
    feedback:
      'Started from zero financial background. Online lessons explained candlesticks, order types, and stop-loss calculation in plain, easy-to-follow steps.',
  },
  {
    id: 'fb-3',
    name: 'Learner Feedback — Dadar',
    initials: 'LF',
    avatarBg: 'bg-[#1D4ED8]',
    area: 'Dadar, Mumbai (Online)',
    track: 'Ultra Pro Plan (1 Year)',
    feedback:
      'Structured online mentorship helped build a habit of trade journaling and disciplined risk sizing instead of emotional decisions.',
  },
  {
    id: 'fb-4',
    name: 'Learner Feedback — Ghatkopar',
    initials: 'LF',
    avatarBg: 'bg-[#0F766E]',
    area: 'Ghatkopar, Mumbai (Online)',
    track: 'Our Pro Plan (6 Months)',
    feedback:
      'Option chain data, Open Interest, and Theta decay concepts were broken down conceptually using clear historical market examples.',
  },
  {
    id: 'fb-5',
    name: 'Learner Feedback — Lower Parel',
    initials: 'LF',
    avatarBg: 'bg-[#B45309]',
    area: 'Lower Parel, Mumbai (Online)',
    track: 'Ultra Pro Plan (1 Year)',
    feedback:
      'Convenient online format for working professionals. Recorded lectures and scheduled doubt sessions make revision manageable after office hours.',
  },
  {
    id: 'fb-6',
    name: 'Learner Feedback — Thane',
    initials: 'LF',
    avatarBg: 'bg-[#7E22CE]',
    area: 'Thane (Online)',
    track: 'Basic Plan (1 Month)',
    feedback:
      'Helpful bilingual explanations and zero market hype. Good starting point to learn how NSE and BSE order books actually function.',
  },
  {
    id: 'fb-7',
    name: 'Learner Feedback — Borivali',
    initials: 'LF',
    avatarBg: 'bg-[#0369A1]',
    area: 'Borivali, Mumbai (Online)',
    track: 'Our Pro Plan (6 Months)',
    feedback:
      'Modules on trading psychology, FOMO awareness, and drawdown rules brought much-needed structure to my learning routine.',
  },
  {
    id: 'fb-8',
    name: 'Learner Feedback — Mulund',
    initials: 'LF',
    avatarBg: 'bg-[#15803D]',
    area: 'Mulund, Mumbai (Online)',
    track: 'Ultra Pro Plan (1 Year)',
    feedback:
      'Clear coverage of multi-timeframe chart reading, hedging concepts, and structured study notes in an ethical online learning environment.',
  },
];

export default function TestimonialSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-swipe every 2 seconds
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % LEARNER_FEEDBACK_ITEMS.length);
    }, 2000);
    return () => clearInterval(timer);
  }, [isPaused]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? LEARNER_FEEDBACK_ITEMS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % LEARNER_FEEDBACK_ITEMS.length);
  };

  const current = LEARNER_FEEDBACK_ITEMS[currentIndex];

  return (
    <section className="py-14 sm:py-20 bg-[#F8FAFC] border-b border-slate-200" aria-label="Learner Feedback">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14 reveal-on-scroll">
          <span className="inline-block px-3.5 py-1 rounded-full text-xs font-bold tracking-wider uppercase bg-[#DCFCE7] text-[#15803D] mb-3">
            Learner Feedback
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0B2545] tracking-tight">
            What Online Learners Appreciate
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#1E293B]/80">
            Learning perspectives highlighting curriculum clarity, risk discipline, and online flexibility across Mumbai.
          </p>
        </div>

        <div
          className="max-w-3xl mx-auto reveal-on-scroll"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-md relative min-h-[260px] flex flex-col justify-between overflow-hidden card-hover-lift">
            <div className="sm:absolute sm:top-6 sm:right-6 mb-4 sm:mb-0 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F8FAFC] border border-slate-200 text-[11px] font-semibold text-[#1E293B] w-fit">
              <MessageSquareQuote className="w-3.5 h-3.5 text-[#16A34A]" aria-hidden="true" />
              <span>Course Experience</span>
            </div>

            <div key={current.id} className="animate-slide-swipe">
              <div className="flex items-center gap-3.5 mb-4">
                <div
                  className={`w-12 h-12 rounded-full ${current.avatarBg} text-white font-bold flex items-center justify-center text-sm shadow-sm shrink-0`}
                  aria-hidden="true"
                >
                  {current.initials}
                </div>
                <div>
                  <h3 className="text-base font-bold text-[#0B2545]">{current.name}</h3>
                  <div className="text-xs text-slate-500 flex flex-wrap items-center gap-1.5">
                    <span>{current.area}</span>
                    <span>•</span>
                    <span className="text-[#16A34A] font-semibold">{current.track}</span>
                  </div>
                </div>
              </div>

              <p className="text-sm sm:text-base text-[#1E293B] leading-relaxed">
                &ldquo;{current.feedback}&rdquo;
              </p>
            </div>

            <div className="mt-5 pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-2 text-xs text-slate-500">
              <span className="inline-flex items-center gap-1.5 text-slate-500">
                <Info className="w-3.5 h-3.5 text-[#0B2545] shrink-0" aria-hidden="true" />
                <span>Educational feedback only — individual learning outcomes vary; no financial returns guaranteed.</span>
              </span>
              <span className="text-slate-400 text-[11px]">
                {currentIndex + 1} / {LEARNER_FEEDBACK_ITEMS.length}
              </span>
            </div>
          </div>

          <div className="flex items-center justify-between mt-6">
            <button
              type="button"
              onClick={handlePrev}
              className="touch-target p-2.5 rounded-full bg-white border border-slate-200 text-[#0B2545] hover:bg-[#0B2545] hover:text-white transition-all shadow-xs cursor-pointer"
              aria-label="Previous Feedback"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2">
              {LEARNER_FEEDBACK_ITEMS.map((item, idx) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2 rounded-full transition-all duration-200 cursor-pointer ${
                    currentIndex === idx ? 'w-6 bg-[#16A34A]' : 'w-2 bg-slate-300 hover:bg-slate-400'
                  }`}
                  aria-label={`Feedback ${idx + 1}`}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={handleNext}
              className="touch-target p-2.5 rounded-full bg-white border border-slate-200 text-[#0B2545] hover:bg-[#0B2545] hover:text-white transition-all shadow-xs cursor-pointer"
              aria-label="Next Feedback"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
