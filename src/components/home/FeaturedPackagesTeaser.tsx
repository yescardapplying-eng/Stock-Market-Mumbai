import React from 'react';
import Link from 'next/link';
import { Package, ArrowRight, ShieldCheck, Check, Sparkles } from 'lucide-react';
import { MUMBAI_PACKAGES } from '@/data/packagesData';

export default function FeaturedPackagesTeaser() {
  return (
    <section className="py-14 sm:py-20 bg-[#F8FAFC] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 reveal-on-scroll">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase bg-[#DCFCE7] text-[#15803D] mb-3">
            <Package className="w-3.5 h-3.5" />
            Our Packages
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0B2545] tracking-tight">
            Mumbai Learning Plans
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#1E293B]/80">
            Transparent educational tracks with live Mumbai cohorts and risk mastery.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-7 items-stretch mb-10">
          {MUMBAI_PACKAGES.map((pkg, idx) => (
            <div
              key={pkg.id}
              className={`rounded-3xl p-6 sm:p-8 flex flex-col justify-between relative card-hover-lift reveal-on-scroll stagger-${idx + 1} ${
                pkg.isPopular
                  ? 'bg-white border-2 border-[#16A34A] shadow-xl'
                  : 'bg-white border border-slate-200 shadow-sm'
              }`}
            >
              {pkg.isPopular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#16A34A] text-white text-[11px] font-extrabold uppercase tracking-wider px-4 py-1 rounded-full shadow-md flex items-center gap-1 whitespace-nowrap">
                  <Sparkles className="w-3 h-3" />
                  {pkg.badge}
                </div>
              )}

              <div>
                <div className="border-b border-slate-100 pb-5 mb-5">
                  <h3 className="text-xl font-extrabold text-[#0B2545]">{pkg.name}</h3>
                  <p className="text-xs text-[#1E293B]/75 mt-1">{pkg.description}</p>
                  <div className="mt-4 flex items-baseline gap-2">
                    <span className="text-3xl font-black text-[#0B2545]">{pkg.price}</span>
                    <span className="text-xs font-semibold text-slate-500">/ {pkg.duration}</span>
                  </div>
                </div>

                <ul className="space-y-2.5 mb-7">
                  {pkg.usps.map((usp) => (
                    <li key={usp} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#1E293B]">
                      <span className="w-4 h-4 rounded-full bg-[#DCFCE7] text-[#16A34A] flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3 h-3 stroke-[3]" />
                      </span>
                      <span>{usp}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Link
                href="/our-packages"
                className={`btn-smooth touch-target w-full py-3 px-4 rounded-xl text-sm font-bold flex items-center justify-center gap-2 ${
                  pkg.isPopular
                    ? 'bg-[#16A34A] hover:bg-[#15803D] text-white'
                    : 'bg-[#0B2545] hover:bg-[#13345E] text-white'
                }`}
              >
                <span>{pkg.ctaLabel}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center reveal-on-scroll">
          <Link
            href="/our-packages"
            className="btn-smooth touch-target inline-flex items-center justify-center px-7 py-3 rounded-xl text-sm font-bold text-white bg-[#16A34A] hover:bg-[#15803D] gap-2 shadow-md"
          >
            <span>Compare Plans</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <div className="mt-4 flex items-center justify-center gap-2 text-xs text-slate-500">
            <ShieldCheck className="w-4 h-4 text-[#16A34A]" />
            <span>100% educational curriculum • Zero trading calls</span>
          </div>
        </div>
      </div>
    </section>
  );
}

