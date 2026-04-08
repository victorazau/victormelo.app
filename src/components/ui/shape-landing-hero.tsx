"use client";

import { cn } from "@/lib/utils";

function ElegantShape({
  className,
  delay = 0,
  width = 400,
  height = 100,
  rotate = 0,
  gradient = "from-white/[0.08]",
}: {
  className?: string;
  delay?: number;
  width?: number;
  height?: number;
  rotate?: number;
  gradient?: string;
}) {
  return (
    <div
      className={cn("absolute animate-[shapeIn_2.4s_ease-out_forwards] opacity-0", className)}
      style={{ animationDelay: `${delay}s` }}
    >
      <div
        className="animate-[float_12s_ease-in-out_infinite] relative"
        style={{ width, height }}
      >
        <div
          className={cn(
            "absolute inset-0 rounded-full",
            "bg-gradient-to-r to-transparent",
            gradient,
            "backdrop-blur-[2px] border-2 border-white/[0.15]",
            "shadow-[0_8px_32px_0_rgba(255,255,255,0.1)]",
            "after:absolute after:inset-0 after:rounded-full",
            "after:bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.2),transparent_70%)]"
          )}
          style={{ transform: `rotate(${rotate}deg)` }}
        />
      </div>
    </div>
  );
}

function HeroGeometric({
  badge,
  title1,
  title2,
  subtitle,
  photo,
  ctaPrimary,
  ctaSecondary,
  ctaPrimaryHref,
  ctaSecondaryHref,
}: {
  badge?: string;
  title1?: string;
  title2?: string;
  subtitle?: string;
  photo?: string;
  ctaPrimary?: string;
  ctaSecondary?: string;
  ctaPrimaryHref?: string;
  ctaSecondaryHref?: string;
}) {
  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#030303]">
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/[0.05] via-transparent to-teal-500/[0.05] blur-3xl" />

      <div className="absolute inset-0 overflow-hidden">
        <ElegantShape
          delay={0.3}
          width={600}
          height={140}
          rotate={12}
          gradient="from-emerald-500/[0.15]"
          className="left-[-10%] md:left-[-5%] top-[15%] md:top-[20%]"
        />
        <ElegantShape
          delay={0.5}
          width={500}
          height={120}
          rotate={-15}
          gradient="from-teal-500/[0.15]"
          className="right-[-5%] md:right-[0%] top-[70%] md:top-[75%]"
        />
        <ElegantShape
          delay={0.4}
          width={300}
          height={80}
          rotate={-8}
          gradient="from-cyan-500/[0.15]"
          className="left-[5%] md:left-[10%] bottom-[5%] md:bottom-[10%]"
        />
        <ElegantShape
          delay={0.6}
          width={200}
          height={60}
          rotate={20}
          gradient="from-emerald-400/[0.12]"
          className="right-[15%] md:right-[20%] top-[10%] md:top-[15%]"
        />
        <ElegantShape
          delay={0.7}
          width={150}
          height={40}
          rotate={-25}
          gradient="from-green-500/[0.12]"
          className="left-[20%] md:left-[25%] top-[5%] md:top-[10%]"
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center">
          {/* Photo */}
          {photo && (
            <div className="mb-8 flex justify-center animate-[fadeUp_1s_0.5s_ease-out_forwards] opacity-0">
              <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden ring-2 ring-emerald-500/30 ring-offset-4 ring-offset-[#030303]">
                <img
                  src={photo}
                  alt={title1 || ""}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          )}

          {/* Badge */}
          {badge && (
            <div className="animate-[fadeUp_1s_0.7s_ease-out_forwards] opacity-0">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] mb-8 md:mb-10">
                <div className="h-2 w-2 rounded-full bg-emerald-500/80" />
                <span className="text-sm text-white/60 tracking-wide">
                  {badge}
                </span>
              </div>
            </div>
          )}

          {/* Title */}
          <div className="animate-[fadeUp_1s_0.9s_ease-out_forwards] opacity-0">
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold mb-6 md:mb-8 tracking-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/80">
                {title1}
              </span>
              <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-300 via-white/90 to-teal-300">
                {title2}
              </span>
            </h1>
          </div>

          {/* Subtitle */}
          {subtitle && (
            <div className="animate-[fadeUp_1s_1.1s_ease-out_forwards] opacity-0">
              <p className="text-base sm:text-lg md:text-xl text-white/40 mb-10 leading-relaxed font-light tracking-wide max-w-xl mx-auto px-4">
                {subtitle}
              </p>
            </div>
          )}

          {/* CTAs */}
          <div className="animate-[fadeUp_1s_1.3s_ease-out_forwards] opacity-0 flex flex-col sm:flex-row items-center justify-center gap-4">
            {ctaPrimary && (
              <a
                href={ctaPrimaryHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-white font-semibold px-8 py-3.5 rounded-full transition-all hover:shadow-lg hover:shadow-emerald-500/25"
              >
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z" />
                </svg>
                {ctaPrimary}
              </a>
            )}
            {ctaSecondary && (
              <a
                href={ctaSecondaryHref}
                className="inline-flex items-center gap-2 border border-white/[0.12] text-zinc-300 hover:text-white hover:border-white/[0.25] font-medium px-8 py-3.5 rounded-full transition-all"
              >
                <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                {ctaSecondary}
              </a>
            )}
          </div>
        </div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-transparent to-[#030303]/80 pointer-events-none" />
    </div>
  );
}

export { HeroGeometric };
