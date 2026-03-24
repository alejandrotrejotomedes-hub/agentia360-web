import { ArrowRight, MessageCircle, Bot } from "lucide-react";
import FadeIn from "@/components/ui/FadeIn";

const footerLinks: Record<string, string[]> = {
  Servicios:  ["Agentes de IA", "Software a Medida", "Automatización", "Integraciones"],
  Empresa:    ["Nosotros", "Portafolio", "Blog Técnico", "Carreras"],
  Legal:      ["Política de Privacidad", "Términos de Servicio", "Política de Cookies"],
  Soporte:    ["Centro de Ayuda", "Contacto", "Estado del Sistema", "Documentación"],
};

const socialIcons = [
  {
    label: "X / Twitter",
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "GitHub",
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <>
      {/* ── Banner CTA ── */}
      <section id="contact" className="py-20 border-y border-slate-800/50 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-violet-950/30 via-transparent to-indigo-950/30 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-violet-600/8 blur-[100px] rounded-full pointer-events-none" />

        <FadeIn className="relative max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            Tu consultoría inicial{" "}
            <span className="bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent">
              va por nuestra cuenta.
            </span>
          </h2>
          <p className="text-slate-400 text-lg mb-8 max-w-xl mx-auto">
            Agenda una llamada de 30 minutos sin costo. Analizamos tu operación,
            identificamos tu mayor oportunidad de automatización y te entregamos
            un plan de acción concreto — con precisión y números reales.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:alejandro@agentia-360.com?subject=Quiero%20agendar%20una%20llamada%20con%20Agentia360"
              className="inline-flex items-center justify-center gap-2 bg-violet-600 hover:bg-violet-500 text-white font-semibold px-8 py-4 rounded-xl transition-all shadow-2xl shadow-violet-500/20 hover:shadow-violet-500/40 hover:-translate-y-0.5"
            >
              <MessageCircle className="w-4 h-4" />
              Escribirnos por Email
            </a>
            <a
              href="#pricing"
              className="inline-flex items-center justify-center gap-2 border border-slate-700 hover:border-slate-600 text-slate-300 hover:text-white font-medium px-8 py-4 rounded-xl transition-all hover:bg-white/5"
            >
              Ver Planes
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </FadeIn>
      </section>

      {/* ── Footer ── */}
      <footer className="py-16 border-t border-slate-800/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-10 mb-12">

            {/* Marca */}
            <div className="col-span-2 lg:col-span-1">
              <a href="/" className="flex items-center gap-2.5 mb-4">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center">
                  <Bot className="w-4 h-4 text-white" />
                </div>
                <span className="text-white font-bold">
                  Agentia<span className="text-violet-400">360</span>
                </span>
              </a>
              <p className="text-slate-500 text-sm leading-relaxed mb-1">
                Software house especializado en IA y automatización
                para empresas en crecimiento de Latinoamérica.
              </p>
              <p className="text-slate-600 text-xs italic leading-relaxed mb-4">
                No solo imaginamos el futuro de tu empresa, lo construimos.
              </p>
              <div className="flex gap-2">
                {socialIcons.map(({ icon, label }) => (
                  <a key={label} href="#" aria-label={label}
                    className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-slate-700 flex items-center justify-center text-slate-500 hover:text-white transition-all">
                    {icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Grupos de enlaces */}
            {Object.entries(footerLinks).map(([group, links]) => (
              <div key={group}>
                <p className="text-white text-sm font-semibold mb-4">{group}</p>
                <ul className="space-y-2.5">
                  {links.map((link) => (
                    <li key={link}>
                      <a href="#" className="text-slate-500 hover:text-slate-300 text-sm transition-colors">{link}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Barra inferior */}
          <div className="pt-8 border-t border-slate-800/50 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-slate-600 text-sm">
              © {new Date().getFullYear()} Agentia360. Todos los derechos reservados.
            </p>
            <p className="text-slate-700 text-xs">
              Desarrollado con Next.js · Tailwind CSS · OpenAI · Anthropic Claude
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
