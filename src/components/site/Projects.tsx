import { motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";
import { projects } from "@/data/profile";
import { SectionHeader } from "./SectionHeader";

export function Projects() {
  return (
    <section id="projects" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeader number="// 03" eyebrow="Selected work" title="Projects" description="Five builds from my GitHub: cybersecurity systems, frontend-heavy products, cloud ML, security tooling, and a local LLM chatbot." />
        <div className="flex flex-col gap-6">
          {projects.map((p, i) => {
            const reverse = i % 2 === 1;
            const coverClass = "coverClass" in p ? p.coverClass : "object-contain";
            return (
              <motion.article key={p.id} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }} className="panel group relative overflow-hidden">
                <div aria-hidden className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" style={{ background: "radial-gradient(600px 200px at 50% 0%, oklch(0.72 0.14 195 / 0.16), transparent 70%)" }} />
                <div className="grid grid-cols-1 lg:grid-cols-12">
                  <div className={`relative lg:col-span-6 ${reverse ? "lg:order-2" : ""}`}>
                    <div className="relative h-72 overflow-hidden bg-surface-2 lg:h-full lg:min-h-[420px]">
                      <img src={p.cover} alt={`${p.name} cover`} loading="lazy" width={1280} height={800} className={`h-full w-full ${coverClass}`} />
                      <div className="absolute left-4 top-4 rounded-md border border-border-strong bg-background/70 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-primary backdrop-blur">
                        // {String(i + 1).padStart(2, "0")} · {p.year}
                      </div>
                    </div>
                  </div>
                  <div className={`flex flex-col justify-between gap-6 p-7 md:p-9 lg:col-span-6 ${reverse ? "lg:order-1" : ""}`}>
                    <div>
                      <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">{p.role}</div>
                      <h3 className="mt-2 font-display text-2xl font-semibold tracking-tight text-foreground md:text-3xl">{p.name}</h3>
                      <p className="mt-2 text-base text-muted-foreground">{p.tagline}</p>
                      <ul className="mt-5 space-y-2.5">
                        {p.highlights.map((h) => (
                          <li key={h} className="flex gap-3 text-sm leading-relaxed text-foreground/85">
                            <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-primary" />
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <div className="flex flex-wrap gap-1.5">
                        {p.stack.map((s) => (
                          <span key={s} className="rounded-md border border-border bg-surface-2 px-2 py-0.5 font-mono text-[10px] text-foreground/80">{s}</span>
                        ))}
                      </div>
                      <div className="mt-5 flex flex-wrap items-center gap-2">
                        {p.links.map((l) => (
                          <a key={l.url} href={l.url} target="_blank" rel="noreferrer" className="group/link inline-flex items-center gap-1.5 rounded-full border border-border-strong bg-surface-2 px-3.5 py-2 text-xs font-semibold text-foreground transition-colors hover:border-primary hover:text-primary">
                            <Github className="h-3.5 w-3.5" />
                            {l.label}
                            <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
