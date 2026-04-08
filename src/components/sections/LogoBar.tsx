"use client";

import { useI18n } from "@/lib/i18n-context";

const clients = [
  { name: "Azul Viagens", logo: "AV" },
  { name: "Astride US Inc.", logo: "AS" },
  { name: "Vieira Cleaning", logo: "VC" },
  { name: "APLAC Mais", logo: "AP" },
  { name: "Souza Advogados", logo: "SA" },
  { name: "Marcos Assunção", logo: "MA" },
  { name: "Avanti Imóveis", logo: "AI" },
];

const labels = {
  en: "Trusted by companies across 3 countries",
  pt: "Confiado por empresas em 3 países",
  es: "Confiado por empresas en 3 países",
};

export default function LogoBar() {
  const { locale } = useI18n();

  return (
    <section className="hidden md:block py-12 bg-zinc-950 border-y border-zinc-800/30">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-center text-xs text-zinc-500 uppercase tracking-widest mb-8">
          {labels[locale]}
        </p>
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
          {clients.map((client) => (
            <div
              key={client.name}
              className="flex items-center gap-2.5 text-zinc-500 hover:text-zinc-300 transition-colors group"
            >
              <div className="w-9 h-9 rounded-lg bg-zinc-800/50 group-hover:bg-zinc-700/50 flex items-center justify-center text-xs font-bold text-zinc-400 group-hover:text-emerald-400 transition-colors">
                {client.logo}
              </div>
              <span className="text-sm font-medium hidden sm:block">
                {client.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
