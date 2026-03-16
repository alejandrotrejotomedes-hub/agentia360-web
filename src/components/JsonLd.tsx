/**
 * JSON-LD Structured Data — Agentia360
 *
 * Schemas incluidos:
 *   - Organization
 *   - ProfessionalService (con Offers de los 3 planes)
 *   - WebSite
 *
 * Google lee JSON-LD desde <head> y <body>.
 * Este componente se renderiza en layout.tsx (Server Component).
 */

const SITE = "https://agentia360.com";

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    /* ── Organization ── */
    {
      "@type": "Organization",
      "@id": `${SITE}/#organization`,
      name: "Agentia360",
      url: SITE,
      logo: {
        "@type": "ImageObject",
        url: `${SITE}/logo.png`,
        width: 512,
        height: 512,
      },
      description:
        "Software house especializado en Agentes de IA, automatización y desarrollo de software a medida para empresas en LATAM. Tecnología que se paga sola.",
      slogan: "Tecnología que se paga sola.",
      foundingDate: "2024",
      areaServed: [
        { "@type": "Place", name: "México" },
        { "@type": "Place", name: "Colombia" },
        { "@type": "Place", name: "Argentina" },
        { "@type": "Place", name: "Chile" },
        { "@type": "Place", name: "Perú" },
        { "@type": "AdministrativeArea", name: "América Latina" },
      ],
      knowsAbout: [
        "Inteligencia Artificial",
        "Agentes conversacionales",
        "Automatización de procesos",
        "Software a Medida",
        "Dashboards estratégicos",
        "Integración de APIs",
        "WhatsApp Business",
      ],
      sameAs: [
        "https://linkedin.com/company/agentia360",
        "https://twitter.com/agentia360",
        "https://github.com/agentia360",
      ],
    },

    /* ── ProfessionalService ── */
    {
      "@type": "ProfessionalService",
      "@id": `${SITE}/#service`,
      name: "Agentia360",
      url: SITE,
      provider: { "@id": `${SITE}/#organization` },
      serviceType: [
        "Desarrollo de Software a Medida",
        "Agentes de IA 24/7",
        "Automatización de Procesos Empresariales",
        "Dashboards e Inteligencia Estratégica de Datos",
        "Integración de Sistemas y APIs",
      ],
      description:
        "Tecnología que se paga sola. Construimos software diseñado para incrementar la rentabilidad de tu empresa desde el primer día — con Agentes de IA, automatización y herramientas a medida.",
      offers: [
        {
          "@type": "Offer",
          name: "MVP Inicial",
          description:
            "Tu primer Agente de IA o herramienta digital funcional. Valida la solución antes de escalar.",
          price: "4999",
          priceCurrency: "USD",
          eligibleRegion: { "@type": "Place", name: "América Latina" },
        },
        {
          "@type": "Offer",
          name: "Crecimiento Pro",
          description:
            "Solución completa con múltiples flujos, integraciones y panel de control avanzado.",
          price: "12999",
          priceCurrency: "USD",
          eligibleRegion: { "@type": "Place", name: "América Latina" },
        },
        {
          "@type": "Offer",
          name: "Empresarial",
          description:
            "Transformación digital completa para empresas que quieren automatizar múltiples áreas.",
          eligibleRegion: { "@type": "Place", name: "América Latina" },
        },
      ],
    },

    /* ── WebSite ── */
    {
      "@type": "WebSite",
      "@id": `${SITE}/#website`,
      url: SITE,
      name: "Agentia360",
      description:
        "Agentes de IA y Software a Medida para empresas en LATAM",
      publisher: { "@id": `${SITE}/#organization` },
      inLanguage: "es-MX",
      potentialAction: {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: `${SITE}/?q={search_term_string}`,
        },
        "query-input": "required name=search_term_string",
      },
    },
  ],
};

export default function JsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
