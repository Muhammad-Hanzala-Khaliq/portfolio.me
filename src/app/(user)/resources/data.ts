export type ResourceItem = {
  href: string;
  linkText: string;
  title: string;
  description: string;
  category: string;
};

export const categories: string[] = [
  "Utilities",
  "Icons",
  "Colors",
  "Inspiration",
  "Docs",
];

export const resources: ResourceItem[] = [
  // Utilities
  {
    href: "https://www.colorsandfonts.com/",
    linkText: "colorsandfonts.com",
    title: "Colors and Fonts",
    description: "Great fonts and color palette inspirations",
    category: "Utilities",
  },
  {
    href: "https://compressor.io/",
    linkText: "compressor.io",
    title: "Compressor",
    description: "Compress and optimize images without losing quality",
    category: "Utilities",
  },
  {
    href: "https://tinyurl.com/",
    linkText: "tinyurl.com",
    title: "TinyURL",
    description: "Shorten long links into clean URLs",
    category: "Utilities",
  },

  // Icons
  {
    href: "https://heroicons.com/",
    linkText: "heroicons.com",
    title: "Heroicons",
    description: "Beautiful hand-crafted SVG icons",
    category: "Icons",
  },
  {
    href: "https://fontawesome.com/",
    linkText: "fontawesome.com",
    title: "Font Awesome",
    description: "The web’s most popular icon set",
    category: "Icons",
  },
  {
    href: "https://icons8.com/",
    linkText: "icons8.com",
    title: "Icons8",
    description: "Free icons, illustrations, and photos",
    category: "Icons",
  },
  {
    href: "https://www.flaticon.com/",
    linkText: "flaticon.com",
    title: "Flaticon",
    description: "Millions of free icons available to use",
    category: "Icons",
  },

  // Colors
  {
    href: "https://colorhunt.co/",
    linkText: "colorhunt.co",
    title: "Color Hunt",
    description: "Curated collection of beautiful color palettes",
    category: "Colors",
  },
  {
    href: "https://materialui.co/colors/",
    linkText: "materialui.co/colors",
    title: "Material Colors",
    description: "Material design color palette for web projects",
    category: "Colors",
  },
  {
    href: "https://uicolors.app/",
    linkText: "uicolors.app",
    title: "UI Colors",
    description: "Generate Tailwind CSS color palettes",
    category: "Colors",
  },

  // Inspiration
  {
    href: "https://land-book.com/",
    linkText: "land-book.com",
    title: "Land Book",
    description: "Curated landing page design gallery",
    category: "Inspiration",
  },
  {
    href: "https://www.awwwards.com/",
    linkText: "awwwards.com",
    title: "Awwwards",
    description: "Awards for best web design inspiration",
    category: "Inspiration",
  },

  // Docs
  {
    href: "https://developer.mozilla.org/",
    linkText: "developer.mozilla.org",
    title: "MDN Web Docs",
    description: "Comprehensive web standards documentation",
    category: "Docs",
  },
  {
    href: "https://react.dev/",
    linkText: "react.dev",
    title: "React Docs",
    description: "Official documentation for React",
    category: "Docs",
  },
  {
    href: "https://nextjs.org/docs",
    linkText: "nextjs.org/docs",
    title: "Next.js Docs",
    description: "Official Next.js framework documentation",
    category: "Docs",
  },
  {
    href: "https://tailwindcss.com/docs",
    linkText: "tailwindcss.com/docs",
    title: "Tailwind CSS Docs",
    description: "Utility-first CSS framework documentation",
    category: "Docs",
  },
];
