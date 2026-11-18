import React from 'react';
import Link from 'next/link';
import { Globe, Laptop, Clock, ArrowRight } from 'lucide-react';

const MUMBAI_REGIONS = [
  {
    zone: 'South & Central Mumbai',
    areas: 'Fort, Colaba, Churchgate, Lower Parel, Worli, Dadar, Matunga, Mahim, Sion & Kurla',
  },
  {
    zone: 'Western Suburbs',
    areas: 'Bandra, Khar, Santacruz, Vile Parle, Andheri, Goregaon, Malad, Kandivali & Borivali',
  },
  {
    zone: 'Eastern Suburbs',
    areas: 'Ghatkopar, Vidyavihar, Vikhroli, Kanjurmarg, Bhandup, Nahur & Mulund',
  },
  {
    zone: 'Nearby Urban Areas',
    areas: 'Thane, Kalwa & Mira Road (online enrolment available subject to internet access)',
  },
];

export default function MumbaiOnlineCoverage() {
  return (
    <section
      className="py-14 sm:py-20 bg-white border-b border-slate-200"
      aria-labelledby="mumbai-online-coverage-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          <div className="lg:col-span-6 space-y-4 reveal-on-scroll">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold tracking-wider uppercase bg-[#DCFCE7] text-[#15803D]">
              <Globe className="w-3.5 h-3.5" aria-hidden="true" />
              100% Online Delivery
            </span>

            <h2
              id="mumbai-online-coverage-heading"
              className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0B2545] tracking-tight"
            >
              Online Stock Market Learning for Mumbai and Nearby Learners
            </h2>

            <p className="text-sm sm:text-base text-[#1E293B]/85 leading-relaxed">
              Stock Market Mumbai operates completely online so college students, beginners, and busy working professionals across Mumbai can study from home or work without daily train or road commutes.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              <div className="p-4 rounded-2xl bg-[#F8FAFC] border border-slate-200 flex items-start gap-3">
                <Laptop className="w-5 h-5 text-[#16A34A] shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <h3 className="text-sm font-bold text-[#0B2545]">Learn From Anywhere</h3>
                  <p className="text-xs text-slate-600 mt-0.5">
                    Attend online interactive classes on laptop, tablet, or mobile with stable internet.
                  </p>
                </div>
              </div>
              <div className="p-4 rounded-2xl bg-[#F8FAFC] border border-slate-200 flex items-start gap-3">
                <Clock className="w-5 h-5 text-[#16A34A] shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <h3 className="text-sm font-bold text-[#0B2545]">Flexible Revision</h3>
                  <p className="text-xs text-slate-600 mt-0.5">
                    Structured course schedules paired with recorded lessons included in active plans.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Link
                href="/our-services"
                className="btn-smooth touch-target px-5 py-2.5 rounded-xl bg-[#0B2545] hover:bg-[#13345E] text-white text-xs sm:text-sm font-bold inline-flex items-center gap-1.5"
              >
                <span>View Services</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
              <Link
                href="/our-packages"
                className="btn-smooth touch-target px-5 py-2.5 rounded-xl bg-[#16A34A] hover:bg-[#15803D] text-white text-xs sm:text-sm font-bold inline-flex items-center gap-1.5"
              >
                <span>View Plans</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-6 reveal-on-scroll stagger-2">
            <div className="bg-[#F8FAFC] rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-4">
              <h3 className="text-base sm:text-lg font-bold text-[#0B2545]">
                Residential Areas Where Mumbai Learners Join Online
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {MUMBAI_REGIONS.map((item) => (
                  <div
                    key={item.zone}
                    className="bg-white rounded-2xl p-4 border border-slate-200"
                  >
                    <h4 className="text-xs font-extrabold uppercase tracking-wider text-[#15803D] mb-1">
                      {item.zone}
                    </h4>
                    <p className="text-xs text-[#1E293B]/85 leading-relaxed">{item.areas}</p>
                  </div>
                ))}
              </div>
              <p className="text-[11px] text-slate-500 leading-relaxed border-t border-slate-200 pt-3">
                <strong>Online-Only Disclosure:</strong> The areas above indicate where learners commonly reside when attending remotely. Stock Market Mumbai delivers education exclusively online and does not operate physical branches, walk-in offices, or offline classrooms at these locations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
