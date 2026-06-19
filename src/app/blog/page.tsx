import type { Metadata } from "next";
import { I18nProvider } from "@/lib/i18n-context";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { BlogIndex } from "@/components/blog/BlogIndex";
import { getAllPosts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Blog — GoHighLevel Reviews, Comparisons & Guides | Victor Melo",
  description:
    "Honest GoHighLevel reviews, comparisons (GoHighLevel vs HubSpot, ClickFunnels and more), pricing breakdowns and guides to help you decide if GHL is right for your business.",
  alternates: { canonical: "https://victormelo.app/blog" },
  openGraph: {
    title: "Blog — GoHighLevel Reviews, Comparisons & Guides",
    description: "Honest GoHighLevel reviews, comparisons, pricing and guides.",
    url: "https://victormelo.app/blog",
    siteName: "Victor Melo",
    type: "website",
  },
};

export default function BlogIndexPage() {
  return (
    <I18nProvider>
      <Navbar />
      <main>
        <BlogIndex
          postsEN={getAllPosts("en")}
          postsPT={getAllPosts("pt")}
          postsES={getAllPosts("es")}
        />
      </main>
      <Footer />
    </I18nProvider>
  );
}
