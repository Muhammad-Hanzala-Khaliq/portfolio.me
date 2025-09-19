"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import BlogLoader from "@/components/BlogLoader";
import { HiArrowNarrowDown } from "react-icons/hi";

interface Blog {
  _id: string;
  slug: string;
  title: string;
  views?: number;
  createdAt?: string;
}

export default function LatestBlog({ limit = 1 }: { limit?: number }) {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_BASE_URL}/api/blog`,
          { next: { revalidate: 3600 } }
        );
        const data = await res.json();

        // sort by createdAt (latest first)
        const sorted = [...data].sort(
          (a, b) =>
            new Date(b.createdAt ?? "").getTime() -
            new Date(a.createdAt ?? "").getTime()
        );

        setBlogs(sorted.slice(0, limit)); // sirf latest `limit` blogs
      } catch (err) {
        console.error("Failed to fetch latest blogs:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, [limit]);

  
  if (loading) {
    return (
      <div className="mb-10">
        <h3 className="md:text-[36px] text-[24px] font-bold text-black mb-4">Latest Blog</h3>
        <BlogLoader count={limit} />
      </div>
    );
  }

  if (blogs.length === 0) {
    return (
      <div className="mb-10">
        <h3 className="md:text-[36px] text-[24px] font-bold text-heading mb-4">Latest Blog</h3>
        <p className="text-text">No latest blog found.</p>
      </div>
    );
  }


  return (
    <div className="mb-10">
      <h3 className="md:text-[36px] text-[24px] font-bold text-heading mb-4">Latest Blog</h3>
      {blogs.map((blog) => (
        <Link
          key={blog._id}
          href={`/blog/${blog.slug}`}
          className="block mb-4 md:w-[682px] w-full"
        >
          <div className="flex flex-col w-full p-4 bg-bg-blog rounded-md">
            <div className="flex md:justify-between flex-col md:flex-row">
              <h4 className="text-gray-800 font-semibold text-md">{blog.title}</h4>
              <p className="text-gray-500 w-32 md:text-right">
                {blog.views ?? "0"} views
              </p>
            </div>
          </div>
        </Link>
      ))}
      <Link
              href="/blog"
              className="flex items-center justify-center gap-2 transition mt-16"
            >
             See All Blogs <HiArrowNarrowDown/>
      
            </Link>
    </div>
  );
}
