import type { Metadata } from "next";

import { Footer, Header } from "@/components/layout";
import "@/styles/style.css";
import Script from "next/script";

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
        <Script>
          {`function initFreshdesk() {
              window.fdWidget.init({
                token: "01KR9JTRBBSR3GZCE6XEMC4RR4",
                host: "https://leokarl641.freshdesk.com",
                widgetId: "01KR9JTV746V0ZBMA051S4D0CX"
              });
            }

          function initialize(i,t){var e;i.getElementById(t)?initFreshdesk():((e=i.createElement("script")).id=t,e.async=!0,e.src="https://leokarl641.freshdesk.com/webchat/js/widget.js",e.onload=initFreshdesk,i.head.appendChild(e))}function initiateCall(){initialize(document,"Freshdesk-js-sdk")}window.addEventListener?window.addEventListener("load",initiateCall,!1):window.attachEvent("load",initiateCall,!1);
        `}
        </Script>
      </body>
    </html>
  );
}
