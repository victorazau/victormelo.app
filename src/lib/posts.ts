import fs from "fs";
import path from "path";
import matter from "gray-matter";

export interface PostMeta {
  title: string;
  description: string;
  date: string;
  category: string;
  slug: string;
  lang: string;
  keywords: string[];
  readTime: string;
  author: string;
}

export interface Post extends PostMeta {
  content: string;
}

const postsDirectory = path.join(process.cwd(), "content/posts");

export function getAllPosts(lang: string = "en"): PostMeta[] {
  const langDir = path.join(postsDirectory, lang);
  if (!fs.existsSync(langDir)) return [];

  const filenames = fs.readdirSync(langDir).filter((f) => f.endsWith(".mdx"));
  const posts = filenames.map((filename) => {
    const fileContents = fs.readFileSync(path.join(langDir, filename), "utf8");
    const { data } = matter(fileContents);
    return data as PostMeta;
  });

  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getPostBySlug(slug: string, lang: string = "en"): Post | null {
  const langDir = path.join(postsDirectory, lang);
  if (!fs.existsSync(langDir)) return null;

  const filenames = fs.readdirSync(langDir).filter((f) => f.endsWith(".mdx"));
  for (const filename of filenames) {
    const fileContents = fs.readFileSync(path.join(langDir, filename), "utf8");
    const { data, content } = matter(fileContents);
    if (data.slug === slug) {
      return { ...(data as PostMeta), content };
    }
  }
  return null;
}

export function getAllSlugs(): { slug: string; lang: string }[] {
  const slugs: { slug: string; lang: string }[] = [];
  for (const lang of ["en", "pt", "es"]) {
    const langDir = path.join(postsDirectory, lang);
    if (!fs.existsSync(langDir)) continue;
    for (const filename of fs.readdirSync(langDir).filter((f) => f.endsWith(".mdx"))) {
      const fileContents = fs.readFileSync(path.join(langDir, filename), "utf8");
      const { data } = matter(fileContents);
      slugs.push({ slug: data.slug, lang });
    }
  }
  return slugs;
}

export function getRelatedPosts(
  slug: string,
  category: string,
  lang: string = "en",
  limit: number = 4
): PostMeta[] {
  const posts = getAllPosts(lang);
  const sameCat = posts.filter((p) => p.slug !== slug && p.category === category);
  const others = posts.filter((p) => p.slug !== slug && p.category !== category);
  return [...sameCat, ...others].slice(0, limit);
}

export function getAdjacentPosts(
  slug: string,
  lang: string = "en"
): { prev: PostMeta | null; next: PostMeta | null } {
  const posts = getAllPosts(lang);
  const index = posts.findIndex((p) => p.slug === slug);
  return {
    prev: index < posts.length - 1 ? posts[index + 1] : null,
    next: index > 0 ? posts[index - 1] : null,
  };
}
