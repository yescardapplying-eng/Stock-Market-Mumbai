import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import LeadEnquiryModal from '@/components/popups/LeadEnquiryModal';
import MouseCursorEffect from '@/components/ui/MouseCursorEffect';
import ScrollAnimationObserver from '@/components/ui/ScrollAnimationObserver';
import { LanguageProvider } from '@/context/LanguageContext';
import { DEFAULT_OG_IMAGE, SITE_NAME, SITE_URL, safeJsonLd } from '@/lib/seo';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Online Stock Market Classes in Mumbai | Stock Market Mumbai',
    template: '%s | Stock Market Mumbai',
  },
  description:
    'Learn stock market trading online in Mumbai with structured courses covering market basics, technical analysis, price action, options concepts and risk management. Explore courses and fees.',
  authors: [{ name: 'Stock Market Mumbai Editorial Team' }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
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
    title: 'Online Stock Market Classes in Mumbai | Stock Market Mumbai',
    description:
      'Learn stock market trading online in Mumbai with structured courses covering market basics, technical analysis, price action, options concepts and risk management.',
    url: SITE_URL,
    siteName: SITE_NAME,
    images: [
      {
        url: `${SITE_URL}${DEFAULT_OG_IMAGE}`,
        width: 1200,
        height: 630,
        alt: 'Stock Market Mumbai — Online Stock Market Education for Mumbai Learners',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Online Stock Market Classes in Mumbai | Stock Market Mumbai',
    description:
      'Online stock market education for Mumbai learners covering market basics, technical analysis, option chain concepts, and risk management.',
    images: [`${SITE_URL}${DEFAULT_OG_IMAGE}`],
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
    '@type': 'Organization',
    name: SITE_NAME,
    url: SITE_URL,
    logo: {
      '@type': 'ImageObject',
      url: `${SITE_URL}/images/brand/stock-market-mumbai-logo.png`,
      width: 1024,
      height: 341,
    },
    description:
      'Online stock market education platform serving learners in Mumbai, Maharashtra, India with courses on market basics, technical analysis, option chain concepts, and risk management.',
    email: 'info@stockmarketmumbai.in',
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'admissions and student support',
      email: 'info@stockmarketmumbai.in',
      areaServed: 'IN',
      availableLanguage: ['English', 'Hindi', 'Marathi'],
    },
  };

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE_NAME,
    url: SITE_URL,
    inLanguage: 'en-IN',
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
            __html: safeJsonLd(organizationSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: safeJsonLd(websiteSchema),
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
