import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service — Victor Melo",
};

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-[#030303]">
      <div className="max-w-3xl mx-auto px-6 py-24">
        <a href="/" className="inline-flex items-center gap-2 text-sm text-zinc-500 hover:text-white transition-colors mb-10">
          <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M19 12H5M12 19l-7-7 7-7" /></svg>
          Back to home
        </a>

        <h1 className="text-4xl font-bold text-white mb-2">Terms of Service</h1>
        <p className="text-sm text-zinc-500 mb-12">Last updated: April 2026</p>

        <div className="prose-legal space-y-8 text-zinc-400 text-sm leading-relaxed">
          <section>
            <h2 className="text-lg font-semibold text-white mb-3">1. Agreement to Terms</h2>
            <p>By accessing or using victormelo.app (&quot;the Website&quot;), you agree to be bound by these Terms of Service. If you do not agree, please do not use the Website. These terms are governed by the laws of the State of Florida, United States, and, where applicable, by Brazilian law (including the Brazilian Civil Code and Consumer Protection Code).</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">2. Services</h2>
            <p>Victor Melo / Vida Digital Solutions LLC provides business automation consulting, GoHighLevel implementation, CRM setup, system integrations, and related digital services. The specific scope, deliverables, timeline, and pricing for each engagement are defined in individual service agreements or proposals.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">3. Use of the Website</h2>
            <p>You agree to use the Website only for lawful purposes. You may not:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Use the Website to transmit harmful, offensive, or illegal content.</li>
              <li>Attempt to gain unauthorized access to our systems.</li>
              <li>Reproduce, distribute, or create derivative works of our content without permission.</li>
              <li>Use automated tools to scrape or extract data from the Website.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">4. Intellectual Property</h2>
            <p>All content on this Website — including text, graphics, logos, code, and design — is the property of Victor Melo / Vida Digital Solutions LLC and is protected by U.S. and international copyright laws. You may not reproduce or redistribute any content without written permission.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">5. Service Agreements</h2>
            <p>Engagement of our professional services requires a separate written agreement. These Terms of Service govern your use of the Website only, not the delivery of consulting or implementation services. Payment terms, milestones, and deliverables are defined in individual contracts signed via ZapSign or equivalent digital signature platforms.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">6. Payments</h2>
            <p>Payment for services is milestone-based unless otherwise agreed. We accept payments via Stripe, Wise, wire transfer, and PIX (for Brazilian clients). All prices are quoted in the currency agreed upon in the service contract (USD, EUR, or BRL).</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">7. Limitation of Liability</h2>
            <p>To the maximum extent permitted by law, Victor Melo / Vida Digital Solutions LLC shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of your use of the Website or our services. Our total liability shall not exceed the amount paid by you for services in the 12 months preceding the claim.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">8. Disclaimer</h2>
            <p>The Website and its content are provided &quot;as is&quot; without warranties of any kind. We do not guarantee that the Website will be error-free, uninterrupted, or free of harmful components. Results from our services may vary and are not guaranteed.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">9. Governing Law & Dispute Resolution</h2>
            <p><strong className="text-zinc-300">For U.S. clients:</strong> These terms are governed by the laws of the State of Florida. Any disputes shall be resolved in the courts of Miami-Dade County, Florida.</p>
            <p className="mt-2"><strong className="text-zinc-300">For Brazilian clients:</strong> These terms also comply with Brazilian consumer protection laws (Código de Defesa do Consumidor). Disputes may be resolved in the consumer&apos;s jurisdiction as provided by Brazilian law.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">10. Changes to Terms</h2>
            <p>We reserve the right to modify these terms at any time. Changes take effect upon posting to this page. Continued use of the Website constitutes acceptance of the updated terms.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">11. Contact</h2>
            <p>For questions about these terms:</p>
            <p className="mt-2"><strong className="text-zinc-300">Email:</strong> <a href="mailto:info@victormelo.app" className="text-emerald-400 hover:underline">info@victormelo.app</a></p>
            <p><strong className="text-zinc-300">Entity:</strong> Vida Digital Solutions LLC — Miami, FL, USA</p>
          </section>
        </div>
      </div>
    </div>
  );
}
