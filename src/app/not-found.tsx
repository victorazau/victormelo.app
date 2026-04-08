export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#030303] flex items-center justify-center">
      <div className="text-center px-6">
        <p className="text-emerald-400 font-mono text-sm tracking-widest uppercase mb-4">
          404
        </p>
        <h1 className="text-4xl sm:text-6xl font-bold text-white mb-4">
          Page not found
        </h1>
        <p className="text-zinc-400 max-w-md mx-auto mb-8">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <a
          href="/"
          className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-white font-semibold px-8 py-3.5 rounded-full transition-all hover:shadow-lg hover:shadow-emerald-500/25"
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
