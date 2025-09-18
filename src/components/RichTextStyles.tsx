// RichTextStyles.ts

export const getRichTextStyles = () => `
  .rich-text-editor {
    font-size: 16px;
    line-height: 1.7;
    overflow-y: auto;
    padding: 1rem;
    border-radius: 0.5rem;
    color: var(--color-text);
  }

  /* ✅ Reset pasted inline styles */
  .rich-text-editor * {
    background-color: transparent !important;
    color: inherit !important;
  }

  /* ✅ Headings */
  .rich-text-editor h1 { font-size: 2rem; font-weight: 700; margin: 1.5rem 0 1rem; color: var(--color-heading); }
  .rich-text-editor h2 { font-size: 1.75rem; font-weight: 600; margin: 1.25rem 0 0.75rem; color: var(--color-heading); }
  .rich-text-editor h3 { font-size: 1.5rem; font-weight: 600; margin: 1rem 0 0.5rem; color: var(--color-heading); }
  .rich-text-editor h4 { font-size: 1.25rem; font-weight: 500; margin: 0.75rem 0; color: var(--color-heading); }
  .rich-text-editor h5 { font-size: 1.125rem; font-weight: 500; margin: 0.5rem 0; color: var(--color-heading); }
  .rich-text-editor h6 { font-size: 1rem; font-weight: 500; margin: 0.5rem 0; color: var(--color-heading); }

  /* ✅ Paragraphs */
  .rich-text-editor p { margin: 0.75rem 0; color: var(--color-text); }

  /* ✅ Lists */
  .rich-text-editor ul, .rich-text-editor ol { padding-left: 1.5rem; margin: 0.75rem 0; }
  .rich-text-editor li { margin: 0.25rem 0; line-height: 1.6; color: var(--color-text); }

  /* ✅ Text formatting */
  .rich-text-editor strong { font-weight: 700; }
  .rich-text-editor em { font-style: italic; }
  .rich-text-editor u { text-decoration: underline; }
  .rich-text-editor s { text-decoration: line-through; }
  .rich-text-editor mark { padding: 0 0.2rem; }

  /* ✅ Links */
  .rich-text-editor a {
    color: var(--color-text);
    text-decoration: underline;
    transition: color 0.2s;
  }
  .rich-text-editor a:hover { color: #005fcc; }

  /* ✅ Blockquote */
  .rich-text-editor blockquote {
    border-left: 4px solid var(--color-text);
    padding-left: 1rem;
    margin: 1rem 0;
    color: var(--color-text);
    background: var(--color-bg-snippets);
    font-style: italic;
  }

  /* ✅ Code blocks */
  .rich-text-editor pre {
    background: var(--color-bg-snippets);
    padding: 0.75rem;
    border-radius: 0.5rem;
    overflow-x: auto;
    margin: 0.75rem 0;
    color: var(--color-text);
  }
  .rich-text-editor code {
    background: var(--color-bg-input);
    padding: 0.2rem 0.4rem;
    border-radius: 0.375rem;
    font-family: monospace;
    color: var(--color-text);
  }

  /* ✅ Images */
  .rich-text-editor img {
    max-width: 100%;
    border-radius: 0.5rem;
    margin: 1rem 0;
    display: block;
  }

  /* ✅ Horizontal line */
  .rich-text-editor hr {
    border: none;
    border-top: 1px solid var(--color-text);
    margin: 1rem 0;
    opacity: 0.3;
  }

  /* ✅ Tables */
  .rich-text-editor table {
    width: 100%;
    border-collapse: collapse;
    margin: 1rem 0;
  }
  .rich-text-editor th,
  .rich-text-editor td {
    border: 1px solid var(--color-text);
    padding: 0.5rem;
    text-align: left;
    color: var(--color-text);
  }
  .rich-text-editor th {
    background: var(--color-bg-snippets);
    font-weight: 600;
  }

  /* ✅ Alignments */
  .rich-text-editor .ql-align-center { text-align: center; }
  .rich-text-editor .ql-align-right { text-align: right; }
  .rich-text-editor .ql-align-justify { text-align: justify; }

  /* ✅ Indentation */
  .rich-text-editor .ql-indent-1 { margin-left: 2rem; }
  .rich-text-editor .ql-indent-2 { margin-left: 4rem; }
  .rich-text-editor .ql-indent-3 { margin-left: 6rem; }

  /* ✅ Custom sizes */
  .rich-text-editor .ql-size-small { font-size: 0.875rem; }
  .rich-text-editor .ql-size-large { font-size: 1.5rem; }
  .rich-text-editor .ql-size-huge { font-size: 2rem; }

  /* ✅ Text colors (Quill classes) */
  .rich-text-editor .ql-color-red { color: #ef4444; }
  .rich-text-editor .ql-color-blue { color: #3b82f6; }
  .rich-text-editor .ql-color-green { color: #10b981; }

  /* ✅ Background highlight */
  .rich-text-editor .ql-bg-yellow { background-color: #fef08a; }
  .rich-text-editor .ql-bg-gray { background-color: var(--color-bg-snippets); }
  :root[class~="dark"] .rich-text-editor .ql-bg-white { background-color: transparent; }

  /* 🎚 Scrollbar inside editor */
  .rich-text-editor::-webkit-scrollbar { width: 6px; }
  .rich-text-editor::-webkit-scrollbar-thumb {
    background: var(--color-bg-scrollbar);
    border-radius: 9999px;
  }
  .rich-text-editor::-webkit-scrollbar-track { background: transparent; }
`;

export const injectRichTextStyles = () => {
  if (typeof document === "undefined") return;
  let styleSheet = document.getElementById("rich-text-styles") as HTMLStyleElement;
  if (!styleSheet) {
    styleSheet = document.createElement("style");
    styleSheet.id = "rich-text-styles";
    document.head.appendChild(styleSheet);
  }
  styleSheet.textContent = getRichTextStyles();
};
