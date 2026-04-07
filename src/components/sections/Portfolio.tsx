"use client";

import { useI18n } from "@/lib/i18n-context";

const countryFlags: Record<string, string> = {
  Brazil: "🇧🇷",
  Brasil: "🇧🇷",
  USA: "🇺🇸",
  EUA: "🇺🇸",
  "EE.UU.": "🇺🇸",
};

export default function Portfolio() {
  const { t } = useI18n();

  return (
    <section id="portfolio" className="py-24 bg-zinc-900/30">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-emerald-400 font-medium text-sm tracking-widest uppercase mb-3">
          {t.portfolio.label}
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
          {t.portfolio.headline}
        </h2>
        <p className="text-zinc-400 mb-12">{t.portfolio.subtitle}</p>

        <div className="grid md:grid-cols-2 gap-6">
          {t.portfolio.cases.map((c, i) => (
            <div
              key={i}
              className="bg-zinc-900/50 border border-zinc-800/50 rounded-2xl p-8 hover:border-emerald-500/20 transition-colors"
            >
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
              <div className="bg-emerald-500/5 border border-emerald-500/10 rounded-xl px-5 py-3 mt-4">
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full" />
                  <span className="text-xs font-medium text-emerald-400 uppercase tracking-wider">
                    Result
                  </span>
                </div>
                <p className="text-sm text-emerald-300/80">{c.result}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
