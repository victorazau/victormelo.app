"use client";

import { useI18n } from "@/lib/i18n-context";
import type { Locale } from "@/lib/i18n";
import FadeIn from "@/components/ui/FadeIn";

const urgencyLabels: Record<Locale, string> = {
  en: "Limited spots available this month",
  pt: "Vagas limitadas este mês",
  es: "Cupos limitados este mes",
};

export default function Contact() {
  const { t, locale } = useI18n();

  return (
    <section id="contact" className="py-24 bg-zinc-950">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <FadeIn>
          <p className="text-emerald-400 font-medium text-sm tracking-widest uppercase mb-3">
            {t.contact.label}
          </p>
          <h2 className="text-3xl sm:text-5xl font-bold text-white mb-4">
            {t.contact.headline}
          </h2>
          <p className="text-zinc-400 max-w-xl mx-auto mb-4">{t.contact.subtitle}</p>

          {/* Urgency badge */}
          <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium px-4 py-2 rounded-full mb-10">
            <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
            {urgencyLabels[locale]}
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            {/* WhatsApp */}
            <a
              href="https://wa.me/14382985740"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-emerald-500 hover:bg-emerald-400 text-white font-semibold px-8 py-4 rounded-full transition-all hover:shadow-lg hover:shadow-emerald-500/25 w-full sm:w-auto justify-center"
            >
              <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
              </svg>
              {t.contact.whatsapp}
            </a>

            {/* Call */}
            <a
              href="tel:+14382985740"
              className="inline-flex items-center gap-3 border border-zinc-700 text-zinc-300 hover:text-white hover:border-zinc-500 font-medium px-8 py-4 rounded-full transition-all w-full sm:w-auto justify-center"
            >
              <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
              {t.contact.call}
            </a>

            {/* Email */}
            <a
              href="mailto:info@victormelo.app"
              className="inline-flex items-center gap-3 border border-zinc-700 text-zinc-300 hover:text-white hover:border-zinc-500 font-medium px-8 py-4 rounded-full transition-all w-full sm:w-auto justify-center"
            >
              <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
              {t.contact.email}
            </a>
          </div>
        </FadeIn>

        <FadeIn delay={0.3}>
          <p className="text-sm text-zinc-500">{t.contact.location}</p>
        </FadeIn>
      </div>
    </section>
  );
}
