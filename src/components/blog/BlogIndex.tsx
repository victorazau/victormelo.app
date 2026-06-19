import Link from "next/link";
import type { Locale } from "@/lib/i18n";
import { blogUrl } from "@/lib/blogUrl";
import type { PostMeta } from "@/lib/posts";

const copy = {
  en: { title: "Blog", sub: "Honest reviews, comparisons and guides on GoHighLevel and CRM automation.", empty: "Posts coming soon." },
  pt: { title: "Blog", sub: "Reviews honestos, comparativos e guias sobre GoHighLevel e automação de CRM.", empty: "Posts em breve." },
  es: { title: "Blog", sub: "Reseñas honestas, comparativas y guías sobre GoHighLevel y automatización de CRM.", empty: "Publicaciones próximamente." },
};

export function BlogIndex({ posts, locale }: { posts: PostMeta[]; locale: Locale }) {
  const c = copy[locale];
  const dateLocale = locale === "pt" ? "pt-BR" : locale === "es" ? "es-ES" : "en-US";

  return (
    <section className="mx-auto max-w-5xl px-5 pt-28 pb-20">
      <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white">{c.title}</h1>
      <p className="mt-3 text-zinc-400 text-[16px] max-w-2xl">{c.sub}</p>

      <div className="mt-10 grid gap-4 sm:grid-cols-2">
        {posts.length === 0 && <p className="text-zinc-500">{c.empty}</p>}
        {posts.map((p) => (
          <Link
            key={p.slug}
            href={blogUrl(p.slug, locale)}
            className="group flex flex-col rounded-2xl border border-white/10 hover:border-emerald-500/40 bg-white/[0.02] hover:bg-white/[0.04] p-6 transition-colors"
          >
            <span className="text-[11px] font-semibold uppercase tracking-wide text-emerald-400">{p.category}</span>
            <h2 className="mt-2 text-[18px] font-bold text-white leading-snug group-hover:text-emerald-300 transition-colors">
              {p.title}
            </h2>
            <p className="mt-2 text-[14px] text-zinc-400 leading-relaxed line-clamp-2">{p.description}</p>
            <div className="mt-4 flex items-center gap-2 text-[12px] text-zinc-500">
              <span>{new Date(p.date).toLocaleDateString(dateLocale, { day: "numeric", month: "short", year: "numeric" })}</span>
              <span>·</span>
              <span>{p.readTime}</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
