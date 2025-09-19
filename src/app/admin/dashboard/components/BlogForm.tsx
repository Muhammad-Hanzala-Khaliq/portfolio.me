"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { injectRichTextStyles } from "@/components/RichTextStyles"; // import your style injector

// ✅ SSR fix for ReactQuill
const ReactQuill = dynamic(() => import("react-quill-new"), { ssr: false });
import "react-quill-new/dist/quill.snow.css";

interface Blog {
  _id: string;
  slug: string;
  title: string;
  image: string;
  content: string;
  createdAt: string;
}

export default function BlogFormComponent() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [title, setTitle] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);

  // Inject rich text styles on component mount
  useEffect(() => {
    injectRichTextStyles(); // You can adjust maxHeight here
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/blog`);
    const data = await res.json();
    setBlogs(data);
  };

  const uploadToImgBB = async (file: File) => {
    const formData = new FormData();
    formData.append("image", file);
    const res = await fetch(`${process.env.NEXT_PUBLIC_IMG_DB}`, {
      method: "POST",
      body: formData,
    });
    const data = await res.json();
    return data.data?.url || "";
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    let imageUrl = "";
    if (image) imageUrl = await uploadToImgBB(image);

    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/blog`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, image: imageUrl, content }),
    });

    if (res.ok) {
      setTitle("");
      setImage(null);
      setContent("");
      fetchBlogs();
    }

    setLoading(false);
  };

const modules = {
  toolbar: [
    [{ header: [1, 2, 3, 4, 5, 6, false] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [{ color: [] }, { background: [] }],
    [{ list: "ordered" }, { list: "bullet" }, { indent: "-1" }, { indent: "+1" }],
    ["link", "code-block"],
    ["clean"],
  ],
};

const formats = [
  "header", "font", "size",
  "bold", "italic", "underline", "strike", "blockquote",
  "color", "background",
  "list", "bullet", "indent",
  "link", "code-block"
];


  return (
    <div className="bg-gray-800 max-w-[900px] mx-auto p-6 rounded-lg shadow">
      <h2 className="text-xl font-semibold mb-4 text-white">📝 Blogs</h2>

      {/* Blog Form */}
      <form onSubmit={handleSubmit} className="mb-6 space-y-4">
        <input
          type="text"
          placeholder="Blog Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-2 rounded bg-gray-700 border border-gray-600 text-white"
          required
        />

        <input
          type="file"
          accept="image/*"
          onChange={(e) => setImage(e.target.files?.[0] || null)}
          className="w-full p-2 rounded bg-gray-700 border border-gray-600 text-white"
        />

        <ReactQuill
          value={content}
          onChange={setContent}
      className="rich-text-editor bg-white rounded-lg w-full min-h-[400px] max-h-[400px] overflow-y-auto"
          theme="snow"
          modules={modules}
          formats={formats}
        />

        <button
          type="submit"
          disabled={loading}
          className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded mt-3"
        >
          {loading ? "Uploading..." : "Add Blog"}
        </button>
      </form>
    </div>
  );
}
