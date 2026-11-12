import type { Metadata } from 'next';
import EducationalTopicPageView from '@/components/educational/EducationalTopicPageView';
import { EDUCATIONAL_TOPICS } from '@/data/educationalTopics';

const topic = EDUCATIONAL_TOPICS['intraday-trading-basics'];

export const metadata: Metadata = {
  title: topic.seoTitle,
  description: topic.seoDescription,
  keywords: topic.keywords,
  alternates: { canonical: `https://stockmarketmumbai.in/${topic.slug}` },
};

export default function Page() {
  return <EducationalTopicPageView topic={topic} />;
}

