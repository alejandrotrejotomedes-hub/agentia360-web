"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Globe, Workflow, LayoutDashboard, ExternalLink, ArrowRight } from "lucide-react";
import FadeIn from "@/components/ui/FadeIn";

/* ─── Tipos ─── */
export type PortfolioCategory = "saas" | "web" | "n8n";

export interface PortfolioProject {
  id: number;
  category: PortfolioCategory;
  title: string;
  description: string;
  tags: string[];
  image?: string;          // URL de imagen o screenshot
  link?: string;           // URL del proyecto (opcional)
  accent: string;          // color de acento hex
  price?: string;          // precio de suscripción (SaaS)
  priceStatus?: "disponible" | "proximamente" | "validacion";
}

/* ─── Proyectos ─── */
const projects: PortfolioProject[] = [
  {
    id: 1,
    category: "saas",
    title: "MediConsult",
    description: "SaaS de gestión de consultorio para médicos independientes. Reduce el 20% de inasistencias con recordatorios automáticos por WhatsApp, agenda pública y sync con Google Calendar.",
    tags: ["Next.js", "TypeScript", "Vercel", "SaaS", "WhatsApp"],
    link: "https://mediconsult-landing.vercel.app",
    accent: "#0ea5e9",
    price: "$399/mes",
    priceStatus: "validacion",
  },
  {
    id: 2,
    category: "saas",
    title: "Finantia",
    description: "App de finanzas para parejas. Dashboard compartido, control de gastos, análisis de tarjetas de crédito, metas de ahorro y multi-divisa. Reemplaza el Excel con una app real.",
    tags: ["Next.js", "Supabase", "TypeScript", "Chart.js", "Fintech"],
    accent: "#8b5cf6",
    price: "$499/mes",
    priceStatus: "proximamente",
  },
  {
    id: 3,
    category: "saas",
    title: "RecruitmentOS",
    description: "Plataforma SaaS de reclutamiento con IA. Análisis de CVs con score de paridad, pipeline Kanban por etapas, publicación multi-canal de vacantes y dashboard de métricas con funnel de conversión.",
    tags: ["Next.js", "Supabase", "OpenAI", "TypeScript", "Multi-tenant"],
    link: "https://recruitment-app-nine-plum.vercel.app",
    accent: "#10b981",
    price: "A medida",
    priceStatus: "disponible",
  },
  {
    id: 4,
    category: "web",
    title: "Ramen Yukihira",
    description: "Sitio web para restaurante de ramen en CDMX con estética anime, menú interactivo y sección de ubicación. Construido en 1 sesión basándose solo en su perfil de Instagram.",
    tags: ["Astro", "Vercel", "Dark Theme", "Restaurante"],
    link: "https://www.instagram.com/ramenyukihira",
    accent: "#d62828",
  },
  {
    id: 5,
    category: "n8n",
    title: "WhatsApp Chatbot IA con RAG",
    description: "Chatbot conectado a WhatsApp Business que responde con IA usando los documentos del negocio como base de conocimiento. Sin intervención humana, 24/7.",
    tags: ["n8n", "WhatsApp", "OpenAI", "RAG", "Pinecone"],
    accent: "#25d366",
    price: "$15,000 + $1,500/mes",
    priceStatus: "disponible",
  },
  {
    id: 6,
    category: "n8n",
    title: "Voice Chatbot para Restaurantes y Negocios",
    description: "Bot de voz con ElevenLabs y OpenAI que atiende clientes por audio. Transcribe, responde con IA y devuelve respuesta de voz. Ideal para restaurantes, clínicas y hoteles.",
    tags: ["n8n", "ElevenLabs", "OpenAI", "Voz", "Atención al Cliente"],
    accent: "#f59e0b",
    price: "$12,000 + $1,500/mes",
    priceStatus: "disponible",
  },
  {
    id: 7,
    category: "n8n",
    title: "Generador de Contenido para Redes Sociales",
    description: "Automatización que genera posts optimizados para Instagram, LinkedIn y X con IA a partir del tema y voz de marca del negocio. Listo para publicar.",
    tags: ["n8n", "OpenAI", "Instagram", "LinkedIn", "Contenido"],
    accent: "#e1306c",
    price: "$6,000 + $800/mes",
    priceStatus: "disponible",
  },
  {
    id: 8,
    category: "n8n",
    title: "Agente IA para DMs de Instagram",
    description: "Responde automáticamente los mensajes directos de Instagram usando IA. Clasifica intenciones, responde preguntas frecuentes y deriva al humano cuando es necesario.",
    tags: ["n8n", "Instagram", "Manychat", "OpenAI", "DMs"],
    accent: "#833ab4",
    price: "$12,000 + $1,200/mes",
    priceStatus: "disponible",
  },
  {
    id: 9,
    category: "n8n",
    title: "Investigador de Leads para Ventas",
    description: "Agente que investiga empresas y prospectos en internet, identifica tomadores de decisión y genera un perfil completo listo para la llamada de ventas.",
    tags: ["n8n", "OpenAI", "Web Scraping", "Ventas", "CRM"],
    accent: "#0ea5e9",
    price: "$10,000 + $1,200/mes",
    priceStatus: "disponible",
  },
];

/* ─── Tabs config ─── */
const tabs: { key: PortfolioCategory; label: string; icon: React.ReactNode; accent: string; description: string }[] = [
  {
    key: "saas",
    label: "SaaS",
    icon: <LayoutDashboard className="w-4 h-4" />,
    accent: "#8b5cf6",
    description: "Plataformas web con modelo de suscripción, multi-tenant y funcionalidades de producto.",
  },
  {
    key: "web",
    label: "Páginas Web",
    icon: <Globe className="w-4 h-4" />,
    accent: "#0ea5e9",
    description: "Sitios corporativos, landing pages y e-commerce de alto impacto y conversión.",
  },
  {
    key: "n8n",
    label: "Automatización n8n",
    icon: <Workflow className="w-4 h-4" />,
    accent: "#10b981",
    description: "Flujos de trabajo automáticos que conectan apps, bases de datos y APIs sin código.",
  },
];

/* ─── Tarjeta de proyecto ─── */
function ProjectCard({ project, index }: { project: PortfolioProject; index: number }) {
  return (
    <motion.div
      key={project.id}
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -16 }}
      transition={{ duration: 0.4, delay: index * 0.07, ease: [0.16, 1, 0.3, 1] }}
      className="group relative bg-slate-900/60 border border-slate-800/60 rounded-2xl overflow-hidden hover:border-slate-700/80 transition-colors"
    >
      {/* Imagen / preview */}
      <div
        className="relative h-44 flex items-center justify-center overflow-hidden"
        style={{ background: `linear-gradient(135deg, ${project.accent}18 0%, #0f172a 100%)` }}
      >
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="flex flex-col items-center gap-2 opacity-30">
            <div className="w-16 h-16 rounded-2xl border-2 border-dashed" style={{ borderColor: project.accent }} />
            <span className="text-xs text-slate-500">Preview próximamente</span>
          </div>
        )}

        {/* Overlay hover con link */}
        {project.link && (
          <div className="absolute inset-0 bg-slate-950/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-white text-sm font-semibold px-5 py-2.5 rounded-xl transition-opacity hover:opacity-90"
              style={{ background: project.accent }}
            >
              Ver proyecto <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        )}
      </div>

      {/* Contenido */}
      <div className="p-5">
        <div className="flex items-start justify-between gap-2 mb-1.5">
          <h3 className="text-white font-semibold text-base">{project.title}</h3>
          {project.price && (
            <div className="flex flex-col items-end shrink-0">
              <span
                className="text-sm font-bold whitespace-nowrap"
                style={{ color: project.accent }}
              >
                {project.price}
              </span>
              {project.priceStatus && (
                <span className="text-[10px] font-medium mt-0.5 px-1.5 py-0.5 rounded-full"
                  style={{
                    background: project.priceStatus === "disponible"
                      ? `${project.accent}20`
                      : project.priceStatus === "validacion"
                      ? "#f59e0b20"
                      : "#64748b20",
                    color: project.priceStatus === "disponible"
                      ? project.accent
                      : project.priceStatus === "validacion"
                      ? "#f59e0b"
                      : "#94a3b8",
                  }}
                >
                  {project.priceStatus === "disponible" ? "Disponible" : project.priceStatus === "validacion" ? "En validación" : "Próximamente"}
                </span>
              )}
            </div>
          )}
        </div>
        <p className="text-slate-400 text-sm leading-relaxed mb-4">{project.description}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs font-medium px-2.5 py-0.5 rounded-full border"
              style={{ color: project.accent, borderColor: `${project.accent}40`, background: `${project.accent}12` }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

/* ─── Estado vacío por categoría ─── */
function EmptyState({ tab }: { tab: typeof tabs[number] }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="col-span-full flex flex-col items-center justify-center py-20 gap-4"
    >
      <div
        className="w-16 h-16 rounded-2xl flex items-center justify-center"
        style={{ background: `${tab.accent}18`, border: `1px solid ${tab.accent}30` }}
      >
        <span style={{ color: tab.accent }}>{tab.icon}</span>
      </div>
      <div className="text-center">
        <p className="text-white font-semibold mb-1">Proyectos en camino</p>
        <p className="text-slate-500 text-sm max-w-xs">{tab.description}</p>
      </div>
    </motion.div>
  );
}

/* ─── Componente principal ─── */
export default function Portfolio() {
  const [active, setActive] = useState<PortfolioCategory>("saas");

  const activeTab = tabs.find((t) => t.key === active)!;
  const filtered = projects.filter((p) => p.category === active);

  return (
    <section id="portafolio" className="py-24 bg-slate-950/50">
      <div className="max-w-7xl mx-auto px-6">

        {/* Encabezado */}
        <FadeIn className="text-center mb-14">
          <span className="inline-block text-xs font-semibold text-violet-400 bg-violet-500/10 border border-violet-500/20 rounded-full px-4 py-1.5 mb-4">
            Portafolio
          </span>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            Proyectos que{" "}
            <span className="bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent">
              hablan por sí solos
            </span>
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            Explora nuestros trabajos organizados por tipo de solución.
          </p>
        </FadeIn>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {tabs.map((tab) => {
            const isActive = active === tab.key;
            return (
              <button
                key={tab.key}
                onClick={() => setActive(tab.key)}
                className="relative flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300"
                style={
                  isActive
                    ? { background: `${tab.accent}20`, color: tab.accent, border: `1px solid ${tab.accent}50` }
                    : { background: "transparent", color: "#94a3b8", border: "1px solid #1e293b" }
                }
              >
                {tab.icon}
                {tab.label}
                {isActive && (
                  <motion.div
                    layoutId="tab-indicator"
                    className="absolute inset-0 rounded-xl pointer-events-none"
                    style={{ boxShadow: `0 0 16px ${tab.accent}30` }}
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Descripción de la categoría activa */}
        <AnimatePresence mode="wait">
          <motion.p
            key={active + "-desc"}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="text-center text-slate-400 text-sm mb-10 max-w-lg mx-auto"
          >
            {activeTab.description}
          </motion.p>
        </AnimatePresence>

        {/* Grid de proyectos */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filtered.length === 0 ? (
              <EmptyState tab={activeTab} />
            ) : (
              filtered.map((project, i) => (
                <ProjectCard key={project.id} project={project} index={i} />
              ))
            )}
          </motion.div>
        </AnimatePresence>

        {/* CTA */}
        {filtered.length > 0 && (
          <FadeIn className="text-center mt-14">
            <a
              href="#contacto"
              className="inline-flex items-center gap-2 text-white font-semibold px-8 py-3 rounded-xl bg-violet-600 hover:bg-violet-500 transition-colors"
            >
              ¿Quieres un proyecto así? <ArrowRight className="w-4 h-4" />
            </a>
          </FadeIn>
        )}

      </div>
    </section>
  );
}
