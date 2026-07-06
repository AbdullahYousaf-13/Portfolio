import { motion } from "framer-motion";
import { Shield, Code2, Brain } from "lucide-react";
import { skills } from "@/data/profile";
import { SectionHeader } from "./SectionHeader";

const icons = [Shield, Code2, Brain];

export function Skills() {
  return (
    <section id="skills" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeader number="// 02" eyebrow="Toolkit" title="Security, frontend, and AI toolkit." description="Weighted toward cybersecurity, with strong frontend implementation and practical AI where it improves detection, automation, or product experience." />
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {skills.map((group, i) => {
            const Icon = icons[i];
            return (
              <motion.div key={group.category} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.55, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }} className="panel relative overflow-hidden p-7">
                <div aria-hidden className="absolute -right-16 -top-16 h-40 w-40 rounded-full blur-3xl" style={{ background: "oklch(0.72 0.14 195 / 0.16)" }} />
                <div className="relative flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-accent/60 text-primary">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div>
                    <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">// 0{i + 1}</div>
                    <h3 className="font-display text-lg font-semibold text-foreground">{group.category}</h3>
                  </div>
                </div>
                <div className="relative mt-6 flex flex-wrap gap-1.5">
                  {group.items.map((item) => (
                    <span key={item} className="rounded-md border border-border bg-surface-2 px-2.5 py-1 font-mono text-[11px] text-foreground/85 transition-colors hover:border-primary/60 hover:text-primary">
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
