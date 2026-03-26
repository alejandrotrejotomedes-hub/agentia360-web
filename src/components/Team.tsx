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
    name: "Alejandro",
    role: "Fundador",
    bio: "Emprendedor mexicano construyendo AGENTIA360 desde cero. Trabajo de día, construyo de noche. Antes intenté NodoAnalítico — aprendí más de ese fracaso que de cualquier curso. Hoy uso IA, n8n y desarrollo web para hacer lo que antes parecía imposible sin un equipo enorme.",
    photo: "/team/alejandro.jpg",
    initials: "AT",
    accent: "#f59e0b",
    tags: ["Web", "IA", "Automatización", "n8n"],
  },
];

function Avatar({ member }: { member: TeamMember }) {
  return (
    <div
      className="w-20 h-20 rounded-2xl flex items-center justify-center text-2xl font-bold mx-auto mb-5"
      style={{ background: `${member.accent}18`, color: member.accent, border: `1.5px solid ${member.accent}35` }}
    >
      {member.initials}
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
            La persona{" "}
            <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
              detrás del código
            </span>
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            No hay equipo de 50 personas ni oficina en Reforma. Hay un emprendedor
            que construye soluciones reales y trata a cada cliente como si fuera su único cliente.
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

              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
