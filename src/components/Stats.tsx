"use client";

import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";
import FadeIn from "@/components/ui/FadeIn";

interface Stat {
  prefix?: string;
  end: number;
  decimals?: number;
  suffix: string;
  label: string;
  description: string;
}

const stats: Stat[] = [
  {
    end: 4, suffix: " sem",
    label: "Tiempo de Entrega",
    description: "De la idea al producto en producción. Sin burocracia, sin procesos lentos.",
  },
  {
    end: 20, suffix: "+",
    label: "Herramientas de IA",
    description: "Stack tecnológico verificado y en producción: Claude, n8n, Supabase, Vercel y más.",
  },
  {
    end: 0, suffix: " costo inicial",
    label: "Infraestructura",
    description: "Los MVPs corren en infraestructura gratuita. El cliente solo paga cuando crece.",
  },
  {
    end: 3, suffix: " soluciones",
    label: "Líneas de Producto",
    description: "Páginas web, SaaS a medida y automatizaciones n8n. Todo en un solo equipo.",
  },
];

function AnimatedStat({ stat }: { stat: Stat }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 });

  return (
    <div
      ref={ref}
      className="relative bg-slate-900/50 border border-slate-800/60 rounded-2xl p-6 text-center group hover:border-violet-500/30 transition-all hover:bg-slate-900/80"
    >
      <div className="absolute inset-0 rounded-2xl bg-violet-600/5 opacity-0 group-hover:opacity-100 transition-opacity" />
      <p className="text-4xl font-extrabold bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent mb-1">
        {inView ? (
          <CountUp
            start={0}
            end={stat.end}
            duration={2.2}
            decimals={stat.decimals ?? 0}
            prefix={stat.prefix ?? ""}
            suffix={stat.suffix}
            useEasing
          />
        ) : (
          <span>{stat.prefix ?? ""}0{stat.suffix}</span>
        )}
      </p>
      <p className="text-white font-semibold text-sm mb-2">{stat.label}</p>
      <p className="text-slate-500 text-xs leading-relaxed">{stat.description}</p>
    </div>
  );
}

export default function Stats() {
  return (
    <section id="results" className="py-20">
      <div className="max-w-7xl mx-auto px-6">

        <FadeIn className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            Resultados que hablan{" "}
            <span className="bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent">
              por sí solos
            </span>
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            Impacto real y medible. Los números de los proyectos que hemos
            entregado a empresas en toda Latinoamérica hablan por sí solos.
          </p>
        </FadeIn>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <FadeIn key={stat.label} delay={i * 0.1}>
              <AnimatedStat stat={stat} />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
