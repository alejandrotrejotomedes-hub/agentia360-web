"use client";

import { MessageSquare } from "lucide-react";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/521234567890?text=Hola%2C%20me%20interesa%20automatizar%20mi%20negocio%20con%20Agentia360"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-semibold text-sm pl-4 pr-5 py-3.5 rounded-full shadow-2xl shadow-green-500/30 hover:shadow-green-500/50 transition-all hover:-translate-y-1 group"
    >
      <MessageSquare className="w-5 h-5 fill-white flex-shrink-0" />
      <span className="hidden sm:block whitespace-nowrap">¿Tienes una duda rápida? Escríbenos</span>
    </a>
  );
}
