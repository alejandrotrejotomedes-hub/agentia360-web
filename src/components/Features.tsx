import { Bot, Zap, BarChart3, CheckCircle2 } from "lucide-react";
import FadeIn from "@/components/ui/FadeIn";

const CheckItem = ({ text }: { text: string }) => (
  <li className="flex items-start gap-2.5 text-slate-300 text-sm">
    <CheckCircle2 className="w-4 h-4 text-violet-400 flex-shrink-0 mt-0.5" />
    {text}
  </li>
);

const featureCards = [
  {
    icon: <Bot className="w-5 h-5 text-violet-400" />,
    title: "Agentes de Ventas IA 24/7",
    description: "Captura, califica y convierte leads de forma autónoma en cualquier canal — mientras tu equipo se enfoca en cerrar los negocios más valiosos.",
  },
  {
    icon: <Zap className="w-5 h-5 text-indigo-400" />,
    title: "Sistemas de Gestión de Alta Eficiencia",
    description: "Software diseñado para multiplicar la velocidad de tu operación. Automatiza flujos, optimiza recursos y libera el máximo potencial de tu equipo.",
  },
  {
    icon: <BarChart3 className="w-5 h-5 text-pink-400" />,
    title: "Inteligencia Estratégica de Datos",
    description: "Convierte tus datos en decisiones de alto impacto. Dashboards en tiempo real que revelan exactamente dónde está tu próxima oportunidad de crecimiento.",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24">
      <div className="max-w-7xl mx-auto px-6 space-y-28">

        {/* ── Servicio 1: Agentes de Ventas IA 24/7 ── */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <FadeIn direction="left" className="space-y-6">
            <span className="text-xs font-semibold text-violet-400 bg-violet-500/10 border border-violet-500/20 rounded-full px-4 py-1.5">
              Agentes de Ventas IA 24/7
            </span>
            <h2 className="text-4xl font-extrabold text-white tracking-tight leading-tight">
              Tu fuerza de ventas más<br />poderosa trabaja sin parar.
            </h2>
            <p className="text-slate-400 leading-relaxed">
              Construimos Agentes de IA entrenados con el lenguaje, los productos y los
              procesos de tu negocio. Generan ingresos en WhatsApp, tu sitio web o tu CRM
              las 24 horas del día — con escalabilidad ilimitada y costo predecible.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {[
                { t: "Conversión Inteligente", d: "Califica leads y cierra ventas con precisión — liberando a tu equipo para oportunidades de mayor valor." },
                { t: "Experiencia Premium", d: "Respuestas instantáneas y personalizadas que generan confianza y fidelidad en cada interacción." },
              ].map(({ t, d }) => (
                <div key={t} className="bg-slate-900/60 border border-slate-800/60 rounded-xl p-4">
                  <h3 className="text-white font-semibold text-sm mb-1.5">{t}</h3>
                  <p className="text-slate-500 text-xs leading-relaxed">{d}</p>
                </div>
              ))}
            </div>
            <a href="#contact" className="inline-flex items-center gap-2 bg-violet-600 hover:bg-violet-500 text-white font-semibold text-sm px-6 py-3 rounded-xl transition-all shadow-lg shadow-violet-600/25">
              <Bot className="w-4 h-4" />
              Agendar Diagnóstico de Automatización
            </a>
          </FadeIn>

          {/* Chat mockup */}
          <FadeIn direction="right" delay={0.15}>
            <div className="bg-slate-900/60 border border-slate-800/60 rounded-2xl p-5 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-violet-600/8 to-transparent pointer-events-none" />
              <div className="flex items-center gap-3 mb-4 pb-3 border-b border-slate-800/60">
                <div className="w-8 h-8 rounded-full bg-violet-600 flex items-center justify-center">
                  <Bot className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="text-white text-xs font-semibold">Agente IA · Tu Empresa</p>
                  <p className="text-emerald-400 text-[10px]">● Activo 24/7</p>
                </div>
                <div className="ml-auto bg-emerald-500/10 border border-emerald-500/20 rounded-full px-2 py-0.5">
                  <span className="text-emerald-400 text-[10px] font-semibold">94% conversión</span>
                </div>
              </div>
              <div className="space-y-3">
                {[
                  { from: "user", text: "¿Cuáles son sus horarios de atención?" },
                  { from: "bot",  text: "Atendemos 24/7 por este canal 😊. Para soporte urgente también puedes llamar al número en nuestro sitio." },
                  { from: "user", text: "Perfecto, quiero hacer un pedido de 50 unidades del producto A." },
                  { from: "bot",  text: "¡Claro! Para 50 unidades aplica el precio mayorista de $180/ud. Te genero la cotización ahora mismo 📋" },
                ].map(({ from, text }, i) => (
                  <div key={i} className={`flex ${from === "user" ? "justify-end" : "justify-start"}`}>
                    <div className={`max-w-[80%] px-3 py-2 rounded-xl text-xs leading-relaxed ${from === "bot" ? "bg-violet-600/20 text-slate-200 rounded-tl-none" : "bg-slate-700/80 text-slate-300 rounded-tr-none"}`}>
                      {text}
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-4 pt-3 border-t border-slate-800/60 flex items-center gap-2">
                <div className="flex-1 bg-slate-800/80 rounded-lg px-3 py-2 text-slate-500 text-xs">Escribe tu mensaje...</div>
                <div className="w-7 h-7 rounded-lg bg-violet-600 flex items-center justify-center text-white text-xs">→</div>
              </div>
            </div>
          </FadeIn>
        </div>

        {/* ── Servicio 2: Sistemas de Gestión de Alta Eficiencia ── */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* App mockup */}
          <FadeIn direction="left" delay={0.15}>
            <div className="bg-slate-900/60 border border-slate-800/60 rounded-2xl p-5 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/8 to-transparent pointer-events-none" />
              <div className="flex items-center justify-between mb-4">
                <p className="text-white text-xs font-semibold">Panel de Gestión · Tu Herramienta</p>
                <span className="text-xs bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 px-2 py-0.5 rounded-full">Alta Eficiencia</span>
              </div>
              <div className="space-y-2">
                <div className="grid grid-cols-4 gap-2 text-[10px] text-slate-500 font-semibold uppercase pb-1 border-b border-slate-800/60">
                  <span>Pedido</span><span>Cliente</span><span>Estado</span><span className="text-right">Total</span>
                </div>
                {[
                  { id: "#4821", client: "Mex Parts SA",   status: "Enviado",    color: "text-emerald-400 bg-emerald-500/10", total: "$4,200" },
                  { id: "#4820", client: "TechStore MX",   status: "En proceso", color: "text-amber-400 bg-amber-500/10",    total: "$1,850" },
                  { id: "#4819", client: "Grupo Norte",    status: "Enviado",    color: "text-emerald-400 bg-emerald-500/10", total: "$9,600" },
                  { id: "#4818", client: "LogiFleet CDMX", status: "Pendiente",  color: "text-slate-400 bg-slate-500/10",    total: "$3,100" },
                  { id: "#4817", client: "Almacén Pro",    status: "Enviado",    color: "text-emerald-400 bg-emerald-500/10", total: "$7,340" },
                ].map(({ id, client, status, color, total }) => (
                  <div key={id} className="grid grid-cols-4 gap-2 text-xs items-center py-1.5 border-b border-slate-800/40 last:border-0">
                    <span className="text-violet-400 font-mono">{id}</span>
                    <span className="text-slate-300 truncate">{client}</span>
                    <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full w-fit ${color}`}>{status}</span>
                    <span className="text-white font-semibold text-right">{total}</span>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

          <FadeIn direction="right" className="space-y-6">
            <span className="text-xs font-semibold text-indigo-400 bg-indigo-500/10 border border-indigo-500/20 rounded-full px-4 py-1.5">
              Sistemas de Gestión de Alta Eficiencia
            </span>
            <h2 className="text-4xl font-extrabold text-white tracking-tight leading-tight">
              Más velocidad, más control,<br />más rentabilidad.
            </h2>
            <p className="text-slate-400 leading-relaxed">
              Tu operación es única — tu software también lo es. Construimos
              exactamente lo que necesitas: gestión de pedidos, inventario, RRHH,
              facturación o cualquier herramienta que multiplique tu eficiencia operativa.
            </p>
            <ul className="space-y-3">
              <CheckItem text="Diseñado desde cero, adaptado 100% a tu proceso" />
              <CheckItem text="Acceso web y móvil — disponible desde cualquier lugar" />
              <CheckItem text="Integración nativa con tu stack actual (SAP, Shopify, Google)" />
            </ul>
            <a href="#contact" className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm px-6 py-3 rounded-xl transition-all shadow-lg shadow-indigo-600/25">
              <Zap className="w-4 h-4" />
              Agendar Diagnóstico de Automatización
            </a>
          </FadeIn>
        </div>

        {/* ── Tarjetas de capacidades ── */}
        <div>
          <FadeIn className="text-center mb-12">
            <h2 className="text-4xl font-extrabold text-white tracking-tight mb-4">
              Tres capacidades que transforman tu negocio
            </h2>
            <p className="text-slate-400 max-w-lg mx-auto">
              Somos un equipo técnico que construye, entrega y da soporte a cada
              solución — de principio a fin, con precisión y compromiso real.
            </p>
          </FadeIn>
          <div className="grid md:grid-cols-3 gap-6">
            {featureCards.map(({ icon, title, description }, i) => (
              <FadeIn key={title} delay={i * 0.1}>
                <div className="bg-slate-900/60 border border-slate-800/60 rounded-2xl p-6 hover:border-violet-500/30 hover:bg-slate-900/80 transition-all group h-full">
                  <div className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center mb-4 group-hover:bg-slate-700 transition-colors">
                    {icon}
                  </div>
                  <h3 className="text-white font-semibold mb-2">{title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
