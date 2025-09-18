// 📄 components/DesktopNav.tsx
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/blog", label: "Blog" },
  { href: "/snippets", label: "Snippets" },
  { href: "/resources", label: "Resources" },
  { href: "/projects", label: "Projects" },
];

export default function DesktopNav() {
  const pathname = usePathname();

  return (
    <div className="hidden md:flex space-x-1 bg-bg dark:border dark:border-gray-100/20 backdrop-blur-md rounded-full px-2 py-1 shadow-sm">
      {navLinks.map(({ href, label }) => {
        const isActive = pathname === href;

        return (
          <Link
            key={href}
            href={href}
            className="transition-all duration-150 delay-150 ease-in-out text-text text-sm leading-5 py-2 px-3 rounded-md inline-block relative no-underline hover:text-teal-600 font-semibold"
          >
            <span
              className={`relative z-10 ${
                isActive ? "text-teal-700" : "text-heading"
              }`}
            >
              {label}
            </span>
            {isActive && (
              <span className="absolute left-1 right-1 -bottom-px h-px bg-gradient-to-r from-blue-500/0 via-blue-500/40 to-blue-500/0"></span>
            )}
          </Link>
        );
      })}
    </div>
  );
}