import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://opslogica.com";

  const staticRoutes = [
    "",
    "/about",
    "/services",
    "/services/software-development",
    "/services/website-development",
    "/services/ai-automation",
    "/services/business-automation",
    "/case-studies",
    "/blog",
    "/contact",
    "/privacy-policy",
  ];

  return staticRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
  }));
}
