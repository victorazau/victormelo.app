"use client";

import Link from "next/link";
import ReactMarkdown, { type Components } from "react-markdown";
import remarkGfm from "remark-gfm";
import { Clock, ChevronLeft, ChevronRight } from "lucide-react";
import type { Locale } from "@/lib/i18n";
import { blogUrl, blogIndexUrl } from "@/lib/blogUrl";
import type { Post, PostMeta } from "@/lib/posts";

// Affiliate offer (Victor's personal GHL affiliate token). The landing page is
// chosen per post topic so each audience hits the page that converts best for
// them — see reference_ghl_affiliate_links. GHL changes these paths over time.
const AFF_BASE = "https://www.gohighlevel.com";
const AFF_REF = "?fp_ref=victormelo";

function affiliateUrl(post: { category?: string; slug?: string; title?: string }): string {
  const hay = `${post.category || ""} ${post.slug || ""} ${post.title || ""}`.toLowerCase();
  if (/\bai\b|ai agent|ai agents|artificial intelligence|agent studio/.test(hay)) return `${AFF_BASE}/ai${AFF_REF}`;
  if (/saas mode|white[- ]?label|resell|reseller|agency mode/.test(hay)) return `${AFF_BASE}/pro-trial${AFF_REF}`;
  if (/\bguide\b|how to|how-to|getting started|beginner|step[- ]by[- ]step|tutorial/.test(hay)) return `${AFF_BASE}/highlevel-bootcamp${AFF_REF}`;
  return `${AFF_BASE}/pricing${AFF_REF}`; // comparisons / reviews / alternatives / pricing
}

const ctaCopy = {
  en: {
    midText: "Want to try GoHighLevel yourself? Plans start at $97/mo — start a free trial.",
    midBtn: "Start free trial →",
    footHead: "Ready to try GoHighLevel?",
    footSub: "Plans from $97/mo. Start your free trial — no commitment.",
    footBtn: "Start your free trial",
    disclosure: "Affiliate link — I may earn a commission at no extra cost to you.",
    related: "Keep reading",
    prev: "Previous",
    next: "Next",
  },
  pt: {
    midText: "Quer testar o GoHighLevel? Os planos começam em $97/mês — comece um teste grátis.",
    midBtn: "Começar teste grátis →",
    footHead: "Pronto para testar o GoHighLevel?",
    footSub: "Planos a partir de $97/mês. Comece seu teste grátis — sem compromisso.",
    footBtn: "Começar teste grátis",
    disclosure: "Link de afiliado — posso receber comissão sem custo extra para você.",
    related: "Continue lendo",
    prev: "Anterior",
    next: "Próximo",
  },
  es: {
    midText: "¿Quieres probar GoHighLevel? Los planes empiezan en $97/mes — empieza una prueba gratis.",
    midBtn: "Empezar prueba gratis →",
    footHead: "¿Listo para probar GoHighLevel?",
    footSub: "Planes desde $97/mes. Empieza tu prueba gratis — sin compromiso.",
    footBtn: "Empezar prueba gratis",
    disclosure: "Enlace de afiliado — puedo recibir una comisión sin costo extra para ti.",
    related: "Sigue leyendo",
    prev: "Anterior",
    next: "Siguiente",
  },
};

const markdownComponents: Components = {
  h1: ({ children }) => (
    <h2 className="text-[28px] font-bold text-white tracking-tight mt-12 mb-4">{children}</h2>
  ),
  h2: ({ children }) => (
    <h2 className="text-[26px] font-bold text-white tracking-tight mt-12 mb-4">{children}</h2>
  ),
  h3: ({ children }) => (
    <h3 className="text-[19px] font-semibold text-zinc-100 mt-8 mb-3">{children}</h3>
  ),
  h4: ({ children }) => (
    <h4 className="text-[16px] font-semibold text-zinc-100 mt-6 mb-2">{children}</h4>
  ),
  p: ({ children }) => (
    <p className="text-[16px] text-zinc-300 leading-[1.85] my-4">{children}</p>
  ),
  a: ({ href, children }) => {
    const url = href || "#";
    if (/^https?:\/\//.test(url)) {
      const isAffiliate = /fp_ref=/.test(url);
      const rel = isAffiliate ? "sponsored noopener noreferrer" : "noopener noreferrer";
      return (
        <a
          href={url}
          target="_blank"
          rel={rel}
          {...(isAffiliate ? { "data-cta": "affiliate", "data-placement": "inline" } : {})}
          className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2"
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={url} className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2">
        {children}
      </Link>
    );
  },
  strong: ({ children }) => <strong className="text-white font-semibold">{children}</strong>,
  em: ({ children }) => <em className="italic text-zinc-200">{children}</em>,
  ul: ({ children }) => (
    <ul className="my-5 space-y-2 pl-5 list-disc marker:text-emerald-400">{children}</ul>
  ),
  ol: ({ children }) => (
    <ol className="my-5 space-y-2 pl-5 list-decimal marker:text-emerald-400">{children}</ol>
  ),
  li: ({ children }) => <li className="text-[16px] text-zinc-300 leading-[1.8]">{children}</li>,
  blockquote: ({ children }) => (
    <blockquote className="border-l-2 border-emerald-500/60 bg-emerald-500/[0.06] pl-4 pr-3 py-3 my-5 text-[15px] text-zinc-300 italic rounded-r-lg">
      {children}
    </blockquote>
  ),
  hr: () => <hr className="my-10 border-white/10" />,
  code: ({ className, children }) => {
    if (/language-/.test(className || "")) {
      return <code className={`${className} font-mono text-[13px]`}>{children}</code>;
    }
    return (
      <code className="bg-white/10 text-emerald-300 font-mono text-[14px] px-1.5 py-0.5 rounded">{children}</code>
    );
  },
  pre: ({ children }) => (
    <pre className="my-5 overflow-x-auto rounded-xl bg-black/40 border border-white/10 p-4 text-zinc-200">{children}</pre>
  ),
  table: ({ children }) => (
    <div className="my-7 overflow-x-auto rounded-xl border border-white/10">
      <table className="w-full border-collapse text-[14px] [&_tbody_tr:nth-child(even)]:bg-white/[0.03]">
        {children}
      </table>
    </div>
  ),
  th: ({ children }) => (
    <th className="bg-emerald-500/10 px-3 py-2.5 text-left font-semibold text-white border-b border-white/10">{children}</th>
  ),
  td: ({ children }) => (
    <td className="border-t border-white/10 px-3 py-2.5 text-zinc-300 align-top">{children}</td>
  ),
  img: ({ src, alt }) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img src={typeof src === "string" ? src : ""} alt={alt || ""} className="my-7 rounded-xl w-full border border-white/10" />
  ),
};

function stripLeadingH1(content: string): string {
  return content.replace(/^\s*#\s+.*(\r?\n)+/, "");
}

// Link the first plain-text "GoHighLevel" mention to the affiliate offer.
function linkFirstGHLMention(md: string, url: string): string {
  const lines = md.split("\n");
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (line.startsWith("#") || line.trim().startsWith("|") || line.trim().startsWith(">")) continue;
    if (/\]\(/.test(line) && /\[[^\]]*GoHighLevel/i.test(line)) continue;
    const idx = line.indexOf("GoHighLevel");
    if (idx === -1) continue;
    lines[i] = line.slice(0, idx) + `[GoHighLevel](${url})` + line.slice(idx + "GoHighLevel".length);
    return lines.join("\n");
  }
  return md;
}

// Split at an H2 near the middle (not the last two sections) for an inline CTA.
function splitAtMidH2(md: string): [string, string] {
  const lines = md.split("\n");
  const h2 = lines.map((l, i) => (l.startsWith("## ") ? i : -1)).filter((i) => i >= 0);
  if (h2.length < 5) return [md, ""];
  const pick = Math.min(Math.max(Math.floor(h2.length / 2), 2), h2.length - 2);
  return [lines.slice(0, h2[pick]).join("\n"), lines.slice(h2[pick]).join("\n")];
}

function Markdown({ children }: { children: string }) {
  return (
    <ReactMarkdown remarkPlugins={[remarkGfm]} components={markdownComponents}>
      {children}
    </ReactMarkdown>
  );
}

function InlineAffiliateCTA({ locale, affUrl }: { locale: Locale; affUrl: string }) {
  const c = ctaCopy[locale];
  return (
    <div className="my-9 rounded-2xl border border-emerald-500/30 bg-emerald-500/[0.07] p-5 flex flex-col sm:flex-row sm:items-center gap-4 sm:justify-between">
      <p className="text-[15px] text-zinc-200 font-medium leading-snug">{c.midText}</p>
      <a
        href={affUrl}
        target="_blank"
        rel="sponsored noopener noreferrer"
        data-cta="affiliate"
        data-placement="mid"
        className="shrink-0 inline-flex items-center justify-center px-5 py-2.5 bg-emerald-500 hover:bg-emerald-400 text-black font-bold rounded-xl text-[14px] transition-colors"
      >
        {c.midBtn}
      </a>
    </div>
  );
}

function ArticleBody({ content, locale, affUrl }: { content: string; locale: Locale; affUrl: string }) {
  const linked = linkFirstGHLMention(stripLeadingH1(content), affUrl);
  const [part1, part2] = splitAtMidH2(linked);
  if (!part2) return <Markdown>{part1}</Markdown>;
  return (
    <>
      <Markdown>{part1}</Markdown>
      <InlineAffiliateCTA locale={locale} affUrl={affUrl} />
      <Markdown>{part2}</Markdown>
    </>
  );
}

const LANG_LABEL: Record<Locale, string> = { en: "EN", pt: "PT", es: "ES" };

const authorBio = {
  en: "GoHighLevel specialist since 2023. I've automated 35+ businesses across the US, Brazil and beyond — and I share honest reviews and comparisons so you pick the right tools, not the hyped ones.",
  pt: "Especialista em GoHighLevel desde 2023. Já automatizei 35+ negócios nos EUA, Brasil e além — e compartilho reviews e comparativos honestos pra você escolher a ferramenta certa, não a mais hypada.",
  es: "Especialista en GoHighLevel desde 2023. He automatizado 35+ negocios en EE. UU., Brasil y más — y comparto reseñas y comparativas honestas para que elijas la herramienta correcta, no la más publicitada.",
};

function AuthorBox({ locale }: { locale: Locale }) {
  const book = locale === "pt" ? "Agendar call" : locale === "es" ? "Agendar llamada" : "Book a call";
  return (
    <div className="mt-12 flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.02] p-5">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/victor-melo-sm.webp"
        alt="Victor Melo — GoHighLevel specialist"
        width={56}
        height={56}
        className="w-14 h-14 rounded-full object-cover border border-emerald-500/40 shrink-0"
      />
      <div>
        <p className="text-white font-bold text-[15px]">Victor Melo</p>
        <p className="text-zinc-400 text-[13px] leading-relaxed mt-1">{authorBio[locale]}</p>
        <div className="flex flex-wrap gap-x-4 gap-y-1 mt-2 text-[12px]">
          <a href="https://www.linkedin.com/in/victormeloio/" target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:underline">LinkedIn</a>
          <a href="https://www.youtube.com/@Victor_Melo_io" target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:underline">YouTube</a>
          <Link href="/booking" className="text-emerald-400 hover:underline">{book}</Link>
        </div>
      </div>
    </div>
  );
}

const tldrLabel = { en: "Quick answer", pt: "Resposta rápida", es: "Respuesta rápida" };

function TldrBox({ text, locale }: { text: string; locale: Locale }) {
  return (
    <div className="mb-8 rounded-2xl border-l-2 border-emerald-500 bg-emerald-500/[0.06] px-5 py-4">
      <p className="text-[11px] font-bold uppercase tracking-wide text-emerald-400 mb-1">{tldrLabel[locale]}</p>
      <p className="text-[15px] text-zinc-200 leading-relaxed">{text}</p>
    </div>
  );
}

const winnerCopy = {
  en: { head: "Our pick: GoHighLevel", sub: "Best all-in-one value for most agencies and service businesses.", btn: "Try GoHighLevel free" },
  pt: { head: "Nossa escolha: GoHighLevel", sub: "Melhor custo-benefício tudo-em-um pra maioria das agências e negócios de serviço.", btn: "Testar o GoHighLevel grátis" },
  es: { head: "Nuestra elección: GoHighLevel", sub: "Mejor relación todo-en-uno para la mayoría de agencias y negocios de servicios.", btn: "Probar GoHighLevel gratis" },
};

function WinnerCTA({ locale, affUrl }: { locale: Locale; affUrl: string }) {
  const w = winnerCopy[locale];
  return (
    <div className="mt-10 rounded-2xl border border-emerald-500/40 bg-emerald-500/[0.08] p-5 flex flex-col sm:flex-row sm:items-center gap-3 sm:justify-between">
      <div>
        <p className="text-white font-bold text-[16px]">🏆 {w.head}</p>
        <p className="text-zinc-300 text-[13px] mt-0.5">{w.sub}</p>
      </div>
      <a
        href={affUrl}
        target="_blank"
        rel="sponsored noopener noreferrer"
        data-cta="affiliate"
        data-placement="winner"
        className="shrink-0 inline-flex items-center justify-center px-5 py-2.5 bg-emerald-500 hover:bg-emerald-400 text-black font-bold rounded-xl text-[14px] transition-colors"
      >
        {w.btn}
      </a>
    </div>
  );
}

interface Props {
  post: Post;
  related: PostMeta[];
  adj: { prev: PostMeta | null; next: PostMeta | null };
  locale: Locale;
  available: Locale[];
}

export function BlogPostView({ post, related, adj, locale, available }: Props) {
  const c = ctaCopy[locale];
  const affUrl = affiliateUrl(post);
  const tldr = post.summary || post.description;
  const isComparison = /compar/i.test(post.category) || /\bvs\b|-vs-/.test(post.slug);
  const dateLocale = locale === "pt" ? "pt-BR" : locale === "es" ? "es-ES" : "en-US";

  return (
    <article className="mx-auto max-w-3xl px-5 pt-28 pb-20">
      {/* Breadcrumb + language switch — real per-language URLs (each indexable) */}
      <div className="flex items-center justify-between gap-4 mb-6 text-[13px]">
        <nav className="flex items-center gap-2 text-zinc-500">
          <Link href="/" className="hover:text-emerald-400">Home</Link>
          <span>/</span>
          <Link href={blogIndexUrl(locale)} className="hover:text-emerald-400">Blog</Link>
        </nav>
        {available.length > 1 && (
          <div className="flex items-center gap-1 rounded-full border border-white/10 p-0.5">
            {available.map((l) => (
              <Link
                key={l}
                href={blogUrl(post.slug, l)}
                hrefLang={l}
                className={`px-2.5 py-1 rounded-full text-[12px] font-semibold transition-colors ${
                  locale === l ? "bg-emerald-500 text-black" : "text-zinc-400 hover:text-white"
                }`}
              >
                {LANG_LABEL[l]}
              </Link>
            ))}
          </div>
        )}
      </div>

      <span className="inline-block text-[11px] font-semibold tracking-wide uppercase text-emerald-400 mb-3">
        {post.category}
      </span>
      <h1 className="text-3xl md:text-[40px] font-bold tracking-tight text-white leading-[1.15]">
        {post.title}
      </h1>
      <div className="flex items-center gap-3 mt-4 text-[13px] text-zinc-500">
        <span>{post.author}</span>
        <span>·</span>
        <span>{new Date(post.date).toLocaleDateString(dateLocale, { day: "numeric", month: "long", year: "numeric" })}</span>
        <span>·</span>
        <span className="inline-flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" />{post.readTime}</span>
      </div>

      <div className="h-px bg-white/10 my-8" />

      {tldr && <TldrBox text={tldr} locale={locale} />}

      <div>
        <ArticleBody content={post.content} locale={locale} affUrl={affUrl} />
      </div>

      {isComparison && <WinnerCTA locale={locale} affUrl={affUrl} />}

      {/* Footer CTA */}
      <div className="mt-12 rounded-2xl border border-emerald-500/30 bg-gradient-to-br from-emerald-500/[0.12] to-emerald-500/[0.04] p-8 text-center">
        <p className="text-white text-[20px] font-bold tracking-tight mb-1.5">{c.footHead}</p>
        <p className="text-zinc-400 text-[14px] mb-5">{c.footSub}</p>
        <a
          href={affUrl}
          target="_blank"
          rel="sponsored noopener noreferrer"
          data-cta="affiliate"
          data-placement="footer"
          className="inline-flex items-center justify-center px-7 py-3 bg-emerald-500 hover:bg-emerald-400 text-black font-bold rounded-xl transition-colors"
        >
          {c.footBtn}
        </a>
        <p className="mt-4 text-[11px] text-zinc-600">{c.disclosure}</p>
      </div>

      {/* Author E-E-A-T */}
      <AuthorBox locale={locale} />

      {/* Related */}
      {related.length > 0 && (
        <div className="mt-14">
          <h2 className="text-[15px] font-bold text-white mb-4">{c.related}</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {related.map((rp) => (
              <Link
                key={rp.slug}
                href={blogUrl(rp.slug, locale)}
                className="block rounded-xl border border-white/10 hover:border-emerald-500/40 bg-white/[0.02] hover:bg-white/[0.04] p-4 transition-colors"
              >
                <span className="text-[10px] font-semibold uppercase tracking-wide text-emerald-400">{rp.category}</span>
                <p className="text-[14px] text-zinc-200 font-medium leading-snug mt-1.5 line-clamp-2">{rp.title}</p>
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Prev / Next */}
      <div className="flex items-center justify-between mt-12 pt-6 border-t border-white/10 gap-4">
        {adj.prev ? (
          <Link href={blogUrl(adj.prev.slug, locale)} className="group flex items-center gap-2 text-[13px] text-zinc-400 hover:text-emerald-400">
            <ChevronLeft className="w-4 h-4" />
            <span className="line-clamp-1">{c.prev}</span>
          </Link>
        ) : <span />}
        {adj.next ? (
          <Link href={blogUrl(adj.next.slug, locale)} className="group flex items-center gap-2 text-[13px] text-zinc-400 hover:text-emerald-400 text-right">
            <span className="line-clamp-1">{c.next}</span>
            <ChevronRight className="w-4 h-4" />
          </Link>
        ) : <span />}
      </div>
    </article>
  );
}
