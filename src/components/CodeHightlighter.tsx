"use client";

import { useTheme } from "next-themes";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneLight } from "react-syntax-highlighter/dist/esm/styles/prism";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

// 👇 Override theme background to transparent
const customOneLight = {
  ...oneLight,
  'code[class*="language-"]': {
    ...oneLight['code[class*="language-"]'],
    background: "transparent !important",
  },
  'pre[class*="language-"]': {
    ...oneLight['pre[class*="language-"]'],
    background: "transparent !important",
  },
};

const customOneDark = {
  ...oneDark,
  'code[class*="language-"]': {
    ...oneDark['code[class*="language-"]'],
    background: "transparent !important",
  },
  'pre[class*="language-"]': {
    ...oneDark['pre[class*="language-"]'],
    background: "transparent !important",
  },
};

export default function CodeBlock({
  code,
  language,
}: {
  code: string;
  language: string;
}) {
  const { theme } = useTheme();

  return (
    <SyntaxHighlighter
      language={language || "typescript"}
      style={theme === "dark" ? customOneDark : customOneLight} // 👈 Use custom themes
      customStyle={{
        margin: 0,
        padding: "1rem",
        fontSize: "0.875rem",
        lineHeight: "1.5",
        borderRadius: "0.5rem",
        background: "transparent", // 👈 Also force here
        border: "none",
        backgroundColor: "transparent", // Extra insurance
      }}
      wrapLines
      wrapLongLines
      lineProps={{
        style: { backgroundColor: "transparent" },
      }}
    >
      {code}
    </SyntaxHighlighter>
  );
}