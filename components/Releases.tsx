import Reveal from "./Reveal";

type Release = {
  version: string;
  name: string;
  status: "shipped";
  summary: string;
  notes: { type: "+" | "~"; text: string }[];
  stack: string[];
  link?: string;
};

const releases: Release[] = [
  {
    version: "v1.2.0",
    name: "Venue Booking Platform",
    status: "shipped",
    summary:
      "Complete multi-vendor venue booking platform frontend with dedicated User, Admin, and Vendor panels, Next.js SSR for peak performance, and AI-powered SEO assistance.",
    notes: [
      { type: "+", text: "Developed complete frontend for multi-vendor venue booking platform with separate user, admin, and vendor panels using Next.js SSR for improved SEO and faster page loads" },
      { type: "+", text: "Implemented AI-based image alt-text generation and an AI-powered assistance feature using OpenAI API for SEO-optimized descriptions and dynamic content suggestions" },
      { type: "+", text: "Used Claude Code throughout development for AI-assisted coding, debugging, and code review, improving development speed and code quality" },
      { type: "+", text: "Integrated Google Calendar API for real-time venue availability and booking management, and Stripe for secure payments" },
      { type: "+", text: "Connected WordPress headless CMS via REST API for dynamic blog content, and implemented role-based auth using NextAuth.js" },
    ],
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Claude Code", "Google Calendar API", "Stripe", "NextAuth.js", "OpenAI API"],
  },
  {
    version: "v1.1.0",
    name: "DailyDeck",
    status: "shipped",
    link: "https://daily-deck-iota.vercel.app/",
    summary:
      "Personal Productivity Suite — a full-stack platform built with Next.js 15, React 19, and Supabase for streamlined daily tasks, notes, finance tracking, and date logging.",
    notes: [
      { type: "+", text: "Built a full-stack productivity platform with Supabase-authenticated, protected routes (Next.js middleware) covering daily tasks, notes, finance tracking, and a task/date log" },
      { type: "+", text: "Implemented a Kanban-style daily task board with drag-and-drop status updates, recurring tasks that auto-reset daily, and streak tracking" },
      { type: "+", text: "Designed a finance module with categorized entries, calculated summaries, and visual breakdowns (heatmap + category charts)" },
      { type: "+", text: "Used Supabase Row-Level Security and server/client SSR patterns (@supabase/ssr) for secure, session-aware data access" },
      { type: "+", text: "Structured the app with custom React hooks (useTasks, useNotes, useFinance) for clean separation of data logic from UI" },
    ],
    stack: ["Next.js 15", "React 19", "TypeScript", "Supabase (Auth/DB/RLS)", "Tailwind CSS", "@supabase/ssr"],
  },
  {
    version: "v1.0.0",
    name: "BugDeck",
    status: "shipped",
    summary:
      "AI-powered QA and bug-tracking platform, built from scratch and used internally to track and resolve bugs across company projects.",
    notes: [
      { type: "+", text: "Architected and built a full-stack QA management platform featuring a 5-status Kanban bug board, TestIt test-case management module, and role-based workspaces" },
      { type: "+", text: "Integrated AI-powered bug and test-case generation (Groq/LLM), including screenshot bug detection and domain-aware project-context injection" },
      { type: "+", text: "Leveraged Claude Code for AI-assisted development, debugging, and architecture decisions throughout the build" },
      { type: "+", text: "Designed a dual-source analytics dashboard (Recharts) with clickable chart segments that deep-link into filtered board views" },
      { type: "+", text: "Built CSV import/export with configurable status-mapping and per-row validation for bulk data migration" },
      { type: "~", text: "Rebuilt and stabilized on Next.js 15/Turbopack after resolving critical build-tooling instability, improving developer velocity and deployment reliability" },
    ],
    stack: ["Next.js 15", "React", "TypeScript", "Supabase", "Zustand", "Tailwind CSS", "Groq AI", "dnd-kit", "Claude Code"],
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
                  <div className="flex items-center gap-2">
                    {r.link && (
                      <a
                        href={r.link}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1 rounded-md border border-line bg-paper px-2.5 py-1 font-mono text-[11px] font-medium text-ink transition-all hover:border-teal hover:bg-tealsoft hover:text-teal"
                      >
                        live app ↗
                      </a>
                    )}
                    <StatusPill />
                  </div>
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
