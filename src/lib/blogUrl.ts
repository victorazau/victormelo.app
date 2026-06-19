import type { Locale } from "./i18n";

// Per-language indexable URLs. English is the unprefixed default; pt/es are
// prefixed. These map 1:1 to the static routes and the sitemap/hreflang.
export function blogUrl(slug: string, locale: Locale): string {
  return locale === "en" ? `/blog/${slug}` : `/${locale}/blog/${slug}`;
}

export function blogIndexUrl(locale: Locale): string {
  return locale === "en" ? "/blog" : `/${locale}/blog`;
}

export const LOCALES: Locale[] = ["en", "pt", "es"];
