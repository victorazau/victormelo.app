"use client";

import Link from "next/link";
import ReactMarkdown, { type Components } from "react-markdown";
import remarkGfm from "remark-gfm";
import { Clock, ChevronLeft, ChevronRight } from "lucide-react";
import type { Locale } from "@/lib/i18n";
import { blogUrl, blogIndexUrl } from "@/lib/blogUrl";
import type { Post, PostMeta } from "@/lib/posts";

// Affiliate offer (Victor's personal GHL affiliate token). `/pricing` shows all
// three plans (Starter $97 / Unlimited $297 / Agency Pro $497) so the reader
// self-selects the entry plan. GHL changes these paths over time — keep it here.
const AFFILIATE_URL = "https://www.gohighlevel.com/pricing?fp_ref=victormelo";

const ctaCopy = {
  en: {
    midText: "Want to try GoHighLevel yourself? Plans start at $97/mo, with a 14-day free trial.",
    midBtn: "See plans & start free →",
    footHead: "Ready to try GoHighLevel?",
    footSub: "Plans from $97/mo. Start with a 14-day free trial — no commitment.",
    footBtn: "See plans & start free",
    disclosure: "Affiliate link — I may earn a commission at no extra cost to you.",
    related: "Keep reading",
    prev: "Previous",
    next: "Next",
  },
  pt: {
    midText: "Quer testar o GoHighLevel? Os planos começam em $97/mês, com 14 dias grátis.",
    midBtn: "Ver planos e testar grátis →",
    footHead: "Pronto para testar o GoHighLevel?",
    footSub: "Planos a partir de $97/mês. Comece com 14 dias grátis — sem compromisso.",
    footBtn: "Ver planos e testar grátis",
    disclosure: "Link de afiliado — posso receber comissão sem custo extra para você.",
    related: "Continue lendo",
    prev: "Anterior",
    next: "Próximo",
  },
  es: {
    midText: "¿Quieres probar GoHighLevel? Los planes empiezan en $97/mes, con 14 días gratis.",
    midBtn: "Ver planes y probar gratis →",
    footHead: "¿Listo para probar GoHighLevel?",
    footSub: "Planes desde $97/mes. Empieza con 14 días gratis — sin compromiso.",
    footBtn: "Ver planes y probar gratis",
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
function linkFirstGHLMention(md: string): string {
  const lines = md.split("\n");
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (line.startsWith("#") || line.trim().startsWith("|") || line.trim().startsWith(">")) continue;
    if (/\]\(/.test(line) && /\[[^\]]*GoHighLevel/i.test(line)) continue;
    const idx = line.indexOf("GoHighLevel");
    if (idx === -1) continue;
    lines[i] = line.slice(0, idx) + `[GoHighLevel](${AFFILIATE_URL})` + line.slice(idx + "GoHighLevel".length);
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

function InlineAffiliateCTA({ locale }: { locale: Locale }) {
  const c = ctaCopy[locale];
  return (
    <div className="my-9 rounded-2xl border border-emerald-500/30 bg-emerald-500/[0.07] p-5 flex flex-col sm:flex-row sm:items-center gap-4 sm:justify-between">
      <p className="text-[15px] text-zinc-200 font-medium leading-snug">{c.midText}</p>
      <a
        href={AFFILIATE_URL}
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

function ArticleBody({ content, locale }: { content: string; locale: Locale }) {
  const linked = linkFirstGHLMention(stripLeadingH1(content));
  const [part1, part2] = splitAtMidH2(linked);
  if (!part2) return <Markdown>{part1}</Markdown>;
  return (
    <>
      <Markdown>{part1}</Markdown>
      <InlineAffiliateCTA locale={locale} />
      <Markdown>{part2}</Markdown>
    </>
  );
}

const LANG_LABEL: Record<Locale, string> = { en: "EN", pt: "PT", es: "ES" };

interface Props {
  post: Post;
  related: PostMeta[];
  adj: { prev: PostMeta | null; next: PostMeta | null };
  locale: Locale;
  available: Locale[];
}

export function BlogPostView({ post, related, adj, locale, available }: Props) {
  const c = ctaCopy[locale];
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

      <div>
        <ArticleBody content={post.content} locale={locale} />
      </div>

      {/* Footer CTA */}
      <div className="mt-12 rounded-2xl border border-emerald-500/30 bg-gradient-to-br from-emerald-500/[0.12] to-emerald-500/[0.04] p-8 text-center">
        <p className="text-white text-[20px] font-bold tracking-tight mb-1.5">{c.footHead}</p>
        <p className="text-zinc-400 text-[14px] mb-5">{c.footSub}</p>
        <a
          href={AFFILIATE_URL}
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
