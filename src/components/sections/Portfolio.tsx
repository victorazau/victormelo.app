"use client";

import { useI18n } from "@/lib/i18n-context";
import type { Locale } from "@/lib/i18n";
import FadeIn from "@/components/ui/FadeIn";

const countryFlags: Record<string, string> = {
  Brazil: "🇧🇷",
  Brasil: "🇧🇷",
  USA: "🇺🇸",
  EUA: "🇺🇸",
  "EE.UU.": "🇺🇸",
};

const testimonials: Record<Locale, string[]> = {
  en: [
    '"The structure they implemented transformed how our team sees and acts on every sales opportunity."',
    '"Professional, precise and delivered exactly what was promised. Our entire operation is now in one place."',
    '"We went from depending on word of mouth to having clients book us online while we sleep."',
    '"Our billing system now runs itself. We never forget to charge an associate again."',
  ],
  pt: [
    '"A estrutura que implementaram transformou como nossa equipe enxerga e age sobre cada oportunidade de venda."',
    '"Profissional, preciso e entregou exatamente o que foi prometido. Toda nossa operação agora está em um lugar."',
    '"Saímos da dependência de indicação para clientes agendando online enquanto dormimos."',
    '"Nossa régua de cobrança passou a funcionar sozinha. Nunca mais esquecemos de cobrar um associado."',
  ],
  es: [
    '"La estructura que implementaron transformó cómo nuestro equipo ve y actúa sobre cada oportunidad de venta."',
    '"Profesional, preciso y entregó exactamente lo prometido. Toda nuestra operación ahora está en un solo lugar."',
    '"Pasamos de depender de referencias a tener clientes agendando online mientras dormimos."',
    '"Nuestro sistema de cobros ahora funciona solo. Nunca más olvidamos cobrar a un asociado."',
  ],
};

export default function Portfolio() {
  const { t, locale } = useI18n();
  const quotes = testimonials[locale];

  return (
    <section id="portfolio" className="relative py-24 overflow-hidden">
      {/* Aurora background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0118] via-[#050510] to-[#030303]" />
        <div className="aurora-container absolute inset-0 opacity-80">
          <div className="aurora-blob aurora-blob-1" />
          <div className="aurora-blob aurora-blob-2" />
          <div className="aurora-blob aurora-blob-3" />
          <div className="aurora-blob aurora-blob-4" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-zinc-950/80 pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <FadeIn>
          <p className="text-emerald-400 font-medium text-sm tracking-widest uppercase mb-3">
            {t.portfolio.label}
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            {t.portfolio.headline}
          </h2>
          <p className="text-zinc-400 mb-12">{t.portfolio.subtitle}</p>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-6">
          {t.portfolio.cases.map((c, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div className="glass-card p-8 h-full flex flex-col">
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold text-white">{c.client}</h3>
                  <div className="flex items-center gap-2">
                    <span className="text-lg">{countryFlags[c.country] || "🌍"}</span>
                    <span className="text-xs text-zinc-500 bg-zinc-800/50 px-2.5 py-1 rounded-full">
                      {c.industry}
                    </span>
                  </div>
                </div>

                {/* Problem */}
                <div className="mb-4">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-2 h-2 bg-red-400/80 rounded-full" />
                    <span className="text-xs font-medium text-red-400/80 uppercase tracking-wider">
                      Problem
                    </span>
                  </div>
                  <p className="text-sm text-zinc-400">{c.problem}</p>
                </div>

                {/* Solution */}
                <div className="mb-4">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-2 h-2 bg-blue-400/80 rounded-full" />
                    <span className="text-xs font-medium text-blue-400/80 uppercase tracking-wider">
                      Solution
                    </span>
                  </div>
                  <p className="text-sm text-zinc-400">{c.solution}</p>
                </div>

                {/* Result */}
                <div className="bg-emerald-500/5 border border-emerald-500/10 rounded-xl px-5 py-3 mt-auto">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full" />
                    <span className="text-xs font-medium text-emerald-400 uppercase tracking-wider">
                      Result
                    </span>
                  </div>
                  <p className="text-sm text-emerald-300/80">{c.result}</p>
                </div>

                {/* Testimonial */}
                {quotes[i] && (
                  <p className="mt-5 text-sm text-zinc-500 italic border-l-2 border-emerald-500/30 pl-4">
                    {quotes[i]}
                  </p>
                )}
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
