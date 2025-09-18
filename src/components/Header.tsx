// 📄 components/Header.tsx
// ✅ NO "use client"

import Link from "next/link";
import ThemeToggle from "./ThemeToogle";
import DesktopNav from "./DesktopNav"; // ← Client Component
import MobileMenu from "./MobileMenu"; // ← Client Component

export default function Header() {
  return (
    <nav 
      className="mt-4 mb-10 sticky z-10 top-0 p-4  backdrop-blur-[20px] backdrop-saturate-180 max-w-[896px] rounded-xl w-full mx-auto flex justify-between items-center"
    >
      {/* Accessibility Skip Link */}
      <Link
        href="#skip"
        className="absolute w-px h-px p-0 -m-px overflow-hidden clip-rect whitespace-nowrap border-0 text-text no-underline box-border"
      >
        Skip to content
      </Link>

      {/* Logo / Brand */}
      <ThemeToggle />

      {/* Desktop Navigation (Client) */}
      <DesktopNav />

      {/* Mobile Menu (Client) */}
      <MobileMenu />
    </nav>
  );
}