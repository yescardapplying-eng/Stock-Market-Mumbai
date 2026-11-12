export interface PackagePlan {
  id: string;
  name: string;
  price: string;
  duration: string;
  badge?: string;
  isPopular?: boolean;
  description: string;
  usps: string[]; // Strictly concise 6, 8, 7 USPs (~6-9 words each)
  ctaLabel: string; // Max 2 words
}

export const MUMBAI_PACKAGES: PackagePlan[] = [
  {
    id: 'basic',
    name: 'Basic Plan',
    price: '₹24,999',
    duration: '1 Month',
    description: 'Strong foundation in Mumbai stock market basics and capital safety.',
    usps: [
      'Beginner-friendly Mumbai stock market foundation modules',
      'Weekly live interactive online educational sessions',
      'Recorded HD lectures for flexible revision',
      'Downloadable candlestick and chart study PDFs',
      'Group doubt-clearing and risk sizing workshops',
      'Verified Stock Market Mumbai completion certificate',
    ],
    ctaLabel: 'Apply Now',
  },
  {
    id: 'our-pro',
    name: 'Our Pro Plan',
    price: '₹55,999',
    duration: '6 Months',
    badge: 'Most Popular',
    isPopular: true,
    description: 'Complete price action, option chain, and disciplined risk control.',
    usps: [
      'Complete Basic Plan modules plus advanced training',
      'Two live Mumbai cohort webinars every week',
      'Price action, indicators, and chart geometry training',
      'Option chain and open interest concept analysis',
      'Practical case studies with historical market charts',
      'Weekly assignments, quizzes, and risk management drills',
      'Monthly one-on-one academic doubt resolution call',
      'Advanced Stock Market Mumbai completion certificate',
    ],
    ctaLabel: 'Enroll Now',
  },
  {
    id: 'ultra-pro',
    name: 'Ultra Pro Plan',
    price: '₹95,999',
    duration: '1 Year',
    description: 'Full-year personalized mentorship and institutional market structure study.',
    usps: [
      'All Basic and Our Pro curriculum access',
      'Personalized one-on-one educational mentorship in Mumbai',
      'Custom annual learning roadmap and progress tracking',
      'Weekly one-on-one doubt-clearing and chart reviews',
      'Option Greeks, hedging models, and volatility studies',
      'Priority student support and exclusive alumni community',
      'Mastery Stock Market Mumbai completion certificate',
    ],
    ctaLabel: 'Join Now',
  },
];

export interface ComparisonRow {
  feature: string;
  basic: string;
  pro: string;
  ultra: string;
}

export const PACKAGE_COMPARISON_ROWS: ComparisonRow[] = [
  {
    feature: 'Tuition Fee',
    basic: '₹24,999',
    pro: '₹55,999',
    ultra: '₹95,999',
  },
  {
    feature: 'Program Duration',
    basic: '1 Month',
    pro: '6 Months',
    ultra: '1 Year (12 Months)',
  },
  {
    feature: 'Stock Market Foundation Modules',
    basic: '✓ Included',
    pro: '✓ Included',
    ultra: '✓ Included',
  },
  {
    feature: 'Live Cohort Sessions',
    basic: '1 / Week',
    pro: '2 / Week',
    ultra: '2+ / Week',
  },
  {
    feature: 'Technical & Chart Geometry',
    basic: 'Core Basics',
    pro: '✓ Full Mastery',
    ultra: '✓ Institutional Level',
  },
  {
    feature: 'Option Chain & Greeks Study',
    basic: '—',
    pro: '✓ Included',
    ultra: '✓ Deep Hedging Models',
  },
  {
    feature: '1-on-1 Doubt Resolution',
    basic: 'Group Support',
    pro: 'Monthly 1-on-1',
    ultra: 'Weekly 1-on-1',
  },
  {
    feature: 'Capital Risk Control Drills',
    basic: '✓ Included',
    pro: '✓ Advanced Sizing',
    ultra: '✓ Custom Portfolio Lab',
  },
  {
    feature: 'Completion Certificate',
    basic: 'Foundation',
    pro: 'Advanced',
    ultra: 'Mastery',
  },
];

