// Notifies Google's Indexing API to (re)crawl the given URLs for fast indexing.
// Best-effort: a no-op if GOOGLE_INDEXING_SA_JSON isn't set; never fails the build.
//
//   GOOGLE_INDEXING_SA_JSON='{...service account json...}' \
//     node scripts/google-index.mjs <url> [<url> ...]
//
// Requires: the service account must be an OWNER of a URL-prefix property
// (https://victormelo.app/) in Google Search Console, and the Indexing API
// must be enabled in its Google Cloud project.

import { JWT } from "google-auth-library";

const raw = process.env.GOOGLE_INDEXING_SA_JSON;
const urls = process.argv.slice(2);

if (!raw) {
  console.log("GOOGLE_INDEXING_SA_JSON not set — skipping Google Indexing API.");
  process.exit(0);
}
if (!urls.length) {
  console.log("No URLs passed — nothing to index.");
  process.exit(0);
}

let sa;
try {
  sa = JSON.parse(raw);
} catch {
  console.log("GOOGLE_INDEXING_SA_JSON is not valid JSON — skipping.");
  process.exit(0);
}

try {
  const client = new JWT({
    email: sa.client_email,
    key: sa.private_key,
    scopes: ["https://www.googleapis.com/auth/indexing"],
  });
  const { token } = await client.getAccessToken();

  for (const url of urls) {
    try {
      const r = await fetch("https://indexing.googleapis.com/v3/urlNotifications:publish", {
        method: "POST",
        headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
        body: JSON.stringify({ url, type: "URL_UPDATED" }),
      });
      console.log(`Indexing API ${r.status} for ${url}`);
      if (!r.ok) console.log("  ->", (await r.text()).slice(0, 300));
    } catch (e) {
      console.log(`Indexing API error for ${url}:`, e?.message || e);
    }
  }
} catch (e) {
  console.log("Google Indexing API auth failed (non-fatal):", e?.message || e);
}
