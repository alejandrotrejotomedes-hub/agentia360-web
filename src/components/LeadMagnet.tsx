"use client";

import { useState, useEffect } from "react";
import {
  BookOpen,
  CheckCircle2,
  ArrowRight,
  MessageCircle,
  Home,
  Sparkles,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import FadeIn from "@/components/ui/FadeIn";

type Status = "idle" | "submitting" | "success" | "error";

/*
  FORMSPREE: reemplaza "YOUR_FORM_ID" con tu ID real de formspree.io
  Ejemplo: https://formspree.io/f/xrgvkopw
*/
const FORMSPREE_ENDPOINT = "https://formspree.io/f/YOUR_FORM_ID";

const WHATSAPP_URL =
  "https://wa.me/521234567890?text=Hola%2C%20quiero%20recibir%20la%20gu%C3%ADa%20gratuita%20de%20automatizaci%C3%B3n";

const guidePoints = [
  "Atención al cliente automatizada con Agentes de IA",
  "Seguimiento de ventas sin intervención manual",
  "Gestión de inventario y pedidos en tiempo real",
  "Facturación y cobros automáticos integrados",
  "Reportes ejecutivos generados sin esfuerzo",
];

const SUBMITTING_MSGS = [
  "Analizando perfil...",
  "Generando acceso...",
  "Preparando tu guía...",
];

/* ── Helpers de validación ── */
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_RE = /^[+\d][\d\s\-().]{6,}$/;

function validateField(key: "name" | "company" | "contact", value: string): boolean {
  const v = value.trim();
  if (key === "name" || key === "company") return v.length >= 2;
  return EMAIL_RE.test(v) || PHONE_RE.test(v);
}

/* ── Avatars de prueba social ── */
const AVATAR_COLORS = ["#8b5cf6", "#6366f1", "#10b981", "#0ea5e9", "#f59e0b"];
function SocialProof() {
  return (
    <div className="flex items-center gap-3">
      <div className="flex -space-x-2">
        {AVATAR_COLORS.map((c, i) => (
          <div
            key={i}
            className="w-7 h-7 rounded-full border-2 border-slate-900 flex items-center justify-center text-[9px] font-bold text-white flex-shrink-0"
            style={{ background: c }}
          >
            {String.fromCharCode(65 + i)}
          </div>
        ))}
      </div>
      <p className="text-slate-400 text-xs leading-snug">
        Únete a otros{" "}
        <span className="text-white font-semibold">dueños y CEOs</span>{" "}
        que ya están automatizando su negocio
      </p>
    </div>
  );
}

/* ── Campo de formulario con validación visual ── */
interface FieldProps {
  id: string;
  name: string;
  type?: string;
  placeholder: string;
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: () => void;
  valid: boolean;
  touched: boolean;
  disabled?: boolean;
}

function FormField({
  id,
  name,
  type = "text",
  placeholder,
  label,
  value,
  onChange,
  onBlur,
  valid,
  touched,
  disabled,
}: FieldProps) {
  const showValid = valid && touched;

  const borderClass = showValid
    ? "border-emerald-500/60 focus:border-emerald-500/70 focus:ring-1 focus:ring-emerald-500/25"
    : "border-slate-700/60 focus:border-violet-500/60 focus:ring-1 focus:ring-violet-500/30";

  return (
    <div>
      <label
        htmlFor={id}
        className="block text-slate-400 text-xs font-semibold mb-1.5 uppercase tracking-wide"
      >
        {label}
      </label>
      <div className="relative">
        <input
          id={id}
          name={name}
          type={type}
          required
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          disabled={disabled}
          className={`w-full bg-slate-800/60 border ${borderClass} rounded-xl px-4 py-3 text-white text-sm placeholder-slate-600 outline-none transition-all duration-200 disabled:opacity-50 ${showValid ? "pr-10" : ""}`}
        />

        {/* Checkmark de validación */}
        <AnimatePresence>
          {showValid && (
            <motion.span
              key="check"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
              className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none"
            >
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            </motion.span>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

/* ── Componente principal ── */
export default function LeadMagnet() {
  const [form, setForm] = useState({ name: "", company: "", contact: "" });
  const [touched, setTouched] = useState({ name: false, company: false, contact: false });
  const [status, setStatus] = useState<Status>("idle");
  const [submitMsg, setSubmitMsg] = useState(SUBMITTING_MSGS[0]);

  /* Cicla el mensaje de carga */
  useEffect(() => {
    if (status !== "submitting") {
      setSubmitMsg(SUBMITTING_MSGS[0]);
      return;
    }
    let i = 0;
    const timer = setInterval(() => {
      i = (i + 1) % SUBMITTING_MSGS.length;
      setSubmitMsg(SUBMITTING_MSGS[i]);
    }, 1200);
    return () => clearInterval(timer);
  }, [status]);

  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm((prev) => ({ ...prev, [k]: e.target.value }));

  const touch = (k: keyof typeof touched) => () =>
    setTouched((prev) => ({ ...prev, [k]: true }));

  const validity = {
    name: validateField("name", form.name),
    company: validateField("company", form.company),
    contact: validateField("contact", form.contact),
  };

  const allValid = validity.name && validity.company && validity.contact;

  const handleSubmit = async (e: { preventDefault(): void }) => {
    e.preventDefault();
    /* Marca todos como touched para mostrar validación */
    setTouched({ name: true, company: true, contact: true });
    if (!allValid) return;
    setStatus("submitting");
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          ...form,
          _subject: "Nueva solicitud de Guía Gratuita — Agentia360",
        }),
      });
      setStatus(res.ok ? "success" : "error");
    } catch {
      setStatus("error");
    }
  };

  /* Glow del botón: magnético cuando todos los campos son válidos */
  const buttonGlow = allValid
    ? [
        "0 0 0 0 rgba(139,92,246,0)",
        "0 0 30px 6px rgba(139,92,246,0.55)",
        "0 0 0 0 rgba(139,92,246,0)",
      ]
    : [
        "0 4px 20px rgba(139,92,246,0.2)",
        "0 4px 28px rgba(139,92,246,0.4)",
        "0 4px 20px rgba(139,92,246,0.2)",
      ];

  return (
    <section id="guia" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-violet-950/40 via-transparent to-indigo-950/30 pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-500/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-500/20 to-transparent" />
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-violet-600/6 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* ── Lado izquierdo: propuesta de valor ── */}
          <FadeIn direction="left" className="space-y-6">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/25 rounded-full px-4 py-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-emerald-400 text-xs font-semibold">
                Recurso gratuito · Sin tarjeta de crédito
              </span>
            </div>

            {/* Título */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-violet-600/20 border border-violet-500/30 flex items-center justify-center flex-shrink-0">
                  <BookOpen className="w-6 h-6 text-violet-400" />
                </div>
                <span className="text-slate-400 text-sm font-medium">
                  Guía práctica para fundadores
                </span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight">
                5 Procesos que puedes{" "}
                <span className="bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent">
                  automatizar hoy mismo
                </span>{" "}
                en tu empresa
              </h2>
            </div>

            <p className="text-slate-400 leading-relaxed">
              Una guía directa y accionable. Sin tecnicismos. Descubre cuáles son los
              procesos que más tiempo consumen en tu operación y cómo resolverlos
              con IA en menos de 2 semanas.
            </p>

            {/* Lo que aprenderás */}
            <ul className="space-y-3">
              {guidePoints.map((point) => (
                <li key={point} className="flex items-start gap-2.5 text-slate-300 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                  {point}
                </li>
              ))}
            </ul>

            {/* Social proof */}
            <SocialProof />
          </FadeIn>

          {/* ── Lado derecho: formulario ── */}
          <FadeIn direction="right" delay={0.15}>
            <div className="relative bg-slate-900/80 backdrop-blur-sm border border-slate-800/60 rounded-2xl p-7 shadow-2xl overflow-hidden">
              {/* Glow de fondo */}
              <div className="absolute inset-0 bg-gradient-to-br from-violet-600/8 to-transparent pointer-events-none rounded-2xl" />

              <AnimatePresence mode="wait">

                {/* ── Estado éxito ── */}
                {status === "success" ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, y: 16, scale: 0.97 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    className="text-center py-8 space-y-5"
                  >
                    {/* Icono animado */}
                    <motion.div
                      initial={{ scale: 0, rotate: -15 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ delay: 0.15, type: "spring", stiffness: 260, damping: 18 }}
                      className="w-20 h-20 rounded-3xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center mx-auto"
                    >
                      <CheckCircle2 className="w-10 h-10 text-emerald-400" />
                    </motion.div>

                    <div className="space-y-2">
                      <h3 className="text-white font-bold text-2xl">¡Todo listo!</h3>
                      <p className="text-slate-400 text-sm leading-relaxed max-w-xs mx-auto">
                        Revisa tu WhatsApp o Email en unos minutos. Te enviamos la guía
                        completa de manera inmediata.
                      </p>
                    </div>

                    {/* CTA WhatsApp */}
                    <a
                      href={WHATSAPP_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-semibold text-sm px-6 py-3 rounded-xl transition-all shadow-lg shadow-green-500/20 hover:shadow-green-500/30 hover:-translate-y-0.5"
                    >
                      <MessageCircle className="w-4 h-4 fill-white" />
                      Recibir por WhatsApp ahora
                    </a>

                    {/* Volver al inicio */}
                    <div>
                      <a
                        href="/"
                        className="inline-flex items-center gap-1.5 text-slate-500 hover:text-slate-300 text-xs font-medium transition-colors"
                      >
                        <Home className="w-3.5 h-3.5" />
                        Volver al inicio
                      </a>
                    </div>
                  </motion.div>

                ) : (
                  /* ── Formulario ── */
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    className="space-y-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <div className="mb-2">
                      <h3 className="text-white font-bold text-lg mb-1">
                        Recibe la guía gratis
                      </h3>
                      <p className="text-slate-500 text-sm">
                        Solo necesitamos 3 datos para enviártela.
                      </p>
                    </div>

                    <FormField
                      id="lm-name"
                      name="name"
                      placeholder="Alejandro García"
                      label="Tu nombre"
                      value={form.name}
                      onChange={set("name")}
                      onBlur={touch("name")}
                      valid={validity.name}
                      touched={touched.name}
                      disabled={status === "submitting"}
                    />

                    <FormField
                      id="lm-company"
                      name="company"
                      placeholder="Mi Empresa S.A."
                      label="Nombre de tu empresa"
                      value={form.company}
                      onChange={set("company")}
                      onBlur={touch("company")}
                      valid={validity.company}
                      touched={touched.company}
                      disabled={status === "submitting"}
                    />

                    <FormField
                      id="lm-contact"
                      name="contact"
                      placeholder="+52 55 1234 5678 o tu@email.com"
                      label="WhatsApp o Email"
                      value={form.contact}
                      onChange={set("contact")}
                      onBlur={touch("contact")}
                      valid={validity.contact}
                      touched={touched.contact}
                      disabled={status === "submitting"}
                    />

                    {/* ── Botón magnético ── */}
                    <motion.button
                      type="submit"
                      disabled={status === "submitting"}
                      className="w-full flex items-center justify-center gap-2 bg-violet-600 hover:bg-violet-500 disabled:opacity-70 disabled:cursor-not-allowed text-white font-semibold text-sm py-3.5 rounded-xl transition-colors"
                      whileHover={allValid ? { scale: 1.02 } : { scale: 1.01 }}
                      whileTap={{ scale: 0.97 }}
                      animate={{
                        boxShadow:
                          status === "submitting"
                            ? "none"
                            : buttonGlow,
                      }}
                      transition={{ duration: allValid ? 1.6 : 2.5, repeat: Infinity, ease: "easeInOut" }}
                    >
                      {status === "submitting" ? (
                        <span className="flex items-center gap-2.5">
                          <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin flex-shrink-0" />
                          <motion.span
                            key={submitMsg}
                            initial={{ opacity: 0, y: 4 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -4 }}
                            transition={{ duration: 0.2 }}
                          >
                            {submitMsg}
                          </motion.span>
                        </span>
                      ) : (
                        <>
                          {allValid && (
                            <Sparkles className="w-4 h-4 text-yellow-300 flex-shrink-0" />
                          )}
                          Quiero mi Guía Gratuita
                          <ArrowRight className="w-4 h-4" />
                        </>
                      )}
                    </motion.button>

                    {/* Error */}
                    <AnimatePresence>
                      {status === "error" && (
                        <motion.p
                          initial={{ opacity: 0, y: -4 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0 }}
                          className="text-rose-400 text-xs text-center"
                        >
                          Algo salió mal. Escríbenos directamente por{" "}
                          <a
                            href={WHATSAPP_URL}
                            className="underline hover:text-rose-300 transition-colors"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            WhatsApp
                          </a>{" "}
                          y te la enviamos al instante.
                        </motion.p>
                      )}
                    </AnimatePresence>

                    {/* Disclaimer */}
                    <p className="text-slate-600 text-[10px] text-center leading-relaxed">
                      Sin spam. Tu información es 100% confidencial y no se comparte con terceros.
                    </p>

                    {/* WhatsApp fallback */}
                    <div className="pt-1 border-t border-slate-800/60 text-center">
                      <a
                        href={WHATSAPP_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-slate-500 hover:text-[#25D366] text-xs font-medium transition-colors"
                      >
                        <MessageCircle className="w-3.5 h-3.5" />
                        O escríbenos directamente por WhatsApp
                        <ArrowRight className="w-3 h-3" />
                      </a>
                    </div>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </FadeIn>

        </div>
      </div>
    </section>
  );
}
