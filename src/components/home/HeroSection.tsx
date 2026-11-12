'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  BookOpen,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  MessageSquare,
  Activity,
  BarChart2,
  Target,
} from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

interface LiveChatFeedItem {
  id: number;
  student: string;
  area: string;
  question: string;
  mentorReply: string;
  metricLabel: string;
  metricValue: string;
  riskTag: string;
}

const LIVE_EDUCATIONAL_CHATS: LiveChatFeedItem[] = [
  {
    id: 1,
    student: 'Aarav M.',
    area: 'Andheri West',
    question: 'Capital ₹1,00,000 pe 1% risk ke saath kitni qty leni chahiye?',
    mentorReply: 'Stop-Loss 25 pts hai to Position Size = ₹1,000 ÷ 25 = 40 Qty.',
    metricLabel: 'Position Size',
    metricValue: '40 Qty | Risk ₹1,000',
    riskTag: 'R:R 1:2.5',
  },
  {
    id: 2,
    student: 'Sneha P.',
    area: 'Bandra',
    question: 'NIFTY 24,500 PE Open Interest badhne ka kya matlab hai?',
    mentorReply: 'High Put OI 24,500 pe educational support zone dikhata hai.',
    metricLabel: 'PCR Ratio',
    metricValue: '1.18 (Support Study)',
    riskTag: 'RSI 58.4',
  },
  {
    id: 3,
    student: 'Rohan K.',
    area: 'Dadar',
    question: 'Daily drawdown limit hit hone par kya karna chahiye?',
    mentorReply: '2% daily loss cap hit hote hi terminal close karke journal likhein.',
    metricLabel: 'Capital Saved',
    metricValue: '98.0% Protected',
    riskTag: 'Max Risk 1%',
  },
  {
    id: 4,
    student: 'Priya S.',
    area: 'Thane',
    question: 'Breakout candle pe volume check karna kyun zaroori hai?',
    mentorReply: '1.8x average volume fake breakout se capital bachane me help karta hai.',
    metricLabel: 'Volume Surge',
    metricValue: '1.85x Avg Vol',
    riskTag: 'Trend Clear',
  },
];

export default function HeroSection() {
  const { t } = useLanguage();
  const [activeChatIndex, setActiveChatIndex] = useState(0);
  const [studyTicks, setStudyTicks] = useState({
    niftyStudy: 24580,
    capitalSaved: 98.4,
    activeLearners: 1240,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveChatIndex((prev) => (prev + 1) % LIVE_EDUCATIONAL_CHATS.length);
      setStudyTicks((prev) => ({
        niftyStudy: prev.niftyStudy === 24580 ? 24615 : 24580,
        capitalSaved: prev.capitalSaved === 98.4 ? 98.8 : 98.4,
        activeLearners: prev.activeLearners === 1240 ? 1244 : 1240,
      }));
    }, 3200);
    return () => clearInterval(interval);
  }, []);

  const currentChat = LIVE_EDUCATIONAL_CHATS[activeChatIndex];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#0B2545] via-[#091E3A] to-[#071A33] text-white pt-10 pb-16 lg:pt-14 lg:pb-22">
      {/* Subtle Background Grid */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#16A34A_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column */}
          <div className="lg:col-span-6 space-y-5 text-center lg:text-left animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#16A34A]/20 border border-[#16A34A]/40 text-[#4ADE80] text-xs sm:text-sm font-semibold">
              <ShieldCheck className="w-4 h-4 shrink-0 text-[#22C55E]" />
              <span>{t.hero.tagline}</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.15]">
              {t.hero.heading}
            </h1>

            <p className="text-sm sm:text-base lg:text-lg text-slate-300 leading-relaxed max-w-xl mx-auto lg:mx-0">
              {t.hero.subheading}
            </p>

            {/* 4 Key Educational Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1 text-xs sm:text-sm text-slate-200 text-left max-w-lg mx-auto lg:mx-0">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#22C55E] shrink-0" />
                <span>Zero Stock Tips or Calls</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#22C55E] shrink-0" />
                <span>100% Pure Education</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#22C55E] shrink-0" />
                <span>Capital Loss Control</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#22C55E] shrink-0" />
                <span>Mumbai Live Cohorts</span>
              </div>
            </div>

            {/* Max 2-Word CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-3">
              <Link
                href="/our-packages"
                className="btn-smooth touch-target w-full sm:w-auto px-7 py-3.5 rounded-xl font-bold text-sm text-white bg-[#16A34A] hover:bg-[#15803D] shadow-lg flex items-center justify-center gap-2"
              >
                <BookOpen className="w-4 h-4" />
                <span>{t.hero.primaryCta}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                href="/contact-us"
                className="btn-smooth touch-target w-full sm:w-auto px-7 py-3.5 rounded-xl font-bold text-sm text-white bg-white/10 hover:bg-white/15 border border-white/25 flex items-center justify-center gap-2"
              >
                <span>{t.hero.secondaryCta}</span>
              </Link>
            </div>

            <p className="text-xs text-slate-400 pt-1">
              Serving South Mumbai, Bandra, Andheri, Dadar, Thane &amp; Navi Mumbai
            </p>
          </div>

          {/* Right Column: Live Educational Chart + Live Cohort Chat Reflection */}
          <div className="lg:col-span-6 flex justify-center animate-fade-in-up stagger-2">
            <div className="relative w-full max-w-lg bg-gradient-to-br from-white/12 to-white/5 border border-white/15 rounded-3xl p-4 sm:p-6 backdrop-blur-md shadow-2xl">
              <div className="absolute -top-8 -right-8 w-32 h-32 bg-[#16A34A]/25 rounded-full blur-3xl pointer-events-none" />

              {/* Top Bar */}
              <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-3.5 gap-2">
                <div className="flex items-center gap-2 min-w-0">
                  <div className="w-8 h-8 rounded-lg bg-[#16A34A] flex items-center justify-center text-white shrink-0">
                    <Activity className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs font-bold text-white flex items-center gap-1.5 truncate">
                      <span>MUMBAI STUDY DESK</span>
                      <span className="text-[10px] px-1.5 py-0.5 rounded bg-white/10 text-[#4ADE80]">
                        LIVE
                      </span>
                    </div>
                    <div className="text-[10px] text-slate-300 truncate">
                      Educational Chart &amp; Cohort Feed
                    </div>
                  </div>
                </div>
                <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#4ADE80] bg-[#16A34A]/15 px-2.5 py-1 rounded-full border border-[#16A34A]/30 shrink-0">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#4ADE80] animate-ping" />
                  {studyTicks.activeLearners}+ Learners
                </span>
              </div>

              {/* Educational Numbers Strip */}
              <div className="grid grid-cols-3 gap-2 mb-3.5 text-center">
                <div className="p-2 rounded-xl bg-[#071A33]/80 border border-white/10">
                  <span className="text-[10px] text-slate-400 block">Case Index</span>
                  <span className="text-xs sm:text-sm font-extrabold text-white tabular-nums">
                    {studyTicks.niftyStudy.toLocaleString('en-IN')}
                  </span>
                </div>
                <div className="p-2 rounded-xl bg-[#071A33]/80 border border-white/10">
                  <span className="text-[10px] text-slate-400 block">Capital Focus</span>
                  <span className="text-xs sm:text-sm font-extrabold text-[#4ADE80] tabular-nums">
                    {studyTicks.capitalSaved}% Safe
                  </span>
                </div>
                <div className="p-2 rounded-xl bg-[#071A33]/80 border border-white/10">
                  <span className="text-[10px] text-slate-400 block">Risk Model</span>
                  <span className="text-xs sm:text-sm font-extrabold text-amber-300">
                    {currentChat.riskTag}
                  </span>
                </div>
              </div>

              {/* Mini SVG Candlestick Study */}
              <div className="bg-[#071A33] rounded-2xl p-3 border border-white/10 mb-3.5">
                <div className="flex justify-between items-center text-[10px] text-slate-300 mb-1">
                  <span className="text-[#4ADE80] font-semibold">Demand Study: 24,180</span>
                  <span className="text-amber-300 font-mono">Target R:R 1:2.5</span>
                </div>
                <div className="h-24 w-full">
                  <svg className="w-full h-full" viewBox="0 0 320 96" preserveAspectRatio="none">
                    <line x1="0" y1="24" x2="320" y2="24" stroke="#13345E" strokeDasharray="3 3" />
                    <line x1="0" y1="54" x2="320" y2="54" stroke="#13345E" strokeDasharray="3 3" />
                    <line x1="15" y1="74" x2="305" y2="74" stroke="#16A34A" strokeWidth="1.5" strokeDasharray="4 2" />
                    <line x1="40" y1="36" x2="40" y2="78" stroke="#EF4444" strokeWidth="1.5" />
                    <rect x="34" y="42" width="12" height="26" rx="2" fill="#EF4444" />
                    <line x1="72" y1="44" x2="72" y2="76" stroke="#16A34A" strokeWidth="1.5" />
                    <rect x="66" y="48" width="12" height="22" rx="2" fill="#16A34A" />
                    <line x1="104" y1="40" x2="104" y2="74" stroke="#EF4444" strokeWidth="1.5" />
                    <rect x="98" y="45" width="12" height="16" rx="2" fill="#EF4444" />
                    <line x1="136" y1="34" x2="136" y2="70" stroke="#16A34A" strokeWidth="1.5" />
                    <rect x="130" y="38" width="12" height="24" rx="2" fill="#16A34A" />
                    <line x1="168" y1="26" x2="168" y2="62" stroke="#16A34A" strokeWidth="1.5" />
                    <rect x="162" y="30" width="12" height="26" rx="2" fill="#16A34A" />
                    <line x1="200" y1="18" x2="200" y2="52" stroke="#16A34A" strokeWidth="1.5" />
                    <rect x="194" y="22" width="12" height="24" rx="2" fill="#16A34A" />
                    <line x1="232" y1="22" x2="232" y2="48" stroke="#EF4444" strokeWidth="1.5" />
                    <rect x="226" y="25" width="12" height="14" rx="2" fill="#EF4444" />
                    <line x1="264" y1="10" x2="264" y2="40" stroke="#16A34A" strokeWidth="1.5" />
                    <rect x="258" y="14" width="12" height="22" rx="2" fill="#16A34A" />
                    <line x1="296" y1="6" x2="296" y2="32" stroke="#22C55E" strokeWidth="1.5" />
                    <rect x="290" y="9" width="12" height="19" rx="2" fill="#22C55E" />
                  </svg>
                </div>
              </div>

              {/* Live Educational Chat Box inside Hero */}
              <div className="bg-[#0B2545]/95 rounded-2xl p-3.5 border border-[#16A34A]/35 space-y-2.5">
                <div className="flex items-center justify-between text-[11px]">
                  <span className="inline-flex items-center gap-1.5 font-bold text-[#4ADE80]">
                    <MessageSquare className="w-3.5 h-3.5" />
                    Live Educational Chat
                  </span>
                  <div className="flex items-center gap-1">
                    {LIVE_EDUCATIONAL_CHATS.map((item, idx) => (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => setActiveChatIndex(idx)}
                        aria-label={`View chat ${idx + 1}`}
                        className={`h-1.5 rounded-full transition-all cursor-pointer ${
                          activeChatIndex === idx ? 'w-4 bg-[#16A34A]' : 'w-1.5 bg-white/30'
                        }`}
                      />
                    ))}
                  </div>
                </div>

                {/* Student Question */}
                <div key={`q-${currentChat.id}`} className="animate-fade-in space-y-2">
                  <div className="bg-white/10 rounded-xl p-2.5 text-left">
                    <div className="text-[10px] font-semibold text-slate-300 mb-0.5">
                      {currentChat.student} • {currentChat.area}
                    </div>
                    <p className="text-xs text-white leading-snug">{currentChat.question}</p>
                  </div>

                  {/* Mentor Educational Reply + Reflected Numbers */}
                  <div className="bg-[#16A34A]/20 border border-[#16A34A]/40 rounded-xl p-2.5 text-left">
                    <div className="flex items-center justify-between gap-2 mb-0.5">
                      <span className="text-[10px] font-bold text-[#4ADE80]">
                        Mumbai Faculty (Educational)
                      </span>
                      <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-[#071A33] text-white">
                        {currentChat.metricLabel}: {currentChat.metricValue}
                      </span>
                    </div>
                    <p className="text-xs text-slate-100 leading-snug">{currentChat.mentorReply}</p>
                  </div>
                </div>
              </div>

              {/* Bottom Stat Pills */}
              <div className="grid grid-cols-2 gap-2.5 pt-3 mt-3 border-t border-white/10 text-left">
                <div className="bg-[#0B2545]/70 p-2.5 rounded-xl border border-white/10 flex items-center gap-2">
                  <BarChart2 className="w-4 h-4 text-[#22C55E] shrink-0" />
                  <div>
                    <span className="text-[10px] text-slate-400 block">Modules</span>
                    <span className="text-xs font-bold text-white">13+ Study Guides</span>
                  </div>
                </div>
                <div className="bg-[#0B2545]/70 p-2.5 rounded-xl border border-white/10 flex items-center gap-2">
                  <Target className="w-4 h-4 text-amber-400 shrink-0" />
                  <div>
                    <span className="text-[10px] text-slate-400 block">Core Goal</span>
                    <span className="text-xs font-bold text-[#4ADE80]">Capital Safety</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

