// Generates one conversion-focused affiliate blog post (EN) + PT/ES translations
// and writes the three .mdx files. Run by the scheduled GitHub Action.
//
//   ANTHROPIC_API_KEY=... node scripts/generate-post.mjs
//
// Prints the new slug to stdout and to $GITHUB_OUTPUT (slug=...). Exits 1 with
// no files written if it can't produce a fresh post (so the Action skips deploy).

import fs from "node:fs";
import path from "node:path";
import Anthropic from "@anthropic-ai/sdk";

const ROOT = process.cwd();
const POSTS = path.join(ROOT, "content/posts");
const STRATEGY = path.join(ROOT, "content/strategy/blog-strategy.md");
const MODEL = "claude-sonnet-4-6"; // high-volume content generation
const LANGS = ["en", "pt", "es"];

const client = new Anthropic(); // reads ANTHROPIC_API_KEY

function existingSlugs() {
  const dir = path.join(POSTS, "en");
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir).filter((f) => f.endsWith(".mdx")).map((f) => f.replace(/\.mdx$/, ""));
}

function slugify(s) {
  return s.toLowerCase().normalize("NFD").replace(/\p{Diacritic}/gu, "")
    .replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "").slice(0, 80);
}

// Pull the raw JSON object out of a model response, tolerant of code fences/prose.
function parseJson(text) {
  let t = text.trim();
  const fence = t.match(/```(?:json)?\s*([\s\S]*?)```/i);
  if (fence) t = fence[1].trim();
  const start = t.indexOf("{");
  const end = t.lastIndexOf("}");
  if (start === -1 || end === -1) throw new Error("no JSON object in response");
  return JSON.parse(t.slice(start, end + 1));
}

async function ask({ system, user, maxTokens = 8000 }) {
  const resp = await client.messages.create({
    model: MODEL,
    max_tokens: maxTokens,
    thinking: { type: "disabled" },
    system,
    messages: [{ role: "user", content: user }],
  });
  const block = resp.content.find((b) => b.type === "text");
  if (!block) throw new Error("no text block in response");
  return parseJson(block.text);
}

const SHARED_RULES = `
HARD RULES:
- Do NOT start the body with an H1 (# ...). The page renders the title separately. Start directly with the intro paragraph; use only ## and ###.
- Structure: intro (direct answer in 2-3 sentences) -> "## Key Takeaways" (3-5 bullets) -> 4-6 H2 sections -> at least one Markdown comparison TABLE when relevant -> "## Frequently Asked Questions" with 5+ Q&A where each pair is two consecutive lines "**Q:** ..." then "**A:** ..." -> "## Conclusion".
- Minimum 1200 words. First paragraph answers the title question directly.
- Honest, first-person, experience-based tone ("I've implemented...", "in my experience"). Recommend GoHighLevel where it genuinely fits; acknowledge where competitors win.
- Mention "GoHighLevel" naturally in the body (the site auto-links the first mention to the affiliate offer). Do NOT write any CTA, link, button or affiliate URL into the body.
- Accurate facts: GoHighLevel's free trial is 14 days (NEVER say 30). Plans: Starter $97/mo, Unlimited $297/mo, Agency Pro/SaaS $497/mo.
- AEO: direct answers, explicit definitions, concrete numbers, comparison tables, self-contained FAQ answers, H2s phrased as real search questions.
`;

async function main() {
  const strategy = fs.readFileSync(STRATEGY, "utf8");
  const covered = existingSlugs();

  // 1) Generate the English post.
  const en = await ask({
    maxTokens: 8000,
    system:
      "You are Victor Melo, a GoHighLevel implementation specialist writing honest, conversion-focused affiliate content for your personal blog. You write in clear, confident English." +
      SHARED_RULES +
      "\nReturn ONLY a JSON object, no prose, no code fences.",
    user:
      `Editorial strategy:\n${strategy}\n\n` +
      `Already-published slugs (do NOT repeat these topics): ${JSON.stringify(covered)}\n\n` +
      `Pick the single best next topic from the strategy's Topic queue that is NOT already published (or, if the queue is exhausted, a fresh high-commercial-intent comparison/review/alternatives topic about GoHighLevel). Write the full article now.\n\n` +
      `Return JSON with exactly these fields:\n` +
      `{"slug": "kebab-case-english-slug", "title": "...", "description": "150-160 char meta description", "category": "one of: Comparison, Review, Alternatives, Pricing, Guide", "keywords": ["6-8 SEO keywords"], "readTime": "N min", "body": "the full markdown body following the HARD RULES"}`,
  });

  if (!en.slug || !en.body || !en.title) throw new Error("EN generation missing fields");
  en.slug = slugify(en.slug);
  if (covered.includes(en.slug)) {
    console.error(`Slug "${en.slug}" already published — skipping this run.`);
    process.exit(1);
  }

  // 2) Translate to PT and ES.
  const translations = {};
  for (const lang of ["pt", "es"]) {
    const langName = lang === "pt" ? "Brazilian Portuguese" : "Spanish";
    translations[lang] = await ask({
      maxTokens: 8000,
      system:
        `You are a professional ${langName} translator for marketing/SEO content. Translate faithfully and naturally (not literally). Preserve the Markdown structure EXACTLY: headings, the comparison table, lists, blockquotes, bold, and the FAQ format with "**Q:**" / "**A:**" on consecutive lines. Keep product names (GoHighLevel, HubSpot, etc.), prices and "GoHighLevel" spelling unchanged. Do not add or remove sections. Return ONLY a JSON object.`,
      user:
        `Translate this article to ${langName}.\n\n` +
        `Return JSON: {"title": "...", "description": "...", "category": "translated category", "body": "translated markdown body"}\n\n` +
        `SOURCE:\n${JSON.stringify({ title: en.title, description: en.description, category: en.category, body: en.body })}`,
    });
  }

  // 3) Write the three .mdx files (shared slug).
  const date = new Date().toISOString().slice(0, 10);
  const q = (s) => `"${String(s).replace(/"/g, '\\"')}"`;
  const stripH1 = (b) => b.replace(/^\s*#\s+.*(\r?\n)+/, "");

  const write = (lang, data, category) => {
    const fm = [
      "---",
      `title: ${q(data.title)}`,
      `description: ${q(data.description)}`,
      `date: ${q(date)}`,
      `category: ${q(category)}`,
      `slug: ${q(en.slug)}`,
      `lang: ${q(lang)}`,
      `keywords: [${en.keywords.map(q).join(", ")}]`,
      `readTime: ${q(en.readTime || "7 min")}`,
      `author: "Victor Melo"`,
      "---",
      "",
      stripH1(data.body).trim(),
      "",
    ].join("\n");
    const dir = path.join(POSTS, lang);
    fs.mkdirSync(dir, { recursive: true });
    fs.writeFileSync(path.join(dir, `${en.slug}.mdx`), fm, "utf8");
  };

  write("en", en, en.category);
  write("pt", translations.pt, translations.pt.category || en.category);
  write("es", translations.es, translations.es.category || en.category);

  console.log(`Generated post: ${en.slug} (${en.title})`);
  if (process.env.GITHUB_OUTPUT) {
    fs.appendFileSync(process.env.GITHUB_OUTPUT, `slug=${en.slug}\n`);
    fs.appendFileSync(process.env.GITHUB_OUTPUT, `title=${en.title}\n`);
  }
}

main().catch((err) => {
  console.error("generate-post failed:", err?.message || err);
  process.exit(1);
});
