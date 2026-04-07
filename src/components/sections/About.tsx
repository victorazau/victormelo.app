"use client";

import { useI18n } from "@/lib/i18n-context";

export default function About() {
  const { t } = useI18n();

  const stats = [
    { value: "3+", label: t.about.stats.experience },
    { value: "15+", label: t.about.stats.clients },
    { value: "3", label: t.about.stats.countries },
    { value: "20+", label: t.about.stats.systems },
  ];

  return (
    <section id="about" className="py-24 bg-zinc-950">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-emerald-400 font-medium text-sm tracking-widest uppercase mb-3">
          {t.about.label}
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12 max-w-2xl">
          {t.about.headline}
        </h2>

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Text content */}
          <div className="lg:col-span-3 space-y-5">
            <p className="text-zinc-400 leading-relaxed">{t.about.p1}</p>
            <p className="text-zinc-400 leading-relaxed">{t.about.p2}</p>
            <p className="text-zinc-400 leading-relaxed">{t.about.p3}</p>
          </div>

          {/* Stats card */}
          <div className="lg:col-span-2">
            <div className="bg-zinc-900/50 border border-zinc-800/50 rounded-2xl p-8">
              <div className="grid grid-cols-2 gap-8">
                {stats.map((stat) => (
                  <div key={stat.label} className="text-center">
                    <p className="text-3xl font-bold text-emerald-400">{stat.value}</p>
                    <p className="text-sm text-zinc-500 mt-1">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Location badge */}
            <div className="mt-6 flex items-center gap-3 bg-zinc-900/30 border border-zinc-800/30 rounded-xl px-5 py-4">
              <div className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse" />
              <div>
                <p className="text-sm text-white font-medium">Miami, Florida</p>
                <p className="text-xs text-zinc-500">Vida Digital Solutions LLC</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
