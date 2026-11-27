import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import {
  getAllLocationLandingPages,
  getLocationBySlug,
  getLocationPath,
} from '@/data/locationLandingPages';
import { buildPageMetadata, buildBreadcrumbSchema, safeJsonLd, SITE_URL } from '@/lib/seo';

// Components
import LocationHeroSection from '@/components/location/LocationHeroSection';
import WhatYouWillLearn from '@/components/home/WhatYouWillLearn';
import WhyLearnWithUs from '@/components/home/WhyLearnWithUs';
import FeaturedServices from '@/components/home/FeaturedServices';
import LearningJourney from '@/components/home/LearningJourney';
import LocationCoverageSection from '@/components/location/LocationCoverageSection';
import FeaturedPackagesTeaser from '@/components/home/FeaturedPackagesTeaser';
import TestimonialSection from '@/components/home/TestimonialSection';
import RiskAwarenessBanner from '@/components/home/RiskAwarenessBanner';
import LocationFaqs from '@/components/location/LocationFaqs';
import LocationFinalCTA from '@/components/location/LocationFinalCTA';

export const dynamicParams = false;

export async function generateStaticParams() {
  const locations = getAllLocationLandingPages();
  return locations.map((loc) => ({
    slug: `stock-market-classes-in-${loc.slug}`,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const location = getLocationBySlug(slug);

  if (!location) {
    return {
      title: { absolute: 'Location Not Found | Stock Market Mumbai' },
      robots: { index: false, follow: false },
    };
  }

  const title = `Online Stock Market Classes in ${location.name} | Stock Market Mumbai`;
  const description = `${location.intro} Attend interactive live trading courses, technical analysis, and risk management from ${location.name}, ${location.state}.`;

  return buildPageMetadata({
    title,
    description,
    path: getLocationPath(location.slug),
  });
}

export default async function LocationLandingPageRoute({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const location = getLocationBySlug(slug);

  if (!location) {
    notFound();
  }

  const breadcrumbsSchema = buildBreadcrumbSchema([
    { name: 'Home', path: '/' },
    { name: 'Service Areas', path: '/service-areas' },
    { name: location.name, path: getLocationPath(location.slug) },
  ]);

  const courseSchema = {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: `Online Stock Market Classes in ${location.name}`,
    description: location.intro,
    provider: {
      '@type': 'EducationalOrganization',
      name: 'Stock Market Mumbai',
      sameAs: SITE_URL,
    },
    educationalCredentialAwarded: 'Certificate of Course Completion',
    hasCourseInstance: {
      '@type': 'CourseInstance',
      courseMode: 'online',
      courseWorkload: 'PT10H',
      location: {
        '@type': 'VirtualLocation',
        name: `Online Live Webinar & Mentorship for ${location.name}`,
      },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(breadcrumbsSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(courseSchema) }}
      />

      {/* 1. Hero Section with Localized H1, Tagline, and Breadcrumb */}
      <LocationHeroSection location={location} />

      {/* 2. What You Will Learn (Core Technical Analysis, Option Chain, Risk Management) */}
      <WhatYouWillLearn />

      {/* 3. Why Learn With Us (Disciplined Mentorship & Non-Advisory Focus) */}
      <WhyLearnWithUs />

      {/* 4. Featured Services (Basic, Pro, Ultra Pro Plans) */}
      <FeaturedServices />

      {/* 5. Learning Journey (4-Step Guided Methodology) */}
      <LearningJourney />

      {/* 6. Localized Coverage Section with Quick Links to Neighboring Hubs */}
      <LocationCoverageSection location={location} />

      {/* 7. Featured Packages Teaser */}
      <FeaturedPackagesTeaser />

      {/* 8. Testimonials Section */}
      <TestimonialSection />

      {/* 9. Risk Awareness Banner (SEBI Compliance Notice) */}
      <RiskAwarenessBanner />

      {/* 10. Localized FAQs (with FAQPage JSON-LD) */}
      <LocationFaqs location={location} />

      {/* 11. Final CTA */}
      <LocationFinalCTA location={location} />
    </>
  );
}
