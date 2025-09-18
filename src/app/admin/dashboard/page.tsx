"use client";

import { useEffect, useState } from "react";
import BlogSection from "./components/BlogSection";
import MessagesSection from "./components/MessageSection";
import LogoutComponent from "@/components/LogoutComponent";
import Link from "next/link";
export default function DashboardPage() {
  const [messages, setMessages] = useState([]);
  const [activeSection, setActiveSection] = useState<"blogs" | "messages">("blogs");

  useEffect(() => {
    if (activeSection === "messages") {
      const fetchMessages = async () => {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/blog`);
        const data = await res.json();
        setMessages(data);
      };
      fetchMessages();
    }
  }, [activeSection]);

  return (
    <div className="min-h-screen  bg-gray-900 text-white p-10 ">
      <h1 className="text-3xl font-bold mb-6 text-center">📊 Admin Dashboard</h1>

      {/* Navbar */}
      <div className="flex space-x-4 mb-6 justify-center">
        <button
          onClick={() => setActiveSection("blogs")}
          className={`px-4 py-2 rounded-lg font-semibold ${
            activeSection === "blogs"
              ? "bg-blue-600 text-white"
              : "bg-gray-700 text-gray-300 hover:bg-gray-600"
          }`}
        >
          Blogs
        </button>
        <button
          onClick={() => setActiveSection("messages")}
          className={`px-4 py-2 rounded-lg font-semibold ${
            activeSection === "messages"
              ? "bg-blue-600 text-white"
              : "bg-gray-700 text-gray-300 hover:bg-gray-600"
          }`}
        >
          Messages
        </button>
       <LogoutComponent/>
      <Link className="px-4 py-2 rounded-lg font-semibold bg-gray-700 text-gray-300 hover:bg-gray-600" href="/admin/create">Create New Blog</Link>

      </div>
      {/* Section Rendering */}
      {activeSection === "blogs" && <BlogSection />}
      {activeSection === "messages" && <MessagesSection messages={messages} />}
    </div>
  );
}
