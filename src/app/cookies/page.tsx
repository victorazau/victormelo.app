import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie Policy — Victor Melo",
};

export default function CookiePolicy() {
  return (
    <div className="min-h-screen bg-[#030303]">
      <div className="max-w-3xl mx-auto px-6 py-24">
        <a href="/" className="inline-flex items-center gap-2 text-sm text-zinc-500 hover:text-white transition-colors mb-10">
          <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M19 12H5M12 19l-7-7 7-7" /></svg>
          Back to home
        </a>

        <h1 className="text-4xl font-bold text-white mb-2">Cookie Policy</h1>
        <p className="text-sm text-zinc-500 mb-12">Last updated: April 2026</p>

        <div className="prose-legal space-y-8 text-zinc-400 text-sm leading-relaxed">
          <section>
            <h2 className="text-lg font-semibold text-white mb-3">1. What Are Cookies</h2>
            <p>Cookies are small text files placed on your device when you visit a website. They help the site remember your preferences and understand how you interact with the content. Cookies are widely used across the internet and are essential for many website features.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">2. How We Use Cookies</h2>
            <p>victormelo.app uses cookies for the following purposes:</p>

            <div className="mt-4 space-y-4">
              <div className="bg-white/[0.03] border border-white/[0.08] rounded-xl p-4">
                <p className="text-white font-medium text-sm">Essential Cookies</p>
                <p className="text-xs text-zinc-500 mt-1">Required for the website to function. These cannot be disabled.</p>
                <p className="text-xs text-zinc-600 mt-1">Examples: language preferences, session management.</p>
              </div>

              <div className="bg-white/[0.03] border border-white/[0.08] rounded-xl p-4">
                <p className="text-white font-medium text-sm">Analytics Cookies</p>
                <p className="text-xs text-zinc-500 mt-1">Help us understand how visitors interact with the site.</p>
                <p className="text-xs text-zinc-600 mt-1">Provider: Cloudflare Web Analytics (privacy-focused, no personal data collected).</p>
              </div>

              <div className="bg-white/[0.03] border border-white/[0.08] rounded-xl p-4">
                <p className="text-white font-medium text-sm">Third-Party Cookies</p>
                <p className="text-xs text-zinc-500 mt-1">Set by external services embedded on our site.</p>
                <p className="text-xs text-zinc-600 mt-1">Examples: GoHighLevel (booking calendar), WhatsApp widget. These services have their own cookie policies.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">3. Managing Cookies</h2>
            <p>You can control and delete cookies through your browser settings. Please note that disabling cookies may affect the functionality of some features on our website.</p>
            <p className="mt-2">Common browser cookie settings:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li><strong className="text-zinc-300">Chrome:</strong> Settings → Privacy and Security → Cookies</li>
              <li><strong className="text-zinc-300">Firefox:</strong> Settings → Privacy & Security → Cookies</li>
              <li><strong className="text-zinc-300">Safari:</strong> Preferences → Privacy → Cookies</li>
              <li><strong className="text-zinc-300">Edge:</strong> Settings → Cookies and Site Permissions</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">4. LGPD Compliance</h2>
            <p>Under the Brazilian General Data Protection Law (LGPD), cookies that collect personal data require a legal basis for processing. We use cookies based on:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li><strong className="text-zinc-300">Legitimate interest:</strong> for analytics that help us improve the website.</li>
              <li><strong className="text-zinc-300">Necessity:</strong> for essential cookies required for site functionality.</li>
            </ul>
            <p className="mt-2">You may exercise your rights under the LGPD as described in our <a href="/privacy" className="text-emerald-400 hover:underline">Privacy Policy</a>.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">5. Changes to This Policy</h2>
            <p>We may update this Cookie Policy from time to time. Changes will be posted on this page with an updated revision date.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">6. Contact</h2>
            <p>For questions about our use of cookies:</p>
            <p className="mt-2"><strong className="text-zinc-300">Email:</strong> <a href="mailto:info@victormelo.app" className="text-emerald-400 hover:underline">info@victormelo.app</a></p>
            <p><strong className="text-zinc-300">Entity:</strong> Vida Digital Solutions LLC — Miami, FL, USA</p>
          </section>
        </div>
      </div>
    </div>
  );
}
