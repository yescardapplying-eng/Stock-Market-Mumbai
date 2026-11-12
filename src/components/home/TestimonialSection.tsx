'use client';

import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, ShieldCheck, CheckCircle } from 'lucide-react';

export interface TestimonialItem {
  id: string;
  name: string;
  initials: string;
  avatarBg: string;
  location: string;
  date: string;
  courseCompleted: string;
  feedback: string;
  rating: number;
}

const GOOGLE_REVIEWS: TestimonialItem[] = [
  {
    id: 'rev-1',
    name: 'Siddharth Joshi',
    initials: 'SJ',
    avatarBg: 'bg-[#0B2545]',
    location: 'Andheri West, Mumbai',
    date: '4 days ago',
    courseCompleted: 'Our Pro Plan (6 Months)',
    feedback:
      'Mumbai me itne saare tip providers dekhne ke baad finally ek genuine educational academy mili. Yahan sirf price action aur 1% risk control sikhate hain. Charts ab bilkul clear samajh aate hain.',
    rating: 5,
  },
  {
    id: 'rev-2',
    name: 'Meera Sawant',
    initials: 'MS',
    avatarBg: 'bg-[#16A34A]',
    location: 'Bandra, Mumbai',
    date: '1 week ago',
    courseCompleted: 'Basic Plan (1 Month)',
    feedback:
      'Started as a complete beginner from Bandra. The mentors explain candlestick geometry and stop-loss calculation in simple English and Hindi. Zero fake promises, 100% real knowledge.',
    rating: 5,
  },
  {
    id: 'rev-3',
    name: 'Rohan Parab',
    initials: 'RP',
    avatarBg: 'bg-[#1D4ED8]',
    location: 'Dadar, Mumbai',
    date: '2 weeks ago',
    courseCompleted: 'Ultra Pro Plan (1 Year)',
    feedback:
      'Pehle bina risk management ke capital lose hota tha. Stock Market Mumbai ke mentorship session me position sizing aur journaling seekh ke apna loss control karna aa gaya. Worth every rupee.',
    rating: 5,
  },
  {
    id: 'rev-4',
    name: 'Ananya Nair',
    initials: 'AN',
    avatarBg: 'bg-[#0F766E]',
    location: 'Powai, Mumbai',
    date: '2 weeks ago',
    courseCompleted: 'Our Pro Plan (6 Months)',
    feedback:
      'Option Chain aur Open Interest data pehle bahut confusing lagta tha. Weekend live workshops me Theta decay aur OI analysis bahut ache se samjhaya. Very ethical Mumbai institute.',
    rating: 5,
  },
  {
    id: 'rev-5',
    name: 'Karan Malhotra',
    initials: 'KM',
    avatarBg: 'bg-[#B45309]',
    location: 'Lower Parel, Mumbai',
    date: '3 weeks ago',
    courseCompleted: 'Ultra Pro Plan (1 Year)',
    feedback:
      'Working professional hoon Lower Parel me. Recorded HD lectures aur 1-on-1 weekly doubt calls ne bahut help ki. Koi buy-sell tips nahi dete, khud analysis karna sikhate hain.',
    rating: 5,
  },
  {
    id: 'rev-6',
    name: 'Priyanka Chavan',
    initials: 'PC',
    avatarBg: 'bg-[#7E22CE]',
    location: 'Thane West, MMR',
    date: '1 month ago',
    courseCompleted: 'Basic Plan (1 Month)',
    feedback:
      'Marathi aur Hindi dono me doubts clear karne ka option bahut accha hai. Beginners ke liye best stock market education platform in Mumbai without any market hype.',
    rating: 5,
  },
  {
    id: 'rev-7',
    name: 'Vivek Shah',
    initials: 'VS',
    avatarBg: 'bg-[#0369A1]',
    location: 'Borivali, Mumbai',
    date: '1 month ago',
    courseCompleted: 'Our Pro Plan (6 Months)',
    feedback:
      'Before joining Stock Market Mumbai, FOMO aur overtrading meri sabse badi problem thi. Trading psychology aur daily drawdown rules ne mera mindset completely change kar diya.',
    rating: 5,
  },
  {
    id: 'rev-8',
    name: 'Nikhil Kulkarni',
    initials: 'NK',
    avatarBg: 'bg-[#15803D]',
    location: 'Vashi, Navi Mumbai',
    date: '1 month ago',
    courseCompleted: 'Ultra Pro Plan (1 Year)',
    feedback:
      'Crystal-clear explanation of multi-timeframe structure and hedging models. Genuine academic environment with proper PDFs and assignments. Highly recommended across Mumbai.',
    rating: 5,
  },
];

export default function TestimonialSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-swipe every 2 seconds as requested
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % GOOGLE_REVIEWS.length);
    }, 2000);
    return () => clearInterval(timer);
  }, [isPaused]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? GOOGLE_REVIEWS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % GOOGLE_REVIEWS.length);
  };

  const current = GOOGLE_REVIEWS[currentIndex];

  return (
    <section className="py-14 sm:py-20 bg-[#F8FAFC] border-b border-slate-200" aria-label="Student Reviews">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14 reveal-on-scroll">
          <span className="inline-block px-3.5 py-1 rounded-full text-xs font-bold tracking-wider uppercase bg-[#DCFCE7] text-[#15803D] mb-3">
            Google Reviews • 5.0 ★
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0B2545] tracking-tight">
            Mumbai Learner Reviews
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#1E293B]/80">
            Verified student experiences across Mumbai and Navi Mumbai cohorts.
          </p>
        </div>

        <div
          className="max-w-3xl mx-auto reveal-on-scroll"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-md relative min-h-[290px] flex flex-col justify-between overflow-hidden card-hover-lift">
            {/* Google Badge */}
            <div className="sm:absolute sm:top-6 sm:right-6 mb-4 sm:mb-0 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F8FAFC] border border-slate-200 text-[11px] font-semibold text-[#1E293B] w-fit">
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                />
              </svg>
              <span>Google Review</span>
            </div>

            <div key={current.id} className="animate-slide-swipe">
              <div className="flex items-center gap-3.5 mb-4">
                <div
                  className={`w-12 h-12 rounded-full ${current.avatarBg} text-white font-bold flex items-center justify-center text-base shadow-sm shrink-0`}
                >
                  {current.initials}
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <h4 className="text-base font-bold text-[#0B2545]">{current.name}</h4>
                    <CheckCircle className="w-4 h-4 text-blue-500 fill-blue-50" />
                  </div>
                  <div className="text-xs text-slate-500 flex flex-wrap items-center gap-1.5">
                    <span>{current.location}</span>
                    <span>•</span>
                    <span>{current.date}</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-1 mb-3">
                {[...Array(current.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
                <span className="text-xs font-semibold text-[#16A34A] ml-1.5">
                  {current.courseCompleted}
                </span>
              </div>

              <p className="text-sm sm:text-base text-[#1E293B] leading-relaxed">
                &ldquo;{current.feedback}&rdquo;
              </p>
            </div>

            <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
              <span className="inline-flex items-center gap-1 text-[#16A34A] font-semibold">
                <ShieldCheck className="w-4 h-4" />
                Verified Mumbai Learner
              </span>
              <span className="text-slate-400 text-[11px]">
                Review {currentIndex + 1} of {GOOGLE_REVIEWS.length}
              </span>
            </div>
          </div>

          <div className="flex items-center justify-between mt-6">
            <button
              type="button"
              onClick={handlePrev}
              className="touch-target p-2.5 rounded-full bg-white border border-slate-200 text-[#0B2545] hover:bg-[#0B2545] hover:text-white transition-all shadow-xs cursor-pointer"
              aria-label="Previous Review"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2">
              {GOOGLE_REVIEWS.map((rev, idx) => (
                <button
                  key={rev.id}
                  type="button"
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2 rounded-full transition-all duration-200 cursor-pointer ${
                    currentIndex === idx ? 'w-6 bg-[#16A34A]' : 'w-2 bg-slate-300 hover:bg-slate-400'
                  }`}
                  aria-label={`Review ${idx + 1}`}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={handleNext}
              className="touch-target p-2.5 rounded-full bg-white border border-slate-200 text-[#0B2545] hover:bg-[#0B2545] hover:text-white transition-all shadow-xs cursor-pointer"
              aria-label="Next Review"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

