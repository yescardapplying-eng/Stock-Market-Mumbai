import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Mail, ShieldAlert, Globe } from 'lucide-react';
import {
  InstagramIcon,
  FacebookIcon,
  YoutubeIcon,
  LinkedinIcon,
} from '@/components/icons/SocialIcons';

export default function Footer() {
  return (
    <footer className="bg-[#0B2545] text-slate-200 border-t border-[#13345E] mt-auto">
      {/* Main 5-Column Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 xl:gap-10">
          {/* Column 1: Brand Logo & Summary */}
          <div className="lg:col-span-1 space-y-4">
            <Link href="/" className="inline-block" aria-label="Stock Market Mumbai Home">
              <div className="bg-white p-2.5 rounded-xl inline-block brand-logo-footer shadow-md">
                <Image
                  src="/images/brand/stock-market-mumbai-logo.png"
                  alt="Stock Market Mumbai logo"
                  width={1024}
                  height={341}
                  loading="lazy"
                  className="w-full h-auto object-contain"
                />
              </div>
            </Link>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Online stock market education for Mumbai learners. Learn market basics, price action, option chain concepts, and risk management without stock tips or advisory noise.
            </p>
            <div className="pt-1 text-xs">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#13345E] text-[#22C55E] font-semibold border border-[#16A34A]/30">
                <span className="w-1.5 h-1.5 rounded-full bg-[#22C55E]" />
                Online Educational Platform
              </span>
            </div>
          </div>

          {/* Column 2: Main Navigation */}
          <div className="space-y-3">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">Quick Links</h3>
            <ul className="space-y-2 text-sm text-slate-300">
              <li>
                <Link href="/" className="hover:text-[#22C55E] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/our-services" className="hover:text-[#22C55E] transition-colors">
                  Our Services
                </Link>
              </li>
              <li>
                <Link href="/about-us" className="hover:text-[#22C55E] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/our-packages" className="hover:text-[#22C55E] transition-colors">
                  Our Packages
                </Link>
              </li>
              <li>
                <Link href="/contact-us" className="hover:text-[#22C55E] transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/faqs" className="hover:text-[#22C55E] transition-colors">
                  FAQs
                </Link>
              </li>
              <li>
                <Link href="/resources" className="hover:text-[#22C55E] transition-colors">
                  Learning Resources
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Educational Topics & Tools */}
          <div className="space-y-3">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">Courses &amp; Tools</h3>
            <ul className="space-y-2 text-sm text-slate-300">
              <li>
                <Link href="/stock-market-basics" className="hover:text-[#22C55E] transition-colors">
                  Stock Market Basics
                </Link>
              </li>
              <li>
                <Link href="/technical-analysis" className="hover:text-[#22C55E] transition-colors">
                  Technical Analysis
                </Link>
              </li>
              <li>
                <Link href="/fundamental-analysis" className="hover:text-[#22C55E] transition-colors">
                  Fundamental Analysis
                </Link>
              </li>
              <li>
                <Link href="/fo-basics" className="hover:text-[#22C55E] transition-colors">
                  F&amp;O Basics
                </Link>
              </li>
              <li>
                <Link href="/option-chain-explained" className="hover:text-[#22C55E] transition-colors">
                  Option Chain Guide
                </Link>
              </li>
              <li>
                <Link href="/risk-management" className="hover:text-[#22C55E] transition-colors">
                  Risk Management
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-[#22C55E] transition-colors">
                  Mumbai Market Blog
                </Link>
              </li>
              <li>
                <Link href="/tools" className="hover:text-[#22C55E] transition-colors">
                  Financial Calculators
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Legal & Policies */}
          <div className="space-y-3">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">Legal &amp; Policies</h3>
            <ul className="space-y-2 text-sm text-slate-300">
              <li>
                <Link href="/privacy-policy" className="hover:text-[#22C55E] transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-and-conditions" className="hover:text-[#22C55E] transition-colors">
                  Terms &amp; Conditions
                </Link>
              </li>
              <li>
                <Link href="/risk-disclosure" className="hover:text-[#22C55E] transition-colors">
                  Risk Disclosure
                </Link>
              </li>
              <li>
                <Link href="/refund-and-cancellation" className="hover:text-[#22C55E] transition-colors">
                  Refund &amp; Cancellation
                </Link>
              </li>
              <li>
                <Link href="/delivery-and-access" className="hover:text-[#22C55E] transition-colors">
                  Delivery &amp; Access
                </Link>
              </li>
              <li>
                <Link href="/cookie-policy" className="hover:text-[#22C55E] transition-colors">
                  Cookie Policy
                </Link>
              </li>
              <li>
                <Link href="/grievance-redressal" className="hover:text-[#22C55E] transition-colors">
                  Grievance Redressal
                </Link>
              </li>
              <li>
                <Link href="/copyright-policy" className="hover:text-[#22C55E] transition-colors">
                  Copyright Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 5: Online Desk & Social */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">Online Desk</h3>
            <ul className="space-y-2.5 text-sm text-slate-300">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#22C55E] shrink-0 mt-0.5" aria-hidden="true" />
                <span>Online Classes • Mumbai, Maharashtra, India</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#22C55E] shrink-0" aria-hidden="true" />
                <a href="mailto:info@stockmarketmumbai.in" className="hover:text-white transition-colors break-all">
                  info@stockmarketmumbai.in
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Globe className="w-4 h-4 text-[#22C55E] shrink-0" aria-hidden="true" />
                <a href="https://stockmarketmumbai.in" className="hover:text-white transition-colors">
                  stockmarketmumbai.in
                </a>
              </li>
            </ul>

            <div className="pt-1">
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">Follow Us</p>
              <div className="flex items-center gap-2">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-[#13345E] hover:bg-[#16A34A] text-slate-200 hover:text-white flex items-center justify-center transition-colors border border-white/10"
                  aria-label="Instagram"
                >
                  <InstagramIcon className="w-4 h-4" />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-[#13345E] hover:bg-[#16A34A] text-slate-200 hover:text-white flex items-center justify-center transition-colors border border-white/10"
                  aria-label="Facebook"
                >
                  <FacebookIcon className="w-4 h-4" />
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-[#13345E] hover:bg-[#16A34A] text-slate-200 hover:text-white flex items-center justify-center transition-colors border border-white/10"
                  aria-label="YouTube"
                >
                  <YoutubeIcon className="w-4 h-4" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-[#13345E] hover:bg-[#16A34A] text-slate-200 hover:text-white flex items-center justify-center transition-colors border border-white/10"
                  aria-label="LinkedIn"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Prominent Educational Disclaimer */}
      <div className="border-t border-[#13345E] bg-[#071A33] py-5 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex items-start sm:items-center gap-3">
          <ShieldAlert className="w-5 h-5 text-amber-400 shrink-0 mt-0.5 sm:mt-0" aria-hidden="true" />
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            <strong className="text-white font-semibold">Educational Disclaimer: </strong>
            Stock Market Mumbai is a 100% educational institute and is NOT registered with SEBI as a Research Analyst or Investment Adviser. We do not provide stock tips, trading calls, or guaranteed returns.
          </p>
        </div>
      </div>

      {/* Final Copyright Section — Nothing below this section */}
      <div className="border-t border-[#13345E] bg-[#051224] py-4 px-4 sm:px-6 lg:px-8 text-xs sm:text-sm text-slate-300">
        <div className="max-w-7xl mx-auto text-center">
          © 2026 All Rights Reserved by{' '}
          <a
            href="https://stockmarketmumbai.in"
            className="text-[#22C55E] font-bold hover:text-white hover:underline transition-colors"
          >
            Stock Market Mumbai.in
          </a>
        </div>
      </div>
    </footer>
  );
}

