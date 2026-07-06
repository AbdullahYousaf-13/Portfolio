import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled ? "border-b border-border/70 bg-background/70 backdrop-blur-xl" : "bg-transparent"}`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
        <a href="#home" className="group flex items-center gap-2.5">
          <span className="relative flex h-8 w-8 items-center justify-center rounded-md border border-border bg-surface font-mono text-[10px] font-semibold text-primary">
            MA
            <span className="absolute -right-0.5 -top-0.5 h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_10px_2px_oklch(0.58_0.20_20_/_0.8)]" />
          </span>
          <span className="hidden font-display text-sm font-medium tracking-tight text-foreground sm:inline">
            Mohammad Abdullah
          </span>
        </a>

        <div className="hidden items-center gap-1 rounded-full border border-border bg-surface/60 px-1.5 py-1.5 backdrop-blur-md lg:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="rounded-full px-3.5 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground">
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <a href="/Mohammad_Abdullah.pdf" download className="hidden rounded-full bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground shadow-[0_0_20px_-6px_oklch(0.58_0.20_20)] transition-transform hover:-translate-y-px md:inline-block">
            Resume
          </a>
          <button aria-label="Toggle menu" onClick={() => setOpen((o) => !o)} className="rounded-md border border-border bg-surface p-2 lg:hidden">
            <div className="flex h-4 w-4 flex-col justify-between">
              <span className={`h-0.5 w-full bg-foreground transition-transform ${open ? "translate-y-[7px] rotate-45" : ""}`} />
              <span className={`h-0.5 w-full bg-foreground transition-opacity ${open ? "opacity-0" : ""}`} />
              <span className={`h-0.5 w-full bg-foreground transition-transform ${open ? "-translate-y-[7px] -rotate-45" : ""}`} />
            </div>
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-border bg-background/95 backdrop-blur-xl lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-1 px-5 py-3">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="rounded-md px-3 py-2 text-sm text-muted-foreground hover:bg-accent hover:text-foreground">
                {l.label}
              </a>
            ))}
            <a href="/Mohammad_Abdullah.pdf" download className="mt-2 rounded-md bg-primary px-3 py-2 text-center text-sm font-semibold text-primary-foreground">
              Download Resume
            </a>
          </div>
        </div>
      )}
    </motion.header>
  );
}
