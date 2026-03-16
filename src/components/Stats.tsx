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
    end: 50, suffix: "+",
    label: "Empresas Automatizadas",
    description: "Negocios que ya operan con nuestras soluciones de IA en producción",
  },
  {
    end: 200, suffix: "h+",
    label: "Horas Ahorradas / Mes",
    description: "Promedio de tiempo operativo recuperado por cada cliente activo",
  },
  {
    end: 15, suffix: "+",
    label: "Integraciones Nativas",
    description: "Sistemas y plataformas conectados en nuestro ecosistema tecnológico",
  },
  {
    end: 98, suffix: "%",
    label: "Clientes que Renuevan",
    description: "De nuestros clientes amplían o renuevan su proyecto tras el primer entregable",
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
