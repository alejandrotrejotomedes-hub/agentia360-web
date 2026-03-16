"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import FadeIn from "@/components/ui/FadeIn";

interface Tech {
  id: string;
  name: string;
  color: string;
  bg: string;
  category: string;
  tagline: string;
  description: string;
  logo: React.ReactNode;
}

/* ─── Inline SVG logos ─── */
const LogoSupabase = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="#3ECF8E">
    <path d="M11.9 1.036c-.015-.986-1.26-1.41-1.874-.637L.764 12.05C.33 12.577.745 13.37 1.424 13.37h7.905l-.343 9.594c.015.986 1.26 1.41 1.874.637l9.262-11.65c.434-.527.02-1.32-.659-1.32h-7.905l.342-9.594Z"/>
  </svg>
);

const LogoAnthropic = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="#D4A27F">
    <path d="M13.827 3.52h3.603L24 20h-3.603l-6.57-16.48zm-7.258 0h3.767L16.906 20h-3.674l-1.343-3.461H5.017L3.674 20H0L6.569 3.52zm4.132 9.959-1.964-5.119-1.964 5.119h3.928z"/>
  </svg>
);

const LogoOpenAI = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="#ffffff">
    <path d="M22.282 9.821a5.985 5.985 0 0 0-.516-4.91 6.046 6.046 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.981 4.18a5.985 5.985 0 0 0-3.998 2.9 6.046 6.046 0 0 0 .743 7.097 5.98 5.98 0 0 0 .51 4.911 6.051 6.051 0 0 0 6.515 2.9A5.985 5.985 0 0 0 13.26 24a6.056 6.056 0 0 0 5.772-4.206 5.99 5.99 0 0 0 3.997-2.9 6.056 6.056 0 0 0-.747-7.073zM13.26 22.43a4.476 4.476 0 0 1-2.876-1.04l.141-.081 4.779-2.758a.795.795 0 0 0 .392-.681v-6.737l2.02 1.168a.071.071 0 0 1 .038.052v5.583a4.504 4.504 0 0 1-4.494 4.494zM3.6 18.304a4.47 4.47 0 0 1-.535-3.014l.142.085 4.783 2.759a.771.771 0 0 0 .78 0l5.843-3.369v2.332a.08.08 0 0 1-.033.062L9.74 19.95a4.5 4.5 0 0 1-6.14-1.646zM2.34 7.896a4.485 4.485 0 0 1 2.366-1.973V11.6a.766.766 0 0 0 .388.676l5.815 3.355-2.02 1.168a.076.076 0 0 1-.071 0l-4.83-2.786A4.504 4.504 0 0 1 2.34 7.872zm16.597 3.855l-5.843-3.369 2.02-1.168a.076.076 0 0 1 .071 0l4.83 2.791a4.494 4.494 0 0 1-.676 8.105v-5.678a.79.79 0 0 0-.402-.681zm2.01-3.023l-.141-.085-4.774-2.782a.776.776 0 0 0-.785 0L9.409 9.23V6.897a.066.066 0 0 1 .028-.061l4.83-2.787a4.5 4.5 0 0 1 6.68 4.66zm-12.64 4.135l-2.02-1.164a.08.08 0 0 1-.038-.057V6.075a4.5 4.5 0 0 1 7.375-3.453l-.142.08L8.704 5.46a.795.795 0 0 0-.393.681zm1.097-2.365l2.602-1.5 2.607 1.5v2.999l-2.597 1.5-2.607-1.5z"/>
  </svg>
);

const LogoN8N = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="#EA4B35">
    <path d="M8.687 0c-.83 0-1.5.672-1.5 1.5v1.341a8.985 8.985 0 0 0-2.047.847L4.024 2.572a1.5 1.5 0 0 0-2.121 0L.588 3.888A1.5 1.5 0 0 0 .588 6.01l.948.947A9.015 9.015 0 0 0 .69 9H.75.5a1.5 1.5 0 0 0-1.5 1.5v1.875a1.5 1.5 0 0 0 1.5 1.5h1.191a9.01 9.01 0 0 0 .847 2.046l-.842.843a1.5 1.5 0 0 0 0 2.121l1.317 1.316a1.5 1.5 0 0 0 2.12 0l.843-.842a9.01 9.01 0 0 0 2.047.847v1.19a1.5 1.5 0 0 0 1.5 1.5h1.875a1.5 1.5 0 0 0 1.5-1.5v-1.19a9.01 9.01 0 0 0 2.047-.847l.842.842a1.5 1.5 0 0 0 2.121 0l1.317-1.316a1.5 1.5 0 0 0 0-2.121l-.843-.843a9.01 9.01 0 0 0 .848-2.046H23a1.5 1.5 0 0 0 1.5-1.5V10.5A1.5 1.5 0 0 0 23 9h-1.19a9.015 9.015 0 0 0-.847-2.047l.948-.948a1.5 1.5 0 0 0 0-2.12l-1.316-1.317a1.5 1.5 0 0 0-2.121 0l-1.116 1.116A8.985 8.985 0 0 0 15.312 2.84V1.5c0-.828-.671-1.5-1.5-1.5zm.938 3h1.875v1.406a.75.75 0 0 0 .545.722 7.5 7.5 0 0 1 2.71 1.122.75.75 0 0 0 .909-.098L16.78 5.037l1.326 1.325-1.115 1.116a.75.75 0 0 0-.098.909 7.5 7.5 0 0 1 1.122 2.71.75.75 0 0 0 .722.544H20.5v1.875h-1.763a.75.75 0 0 0-.722.545 7.5 7.5 0 0 1-1.122 2.71.75.75 0 0 0 .098.908l1.115 1.116-1.326 1.326-1.115-1.115a.75.75 0 0 0-.909-.099 7.5 7.5 0 0 1-2.71 1.122.75.75 0 0 0-.544.722V21.75H10.627v-1.763a.75.75 0 0 0-.545-.722 7.5 7.5 0 0 1-2.71-1.122.75.75 0 0 0-.909.099l-1.115 1.115-1.325-1.326 1.115-1.116a.75.75 0 0 0 .099-.909 7.5 7.5 0 0 1-1.123-2.709.75.75 0 0 0-.721-.545H1.75V10.877h1.763a.75.75 0 0 0 .721-.545 7.5 7.5 0 0 1 1.123-2.71.75.75 0 0 0-.099-.908L4.142 5.597l1.326-1.325 1.115 1.115a.75.75 0 0 0 .909.098 7.5 7.5 0 0 1 2.71-1.122.75.75 0 0 0 .544-.722zm.938 4.5a3.938 3.938 0 1 0 0 7.875 3.938 3.938 0 0 0 0-7.875zm0 1.5a2.438 2.438 0 1 1 0 4.875 2.438 2.438 0 0 1 0-4.875z"/>
  </svg>
);

const LogoVercel = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="#ffffff">
    <path d="M24 22.525H0L12 1.475z"/>
  </svg>
);

const LogoStripe = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="#625BF6">
    <path d="M13.976 9.15c-2.172-.806-3.356-1.426-3.356-2.409 0-.831.683-1.305 1.901-1.305 2.227 0 4.515.858 6.09 1.631l.89-5.494C18.252.975 15.697 0 12.165 0 9.667 0 7.589.654 6.104 1.872 4.56 3.147 3.757 4.992 3.757 7.218c0 4.039 2.467 5.76 6.476 7.219 2.585.92 3.445 1.574 3.445 2.583 0 .98-.84 1.545-2.354 1.545-1.875 0-4.965-.921-6.99-2.109l-.9 5.555C5.175 22.99 8.385 24 11.714 24c2.641 0 4.843-.624 6.328-1.813 1.664-1.305 2.525-3.236 2.525-5.732 0-4.128-2.524-5.851-6.591-7.305z"/>
  </svg>
);

const LogoWhatsApp = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="#25D366">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

const LogoNextjs = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="#ffffff">
    <path d="M11.572 0c-.176 0-.31.001-.358.007a19.76 19.76 0 0 1-.364.033C7.443.346 4.25 2.185 2.228 5.012a11.875 11.875 0 0 0-2.119 5.243c-.096.659-.108.854-.108 1.747s.012 1.089.108 1.748c.652 4.506 3.86 8.292 8.209 9.695.779.25 1.6.422 2.534.525.363.04 1.935.04 2.299 0 1.611-.178 2.977-.577 4.323-1.264.207-.106.247-.134.219-.158-.02-.013-.9-1.193-1.955-2.62l-1.919-2.592-2.404-3.558a338.739 338.739 0 0 0-2.422-3.556c-.009-.002-.018 1.579-.023 3.51-.007 3.38-.01 3.515-.052 3.595a.426.426 0 0 1-.206.214c-.075.037-.14.044-.495.044H7.81l-.108-.068a.438.438 0 0 1-.157-.171l-.05-.106.006-4.703.007-4.705.072-.092a.645.645 0 0 1 .174-.143c.096-.047.134-.051.54-.051.478 0 .558.018.682.154.035.038 1.337 1.999 2.895 4.361a10760.433 10760.433 0 0 0 4.735 7.17l1.9 2.879.096-.063a12.317 12.317 0 0 0 2.466-2.163 11.944 11.944 0 0 0 2.824-6.134c.096-.66.108-.854.108-1.748 0-.893-.012-1.088-.108-1.747-.652-4.506-3.859-8.292-8.208-9.695a12.597 12.597 0 0 0-2.499-.523A33.119 33.119 0 0 0 11.573 0zm4.069 7.217c.347 0 .408.005.486.047a.473.473 0 0 1 .237.277c.018.06.023 1.365.018 4.304l-.006 4.218-.744-1.14-.746-1.14v-3.066c0-1.982.01-3.097.023-3.15a.478.478 0 0 1 .233-.296c.096-.05.15-.055.499-.055z"/>
  </svg>
);

const LogoPostgres = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="#4169E1">
    <path d="M17.128 0a10.134 10.134 0 0 0-2.755.403l-.063.02A10.922 10.922 0 0 0 12.6.258C11.422.238 10.41.524 9.594 1 8.79.721 7.122.24 5.364.336 4.14.403 2.804.775 1.814 1.82.827 2.865.305 4.482.415 6.682c.039.757.194 1.55.373 2.282a14.88 14.88 0 0 0 .486 1.551c.24.621.507 1.112.898 1.451.39.34.866.458 1.398.412.367-.031.685-.147.978-.299a14.44 14.44 0 0 0 .043.116c.398.965.919 1.873 1.727 2.543.8.665 1.79 1.004 2.968 1.096-.075.079-.144.166-.206.261a2.55 2.55 0 0 0-.267.607c-.076.266-.095.552-.061.83-.52.104-1.016.326-1.39.64-.373.315-.584.736-.567 1.184.015.358.167.662.357.903-.076.377-.11.794-.085 1.186.04.577.2 1.288.714 1.762.516.476 1.29.62 2.4.362a7.56 7.56 0 0 0 1.04-.327c.26-.104.52-.227.77-.365.13.14.27.264.41.358.347.232.756.371 1.2.397.448.027.903-.07 1.3-.286a3.19 3.19 0 0 0 1.006-.921c.27-.382.434-.812.5-1.227a8.86 8.86 0 0 0 .06-1.04c.06-.009.12-.02.177-.034a3.98 3.98 0 0 0 1.196-.5c.437-.3.79-.711 1.013-1.221.223-.51.315-1.108.265-1.764-.05-.656-.226-1.338-.47-1.92a6.88 6.88 0 0 0-.38-.748c.515-.353 1.002-.786 1.378-1.37.478-.74.753-1.648.753-2.73v-.01c0-.003.003-.109.003-.109.083-.568.1-1.144.055-1.695-.096-1.187-.46-2.07-1.016-2.734-.557-.665-1.337-1.112-2.25-1.368A8.545 8.545 0 0 0 17.128 0zM12.6 1.26c.36.008.71.05 1.01.116a10.083 10.083 0 0 0-.8.591c-.597.47-1.158 1.035-1.63 1.72a9.173 9.173 0 0 0-1.039 2.315 12.797 12.797 0 0 0-.61-.046c-.315-.018-.634-.02-.953-.002a8.903 8.903 0 0 0-.98 2.593c-.026.126-.048.252-.068.38a5.57 5.57 0 0 1-.465-.47c-.455-.517-.81-1.14-1.095-1.82A14.6 14.6 0 0 1 5.5 5.158c-.198-.818-.333-1.558-.364-2.205C5.03 1.257 5.89.825 6.68.682c1.218-.22 2.477.132 3.07.348.32.115.52.218.52.218S10.83 1.255 12.6 1.26z"/>
  </svg>
);

/* ─── Initial-based logos (para herramientas sin SVG embebido) ─── */
const InitialLogo = ({ text, color }: { text: string; color: string }) => (
  <div
    className="w-5 h-5 rounded flex items-center justify-center text-[9px] font-black text-white leading-none"
    style={{ background: color }}
  >
    {text}
  </div>
);

/* ─── Datos ─── */
const techs: Tech[] = [
  {
    id: "supabase",
    name: "Supabase",
    color: "#3ECF8E",
    bg: "#3ECF8E",
    category: "Base de Datos",
    tagline: "Backend en tiempo real",
    description: "Usamos Supabase como base de datos y backend principal en nuestras apps a medida. Nos permite tener autenticación, base de datos PostgreSQL, almacenamiento de archivos y APIs REST/realtime listas para producción en horas — sin gestionar infraestructura.",
    logo: <LogoSupabase />,
  },
  {
    id: "claude",
    name: "Anthropic Claude",
    color: "#D4A27F",
    bg: "#D4A27F",
    category: "Inteligencia Artificial",
    tagline: "El cerebro de nuestros agentes",
    description: "Claude es el modelo de IA que potencia la mayoría de nuestros Agentes conversacionales. Lo elegimos por su capacidad de razonamiento, su manejo del español LATAM y su comportamiento predecible en producción. Lo usamos vía API para chatbots, análisis de documentos y flujos de decisión automáticos.",
    logo: <LogoAnthropic />,
  },
  {
    id: "openai",
    name: "OpenAI",
    color: "#10a37f",
    bg: "#10a37f",
    category: "Inteligencia Artificial",
    tagline: "GPT-4 y embeddings",
    description: "Integramos los modelos de OpenAI (GPT-4o, embeddings, Whisper) en proyectos que requieren procesamiento de lenguaje natural avanzado, búsqueda semántica sobre documentos del cliente o transcripción de audio. Combinamos OpenAI con Claude según el caso de uso específico.",
    logo: <LogoOpenAI />,
  },
  {
    id: "n8n",
    name: "n8n",
    color: "#EA4B35",
    bg: "#EA4B35",
    category: "Automatización",
    tagline: "Flujos sin código",
    description: "n8n es nuestra herramienta principal de automatización de procesos. Con ella conectamos CRMs, ERPs, Google Sheets, WhatsApp y APIs externas mediante flujos visuales. Reducimos el tiempo de entrega de integraciones complejas hasta un 70% respecto a desarrollo tradicional.",
    logo: <LogoN8N />,
  },
  {
    id: "powerbi",
    name: "Power BI",
    color: "#F2C811",
    bg: "#F2C811",
    category: "Business Intelligence",
    tagline: "Dashboards ejecutivos",
    description: "Construimos dashboards estratégicos en Power BI conectados a las fuentes de datos del cliente (SQL, Excel, APIs, Shopify). Permiten a los CEOs y gerentes tomar decisiones en tiempo real con visualizaciones claras de KPIs de ventas, operaciones e inventario.",
    logo: <InitialLogo text="PBI" color="#F2C811" />,
  },
  {
    id: "tableau",
    name: "Tableau",
    color: "#E97627",
    bg: "#E97627",
    category: "Business Intelligence",
    tagline: "Visualización avanzada",
    description: "Para clientes con datasets complejos o necesidades de análisis exploratorio, usamos Tableau. Es nuestra herramienta cuando el cliente necesita cruzar múltiples fuentes de datos, crear análisis de cohortes o presentar reportes a inversores y directivos.",
    logo: <InitialLogo text="TB" color="#E97627" />,
  },
  {
    id: "whatsapp",
    name: "WhatsApp API",
    color: "#25D366",
    bg: "#25D366",
    category: "Mensajería",
    tagline: "Canal principal de agentes",
    description: "Integramos la API oficial de WhatsApp Business para desplegar nuestros Agentes de IA directamente en el canal que los clientes ya usan. Nuestros agentes atienden, califican leads y cierran ventas por WhatsApp 24/7 sin intervención humana.",
    logo: <LogoWhatsApp />,
  },
  {
    id: "hubspot",
    name: "HubSpot",
    color: "#FF7A59",
    bg: "#FF7A59",
    category: "CRM",
    tagline: "CRM y automatización de ventas",
    description: "Conectamos HubSpot con nuestros Agentes de IA para que los leads captados automáticamente queden registrados, segmentados y en el pipeline correcto. También automatizamos los follow-ups, las secuencias de email y la actualización de etapas de negocio.",
    logo: <InitialLogo text="HS" color="#FF7A59" />,
  },
  {
    id: "shopify",
    name: "Shopify",
    color: "#96BF48",
    bg: "#96BF48",
    category: "E-commerce",
    tagline: "IA para tiendas online",
    description: "Integramos Shopify con nuestros Agentes de IA para automatizar la atención al cliente de tiendas online: consultas de pedidos, stock en tiempo real, cotizaciones personalizadas y seguimiento de envíos — todo sin que el dueño de la tienda intervenga.",
    logo: <InitialLogo text="SH" color="#96BF48" />,
  },
  {
    id: "sheets",
    name: "Google Sheets",
    color: "#0F9D58",
    bg: "#0F9D58",
    category: "Productividad",
    tagline: "Datos accesibles para todos",
    description: "Google Sheets actúa como capa de datos ligera para clientes que no tienen un ERP formal. Nuestras automatizaciones leen y escriben en Sheets en tiempo real: reportes de ventas, listas de clientes, inventarios y más — sin que el equipo tenga que tocar ningún sistema complejo.",
    logo: <InitialLogo text="GS" color="#0F9D58" />,
  },
  {
    id: "make",
    name: "Make",
    color: "#6D00CC",
    bg: "#6D00CC",
    category: "Automatización",
    tagline: "Automatización visual avanzada",
    description: "Make (antes Integromat) lo usamos para automatizaciones que requieren lógica condicional compleja, transformación de datos entre formatos o integraciones con plataformas que no tienen módulo nativo en n8n. Es nuestra alternativa para flujos más elaborados.",
    logo: <InitialLogo text="MK" color="#6D00CC" />,
  },
  {
    id: "stripe",
    name: "Stripe",
    color: "#625BF6",
    bg: "#625BF6",
    category: "Pagos",
    tagline: "Cobros integrados en el producto",
    description: "Cuando nuestros clientes necesitan cobrar en línea, integramos Stripe directamente en la herramienta que construimos. Desde suscripciones recurrentes hasta pagos únicos con links, Stripe nos da la infraestructura de pagos confiable y lista en horas.",
    logo: <LogoStripe />,
  },
  {
    id: "vercel",
    name: "Vercel",
    color: "#ffffff",
    bg: "#ffffff",
    category: "Deploy",
    tagline: "Despliegue instantáneo",
    description: "Desplegamos todas nuestras aplicaciones Next.js en Vercel. Nos permite tener CI/CD automático, previews por rama, edge functions y CDN global en minutos. El cliente recibe un link funcional en producción desde el primer sprint.",
    logo: <LogoVercel />,
  },
  {
    id: "nextjs",
    name: "Next.js",
    color: "#ffffff",
    bg: "#ffffff",
    category: "Frontend",
    tagline: "Nuestro framework principal",
    description: "Next.js es el framework con el que construimos todas nuestras interfaces: desde landing pages de alto rendimiento hasta paneles de administración complejos. App Router, Server Components y la integración con Vercel nos permiten entregar productos rápidos, escalables y con excelente SEO.",
    logo: <LogoNextjs />,
  },
  {
    id: "postgres",
    name: "PostgreSQL",
    color: "#4169E1",
    bg: "#4169E1",
    category: "Base de Datos",
    tagline: "Nuestra base de datos relacional",
    description: "PostgreSQL es la base de datos que usamos en todos nuestros proyectos de software a medida. Su potencia, soporte de JSON y capacidad de escalar nos permite desde manejar una tabla de pedidos de una tienda hasta modelos de datos complejos con múltiples entidades y relaciones.",
    logo: <LogoPostgres />,
  },
  {
    id: "twilio",
    name: "Twilio",
    color: "#F22F46",
    bg: "#F22F46",
    category: "Mensajería",
    tagline: "SMS y voz programable",
    description: "Usamos Twilio cuando los proyectos requieren notificaciones por SMS, llamadas automatizadas o verificación por teléfono. También es nuestra solución para implementar WhatsApp Business API en clientes que necesitan mayor control sobre los números y la infraestructura de mensajería.",
    logo: <InitialLogo text="TW" color="#F22F46" />,
  },
  {
    id: "aws",
    name: "AWS",
    color: "#FF9900",
    bg: "#FF9900",
    category: "Cloud",
    tagline: "Infraestructura escalable",
    description: "Para proyectos empresariales con requerimientos de alta disponibilidad, usamos AWS: Lambda para funciones serverless, S3 para almacenamiento de archivos, RDS para bases de datos gestionadas y EC2 cuando el cliente requiere servidores dedicados con configuración a medida.",
    logo: <InitialLogo text="AWS" color="#FF9900" />,
  },
  {
    id: "zapier",
    name: "Zapier",
    color: "#FF4A00",
    bg: "#FF4A00",
    category: "Automatización",
    tagline: "Conexión rápida entre apps",
    description: "Zapier lo recomendamos a clientes que necesitan conectar herramientas sin un equipo técnico permanente. Es ideal para automatizaciones simples que el propio equipo puede mantener — formularios → CRM, nuevos clientes → Slack, ventas → Google Sheets — sin tocar código.",
    logo: <InitialLogo text="ZP" color="#FF4A00" />,
  },
];

/* ─── Componente logo pill ─── */
function TechPill({ tech, onClick }: { tech: Tech; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl border border-slate-800/70 bg-slate-900/60 hover:border-slate-600/80 hover:bg-slate-800/60 transition-all group flex-shrink-0 cursor-pointer"
    >
      <div
        className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0"
        style={{ background: `${tech.bg}18`, border: `1px solid ${tech.bg}30` }}
      >
        {tech.logo}
      </div>
      <span className="text-slate-300 text-sm font-medium whitespace-nowrap group-hover:text-white transition-colors">
        {tech.name}
      </span>
    </button>
  );
}

/* ─── Modal ─── */
function TechModal({ tech, onClose }: { tech: Tech; onClose: () => void }) {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm" />

      {/* Panel */}
      <motion.div
        className="relative w-full max-w-md bg-slate-900 border border-slate-800/80 rounded-2xl p-6 shadow-2xl z-10"
        initial={{ opacity: 0, y: 24, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 16, scale: 0.97 }}
        transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Glow */}
        <div
          className="absolute inset-0 rounded-2xl pointer-events-none"
          style={{ background: `radial-gradient(circle at 30% 0%, ${tech.bg}12 0%, transparent 60%)` }}
        />

        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-7 h-7 rounded-lg bg-slate-800 hover:bg-slate-700 flex items-center justify-center text-slate-400 hover:text-white transition-all"
        >
          <X className="w-3.5 h-3.5" />
        </button>

        {/* Header */}
        <div className="flex items-center gap-3 mb-4">
          <div
            className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
            style={{ background: `${tech.bg}20`, border: `1px solid ${tech.bg}35` }}
          >
            <div className="scale-125">{tech.logo}</div>
          </div>
          <div>
            <p className="text-white font-bold text-base">{tech.name}</p>
            <span
              className="text-[10px] font-semibold px-2 py-0.5 rounded-full"
              style={{ color: tech.color, background: `${tech.bg}18`, border: `1px solid ${tech.bg}30` }}
            >
              {tech.category}
            </span>
          </div>
        </div>

        {/* Tagline */}
        <p className="text-sm font-semibold mb-2" style={{ color: tech.color }}>
          {tech.tagline}
        </p>

        {/* Description */}
        <p className="text-slate-400 text-sm leading-relaxed">{tech.description}</p>
      </motion.div>
    </motion.div>
  );
}

/* ─── Sección principal ─── */
export default function TechStack() {
  const [selected, setSelected] = useState<Tech | null>(null);

  // Triplicar para loop más suave con distintos tamaños de ventana
  const doubled = [...techs, ...techs, ...techs];

  return (
    <section id="stack" className="py-20 border-y border-slate-800/40 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <FadeIn className="text-center">
          <span className="inline-block text-xs font-semibold text-violet-400 bg-violet-500/10 border border-violet-500/20 rounded-full px-4 py-1.5 mb-4">
            Tecnología de Confianza Global
          </span>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-white tracking-tight mb-3">
            Construimos con las herramientas{" "}
            <span className="bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent">
              líderes de la industria
            </span>
          </h2>
          <p className="text-slate-500 text-sm">
            Haz clic en cualquier tecnología para ver exactamente cómo la aplicamos en proyectos reales.
          </p>
        </FadeIn>
      </div>

      {/* Marquee — sin padding lateral para que se corte en los bordes */}
      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#020817] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#020817] to-transparent z-10 pointer-events-none" />

        <div className="flex animate-marquee gap-3 w-max px-3">
          {doubled.map((tech, i) => (
            <TechPill key={`${tech.id}-${i}`} tech={tech} onClick={() => setSelected(tech)} />
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selected && (
          <TechModal tech={selected} onClose={() => setSelected(null)} />
        )}
      </AnimatePresence>
    </section>
  );
}
