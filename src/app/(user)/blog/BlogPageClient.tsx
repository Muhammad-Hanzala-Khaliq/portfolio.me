"use client";
import Link from "next/link";
import UserLayout from "@/components/UserLayout";
import { useState, useEffect } from "react";
import BlogLoader from "@/components/BlogLoader";

interface Blog {
  _id: string;
  slug: string;
  title: string;
  views?: number;
}

export default function BlogPageClient() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_BASE_URL}/api/blog`,
          { next: { revalidate: 3600 } }
        );
        const data = await res.json();
        setBlogs(data);
      } catch (err) {
        console.error("Failed to fetch blogs:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  // Filter
  const filteredBlogs = blogs.filter((blog) =>
    blog.title.toLowerCase().includes(search.toLowerCase())
  );

  const mostPopular = [...filteredBlogs]
    .sort((a, b) => (b.views ?? 0) - (a.views ?? 0))
    .slice(0, 2);

  return (
    <UserLayout>
      {/* ✅ static part - hamesha visible */}
      <h1 className="md:text-[48px] text-[30px] font-bold text-heading mb-1">Blog</h1>
      <p className="text-text mb-6">
        I've been programming for almost 2 years now. Throughout this year, I've
        worked with various technologies. I'm here to share just that.
      </p>

      {loading ? (
        // ✅ sirf skeleton loader render hoga
        <BlogLoader count={6} />
      ) : (
        <>
          {/* Search */}
          <div className="relative w-full mb-6">
            <input
              type="text"
              placeholder="Search articles"
              className="w-full px-4 py-2 text-heading border border-gray-300 dark:border-none bg-bg-blog rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <svg
              className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>

          {/* Most Popular */}
          {mostPopular.length > 0 && (
            <>
              <h3 className="md:text-[36px] text-[24px] font-bold text-black mb-4">
                Most Popular
              </h3>
              {mostPopular.map((blog) => (
                <Link
                  key={blog._id}
                  href={`/blog/${blog.slug}`}
                  className="block mb-4 w-full"
                >
                  <div className="flex flex-col w-full p-4 bg-bg-blog rounded-md">
                    <div className="flex  md:justify-between flex-col md:flex-row">
                      <h4 className="text-heading font-semibold text-md">
                        {blog.title}
                      </h4>
                      <p className="text-gray-500 w-32 md:text-right">
                        {blog.views ?? "0"} views
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </>
          )}

          {/* All Posts */}
          <h3 className="md:text-[36px] text-[24px]  font-bold text-black mt-10 mb-4">
            All Posts
          </h3>
          {filteredBlogs.length > 0 ? (
            filteredBlogs.map((blog) => (
              <Link
                key={blog._id}
                href={`/blog/${blog.slug}`}
                className="block mb-4 w-full"
              >
                <div className="flex flex-col w-full p-4 bg-bg-blog rounded-md">
                  <div className="flex md:justify-between flex-col md:flex-row">
                    <h4 className="text-gray-800 font-semibold text-md">
                      {blog.title}
                    </h4>
                    <p className="text-gray-500 w-32 md:text-right">
                      {blog.views ?? "0"} views
                    </p>
                  </div>
                </div>
              </Link>
            ))
          ) : (
            <p className="text-gray-500 mt-2">No posts found.</p>
          )}
        </>
      )}
    </UserLayout>
  );
}
