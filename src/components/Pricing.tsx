import { Check, Rocket, TrendingUp, Building2 } from "lucide-react";
import FadeIn from "@/components/ui/FadeIn";

interface Plan {
  icon: React.ReactNode;
  name: string;
  price: string;
  period: string;
  delivery: string;
  description: string;
  features: string[];
  cta: string;
  highlighted: boolean;
  badge?: string;
}

const plans: Plan[] = [
  {
    icon: <Rocket className="w-5 h-5 text-violet-400" />,
    name: "MVP Inicial",
    price: "$4,999",
    period: "USD / proyecto",
    delivery: "Entrega en 4 semanas",
    description: "Tu primer Agente de IA o herramienta digital funcional. Valida la solución antes de escalar.",
    features: [
      "1 caso de uso principal (IA o software)",
      "Hasta 2 integraciones externas",
      "Panel de administración básico",
      "Soporte técnico 30 días post-entrega",
      "Documentación de uso incluida",
    ],
    cta: "Empezar mi MVP",
    highlighted: false,
  },
  {
    icon: <TrendingUp className="w-5 h-5 text-white" />,
    name: "Crecimiento Pro",
    price: "$12,999",
    period: "USD / proyecto",
    delivery: "Entrega en 8 semanas",
    description: "Solución completa con múltiples flujos, integraciones y panel de control avanzado.",
    features: [
      "Hasta 5 casos de uso o módulos",
      "Integraciones ilimitadas",
      "Panel de administración completo",
      "Capacitación al equipo incluida",
      "Soporte técnico 3 meses",
      "Actualizaciones de mejora incluidas",
    ],
    cta: "Iniciar Proyecto Pro",
    highlighted: true,
    badge: "Más Elegido",
  },
  {
    icon: <Building2 className="w-5 h-5 text-slate-300" />,
    name: "Empresarial",
    price: "A medida",
    period: "según alcance",
    delivery: "Roadmap personalizado",
    description: "Transformación digital completa. Para empresas que quieren automatizar múltiples áreas.",
    features: [
      "Módulos y Agentes ilimitados",
      "Arquitectura escalable y segura",
      "Gerente de proyecto dedicado",
      "SLA de soporte garantizado",
      "Integración con sistemas legacy",
      "Capacitación continua al equipo",
    ],
    cta: "Agendar Consultoría",
    highlighted: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-violet-950/10 to-transparent pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6">
        <FadeIn className="text-center mb-14">
          <span className="inline-block text-xs font-semibold text-violet-400 bg-violet-500/10 border border-violet-500/20 rounded-full px-4 py-1.5 mb-4">
            Planes de Inversión
          </span>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            Elige el plan que{" "}
            <span className="bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent">
              acelera tu crecimiento
            </span>
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            Transparencia total. Pagas por el proyecto, recibes la solución
            y la ownás completamente — sin sorpresas, sin letra pequeña.
          </p>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-6 items-start">
          {plans.map((plan, i) => (
            <FadeIn key={plan.name} delay={i * 0.1} direction="up">
              <div className={`relative rounded-2xl p-8 border transition-all h-full ${
                plan.highlighted
                  ? "bg-gradient-to-b from-violet-600/20 to-indigo-600/10 border-violet-500/50 shadow-2xl shadow-violet-500/20"
                  : "bg-slate-900/60 border-slate-800/60 hover:border-slate-700/80"
              }`}>
                {plan.badge && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-xs font-bold bg-violet-600 text-white px-4 py-1 rounded-full shadow-lg shadow-violet-600/30 whitespace-nowrap">
                    {plan.badge}
                  </span>
                )}

                <div className="mb-6">
                  {/* Icono + nombre */}
                  <div className="flex items-center gap-2.5 mb-4">
                    <div className={`w-9 h-9 rounded-lg flex items-center justify-center ${plan.highlighted ? "bg-violet-600" : "bg-slate-800"}`}>
                      {plan.icon}
                    </div>
                    <h3 className={`text-sm font-semibold ${plan.highlighted ? "text-violet-300" : "text-slate-400"}`}>
                      {plan.name}
                    </h3>
                  </div>

                  {/* Precio */}
                  <div className="flex items-baseline gap-1 mb-0.5">
                    <span className="text-4xl font-extrabold text-white">{plan.price}</span>
                  </div>
                  <p className="text-slate-500 text-xs mb-1">{plan.period}</p>
                  <span className={`inline-block text-xs font-semibold px-2.5 py-1 rounded-full mb-4 ${
                    plan.highlighted ? "bg-violet-500/20 text-violet-300" : "bg-slate-800 text-slate-400"
                  }`}>
                    ⚡ {plan.delivery}
                  </span>

                  <div className={`h-px mb-4 ${plan.highlighted ? "bg-violet-500/30" : "bg-slate-800"}`} />
                  <p className="text-slate-400 text-sm leading-relaxed">{plan.description}</p>
                </div>

                <div className="space-y-3 mb-8">
                  <p className="text-white text-xs font-semibold uppercase tracking-wider mb-4">Qué incluye</p>
                  {plan.features.map((feature) => (
                    <div key={feature} className="flex items-start gap-2.5">
                      <Check className={`w-4 h-4 flex-shrink-0 mt-0.5 ${plan.highlighted ? "text-violet-400" : "text-violet-500"}`} />
                      <span className="text-slate-300 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <a href="#contact" className={`block w-full text-center font-semibold text-sm py-3 rounded-xl transition-all ${
                  plan.highlighted
                    ? "bg-white text-violet-700 hover:bg-slate-100 shadow-xl shadow-white/10"
                    : "border border-slate-700 text-violet-400 hover:border-violet-500/50 hover:bg-violet-500/5"
                }`}>
                  {plan.cta}
                </a>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.3} className="mt-14 flex flex-wrap justify-center gap-8">
          {[
            { icon: "🔒", label: "Código 100% tuyo al entregar" },
            { icon: "⚡", label: "Primera versión en 4 semanas" },
            { icon: "🤝", label: "Soporte post-entrega incluido" },
          ].map(({ icon, label }) => (
            <div key={label} className="flex items-center gap-2 text-slate-500 text-sm">
              <span>{icon}</span><span>{label}</span>
            </div>
          ))}
        </FadeIn>
      </div>
    </section>
  );
}
