export type SnippetTag = string; // ✅ Add this

export type Snippet = {
  id?: string; // ✅ optional
  title: string;
  slug: string;
  description: string;
  code: string;
  usage: string[];
  category: "UI" | "API" | "Other";
  icon: React.ReactNode;
  language?: string;
  tags: SnippetTag[];          
  fileName?: string;            
  author?: string;              // ✅
  createdAt?: string;           // ✅
  updatedAt?: string;           // ✅
};

export const snippets: Snippet[] = [
  {
    id: "1",
    title: "Toast",
    slug: "toast",
    description: "A simple reusable notification toasts",
    icon: (
      <svg
        className="w-10 h-10 text-amber-500"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M12 22c5.421 0 9.842-4.421 9.842-9.842S17.421 2.316 12 2.316 2.158 6.737 2.158 12.158 6.579 22 12 22zm0-17.684c4.334 0 7.842 3.508 7.842 7.842s-3.508 7.842-7.842 7.842-7.842-3.508-7.842-7.842 3.508-7.842 7.842-7.842z" />
      </svg>
    ),
    code: `import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ToastContainer />
      <Component {...pageProps} />
    </>
  );
}

const logout = async () => {
  await firebase.auth().signOut();
  dispatch({ type: "LOGOUT" });
  toast.success("🚀 Logged out successfully!");
  router.push("/login");
};`,
    usage: [
      "Install react-toastify npm package: <code>npm i react-toastify</code>",
      "Import <code>ToastContainer</code> in your root layout or <code>_app.tsx</code>",
      "Call <code>toast.success('Message')</code> from anywhere in your app",
    ],
    category: "UI",
    tags: ["notification", "toast", "react-toastify"],
    author: "System",
    createdAt: "2025-09-08T10:00:00Z",
    updatedAt: "2025-09-08T10:00:00Z",
  },

  {
    id: "2",
    title: "Tailwind Card",
    slug: "tailwind-card",
    description: "Simple and clean card component using Tailwind CSS",
    icon: (
      <svg
        className="w-10 h-10 text-sky-500"
        fill="currentColor"
        viewBox="0 0 48 48"
      >
        <path d="M24 9c-7.333 0-12 3.667-14 11 2.333-3.667 5.333-5 9-4 1.957.326 3.362 1.563 4.977 3.09C26.935 21.67 29.068 24 34 24c7.333 0 12-3.667 14-11-2.333 3.667-5.333 5-9 4-1.957-.326-3.362-1.563-4.977-3.09C29.065 11.33 26.932 9 22 9zM10 24c-7.333 0-12 3.667-14 11 2.333-3.667 5.333-5 9-4 1.957.326 3.362 1.563 4.977 3.09C12.935 36.67 15.068 39 20 39c7.333 0 12-3.667 14-11-2.333 3.667-5.333 5-9 4-1.957-.326-3.362-1.563-4.977-3.09C15.065 26.33 12.932 24 10 24z" />
      </svg>
    ),
    code: `<div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white dark:bg-gray-800">
  <img
    className="w-full h-48 object-cover"
    src="/images/card.jpg"
    alt="Card image"
  />
  <div className="px-6 py-4">
    <div className="font-bold text-xl mb-2 text-gray-900 dark:text-white">
      Card Title
    </div>
    <p className="text-gray-700 dark:text-gray-300 text-base">
      This is a clean, responsive card built with Tailwind CSS.
    </p>
  </div>
  <div className="px-6 pt-4 pb-6">
    <span className="inline-block bg-blue-100 dark:bg-blue-900 rounded-full px-3 py-1 text-sm font-semibold text-blue-800 dark:text-blue-200 mr-2 mb-2">
      #design
    </span>
    <span className="inline-block bg-gray-100 dark:bg-gray-700 rounded-full px-3 py-1 text-sm font-semibold text-gray-800 dark:text-gray-200">
      #development
    </span>
  </div>
</div>`,
    usage: [
      "Copy and paste into any React component",
      "Replace image URL and text content",
      "Customize colors for light/dark mode",
    ],
    category: "UI",
    tags: ["tailwind", "card", "ui"],
    author: "System",
    createdAt: "2025-09-08T10:05:00Z",
    updatedAt: "2025-09-08T10:05:00Z",
  },

  {
    id: "3",
    title: "Modal",
    slug: "modal",
    description: "A reusable modal dialog with Tailwind CSS",
    icon: (
      <svg
        className="w-10 h-10 text-purple-500"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M4 6h16v12H4z" />
      </svg>
    ),
    code: `const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div
        className="absolute inset-0 bg-black opacity-50"
        onClick={onClose}
      ></div>
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg z-10">
        {children}
      </div>
    </div>
  );
};`,
    usage: [
      "Use state to control <code>isOpen</code>",
      "Pass <code>onClose</code> function to handle closing",
      "Render any content inside the modal",
    ],
    category: "UI",
    tags: ["modal", "dialog", "tailwind"],
    author: "System",
    createdAt: "2025-09-08T10:10:00Z",
    updatedAt: "2025-09-08T10:10:00Z",
  },

  {
    id: "4",
    title: "Copy to Clipboard",
    slug: "copy-to-clipboard",
    description: "Utility function to copy text to clipboard",
    icon: (
      <svg
        className="w-10 h-10 text-green-500"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M16 1H4a2 2 0 0 0-2 2v14h2V3h12V1zM20 5H8a2 2 0 0 0-2 2v16h14a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2zm0 16H8V7h12v14z" />
      </svg>
    ),
    code: `const copyToClipboard = async (text) => {
  try {
    await navigator.clipboard.writeText(text);
    toast.success("Copied to clipboard!");
  } catch (err) {
    toast.error("Failed to copy!");
  }
};`,
    usage: [
      "Call <code>copyToClipboard('your text')</code> anywhere",
      "Requires <code>navigator.clipboard</code> API",
      "Use toast for feedback (optional)",
    ],
    category: "UI",
    tags: ["clipboard", "copy", "utility"],
    author: "System",
    createdAt: "2025-09-08T10:15:00Z",
    updatedAt: "2025-09-08T10:15:00Z",
  },

  {
  id: "5",
  title: "Dark Mode Toggle",
  slug: "dark-mode-toggle",
  description: "A simple light/dark theme switcher using Tailwind",
  icon: "🌙", // 👈 SVG ki jagah emoji use kar liya
  code: `import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="p-2 rounded-full bg-gray-200 dark:bg-gray-700"
    >
      {theme === "light" ? "🌞" : "🌙"}
    </button>
  );
}`,
  usage: [
    "Place inside navbar or header",
    "Tailwind must be configured with <code>darkMode: 'class'</code>",
    "Toggles between light and dark themes",
  ],
  category: "UI",
  tags: ["theme", "dark-mode", "toggle"],
  author: "System",
  createdAt: "2025-09-08T10:20:00Z",
  updatedAt: "2025-09-08T10:20:00Z",
}

];

