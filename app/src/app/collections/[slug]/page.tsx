import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { collections } from '@/lib/data';
import ProductDetail from '@/components/sections/ProductDetail';

export function generateStaticParams() {
  return collections.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const collection = collections.find((c) => c.slug === slug);
  if (!collection) return { title: 'Not found' };
  return {
    title: collection.title,
    description: collection.summary,
    openGraph: { images: [collection.image] },
  };
}

export default async function CollectionPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const collection = collections.find((c) => c.slug === slug);
  if (!collection) notFound();

  const related = collections.filter((c) => c.slug !== slug);

  return <ProductDetail collection={collection} related={related} />;
}
