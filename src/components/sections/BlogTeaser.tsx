"use client";

import Link from "next/link";
import { useI18n } from "@/lib/i18n-context";
import { blogUrl, blogIndexUrl } from "@/lib/blogUrl";
import type { Locale } from "@/lib/i18n";
import latest from "@/data/latest-posts.json";

type Item = { slug: string; title: string; category: string; date: string };

const copy: Record<Locale, { h: string; sub: string; all: string }> = {
  en: { h: "From the blog", sub: "Honest GoHighLevel reviews, comparisons & guides.", all: "Read the blog →" },
  pt: { h: "Do blog", sub: "Reviews, comparativos e guias honestos de GoHighLevel.", all: "Ver o blog →" },
  es: { h: "Del blog", sub: "Reseñas, comparativas y guías honestas de GoHighLevel.", all: "Ver el blog →" },
};

export default function BlogTeaser() {
  const { locale } = useI18n();
  const data = latest as Record<Locale, Item[]>;
  const posts = data[locale]?.length ? data[locale] : data.en;
  if (!posts || posts.length === 0) return null;
  const c = copy[locale];

  return (
    <section id="blog" className="mx-auto max-w-5xl px-5 py-16">
      <div className="flex items-end justify-between gap-4 mb-6">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-white">{c.h}</h2>
          <p className="text-zinc-400 text-[14px] mt-1">{c.sub}</p>
        </div>
        <Link href={blogIndexUrl(locale)} className="shrink-0 text-emerald-400 hover:underline text-[13px] font-medium">
          {c.all}
        </Link>
      </div>
      <div className="grid gap-3 sm:grid-cols-3">
        {posts.map((p) => (
          <Link
            key={p.slug}
            href={blogUrl(p.slug, locale)}
            className="group rounded-2xl border border-white/10 hover:border-emerald-500/40 bg-white/[0.02] hover:bg-white/[0.04] p-5 transition-colors"
          >
            <span className="text-[10px] font-semibold uppercase tracking-wide text-emerald-400">{p.category}</span>
            <p className="mt-2 text-[15px] font-bold text-white leading-snug group-hover:text-emerald-300 transition-colors line-clamp-3">
              {p.title}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}
