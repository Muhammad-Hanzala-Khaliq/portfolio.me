// ✅ NO "use client" — this is now a Server Component
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import ClientBlogDetail from './ClientBlogDetail';

// ✅ Define interface (you can also move this to a shared types file)
interface Blog {
  _id: string;
  title: string;
  slug: string;
  image: string;
  content: string;
  createdAt: string;
  views?: number;
}

// ✅ generateMetadata — runs on server, safe to use
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const unwrappedParams = await params;
  const slug = unwrappedParams.slug;

  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/blog/${slug}`,
      { next: { revalidate: 3600 } } // Revalidate every hour
    );

    if (!res.ok) return notFound();

    const blog: Blog = await res.json();

    // Clean description for SEO
    const plainTextDesc = blog.content
      .replace(/<[^>]*>/g, '') // Strip HTML
      .substring(0, 160)
      .trim() + '...';

    return {
      title: blog.title,
      description: plainTextDesc,
      alternates: { canonical: `/blog/${slug}` },
      openGraph: {
        title: blog.title,
        description: plainTextDesc,
        type: 'article',
        publishedTime: blog.createdAt,
        images: blog.image ? [blog.image] : [],
      },
      twitter: {
        card: 'summary_large_image',
        title: blog.title,
        description: plainTextDesc,
        images: blog.image ? [blog.image] : [],
      },
    };
  } catch (error) {
    console.error('Metadata generation failed:', error);
    return {
      title: 'Article Not Found',
      description: 'This article could not be loaded.',
    };
  }
}

// ✅ Main Page Component — passes slug to Client Component
export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const unwrappedParams = await params;
  const slug = unwrappedParams.slug;

  // Optional: Prefetch on server to improve loading state
  let blogExists = true;
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/blog/${slug}`,
      { next: { revalidate: 60 } }
    );
    if (!res.ok) blogExists = false;
  } catch {
    blogExists = false;
  }

  if (!blogExists) notFound();

  return <ClientBlogDetail slug={slug} />;
}