import React from 'react';
import Link from 'next/link';
import { Globe, Laptop, Clock, ArrowRight, MapPin, CheckCircle2 } from 'lucide-react';
import { LocationLandingPage, getNearbyLocations, getLocationPath } from '@/data/locationLandingPages';

interface LocationCoverageSectionProps {
  location: LocationLandingPage;
}

export default function LocationCoverageSection({ location }: LocationCoverageSectionProps) {
  const nearby = getNearbyLocations(location.slug, 6);

  return (
    <section
      className="py-14 sm:py-20 bg-white border-b border-slate-200"
      aria-labelledby="location-coverage-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          <div className="lg:col-span-6 space-y-4 reveal-on-scroll">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold tracking-wider uppercase bg-[#DCFCE7] text-[#15803D]">
              <Globe className="w-3.5 h-3.5" aria-hidden="true" />
              100% Online Delivery
            </span>

            <h2
              id="location-coverage-heading"
              className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0B2545] tracking-tight"
            >
              Online Stock Market Learning for {location.name} &amp; Surrounding Areas
            </h2>

            <p className="text-sm sm:text-base text-[#1E293B]/85 leading-relaxed">
              Stock Market Mumbai delivers structured stock market education completely online. Whether you are living, studying, or working in {location.name} ({location.state}), you can attend interactive live classes, review recorded webinars, and learn technical chart reading without commuting to a physical center.
            </p>

            {/* 3 Localized Highlights */}
            <div className="space-y-2.5 pt-1">
              {location.highlights.map((highlight, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-[#16A34A] shrink-0 mt-0.5" aria-hidden="true" />
                  <span>{highlight}</span>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="p-4 rounded-2xl bg-[#F8FAFC] border border-slate-200 flex items-start gap-3">
                <Laptop className="w-5 h-5 text-[#16A34A] shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <h3 className="text-sm font-bold text-[#0B2545]">Attend From Anywhere</h3>
                  <p className="text-xs text-slate-600 mt-0.5">
                    Connect from your home or office in {location.name} on PC, laptop, or phone.
                  </p>
                </div>
              </div>
              <div className="p-4 rounded-2xl bg-[#F8FAFC] border border-slate-200 flex items-start gap-3">
                <Clock className="w-5 h-5 text-[#16A34A] shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <h3 className="text-sm font-bold text-[#0B2545]">Flexible Batches</h3>
                  <p className="text-xs text-slate-600 mt-0.5">
                    Evening and weekend options with full video recordings for easy revision.
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
            <div className="bg-[#F8FAFC] rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-5">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs font-bold text-[#16A34A] uppercase tracking-wider block">
                    Regional Network
                  </span>
                  <h3 className="text-base sm:text-lg font-bold text-[#0B2545]">
                    Nearby Learning Hubs in {location.state}
                  </h3>
                </div>
                <Link
                  href="/service-areas"
                  className="text-xs font-bold text-[#0B2545] hover:text-[#16A34A] inline-flex items-center gap-1"
                >
                  <span>All 320+ Hubs</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              <p className="text-xs text-slate-600 leading-relaxed">
                Learners from neighboring areas in {location.state} also participate in our live online batches:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {nearby.map((nearLoc) => (
                  <Link
                    key={nearLoc.slug}
                    href={getLocationPath(nearLoc.slug)}
                    className="p-3.5 rounded-xl bg-white hover:bg-slate-50 border border-slate-200 hover:border-[#16A34A]/50 transition-all flex items-start gap-2.5 group shadow-xs"
                  >
                    <MapPin className="w-4 h-4 text-[#16A34A] shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                    <div className="min-w-0">
                      <div className="text-xs font-bold text-[#0B2545] group-hover:text-[#16A34A] truncate">
                        {nearLoc.name}
                      </div>
                      <div className="text-[11px] text-slate-500 truncate">
                        {nearLoc.region}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>

              <div className="pt-2 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
                <span>100% Online • Non-Advisory</span>
                <Link
                  href="/service-areas"
                  className="text-[#16A34A] font-bold hover:underline"
                >
                  Explore All Service Areas &rarr;
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
