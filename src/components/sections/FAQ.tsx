"use client";

import { useState } from "react";
import { useI18n } from "@/lib/i18n-context";
import type { Locale } from "@/lib/i18n";
import FadeIn from "@/components/ui/FadeIn";

const faqData: Record<Locale, { q: string; a: string }[]> = {
  en: [
    {
      q: "Is this worth the investment for my size of business?",
      a: "Most clients see ROI within the first 30 days. The cost of lost leads, manual follow-ups, and disconnected tools is far greater than the investment. Automation pays for itself in weeks, not months — and keeps working 24/7 without a salary.",
    },
    {
      q: "How long does an implementation take?",
      a: "Basic implementations: 2-4 weeks. Complex projects: 4-8 weeks. Everything is scoped and defined before we start.",
    },
    {
      q: "Do I need to already have GoHighLevel?",
      a: "No. I handle the full setup from scratch, or I can work with your existing GHL account. You can also use Quasar CRM, our white-label platform.",
    },
    {
      q: "What systems do you integrate?",
      a: "Any system with an API: Stripe, Asaas, ClickUp, ZapSign, WhatsApp, Meta Ads, Google Ads, n8n, Zapier, and many more.",
    },
    {
      q: "How does payment work?",
      a: "Payment is milestone-based. I accept Stripe, Wise, wire transfer, and PIX. All contracts are signed digitally via ZapSign.",
    },
  ],
  pt: [
    {
      q: "Esse investimento vale a pena pro tamanho do meu negócio?",
      a: "A maioria dos clientes vê retorno nos primeiros 30 dias. O custo de leads perdidos, follow-ups manuais e ferramentas desconectadas é muito maior que o investimento. Automação se paga em semanas, não meses — e trabalha 24/7 sem salário.",
    },
    {
      q: "Quanto tempo leva uma implementação?",
      a: "Implementações básicas: 2-4 semanas. Projetos complexos: 4-8 semanas. Tudo é definido antes de começar.",
    },
    {
      q: "Preciso já ter o GoHighLevel?",
      a: "Não. Configuro tudo do zero, ou trabalho com sua conta GHL existente. Você também pode usar o Quasar CRM, nossa plataforma white label.",
    },
    {
      q: "Quais sistemas vocês integram?",
      a: "Qualquer sistema com API: Stripe, Asaas, ClickUp, ZapSign, WhatsApp, Meta Ads, Google Ads, n8n, Zapier e muitos mais.",
    },
    {
      q: "Como funciona o pagamento?",
      a: "Pagamento por milestones. Aceito Stripe, Wise, transferência e PIX. Contratos assinados digitalmente via ZapSign.",
    },
  ],
  es: [
    {
      q: "¿Vale la pena esta inversión para el tamaño de mi negocio?",
      a: "La mayoría de los clientes ven retorno en los primeros 30 días. El costo de leads perdidos, follow-ups manuales y herramientas desconectadas es mucho mayor que la inversión. La automatización se paga en semanas, no meses — y trabaja 24/7 sin salario.",
    },
    {
      q: "¿Cuánto tiempo toma una implementación?",
      a: "Implementaciones básicas: 2-4 semanas. Proyectos complejos: 4-8 semanas. Todo se define antes de empezar.",
    },
    {
      q: "¿Necesito ya tener GoHighLevel?",
      a: "No. Configuro todo desde cero, o trabajo con tu cuenta GHL existente. También puedes usar Quasar CRM, nuestra plataforma white label.",
    },
    {
      q: "¿Qué sistemas integran?",
      a: "Cualquier sistema con API: Stripe, Asaas, ClickUp, ZapSign, WhatsApp, Meta Ads, Google Ads, n8n, Zapier y muchos más.",
    },
    {
      q: "¿Cómo funciona el pago?",
      a: "Pago por milestones. Acepto Stripe, Wise, transferencia y PIX. Contratos firmados digitalmente vía ZapSign.",
    },
  ],
};

const labels = {
  en: { label: "FAQ", headline: "Frequently asked questions." },
  pt: { label: "FAQ", headline: "Perguntas frequentes." },
  es: { label: "FAQ", headline: "Preguntas frecuentes." },
};

export default function FAQ() {
  const { locale } = useI18n();
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const faqs = faqData[locale];
  const l = labels[locale];

  return (
    <section id="faq" className="py-24 bg-zinc-950">
      <div className="max-w-3xl mx-auto px-6">
        <FadeIn>
          <p className="text-emerald-400 font-medium text-sm tracking-widest uppercase mb-3">
            {l.label}
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12">
            {l.headline}
          </h2>
        </FadeIn>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <FadeIn key={i} delay={i * 0.05}>
              <div className="glass-card overflow-hidden">
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full flex items-center justify-between p-5 text-left"
                >
                  <span className="text-white font-medium pr-4">{faq.q}</span>
                  <svg
                    width="20"
                    height="20"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    className={`text-zinc-500 shrink-0 transition-transform duration-300 ${openIndex === i ? "rotate-180" : ""}`}
                  >
                    <path d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${openIndex === i ? "max-h-48 pb-5" : "max-h-0"}`}
                >
                  <p className="px-5 text-sm text-zinc-400 leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
