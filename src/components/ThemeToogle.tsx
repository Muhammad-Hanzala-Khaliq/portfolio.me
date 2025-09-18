"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react"; // ✅ lucide-react icons

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="p-3 rounded-full bg-bg-blog  transition cursor-pointer"
      aria-label="Toggle Theme"
    >
      {theme === "light" ? (
        <Moon className="w-5 h-5" /> // 🌙 Dark Mode Icon
      ) : (
        <Sun className="w-5 h-5 text-teal-600" />  // ☀️ Light Mode Icon
      )}
    </button>
  );
}
