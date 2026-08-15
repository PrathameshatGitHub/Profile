export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-content flex-wrap items-center justify-between gap-3 px-6 py-8 font-mono text-[12px] text-inkmuted">
        <span>© {new Date().getFullYear()} Prathamesh Mali</span>
        <span>built with Next.js · deployed on Vercel</span>
      </div>
    </footer>
  );
}
