import React from 'react';
import { ShieldAlert } from 'lucide-react';

export default function RiskAwarenessBanner() {
  return (
    <section className="py-10 bg-amber-50 border-b border-amber-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 reveal-on-scroll">
        <div className="flex items-start sm:items-center gap-3.5 text-amber-950">
          <div className="w-10 h-10 rounded-xl bg-amber-200/70 text-amber-800 flex items-center justify-center shrink-0">
            <ShieldAlert className="w-5 h-5" />
          </div>
          <p className="text-xs sm:text-sm leading-relaxed">
            <strong className="font-extrabold">100% Educational Commitment: </strong>
            Stock Market Mumbai does not provide stock tips, buy/sell calls, advisory, or portfolio management. Securities trading carries market risk; our mission is to educate you on risk control and independent chart reading.
          </p>
        </div>
      </div>
    </section>
  );
}

