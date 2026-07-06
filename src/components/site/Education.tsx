import { motion } from "framer-motion";
import { GraduationCap, Award } from "lucide-react";
import { education, credentials } from "@/data/profile";
import { SectionHeader } from "./SectionHeader";

export function Education() {
  return (
    <section id="education" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeader number="// 05" eyebrow="Foundations" title="Education & credentials." />
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }} className="panel p-7 md:p-9 lg:col-span-5">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-accent/60 text-primary">
                <GraduationCap className="h-5 w-5" />
              </span>
              <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">{education.period}</div>
            </div>
            <h3 className="mt-5 font-display text-xl font-semibold text-foreground">{education.degree}</h3>
            <p className="mt-1 text-sm text-primary">{education.school}</p>
            <p className="mt-1 font-mono text-xs text-muted-foreground">{education.location} · CGPA {education.cgpa}</p>
            <div className="mt-6">
              <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">// Relevant coursework</div>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {education.coursework.map((c) => (
                  <span key={c} className="rounded-md border border-border bg-surface-2 px-2 py-1 font-mono text-[10px] text-foreground/80">{c}</span>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.6, delay: 0.08, ease: [0.22, 1, 0.36, 1] }} className="lg:col-span-7">
            <div className="mb-3 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
              <Award className="h-3.5 w-3.5 text-primary" /> // Certifications & awards
            </div>
            <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {credentials.map((c) => (
                <li key={c.name} className="panel group relative overflow-hidden p-5 transition-transform hover:-translate-y-0.5">
                  <div aria-hidden className="absolute inset-x-0 top-0 h-px opacity-60" style={{ background: "linear-gradient(90deg, transparent, oklch(0.58 0.20 20 / 0.9), transparent)" }} />
                  <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-primary">{c.year}</div>
                  <div className="mt-2 font-display text-sm font-semibold text-foreground">{c.name}</div>
                  <div className="mt-0.5 text-xs text-muted-foreground">{c.issuer}</div>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
