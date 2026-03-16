import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import JsonLd from "@/components/JsonLd";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

const SITE_URL = "https://agentia360.com";
const OG_TITLE = "Agentia360 | Agentes de IA y Software a Medida para Empresas";
const OG_DESC =
  "Software house especializado en Agentes de IA y automatización para empresas en LATAM. Tecnología que se paga sola — primera versión funcional en 4 semanas.";

export const viewport: Viewport = {
  themeColor: "#020817",
  colorScheme: "dark",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: OG_TITLE,
    template: "%s | Agentia360",
  },

  description: OG_DESC,

  keywords: [
    "Agentes de IA",
    "Software a Medida",
    "Automatización para empresas",
    "Inteligencia Artificial LATAM",
    "Desarrollo de software México",
    "IA para negocios",
    "Automatización de procesos",
    "Software House LATAM",
    "Agentes conversacionales",
    "ChatBot empresarial WhatsApp",
    "Integración WhatsApp Business",
    "Dashboards estratégicos",
    "Agentia360",
  ],

  authors: [{ name: "Agentia360", url: SITE_URL }],
  creator: "Agentia360",
  publisher: "Agentia360",
  category: "technology",

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

  /* ── OpenGraph ── */
  openGraph: {
    type: "website",
    locale: "es_MX",
    url: SITE_URL,
    siteName: "Agentia360",
    title: OG_TITLE,
    description: OG_DESC,
    images: [
      {
        url: "/og-image.png",   // coloca tu imagen en /public/og-image.png (1200×630 px)
        width: 1200,
        height: 630,
        alt: "Agentia360 — Agentes de IA y Software a Medida para Empresas en LATAM",
        type: "image/png",
      },
    ],
  },

  /* ── Twitter / X Card ── */
  twitter: {
    card: "summary_large_image",
    site: "@agentia360",
    creator: "@agentia360",
    title: OG_TITLE,
    description: OG_DESC,
    images: ["/og-image.png"],
  },

  /* ── Canonical + hreflang ── */
  alternates: {
    canonical: SITE_URL,
    languages: {
      "es-MX":  SITE_URL,
      "es-419": SITE_URL,   // Español LATAM
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es-MX" className="dark">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <JsonLd />
        {children}
      </body>
    </html>
  );
}
