'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X, Globe, ChevronDown, BookOpen, ShieldCheck } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langMenuOpen, setLangMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const [prevPathname, setPrevPathname] = useState(pathname);
  if (prevPathname !== pathname) {
    setPrevPathname(pathname);
    setMobileMenuOpen(false);
    setLangMenuOpen(false);
  }
  const { language, setLanguage, t, supportedLanguages } = useLanguage();
  const langRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(e.target as Node)) {
        setLangMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMobileMenuOpen(false);
        setLangMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  // Exact 5 required header navigation items in user's exact order
  const navLinks = [
    { name: t.nav.home, href: '/' },
    { name: t.nav.services, href: '/our-services' },
    { name: t.nav.about, href: '/about-us' },
    { name: t.nav.packages, href: '/our-packages' },
    { name: t.nav.contact, href: '/contact-us' },
  ];

  const currentLangObj = supportedLanguages.find((l) => l.code === language) || supportedLanguages[0];

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-200 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200'
          : 'bg-white border-b border-slate-100'
      }`}
    >
      {/* Top Compliance Bar */}
      <div className="bg-[#0B2545] text-slate-100 py-1.5 px-4 text-xs font-medium border-b border-[#13345E]">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-2">
          <div className="flex items-center gap-1.5 truncate">
            <ShieldCheck className="w-3.5 h-3.5 text-[#16A34A] shrink-0" aria-hidden="true" />
            <span className="truncate">
              Stock Market Mumbai — Online Stock Market Education for Mumbai Learners | Non-Advisory
            </span>
          </div>
          <div className="hidden sm:flex items-center gap-4 shrink-0 text-slate-300">
            <a href="mailto:info@stockmarketmumbai.in" className="hover:text-white transition-colors">
              info@stockmarketmumbai.in
            </a>
            <span className="text-slate-500">•</span>
            <Link href="/contact-us" className="hover:text-white transition-colors underline-offset-2 hover:underline">
              Contact Us
            </Link>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 sm:h-20">
          {/* Logo */}
          <div className="flex items-center shrink-0">
            <Link
              href="/"
              className="inline-flex items-center focus-visible:outline-2 focus-visible:outline-[#16A34A] rounded-md transition-opacity hover:opacity-95"
              aria-label="Stock Market Mumbai Home"
            >
              <div className="relative brand-logo-header flex items-center">
                <Image
                  src="/images/brand/stock-market-mumbai-logo.png"
                  alt="Stock Market Mumbai logo"
                  width={1024}
                  height={341}
                  priority
                  className="w-full h-auto object-contain"
                />
              </div>
            </Link>
          </div>

          {/* Desktop Nav (Strictly 5 items) */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3 py-2 rounded-lg text-[15px] font-semibold transition-all duration-150 relative ${
                    isActive
                      ? 'text-[#0B2545] bg-[#DCFCE7]/60 font-bold'
                      : 'text-[#1E293B] hover:text-[#0B2545] hover:bg-slate-50'
                  }`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-[#16A34A] rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Controls: Language + Max 2-Word CTA */}
          <div className="hidden lg:flex items-center space-x-3">
            <div className="relative" ref={langRef}>
              <button
                type="button"
                onClick={() => setLangMenuOpen(!langMenuOpen)}
                className="touch-target px-2.5 py-1.5 rounded-lg border border-slate-200 text-xs font-semibold text-[#1E293B] hover:bg-slate-50 hover:border-slate-300 transition-all flex items-center gap-1.5 cursor-pointer"
                aria-expanded={langMenuOpen}
                aria-haspopup="true"
                aria-label="Change Language"
              >
                <Globe className="w-3.5 h-3.5 text-[#16A34A]" aria-hidden="true" />
                <span>{currentLangObj.nativeLabel}</span>
                <ChevronDown
                  className={`w-3 h-3 text-slate-400 transition-transform duration-200 ${
                    langMenuOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {langMenuOpen && (
                <div
                  className="absolute right-0 mt-2 w-44 bg-white rounded-xl shadow-xl border border-slate-100 py-1.5 z-50 animate-fade-in"
                  role="menu"
                >
                  <div className="px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-slate-400 border-b border-slate-100">
                    Language
                  </div>
                  {supportedLanguages.map((item) => (
                    <button
                      key={item.code}
                      type="button"
                      onClick={() => {
                        setLanguage(item.code);
                        setLangMenuOpen(false);
                      }}
                      className={`w-full text-left px-3.5 py-2 text-sm flex items-center justify-between transition-colors cursor-pointer ${
                        language === item.code
                          ? 'bg-[#DCFCE7] text-[#15803D] font-bold'
                          : 'text-[#1E293B] hover:bg-slate-50'
                      }`}
                      role="menuitem"
                    >
                      <span>{item.nativeLabel}</span>
                      <span className="text-xs text-slate-400 font-normal">{item.label}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/our-packages"
              className="btn-smooth inline-flex items-center justify-center px-5 py-2.5 rounded-lg text-sm font-bold text-white bg-[#16A34A] hover:bg-[#15803D] shadow-sm"
            >
              <BookOpen className="w-4 h-4 mr-1.5" aria-hidden="true" />
              <span>{t.nav.cta}</span>
            </Link>
          </div>

          {/* Mobile Right Controls */}
          <div className="flex items-center space-x-2 lg:hidden">
            <button
              type="button"
              onClick={() => setLangMenuOpen(!langMenuOpen)}
              className="touch-target px-2.5 py-1 rounded-md border border-slate-200 text-xs font-semibold text-[#1E293B] bg-white hover:bg-slate-50"
              aria-label="Change Language"
              aria-expanded={langMenuOpen}
            >
              <Globe className="w-3.5 h-3.5 text-[#16A34A] inline mr-1" />
              <span>{currentLangObj.code.toUpperCase()}</span>
            </button>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="touch-target p-2 rounded-lg text-[#0B2545] hover:bg-slate-100 transition-colors"
              aria-label={mobileMenuOpen ? t.nav.close : t.nav.menu}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-[#0B2545]" aria-hidden="true" />
              ) : (
                <Menu className="w-6 h-6 text-[#0B2545]" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Language Modal */}
      {langMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-black/40 backdrop-blur-xs flex items-center justify-center p-4 animate-fade-in">
          <div className="bg-white rounded-2xl w-full max-w-xs shadow-2xl border border-slate-100 p-4 animate-modal-in">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <span className="font-bold text-[#0B2545] text-base">Select Language</span>
              <button
                type="button"
                onClick={() => setLangMenuOpen(false)}
                className="touch-target text-slate-500 hover:text-slate-800"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="grid grid-cols-3 gap-2 mt-3">
              {supportedLanguages.map((item) => (
                <button
                  key={item.code}
                  type="button"
                  onClick={() => {
                    setLanguage(item.code);
                    setLangMenuOpen(false);
                  }}
                  className={`touch-target px-2 py-2.5 rounded-lg text-xs font-semibold flex flex-col items-center justify-center text-center transition-colors ${
                    language === item.code
                      ? 'bg-[#16A34A] text-white'
                      : 'bg-slate-50 text-[#1E293B] hover:bg-slate-100'
                  }`}
                >
                  <span className="font-bold">{item.nativeLabel}</span>
                  <span className="text-[10px] opacity-80">{item.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[104px] bottom-0 z-40 bg-white/98 backdrop-blur-md overflow-y-auto border-t border-slate-200 p-6 flex flex-col justify-between animate-fade-in">
          <div className="space-y-2">
            <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Menu</p>
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`touch-target w-full flex items-center justify-between px-4 py-3 rounded-xl text-base font-bold transition-all ${
                    isActive
                      ? 'bg-[#0B2545] text-white shadow-sm'
                      : 'text-[#1E293B] hover:bg-slate-100'
                  }`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  <span>{link.name}</span>
                  {isActive && <span className="w-2 h-2 rounded-full bg-[#16A34A]" />}
                </Link>
              );
            })}
          </div>

          <div className="pt-6 border-t border-slate-200 mt-6 space-y-3">
            <Link
              href="/our-packages"
              onClick={() => setMobileMenuOpen(false)}
              className="btn-smooth touch-target w-full flex items-center justify-center px-4 py-3 rounded-xl text-base font-bold text-white bg-[#16A34A] hover:bg-[#15803D] shadow-md"
            >
              <BookOpen className="w-5 h-5 mr-2" aria-hidden="true" />
              <span>{t.nav.cta}</span>
            </Link>

            <div className="bg-[#F8FAFC] rounded-xl p-3 text-center border border-slate-200">
              <p className="text-xs font-medium text-[#1E293B]">
                Mumbai Education Desk: <span className="font-bold">info@stockmarketmumbai.in</span>
              </p>
              <p className="text-[11px] text-slate-500 mt-0.5">Mumbai, Maharashtra, India</p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

