import type { Metadata } from 'next';

export const SITE_URL = 'https://stockmarketmumbai.in';
export const SITE_NAME = 'Stock Market Mumbai';
export const DEFAULT_OG_IMAGE = '/images/brand/stock-market-mumbai-og.png';

export interface PageMetadataInput {
  title: string;
  description: string;
  path: string;
  type?: 'website' | 'article';
  publishedTime?: string;
  modifiedTime?: string;
  noIndex?: boolean;
}

export function canonicalUrl(path: string): string {
  if (!path || path === '/') {
    return SITE_URL;
  }
  const normalized = path.startsWith('/') ? path : `/${path}`;
  return `${SITE_URL}${normalized.replace(/\/+$/, '')}`;
}

export function buildPageMetadata({
  title,
  description,
  path,
  type = 'website',
  publishedTime,
  modifiedTime,
  noIndex = false,
}: PageMetadataInput): Metadata {
  const url = canonicalUrl(path);

  return {
    title: {
      absolute: title,
    },
    description,
    alternates: {
      canonical: url,
    },
    robots: noIndex
      ? { index: false, follow: false }
      : {
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
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_NAME,
      locale: 'en_IN',
      type,
      ...(type === 'article' && publishedTime ? { publishedTime } : {}),
      ...(type === 'article' && modifiedTime ? { modifiedTime } : {}),
      images: [
        {
          url: `${SITE_URL}${DEFAULT_OG_IMAGE}`,
          width: 1200,
          height: 630,
          alt: `${SITE_NAME} — Online Stock Market Education for Mumbai Learners`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [`${SITE_URL}${DEFAULT_OG_IMAGE}`],
    },
  };
}

export interface BreadcrumbItem {
  name: string;
  path: string;
}

export function buildBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, idx) => ({
      '@type': 'ListItem',
      position: idx + 1,
      name: item.name,
      item: canonicalUrl(item.path),
    })),
  };
}

export function safeJsonLd(data: unknown): string {
  return JSON.stringify(data).replace(/</g, '\\u003c');
}
