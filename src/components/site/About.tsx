import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { profile } from "@/data/profile";
import { SectionHeader } from "./SectionHeader";

export function About() {
  return (
    <section id="about" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeader number="// 01" eyebrow="Profile" title="Security operator with an ML instinct." />
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }} className="panel p-7 md:p-9 lg:col-span-7">
            <p className="text-lg leading-relaxed text-foreground/90">{profile.longBio}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {["Wazuh", "Nmap", "Wireshark", "Burp Suite", "Autopsy", "Random Forest", "Isolation Forest", "React"].map((t) => (
                <span key={t} className="rounded-full border border-border bg-accent/60 px-3 py-1 font-mono text-[11px] text-muted-foreground">{t}</span>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }} className="lg:col-span-5">
            <div className="panel p-7">
              <h3 className="font-mono text-[11px] uppercase tracking-[0.2em] text-primary">// Quick facts</h3>
              <dl className="mt-5 grid grid-cols-2 gap-x-6 gap-y-5">
                {profile.quickFacts.map((f) => (
                  <div key={f.label}>
                    <dt className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">{f.label}</dt>
                    <dd className="mt-1 font-display text-sm font-medium text-foreground">{f.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <div className="panel mt-4 p-7">
              <h3 className="font-mono text-[11px] uppercase tracking-[0.2em] text-primary">// Learning & Notes</h3>
              <ul className="mt-4 divide-y divide-border">
                {profile.learningRepos.map((r) => (
                  <li key={r.name}>
                    <a href={r.url} target="_blank" rel="noreferrer" className="group flex items-center justify-between py-2.5 text-sm text-foreground/90 transition-colors hover:text-primary">
                      <span className="font-mono">{r.name}</span>
                      <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
