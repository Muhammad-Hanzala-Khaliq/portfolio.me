"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

interface Blog {
  _id: string;
  slug:string,
  title: string;
  image: string;
  content: string;
  createdAt: string;
}

export default function BlogSection() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);

  // Fetch Blogs
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/blog`);
        const data = await res.json();
        setBlogs(data);
      } catch (error) {
        console.error("Failed to fetch blogs:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  // Delete Blog
  const handleDelete = async (slug: string) => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/blog/${slug}`,
        {
          method: "DELETE",
        }
      );

      if (res.ok) {
        setBlogs((prev) => prev.filter((blog) => blog.slug !== slug));
      } else {
        console.error("Failed to delete blog");
      }
    } catch (error) {
      console.error("Error deleting blog:", error);
    }
  };

  if (loading) {
    return <p className="text-gray-400 text-center">Loading blogs...</p>;
  }

  return (
    <div className="bg-gray-800 max-w-[900px] mx-auto p-6 rounded-lg shadow">
      <h2 className="text-xl font-semibold mb-4">📝 Blogs</h2>

      {blogs.length > 0 ? (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog) => (
            <div
              key={blog._id}
              className="bg-gray-800 border border-gray-700 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
            >
              {/* Link Wraps Card (excluding delete button) */}
              <Link
                href={`${process.env.NEXT_PUBLIC_BASE_UR}/blog/${blog.slug}`}
                className="flex-1 flex flex-col"
              >
                {/* Image */}
                {blog.image && (
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    width={400} // ya appropriate width
                    height={208} // h-52 equivalent
                    className="object-cover w-full h-52"
                  />
                )}

                {/* Content */}
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="text-xl font-semibold text-white mb-2 line-clamp-2">
                    {blog.title}
                  </h3>

                  <div
                    className="prose prose-invert max-w-none line-clamp-3 text-sm"
                    dangerouslySetInnerHTML={{
                      __html: blog.content.substring(0, 200) + "...",
                    }}
                  />
                </div>
              </Link>

              {/* Footer */}
              <div className="flex justify-between items-center p-5 border-t border-gray-700">
                <p className="text-xs text-gray-400">
                  {new Date(blog.createdAt).toLocaleDateString()}
                </p>
                <button
                  onClick={() => handleDelete(blog.slug)}
                  className="bg-red-600 hover:bg-red-700 text-white px-3 py-1.5 text-xs rounded-lg transition"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-400">No blogs yet.</p>
      )}
    </div>
  );
}
