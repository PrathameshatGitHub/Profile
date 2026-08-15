"use client";

import { useState } from "react";
import Reveal from "./Reveal";

type ProjectImage = {
  src: string;
  label: string;
  caption?: string;
};

type Release = {
  version: string;
  name: string;
  tagline: string;
  status: "shipped";
  summary: string;
  images: ProjectImage[];
  liveUrl?: string;
  codeUrl?: string;
  notes: { type: "+" | "~"; text: string }[];
  stack: string[];
};

const releases: Release[] = [
  {
    version: "v1.1.0",
    name: "DailyDeck",
    tagline: "Personal Productivity & Habit Suite",
    status: "shipped",
    images: [
      {
        src: "/images/dailydeck-tasks.png",
        label: "Kanban Tasks",
        caption: "Daily task board with drag-and-drop, priority tags, and auto-reset recurring tasks",
      },
      {
        src: "/images/dailydeck-notes.png",
        label: "Notes & Keep",
        caption: "Minimalist note-taking space with instant search and markdown support",
      },
      {
        src: "/images/dailydeck-schedule.png",
        label: "Schedule",
        caption: "Calendar scheduling view for planning routines and timeblocks",
      },
      {
        src: "/images/dailydeck-logs.png",
        label: "Activity Logs",
        caption: "Historical streak tracking, date logging, and productivity analytics",
      },
    ],
    liveUrl: "https://daily-deck-iota.vercel.app/",
    codeUrl: "https://github.com/PrathameshatGitHub",
    summary:
      "Full-stack personal productivity suite featuring protected Next.js routes, Kanban daily task boards with auto-resets, streak counters, and categorized finance tracking.",
    notes: [
      { type: "+", text: "Full-stack productivity platform with Supabase-authenticated protected routes (Next.js middleware) for tasks, notes, finance, and date log" },
      { type: "+", text: "Kanban-style daily task board with drag-and-drop status updates, recurring daily auto-reset tasks, and streak tracking" },
      { type: "+", text: "Finance management module with categorized entries, calculated summaries, and visual breakdowns (heatmap + category charts)" },
      { type: "+", text: "Supabase Row-Level Security (RLS) and server/client SSR patterns (@supabase/ssr) for secure session-aware data access" },
      { type: "+", text: "Custom React hooks architecture (useTasks, useNotes, useFinance) for clean separation of data logic from UI" },
    ],
    stack: ["Next.js 15", "React 19", "TypeScript", "Supabase (Auth/DB/RLS)", "Tailwind CSS", "@supabase/ssr"],
  },
  {
    version: "v1.0.0",
    name: "BugDeck",
    tagline: "AI-Powered QA & Bug Tracking Platform",
    status: "shipped",
    images: [
      {
        src: "/images/bugdeck-1.png",
        label: "Bug Board",
        caption: "5-status Kanban bug management board with drag-and-drop state updates",
      },
      {
        src: "/images/bugdeck-2.png",
        label: "Test Cases (TestIt)",
        caption: "Comprehensive test suite management with step-by-step test execution",
      },
      {
        src: "/images/bugdeck-3.png",
        label: "Analytics",
        caption: "Dual-source analytics charts showing issue resolution velocity and breakdowns",
      },
      {
        src: "/images/bugdeck-4.png",
        label: "Workspaces & AI",
        caption: "Role-based project workspace settings and AI bug generator configuration",
      },
    ],
    liveUrl: "https://bug-deck.vercel.app/",
    codeUrl: "https://github.com/PrathameshatGitHub",
    summary:
      "Full-stack internal QA and bug-tracking platform with 5-status Kanban board, TestIt test-case management module, screenshot-based bug detection, and deep analytics.",
    notes: [
      { type: "+", text: "5-status Kanban bug board with drag-and-drop (dnd-kit), optimistic UI, and TestIt test-case management module" },
      { type: "+", text: "AI-powered bug & test-case generation (Groq/LLM), screenshot bug analysis, and project-context injection for accurate output" },
      { type: "+", text: "Dual-source analytics dashboard (Recharts) with clickable chart segments that deep-link into filtered board views" },
      { type: "+", text: "CSV import/export with configurable status-mapping and per-row validation for bulk data migration" },
      { type: "~", text: "Rebuilt and stabilized on Next.js 15/Turbopack after resolving critical build-tooling instability" },
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

function ProjectGallery({
  images,
  projectName,
}: {
  images: ProjectImage[];
  projectName: string;
}) {
  const [activeIdx, setActiveIdx] = useState(0);
  const [failedImages, setFailedImages] = useState<Record<number, boolean>>({});

  const currentImage = images[activeIdx] || images[0];

  return (
    <div className="mt-5 space-y-3">
      {/* Tab Switcher */}
      <div className="flex flex-wrap items-center gap-1.5 border-b border-line pb-2">
        <span className="mr-1 font-mono text-[11px] uppercase tracking-wider text-inkmuted">
          Views:
        </span>
        {images.map((img, idx) => {
          const isActive = idx === activeIdx;
          return (
            <button
              key={img.label}
              type="button"
              onClick={() => setActiveIdx(idx)}
              className={`rounded px-2.5 py-1 font-mono text-[12px] font-medium transition-all ${
                isActive
                  ? "bg-ink text-paper shadow-sm"
                  : "bg-paper text-inkmuted hover:border-line hover:bg-surface hover:text-ink"
              }`}
            >
              {img.label}
            </button>
          );
        })}
      </div>

      {/* Screenshot Frame */}
      <div className="relative overflow-hidden rounded-md border border-line bg-paper/80 transition-all group-hover:border-ink/20">
        <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#0e121e]/5">
          {!failedImages[activeIdx] ? (
            <img
              key={currentImage.src}
              src={currentImage.src}
              alt={`${projectName} - ${currentImage.label}`}
              className="h-full w-full object-cover object-top transition-opacity duration-200"
              onError={() =>
                setFailedImages((prev) => ({ ...prev, [activeIdx]: true }))
              }
            />
          ) : (
            <div className="flex h-full w-full flex-col items-center justify-center gap-2 p-6 text-center text-inkmuted">
              <svg
                className="h-8 w-8 text-line stroke-current"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                />
              </svg>
              <p className="font-mono text-[12px] font-medium text-ink">
                {currentImage.label} preview
              </p>
            </div>
          )}
        </div>

        {/* Caption bar */}
        {currentImage.caption && (
          <div className="flex items-center justify-between border-t border-line bg-surface px-3 py-1.5 font-mono text-[11px] text-inkmuted">
            <span>{currentImage.caption}</span>
            <span className="hidden sm:inline">
              {activeIdx + 1} / {images.length}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}

export default function Releases() {
  return (
    <section id="releases" className="border-t border-line">
      <div className="mx-auto max-w-content px-6 py-20">
        <Reveal>
          <div className="flex items-baseline justify-between">
            <span className="font-mono text-[12px] uppercase tracking-widest text-inkmuted">
              releases
            </span>
            <span className="font-mono text-[12px] text-inkmuted">
              2 production builds
            </span>
          </div>
        </Reveal>

        <div className="mt-8 space-y-8">
          {releases.map((r, i) => (
            <Reveal key={r.name} delay={i * 60}>
              <article className="group rounded-lg border border-line bg-surface p-6 transition-all hover:border-teal/50 hover:shadow-[0_8px_30px_-12px_rgba(18,23,43,0.12)] sm:p-8">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div className="flex flex-wrap items-baseline gap-3">
                    <h3 className="font-display text-xl font-medium text-ink sm:text-2xl">
                      {r.name}
                    </h3>
                    <span className="font-mono text-[12px] text-inkmuted">
                      {r.version}
                    </span>
                    <span className="hidden text-sm text-inkmuted/70 sm:inline">
                      — {r.tagline}
                    </span>
                  </div>

                  <div className="flex flex-wrap items-center gap-2">
                    {r.liveUrl && (
                      <a
                        href={r.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1 rounded-md bg-ink px-3 py-1 font-mono text-[11px] font-medium text-paper transition-all hover:bg-teal"
                      >
                        live ↗
                      </a>
                    )}
                    {r.codeUrl && (
                      <a
                        href={r.codeUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1 rounded-md border border-line bg-paper px-2.5 py-1 font-mono text-[11px] font-medium text-ink transition-all hover:border-ink"
                      >
                        code ↗
                      </a>
                    )}
                    <StatusPill />
                  </div>
                </div>

                <p className="mt-3 max-w-3xl text-[15px] leading-relaxed text-inkmuted">
                  {r.summary}
                </p>

                {/* Interactive Screenshot Gallery */}
                <ProjectGallery images={r.images} projectName={r.name} />

                <ul className="mt-6 space-y-2">
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
