"use client";

import { useEffect } from "react";

export default function BookingPage() {
  useEffect(() => {
    // Load GHL form embed script
    const script = document.createElement("script");
    script.src = "https://link.msgsndr.com/js/form_embed.js";
    script.type = "text/javascript";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#030303] flex flex-col items-center">
      {/* Header */}
      <div className="w-full max-w-3xl mx-auto px-6 pt-24 pb-8 text-center">
        {/* Back link */}
        <a
          href="/"
          className="inline-flex items-center gap-2 text-sm text-zinc-500 hover:text-white transition-colors mb-10"
        >
          <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
          Back to home
        </a>

        {/* Photo */}
        <div className="mb-6 flex justify-center">
          <div className="w-24 h-24 rounded-full overflow-hidden ring-2 ring-emerald-500/30 ring-offset-4 ring-offset-[#030303]">
            <img
              src="/victor-melo.webp"
              alt="Victor Melo"
              className="w-full h-full object-cover"
              loading="eager"
            />
          </div>
        </div>

        <h1 className="text-2xl sm:text-3xl font-bold text-white mb-2">
          Book a Free Strategy Call
        </h1>
        <p className="text-zinc-400 max-w-md mx-auto">
          30 minutes — no commitment. Let&apos;s map out how automation can scale your business.
        </p>
      </div>

      {/* Calendar embed */}
      <div className="w-full max-w-3xl mx-auto px-6 pb-24">
        <div className="glass-card overflow-hidden">
          <iframe
            src="https://api.leadconnectorhq.com/widget/booking/PnKXN9KLgKbdQXLoELMR"
            style={{ width: "100%", minHeight: "700px", border: "none", overflow: "hidden" }}
            scrolling="no"
            id="PnKXN9KLgKbdQXLoELMR_1775665797192"
            title="Book a Strategy Call"
          />
        </div>
      </div>
    </div>
  );
}
