import type { Metadata } from 'next';
import EducationalTopicPageView from '@/components/educational/EducationalTopicPageView';
import { EDUCATIONAL_TOPICS } from '@/data/educationalTopics';
import { buildPageMetadata } from '@/lib/seo';

const topic = EDUCATIONAL_TOPICS['option-chain-explained'];

export const metadata: Metadata = buildPageMetadata({
  title: topic.seoTitle,
  description: topic.seoDescription,
  path: '/' + topic.slug,
});

export default function Page() {
  return <EducationalTopicPageView topic={topic} />;
}
