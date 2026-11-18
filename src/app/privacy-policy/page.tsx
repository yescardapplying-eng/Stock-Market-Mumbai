import type { Metadata } from 'next';
import LegalPageLayout from '@/components/legal/LegalPageLayout';
import { buildPageMetadata } from '@/lib/seo';

export const metadata: Metadata = buildPageMetadata({
  title: 'Privacy Policy | Stock Market Mumbai',
  description:
    'Privacy Policy explaining what enquiry data Stock Market Mumbai collects, how it is used, retention practices and privacy contact options.',
  path: '/privacy-policy',
});

export default function Page() {
  return (
    <LegalPageLayout
      title="Privacy Policy"
      path="/privacy-policy"
      lastUpdated="November 2026"
      sections={[
        {
          title: 'Information Collected',
          content: <p>We collect only the name, mobile number, state, and educational query details voluntarily submitted through our popup or contact forms on stockmarketmumbai.in.</p>,
        },
        {
          title: 'Purpose of Use',
          content: <p>Submitted contact details are used solely by our online academic counseling team to share course schedules, syllabus details, and respond to your inquiries.</p>,
        },
        {
          title: 'Zero Third-Party Selling & Account Safety',
          content: <p>Stock Market Mumbai never sells student data and will never request Demat passwords, broker logins, or OTPs.</p>,
        },
      ]}
      faqs={[
        { q: 'Is my phone number shared with brokers or tip callers?', a: 'Never. Your inquiry information stays strictly within Stock Market Mumbai for course counseling only.' },
        { q: 'Can I request deletion of my inquiry data?', a: 'Yes. Email info@stockmarketmumbai.in anytime to update or delete your contact record.' },
        { q: 'Do you store trading account credentials?', a: 'No. We never collect or ask for trading account IDs, passwords, or OTPs.' },
      ]}
    />
  );
}
