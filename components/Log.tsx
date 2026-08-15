import Reveal from "./Reveal";

type Entry = {
  version: string;
  title: string;
  meta: string;
  changes: { type: "+" | "~"; text: string }[];
  stack?: string[];
};

type Education = {
  degree: string;
  institution: string;
  detail: string;
  score: string;
};

type Certificate = {
  title: string;
  issuer: string;
  date: string;
  credentialId?: string;
  verifyUrl?: string;
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

const educationHistory: Education[] = [
  {
    degree: "B.Tech in Computer Science",
    institution: "D Y Patil Pratishthan's College of Engineering",
    detail: "2020 – 2024",
    score: "CGPA 8.0 / 10.0",
  },
  {
    degree: "Higher Secondary Certificate (Class XII, CBSE)",
    institution: "Jawahar Navodaya Vidyalaya, Sangli",
    detail: "Science Stream",
    score: "80%",
  },
  {
    degree: "Secondary School Certificate (Class X, CBSE)",
    institution: "Jawahar Navodaya Vidyalaya, Sangli",
    detail: "General Studies",
    score: "88%",
  },
];

const certificates: Certificate[] = [
  {
    title: "React Developer",
    issuer: "Namaste React (NamasteDev)",
    date: "2024",
    credentialId: "In-depth React, Hooks, Redux, Performance & Architecture",
  },
  {
    title: "AI for India 2.0",
    issuer: "GUVI",
    date: "Jul 2023",
    credentialId: "610283E201a2sBVo89",
    verifyUrl: "https://www.guvi.in/verify-certificate?id=610283E201a2sBVo89&course=ai_for_in_en",
  },
  {
    title: "Programming Using Python",
    issuer: "HCL GUVI",
    date: "Aug 2023",
    credentialId: "5552i991U9216441MT",
    verifyUrl: "https://www.guvi.in/verify-certificate?id=5552i991U9216441MT&course=pythonEng",
  },
  {
    title: "Back-End Engineering Virtual Experience",
    issuer: "Forage",
    date: "Jul 2023",
    verifyUrl: "https://drive.google.com/file/d/1MrCQNKkshDek5SG3-DO1W9zEzaczvADB/view?usp=drivesdk",
  },
  {
    title: "Soft Skill Development",
    issuer: "TCS iON (Tata Consultancy Services)",
    date: "Aug 2023",
    credentialId: "172427-24843370-1016",
  },
];

export default function Log() {
  return (
    <section id="log" className="border-t border-line">
      <div className="mx-auto max-w-content px-6 py-20">
        <Reveal>
          <span className="font-mono text-[12px] uppercase tracking-widest text-inkmuted">
            log & experience
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

        {/* Education Subsection */}
        <div className="mt-14">
          <Reveal>
            <span className="font-mono text-[12px] uppercase tracking-widest text-inkmuted">
              education
            </span>
          </Reveal>

          <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {educationHistory.map((edu, idx) => (
              <Reveal key={edu.degree} delay={idx * 60}>
                <div className="flex h-full flex-col justify-between rounded-lg border border-line bg-surface p-5 transition-colors hover:border-teal/30">
                  <div>
                    <span className="inline-block rounded bg-tealsoft px-2 py-0.5 font-mono text-[11px] font-medium text-teal">
                      {edu.score}
                    </span>
                    <h3 className="mt-2.5 font-display text-[15px] font-medium text-ink">
                      {edu.degree}
                    </h3>
                    <p className="mt-1 text-[13px] text-inkmuted">
                      {edu.institution}
                    </p>
                  </div>
                  <p className="mt-3 font-mono text-[11px] text-inkmuted/70">
                    {edu.detail}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Licenses & Certifications Subsection */}
        <div className="mt-14">
          <Reveal>
            <div className="flex items-baseline justify-between">
              <span className="font-mono text-[12px] uppercase tracking-widest text-inkmuted">
                licenses & certifications
              </span>
              <span className="font-mono text-[11px] text-inkmuted">
                5 credentials
              </span>
            </div>
          </Reveal>

          <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3">
            {certificates.map((cert, idx) => (
              <Reveal key={cert.title} delay={idx * 50}>
                <div className="flex h-full flex-col justify-between rounded-lg border border-line bg-surface p-4 transition-all hover:border-teal/40">
                  <div>
                    <div className="flex items-center justify-between gap-2">
                      <span className="font-mono text-[11px] text-teal font-medium">
                        {cert.issuer}
                      </span>
                      <span className="font-mono text-[11px] text-inkmuted">
                        {cert.date}
                      </span>
                    </div>

                    <h4 className="mt-2 font-display text-sm font-medium text-ink">
                      {cert.title}
                    </h4>

                    {cert.credentialId && (
                      <p className="mt-1.5 font-mono text-[11px] text-inkmuted/80 break-all line-clamp-2">
                        {cert.credentialId.startsWith("ID:") ? cert.credentialId : `ID: ${cert.credentialId}`}
                      </p>
                    )}
                  </div>

                  {cert.verifyUrl && (
                    <div className="mt-3 pt-2 border-t border-line/60">
                      <a
                        href={cert.verifyUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1 font-mono text-[11px] text-teal hover:underline"
                      >
                        verify credential ↗
                      </a>
                    </div>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
