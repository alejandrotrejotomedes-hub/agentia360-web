import { TrendingUp, Zap, Clock, Shield } from "lucide-react";
import FadeIn from "@/components/ui/FadeIn";

const pillars = [
  {
    icon: TrendingUp,
    color: "#10b981",
    value: "ROI Mes 1",
    label: "Retorno desde el primer mes de operación",
  },
  {
    icon: Zap,
    color: "#8b5cf6",
    value: "4 semanas",
    label: "Primera versión funcional en producción",
  },
  {
    icon: Clock,
    color: "#0ea5e9",
    value: "200 h/mes",
    label: "Horas promedio recuperadas por cliente",
  },
  {
    icon: Shield,
    color: "#f59e0b",
    value: "Código tuyo",
    label: "Propiedad 100% del cliente al entregar",
  },
];

export default function TrustBanner() {
  return (
    <section className="py-20 relative overflow-hidden border-y border-violet-500/10">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-violet-950/30 via-slate-950/0 to-indigo-950/30 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[200px] bg-violet-600/6 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Headline */}
        <FadeIn className="text-center mb-12">
          <p className="text-xs font-semibold text-violet-400 tracking-widest uppercase mb-4">
            Nuestra Promesa
          </p>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-white tracking-tight mb-4">
            Tecnología que{" "}
            <span className="bg-gradient-to-r from-emerald-400 to-violet-400 bg-clip-text text-transparent">
              se paga sola.
            </span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Construimos software diseñado para incrementar tu rentabilidad desde el
            primer día. Cada solución entregada genera retorno medible — no en meses,
            en semanas.
          </p>
        </FadeIn>

        {/* ROI Pillars */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {pillars.map(({ icon: Icon, color, value, label }, i) => (
            <FadeIn key={value} delay={i * 0.08}>
              <div className="group relative bg-slate-900/60 border border-slate-800/60 rounded-2xl p-5 text-center hover:border-slate-700/80 transition-all overflow-hidden">
                {/* Hover glow */}
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{ background: `radial-gradient(circle at 50% 0%, ${color}14 0%, transparent 65%)` }}
                />
                {/* Icon */}
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mx-auto mb-3"
                  style={{ background: `${color}18`, border: `1px solid ${color}30` }}
                >
                  <Icon className="w-5 h-5" style={{ color }} />
                </div>
                {/* Value */}
                <p className="text-white font-extrabold text-xl mb-1" style={{ color }}>
                  {value}
                </p>
                {/* Label */}
                <p className="text-slate-500 text-xs leading-relaxed">{label}</p>
              </div>
            </FadeIn>
          ))}
        </div>

      </div>
    </section>
  );
}
