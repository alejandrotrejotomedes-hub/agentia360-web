import { Bot, Code2, TrendingUp, X, Check } from "lucide-react";
import FadeIn from "@/components/ui/FadeIn";

interface Comparison {
  icon: React.ElementType;
  category: string;
  accent: string;
  versusLabel: string;
  versusPoints: string[];
  agentiaLabel: string;
  agentiaPoints: string[];
}

const comparisons: Comparison[] = [
  {
    icon: Bot,
    category: "Inteligencia Artificial",
    accent: "#8b5cf6",
    versusLabel: "Chatbots Básicos",
    versusPoints: [
      "Respuestas genéricas de FAQ predefinidas",
      "Sin contexto real de tu negocio",
      "No aprenden ni mejoran con el tiempo",
    ],
    agentiaLabel: "Agentes de IA Generativa",
    agentiaPoints: [
      "Conversaciones naturales y contextuales",
      "Entrenados con tu operación y catálogo",
      "Se optimizan continuamente con cada interacción",
    ],
  },
  {
    icon: Code2,
    category: "Desarrollo de Software",
    accent: "#6366f1",
    versusLabel: "Suscripciones Genéricas",
    versusPoints: [
      "Funciones que no necesitas (y pagas igual)",
      "Costos que escalan sin control mensual",
      "Sin adaptación a tu flujo de trabajo real",
    ],
    agentiaLabel: "Software a Medida",
    agentiaPoints: [
      "Diseñado exactamente para tu operación",
      "Inversión única — el código es 100% tuyo",
      "Se adapta y escala junto con tu empresa",
    ],
  },
  {
    icon: TrendingUp,
    category: "Generación de Impacto",
    accent: "#10b981",
    versusLabel: "Consultoría Teórica",
    versusPoints: [
      "Presentaciones y reportes, sin ejecución",
      "Recomendaciones sin garantías de resultado",
      "Facturas elevadas antes de ver un resultado",
    ],
    agentiaLabel: "Resultados Tangibles",
    agentiaPoints: [
      "Construimos y entregamos — no solo asesoramos",
      "ROI medible desde el primer mes de operación",
      "Primera versión funcional en 4 semanas",
    ],
  },
];

function ComparisonCard({ c, delay }: { c: Comparison; delay: number }) {
  const Icon = c.icon;
  return (
    <FadeIn delay={delay} direction="up">
      <div className="relative bg-slate-900/60 border border-slate-800/60 rounded-2xl overflow-hidden hover:border-slate-700/60 transition-colors h-full flex flex-col">

        {/* Header */}
        <div
          className="flex items-center gap-3 px-6 py-4 border-b border-slate-800/60"
          style={{ background: `${c.accent}0d` }}
        >
          <div
            className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
            style={{ background: `${c.accent}20`, border: `1px solid ${c.accent}35` }}
          >
            <Icon className="w-4.5 h-4.5" style={{ color: c.accent }} />
          </div>
          <span className="text-white text-sm font-semibold">{c.category}</span>
        </div>

        <div className="flex flex-col flex-1">
          {/* Alternativa Común */}
          <div className="px-6 pt-5 pb-4">
            <p className="text-[10px] font-bold uppercase tracking-widest text-rose-400/80 mb-3">
              ✗ &nbsp;Alternativa Común
            </p>
            <p className="text-slate-500 text-xs font-semibold mb-3">{c.versusLabel}</p>
            <ul className="space-y-2.5">
              {c.versusPoints.map((pt) => (
                <li key={pt} className="flex items-start gap-2">
                  <X className="w-3.5 h-3.5 text-rose-500/60 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-500 text-xs leading-snug">{pt}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Divider VS */}
          <div className="relative mx-6 my-1">
            <div className="h-px bg-slate-800" />
            <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-slate-900 px-2 text-[10px] font-black tracking-widest text-slate-600">
              VS
            </span>
          </div>

          {/* Con Agentia360 */}
          <div className="px-6 pt-4 pb-6 flex-1">
            <p
              className="text-[10px] font-bold uppercase tracking-widest mb-3"
              style={{ color: c.accent }}
            >
              ✓ &nbsp;Con Agentia360
            </p>
            <p className="text-xs font-semibold mb-3" style={{ color: `${c.accent}cc` }}>
              {c.agentiaLabel}
            </p>
            <ul className="space-y-2.5">
              {c.agentiaPoints.map((pt) => (
                <li key={pt} className="flex items-start gap-2">
                  <Check
                    className="w-3.5 h-3.5 flex-shrink-0 mt-0.5"
                    style={{ color: c.accent }}
                  />
                  <span className="text-slate-300 text-xs leading-snug">{pt}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </FadeIn>
  );
}

export default function WhyAgentia() {
  return (
    <section id="por-que" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-violet-950/10 to-transparent pointer-events-none" />
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-600/5 blur-[130px] rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6">

        <FadeIn className="text-center mb-14">
          <span className="inline-block text-xs font-semibold text-violet-400 bg-violet-500/10 border border-violet-500/20 rounded-full px-4 py-1.5 mb-4">
            La Diferencia
          </span>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            Por qué elegir{" "}
            <span className="bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent">
              Agentia360
            </span>
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            No todas las soluciones son iguales. Aquí está la diferencia entre
            tecnología genérica y una solución construida para tu negocio.
          </p>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-6">
          {comparisons.map((c, i) => (
            <ComparisonCard key={c.category} c={c} delay={i * 0.1} />
          ))}
        </div>

        {/* Bottom stamp */}
        <FadeIn delay={0.35} className="mt-14 text-center">
          <p className="text-slate-500 text-sm italic">
            "Yo también estoy construyendo mi negocio. Sé exactamente lo que sientes —{" "}
            <span className="text-slate-300 not-italic font-semibold">y por eso me importa que el tuyo funcione.</span>"
          </p>
        </FadeIn>

      </div>
    </section>
  );
}
