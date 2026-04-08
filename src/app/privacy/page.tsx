import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — Victor Melo",
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-[#030303]">
      <div className="max-w-3xl mx-auto px-6 py-24">
        <a href="/" className="inline-flex items-center gap-2 text-sm text-zinc-500 hover:text-white transition-colors mb-10">
          <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M19 12H5M12 19l-7-7 7-7" /></svg>
          Back to home
        </a>

        <h1 className="text-4xl font-bold text-white mb-2">Privacy Policy</h1>
        <p className="text-sm text-zinc-500 mb-12">Last updated: April 2026</p>

        <div className="prose-legal space-y-8 text-zinc-400 text-sm leading-relaxed">
          <section>
            <h2 className="text-lg font-semibold text-white mb-3">1. Introduction</h2>
            <p>Victor Melo / Vida Digital Solutions LLC (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;) respects your privacy and is committed to protecting your personal data. This privacy policy explains how we collect, use, and safeguard your information when you visit victormelo.app and any associated subdomains.</p>
            <p className="mt-2">This policy complies with applicable U.S. privacy laws (including Florida state regulations) and the Brazilian General Data Protection Law (Lei Geral de Proteção de Dados — LGPD, Law No. 13,709/2018).</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">2. Data Controller</h2>
            <p><strong className="text-zinc-300">Entity:</strong> Vida Digital Solutions LLC</p>
            <p><strong className="text-zinc-300">Location:</strong> Miami, FL, United States</p>
            <p><strong className="text-zinc-300">Contact:</strong> info@victormelo.app</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">3. Information We Collect</h2>
            <p>We may collect the following types of information:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li><strong className="text-zinc-300">Contact information:</strong> name, email, phone number — when you voluntarily submit it through our forms, WhatsApp, or booking calendar.</li>
              <li><strong className="text-zinc-300">Usage data:</strong> IP address, browser type, pages visited, time spent on site — collected automatically via analytics tools.</li>
              <li><strong className="text-zinc-300">Cookies and similar technologies:</strong> used for site functionality and analytics. See our <a href="/cookies" className="text-emerald-400 hover:underline">Cookie Policy</a>.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">4. How We Use Your Information</h2>
            <ul className="list-disc pl-5 space-y-1">
              <li>To respond to your inquiries and provide our services.</li>
              <li>To schedule and manage appointments via our booking system.</li>
              <li>To send follow-up communications related to your inquiry (never spam).</li>
              <li>To improve our website and user experience.</li>
              <li>To comply with legal obligations.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">5. Legal Basis for Processing (LGPD)</h2>
            <p>Under the LGPD, we process your data based on:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li><strong className="text-zinc-300">Consent:</strong> when you voluntarily provide your data through our forms.</li>
              <li><strong className="text-zinc-300">Legitimate interest:</strong> to improve our services and communicate with potential clients.</li>
              <li><strong className="text-zinc-300">Contract execution:</strong> when processing is necessary to fulfill a service agreement.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">6. Data Sharing</h2>
            <p>We do not sell your personal data. We may share information with:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li><strong className="text-zinc-300">Service providers:</strong> GoHighLevel (CRM), Cloudflare (hosting), Stripe (payments) — all bound by their own privacy policies.</li>
              <li><strong className="text-zinc-300">Legal requirements:</strong> if required by law, court order, or governmental authority.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">7. Data Retention</h2>
            <p>We retain personal data only for as long as necessary to fulfill the purposes described in this policy, or as required by law. You may request deletion at any time.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">8. Your Rights</h2>
            <p className="mb-2"><strong className="text-zinc-300">Under U.S. law:</strong> you have the right to access, correct, or request deletion of your personal information.</p>
            <p><strong className="text-zinc-300">Under LGPD (Brazil):</strong> you have the right to:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Confirm the existence of data processing.</li>
              <li>Access your data.</li>
              <li>Correct incomplete, inaccurate, or outdated data.</li>
              <li>Request anonymization, blocking, or deletion of unnecessary data.</li>
              <li>Request data portability.</li>
              <li>Withdraw consent at any time.</li>
              <li>File a complaint with the ANPD (Autoridade Nacional de Proteção de Dados).</li>
            </ul>
            <p className="mt-2">To exercise any of these rights, contact us at <a href="mailto:info@victormelo.app" className="text-emerald-400 hover:underline">info@victormelo.app</a>.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">9. International Data Transfers</h2>
            <p>Your data may be transferred to and processed in the United States. By using our website, you consent to this transfer. We ensure appropriate safeguards are in place as required by the LGPD for international transfers.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">10. Security</h2>
            <p>We implement appropriate technical and organizational measures to protect your personal data, including encryption (HTTPS/TLS), access controls, and secure hosting infrastructure.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">11. Changes to This Policy</h2>
            <p>We may update this policy from time to time. Changes will be posted on this page with an updated revision date.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">12. Contact</h2>
            <p>For questions about this privacy policy or to exercise your data rights:</p>
            <p className="mt-2"><strong className="text-zinc-300">Email:</strong> <a href="mailto:info@victormelo.app" className="text-emerald-400 hover:underline">info@victormelo.app</a></p>
            <p><strong className="text-zinc-300">Entity:</strong> Vida Digital Solutions LLC — Miami, FL, USA</p>
          </section>
        </div>
      </div>
    </div>
  );
}
