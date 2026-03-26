import { Check, Globe, Workflow, LayoutDashboard } from "lucide-react";
import FadeIn from "@/components/ui/FadeIn";

interface Plan {
  icon: React.ReactNode;
  name: string;
  initialPrice: string;
  monthlyPrice: string;
  description: string;
  features: string[];
  cta: string;
  ctaLink: string;
  highlighted: boolean;
  badge?: string;
  accent: string;
}

const plans: Plan[] = [
  {
    icon: <Globe className="w-5 h-5" style={{ color: "#0ea5e9" }} />,
    name: "Sitio Web",
    initialPrice: "desde $3,500",
    monthlyPrice: "$700/mes",
    description: "Presencia online profesional para tu negocio. Diseño personalizado, correos corporativos y soporte incluido.",
    features: [
      "Diseño personalizado (no templates)",
      "Adaptado a celular y computadora",
      "Correos corporativos (tú@tunegocio.com)",
      "Formulario de contacto + Google Maps",
      "Hosting, dominio y respaldos activos",
      "Soporte por WhatsApp en horario laboral",
    ],
    cta: "Quiero mi sitio web",
    ctaLink: "#contacto",
    highlighted: false,
    accent: "#0ea5e9",
  },
  {
    icon: <Workflow className="w-5 h-5 text-white" />,
    name: "Automatización",
    initialPrice: "desde $6,000",
    monthlyPrice: "$1,200/mes",
    description: "Conecta tus procesos. Captura leads, envía seguimientos y genera reportes sin intervención manual.",
    features: [
      "Flujo automatizado a la medida",
      "Integración con WhatsApp, CRM o email",
      "Notificaciones y alertas en tiempo real",
      "Dashboard de seguimiento incluido",
      "Capacitación al equipo (1 sesión)",
      "Monitoreo y mantenimiento del flujo",
    ],
    cta: "Automatizar mi negocio",
    ctaLink: "#contacto",
    highlighted: true,
    badge: "Más solicitado",
    accent: "#8b5cf6",
  },
  {
    icon: <LayoutDashboard className="w-5 h-5" style={{ color: "#10b981" }} />,
    name: "App Web",
    initialPrice: "desde $15,000",
    monthlyPrice: "$1,500/mes",
    description: "Sistema a la medida para organizar clientes, inventario, agenda o cualquier proceso de tu negocio.",
    features: [
      "Sistema con login y roles de usuario",
      "Dashboard con métricas de tu negocio",
      "Base de datos en la nube segura",
      "Exportación de reportes a PDF/Excel",
      "Actualizaciones y mejoras mensuales",
      "Soporte prioritario incluido",
    ],
    cta: "Cotizar mi app",
    ctaLink: "#contacto",
    highlighted: false,
    accent: "#10b981",
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-violet-950/10 to-transparent pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6">
        <FadeIn className="text-center mb-14">
          <span className="inline-block text-xs font-semibold text-violet-400 bg-violet-500/10 border border-violet-500/20 rounded-full px-4 py-1.5 mb-4">
            Precios
          </span>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            Sin sorpresas.{" "}
            <span className="bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent">
              Sin letra pequeña.
            </span>
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            Pago inicial para construir tu proyecto + mensualidad para mantenerlo activo.
            Tu negocio siempre funcionando.
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
                  <div className="flex items-center gap-2.5 mb-5">
                    <div className={`w-9 h-9 rounded-lg flex items-center justify-center ${plan.highlighted ? "bg-violet-600" : "bg-slate-800"}`}>
                      {plan.icon}
                    </div>
                    <h3 className={`text-sm font-semibold ${plan.highlighted ? "text-violet-300" : "text-slate-400"}`}>
                      {plan.name}
                    </h3>
                  </div>

                  {/* Precios */}
                  <div className="mb-4">
                    <div className="flex items-baseline gap-2 mb-1">
                      <span className="text-3xl font-extrabold text-white">{plan.initialPrice}</span>
                    </div>
                    <p className="text-slate-500 text-xs mb-2">pago inicial único</p>
                    <div
                      className="inline-flex items-center gap-1.5 text-sm font-semibold px-3 py-1.5 rounded-lg"
                      style={{ background: `${plan.accent}15`, color: plan.accent, border: `1px solid ${plan.accent}30` }}
                    >
                      <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: plan.accent }} />
                      {plan.monthlyPrice} mantenimiento
                    </div>
                  </div>

                  <div className={`h-px mb-4 ${plan.highlighted ? "bg-violet-500/30" : "bg-slate-800"}`} />
                  <p className="text-slate-400 text-sm leading-relaxed">{plan.description}</p>
                </div>

                <div className="space-y-3 mb-8">
                  <p className="text-white text-xs font-semibold uppercase tracking-wider mb-4">Qué incluye</p>
                  {plan.features.map((feature) => (
                    <div key={feature} className="flex items-start gap-2.5">
                      <Check className="w-4 h-4 flex-shrink-0 mt-0.5 text-violet-400" />
                      <span className="text-slate-300 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <a href={plan.ctaLink} className={`block w-full text-center font-semibold text-sm py-3 rounded-xl transition-all ${
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
            { icon: "🔒", label: "El proyecto es 100% tuyo" },
            { icon: "📱", label: "Correos corporativos incluidos" },
            { icon: "🤝", label: "Soporte por WhatsApp incluido" },
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
