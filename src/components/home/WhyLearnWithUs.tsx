import React from 'react';
import { ShieldAlert, Compass, Users, Award } from 'lucide-react';

const REASONS = [
  {
    icon: ShieldAlert,
    title: 'Zero Tips Policy',
    desc: 'Strictly educational and non-advisory. No stock tips, buy/sell calls, or signal groups.',
  },
  {
    icon: Compass,
    title: 'Risk Awareness First',
    desc: 'Lessons emphasize position sizing, stop-loss concepts, and understanding market risk.',
  },
  {
    icon: Users,
    title: 'Online For Mumbai',
    desc: 'Structured online cohorts designed for beginners and working professionals in Mumbai.',
  },
  {
    icon: Award,
    title: 'Completion Certificate',
    desc: 'Syllabus completion certificate paired with recorded revision access during active plans.',
  },
];

export default function WhyLearnWithUs() {
  return (
    <section className="py-14 sm:py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 reveal-on-scroll">
          <span className="inline-block px-3.5 py-1 rounded-full text-xs font-bold tracking-wider uppercase bg-[#0B2545]/10 text-[#0B2545] mb-3">
            Why Choose Us
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0B2545] tracking-tight">
            Honest Trading Education
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#1E293B]/80">
            Learn to read charts independently instead of chasing unreliable market tips.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {REASONS.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className={`rounded-2xl p-6 bg-[#F8FAFC] border border-slate-200 card-hover-lift reveal-on-scroll stagger-${idx + 1}`}
              >
                <div className="w-11 h-11 rounded-xl bg-[#DCFCE7] text-[#16A34A] flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-[#0B2545] mb-2">{item.title}</h3>
                <p className="text-xs sm:text-sm text-[#1E293B]/80 leading-relaxed">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

