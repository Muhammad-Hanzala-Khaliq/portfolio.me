"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import { injectRichTextStyles } from "./RichTextStyles";
// sanitize helper
export const sanitizeHtmlContent = (html: string) => {
  if (typeof window === "undefined") return html;
  const div = document.createElement("div");
  div.innerHTML = html;

  // 🚫 remove inline background styles
  div.querySelectorAll<HTMLElement>("[style]").forEach(el => {
    el.style.background = "";
    el.style.color = "";
  });

  return div.innerHTML;
};


interface RichTextRendererProps {
  content: string;
  className?: string;
}

const RichTextRenderer = ({ content, className = "" }: RichTextRendererProps) => {
  useEffect(() => {
     injectRichTextStyles(); // ✅ styles inject ho jayein
  }, []);

  if (!content) return null;

  const sanitizedContent = sanitizeHtmlContent(content);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`rich-text-editor ${className}`} // ✅ same class jisme styles apply honge
      dangerouslySetInnerHTML={{ __html: sanitizedContent }}
    />
  );
};

export default RichTextRenderer;
