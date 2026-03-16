import FadeIn from "@/components/ui/FadeIn";

const logos = [
  "DotCells", "EchoPark", "GoldTurtle", "BlueDiamond",
  "BlueMount", "BlueEnergy", "CleanEnergy", "ColorMovie",
  "Chekpo",   "CoPower",
];

export default function Partners() {
  return (
    <section className="py-16 border-y border-slate-800/50 overflow-hidden">
      <FadeIn className="max-w-7xl mx-auto px-6 mb-8">
        <p className="text-center text-slate-500 text-sm font-medium">
          Más de{" "}
          <span className="text-slate-300 font-semibold">4,000 empresas</span>{" "}
          impulsan su crecimiento con decisiones basadas en datos
        </p>
      </FadeIn>

      <div className="relative">
        <div className="flex animate-marquee" style={{ width: "max-content" }}>
          {[...logos, ...logos].map((name, i) => (
            <div
              key={i}
              className="flex-shrink-0 flex items-center justify-center px-10 h-12"
            >
              <span className="text-slate-600 hover:text-slate-400 font-semibold text-sm tracking-widest uppercase transition-colors whitespace-nowrap">
                {name}
              </span>
            </div>
          ))}
        </div>
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-slate-950 to-transparent pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-slate-950 to-transparent pointer-events-none" />
      </div>
    </section>
  );
}
