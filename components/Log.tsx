import Reveal from "./Reveal";

type Entry = {
  version: string;
  title: string;
  meta: string;
  changes: { type: "+" | "~"; text: string }[];
  stack?: string[];
};

const entries: Entry[] = [
  {
    version: "v2.0.0",
    title: "React Developer",
    meta: "Artcode Private Limited · Full-time · Pune, Maharashtra · Mar 2025 – Present",
    changes: [
      { type: "+", text: "Developed and maintained high-performance Next.js applications with a deep focus on server-side rendering (SSR) and performance optimization." },
      { type: "+", text: "Leveraged AI-assisted development tools (Claude Code, GitHub Copilot) to accelerate feature shipping, refactoring, and code quality." },
      { type: "+", text: "Executed advanced SEO strategies, leading to improved search rankings, discoverability, and increased organic traffic." },
      { type: "+", text: "Designed responsive, mobile-first layouts with Tailwind CSS, guaranteeing cross-browser compatibility and accessibility." },
      { type: "~", text: "Collaborated with backend teams to integrate RESTful APIs and enhanced Core Web Vitals via lazy loading, image optimization, and smart code splitting." },
    ],
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "GitHub Copilot", "Claude Code", "REST APIs", "SSR"],
  },
  {
    version: "v1.0.0",
    title: "Frontend Developer",
    meta: "Walstar Technology · Full-time · Kolhapur · Jul 2024 – Feb 2025",
    changes: [
      { type: "+", text: "Developed over 10 WordPress websites using Elementor, incorporating custom interactive functionality and responsive design systems." },
      { type: "+", text: "Implemented bespoke JavaScript and CSS to enhance interactive features and user experiences beyond standard WordPress capabilities." },
      { type: "~", text: "Optimized website performance through caching strategies, image compression pipelines, and asset minification, delivering faster load times." },
    ],
    stack: ["WordPress", "Elementor", "React", "JavaScript", "Tailwind CSS", "CSS3"],
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

                {e.stack && (
                  <div className="mt-6 flex flex-wrap gap-2 pt-2">
                    {e.stack.map((s) => (
                      <span
                        key={s}
                        className="rounded border border-line px-2 py-1 font-mono text-[11px] text-inkmuted"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                )}
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
