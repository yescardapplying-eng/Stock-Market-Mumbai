import React from 'react';
import type { Metadata } from 'next';
import HeroSection from '@/components/home/HeroSection';
import WhatYouWillLearn from '@/components/home/WhatYouWillLearn';
import WhyLearnWithUs from '@/components/home/WhyLearnWithUs';
import FeaturedServices from '@/components/home/FeaturedServices';
import LearningJourney from '@/components/home/LearningJourney';
import MumbaiOnlineCoverage from '@/components/home/MumbaiOnlineCoverage';
import FeaturedPackagesTeaser from '@/components/home/FeaturedPackagesTeaser';
import BlogArticlesSection from '@/components/home/BlogArticlesSection';
import TestimonialSection from '@/components/home/TestimonialSection';
import RiskAwarenessBanner from '@/components/home/RiskAwarenessBanner';
import HomepageFaqs from '@/components/home/HomepageFaqs';
import FinalCTA from '@/components/home/FinalCTA';
import { buildPageMetadata } from '@/lib/seo';

export const metadata: Metadata = buildPageMetadata({
  title: 'Online Stock Market Classes in Mumbai | Stock Market Mumbai',
  description:
    'Learn stock market trading online in Mumbai with structured courses covering market basics, technical analysis, price action, options concepts and risk management. Explore courses and fees.',
  path: '/',
});

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <WhatYouWillLearn />
      <WhyLearnWithUs />
      <FeaturedServices />
      <LearningJourney />
      <MumbaiOnlineCoverage />
      <FeaturedPackagesTeaser />
      <BlogArticlesSection />
      <TestimonialSection />
      <RiskAwarenessBanner />
      <HomepageFaqs />
      <FinalCTA />
    </>
  );
}
