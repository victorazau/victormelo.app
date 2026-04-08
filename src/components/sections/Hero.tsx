"use client";

import { useI18n } from "@/lib/i18n-context";
import { HeroGeometric } from "@/components/ui/shape-landing-hero";

export default function Hero() {
  const { t } = useI18n();

  return (
    <HeroGeometric
      badge={t.hero.title}
      title1={t.hero.greeting}
      title2={t.hero.name}
      subtitle={t.hero.subtitle}
      photo="/victor-melo.jpeg"
      ctaPrimary={t.hero.cta}
      ctaPrimaryHref="https://wa.me/14382985740"
      ctaSecondary={t.hero.ctaSecondary}
      ctaSecondaryHref="#portfolio"
    />
  );
}
