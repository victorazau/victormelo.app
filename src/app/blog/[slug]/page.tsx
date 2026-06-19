import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { I18nProvider } from "@/lib/i18n-context";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { BlogPostView } from "@/components/blog/BlogPost";
import {
  getAllSlugs,
  getPostBySlug,
  getRelatedPosts,
  getAdjacentPosts,
} from "@/lib/posts";

export function generateStaticParams() {
  const seen = new Set<string>();
  return getAllSlugs()
    .filter((s) => (seen.has(s.slug) ? false : (seen.add(s.slug), true)))
    .map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post =
    getPostBySlug(slug, "en") || getPostBySlug(slug, "pt") || getPostBySlug(slug, "es");
  if (!post) return { title: "Not Found" };

  const url = `https://victormelo.app/blog/${post.slug}`;
  return {
    title: `${post.title} | Victor Melo`,
    description: post.description,
    keywords: post.keywords,
    alternates: { canonical: url },
    openGraph: {
      title: post.title,
      description: post.description,
      url,
      type: "article",
      publishedTime: post.date,
      authors: ["Victor Melo"],
      siteName: "Victor Melo",
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
    },
  };
}

export default async function BlogSlugPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const postEN = getPostBySlug(slug, "en");
  const postPT = getPostBySlug(slug, "pt");
  const postES = getPostBySlug(slug, "es");
  if (!postEN && !postPT && !postES) notFound();

  const main = postEN || postPT || postES!;

  // FAQ extraction (lines with **Q:** / **A:**) for FAQ rich results
  const faqItems: { question: string; answer: string }[] = [];
  const lines = main.content.split("\n");
  for (let i = 0; i < lines.length; i++) {
    if (lines[i].includes("**Q:**")) {
      const question = lines[i].replace(/\*\*Q:\*\*\s*/, "").trim();
      const answer = (lines[i + 1] || "").replace(/\*\*A:\*\*\s*/, "").trim();
      if (question && answer) faqItems.push({ question, answer });
    }
  }

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: main.title,
    description: main.description,
    datePublished: main.date,
    author: { "@type": "Person", name: "Victor Melo", url: "https://victormelo.app" },
    publisher: {
      "@type": "Organization",
      name: "Vida Digital Solutions LLC",
      url: "https://vidadigitalsolutions.com",
    },
    mainEntityOfPage: `https://victormelo.app/blog/${main.slug}`,
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://victormelo.app" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://victormelo.app/blog" },
      { "@type": "ListItem", position: 3, name: main.title, item: `https://victormelo.app/blog/${main.slug}` },
    ],
  };

  const faqJsonLd =
    faqItems.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqItems.map((it) => ({
            "@type": "Question",
            name: it.question,
            acceptedAnswer: { "@type": "Answer", text: it.answer },
          })),
        }
      : null;

  return (
    <I18nProvider>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      {faqJsonLd && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      )}
      <Navbar />
      <main>
        <BlogPostView
          postEN={postEN}
          postPT={postPT}
          postES={postES}
          relatedEN={getRelatedPosts(slug, main.category, "en")}
          relatedPT={getRelatedPosts(slug, main.category, "pt")}
          relatedES={getRelatedPosts(slug, main.category, "es")}
          adjEN={getAdjacentPosts(slug, "en")}
          adjPT={getAdjacentPosts(slug, "pt")}
          adjES={getAdjacentPosts(slug, "es")}
        />
      </main>
      <Footer />
    </I18nProvider>
  );
}
