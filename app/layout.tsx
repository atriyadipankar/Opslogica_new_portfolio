import type { Metadata, Viewport } from "next";
import { Fraunces, DM_Sans } from "next/font/google";
import "./globals.css";

// Soft, friendly serif for headlines; clean humanist sans for everything else.
const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  style: ["normal", "italic"],
  axes: ["SOFT", "opsz"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  axes: ["opsz"],
});

export const viewport: Viewport = {
  themeColor: "#f6f1e7",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://opslogica.com"),
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  title: {
    template: "%s | Opslogica — Software & AI Automation",
    default: "Opslogica | Software Development, AI & Business Automation",
  },
  description:
    "Opslogica builds custom software, websites, and AI automation systems for growing businesses across the US, Canada, Europe, Australia, and Gulf.",
  keywords: [
    "software development company",
    "AI automation for small business",
    "business automation services",
    "AI workflow automation",
    "custom automation agency",
    "custom software USA Canada",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://opslogica.com",
    siteName: "Opslogica",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@opslogica",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: {
    canonical: "https://opslogica.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${dmSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
