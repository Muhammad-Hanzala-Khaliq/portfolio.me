// ===== /app/blog/page.jsx =====
import React from "react";
import BlogPageClient from "./BlogPageClient";

export const metadata = {
  title: "Blog",
  description:
    "I grow by studying expert articles and tutorials from the industry. Here’s what inspires my work and deepens my skills in modern web development.",
  alternates: { canonical: "/blog" },
};
const BlogPage = () => {
  return <BlogPageClient />;
};

export default BlogPage;
