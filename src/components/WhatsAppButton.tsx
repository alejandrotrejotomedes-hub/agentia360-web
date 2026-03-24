"use client";

import { Mail } from "lucide-react";

export default function WhatsAppButton() {
  return (
    <a
      href="mailto:alejandro@agentia-360.com?subject=Quiero%20automatizar%20mi%20negocio%20con%20Agentia360"
      aria-label="Contactar por Email"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 bg-violet-600 hover:bg-violet-500 text-white font-semibold text-sm pl-4 pr-5 py-3.5 rounded-full shadow-2xl shadow-violet-500/30 hover:shadow-violet-500/50 transition-all hover:-translate-y-1 group"
    >
      <Mail className="w-5 h-5 flex-shrink-0" />
      <span className="hidden sm:block whitespace-nowrap">¿Tienes una duda rápida? Escríbenos</span>
    </a>
  );
}
