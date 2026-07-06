import type { Metadata } from 'next';
import PageBanner from '@/components/layout/PageBanner';
import CollectionsClient from '@/components/sections/CollectionsClient';
import StripeRule from '@/components/ui/StripeRule';
import { heritageImage } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Collections',
  description:
    'Explore the M\u2019Butu Collection: Hartmann mountain zebra, plains zebra, springbok, Nguni cowhide, leather rugs and African d\u00e9cor.',
};

export default function CollectionsPage() {
  return (
    <>
      <PageBanner
        eyebrow="Collections"
        title={['Six signatures.', 'One standard.']}
        intro="Each material is sourced, graded and exported under certification. Browse the full range or enquire for bespoke selection."
        image={heritageImage}
      />
      <div className="section-pad">
        <StripeRule />
      </div>
      <CollectionsClient />
    </>
  );
}
