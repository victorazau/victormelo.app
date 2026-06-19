import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { I18nProvider } from "@/lib/i18n-context";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { BlogPostView } from "@/components/blog/BlogPost";
import { BlogIndex } from "@/components/blog/BlogIndex";
import {
  getAllPosts,
  getAllSlugs,
  getPostBySlug,
  getRelatedPosts,
  getAdjacentPosts,
} from "@/lib/posts";
import { blogUrl, blogIndexUrl } from "@/lib/blogUrl";
import type { Locale } from "@/lib/i18n";

const SITE = "https://victormelo.app";
const HREFLANG: Record<Locale, string> = { en: "en", pt: "pt-BR", es: "es" };

export function slugParams(locale: Locale) {
  return getAllSlugs()
    .filter((s) => s.lang === locale)
    .map((s) => ({ slug: s.slug }));
}

export function langsForSlug(slug: string): Locale[] {
  const have = new Set(getAllSlugs().filter((s) => s.slug === slug).map((s) => s.lang));
  return (["en", "pt", "es"] as Locale[]).filter((l) => have.has(l));
}

function hreflangAlternates(slug: string): Record<string, string> {
  const available = langsForSlug(slug);
  const langs: Record<string, string> = {};
  for (const l of available) langs[HREFLANG[l]] = SITE + blogUrl(slug, l);
  langs["x-default"] = SITE + blogUrl(slug, available.includes("en") ? "en" : available[0]);
  return langs;
}

export function postMetadata(slug: string, locale: Locale): Metadata {
  const post = getPostBySlug(slug, locale);
  if (!post) return { title: "Not Found" };
  const url = SITE + blogUrl(slug, locale);
  return {
    title: `${post.title} | Victor Melo`,
    description: post.description,
    keywords: post.keywords,
    alternates: { canonical: url, languages: hreflangAlternates(slug) },
    openGraph: {
      title: post.title,
      description: post.description,
      url,
      type: "article",
      publishedTime: post.date,
      authors: ["Victor Melo"],
      siteName: "Victor Melo",
      images: [`${SITE}/og-image.jpg`],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [`${SITE}/og-image.jpg`],
    },
  };
}

export function PostPageShell({ slug, locale }: { slug: string; locale: Locale }) {
  const post = getPostBySlug(slug, locale);
  if (!post) notFound();

  // FAQ extraction (lines with **Q:** / **A:**) for FAQ rich results.
  const faqItems: { question: string; answer: string }[] = [];
  const lines = post.content.split("\n");
  for (let i = 0; i < lines.length; i++) {
    if (lines[i].includes("**Q:**")) {
      const question = lines[i].replace(/\*\*Q:\*\*\s*/, "").trim();
      const answer = (lines[i + 1] || "").replace(/\*\*A:\*\*\s*/, "").trim();
      if (question && answer) faqItems.push({ question, answer });
    }
  }

  const url = SITE + blogUrl(slug, locale);
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    image: [`${SITE}/og-image.jpg`],
    datePublished: post.date,
    dateModified: post.date,
    inLanguage: HREFLANG[locale],
    author: {
      "@type": "Person",
      name: "Victor Melo",
      url: SITE,
      jobTitle: "GoHighLevel Implementation Specialist",
      sameAs: [
        "https://www.linkedin.com/in/victormeloio/",
        "https://www.youtube.com/@Victor_Melo_io",
        "https://instagram.com/victor.melo.io",
      ],
    },
    publisher: { "@type": "Organization", name: "Vida Digital Solutions LLC", url: "https://vidadigitalsolutions.com" },
    mainEntityOfPage: url,
  };
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE },
      { "@type": "ListItem", position: 2, name: "Blog", item: SITE + blogIndexUrl(locale) },
      { "@type": "ListItem", position: 3, name: post.title, item: url },
    ],
  };
  const faqJsonLd = faqItems.length
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        inLanguage: HREFLANG[locale],
        mainEntity: faqItems.map((it) => ({
          "@type": "Question",
          name: it.question,
          acceptedAnswer: { "@type": "Answer", text: it.answer },
        })),
      }
    : null;

  return (
    <I18nProvider initialLocale={locale}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      {faqJsonLd && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />}
      <Navbar />
      <main>
        <BlogPostView
          post={post}
          related={getRelatedPosts(slug, post.category, locale)}
          adj={getAdjacentPosts(slug, locale)}
          locale={locale}
          available={langsForSlug(slug)}
        />
      </main>
      <Footer />
    </I18nProvider>
  );
}

const INDEX_COPY = {
  en: {
    title: "Blog — GoHighLevel Reviews, Comparisons & Guides | Victor Melo",
    description: "Honest GoHighLevel reviews, comparisons (vs HubSpot, ClickFunnels and more), pricing breakdowns and guides to decide if GHL fits your business.",
  },
  pt: {
    title: "Blog — Reviews e Comparativos de GoHighLevel | Victor Melo",
    description: "Reviews honestos do GoHighLevel, comparativos (vs HubSpot, ClickFunnels e mais), análises de preço e guias para decidir se o GHL serve pro seu negócio.",
  },
  es: {
    title: "Blog — Reseñas y Comparativas de GoHighLevel | Victor Melo",
    description: "Reseñas honestas de GoHighLevel, comparativas (vs HubSpot, ClickFunnels y más), análisis de precios y guías para decidir si GHL es para tu negocio.",
  },
};

export function indexMetadata(locale: Locale): Metadata {
  const url = SITE + blogIndexUrl(locale);
  const t = INDEX_COPY[locale];
  return {
    title: t.title,
    description: t.description,
    alternates: {
      canonical: url,
      languages: {
        en: `${SITE}/blog`,
        "pt-BR": `${SITE}/pt/blog`,
        es: `${SITE}/es/blog`,
        "x-default": `${SITE}/blog`,
      },
    },
    openGraph: { title: t.title, description: t.description, url, siteName: "Victor Melo", type: "website" },
  };
}

export function IndexPageShell({ locale }: { locale: Locale }) {
  return (
    <I18nProvider initialLocale={locale}>
      <Navbar />
      <main>
        <BlogIndex posts={getAllPosts(locale)} locale={locale} />
      </main>
      <Footer />
    </I18nProvider>
  );
}
