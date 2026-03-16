import { MetadataRoute } from "next";

/**
 * robots.txt automático — Next.js App Router
 * Accesible en: /robots.txt
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/", "/admin/"],
      },
    ],
    sitemap: "https://agentia360.com/sitemap.xml",
    host: "https://agentia360.com",
  };
}
