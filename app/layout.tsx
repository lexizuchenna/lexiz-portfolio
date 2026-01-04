import type { Metadata } from "next";

import { Footer, Header } from "@/components/layout";
import "@/styles/style.css";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"
  ),
  title: {
    default: "Alexander Ukwueze | Full-Stack Engineer",
    template: "%s | Alexander Ukwueze",
  },
  description:
    "Alexander Ukwueze — a full-stack developer crafting high-performance web applications using Next.js, Golang, and TypeScript.",
  keywords: [
    "Alexander Ukwueze",
    "Full Stack Developer",
    "Software Engineer Nigeria",
    "Next.js Expert",
    "NodeJS Developer",
    "Mobile Developer",
  ],
  authors: [{ name: "Alexander Ukwueze" }],
  creator: "Alexander Ukwueze",
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "/",
    siteName: "Alexander Ukwueze Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Alexander Ukwueze Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    creator: "@alex_lexiz",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700;800&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
