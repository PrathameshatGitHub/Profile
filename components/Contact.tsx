import Reveal from "./Reveal";

const EMAIL = "maliprathamesh3162@gmail.com";
const GITHUB = "https://github.com/PrathameshatGitHub";
const LINKEDIN = "https://linkedin.com/in/prathamesh-mali-27685b236";
const PHONE = "+91 76205 37089";

export default function Contact() {
  return (
    <section id="contact" className="border-t border-line">
      <div className="mx-auto max-w-content px-6 py-20">
        <Reveal>
          <span className="font-mono text-[12px] uppercase tracking-widest text-inkmuted">
            contact
          </span>
        </Reveal>

        <Reveal delay={60}>
          <h2 className="mt-6 max-w-lg font-display text-3xl font-medium leading-tight text-ink sm:text-4xl">
            Open to frontend roles — Pune, remote, or Mumbai WFO.
          </h2>
        </Reveal>

        <Reveal delay={100}>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={`mailto:${EMAIL}`}
              className="rounded-md bg-ink px-5 py-2.5 font-mono text-[13px] font-medium text-paper transition-colors hover:bg-teal"
            >
              {EMAIL}
            </a>
            <a
              href={GITHUB}
              target="_blank"
              rel="noreferrer"
              className="rounded-md border border-line px-5 py-2.5 font-mono text-[13px] font-medium text-ink transition-colors hover:border-ink"
            >
              github
            </a>
            <a
              href={LINKEDIN}
              target="_blank"
              rel="noreferrer"
              className="rounded-md border border-line px-5 py-2.5 font-mono text-[13px] font-medium text-ink transition-colors hover:border-ink"
            >
              linkedin
            </a>
            <a
              href={`tel:${PHONE.replace(/\s/g, "")}`}
              className="rounded-md border border-line px-5 py-2.5 font-mono text-[13px] font-medium text-ink transition-colors hover:border-ink"
            >
              {PHONE}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
