import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import LeadEnquiryModal from '@/components/popups/LeadEnquiryModal';
import MouseCursorEffect from '@/components/ui/MouseCursorEffect';
import ScrollAnimationObserver from '@/components/ui/ScrollAnimationObserver';
import { LanguageProvider } from '@/context/LanguageContext';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://stockmarketmumbai.in';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Stock Market Mumbai — Share Market Classes & Trading Education in Mumbai',
    template: '%s | Stock Market Mumbai',
  },
  description:
    'Stock Market Mumbai (stockmarketmumbai.in) offers 100% educational share market classes in Mumbai. Learn price action, technical analysis, option chain, and capital risk management with zero tips.',
  keywords: [
    'Stock Market Mumbai',
    'Share market classes in Mumbai',
    'Stock market course Mumbai',
    'Trading classes in Mumbai',
    'Technical analysis course Mumbai',
    'Option chain course Mumbai',
    'Stock market training institute Mumbai',
    'Risk management trading Mumbai',
    'Share market course Andheri Bandra Dadar Thane',
    'Stock market education Mumbai',
  ],
  authors: [{ name: 'Stock Market Mumbai Academic Team' }],
  creator: 'Stock Market Mumbai',
  publisher: 'Stock Market Mumbai',
  alternates: {
    canonical: SITE_URL,
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicons/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicons/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicons/favicon-48x48.png', sizes: '48x48', type: 'image/png' },
    ],
    apple: [
      { url: '/favicons/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      {
        rel: 'android-chrome-192x192',
        url: '/favicons/android-chrome-192x192.png',
      },
      {
        rel: 'android-chrome-512x512',
        url: '/favicons/android-chrome-512x512.png',
      },
    ],
  },
  manifest: '/site.webmanifest',
  openGraph: {
    title: 'Stock Market Mumbai — 100% Educational Trading Academy in Mumbai',
    description:
      'Learn structured technical analysis, option chain reading, and capital loss control in Mumbai. Pure education with zero stock tips.',
    url: SITE_URL,
    siteName: 'Stock Market Mumbai',
    images: [
      {
        url: '/images/brand/stock-market-mumbai-logo.png',
        width: 1024,
        height: 341,
        alt: 'Stock Market Mumbai — Share Market Education',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Stock Market Mumbai — Trading Education in Mumbai',
    description:
      '100% educational share market courses in Mumbai. Master price action and capital risk control.',
    images: ['/images/brand/stock-market-mumbai-logo.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': ['EducationalOrganization', 'LocalBusiness'],
    name: 'Stock Market Mumbai',
    url: SITE_URL,
    logo: `${SITE_URL}/images/brand/stock-market-mumbai-logo.png`,
    image: `${SITE_URL}/images/brand/stock-market-mumbai-icon.png`,
    description:
      '100% educational stock market training institute in Mumbai teaching price action, option chain concepts, and capital risk management.',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Mumbai',
      addressRegion: 'Maharashtra',
      addressCountry: 'IN',
    },
    areaServed: [
      'Mumbai',
      'South Mumbai',
      'Bandra',
      'Andheri',
      'Dadar',
      'Powai',
      'Borivali',
      'Thane',
      'Navi Mumbai',
    ],
    email: 'info@stockmarketmumbai.in',
  };

  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body
        className="antialiased min-h-screen flex flex-col bg-[#F8FAFC] text-[#1E293B] selection:bg-[#16A34A] selection:text-white"
        suppressHydrationWarning
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema).replace(/</g, '\\u003c'),
          }}
        />
        <LanguageProvider>
          <MouseCursorEffect />
          <ScrollAnimationObserver />
          <Header />
          <main className="flex-1 w-full max-w-full overflow-x-clip">{children}</main>
          <Footer />
          <LeadEnquiryModal />
        </LanguageProvider>
      </body>
    </html>
  );
}

