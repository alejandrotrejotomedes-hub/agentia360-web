"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play, Bot, CheckCircle2 } from "lucide-react";

/* ─── Chat mockup ─── */
const ChatBubble = ({
  from, text, time,
}: { from: "user" | "bot"; text: string; time: string }) => (
  <div className={`flex gap-2 ${from === "user" ? "flex-row-reverse" : ""}`}>
    <div className={`w-6 h-6 rounded-full flex-shrink-0 flex items-center justify-center text-[10px] font-bold mt-0.5 ${from === "bot" ? "bg-violet-600 text-white" : "bg-slate-700 text-slate-300"}`}>
      {from === "bot" ? "IA" : "U"}
    </div>
    <div className={`max-w-[75%] px-3 py-2 rounded-xl text-xs leading-relaxed ${from === "bot" ? "bg-violet-600/20 text-slate-200 rounded-tl-none" : "bg-slate-700/80 text-slate-300 rounded-tr-none"}`}>
      <p>{text}</p>
      <p className="text-[10px] text-slate-500 mt-1 text-right">{time}</p>
    </div>
  </div>
);

/* ─── Flow node ─── */
const FlowNode = ({ label, color }: { label: string; color: string }) => (
  <div className="flex flex-col items-center gap-1">
    <div className="w-8 h-8 rounded-lg flex items-center justify-center text-[10px] font-bold text-white" style={{ background: color }}>
      {label.slice(0, 2)}
    </div>
    <span className="text-slate-500 text-[9px]">{label}</span>
  </div>
);

/* ─── Animaciones ─── */
const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};
const item = {
  hidden: { opacity: 0, y: 32 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } },
};

export default function Hero() {
  return (
    <section id="home" className="relative hero-bg min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Blobs */}
      <div className="absolute top-32 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full bg-violet-600/10 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-indigo-600/8 blur-[100px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 py-20 lg:py-28 grid lg:grid-cols-2 gap-16 items-center w-full">

        {/* ── Izquierda: Copy ── */}
        <motion.div className="flex flex-col gap-8" variants={container} initial="hidden" animate="show">

          <motion.div variants={item} className="inline-flex items-center gap-2 bg-violet-600/10 border border-violet-500/20 rounded-full px-4 py-1.5 w-fit">
            <span className="w-2 h-2 rounded-full bg-violet-400 animate-pulse" />
            <span className="text-violet-300 text-xs font-medium">Software House · IA para fundadores</span>
          </motion.div>

          <motion.h1 variants={item} className="text-5xl lg:text-6xl font-extrabold leading-[1.1] tracking-tight text-white">
            Eleva tu empresa al siguiente nivel con{" "}
            <span className="bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent">
              Agentes de IA
            </span>{" "}
            y Software a Medida
          </motion.h1>

          <motion.p variants={item} className="text-slate-400 text-lg leading-relaxed max-w-lg">
            Creamos software a medida que libera el potencial de tu equipo y
            automatiza tu crecimiento. Agentes de IA, herramientas personalizadas
            e integraciones que trabajan para ti, las 24 horas del día.
          </motion.p>

          <motion.div variants={item} className="flex flex-col gap-3">
            {/* Scarcity badge */}
            <div className="flex items-center gap-2 w-fit">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse flex-shrink-0" />
              <span className="text-amber-400/90 text-xs font-semibold tracking-wide">
                Disponibilidad limitada · Aceptamos nuevos proyectos este mes
              </span>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 bg-violet-600 hover:bg-violet-500 text-white font-semibold text-base px-7 py-3.5 rounded-xl transition-colors cursor-pointer"
                animate={{
                  boxShadow: [
                    "0 8px 30px rgba(139,92,246,0.35)",
                    "0 8px 50px rgba(139,92,246,0.65)",
                    "0 8px 30px rgba(139,92,246,0.35)",
                  ],
                }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Agendar Diagnóstico de Automatización
                <ArrowRight className="w-4 h-4" />
              </motion.a>
              <a
                href="#showcase"
                className="inline-flex items-center justify-center gap-2 border border-slate-700 hover:border-slate-600 text-slate-300 hover:text-white font-medium text-base px-7 py-3.5 rounded-xl transition-all hover:bg-white/5"
              >
                <Play className="w-4 h-4 text-violet-400 fill-violet-400" />
                Ver Portafolio
              </a>
            </div>
          </motion.div>

          {/* Bullets de confianza */}
          <motion.div variants={item} className="flex flex-col gap-2">
            {[
              "Entrega en 4 semanas o menos",
              "Código exclusivo, diseñado para tu industria",
              "Soporte técnico incluido post-entrega",
            ].map((text) => (
              <div key={text} className="flex items-center gap-2.5 text-slate-400 text-sm">
                <CheckCircle2 className="w-4 h-4 text-violet-400 flex-shrink-0" />
                {text}
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* ── Derecha: AI Mockup ── */}
        <motion.div
          className="relative hidden lg:flex items-center justify-center"
          initial={{ opacity: 0, x: 48 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="w-full max-w-lg flex flex-col gap-3">

            {/* Fila superior: métrica + estado */}
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-slate-900/90 backdrop-blur-sm border border-slate-800/80 rounded-2xl px-4 py-3 flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-violet-600/20 border border-violet-500/30 flex items-center justify-center flex-shrink-0">
                  <Bot className="w-4 h-4 text-violet-400" />
                </div>
                <div>
                  <p className="text-white font-bold text-lg leading-tight">94%</p>
                  <p className="text-slate-500 text-[10px]">Consultas resueltas</p>
                </div>
              </div>
              <div className="bg-slate-900/90 backdrop-blur-sm border border-slate-800/80 rounded-2xl px-4 py-3 flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-emerald-400 flex-shrink-0 animate-pulse" />
                <div>
                  <p className="text-emerald-400 text-xs font-semibold">En línea 24/7</p>
                  <p className="text-slate-500 text-[10px]">Sin agente humano</p>
                </div>
              </div>
            </div>

            {/* Tarjeta principal: Chat */}
            <div className="bg-slate-900/90 backdrop-blur-sm border border-slate-800/80 rounded-2xl p-5 shadow-2xl">
              <div className="flex items-center gap-3 mb-4 pb-3 border-b border-slate-800/60">
                <div className="w-8 h-8 rounded-full bg-violet-600 flex items-center justify-center">
                  <Bot className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="text-white text-xs font-semibold">Asistente IA · Tienda Online</p>
                  <p className="text-emerald-400 text-[10px] flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block" />
                    Respondiendo automáticamente
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <ChatBubble from="user" text="¿Cuánto tarda mi pedido en llegar?" time="16:32" />
                <ChatBubble from="bot"  text="Tu pedido #4821 llega en 2-3 días hábiles 📦. Te enviaré el número de rastreo en cuanto salga." time="16:32" />
                <ChatBubble from="user" text="¿Hay descuento si compro 10 unidades?" time="16:33" />
                <ChatBubble from="bot"  text="¡Sí! Para pedidos mayores a 10 unidades aplica 15% de descuento automático ✅" time="16:33" />
              </div>
            </div>

            {/* Tarjeta: Flujo de automatización */}
            <div className="bg-slate-900/90 backdrop-blur-sm border border-slate-800/80 rounded-2xl p-4 shadow-2xl">
              <p className="text-white text-xs font-semibold mb-3">Flujo Automatizado</p>
              <div className="flex items-center gap-1.5">
                <FlowNode label="CRM"       color="#7c3aed" />
                <div className="flex-1 h-px bg-slate-700" />
                <FlowNode label="Agente IA" color="#6366f1" />
                <div className="flex-1 h-px bg-slate-700" />
                <FlowNode label="WhatsApp"  color="#25d366" />
                <div className="flex-1 h-px bg-slate-700" />
                <FlowNode label="Email"     color="#0ea5e9" />
              </div>
              <p className="text-slate-500 text-[10px] mt-2">3 pasos · 0 intervención humana</p>
            </div>

            {/* Chips */}
            <div className="grid grid-cols-3 gap-2">
              {[
                { v: "24/7",  l: "Disponible" },
                { v: "<1s",   l: "Respuesta"  },
                { v: "50+",   l: "Empresas"   },
              ].map(({ v, l }) => (
                <div key={l} className="bg-slate-900/80 border border-slate-800/60 rounded-xl p-3 text-center">
                  <p className="text-white font-bold text-base leading-tight">{v}</p>
                  <p className="text-slate-500 text-[10px] mt-0.5">{l}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
