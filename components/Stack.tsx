import Reveal from "./Reveal";

const groups: { key: string; items: string[] }[] = [
  {
    key: "frameworks",
    items: ["react.js", "next.js", "redux", "zustand", "tailwindcss", "next-auth"],
  },
  {
    key: "languages",
    items: ["typescript", "javascript", "html5", "css3"],
  },
  {
    key: "ai-tools",
    items: [
      "claude-code",
      "claude",
      "antigravity",
      "cowork",
      "cursor",
      "github-copilot",
      "openai-api",
      "gemini",
      "groq",
    ],
  },
  {
    key: "platforms",
    items: ["git", "github", "gitlab", "github-actions", "supabase"],
  },
];

function Group({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <p className="font-mono text-[12px] text-inkmuted">
        &quot;{title}&quot;: [
      </p>
      <div className="flex flex-wrap gap-2 py-3 pl-4">
        {items.map((it) => (
          <span
            key={it}
            className="rounded border border-line bg-paper px-2.5 py-1 font-mono text-[12px] text-ink"
          >
            &quot;{it}&quot;
          </span>
        ))}
      </div>
      <p className="font-mono text-[12px] text-inkmuted">]</p>
    </div>
  );
}

export default function Stack() {
  return (
    <section id="stack" className="border-t border-line">
      <div className="mx-auto max-w-content px-6 py-20">
        <Reveal>
          <span className="font-mono text-[12px] uppercase tracking-widest text-inkmuted">
            stack
          </span>
        </Reveal>

        <Reveal delay={60}>
          <div className="mt-6 rounded-lg border border-line bg-surface p-6 sm:p-8">
            <p className="font-mono text-[12px] text-inkmuted">{"{"}</p>
            <div className="space-y-5 py-3 pl-4">
              {groups.map((g) => (
                <Group key={g.key} title={g.key} items={g.items} />
              ))}
            </div>
            <p className="font-mono text-[12px] text-inkmuted">{"}"}</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
