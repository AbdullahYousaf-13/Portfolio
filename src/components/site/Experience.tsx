import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import { experience } from "@/data/profile";
import { SectionHeader } from "./SectionHeader";

export function Experience() {
  return (
    <section id="experience" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeader number="// 04" eyebrow="Field work" title="Security operations experience." />
        {experience.map((e, i) => (
          <motion.div key={e.company} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.6, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }} className="panel relative overflow-hidden p-7 md:p-10">
            <div aria-hidden className="absolute -right-32 -top-32 h-80 w-80 rounded-full blur-3xl" style={{ background: "oklch(0.72 0.14 195 / 0.12)" }} />
            <div className="relative flex flex-col gap-8 lg:flex-row lg:items-start">
              <div className="lg:w-64 lg:flex-shrink-0">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-accent/60 text-primary">
                    <Briefcase className="h-5 w-5" />
                  </span>
                  <div>
                    <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">{e.period}</div>
                    <div className="font-display text-sm text-foreground">{e.location}</div>
                  </div>
                </div>
              </div>
              <div className="flex-1">
                <h3 className="font-display text-2xl font-semibold tracking-tight text-foreground">{e.role}</h3>
                <p className="mt-1 text-primary">{e.company}</p>
                <ul className="mt-5 space-y-3">
                  {e.bullets.map((b) => (
                    <li key={b} className="flex gap-3 text-sm leading-relaxed text-foreground/85">
                      <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-primary" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 grid grid-cols-2 gap-2 md:grid-cols-4">
                  {e.metrics.map((m) => (
                    <div key={m.label} className="rounded-lg border border-border bg-surface-2 p-3">
                      <div className="font-display text-xl font-semibold text-primary">{m.value}</div>
                      <div className="mt-0.5 font-mono text-[10px] uppercase tracking-[0.15em] text-muted-foreground">{m.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
