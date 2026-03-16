import { Search, Code2, Zap, ArrowRight } from "lucide-react";
import FadeIn from "@/components/ui/FadeIn";

const steps = [
  {
    number: "01",
    Icon: Search,
    color: "#8b5cf6",
    border: "border-violet-500/30",
    bg: "bg-violet-600/10",
    title: "Diagnóstico",
    description:
      "En 30 minutos analizamos tu operación y diseñamos juntos la hoja de ruta exacta para maximizar tu retorno desde el primer día.",
    detail: "Sin costo · Sin compromiso · Con claridad total",
  },
  {
    number: "02",
    Icon: Code2,
    color: "#6366f1",
    border: "border-indigo-500/30",
    bg: "bg-indigo-600/10",
    title: "Desarrollo",
    description:
      "En 4 semanas entregamos tu primera versión funcional — construida a medida, con sprints semanales y resultados visibles en tiempo real.",
    detail: "Iteraciones rápidas · Feedback continuo · Entrega garantizada",
  },
  {
    number: "03",
    Icon: Zap,
    color: "#10b981",
    border: "border-emerald-500/30",
    bg: "bg-emerald-600/10",
    title: "Automatización",
    description:
      "Tu negocio opera en piloto automático. Monitoreamos, optimizamos y escalamos las soluciones junto a ti a medida que creces.",
    detail: "Soporte incluido · Mejoras continuas · Escalabilidad garantizada",
  },
];

export default function Process() {
  return (
    <section id="process" className="py-24">
      <div className="max-w-7xl mx-auto px-6">

        <FadeIn className="text-center mb-16">
          <span className="inline-block text-xs font-semibold text-violet-400 bg-violet-500/10 border border-violet-500/20 rounded-full px-4 py-1.5 mb-4">
            Cómo Trabajamos
          </span>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            De cero a producción{" "}
            <span className="bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent">
              en 3 pasos
            </span>
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            Un proceso diseñado para que veas resultados rápido y sin fricción.
            Sin burocracia, sin sorpresas — solo ejecución.
          </p>
        </FadeIn>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line — desktop only */}
          <div className="hidden lg:block absolute top-[3.25rem] left-[calc(16.66%+2rem)] right-[calc(16.66%+2rem)] h-px bg-gradient-to-r from-violet-500/30 via-indigo-500/30 to-emerald-500/30" />

          <div className="grid md:grid-cols-3 gap-6 lg:gap-10">
            {steps.map(({ number, Icon, color, border, bg, title, description, detail }, i) => (
              <FadeIn key={title} delay={i * 0.15} direction="up">
                <div className={`relative bg-slate-900/60 border ${border} rounded-2xl p-7 h-full group hover:bg-slate-900/80 transition-all overflow-hidden`}>
                  {/* Glow */}
                  <div
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{ background: `radial-gradient(circle at 30% 0%, ${color}12 0%, transparent 65%)` }}
                  />

                  {/* Step number + icon */}
                  <div className="flex items-center gap-3 mb-5">
                    <div
                      className={`w-12 h-12 rounded-xl ${bg} border ${border} flex items-center justify-center flex-shrink-0`}
                    >
                      <Icon className="w-5 h-5" style={{ color }} />
                    </div>
                    <span className="text-4xl font-black text-slate-800 leading-none select-none">
                      {number}
                    </span>
                  </div>

                  <h3 className="text-white text-xl font-bold mb-3">{title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-4">{description}</p>

                  {/* Detail pill */}
                  <div className="flex flex-wrap gap-1.5">
                    {detail.split(" · ").map((d) => (
                      <span
                        key={d}
                        className="text-[10px] font-semibold px-2.5 py-1 rounded-full border"
                        style={{ color, borderColor: `${color}35`, background: `${color}10` }}
                      >
                        {d}
                      </span>
                    ))}
                  </div>

                  {/* Arrow connector — visible on md/lg only between steps */}
                  {i < steps.length - 1 && (
                    <ArrowRight
                      className="hidden lg:block absolute -right-5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-700 z-10"
                    />
                  )}
                </div>
              </FadeIn>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <FadeIn delay={0.4} className="text-center mt-12">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-violet-400 hover:text-violet-300 text-sm font-semibold transition-colors"
          >
            Empezar con el Diagnóstico gratuito
            <ArrowRight className="w-4 h-4" />
          </a>
        </FadeIn>

      </div>
    </section>
  );
}
