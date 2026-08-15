export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-content flex-wrap items-center justify-between gap-3 px-6 py-8 font-mono text-[12px] text-inkmuted">
        <span>© {new Date().getFullYear()} Prathamesh — built with Next.js</span>
        <span>last deployed: {new Date().toISOString().slice(0, 10)}</span>
      </div>
    </footer>
  );
}
