import Reveal from "./Reveal";

type StackCategory = {
  category: string;
  description: string;
  items: { name: string; tag?: string }[];
};

const stackCategories: StackCategory[] = [
  {
    category: "Frontend & Frameworks",
    description: "Core UI libraries & full-stack frameworks",
    items: [
      { name: "React.js", tag: "primary" },
      { name: "Next.js 15 (App Router)", tag: "primary" },
      { name: "TypeScript", tag: "primary" },
      { name: "Tailwind CSS", tag: "primary" },
      { name: "Zustand" },
      { name: "Redux Toolkit" },
      { name: "HTML5 / CSS3" },
      { name: "NextAuth.js" },
    ],
  },
  {
    category: "AI-Augmented Tooling",
    description: "Daily AI development stack for velocity & architecture",
    items: [
      { name: "Claude Code", tag: "daily" },
      { name: "GitHub Copilot", tag: "daily" },
      { name: "AntiGravity" },
      { name: "Cursor" },
      { name: "OpenAI API" },
      { name: "Groq LLM" },
      { name: "Google Gemini" },
    ],
  },
  {
    category: "Backend, DB & Platform",
    description: "Storage, authentication, CI/CD, and deployments",
    items: [
      { name: "Supabase (Auth/DB/RLS)", tag: "active" },
      { name: "REST APIs" },
      { name: "Git / GitHub" },
      { name: "GitLab" },
      { name: "GitHub Actions" },
      { name: "Vercel" },
      { name: "WordPress (Headless)" },
    ],
  },
];

export default function Stack() {
  return (
    <section id="stack" className="border-t border-line bg-surface/50">
      <div className="mx-auto max-w-content px-6 py-20">
        <Reveal>
          <div className="flex flex-wrap items-baseline justify-between gap-2">
            <span className="font-mono text-[12px] uppercase tracking-widest text-inkmuted">
              technical stack & tools
            </span>
            <span className="font-mono text-[11px] text-inkmuted">
              actively shipped in production
            </span>
          </div>
        </Reveal>

        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
          {stackCategories.map((group, idx) => (
            <Reveal key={group.category} delay={idx * 80}>
              <div className="flex h-full flex-col justify-between rounded-lg border border-line bg-surface p-6 transition-colors hover:border-teal/30">
                <div>
                  <h3 className="font-display text-base font-medium text-ink">
                    {group.category}
                  </h3>
                  <p className="mt-1 text-[13px] text-inkmuted">
                    {group.description}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {group.items.map((item) => (
                      <span
                        key={item.name}
                        className={`inline-flex items-center gap-1 rounded border px-2.5 py-1 font-mono text-[12px] transition-colors ${
                          item.tag === "primary" || item.tag === "daily" || item.tag === "active"
                            ? "border-teal/30 bg-tealsoft/40 font-medium text-teal"
                            : "border-line bg-paper text-ink"
                        }`}
                      >
                        {item.tag && (
                          <span className="h-1 w-1 rounded-full bg-teal" />
                        )}
                        {item.name}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
