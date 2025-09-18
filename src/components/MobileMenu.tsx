// 📄 components/MobileMenu.tsx
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/blog", label: "Blog" },
  { href: "/snippets", label: "Snippets" },
  { href: "/resources", label: "Resources" },
  { href: "/projects", label: "Projects" },
];

export default function MobileMenu() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* Mobile Hamburger Button */}
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="md:hidden p-2 rounded-lg text-text hover:bg-bg focus:outline-none"
        aria-label="Toggle menu"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          {isMenuOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>

      {/* Mobile Menu Dropdown */}
      <div
        className={`md:hidden absolute top-16 left-2 w-[95%] bg-bg-mobile shadow-xl rounded-xl z-20 transform transition-all duration-300 ease-in-out ${
          isMenuOpen ? "scale-100 opacity-100" : "scale-95 opacity-0 pointer-events-none"
        }`}
      >
        <div className="p-4 space-y-3">
          {navLinks.map(({ href, label }) => {
            const isActive = pathname === href;

            return (
              <Link
                key={href}
                href={href}
                onClick={() => setIsMenuOpen(false)}
                className={`block text-sm font-medium py-2 px-3 rounded-md transition-colors ${
                  isActive
                    ? "text-teal-700 bg-gray-100"
                    : "text-text hover:text-teal-600 hover:bg-gray-50"
                }`}
              >
                {label}
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
}