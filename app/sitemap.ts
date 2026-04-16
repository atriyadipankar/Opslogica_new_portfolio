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
    "/industries",
    "/industries/dental-clinics",
    "/industries/orthopedic-clinics",
    "/industries/psychology-practices",
    "/industries/physician-practices",
    "/industries/pathological-labs",
    "/industries/dermatology-clinics",
    "/case-studies",
    "/blog",
    "/contact",
    "/privacy-policy",
  ];

  return staticRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route.startsWith("/services") || route.startsWith("/industries") ? 0.8 : 0.6,
  }));
}
