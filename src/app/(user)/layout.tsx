// /app/(user)/layout.tsx
"use client"; // Essential for Client Components

import ChatWidget from "@/components/ChatWidget";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { ThemeProvider } from "next-themes"; // This is a Client Component

export default function UserLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark">
        <Header />
          {children}
        <Footer />
        <ChatWidget />
    </ThemeProvider>
  );
}
