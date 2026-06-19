import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Removed — Victor Melo",
  robots: { index: false, follow: false },
};

export default function Gone() {
  return (
    <div className="min-h-screen bg-[#030303] flex items-center justify-center">
      <div className="text-center px-6">
        <p className="text-emerald-400 font-mono text-sm tracking-widest uppercase mb-4">
          410 — Gone
        </p>
        <h1 className="text-4xl sm:text-6xl font-bold text-white mb-4">
          This page was removed
        </h1>
        <p className="text-zinc-400 max-w-md mx-auto mb-8">
          This content is no longer available. Visit the homepage to see what&apos;s new.
        </p>
        <a
          href="/"
          className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-white font-semibold px-8 py-3.5 rounded-full transition-all"
        >
          <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
          Back to Home
        </a>
      </div>
    </div>
  );
}
