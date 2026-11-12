'use client';

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export interface FaqItem {
  q: string;
  a: string;
}

interface AccordionFaqProps {
  items: FaqItem[];
  defaultOpenIndex?: number | null;
  className?: string;
}

export default function AccordionFaq({
  items,
  defaultOpenIndex = null, // Initially all FAQs stay closed as requested
  className = '',
}: AccordionFaqProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(defaultOpenIndex);

  const toggleIndex = (idx: number) => {
    setOpenIndex((prev) => (prev === idx ? null : idx));
  };

  return (
    <div className={`space-y-3 ${className}`}>
      {items.map((item, idx) => {
        const isOpen = openIndex === idx;
        const panelId = `accordion-panel-${idx}`;
        const buttonId = `accordion-btn-${idx}`;

        return (
          <div
            key={item.q}
            className={`border rounded-2xl transition-all duration-300 overflow-hidden ${
              isOpen
                ? 'bg-white border-[#16A34A]/40 shadow-md ring-1 ring-[#16A34A]/20'
                : 'bg-white hover:bg-slate-50/70 border-slate-200 hover:border-slate-300 shadow-xs'
            }`}
          >
            <button
              id={buttonId}
              type="button"
              onClick={() => toggleIndex(idx)}
              aria-expanded={isOpen}
              aria-controls={panelId}
              className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 cursor-pointer focus:outline-hidden"
            >
              <span
                className={`text-sm sm:text-base font-bold transition-colors duration-200 ${
                  isOpen ? 'text-[#16A34A]' : 'text-[#0B2545]'
                }`}
              >
                {item.q}
              </span>
              <div
                className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${
                  isOpen
                    ? 'rotate-180 bg-[#DCFCE7] text-[#16A34A]'
                    : 'bg-slate-100 text-slate-500'
                }`}
              >
                <ChevronDown className="w-4 h-4" />
              </div>
            </button>

            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              data-open={isOpen ? 'true' : 'false'}
              className="accordion-content"
            >
              <div className="accordion-inner">
                <div className="px-4 pb-4 sm:px-5 sm:pb-5 pt-0 border-t border-slate-100">
                  <p className="text-xs sm:text-sm text-[#1E293B]/85 leading-relaxed pt-3">
                    {item.a}
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

