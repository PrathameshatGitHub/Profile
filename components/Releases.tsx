import Reveal from "./Reveal";

type Release = {
  version: string;
  name: string;
  status: "shipped";
  summary: string;
  notes: { type: "+" | "~"; text: string }[];
  stack: string[];
};

const releases: Release[] = [
  {
    version: "v1.1.0",
    name: "BugDeck",
    status: "shipped",
    summary:
      "AI-powered QA and bug-tracking platform, built from scratch and used internally to track and resolve bugs across company projects.",
    notes: [
      { type: "+", text: "5-status Kanban bug board with drag-and-drop (dnd-kit) and optimistic UI" },
      { type: "+", text: "TestIt — a full test-case management module" },
      { type: "+", text: "Role-based project workspaces" },
      { type: "+", text: "AI bug/test-case generation (Groq/LLM), including image-based bug detection from screenshots" },
      { type: "+", text: "Project-context injection so AI output stays accurate per project" },
      { type: "+", text: "Dual-source analytics dashboard (Recharts) with clickable, deep-linking chart segments" },
      { type: "+", text: "CSV import/export with configurable status-mapping and per-row validation" },
      { type: "~", text: "Rebuilt on Next.js 15/Turbopack after resolving critical build-tooling instability" },
    ],
    stack: ["Next.js 15", "React", "TypeScript", "Supabase", "Zustand", "Tailwind CSS", "Groq AI", "dnd-kit", "Claude Code"],
  },
  {
    version: "v1.0.0",
    name: "Venue Booking Platform",
    status: "shipped",
    summary:
      "Complete frontend for a multi-vendor venue booking platform, with separate user, admin, and vendor panels.",
    notes: [
      { type: "+", text: "Next.js SSR for better SEO and faster page loads" },
      { type: "+", text: "AI-based image alt-text generation and an AI assistance feature (OpenAI API) for SEO descriptions and content suggestions" },
      { type: "+", text: "Google Calendar API integration for real-time availability and booking management" },
      { type: "+", text: "Stripe integration for secure payments" },
      { type: "+", text: "Headless WordPress via REST API for dynamic blog content" },
      { type: "+", text: "Role-based auth with NextAuth.js" },
    ],
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "NextAuth.js", "Stripe", "Claude Code"],
  },
];

function StatusPill() {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full bg-tealsoft px-2.5 py-1 font-mono text-[11px] font-medium text-teal">
      <span className="h-1.5 w-1.5 rounded-full bg-teal" />
      shipped
    </span>
  );
}

export default function Releases() {
  return (
    <section id="releases" className="border-t border-line">
      <div className="mx-auto max-w-content px-6 py-20">
        <Reveal>
          <span className="font-mono text-[12px] uppercase tracking-widest text-inkmuted">
            releases
          </span>
        </Reveal>

        <div className="mt-6 space-y-6">
          {releases.map((r, i) => (
            <Reveal key={r.name} delay={i * 60}>
              <article className="group rounded-lg border border-line bg-surface p-6 transition-all hover:-translate-y-0.5 hover:border-teal/40 hover:shadow-[0_8px_24px_-12px_rgba(18,23,43,0.15)] sm:p-8">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div className="flex items-baseline gap-3">
                    <h3 className="font-display text-xl font-medium text-ink sm:text-2xl">
                      {r.name}
                    </h3>
                    <span className="font-mono text-[12px] text-inkmuted">
                      {r.version}
                    </span>
                  </div>
                  <StatusPill />
                </div>

                <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-inkmuted">
                  {r.summary}
                </p>

                <ul className="mt-5 space-y-2">
                  {r.notes.map((n, j) => (
                    <li key={j} className="flex gap-3 text-sm leading-relaxed">
                      <span
                        className={`mt-0.5 shrink-0 font-mono font-semibold ${
                          n.type === "+" ? "text-teal" : "text-amber"
                        }`}
                      >
                        {n.type}
                      </span>
                      <span className="text-inkmuted">{n.text}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex flex-wrap gap-2">
                  {r.stack.map((s) => (
                    <span
                      key={s}
                      className="rounded border border-line px-2 py-1 font-mono text-[11px] text-inkmuted"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
