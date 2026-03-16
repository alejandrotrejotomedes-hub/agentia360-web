import { Bot, Code2, BarChart2 } from "lucide-react";
import FadeIn from "@/components/ui/FadeIn";

const capacidades = [
  {
    icon: <Bot className="w-7 h-7 text-violet-400" />,
    accent: "from-violet-600/20 to-violet-600/5",
    border: "border-violet-500/20 hover:border-violet-500/50",
    glow: "bg-violet-600/10",
    tag: "01",
    title: "Agentes de IA",
    description:
      "Tu negocio disponible 24/7 con inteligencia humana. Nuestros agentes atienden, califican y convierten en cualquier canal — de forma autónoma y con precisión.",
    items: [
      "Disponibilidad total, sin interrupciones",
      "Respuestas con contexto de tu negocio",
      "Escalabilidad inmediata ante alta demanda",
    ],
  },
  {
    icon: <Code2 className="w-7 h-7 text-indigo-400" />,
    accent: "from-indigo-600/20 to-indigo-600/5",
    border: "border-indigo-500/20 hover:border-indigo-500/50",
    glow: "bg-indigo-600/10",
    tag: "02",
    title: "Software a Medida",
    description:
      "Herramientas diseñadas exclusivamente para tu flujo de trabajo. Cada pieza de software se construye desde cero para encajar con precisión en tu operación.",
    items: [
      "100% adaptado a tus procesos",
      "Integraciones con tu stack actual",
      "Entregado con documentación y soporte",
    ],
  },
  {
    icon: <BarChart2 className="w-7 h-7 text-pink-400" />,
    accent: "from-pink-600/20 to-pink-600/5",
    border: "border-pink-500/20 hover:border-pink-500/50",
    glow: "bg-pink-600/10",
    tag: "03",
    title: "Control Total",
    description:
      "Dashboards que celebran tus logros y guían tus siguientes pasos. Visualiza tus KPIs en tiempo real y toma decisiones con claridad y confianza.",
    items: [
      "KPIs estratégicos en tiempo real",
      "Visibilidad completa de tu operación",
      "Decisiones basadas en datos precisos",
    ],
  },
];

export default function Pillars() {
  return (
    <section id="pillars" className="py-24 border-t border-slate-800/50">
      <div className="max-w-7xl mx-auto px-6">

        <FadeIn className="text-center mb-14">
          <span className="inline-block text-xs font-semibold text-violet-400 bg-violet-500/10 border border-violet-500/20 rounded-full px-4 py-1.5 mb-4">
            Nuestras Capacidades
          </span>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            Tecnología que{" "}
            <span className="bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent">
              potencia tu visión
            </span>
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            Tres capacidades que transforman la forma en que tu empresa opera,
            crece y lidera su industria.
          </p>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-6">
          {capacidades.map(({ icon, accent, border, glow, tag, title, description, items }, i) => (
            <FadeIn key={title} delay={i * 0.12}>
              <div className={`relative bg-gradient-to-b ${accent} border ${border} rounded-2xl p-8 transition-all h-full group overflow-hidden`}>
                {/* Fondo glow */}
                <div className={`absolute -top-12 -right-12 w-40 h-40 rounded-full ${glow} blur-3xl opacity-60 group-hover:opacity-100 transition-opacity pointer-events-none`} />

                {/* Número */}
                <span className="text-slate-700 text-6xl font-black absolute top-4 right-6 leading-none select-none">
                  {tag}
                </span>

                {/* Icono */}
                <div className="w-14 h-14 rounded-2xl bg-slate-900/80 border border-slate-800/60 flex items-center justify-center mb-6 relative">
                  {icon}
                </div>

                <h3 className="text-white text-xl font-bold mb-3 relative">{title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-6 relative">{description}</p>

                <ul className="space-y-2.5 relative">
                  {items.map((item) => (
                    <li key={item} className="flex items-center gap-2.5 text-slate-300 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-violet-400 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
