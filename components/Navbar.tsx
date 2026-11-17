import ThemeToggle from "./ThemeToggle";

const links = [
  { href: "#services", label: "Services" },
  { href: "#work", label: "Work" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <header
      className="sticky top-0 z-40 border-b border-line backdrop-blur"
      style={{ backgroundColor: "color-mix(in srgb, var(--bg) 88%, transparent)" }}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5" aria-label="Main">
        <a href="#top" className="font-display text-xl font-extrabold tracking-tight">Northlight</a>
        <div className="flex items-center gap-3">
          <ul className="hidden items-center gap-6 text-sm font-medium sm:flex">
            {links.map((l) => (
              <li key={l.href}><a href={l.href} className="text-muted transition-colors hover:text-fg">{l.label}</a></li>
            ))}
          </ul>
          <a href="#contact" className="rounded-full bg-cobalt px-4 py-2 text-sm font-semibold text-white sm:hidden">Contact</a>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
