import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const STEPS = [
  {
    step: '01',
    title: 'Market Basics',
    desc: 'Learn NSE, BSE, demat rules, and order placement without risking money.',
  },
  {
    step: '02',
    title: 'Chart Reading',
    desc: 'Identify clean trends, support-resistance zones, and candlestick patterns.',
  },
  {
    step: '03',
    title: 'Risk Sizing',
    desc: 'Calculate exact stop-loss points and 1% capital limits mathematically.',
  },
  {
    step: '04',
    title: 'Disciplined Practice',
    desc: 'Review paper journals weekly with Mumbai mentors to eliminate mistakes.',
  },
];

export default function LearningJourney() {
  return (
    <section className="py-14 sm:py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 reveal-on-scroll">
          <span className="inline-block px-3.5 py-1 rounded-full text-xs font-bold tracking-wider uppercase bg-[#DCFCE7] text-[#15803D] mb-3">
            Step-By-Step Path
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0B2545] tracking-tight">
            Your Learning Journey
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#1E293B]/80">
            Structured progression from complete beginner to disciplined market student.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {STEPS.map((item, idx) => (
            <div
              key={item.step}
              className={`bg-[#F8FAFC] rounded-2xl p-6 border border-slate-200 card-hover-lift reveal-on-scroll stagger-${idx + 1} relative`}
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-2xl font-black text-[#16A34A]">{item.step}</span>
                <CheckCircle2 className="w-5 h-5 text-[#0B2545]/40" />
              </div>
              <h3 className="text-lg font-bold text-[#0B2545] mb-2">{item.title}</h3>
              <p className="text-xs sm:text-sm text-[#1E293B]/80 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

