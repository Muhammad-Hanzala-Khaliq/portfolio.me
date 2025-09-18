import Link from "next/link";
import { snippets } from "./data";
import UserLayout from "@/components/UserLayout";
export const metadata = {
  title: "Code Snippets",
  description:
    "Explore useful code snippets and reusable components for modern web development, optimized for speed and scalability.",
  alternates: { canonical: "/snippets" },
};
export default function SnippetsPage() {
  return (
    <UserLayout>
      {/* <div className="max-w-5xl mx-auto md:p-6 p-1"> */}
      {/* Page Header */}
      <h1 className="md:text-5xl text-[30px] font-bold tracking-tight mb-4 mr-auto">
        Snippets
      </h1>
      <p className="text-gray-500 mb-6">
        Reusable{" "}
        <span className="text-gray-700 bg-gray-100 px-1.5 py-0.5 rounded-md border border-gray-200/20">
          code snippets
        </span>{" "}
        that can be easily integrated in your application 🧩. The page contains
        functions and code snippets which can be used on your webpage.
      </p>

      {/* Snippet Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
        {snippets.map((snippet) => (
    <Link
  key={snippet.slug}
  href={`/snippets/${snippet.slug}`}
  className="group relative border border-slate-200 dark:border-none p-4 rounded-xl overflow-hidden transition-colors"
>
  {/* Gradient Borders (dark mode only) */}
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

  {/* Hover Glow Effect (Bottom Right - Large Coverage) */}
  <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500">
    <span
      className="absolute bottom-0 right-0 w-[150%] h-[150%] bg-blue-400/20 rounded-full blur-3xl translate-x-1/3 translate-y-1/3 pointer-events-none [mask-image:radial-gradient(circle,white,transparent)] group-hover:animate-pulse"
    ></span>
  </span>

  {/* Icon / Logo + Title */}
  <div className="flex flex-col gap-3 relative z-1">
    <div className="w-8 h-8 flex items-center justify-center">
      {snippet.icon}
    </div>
    <h3 className="text-lg font-bold text-black dark:text-white">
      {snippet.title}
    </h3>
  </div>

  {/* Description */}
  <p className="text-gray-600 dark:text-gray-300 text-md mt-2 relative z-1">
    {snippet.description}
  </p>
</Link>


        ))}
      </div>
      {/* </div> */}
    </UserLayout>
  );
}
