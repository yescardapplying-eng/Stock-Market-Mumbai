import React from 'react';
import Link from 'next/link';
import { MonitorPlay, FileText, Calculator, Compass, Layers, Headphones, ArrowRight } from 'lucide-react';

const SERVICES = [
  {
    icon: MonitorPlay,
    tag: 'Online Cohort',
    title: 'Foundation Classes',
    desc: 'Step-by-step online classes covering NSE, BSE, Demat basics, candlesticks, and orders.',
    href: '/stock-market-basics',
  },
  {
    icon: Compass,
    tag: 'Workshops',
    title: 'Technical Analysis',
    desc: 'Multi-timeframe price action, support-resistance zones, and chart structure lessons.',
    href: '/technical-analysis',
  },
  {
    icon: Layers,
    tag: 'Derivatives',
    title: 'Option Chain Lab',
    desc: 'Educational concepts of Open Interest, Put-Call Ratio, and Option Greeks.',
    href: '/option-chain-explained',
  },
  {
    icon: FileText,
    tag: 'Study Library',
    title: 'Notes & Guides',
    desc: 'Structured educational guides covering candlesticks, ratios, and risk frameworks.',
    href: '/resources',
  },
  {
    icon: Calculator,
    tag: 'Free Tools',
    title: 'Risk Calculators',
    desc: 'Interactive Position Sizing, Risk-Reward, Brokerage, SIP, and compounding calculators.',
    href: '/tools',
  },
  {
    icon: Headphones,
    tag: 'Academic Support',
    title: 'Doubt Sessions',
    desc: 'Dedicated online Q&A sessions included by plan to clarify chart and syllabus concepts.',
    href: '/our-services',
  },
];

export default function FeaturedServices() {
  return (
    <section className="py-14 sm:py-20 bg-[#F8FAFC] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12 reveal-on-scroll">
          <div>
            <span className="inline-block px-3.5 py-1 rounded-full text-xs font-bold tracking-wider uppercase bg-[#DCFCE7] text-[#15803D] mb-2">
              Our Services
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0B2545] tracking-tight">
              Educational Programs
            </h2>
          </div>

          <Link
            href="/our-services"
            className="btn-smooth touch-target px-5 py-2.5 rounded-xl text-sm font-bold bg-[#0B2545] hover:bg-[#13345E] text-white inline-flex items-center justify-center gap-2 w-fit"
          >
            <span>View Services</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((srv, idx) => {
            const Icon = srv.icon;
            return (
              <div
                key={srv.title}
                className={`bg-white rounded-2xl p-6 border border-slate-200 shadow-xs card-hover-lift reveal-on-scroll stagger-${idx + 1} flex flex-col justify-between`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-[#DCFCE7] text-[#16A34A] flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-slate-100 text-[#0B2545]">
                      {srv.tag}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-[#0B2545] mb-2">{srv.title}</h3>
                  <p className="text-sm text-[#1E293B]/80 leading-relaxed mb-5">{srv.desc}</p>
                </div>

                <Link
                  href={srv.href}
                  className="btn-smooth inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-bold text-white bg-[#16A34A] hover:bg-[#15803D] w-fit"
                >
                  <span>Explore Now</span>
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

