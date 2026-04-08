"use client";

import { useI18n } from "@/lib/i18n-context";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import FadeIn from "@/components/ui/FadeIn";

export default function About() {
  const { t } = useI18n();

  const stats = [
    { value: 3, suffix: "+", label: t.about.stats.experience },
    { value: 35, suffix: "+", label: t.about.stats.clients },
    { value: 3, suffix: "", label: t.about.stats.countries },
    { value: 20, suffix: "+", label: t.about.stats.systems },
  ];

  return (
    <section id="about" className="relative py-24 overflow-hidden">
      {/* Miami skyline background */}
      <div className="absolute inset-0">
        <img
          src="/miami-skyline.jpg"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-zinc-950/85" />
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-transparent to-zinc-950" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <FadeIn>
          <p className="text-emerald-400 font-medium text-sm tracking-widest uppercase mb-3">
            {t.about.label}
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12 max-w-2xl">
            {t.about.headline}
          </h2>
        </FadeIn>

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Text content — shorter */}
          <FadeIn delay={0.1} className="lg:col-span-3 space-y-5">
            <p className="text-zinc-300 leading-relaxed">{t.about.p1}</p>
            <p className="text-zinc-300 leading-relaxed">{t.about.p3}</p>
          </FadeIn>

          {/* Stats card */}
          <FadeIn delay={0.2} direction="right" className="lg:col-span-2">
            <div className="glass-card p-8">
              <div className="grid grid-cols-2 gap-8">
                {stats.map((stat) => (
                  <div key={stat.label} className="text-center">
                    <p className="text-3xl font-bold text-emerald-400">
                      <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                    </p>
                    <p className="text-sm text-zinc-400 mt-1">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Location badge */}
            <div className="glass-card mt-6 flex items-center gap-3 px-5 py-4">
              <div className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse" />
              <div>
                <p className="text-sm text-white font-medium">Miami, Florida</p>
                <p className="text-xs text-zinc-400">Vida Digital Solutions LLC</p>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
