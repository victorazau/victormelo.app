import type { MetadataRoute } from "next";
import { getAllPosts, getAllSlugs } from "@/lib/posts";
import { blogUrl, blogIndexUrl } from "@/lib/blogUrl";
import type { Locale } from "@/lib/i18n";

const SITE = "https://victormelo.app";
const HREFLANG: Record<Locale, string> = { en: "en", pt: "pt-BR", es: "es" };
const LOCALES: Locale[] = ["en", "pt", "es"];

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  // Static marketing pages (preserved from the old hand-made sitemap).
  const staticPages: MetadataRoute.Sitemap = [
    { url: SITE, changeFrequency: "monthly", priority: 1 },
    { url: `${SITE}/booking`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE}/bio`, changeFrequency: "monthly", priority: 0.5 },
    { url: `${SITE}/privacy`, changeFrequency: "yearly", priority: 0.2 },
    { url: `${SITE}/terms`, changeFrequency: "yearly", priority: 0.2 },
    { url: `${SITE}/cookies`, changeFrequency: "yearly", priority: 0.2 },
  ];

  const indexes: MetadataRoute.Sitemap = LOCALES.map((l) => ({
    url: SITE + blogIndexUrl(l),
    changeFrequency: "daily",
    priority: 0.8,
  }));

  // One entry per (slug, language) with hreflang alternates linking the set.
  const langsBySlug = new Map<string, Set<Locale>>();
  for (const s of getAllSlugs()) {
    if (!langsBySlug.has(s.slug)) langsBySlug.set(s.slug, new Set());
    langsBySlug.get(s.slug)!.add(s.lang as Locale);
  }
  const dateBySlug = new Map<string, string>();
  for (const l of LOCALES) for (const p of getAllPosts(l)) if (!dateBySlug.has(p.slug)) dateBySlug.set(p.slug, p.date);

  const posts: MetadataRoute.Sitemap = [];
  for (const [slug, langs] of langsBySlug) {
    const languages: Record<string, string> = {};
    for (const l of LOCALES) if (langs.has(l)) languages[HREFLANG[l]] = SITE + blogUrl(slug, l);
    languages["x-default"] = SITE + blogUrl(slug, langs.has("en") ? "en" : [...langs][0]);
    for (const l of LOCALES) {
      if (!langs.has(l)) continue;
      posts.push({
        url: SITE + blogUrl(slug, l),
        lastModified: dateBySlug.get(slug),
        changeFrequency: "weekly",
        priority: 0.7,
        alternates: { languages },
      });
    }
  }

  return [...staticPages, ...indexes, ...posts];
}
