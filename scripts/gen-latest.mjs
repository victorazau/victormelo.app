// Writes src/data/latest-posts.json with the latest posts per language, so the
// (client) homepage teaser can import it. Runs as `prebuild` on every build, so
// it stays current as the automation adds posts.

import fs from "node:fs";
import path from "node:path";

const POSTS = path.join(process.cwd(), "content/posts");
const OUT = path.join(process.cwd(), "src/data/latest-posts.json");

function field(content, key) {
  const m = content.match(new RegExp(`^${key}:\\s*"?(.+?)"?\\s*$`, "m"));
  return m ? m[1] : "";
}

function latest(lang, n = 3) {
  const dir = path.join(POSTS, lang);
  if (!fs.existsSync(dir)) return [];
  const items = fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => {
      const c = fs.readFileSync(path.join(dir, f), "utf8");
      return {
        slug: f.replace(/\.mdx$/, ""),
        title: field(c, "title"),
        category: field(c, "category"),
        date: field(c, "date"),
      };
    });
  items.sort((a, b) => (a.date < b.date ? 1 : -1));
  return items.slice(0, n);
}

const data = { en: latest("en"), pt: latest("pt"), es: latest("es") };
fs.mkdirSync(path.dirname(OUT), { recursive: true });
fs.writeFileSync(OUT, JSON.stringify(data, null, 2));
console.log(`gen-latest: wrote ${data.en.length} EN posts to ${path.relative(process.cwd(), OUT)}`);
