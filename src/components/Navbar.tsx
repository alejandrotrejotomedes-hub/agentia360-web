"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bot, Menu, X } from "lucide-react";

const navLinks = [
  { label: "Inicio",    href: "#home" },
  { label: "Servicios", href: "#features" },
  { label: "Portafolio",href: "#portafolio" },
  { label: "Equipo",    href: "#team" },
  { label: "Inversión", href: "#pricing" },
  { label: "Contacto",  href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-slate-950/80 backdrop-blur-xl border-b border-white/[0.06] shadow-xl shadow-black/30"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* ── Logo ── */}
        <a href="#home" className="flex items-center gap-2.5 group">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center shadow-lg shadow-violet-500/30 group-hover:shadow-violet-500/50 transition-shadow">
            <Bot className="w-4 h-4 text-white" />
          </div>
          <span className="text-white font-bold text-lg tracking-tight">
            Agentia<span className="text-violet-400">360</span>
          </span>
        </a>

        {/* ── Desktop nav ── */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="px-4 py-2 text-sm text-slate-400 hover:text-white rounded-md hover:bg-white/5 transition-all"
            >
              {label}
            </a>
          ))}
        </nav>

        {/* ── Desktop CTA ── */}
        <div className="hidden md:flex items-center gap-3">
          <a href="#pricing" className="text-sm text-slate-400 hover:text-white transition-colors px-3 py-2">
            Ver Planes
          </a>
          <a
            href="#contact"
            className="text-sm font-semibold bg-violet-600 hover:bg-violet-500 text-white px-5 py-2.5 rounded-lg transition-colors shadow-lg shadow-violet-600/25"
          >
            Agendar Llamada
          </a>
        </div>

        {/* ── Mobile burger ── */}
        <button
          className="md:hidden text-slate-400 hover:text-white p-2"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* ── Mobile menu ── */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="md:hidden overflow-hidden bg-slate-950/95 backdrop-blur-xl border-t border-white/[0.06]"
          >
            <div className="px-6 py-4 flex flex-col gap-1">
              {navLinks.map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className="py-2.5 px-3 text-slate-300 hover:text-white hover:bg-white/5 rounded-md transition-all text-sm"
                >
                  {label}
                </a>
              ))}
              <a
                href="#contact"
                className="mt-2 text-center text-sm font-semibold bg-violet-600 text-white px-5 py-2.5 rounded-lg"
              >
                Agendar Llamada
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
