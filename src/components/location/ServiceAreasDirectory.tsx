'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import {
  Search,
  MapPin,
  ArrowRight,
  ShieldCheck,
  Globe,
  Building2,
  Train,
  CheckCircle2,
  SlidersHorizontal,
} from 'lucide-react';
import {
  ALL_LOCATIONS,
  LocationLandingPage,
  getLocationPath,
} from '@/data/locationLandingPages';

const STATES_LIST = [
  'All States',
  'Maharashtra',
  'Delhi NCR',
  'Uttar Pradesh',
  'Bihar',
  'Gujarat',
  'Rajasthan',
  'Madhya Pradesh',
  'Karnataka',
  'Telangana',
  'Tamil Nadu',
  'Punjab',
  'Haryana',
  'Chhattisgarh',
  'Jharkhand',
  'Chandigarh',
];

export default function ServiceAreasDirectory() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedState, setSelectedState] = useState('All States');

  const filteredLocations = useMemo(() => {
    return ALL_LOCATIONS.filter((loc) => {
      const matchesState =
        selectedState === 'All States' || loc.state === selectedState;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        loc.name.toLowerCase().includes(q) ||
        loc.state.toLowerCase().includes(q) ||
        loc.region.toLowerCase().includes(q);
      return matchesState && matchesSearch;
    });
  }, [searchQuery, selectedState]);

  // Group filtered locations by State and Region
  const groupedByState = useMemo(() => {
    const map: Record<string, Record<string, LocationLandingPage[]>> = {};

    filteredLocations.forEach((loc) => {
      if (!map[loc.state]) {
        map[loc.state] = {};
      }
      const region = loc.region || loc.state;
      if (!map[loc.state][region]) {
        map[loc.state][region] = [];
      }
      map[loc.state][region].push(loc);
    });

    return map;
  }, [filteredLocations]);

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      {/* 1. Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#0B2545] via-[#091E3A] to-[#071A33] text-white pt-10 pb-16 sm:pb-20">
        <div
          className="absolute inset-0 opacity-10 bg-[radial-gradient(#16A34A_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none"
          aria-hidden="true"
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5 animate-fade-in-up">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#16A34A]/20 border border-[#16A34A]/40 text-[#4ADE80] text-xs sm:text-sm font-semibold">
            <Globe className="w-4 h-4 shrink-0 text-[#22C55E]" aria-hidden="true" />
            <span>Comprehensive National Coverage</span>
          </div>

          {/* Title (5 words) */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.15] max-w-4xl mx-auto">
            Serving 320+ Prime Financial &amp; Learning Hubs
          </h1>

          {/* Intro (15 words) */}
          <p className="text-sm sm:text-base lg:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
            Empowering learners across 14 states with structured online stock market education, technical analysis, and risk management.
          </p>

          {/* Quick Metrics */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 pt-3 text-xs sm:text-sm text-slate-200">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#22C55E]" />
              <span>320+ City &amp; Railway Hubs</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#22C55E]" />
              <span>100% Online Live Classes</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#22C55E]" />
              <span>Zero Tips • SEBI Compliant</span>
            </div>
          </div>

          {/* Search Box */}
          <div className="max-w-xl mx-auto pt-4">
            <div className="relative">
              <Search
                className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2"
                aria-hidden="true"
              />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search any city, station, or district (e.g. Dadar, BKC, Lucknow, Indore)..."
                className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-white/10 hover:bg-white/15 focus:bg-white text-white focus:text-[#0B2545] placeholder-slate-400 focus:placeholder-slate-500 border border-white/20 focus:border-[#16A34A] outline-none transition-all text-sm font-medium shadow-lg backdrop-blur-md"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs bg-white/20 hover:bg-white/30 text-white rounded-full px-2 py-0.5"
                >
                  Clear
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 2. Filter Pills Section */}
      <section className="sticky top-18 sm:top-20 z-30 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1">
            <SlidersHorizontal className="w-4 h-4 text-slate-400 shrink-0 ml-1" />
            {STATES_LIST.map((state) => {
              const isSelected = selectedState === state;
              const count =
                state === 'All States'
                  ? ALL_LOCATIONS.length
                  : ALL_LOCATIONS.filter((l) => l.state === state).length;

              return (
                <button
                  key={state}
                  onClick={() => setSelectedState(state)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-semibold shrink-0 transition-all cursor-pointer flex items-center gap-1.5 ${
                    isSelected
                      ? 'bg-[#0B2545] text-white shadow-xs'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200'
                  }`}
                >
                  <span>{state}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                      isSelected
                        ? 'bg-[#16A34A] text-white'
                        : 'bg-slate-200 text-slate-600'
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. Directory Grid */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 space-y-12">
        {Object.keys(groupedByState).length === 0 ? (
          <div className="text-center py-16 bg-white rounded-3xl border border-slate-200 p-8">
            <MapPin className="w-12 h-12 text-slate-300 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-[#0B2545]">
              No locations match &quot;{searchQuery}&quot;
            </h3>
            <p className="text-sm text-slate-500 mt-1">
              Try searching by state, district, or railway hub, or reset filters.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedState('All States');
              }}
              className="mt-4 px-5 py-2 rounded-xl bg-[#0B2545] text-white text-xs font-bold hover:bg-[#13345E]"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          Object.entries(groupedByState).map(([stateName, regions]) => {
            const stateLocCount = Object.values(regions).reduce(
              (acc, arr) => acc + arr.length,
              0
            );

            return (
              <section
                key={stateName}
                id={`state-${stateName.toLowerCase().replace(/\s+/g, '-')}`}
                className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-xs space-y-6 scroll-mt-36"
              >
                {/* State Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-100 gap-2">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-2xl bg-[#DCFCE7] flex items-center justify-center text-[#15803D] shrink-0 font-bold">
                      <Building2 className="w-5 h-5" />
                    </div>
                    <div>
                      <h2 className="text-xl sm:text-2xl font-extrabold text-[#0B2545]">
                        {stateName}
                      </h2>
                      <span className="text-xs text-slate-500">
                        100% Online Classes &amp; Mentorship Available
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-slate-100 text-[#0B2545] border border-slate-200">
                      {stateLocCount} Locations
                    </span>
                  </div>
                </div>

                {/* Regions & Locations */}
                <div className="space-y-6">
                  {Object.entries(regions).map(([regionName, locs]) => (
                    <div key={regionName} className="space-y-3">
                      {regionName !== stateName && (
                        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#15803D]">
                          <Train className="w-3.5 h-3.5" />
                          <span>{regionName}</span>
                          <span className="text-slate-400">({locs.length})</span>
                        </div>
                      )}

                      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                        {locs.map((loc) => (
                          <Link
                            key={loc.slug}
                            href={getLocationPath(loc.slug)}
                            className="p-3.5 rounded-xl bg-[#F8FAFC] hover:bg-emerald-50/50 border border-slate-200 hover:border-[#16A34A]/50 transition-all flex items-center justify-between group shadow-2xs"
                          >
                            <div className="min-w-0 pr-2">
                              <div className="text-xs sm:text-sm font-bold text-[#0B2545] group-hover:text-[#16A34A] transition-colors truncate">
                                {loc.name}
                              </div>
                              <div className="text-[11px] text-slate-500 truncate">
                                {loc.tagline}
                              </div>
                            </div>
                            <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-[#16A34A] group-hover:translate-x-0.5 transition-all shrink-0" />
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            );
          })
        )}
      </main>

      {/* 4. Bottom Compliance Notice */}
      <section className="bg-[#0B2545] text-slate-300 py-10 border-t border-[#13345E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
          <div className="flex items-center justify-center gap-2 text-sm font-bold text-white">
            <ShieldCheck className="w-4 h-4 text-[#22C55E]" />
            <span>Serving 320+ Major Financial &amp; Stock Market Training Hubs across 14 States All Over India</span>
          </div>
          <p className="text-xs text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Stock Market Mumbai is a 100% online educational institute. We do not provide tips, trading calls, portfolio management, or financial advisory. All courses are conducted remotely for learning and analytical purposes.
          </p>
        </div>
      </section>
    </div>
  );
}
