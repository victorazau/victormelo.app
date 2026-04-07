"use client";

import { useI18n } from "@/lib/i18n-context";

const serviceIcons = [
  <svg key="ghl" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
    <path d="M13 10V3L4 14h7v7l9-11h-7z" />
  </svg>,
  <svg key="auto" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
    <path d="M4.5 12.75l6 6 9-13.5" />
  </svg>,
  <svg key="web" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
    <path d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5a17.92 17.92 0 01-8.716-2.247m0 0A9.015 9.015 0 003 12c0-1.605.42-3.113 1.157-4.418" />
  </svg>,
];

export default function Services() {
  const { t } = useI18n();

  return (
    <section id="services" className="py-24 bg-zinc-950">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-emerald-400 font-medium text-sm tracking-widest uppercase mb-3">
          {t.services.label}
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
          {t.services.headline}
        </h2>
        <p className="text-zinc-400 max-w-2xl mb-12">{t.services.subtitle}</p>

        <div className="grid md:grid-cols-3 gap-6">
          {t.services.items.map((service, i) => (
            <div
              key={i}
              className="group bg-zinc-900/50 border border-zinc-800/50 rounded-2xl p-8 hover:border-emerald-500/30 transition-all"
            >
              <div className="text-emerald-400 mb-5">{serviceIcons[i]}</div>
              <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
              <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                {service.description}
              </p>
              <div className="pt-4 border-t border-zinc-800/50">
                <p className="text-emerald-400 font-semibold text-sm">{service.price}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-zinc-500 italic mt-12 text-sm">
          &ldquo;{t.services.footer}&rdquo;
        </p>
      </div>
    </section>
  );
}
