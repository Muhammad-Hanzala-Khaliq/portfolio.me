// ResourcesCard.tsx
import { RiExternalLinkLine } from "react-icons/ri";

import { FC } from "react";
import Link from "next/link";
import { ResourceItem } from "@/app/(user)/resources/data";



const ResourcesCard: FC<ResourceItem> = ({ title, href,description,linkText }) => {
  return (
 <Link
  href={href}
  target="_blank"
  rel="noopener noreferrer"
  className="group relative block p-4 rounded-xl transition-colors border border-gray-200 dark:border-none overflow-hidden"
>
  {/* Gradient Borders (only visible in dark mode) */}
  <span className="hidden dark:block absolute inset-0 pointer-events-none rounded-xl">
    {/* Top */}
    <span className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-400/40 to-transparent"></span>
    {/* Bottom */}
    <span className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-400/40 to-transparent"></span>
    {/* Left */}
    <span className="absolute top-0 left-0 h-full w-px bg-gradient-to-b from-transparent via-blue-400/40 to-transparent"></span>
    {/* Right */}
    <span className="absolute top-0 right-0 h-full w-px bg-gradient-to-b from-transparent via-blue-400/40 to-transparent"></span>
  </span>

  {/* Hover Glow Effect (moves with cursor) */}
  <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300">
    <span className="absolute w-40 h-40 bg-blue-400/20 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2 pointer-events-none [mask-image:radial-gradient(circle,white,transparent)] group-hover:animate-pulse"
      style={{ top: 'var(--mouse-y, 50%)', left: 'var(--mouse-x, 50%)' }}
    ></span>
  </span>

  {/* Top link */}
  <div className="flex items-center text-gray-400 text-md">
    <span>{linkText}</span>
    <RiExternalLinkLine className="w-4 h-4 ml-1" />
  </div>

  {/* Title */}
  <h3 className="text-black dark:text-white text-lg font-bold mt-1">{title}</h3>

  {/* Description */}
  <p className="text-gray-600 dark:text-gray-300 text-md mt-1">{description}</p>
</Link>


  );
};

export default ResourcesCard;
