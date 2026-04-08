"use client";

import { useI18n } from "@/lib/i18n-context";
import FadeIn from "@/components/ui/FadeIn";

const skillGroups = [
  {
    key: "crm" as const,
    featured: true,
    items: ["GoHighLevel", "ClickUp", "HubSpot", "Quasar CRM"],
    icon: (
      <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" />
      </svg>
    ),
  },
  {
    key: "ads" as const,
    featured: false,
    items: ["Meta Ads", "Google Ads", "Google Guaranteed", "TikTok Ads"],
    icon: (
      <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path d="M3 3v18h18M7 16l4-4 4 4 6-6" />
      </svg>
    ),
  },
  {
    key: "dev" as const,
    featured: false,
    items: ["n8n", "Webhooks / API", "Stripe", "Zapier", "ZapSign", "Asaas", "Next.js", "Cloudflare"],
    icon: (
      <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
  },
  {
    key: "strategy" as const,
    featured: false,
    items: ["RevOps", "Sales Pipeline", "Tracking & Analytics", "AI Workflows", "Process Automation"],
    icon: (
      <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
];

export default function Skills() {
  const { t } = useI18n();

  return (
    <section id="skills" className="py-24 bg-zinc-900/30">
      <div className="max-w-6xl mx-auto px-6">
        <FadeIn>
          <p className="text-emerald-400 font-medium text-sm tracking-widest uppercase mb-3">
            {t.skills.label}
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12">
            {t.skills.headline}
          </h2>
        </FadeIn>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillGroups.map((group, i) => (
            <FadeIn key={group.key} delay={i * 0.1}>
              <div
                className={`glass-card p-6 h-full ${
                  group.featured
                    ? "!border-emerald-500/30 !bg-emerald-500/[0.06] ring-1 ring-emerald-500/20"
                    : ""
                }`}
              >
                {group.featured && (
                  <span className="inline-block text-[10px] font-bold uppercase tracking-wider bg-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded-full mb-3">
                    Core
                  </span>
                )}
                <div className="text-emerald-400 mb-4">{group.icon}</div>
                <h3 className="text-white font-semibold mb-4">
                  {t.skills.categories[group.key]}
                </h3>
                <ul className="space-y-2">
                  {group.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-zinc-400">
                      <div className="w-1.5 h-1.5 bg-emerald-400/60 rounded-full shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
