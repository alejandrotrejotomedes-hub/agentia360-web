import { Star } from "lucide-react";
import FadeIn from "@/components/ui/FadeIn";

interface Testimonial {
  quote: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    quote:
      "DataDash transformó completamente la manera en que gestionamos nuestras finanzas. Los Dashboards nos dan visibilidad que antes no teníamos y mejoraron nuestra eficiencia operativa en un 40%. Los recomiendo ampliamente.",
    name: "Kathryn Murphy",
    role: "COO",
    company: "BlueMount Agency",
    avatar: "KM",
  },
  {
    quote:
      "Pasamos del caos de las hojas de cálculo a una única fuente de verdad en menos de 48 horas. Solo el Dashboard de comercio electrónico nos ahorra más de 10 horas de reportes manuales cada semana.",
    name: "James Richardson",
    role: "Director de Crecimiento",
    company: "DotCells Inc",
    avatar: "JR",
  },
  {
    quote:
      "Como agencia, poder entregar Dashboards con marca blanca a nuestros clientes en cuestión de días es un cambio de juego. El retorno de inversión con DataDash es evidente desde el primer mes.",
    name: "Sofía Martínez",
    role: "Fundadora",
    company: "GoldTurtle Studio",
    avatar: "SM",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-slate-950/50">
      <div className="max-w-7xl mx-auto px-6">

        <FadeIn className="text-center mb-14">
          <span className="inline-block text-xs font-semibold text-violet-400 bg-violet-500/10 border border-violet-500/20 rounded-full px-4 py-1.5 mb-4">
            Testimonios
          </span>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Lo que dicen nuestros clientes
          </h2>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map(({ quote, name, role, company, avatar }, i) => (
            <FadeIn key={name} delay={i * 0.12}>
              <div className="bg-slate-900/60 border border-slate-800/60 rounded-2xl p-7 hover:border-slate-700/80 hover:bg-slate-900/80 transition-all h-full flex flex-col">
                {/* Estrellas */}
                <div className="flex gap-0.5 mb-5">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star key={j} className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                  ))}
                </div>

                {/* Cita */}
                <blockquote className="text-slate-300 text-sm leading-relaxed mb-6 flex-1">
                  &ldquo;{quote}&rdquo;
                </blockquote>

                {/* Autor */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-violet-600 to-indigo-600 flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                    {avatar}
                  </div>
                  <div>
                    <p className="text-white text-sm font-semibold">{name}</p>
                    <p className="text-slate-500 text-xs">{role} · {company}</p>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
