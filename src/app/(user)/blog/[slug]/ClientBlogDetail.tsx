'use client';

import { useState, useEffect } from 'react';
import RichTextRenderer from '@/components/RichTextRender';
import Loader from '@/components/Loader';
import Image from 'next/image';

interface Blog {
  _id: string;
  title: string;
  slug: string;
  image: string;
  content: string;
  createdAt: string;
  views?: number;
}

export default function ClientBlogDetail({ slug }: { slug: string }) {
  const [blog, setBlog] = useState<Blog | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_BASE_URL}/api/blog/${slug}`,
          { next: { revalidate: 86400 } }
        );
        if (!res.ok) {
          console.error('Blog not found');
          return;
        }
        const data = await res.json();
        setBlog(data);
      } catch (error) {
        console.error('Error fetching blog:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [slug]);

  if (loading)
    return (
      <div className="text-center flex items-center justify-center h-[70vh]">
        <Loader />
      </div>
    );

  if (!blog) return <div className="text-center text-red-500 mt-10">Article not found.</div>;

  return (
    <div className="max-w-3xl mx-auto p-6 rounded-lg shadow mt-6">
      <h1 className="text-3xl font-bold mb-2">{blog.title}</h1>
      {blog.image && (
        <Image
          src={blog.image}
          alt={blog.title}
          width={800} // Example width
          height={400} // Example height
          className="w-full h-80 object-cover rounded mb-6"
        />
      )}
      <RichTextRenderer
        content={blog.content}
        className="prose prose-invert max-w-none text-gray-300"
      />
      <p className="text-sm text-gray-400 mt-6">
        Published on {new Date(blog.createdAt).toLocaleDateString()}
      </p>
    </div>
  );
}