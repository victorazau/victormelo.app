"use client";

import { useI18n } from "@/lib/i18n-context";
import type { Locale } from "@/lib/i18n";
import { HeroGeometric } from "@/components/ui/shape-landing-hero";

const bookLabel: Record<Locale, string> = {
  en: "Book a Free Call",
  pt: "Agendar Call Grátis",
  es: "Agendar Llamada Gratis",
};

export default function Hero() {
  const { t, locale } = useI18n();

  return (
    <HeroGeometric
      badge={t.hero.title}
      title1={t.hero.greeting}
      title2={t.hero.name}
      subtitle={t.hero.subtitle}
      photo="/victor-melo.webp"
      ctaPrimary={t.hero.cta}
      ctaPrimaryHref="https://wa.me/14382985740"
      ctaSecondary={bookLabel[locale]}
      ctaSecondaryHref="/booking"
    />
  );
}
