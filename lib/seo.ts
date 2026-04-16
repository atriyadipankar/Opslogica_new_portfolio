import type { Metadata } from "next";

const BASE_URL = "https://opslogica.com";
const SITE_NAME = "Opslogica";
const DEFAULT_TITLE = "Opslogica — Software & AI Automation";
const DEFAULT_DESCRIPTION =
  "Opslogica delivers custom software development and AI-powered automation solutions that help businesses automate workflows, accelerate growth, and dominate their markets.";
const DEFAULT_OG_IMAGE = `${BASE_URL}/og-default.png`;

interface MetadataParams {
  title?: string;
  description?: string;
  keywords?: string[];
  path?: string;
  ogImage?: string;
}

/**
 * Generate a Next.js Metadata object with sensible defaults for SEO,
 * Open Graph, Twitter Cards, and canonical URLs.
 */
export function generateMetadata({
  title,
  description = DEFAULT_DESCRIPTION,
  keywords = [],
  path = "",
  ogImage = DEFAULT_OG_IMAGE,
}: MetadataParams = {}): Metadata {
  const canonicalUrl = `${BASE_URL}${path}`;

  return {
    title: title
      ? {
          default: title,
          template: `%s | ${SITE_NAME} — Software & AI Automation`,
        }
      : {
          default: DEFAULT_TITLE,
          template: `%s | ${SITE_NAME} — Software & AI Automation`,
        },
    description,
    keywords,
    metadataBase: new URL(BASE_URL),
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      type: "website",
      locale: "en_US",
      url: canonicalUrl,
      siteName: SITE_NAME,
      title: title || DEFAULT_TITLE,
      description,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title || DEFAULT_TITLE,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: title || DEFAULT_TITLE,
      description,
      images: [ogImage],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}
