import React from 'react';
import Link from 'next/link';
import {
  CandlestickChart,
  ShieldCheck,
  Layers,
  BarChart3,
  Brain,
  BookOpen,
  ArrowRight,
} from 'lucide-react';

const TOPICS = [
  {
    icon: BookOpen,
    title: 'Stock Market Basics',
    desc: 'Learn NSE, BSE, order types, and market cycles clearly.',
    href: '/stock-market-basics',
  },
  {
    icon: CandlestickChart,
    title: 'Price Action & Charts',
    desc: 'Read support, resistance, trendlines, and candlestick behavior.',
    href: '/technical-analysis',
  },
  {
    icon: ShieldCheck,
    title: 'Capital Risk Control',
    desc: 'Master position sizing, stop-loss placement, and loss limits.',
    href: '/risk-management',
  },
  {
    icon: Layers,
    title: 'Option Chain Study',
    desc: 'Decode Call-Put Open Interest, PCR, and Option Greeks.',
    href: '/option-chain-explained',
  },
  {
    icon: BarChart3,
    title: 'Fundamental Study',
    desc: 'Read balance sheets, ROE, debt ratios, and cash flows.',
    href: '/fundamental-analysis',
  },
  {
    icon: Brain,
    title: 'Trading Psychology',
    desc: 'Control fear, FOMO, and overtrading with daily journals.',
    href: '/trading-psychology',
  },
];

export default function WhatYouWillLearn() {
  return (
    <section className="py-14 sm:py-20 bg-[#F8FAFC] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 reveal-on-scroll">
          <span className="inline-block px-3.5 py-1 rounded-full text-xs font-bold tracking-wider uppercase bg-[#DCFCE7] text-[#15803D] mb-3">
            Mumbai Curriculum
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0B2545] tracking-tight">
            What You Will Learn
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#1E293B]/80">
            Practical, 100% educational modules built to protect your trading capital.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {TOPICS.map((topic, idx) => {
            const Icon = topic.icon;
            return (
              <div
                key={topic.title}
                className={`bg-white rounded-2xl p-6 border border-slate-200 shadow-xs card-hover-lift reveal-on-scroll stagger-${idx + 1} flex flex-col justify-between`}
              >
                <div>
                  <div className="w-11 h-11 rounded-xl bg-[#0B2545] text-[#22C55E] flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-[#0B2545] mb-2">{topic.title}</h3>
                  <p className="text-sm text-[#1E293B]/80 leading-relaxed mb-5">{topic.desc}</p>
                </div>

                <Link
                  href={topic.href}
                  className="btn-smooth inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-lg text-xs font-bold bg-[#F8FAFC] hover:bg-[#16A34A] text-[#0B2545] hover:text-white border border-slate-200 w-fit"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

