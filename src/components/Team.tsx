import Image from "next/image";
import FadeIn from "@/components/ui/FadeIn";

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  photo: string;
  initials: string;
  accent: string;
  linkedin?: string;
  tags: string[];
}

const team: TeamMember[] = [
  {
    name: "Alejandro Ramírez",
    role: "CEO & Fundador",
    bio: "10+ años liderando equipos de tecnología en LATAM. Ex-consultor en transformación digital para empresas del sector retail y logística. Apasionado por convertir procesos manuales en sistemas inteligentes.",
    photo: "/team/alejandro.jpg",
    initials: "AR",
    accent: "#8b5cf6",
    linkedin: "https://linkedin.com",
    tags: ["Estrategia", "IA", "Negocios"],
  },
  {
    name: "Daniela Torres",
    role: "CTO & Lead Engineer",
    bio: "Ingeniera de software con experiencia en arquitecturas cloud-native, LLMs y automatización de procesos. Ha construido sistemas en producción para más de 30 empresas usando Python, Node.js y OpenAI.",
    photo: "/team/daniela.jpg",
    initials: "DT",
    accent: "#6366f1",
    linkedin: "https://linkedin.com",
    tags: ["Backend", "LLMs", "Cloud"],
  },
  {
    name: "Carlos Mendoza",
    role: "Head of Product & UX",
    bio: "Diseñador de producto con 8 años de experiencia. Especialista en interfaces complejas que se sienten simples. Cree que la mejor tecnología es aquella que el usuario ni nota que existe.",
    photo: "/team/carlos.jpg",
    initials: "CM",
    accent: "#ec4899",
    linkedin: "https://linkedin.com",
    tags: ["UX/UI", "Producto", "Diseño"],
  },
];

function Avatar({ member }: { member: TeamMember }) {
  return (
    <div className="relative w-24 h-24 mx-auto mb-5">
      <div
        className="w-24 h-24 rounded-2xl overflow-hidden ring-2 ring-white/[0.06]"
        style={{ background: `${member.accent}22` }}
      >
        <Image
          src={member.photo}
          alt={member.name}
          width={96}
          height={96}
          className="w-full h-full object-cover"
          onError={undefined}
          unoptimized
        />
      </div>
      {/* Fallback visible via CSS if image fails */}
      <div
        className="absolute inset-0 rounded-2xl flex items-center justify-center text-xl font-bold pointer-events-none select-none [img+&]:hidden"
        style={{ color: member.accent }}
      >
        {member.initials}
      </div>
    </div>
  );
}

export default function Team() {
  return (
    <section id="team" className="py-24">
      <div className="max-w-7xl mx-auto px-6">

        <FadeIn className="text-center mb-14">
          <span className="inline-block text-xs font-semibold text-violet-400 bg-violet-500/10 border border-violet-500/20 rounded-full px-4 py-1.5 mb-4">
            El Equipo
          </span>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            Conoce a las personas{" "}
            <span className="bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent">
              detrás del código
            </span>
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            Un equipo pequeño y de alto impacto. Cada proyecto lo manejamos de
            principio a fin — sin intermediarios, sin tercerizar la visión.
          </p>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-6">
          {team.map((member, i) => (
            <FadeIn key={member.name} delay={i * 0.1} direction="up">
              <div className="group relative bg-slate-900/60 border border-slate-800/60 rounded-2xl p-7 text-center hover:border-slate-700/80 transition-all overflow-hidden h-full">
                {/* Glow on hover */}
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{ background: `radial-gradient(circle at 50% 0%, ${member.accent}14 0%, transparent 65%)` }}
                />

                {/* Photo / Avatar */}
                <Avatar member={member} />

                {/* Name & Role */}
                <h3 className="text-white font-bold text-lg leading-tight mb-0.5">{member.name}</h3>
                <p className="text-xs font-semibold mb-4" style={{ color: member.accent }}>{member.role}</p>

                {/* Bio */}
                <p className="text-slate-400 text-sm leading-relaxed mb-5">{member.bio}</p>

                {/* Tags */}
                <div className="flex flex-wrap justify-center gap-2 mb-5">
                  {member.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] font-semibold px-2.5 py-1 rounded-full border"
                      style={{ color: member.accent, borderColor: `${member.accent}40`, background: `${member.accent}12` }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* LinkedIn */}
                {member.linkedin && (
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-slate-500 hover:text-white text-xs transition-colors"
                  >
                    <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                    Ver perfil
                  </a>
                )}
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
