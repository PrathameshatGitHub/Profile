export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-line"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage: "radial-gradient(#C7CBD3 1px, transparent 1px)",
          backgroundSize: "22px 22px",
          maskImage: "linear-gradient(to bottom, black, transparent 85%)",
          WebkitMaskImage: "linear-gradient(to bottom, black, transparent 85%)",
        }}
      />

      <div className="relative mx-auto max-w-content px-6 pb-20 pt-20 sm:pt-28">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-amber/30 bg-ambersoft px-3 py-1 font-mono text-[12px] font-medium tracking-wide text-amber">
          <span className="h-1.5 w-1.5 rounded-full bg-amber" />
          status: open to work — pune / remote / mumbai (wfo)
        </div>

        <h1 className="font-display text-[15vw] font-medium leading-[0.95] tracking-tight text-ink sm:text-6xl md:text-7xl">
          Prathamesh Mali
        </h1>

        <p className="mt-4 max-w-xl font-mono text-sm text-inkmuted sm:text-base">
          frontend developer — react.js · next.js · typescript
        </p>

        <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-inkmuted sm:text-base">
          Two years building production interfaces — from multi-vendor
          booking platforms and personal productivity suites (DailyDeck) to
          AI-powered QA tools (BugDeck). I care about the difference between an app
          that renders and one that holds up under real, messy use. I fix that gap, then ship.
        </p>

        <div className="mt-9 flex flex-wrap items-center gap-4">
          <a
            href="#releases"
            className="rounded-md bg-ink px-5 py-2.5 font-mono text-[13px] font-medium text-paper transition-colors hover:bg-teal"
          >
            view releases →
          </a>
          <a
            href="#contact"
            className="rounded-md border border-line px-5 py-2.5 font-mono text-[13px] font-medium text-ink transition-colors hover:border-ink"
          >
            get in touch
          </a>
        </div>

        <div className="mt-14">
          <p className="font-mono text-[11px] uppercase tracking-widest text-inkmuted">
            builds with
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            {[
              "Claude Code",
              "GitHub Copilot",
              "Cursor",
              "AntiGravity",
              "Groq AI",
              "Gemini",
            ].map((tool) => (
              <span
                key={tool}
                className="rounded-full border border-line bg-surface px-3 py-1 font-mono text-[11px] text-inkmuted"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
