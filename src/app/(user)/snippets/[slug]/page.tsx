import { notFound } from "next/navigation";
import { snippets } from "../data";
import type { Metadata } from "next";
// next/dynamic import karein
import dynamic from 'next/dynamic';

// ======================
// Type Definitions
// ======================
// const customOneLight = {
//   ...oneLight,
//   'pre[class*="language-"]': {
//     ...oneLight['pre[class*="language-"]'],
//     background: "transparent", // 👈 force override
//   },
// };
const ClientCodeBlockWrapper = dynamic(() => import('@/components/ClientCodeBlockWrapper'), {
  // ssr: false yahan mat lagayein
  loading: () => <div className="h-40 bg-gray-100 dark:bg-gray-800 rounded-b-lg p-4 animate-pulse">Loading code...</div>
});

export type SnippetTag =
  | "React"
  | "Next.js"
  | "TailwindCSS"
  | "TypeScript"
  | "JavaScript"
  | "Node.js"
  | "Firebase"
  | "Zod"
  | "shadcn-ui"
  | "Prisma"
  | string;

export type SnippetLanguage =
  | "javascript"
  | "typescript"
  | "tsx"
  | "jsx"
  | "json"
  | "bash"
  | "html"
  | "css"
  | "markdown"
  | string;

export type Snippet = {
  title: string;
  slug: string;
  description: string;
  code: string;
  usage: string[];
  category: "UI" | "API" | "Other";
  icon: React.ReactNode;
  language?: SnippetLanguage;   // ✅ optional rakha
  tags: SnippetTag[];          
  fileName?: string;            // ✅ add kiya
};


// Props for the page component
// ✅ Correct — params is a Promise
type SnippetPageProps = {
  params: Promise<{ slug: string }>;
};
export async function generateMetadata(
  { params }: SnippetPageProps
): Promise<Metadata> {
  const resolvedParams = await params;
  const { slug } = resolvedParams;
  const snippet = snippets.find((s) => s.slug === slug);

  if (!snippet) {
    return {
      title: "Snippet Not Found | Hanzala Khaliq",
      description: "The requested code snippet could not be found.",
    };
  }

  return {
    title: `${snippet.title} | Code Snippets | Hanzala Khaliq`,
    description: snippet.description,
    alternates: {
      canonical: `/snippets/${slug}`,
    },
    openGraph: {
      title: snippet.title,
      description: snippet.description,
      type: "article",
      url: `/snippets/${slug}`,
    },
    twitter: {
      card: "summary_large_image",
      title: snippet.title,
      description: snippet.description,
    },
  };
}
// ======================
// Main Component
// ======================

export default async function SnippetDetail({ params }: SnippetPageProps) {
  const resolvedParams = await params;
  const { slug } = resolvedParams;

  const snippet = snippets.find((s: Snippet) => s.slug === slug);

  if (!snippet) return notFound();

  return (
    <div className="max-w-3xl mx-auto p-3 md:p-1 mb-8">
      {/* Title */}
      <h1 className="text-4xl font-bold text-black mb-2">{snippet.title}</h1>
      <p className="text-gray-700 mb-6">{snippet.description}</p>

      {/* Tags */}
{snippet.tags && snippet.tags.length > 0 && (
  <div className="flex flex-wrap gap-2 mb-8">
    {snippet.tags.map((tag, index) => (
      <span
        key={index}
        className="px-3 py-1 text-sm font-medium rounded-full
          bg-gradient-to-r from-blue-100 to-blue-200 
          text-blue-800 
          dark:from-blue-900 dark:to-blue-800 dark:text-blue-100
          shadow-sm border border-blue-200 dark:border-blue-700
        "
      >
        #{tag}
      </span>
    ))}
  </div>
)}


     {/* Usage Instructions */}
{snippet.usage && snippet.usage.length > 0 && (
  <>
    <h2 className="text-xl font-bold text-heading mb-4">Usage</h2>
    <div className="space-y-6 bg">
      {snippet.usage.map((step, i) => (
        <div
          key={i}
          className="flex items-start gap-3 bg-bg-snippets border border-gray-100/20 rounded-lg p-4 shadow-sm mb-4"
        >
          {/* Step Number */}
          <div className="flex-shrink-0 w-8 h-8 rounded-full bg-green-100 text-green-700 flex items-center justify-center font-semibold">
            {i + 1}
          </div>

          {/* Step Content */}
          <div
            className="text-heading text-sm leading-relaxed"
            dangerouslySetInnerHTML={{ __html: step }}
          />
        </div>
      ))}
    </div>
  </>
)}

   {/* Code Block */}
<div className="bg-bg-snippets rounded-lg overflow-hidden shadow-sm mb-6">
  {/* Header Bar */}
  <div className="flex items-center gap-2 bg-bg-snippets px-4 py-2 text-sm text-text">
    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
    <span className="flex-1 text-center font-mono text-xs truncate">
      {snippet.fileName || "component.tsx"}
    </span>
  </div>

  {/* Syntax Highlighted Code */}
    <ClientCodeBlockWrapper code={snippet.code} language="language"/>
</div>

    </div>
  );
}
