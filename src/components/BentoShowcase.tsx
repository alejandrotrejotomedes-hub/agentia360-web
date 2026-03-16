"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Eye, TrendingUp, Bot, Wrench, BarChart2, Workflow, Plug } from "lucide-react";
import FadeIn from "@/components/ui/FadeIn";

/* ─── Mini visualizaciones ─── */
const LineChart = ({ color = "#8b5cf6", data = [40, 55, 45, 70, 60, 80, 72, 90] }) => {
  const max = Math.max(...data);
  const points = data.map((v, i) => `${(i / (data.length - 1)) * 200},${60 - (v / max) * 50}`).join(" ");
  const id = `grad${color.replace(/[^a-z0-9]/gi, "")}`;
  return (
    <svg viewBox="0 0 200 60" className="w-full h-12" preserveAspectRatio="none">
      <defs>
        <linearGradient id={id} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={color} stopOpacity="0.4" />
          <stop offset="100%" stopColor={color} stopOpacity="0" />
        </linearGradient>
      </defs>
      <polyline points={points} fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <polygon points={`${points} 200,60 0,60`} fill={`url(#${id})`} />
    </svg>
  );
};

const BarChart = ({ values = [40, 65, 50, 80, 60, 90, 75], color = "#8b5cf6" }) => (
  <div className="flex items-end gap-1 h-12">
    {values.map((v, i) => (
      <div key={i} className="flex-1 rounded-t-sm" style={{ height: `${v}%`, background: i === values.length - 1 ? color : `${color}55` }} />
    ))}
  </div>
);

const DonutChart = ({ pct = 72, color = "#8b5cf6" }) => {
  const r = 28;
  const circ = 2 * Math.PI * r;
  return (
    <div className="relative w-20 h-20 mx-auto">
      <svg viewBox="0 0 80 80" className="w-full h-full -rotate-90">
        <circle cx="40" cy="40" r={r} fill="none" stroke="#1e293b" strokeWidth="8" />
        <circle cx="40" cy="40" r={r} fill="none" stroke={color} strokeWidth="8"
          strokeDasharray={`${(pct / 100) * circ} ${circ}`} strokeLinecap="round" />
      </svg>
      <span className="absolute inset-0 flex items-center justify-center text-white font-bold text-sm">{pct}%</span>
    </div>
  );
};

/* ─── Chat mini ─── */
const MiniChat = () => (
  <div className="space-y-2">
    {[
      { from: "user", text: "¿Tienen envío a Monterrey?" },
      { from: "bot",  text: "Sí, entrega en 48h 📦" },
      { from: "user", text: "¿Precio por mayoreo?" },
      { from: "bot",  text: "15% dto desde 10 uds ✅" },
    ].map(({ from, text }, i) => (
      <div key={i} className={`flex ${from === "user" ? "justify-end" : "justify-start"}`}>
        <span className={`text-[10px] px-2.5 py-1.5 rounded-xl max-w-[85%] leading-tight ${from === "bot" ? "bg-violet-600/30 text-slate-200 rounded-tl-none" : "bg-slate-700/80 text-slate-300 rounded-tr-none"}`}>
          {text}
        </span>
      </div>
    ))}
  </div>
);

/* ─── Datos ─── */
interface BentoItem {
  id: number;
  title: string;
  badge: string;
  badgeColor: string;
  description: string;
  metric: string;
  metricLabel: string;
  change: string;
  positive: boolean;
  colSpan: string;
  accent: string;
  serviceIcon: React.ReactNode;
  chart: React.ReactNode;
}

const items: BentoItem[] = [
  {
    id: 1,
    title: "Agentes de Ventas IA 24/7",
    badge: "Agentes de Ventas IA",
    badgeColor: "bg-violet-500/20 text-violet-300 border-violet-500/30",
    description: "Captura, califica y cierra ventas en WhatsApp, web o CRM de forma autónoma — incrementando tus ingresos con escalabilidad ilimitada.",
    metric: "94%",
    metricLabel: "Consultas resueltas",
    change: "+40% ventas",
    positive: true,
    colSpan: "lg:col-span-2 lg:row-span-2",
    accent: "#8b5cf6",
    serviceIcon: <Bot className="w-4 h-4" />,
    chart: <MiniChat />,
  },
  {
    id: 2,
    title: "Sistemas de Gestión de Alta Eficiencia",
    badge: "Alta Eficiencia",
    badgeColor: "bg-indigo-500/20 text-indigo-300 border-indigo-500/30",
    description: "Herramientas exclusivas que multiplican la velocidad de tu operación: inventario, pedidos, RRHH — diseñadas para tu rentabilidad.",
    metric: "3x",
    metricLabel: "Más rápido",
    change: "-60% tiempo manual",
    positive: true,
    colSpan: "lg:col-span-1",
    accent: "#6366f1",
    serviceIcon: <Wrench className="w-4 h-4" />,
    chart: <BarChart values={[45, 60, 50, 78, 65, 88, 75]} color="#6366f1" />,
  },
  {
    id: 3,
    title: "Inteligencia Estratégica de Datos",
    badge: "Data Intelligence",
    badgeColor: "bg-pink-500/20 text-pink-300 border-pink-500/30",
    description: "Convierte tus datos en decisiones de alto impacto. KPIs, ventas y métricas operativas en tiempo real — donde está tu próxima oportunidad.",
    metric: "100%",
    metricLabel: "Visibilidad",
    change: "Tiempo real",
    positive: true,
    colSpan: "lg:col-span-1",
    accent: "#ec4899",
    serviceIcon: <BarChart2 className="w-4 h-4" />,
    chart: <LineChart color="#ec4899" data={[30, 50, 42, 65, 55, 78, 70, 90]} />,
  },
  {
    id: 4,
    title: "Automatización de Procesos",
    badge: "Automatización",
    badgeColor: "bg-sky-500/20 text-sky-300 border-sky-500/30",
    description: "Conectamos tus apps, bases de datos y flujos de trabajo para que operen de forma fluida, autónoma y precisa.",
    metric: "200h",
    metricLabel: "Ahorradas / mes",
    change: "+85% eficiencia",
    positive: true,
    colSpan: "lg:col-span-1",
    accent: "#0ea5e9",
    serviceIcon: <Workflow className="w-4 h-4" />,
    chart: <DonutChart pct={85} color="#0ea5e9" />,
  },
  {
    id: 5,
    title: "Integraciones y APIs",
    badge: "Integraciones",
    badgeColor: "bg-emerald-500/20 text-emerald-300 border-emerald-500/30",
    description: "WhatsApp, Shopify, SAP, Google Sheets, HubSpot — conectamos cualquier sistema para que todo fluya.",
    metric: "15+",
    metricLabel: "Sistemas conectados",
    change: "+99% uptime",
    positive: true,
    colSpan: "lg:col-span-2",
    accent: "#10b981",
    serviceIcon: <Plug className="w-4 h-4" />,
    chart: <BarChart values={[70, 80, 75, 90, 82, 88, 94]} color="#10b981" />,
  },
];

/* ─── Tarjeta ─── */
function BentoCard({ item, index }: { item: BentoItem; index: number }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      className={`relative group ${item.colSpan} bg-slate-900/60 border border-slate-800/60 rounded-2xl p-6 overflow-hidden cursor-pointer hover:border-slate-700/80 transition-colors`}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{ background: `radial-gradient(circle at 50% 0%, ${item.accent}18 0%, transparent 70%)` }} />

      <div className="flex items-start justify-between mb-4">
        <span className={`inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full border ${item.badgeColor}`}>
          <span style={{ color: item.accent }}>{item.serviceIcon}</span>
          {item.badge}
        </span>
        <div className="text-right">
          <p className="text-white font-bold text-lg leading-tight">{item.metric}</p>
          <p className="text-slate-500 text-xs">{item.metricLabel}</p>
        </div>
      </div>

      <div className="mb-4 flex justify-center">{item.chart}</div>

      <h3 className="text-white font-semibold text-sm mb-1">{item.title}</h3>
      <p className="text-slate-500 text-xs leading-relaxed mb-3">{item.description}</p>

      <span className={`inline-flex items-center gap-1 text-xs font-semibold px-2 py-0.5 rounded-full ${
        item.positive ? "bg-emerald-500/15 text-emerald-400" : "bg-rose-500/15 text-rose-400"
      }`}>
        <TrendingUp className="w-3 h-3" />
        {item.change}
      </span>

      <motion.div
        className="absolute inset-0 rounded-2xl bg-slate-950/85 backdrop-blur-sm flex flex-col items-center justify-center gap-4 pointer-events-none"
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.2 }}
      >
        <div className="w-12 h-12 rounded-xl flex items-center justify-center"
          style={{ background: `${item.accent}30`, border: `1px solid ${item.accent}50` }}>
          <Eye className="w-5 h-5" style={{ color: item.accent }} />
        </div>
        <div className="text-center">
          <p className="text-white font-semibold text-sm mb-0.5">Ver Caso de Uso</p>
          <p className="text-slate-400 text-xs">{item.badge}</p>
        </div>
        <button
          className="pointer-events-auto text-white text-sm font-semibold px-6 py-2.5 rounded-xl hover:opacity-90 transition-opacity"
          style={{ background: item.accent }}
        >
          Ver Demo →
        </button>
      </motion.div>
    </motion.div>
  );
}

export default function BentoShowcase() {
  return (
    <section id="showcase" className="py-24 bg-slate-950/50">
      <div className="max-w-7xl mx-auto px-6">

        <FadeIn className="text-center mb-14">
          <span className="inline-block text-xs font-semibold text-violet-400 bg-violet-500/10 border border-violet-500/20 rounded-full px-4 py-1.5 mb-4">
            Nuestros Servicios
          </span>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            Todo lo que necesita tu negocio{" "}
            <span className="bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent">
              en un solo lugar
            </span>
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            Pasa el cursor sobre cada servicio para ver el caso de uso.
            Cada solución se construye a medida — cada pieza, exclusiva para ti.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 auto-rows-[240px]">
          {items.map((item, i) => (
            <BentoCard key={item.id} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
