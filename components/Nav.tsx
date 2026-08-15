const links = [
  { href: "#log", label: "log" },
  { href: "#releases", label: "releases" },
  { href: "#stack", label: "stack" },
  { href: "#contact", label: "contact" },
];

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-paper/90 backdrop-blur">
      <div className="mx-auto flex max-w-content items-center justify-between px-6 py-4">
        <a
          href="#top"
          className="font-mono text-sm font-medium tracking-tight text-ink"
        >
          prathamesh.mali<span className="text-teal">.dev</span>
        </a>
        <nav className="flex items-center gap-5 font-mono text-[13px] text-inkmuted">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="hidden transition-colors hover:text-ink sm:inline"
            >
              {l.label}
            </a>
          ))}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="rounded-md border border-line px-3 py-1.5 text-ink transition-colors hover:border-teal hover:text-teal"
          >
            resume ↓
          </a>
        </nav>
      </div>
    </header>
  );
}
