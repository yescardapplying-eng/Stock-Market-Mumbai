import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ShieldCheck,
  BookOpen,
  Target,
  Compass,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  TrendingUp,
  BarChart3,
  Award,
} from 'lucide-react';
import AccordionFaq from '@/components/ui/AccordionFaq';

export const metadata: Metadata = {
  title: 'About Us | Stock Market Education Institute in Mumbai',
  description:
    'About Stock Market Mumbai: our honest mission to educate Mumbai traders on price action, capital risk control, and disciplined trading without stock tips.',
  keywords: [
    'About Stock Market Mumbai',
    'Stock market institute Mumbai',
    'Share market training academy Mumbai',
    'Non advisory stock market education Mumbai',
  ],
  alternates: {
    canonical: 'https://stockmarketmumbai.in/about-us',
  },
};

const ABOUT_FAQS = [
  {
    q: 'Why was Stock Market Mumbai established?',
    a: 'Stock Market Mumbai was founded to protect retail learners in Mumbai from misleading tips and get-rich-quick noise by providing structured, concept-driven stock market education focused on capital control.',
  },
  {
    q: 'Is Stock Market Mumbai linked with any stockbroker or tip channel?',
    a: 'No. We are 100% independent. We do not take brokerage commissions, promote speculative Telegram groups, or issue buy/sell calls.',
  },
  {
    q: 'Who can join your Mumbai stock market courses?',
    a: 'Students, salaried professionals, business owners, and beginners across Mumbai, Thane, and Navi Mumbai looking to learn charts and risk sizing responsibly.',
  },
];

export default function AboutUsPage() {
  const aboutFaqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: ABOUT_FAQS.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.a,
      },
    })),
  };

  return (
    <div className="bg-[#F8FAFC] min-h-screen py-10 sm:py-14">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(aboutFaqSchema).replace(/</g, '\\u003c'),
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex items-center space-x-2 text-xs text-slate-500">
            <li>
              <Link href="/" className="hover:text-[#16A34A]">Home</Link>
            </li>
            <li>/</li>
            <li className="text-[#0B2545] font-semibold" aria-current="page">About Us</li>
          </ol>
        </nav>

        {/* Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-14">
          <div className="lg:col-span-7 space-y-5 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#DCFCE7] text-[#15803D] text-xs font-bold">
              <ShieldCheck className="w-4 h-4" />
              100% Educational • Mumbai
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B2545] leading-tight">
              Honest Stock Market Education in Mumbai
            </h1>

            <p className="text-sm sm:text-base text-[#1E293B]/85 leading-relaxed">
              Stock Market Mumbai empowers learners across Mumbai to understand charts, option chain data, and capital risk rules — free from speculative tips or false promises.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs card-hover-lift">
                <Target className="w-6 h-6 text-[#16A34A] mb-2" />
                <h2 className="text-sm font-bold text-[#0B2545]">Our Mission</h2>
                <p className="text-xs text-slate-600 mt-1">
                  Equip Mumbai traders with clear chart skills and strict capital protection habits.
                </p>
              </div>
              <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs card-hover-lift">
                <Compass className="w-6 h-6 text-[#16A34A] mb-2" />
                <h2 className="text-sm font-bold text-[#0B2545]">Our Philosophy</h2>
                <p className="text-xs text-slate-600 mt-1">
                  Risk control always comes first. Protect downside before evaluating upside.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 flex justify-center animate-fade-in-up stagger-2">
            <div className="bg-[#0B2545] text-white rounded-3xl p-6 sm:p-7 shadow-xl border border-[#13345E] max-w-md w-full space-y-4">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-[#16A34A] flex items-center justify-center text-white">
                    <BookOpen className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white">Mumbai Curriculum</h3>
                    <p className="text-[11px] text-slate-300">stockmarketmumbai.in</p>
                  </div>
                </div>
                <span className="px-2.5 py-0.5 rounded-full bg-[#16A34A]/20 text-[#4ADE80] text-[11px] font-semibold">
                  Non-Advisory
                </span>
              </div>

              <div className="space-y-3">
                <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-center gap-3">
                  <TrendingUp className="w-5 h-5 text-[#22C55E] shrink-0" />
                  <div>
                    <div className="text-xs font-bold">Price Action &amp; Trends</div>
                    <div className="text-[11px] text-slate-300">Support, resistance &amp; multi-timeframe charts</div>
                  </div>
                </div>
                <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-center gap-3">
                  <BarChart3 className="w-5 h-5 text-[#22C55E] shrink-0" />
                  <div>
                    <div className="text-xs font-bold">Capital Loss Control</div>
                    <div className="text-[11px] text-slate-300">1% risk rule, stop-loss &amp; position sizing</div>
                  </div>
                </div>
                <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-center gap-3">
                  <Award className="w-5 h-5 text-amber-400 shrink-0" />
                  <div>
                    <div className="text-xs font-bold">Option Chain &amp; Greeks</div>
                    <div className="text-[11px] text-slate-300">Open interest, theta decay &amp; hedging study</div>
                  </div>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 text-xs text-slate-200 space-y-1.5">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#22C55E] shrink-0" />
                  <span>Zero tips or advisory calls</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#22C55E] shrink-0" />
                  <span>English, Hindi &amp; Marathi support</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Core Pillars */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm mb-14 reveal-on-scroll">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B2545] text-center mb-8">
            What Learners Gain
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                num: '1',
                title: 'Clean Chart Reading',
                desc: 'Read candlesticks, volume, and price zones calmly without messy indicators.',
              },
              {
                num: '2',
                title: 'Strict Risk Sizing',
                desc: 'Calculate exact quantity and stop-loss levels before every educational setup.',
              },
              {
                num: '3',
                title: 'Emotional Discipline',
                desc: 'Overcome FOMO and revenge trading using structured daily trade journals.',
              },
            ].map((item) => (
              <div key={item.num} className="p-5 rounded-2xl bg-[#F8FAFC] border border-slate-200 card-hover-lift space-y-2.5">
                <div className="w-9 h-9 rounded-lg bg-[#DCFCE7] text-[#16A34A] flex items-center justify-center font-bold">
                  {item.num}
                </div>
                <h3 className="text-base font-bold text-[#0B2545]">{item.title}</h3>
                <p className="text-xs sm:text-sm text-[#1E293B]/80 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Disclosure */}
        <div className="bg-amber-50 rounded-2xl p-5 border border-amber-200 mb-14 text-xs text-amber-900 leading-relaxed reveal-on-scroll">
          <div className="flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
            <div>
              <strong className="font-bold">Educational Disclosure: </strong>
              Stock Market Mumbai is purely an educational academy and is NOT registered with SEBI as a Research Analyst or Investment Adviser.
            </div>
          </div>
        </div>

        {/* 3 SEO FAQs */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm max-w-4xl mx-auto reveal-on-scroll">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B2545]">
              About Us FAQs
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-2">
              Questions about our Mumbai teaching team and educational ethics.
            </p>
          </div>
          <AccordionFaq items={ABOUT_FAQS} defaultOpenIndex={null} />

          <div className="mt-8 pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-slate-500">
              Want to explore our 1-month, 6-month, or 1-year learning tracks?
            </p>
            <Link
              href="/our-packages"
              className="btn-smooth inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-[#16A34A] hover:bg-[#15803D] text-white text-xs font-bold"
            >
              <span>View Plans</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}

