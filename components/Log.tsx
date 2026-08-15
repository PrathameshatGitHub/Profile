import Reveal from "./Reveal";

type Entry = {
  version: string;
  title: string;
  meta: string;
  changes: { type: "+" | "~"; text: string }[];
};

const entries: Entry[] = [
  {
    version: "v2.0.0",
    title: "React Developer",
    meta: "Artcode Private Limited · Pune · Mar 2025 – Present",
    changes: [
      { type: "+", text: "Built and maintained Next.js apps focused on SSR and performance." },
      { type: "+", text: "Used Claude Code and GitHub Copilot in daily development to speed up features and improve code quality." },
      { type: "+", text: "Ran SEO strategies that improved search rankings and organic traffic." },
      { type: "~", text: "Improved Core Web Vitals through lazy loading, image optimization, and code splitting." },
      { type: "~", text: "Built mobile-first, cross-browser layouts with Tailwind CSS." },
    ],
  },
  {
    version: "v1.0.0",
    title: "Frontend Developer",
    meta: "Walstar Technology · Kolhapur · Jul 2024 – Feb 2025",
    changes: [
      { type: "+", text: "Shipped 10+ WordPress websites with custom Elementor builds and responsive design." },
      { type: "+", text: "Extended WordPress with custom JavaScript and CSS for interactions beyond default capabilities." },
      { type: "~", text: "Improved load times through caching, image compression, and minification." },
    ],
  },
];

export default function Log() {
  return (
    <section id="log" className="border-t border-line">
      <div className="mx-auto max-w-content px-6 py-20">
        <Reveal>
          <span className="font-mono text-[12px] uppercase tracking-widest text-inkmuted">
            log
          </span>
        </Reveal>

        <div className="mt-6 space-y-5">
          {entries.map((e, i) => (
            <Reveal key={e.version} delay={i * 60}>
              <div className="rounded-lg border border-line bg-surface p-6 sm:p-8">
                <div className="flex flex-wrap items-baseline justify-between gap-2 border-b border-line pb-4">
                  <h2 className="font-display text-xl font-medium text-ink sm:text-2xl">
                    {e.version} — {e.title}
                  </h2>
                  <span className="font-mono text-[12px] text-inkmuted">
                    {e.meta}
                  </span>
                </div>

                <ul className="mt-5 space-y-3">
                  {e.changes.map((c, j) => (
                    <li key={j} className="flex gap-3 text-[15px] leading-relaxed">
                      <span
                        className={`mt-0.5 shrink-0 font-mono text-sm font-semibold ${
                          c.type === "+" ? "text-teal" : "text-amber"
                        }`}
                      >
                        {c.type}
                      </span>
                      <span className="text-inkmuted">{c.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={140}>
          <p className="mt-8 max-w-xl text-[15px] leading-relaxed text-inkmuted">
            B.Tech in Computer Science, D Y Patil Pratishthan&apos;s College
            of Engineering — CGPA 8.0/10.0, 2020–2024. Based in Pune.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
