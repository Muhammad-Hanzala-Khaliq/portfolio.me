// /app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";
// DO NOT import ThemeProvider here if it causes hydration issues

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// --- Your existing metadata configuration ---
const baseUrl = process.env.base_url || "http://localhost:3000";
export const metadata: Metadata = {
  title: {
    default: "Hanzala Khaliq - Full Stack Developer, Software Engineer",
    template: "%s | Hanzala Khaliq",
  },
  description:
    "I’m Hanzala Khaliq, a Full Stack Developer specializing in building modern, scalable web applications with React.js, Node.js, Express, and MongoDB.",
  metadataBase: new URL(baseUrl),
  authors: [{ name: "Hanzala Khaliq" }],
  creator: "Hanzala Khaliq",
  publisher: "Hanzala Khaliq",
  openGraph: {
    title: "Hanzala Khaliq - Full Stack Developer, Software Engineer",
    description:
      "Portfolio of Hanzala Khaliq, a Full Stack Developer crafting responsive web apps with React, Node.js, Express, and MongoDB.",
    type: "website",
    url: baseUrl,
    siteName: "Hanzala Khaliq Portfolio",
    images: [
      {
        url: `${baseUrl}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Hanzala Khaliq - Portfolio Preview",
      },
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hanzala Khaliq - Full Stack Developer",
    description:
      "Explore the portfolio of Hanzala Khaliq, Full Stack Developer and Software Engineer building scalable web applications.",
    images: [`${baseUrl}/twitter-image.jpg`],
    creator: "@yourTwitterHandle",
  },
  alternates: {
    canonical: baseUrl,
  },
  verification: {
    other: {
      me: [
        "mailto:hanzalakhaliq@gmail.com",
        "https://linkedin.com/in/hanzala-khaliq",
        "https://github.com/hanzala-khaliq",
      ],
    },
  },
  icons: {
   icon: '/favicon.ico',
    // apple: "/apple-touch-icon.png",
    other: [
      {
        rel: "icon",
        url: "/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
      {
        rel: "icon",
        url: "/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
      { rel: "mask-icon", url: "/safari-pinned-tab.svg", color: "#5bbad5" },
    ],
  },
};
// --- End Metadata ---

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Toaster position="top-right" reverseOrder={false} />
      </body>
    </html>
  );
}
