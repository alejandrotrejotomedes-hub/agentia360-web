"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import FadeIn from "@/components/ui/FadeIn";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "¿Es muy caro implementar IA en mi empresa?",
    answer:
      "Nuestras soluciones están diseñadas para pagarse solas. Un Agente de IA que automatiza la atención al cliente puede reemplazar entre 200 y 400 horas de trabajo manual al mes. Con nuestros planes desde $4,999 USD, la mayoría de clientes recuperan la inversión en menos de 60 días.",
  },
  {
    question: "¿Cuánto tiempo toma ver resultados?",
    answer:
      "La mayoría de nuestras automatizaciones se implementan y entran en producción en menos de 2 semanas. Para proyectos más complejos con múltiples módulos, el primer entregable funcional está listo en 4 semanas. No esperarás meses para ver el impacto.",
  },
  {
    question: "¿Necesito conocimientos técnicos para usar las herramientas que desarrollan?",
    answer:
      "No. Diseñamos cada solución con paneles de administración intuitivos pensados para que cualquier persona del equipo pueda operarlos sin formación técnica. Además, incluimos capacitación y soporte post-entrega en todos nuestros planes.",
  },
  {
    question: "¿Qué pasa si la solución no funciona como esperamos?",
    answer:
      "Todos nuestros proyectos incluyen soporte técnico post-entrega (30 días en el plan MVP, 3 meses en Crecimiento Pro). Trabajamos con iteraciones cortas y demostraciones en vivo para asegurarnos de que lo que entregamos supera tus expectativas antes del cierre.",
  },
  {
    question: "¿El código y los datos son míos o dependo de ustedes?",
    answer:
      "El código es 100% tuyo al momento de la entrega. Te entregamos el repositorio completo, las credenciales y la documentación técnica. No creamos dependencias artificiales — si en el futuro quieres escalar con otro equipo, tienes todo lo necesario para hacerlo.",
  },
];

function FAQAccordionItem({ item, index }: { item: FAQItem; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <FadeIn delay={index * 0.07} direction="up">
      <div className="border border-slate-800/60 rounded-2xl overflow-hidden hover:border-slate-700/80 transition-colors">
        <button
          onClick={() => setOpen((v) => !v)}
          className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left group"
          aria-expanded={open}
        >
          <span className="text-white font-semibold text-sm sm:text-base leading-snug group-hover:text-violet-300 transition-colors">
            {item.question}
          </span>
          <motion.div
            animate={{ rotate: open ? 180 : 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="flex-shrink-0"
          >
            <ChevronDown className="w-5 h-5 text-slate-500 group-hover:text-violet-400 transition-colors" />
          </motion.div>
        </button>

        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              key="answer"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.28, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <p className="px-6 pb-5 text-slate-400 text-sm leading-relaxed border-t border-slate-800/60 pt-4">
                {item.answer}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </FadeIn>
  );
}

export default function FAQ() {
  return (
    <section id="faq" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-950/10 to-transparent pointer-events-none" />

      <div className="relative max-w-3xl mx-auto px-6">
        <FadeIn className="text-center mb-14">
          <span className="inline-block text-xs font-semibold text-violet-400 bg-violet-500/10 border border-violet-500/20 rounded-full px-4 py-1.5 mb-4">
            Preguntas Frecuentes
          </span>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            Resolvemos tus{" "}
            <span className="bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent">
              dudas más comunes
            </span>
          </h2>
          <p className="text-slate-400 text-lg">
            Si tienes una pregunta que no aparece aquí, escríbenos directamente.
          </p>
        </FadeIn>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <FAQAccordionItem key={faq.question} item={faq} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
