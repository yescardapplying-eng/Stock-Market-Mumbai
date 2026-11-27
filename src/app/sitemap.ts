import { MetadataRoute } from 'next';
import { BLOG_POSTS } from '@/data/blogArticles';
import { getAllLocationLandingPages } from '@/data/locationLandingPages';
import { SITE_URL } from '@/lib/seo';

const LAST_CONTENT_UPDATE = '2026-11-18';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE_URL;

  const mainPages: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified: LAST_CONTENT_UPDATE, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${baseUrl}/our-services`, lastModified: LAST_CONTENT_UPDATE, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/service-areas`, lastModified: LAST_CONTENT_UPDATE, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/about-us`, lastModified: LAST_CONTENT_UPDATE, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/our-packages`, lastModified: LAST_CONTENT_UPDATE, changeFrequency: 'weekly', priority: 0.95 },
    { url: `${baseUrl}/contact-us`, lastModified: LAST_CONTENT_UPDATE, changeFrequency: 'monthly', priority: 0.8 },
  ];

  const educationalPages: MetadataRoute.Sitemap = [
    'stock-market-basics',
    'technical-analysis',
    'fundamental-analysis',
    'trading-education',
    'risk-management',
    'trading-psychology',
    'fo-basics',
    'option-chain-explained',
    'ipo-basics',
    'demat-account-basics',
    'candlestick-patterns',
    'intraday-trading-basics',
    'swing-trading-explained',
  ].map((slug) => ({
    url: `${baseUrl}/${slug}`,
    lastModified: LAST_CONTENT_UPDATE,
    changeFrequency: 'monthly' as const,
    priority: 0.85,
  }));

  const toolsPages: MetadataRoute.Sitemap = [
    'tools',
    'tools/position-sizing-calculator',
    'tools/risk-reward-calculator',
    'tools/profit-loss-calculator',
    'tools/brokerage-calculator',
    'tools/sip-calculator',
    'tools/compound-interest-calculator',
  ].map((path) => ({
    url: `${baseUrl}/${path}`,
    lastModified: LAST_CONTENT_UPDATE,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  const resourcePages: MetadataRoute.Sitemap = [
    { url: `${baseUrl}/faqs`, lastModified: LAST_CONTENT_UPDATE, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/resources`, lastModified: LAST_CONTENT_UPDATE, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${baseUrl}/blog`, lastModified: LAST_CONTENT_UPDATE, changeFrequency: 'weekly', priority: 0.8 },
  ];

  const blogPages: MetadataRoute.Sitemap = BLOG_POSTS.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: post.lastUpdated,
    changeFrequency: 'monthly' as const,
    priority: 0.75,
  }));

  const legalPages: MetadataRoute.Sitemap = [
    'privacy-policy',
    'terms-and-conditions',
    'risk-disclosure',
    'refund-and-cancellation',
    'delivery-and-access',
    'cookie-policy',
    'grievance-redressal',
    'copyright-policy',
  ].map((slug) => ({
    url: `${baseUrl}/${slug}`,
    lastModified: LAST_CONTENT_UPDATE,
    changeFrequency: 'yearly' as const,
    priority: 0.4,
  }));

  const locationPages: MetadataRoute.Sitemap = getAllLocationLandingPages().map((item) => ({
    url: `${baseUrl}/stock-market-classes-in-${item.slug}`,
    lastModified: new Date().toISOString().split('T')[0],
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  return [
    ...mainPages,
    ...educationalPages,
    ...toolsPages,
    ...resourcePages,
    ...blogPages,
    ...locationPages,
    ...legalPages,
  ];
}
