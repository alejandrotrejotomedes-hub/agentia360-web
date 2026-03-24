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
}

/* ─── Proyectos ─── */
const projects: PortfolioProject[] = [
  // Aquí irán los proyectos que el usuario vaya agregando
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
        <h3 className="text-white font-semibold text-base mb-1.5">{project.title}</h3>
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
