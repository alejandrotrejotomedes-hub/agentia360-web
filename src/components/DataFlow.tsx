"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FileSpreadsheet, Database, Boxes, Bot } from "lucide-react";
import FadeIn from "@/components/ui/FadeIn";

type Phase = "idle" | "flowing" | "filled";
const sleep = (ms: number) => new Promise<void>((r) => setTimeout(r, ms));

/* ── Data ── */
const BARS   = [65, 82, 54, 90, 73, 48];
const LABELS = ["Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"];
const DONUT_PCT = 72;

const SOURCES = [
  { id: "sheets", label: "Google Sheets",     Icon: FileSpreadsheet, color: "#0F9D58" },
  { id: "sql",    label: "Servidor SQL",       Icon: Database,        color: "#4169E1" },
  { id: "cloud",  label: "+300 Integraciones", Icon: Boxes,           color: "#8b5cf6" },
] as const;

/*
  Layout math:
  Source cards: 3 × h-20 (80px) + 2 × gap-3 (12px) = 264px total
  Source Y centers: 40, 132, 224   |   Dashboard entry: x=160, y=132
*/
const PATHS = [
  "M 0 40  C 72 40  72 132 160 132",  // top → center
  "M 0 132 L 160 132",                // middle → straight
  "M 0 224 C 72 224 72 132 160 132",  // bottom → center
] as const;

/* ── Bar Chart ── */
function BarChart({ active }: { active: boolean }) {
  const H = 68, W = 20, GAP = 10;
  const totalW = BARS.length * (W + GAP) - GAP + 8;
  return (
    <svg viewBox={`0 0 ${totalW} ${H + 18}`} className="w-full">
      <line x1={4} y1={H} x2={totalW - 4} y2={H} stroke="#334155" strokeWidth={1} />
      {BARS.map((v, i) => {
        const bH = (v / 100) * H;
        const x = 4 + i * (W + GAP);
        return (
          <g key={i}>
            <rect x={x} y={0} width={W} height={H} fill="#0f172a" rx={3} />
            <motion.rect
              x={x} width={W} rx={3}
              fill={i === 3 ? "#10b981" : "#7c3aed"}
              initial={{ height: 0, y: H }}
              animate={active ? { height: bH, y: H - bH } : { height: 0, y: H }}
              transition={{ duration: 0.65, delay: 0.25 + i * 0.08, ease: "easeOut" }}
            />
            <text x={x + W / 2} y={H + 13} textAnchor="middle" fill="#475569" fontSize={8}>
              {LABELS[i]}
            </text>
          </g>
        );
      })}
    </svg>
  );
}

/* ── Donut Chart ── */
function DonutChart({ active }: { active: boolean }) {
  const r = 27, cx = 38, cy = 38, circ = 2 * Math.PI * r;
  const dash = circ * (1 - DONUT_PCT / 100);
  return (
    <div className="relative w-20 h-20 flex-shrink-0">
      <svg viewBox="0 0 76 76" className="w-full h-full -rotate-90">
        <circle cx={cx} cy={cy} r={r} fill="none" stroke="#1e293b" strokeWidth={10} />
        <motion.circle
          cx={cx} cy={cy} r={r} fill="none"
          stroke="#8b5cf6" strokeWidth={10} strokeLinecap="round"
          strokeDasharray={circ}
          initial={{ strokeDashoffset: circ }}
          animate={{ strokeDashoffset: active ? dash : circ }}
          transition={{ duration: 1.0, delay: 0.45, ease: "easeOut" }}
        />
        <motion.circle
          cx={cx} cy={cy} r={r} fill="none"
          stroke="#10b981" strokeWidth={10} strokeLinecap="round"
          strokeDasharray={`${circ * (1 - DONUT_PCT / 100)} ${circ}`}
          initial={{ strokeDashoffset: circ * (1 - DONUT_PCT / 100), opacity: 0 }}
          animate={{
            strokeDashoffset: active ? 0 : circ * (1 - DONUT_PCT / 100),
            opacity: active ? 1 : 0,
          }}
          transition={{ duration: 0.7, delay: 0.6, ease: "easeOut" }}
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.span
          className="text-white font-bold text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: active ? 1 : 0 }}
          transition={{ duration: 0.35, delay: 0.9 }}
        >
          {DONUT_PCT}%
        </motion.span>
      </div>
    </div>
  );
}

/* ── SVG Connecting Path ── */
function ConnPath({ d, active, i }: { d: string; active: boolean; i: number }) {
  const delay = i * 0.18;
  return (
    <g>
      {/* Track (always visible, dark) */}
      <path d={d} fill="none" stroke="#1e293b" strokeWidth={3} strokeLinecap="round" />

      {/* Animated glow line */}
      <motion.path
        d={d} fill="none" stroke="#10b981" strokeWidth={3} strokeLinecap="round"
        style={{ filter: "drop-shadow(0 0 5px #10b98170)" }}
        initial={{ pathLength: 0, opacity: 0 }}
        animate={active ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
        transition={{ duration: 1.1, delay, ease: "easeInOut" }}
      />

      {/* Moving data packets (dashed) */}
      <motion.path
        d={d} fill="none"
        stroke="#6ee7b7" strokeWidth={2}
        strokeDasharray="5 26" strokeLinecap="round"
        initial={{ strokeDashoffset: 260, opacity: 0 }}
        animate={
          active
            ? { strokeDashoffset: [260, 0], opacity: [0, 0.85, 0.85, 0] }
            : { strokeDashoffset: 260, opacity: 0 }
        }
        transition={{ duration: 1.1, delay: delay + 0.05, ease: "linear" }}
      />
    </g>
  );
}

/* ── Main Component ── */
export default function DataFlow() {
  const [phase, setPhase] = useState<Phase>("idle");

  useEffect(() => {
    let alive = true;
    async function loop() {
      if (!alive) return;
      await sleep(700);
      if (!alive) return; setPhase("flowing");
      await sleep(1700);
      if (!alive) return; setPhase("filled");
      await sleep(3200);
      if (!alive) return; setPhase("idle");
      await sleep(800);
      loop();
    }
    loop();
    return () => { alive = false; };
  }, []);

  const isActive = phase !== "idle";
  const isFilled = phase === "filled";

  return (
    <section id="dataflow" className="py-24 bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-6">

        <FadeIn className="text-center mb-16">
          <span className="inline-block text-xs font-semibold text-violet-400 bg-violet-500/10 border border-violet-500/20 rounded-full px-4 py-1.5 mb-4">
            Cómo Funciona
          </span>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            Tus datos entran,{" "}
            <span className="bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent">
              las decisiones salen
            </span>
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            Conectamos cualquier fuente de datos a tu operación y la convertimos
            en inteligencia accionable — en tiempo real.
          </p>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="flex items-center justify-center gap-0 max-w-3xl mx-auto">

            {/* ── Fuentes de datos ── */}
            <div className="flex flex-col gap-3 w-[168px] flex-shrink-0">
              {SOURCES.map(({ id, label, Icon, color }, i) => (
                <motion.div
                  key={id}
                  className="h-20 flex items-center gap-3 bg-slate-900/70 border rounded-xl px-3 relative overflow-hidden"
                  animate={{
                    borderColor: isActive ? `${color}55` : "#1e293b99",
                    boxShadow: isActive ? `0 0 14px ${color}18` : "none",
                  }}
                  transition={{ duration: 0.5, delay: i * 0.15 }}
                >
                  {/* subtle inner glow */}
                  <motion.div
                    className="absolute inset-0 pointer-events-none"
                    style={{ background: `radial-gradient(circle at 0% 50%, ${color}12, transparent 70%)` }}
                    animate={{ opacity: isActive ? 1 : 0 }}
                    transition={{ duration: 0.5 }}
                  />
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ background: `${color}18`, border: `1px solid ${color}35` }}
                  >
                    <Icon className="w-5 h-5" style={{ color }} />
                  </div>
                  <span className="text-slate-300 text-xs font-semibold leading-snug relative">{label}</span>
                  {/* connector dot */}
                  <div
                    className="absolute right-0 translate-x-1/2 w-2.5 h-2.5 rounded-full border-2 flex-shrink-0"
                    style={{
                      background: isActive ? color : "#1e293b",
                      borderColor: isActive ? color : "#334155",
                      transition: "background 0.4s, border-color 0.4s",
                      transitionDelay: `${i * 0.15}s`,
                    }}
                  />
                </motion.div>
              ))}
            </div>

            {/* ── SVG Paths ── */}
            <svg
              viewBox="0 0 160 264"
              width={160}
              height={264}
              className="flex-shrink-0"
              overflow="visible"
            >
              {PATHS.map((d, i) => (
                <ConnPath key={i} d={d} active={isActive} i={i} />
              ))}
              {/* Entry dot at dashboard side */}
              <motion.circle
                cx={160} cy={132} r={4}
                fill="#1e293b"
                stroke="#334155" strokeWidth={2}
                animate={isActive ? { fill: "#10b981", stroke: "#10b981" } : { fill: "#1e293b", stroke: "#334155" }}
                transition={{ duration: 0.4, delay: 0.5 }}
              />
            </svg>

            {/* ── Dashboard Mockup ── */}
            <motion.div
              className="flex-1 min-w-0 bg-slate-900/80 backdrop-blur-sm border rounded-2xl p-4 overflow-hidden relative"
              animate={{
                borderColor: isFilled ? "#7c3aed55" : "#1e293b99",
                boxShadow: isFilled ? "0 0 32px #7c3aed18" : "none",
              }}
              transition={{ duration: 0.5 }}
            >
              {/* Violet glow overlay */}
              <motion.div
                className="absolute inset-0 pointer-events-none rounded-2xl"
                style={{ background: "radial-gradient(ellipse at 80% 20%, #7c3aed10, transparent 60%)" }}
                animate={{ opacity: isFilled ? 1 : 0 }}
                transition={{ duration: 0.6 }}
              />

              {/* Window chrome */}
              <div className="flex items-center justify-between mb-3 pb-2.5 border-b border-slate-800/60 relative">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-md bg-violet-600/80 flex items-center justify-center">
                    <Bot className="w-3.5 h-3.5 text-white" />
                  </div>
                  <span className="text-white text-xs font-bold">
                    Agentia<span className="text-violet-400">360</span>
                  </span>
                </div>
                <div className="flex gap-1.5">
                  {(["#ef4444","#eab308","#22c55e"] as const).map((c) => (
                    <div key={c} className="w-2 h-2 rounded-full opacity-60" style={{ background: c }} />
                  ))}
                </div>
              </div>

              {/* KPI chips */}
              <div className="grid grid-cols-3 gap-2 mb-3 relative">
                {[
                  { label: "Ventas",  value: "$94k",  color: "#10b981" },
                  { label: "Leads",   value: "1,247", color: "#8b5cf6" },
                  { label: "Uptime",  value: "99.8%", color: "#0ea5e9" },
                ].map(({ label, value, color }, i) => (
                  <div key={label} className="bg-slate-800/70 rounded-lg px-2 py-2 text-center border border-slate-700/40">
                    <motion.p
                      className="font-bold text-xs leading-tight"
                      style={{ color }}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: isFilled ? 1 : 0 }}
                      transition={{ duration: 0.4, delay: 0.35 + i * 0.1 }}
                    >
                      {value}
                    </motion.p>
                    <p className="text-slate-500 text-[9px] mt-0.5">{label}</p>
                  </div>
                ))}
              </div>

              {/* Charts row */}
              <div className="flex gap-3 items-end relative">
                <div className="flex-1 min-w-0">
                  <p className="text-slate-500 text-[9px] mb-1.5 uppercase tracking-wider font-semibold">
                    Actividad semanal
                  </p>
                  <BarChart active={isFilled} />
                </div>
                <div className="flex flex-col items-center gap-1">
                  <p className="text-slate-500 text-[9px] uppercase tracking-wider font-semibold">
                    Éxito
                  </p>
                  <DonutChart active={isFilled} />
                </div>
              </div>
            </motion.div>

          </div>
        </FadeIn>

      </div>
    </section>
  );
}
