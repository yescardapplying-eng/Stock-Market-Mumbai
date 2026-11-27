import React from 'react';
import type { Metadata } from 'next';
import ServiceAreasDirectory from '@/components/location/ServiceAreasDirectory';
import { buildPageMetadata, buildBreadcrumbSchema, safeJsonLd } from '@/lib/seo';

export const metadata: Metadata = buildPageMetadata({
  title: 'Stock Market Classes Service Areas | 320+ Hubs Across India | Stock Market Mumbai',
  description:
    'Explore 320+ prime learning hubs across Maharashtra, Delhi NCR, UP, Bihar, Gujarat, Karnataka and 14 states studying stock market classes online with Stock Market Mumbai.',
  path: '/service-areas',
});

export default function ServiceAreasPage() {
  const breadcrumbsSchema = buildBreadcrumbSchema([
    { name: 'Home', path: '/' },
    { name: 'Service Areas', path: '/service-areas' },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(breadcrumbsSchema) }}
      />
      <ServiceAreasDirectory />
    </>
  );
}
