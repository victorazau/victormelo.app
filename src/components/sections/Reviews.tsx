"use client";

import { useI18n } from "@/lib/i18n-context";
import type { Locale } from "@/lib/i18n";
import FadeIn from "@/components/ui/FadeIn";

const reviews = [
  {
    name: "Azul Viagens",
    initials: "AV",
    rating: 5,
    text: {
      en: "The structure they implemented transformed how our team sees and acts on every sales opportunity. Exceptional work.",
      pt: "A estrutura que implementaram transformou como nossa equipe enxerga e age sobre cada oportunidade de venda. Trabalho excepcional.",
      es: "La estructura que implementaron transformó cómo nuestro equipo ve y actúa sobre cada oportunidad de venta. Trabajo excepcional.",
    },
  },
  {
    name: "Astride US Inc.",
    initials: "AS",
    rating: 5,
    text: {
      en: "Professional, precise and delivered exactly what was promised. Our entire operation is now in one place. Highly recommend.",
      pt: "Profissional, preciso e entregou exatamente o que foi prometido. Toda nossa operação agora está em um lugar. Recomendo muito.",
      es: "Profesional, preciso y entregó exactamente lo prometido. Toda nuestra operación ahora está en un solo lugar. Muy recomendado.",
    },
  },
  {
    name: "Vieira Cleaning Services",
    initials: "VC",
    rating: 5,
    text: {
      en: "We went from depending on word of mouth to having clients book us online while we sleep. Game changer.",
      pt: "Saímos da dependência de indicação para clientes agendando online enquanto dormimos. Mudou o jogo.",
      es: "Pasamos de depender de referencias a tener clientes agendando online mientras dormimos. Cambió el juego.",
    },
  },
  {
    name: "APLAC Mais",
    initials: "AP",
    rating: 5,
    text: {
      en: "Our billing system now runs itself. We never forget to charge an associate again. Delinquency dropped dramatically.",
      pt: "Nossa régua de cobrança passou a funcionar sozinha. Nunca mais esquecemos de cobrar um associado. Inadimplência caiu drasticamente.",
      es: "Nuestro sistema de cobros ahora funciona solo. Nunca más olvidamos cobrar a un asociado. La morosidad cayó drásticamente.",
    },
  },
];

const labels: Record<Locale, { label: string; headline: string; badge: string }> = {
  en: { label: "Reviews", headline: "What clients say.", badge: "5.0 on Google" },
  pt: { label: "Avaliações", headline: "O que clientes dizem.", badge: "5.0 no Google" },
  es: { label: "Reseñas", headline: "Lo que dicen los clientes.", badge: "5.0 en Google" },
};

function Stars() {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <svg key={i} width="14" height="14" fill="#facc15" viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

export default function Reviews() {
  const { locale } = useI18n();
  const l = labels[locale];

  return (
    <section className="py-24 bg-zinc-950">
      <div className="max-w-6xl mx-auto px-6">
        <FadeIn>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-12 gap-4">
            <div>
              <p className="text-emerald-400 font-medium text-sm tracking-widest uppercase mb-3">
                {l.label}
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-white">
                {l.headline}
              </h2>
            </div>
            <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2 shrink-0">
              <svg width="18" height="18" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" />
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
              </svg>
              <Stars />
              <span className="text-xs text-zinc-400 font-medium">{l.badge}</span>
            </div>
          </div>
        </FadeIn>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {reviews.map((review, i) => (
            <FadeIn key={i} delay={i * 0.08}>
              <div className="glass-card p-6 h-full flex flex-col">
                <Stars />
                <p className="text-sm text-zinc-300 leading-relaxed mt-4 flex-1">
                  {review.text[locale]}
                </p>
                <div className="flex items-center gap-3 mt-5 pt-4 border-t border-white/5">
                  <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center text-xs font-bold text-emerald-400">
                    {review.initials}
                  </div>
                  <span className="text-sm text-zinc-400 font-medium">{review.name}</span>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
