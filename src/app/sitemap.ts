import { MetadataRoute } from "next";

const BASE = "https://agentia360.com";
const NOW  = new Date();

/**
 * Sitemap automático — Next.js App Router
 * Accesible en: /sitemap.xml
 *
 * Estructura preparada para activar páginas de servicios individuales
 * sin refactoring adicional. Solo descomenta las rutas cuando las crees.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    /* ── Página principal ── */
    {
      url: BASE,
      lastModified: NOW,
      changeFrequency: "weekly",
      priority: 1.0,
    },

    /* ── Páginas de servicios (activar al crear /app/servicios/[slug]/page.tsx) ──
    {
      url: `${BASE}/servicios/agentes-de-ia`,
      lastModified: NOW,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE}/servicios/software-a-medida`,
      lastModified: NOW,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE}/servicios/automatizacion-de-procesos`,
      lastModified: NOW,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE}/servicios/dashboards-estrategicos`,
      lastModified: NOW,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE}/servicios/integraciones-y-apis`,
      lastModified: NOW,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    */

    /* ── Páginas secundarias (activar al crear) ──
    {
      url: `${BASE}/blog`,
      lastModified: NOW,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${BASE}/contacto`,
      lastModified: NOW,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${BASE}/nosotros`,
      lastModified: NOW,
      changeFrequency: "monthly",
      priority: 0.5,
    },
    */
  ];
}
