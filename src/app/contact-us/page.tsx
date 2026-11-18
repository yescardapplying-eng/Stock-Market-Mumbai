import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Laptop, Mail, Clock, ShieldCheck, Globe, BookOpen } from 'lucide-react';
import AccordionFaq from '@/components/ui/AccordionFaq';
import ContactForm from '@/components/contact/ContactForm';
import { buildBreadcrumbSchema, buildPageMetadata, safeJsonLd } from '@/lib/seo';

export const metadata: Metadata = buildPageMetadata({
  title: 'Contact Stock Market Mumbai | Online Course Enquiries',
  description:
    'Contact Stock Market Mumbai for online stock market course enquiries, fees, admissions, learning schedules and educational program information.',
  path: '/contact-us',
});

const CONTACT_FAQS = [
  {
    q: 'Are Stock Market Mumbai courses online or at a physical branch?',
    a: 'All programs are conducted 100% online. Learners residing across Mumbai (South Mumbai, Dadar, Bandra, Andheri, Borivali, Ghatkopar, Mulund) and nearby areas (Thane, Kalwa, Mira Road) join remotely without visiting a physical center.',
  },
  {
    q: 'What can I ask through the online course enquiry form?',
    a: 'You can inquire about syllabus details, Basic, Our Pro, and Ultra Pro course fees, online batch schedules, language support, and portal access.',
  },
  {
    q: 'Will your team ever ask for my Demat password or OTP?',
    a: 'Never. Stock Market Mumbai is strictly an educational platform and will never request trading passwords, Demat logins, bank OTPs, or money to trade on your behalf.',
  },
];

export default function ContactUsPage() {
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: 'Home', path: '/' },
    { name: 'Contact Us', path: '/contact-us' },
  ]);

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
        dangerouslySetInnerHTML={{ __html: safeJsonLd(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(faqSchema) }}
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
            Online Admissions Desk
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0B2545] tracking-tight">
            Contact Stock Market Mumbai for Online Course Enquiries
          </h1>
          <p className="mt-3 text-sm sm:text-base text-[#1E293B]/80">
            Ask about our online stock market courses, syllabus modules, fee plans, and batch timings for learners in Mumbai.
          </p>
        </div>

        {/* Security Notice */}
        <div className="max-w-4xl mx-auto mb-10 bg-amber-50 border-2 border-amber-300 rounded-2xl p-4 sm:p-5 text-amber-950 flex items-start sm:items-center gap-3 reveal-on-scroll">
          <ShieldCheck className="w-6 h-6 text-amber-700 shrink-0 mt-0.5 sm:mt-0" aria-hidden="true" />
          <p className="text-xs sm:text-sm font-semibold leading-relaxed">
            <span className="uppercase tracking-wider font-extrabold text-amber-900 mr-2">
              Safety Notice:
            </span>
            Enquiries relate strictly to online education. We never give trading tips or ask for passwords, OTPs, or money to trade.
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm reveal-on-scroll">
            <h2 className="text-2xl font-bold text-[#0B2545] mb-1.5">Educational Enquiry</h2>
            <p className="text-xs text-slate-500 mb-6">
              Submit your enquiry below and our online student counseling team will share curriculum and enrolment information.
            </p>
            <ContactForm />
          </div>

          <div className="lg:col-span-5 space-y-6 reveal-on-scroll stagger-2">
            <div className="bg-[#0B2545] text-white rounded-3xl p-6 sm:p-8 border border-[#13345E] shadow-sm">
              <h2 className="text-xl font-bold mb-5">Online Helpdesk Details</h2>
              <ul className="space-y-4 text-sm text-slate-200">
                <li className="flex items-start gap-3">
                  <Laptop className="w-5 h-5 text-[#22C55E] shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <strong className="block text-white">Delivery Mode:</strong>
                    <span>100% Online Education (Serving Mumbai, Maharashtra, India)</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-[#22C55E] shrink-0 mt-0.5" aria-hidden="true" />
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
                  <Globe className="w-5 h-5 text-[#22C55E] shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <strong className="block text-white">Website:</strong>
                    <a href="https://stockmarketmumbai.in" className="hover:text-white hover:underline">
                      https://stockmarketmumbai.in
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-[#22C55E] shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <strong className="block text-white">Support Hours:</strong>
                    <span>Monday – Saturday: 9:30 AM to 6:30 PM IST</span>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm space-y-4">
              <div className="flex items-center gap-2 text-[#0B2545]">
                <BookOpen className="w-5 h-5 text-[#16A34A] shrink-0" aria-hidden="true" />
                <h2 className="text-base font-bold">Helpful Links Before Enrolling</h2>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Stock Market Mumbai operates online only without a walk-in office or classroom branch. Review our course tracks, fee comparison, and policies before sending an admission request:
              </p>
              <ul className="space-y-2 text-xs font-semibold text-[#0B2545]">
                <li>
                  <Link href="/our-packages" className="block p-2.5 rounded-xl bg-[#F8FAFC] hover:bg-[#DCFCE7] hover:text-[#15803D] transition-colors">
                    Compare Course Fees &amp; Packages &rarr;
                  </Link>
                </li>
                <li>
                  <Link href="/our-services" className="block p-2.5 rounded-xl bg-[#F8FAFC] hover:bg-[#DCFCE7] hover:text-[#15803D] transition-colors">
                    Explore Online Courses &amp; Syllabus &rarr;
                  </Link>
                </li>
                <li>
                  <Link href="/faqs" className="block p-2.5 rounded-xl bg-[#F8FAFC] hover:bg-[#DCFCE7] hover:text-[#15803D] transition-colors">
                    Read Frequently Asked Questions &rarr;
                  </Link>
                </li>
              </ul>
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
              Quick answers about online admissions and course enquiries.
            </p>
          </div>
          <AccordionFaq items={CONTACT_FAQS} defaultOpenIndex={null} />
        </section>
      </div>
    </div>
  );
}
