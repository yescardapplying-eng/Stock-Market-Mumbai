import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { MapPin, Mail, Clock, ShieldCheck, Globe } from 'lucide-react';
import AccordionFaq from '@/components/ui/AccordionFaq';
import ContactForm from '@/components/contact/ContactForm';

export const metadata: Metadata = {
  title: 'Contact Us | Stock Market Mumbai Counseling Desk',
  description:
    'Contact Stock Market Mumbai for course syllabus, Mumbai batch timings, Basic Plan, Our Pro Plan, and Ultra Pro Plan admissions.',
  keywords: [
    'Contact Stock Market Mumbai',
    'Share market classes Mumbai contact',
    'Stock market institute Mumbai address',
  ],
  alternates: {
    canonical: 'https://stockmarketmumbai.in/contact-us',
  },
};

const CONTACT_FAQS = [
  {
    q: 'Where does Stock Market Mumbai conduct its educational programs?',
    a: 'We serve learners across Mumbai (South Mumbai, Bandra, Andheri, Dadar, Borivali, Powai, Thane, and Navi Mumbai) through live online cohorts and guided academic workshops.',
  },
  {
    q: 'How soon will your Mumbai counseling desk reply to my inquiry?',
    a: 'Inquiries submitted via our website form are typically answered within 2 to 4 working hours (Monday to Saturday, 9:30 AM to 6:30 PM IST).',
  },
  {
    q: 'Will your team ever ask for my demat password or OTP?',
    a: 'Never. Stock Market Mumbai is 100% educational and will never ask for trading passwords, bank OTPs, or money to trade on your behalf.',
  },
];

export default function ContactUsPage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: CONTACT_FAQS.map((faq) => ({
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
          __html: JSON.stringify(faqSchema).replace(/</g, '\\u003c'),
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex items-center space-x-2 text-xs text-slate-500">
            <li>
              <Link href="/" className="hover:text-[#16A34A]">Home</Link>
            </li>
            <li>/</li>
            <li className="text-[#0B2545] font-semibold" aria-current="page">Contact Us</li>
          </ol>
        </nav>

        <div className="text-center max-w-2xl mx-auto mb-10 animate-fade-in-up">
          <span className="inline-block px-3.5 py-1 rounded-full text-xs font-bold tracking-wider uppercase bg-[#DCFCE7] text-[#15803D] mb-3">
            Mumbai Helpdesk
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0B2545] tracking-tight">
            Contact Us
          </h1>
          <p className="mt-3 text-sm sm:text-base text-[#1E293B]/80">
            Questions about our syllabus, Mumbai timings, or packages? Send an inquiry below.
          </p>
        </div>

        {/* Security Notice */}
        <div className="max-w-4xl mx-auto mb-10 bg-amber-50 border-2 border-amber-300 rounded-2xl p-4 sm:p-5 text-amber-950 flex items-start sm:items-center gap-3 reveal-on-scroll">
          <ShieldCheck className="w-6 h-6 text-amber-700 shrink-0 mt-0.5 sm:mt-0" />
          <p className="text-xs sm:text-sm font-semibold leading-relaxed">
            <span className="uppercase tracking-wider font-extrabold text-amber-900 mr-2">
              Safety Notice:
            </span>
            We never give trading tips or ask for passwords, OTPs, or money to trade.
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm reveal-on-scroll">
            <h2 className="text-2xl font-bold text-[#0B2545] mb-1.5">Educational Enquiry</h2>
            <p className="text-xs text-slate-500 mb-6">
              Our Mumbai student counselors will guide you through our curriculum.
            </p>
            <ContactForm />
          </div>

          <div className="lg:col-span-5 space-y-6 reveal-on-scroll stagger-2">
            <div className="bg-[#0B2545] text-white rounded-3xl p-6 sm:p-8 border border-[#13345E] shadow-sm">
              <h3 className="text-xl font-bold mb-5">Mumbai Desk Details</h3>
              <ul className="space-y-4 text-sm text-slate-200">
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#22C55E] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-white">Location:</strong>
                    <span>Mumbai, Maharashtra, India</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-[#22C55E] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-white">Official Email:</strong>
                    <a
                      href="mailto:info@stockmarketmumbai.in"
                      className="hover:text-white transition-colors break-all hover:underline"
                    >
                      info@stockmarketmumbai.in
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Globe className="w-5 h-5 text-[#22C55E] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-white">Website:</strong>
                    <a href="https://stockmarketmumbai.in" className="hover:text-white hover:underline">
                      https://stockmarketmumbai.in
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-[#22C55E] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-white">Academic Hours:</strong>
                    <span>Monday – Saturday: 9:30 AM to 6:30 PM IST</span>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-3xl p-4 border border-slate-200 shadow-sm overflow-hidden">
              <div className="p-2 mb-2">
                <span className="text-xs font-bold text-[#0B2545] flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-[#16A34A]" />
                  Serving Entire Mumbai &amp; MMR
                </span>
                <p className="text-[11px] text-slate-500">
                  South Mumbai • Bandra • Andheri • Dadar • Thane • Navi Mumbai
                </p>
              </div>
              <div className="w-full h-60 rounded-2xl overflow-hidden border border-slate-200 bg-slate-100">
                <iframe
                  title="Stock Market Mumbai Location"
                  width="100%"
                  height="100%"
                  src="https://maps.google.com/maps?q=Mumbai%2C%20Maharashtra%2C%20India&t=&z=11&ie=UTF8&iwloc=&output=embed"
                  loading="lazy"
                  className="w-full h-full border-0"
                />
              </div>
            </div>
          </div>
        </div>

        {/* 3 SEO FAQs */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm max-w-4xl mx-auto reveal-on-scroll">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B2545]">
              Contact FAQs
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-2">
              Quick answers about admissions and student counseling in Mumbai.
            </p>
          </div>
          <AccordionFaq items={CONTACT_FAQS} defaultOpenIndex={null} />
        </section>
      </div>
    </div>
  );
}

