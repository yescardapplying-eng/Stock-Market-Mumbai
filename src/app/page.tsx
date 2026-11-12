import React from 'react';
import type { Metadata } from 'next';
import HeroSection from '@/components/home/HeroSection';
import WhatYouWillLearn from '@/components/home/WhatYouWillLearn';
import WhyLearnWithUs from '@/components/home/WhyLearnWithUs';
import FeaturedServices from '@/components/home/FeaturedServices';
import LearningJourney from '@/components/home/LearningJourney';
import FeaturedPackagesTeaser from '@/components/home/FeaturedPackagesTeaser';
import BlogArticlesSection from '@/components/home/BlogArticlesSection';
import TestimonialSection from '@/components/home/TestimonialSection';
import RiskAwarenessBanner from '@/components/home/RiskAwarenessBanner';
import HomepageFaqs from '@/components/home/HomepageFaqs';
import FinalCTA from '@/components/home/FinalCTA';

export const metadata: Metadata = {
  title: 'Stock Market Mumbai — Share Market Classes & Trading Education in Mumbai',
  description:
    'Join Stock Market Mumbai (stockmarketmumbai.in) for 100% educational trading courses in Mumbai. Learn technical analysis, option chain, and risk management with zero tips.',
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <WhatYouWillLearn />
      <WhyLearnWithUs />
      <FeaturedServices />
      <LearningJourney />
      <FeaturedPackagesTeaser />
      <BlogArticlesSection />
      <TestimonialSection />
      <RiskAwarenessBanner />
      <HomepageFaqs />
      <FinalCTA />
    </>
  );
}

