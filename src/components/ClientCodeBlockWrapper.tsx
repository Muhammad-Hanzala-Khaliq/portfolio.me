// components/ClientCodeBlockWrapper.tsx
'use client'; // Yeh zaruri hai

import dynamic from 'next/dynamic';


// CodeBlock ko yahan dynamically import karein, kyunki yeh Client Component hai
const CodeBlock = dynamic(() => import('@/components/CodeHightlighter'), {
  ssr: false, // Ab yeh chalega kyunki yeh file ek Client Component hai
  loading: () => <div className="h-40 bg-gray-100 dark:bg-gray-800 rounded-b-lg p-4 animate-pulse">Loading code...</div>
});

// Is wrapper component ke props
interface ClientCodeBlockWrapperProps {
  code: string;
  language:string; // Aapka type
}

// Yeh component sirf CodeBlock ko render karega
export default function ClientCodeBlockWrapper({ code, language }: ClientCodeBlockWrapperProps) {
  return <CodeBlock code={code} language={language} />;
}