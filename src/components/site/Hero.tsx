import { motion } from "framer-motion";
import { ArrowUpRight, Download, Github, MapPin, Trophy } from "lucide-react";
import portrait from "@/assets/abdullah-portrait.jpg";
import { profile } from "@/data/profile";

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-28 md:pt-36">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-5 pb-20 md:px-8 lg:grid-cols-12 lg:gap-8 lg:pb-32">
        <div className="lg:col-span-7">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }} className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.2em] text-primary backdrop-blur">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-70" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-primary" />
            </span>
            // {profile.eyebrow}
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.05, ease: [0.22, 1, 0.36, 1] }} className="mt-6 font-display text-5xl font-semibold leading-[1.02] tracking-tight text-foreground md:text-7xl">
            {profile.name.split(" ")[0]}{" "}
            <span className="text-gradient">{profile.name.split(" ").slice(1).join(" ")}</span>
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }} className="mt-4 font-mono text-sm uppercase tracking-[0.25em] text-muted-foreground">
            {profile.title}
          </motion.p>

          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.22, ease: [0.22, 1, 0.36, 1] }} className="mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground">
            {profile.summary}
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }} className="mt-9 flex flex-wrap items-center gap-3">
            <a href="#projects" className="group inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-[0_10px_40px_-10px_oklch(0.58_0.20_20_/_0.9)] transition-transform hover:-translate-y-0.5">
              View Projects
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a href={profile.resumeUrl} download className="inline-flex items-center gap-2 rounded-full border border-border-strong bg-surface/60 px-5 py-3 text-sm font-semibold text-foreground backdrop-blur transition-colors hover:bg-accent">
              <Download className="h-4 w-4" /> Download Resume
            </a>
            <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border-strong bg-surface/60 text-foreground backdrop-blur transition-colors hover:bg-accent">
              <Github className="h-4 w-4" />
            </a>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.4 }} className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-border pt-6 font-mono text-xs text-muted-foreground">
            <span className="inline-flex items-center gap-1.5"><MapPin className="h-3.5 w-3.5 text-primary" /> {profile.location}</span>
            <span className="inline-flex items-center gap-1.5"><span className="text-primary">◇</span> CUST · BS CS</span>
            <span className="inline-flex items-center gap-1.5"><Trophy className="h-3.5 w-3.5 text-primary" /> 2nd Place · ICCOR 2026</span>
          </motion.div>
        </div>

        <motion.div initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }} className="lg:col-span-5">
          <div className="relative mx-auto max-w-[420px]">
            <div aria-hidden className="absolute -inset-6 -z-10 rounded-[2rem] blur-3xl" style={{ background: "radial-gradient(60% 60% at 50% 50%, oklch(0.58 0.20 20 / 0.55), transparent 70%)" }} />
            <div className="panel relative overflow-hidden rounded-[1.75rem] p-3">
              <div className="relative overflow-hidden rounded-[1.4rem]">
                <img src={portrait} alt="Mohammad Abdullah portrait" className="duotone-portrait h-auto w-full object-cover" width={800} height={1200} />
                <div aria-hidden className="absolute inset-0 mix-blend-multiply" style={{ background: "linear-gradient(180deg, oklch(0.58 0.20 20 / 0.65) 0%, oklch(0.20 0.08 20 / 0.85) 100%)" }} />
                <div aria-hidden className="absolute inset-0 mix-blend-screen opacity-40" style={{ background: "linear-gradient(180deg, oklch(0.15 0.02 20) 0%, transparent 40%, oklch(0.15 0.02 20 / 0.7) 100%)" }} />
                <div aria-hidden className="pointer-events-none absolute inset-0 opacity-25" style={{ backgroundImage: "linear-gradient(oklch(1 0 0 / 0.18) 1px, transparent 1px), linear-gradient(90deg, oklch(1 0 0 / 0.18) 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
                <div aria-hidden className="pointer-events-none absolute inset-x-0 top-1/3 h-px opacity-70" style={{ background: "linear-gradient(90deg, transparent, oklch(0.68 0.22 22 / 0.9), transparent)" }} />
                <div className="pointer-events-none absolute left-3 top-3 h-3 w-3 border-l border-t border-primary/80" />
                <div className="pointer-events-none absolute right-3 top-3 h-3 w-3 border-r border-t border-primary/80" />
                <div className="pointer-events-none absolute bottom-3 left-3 h-3 w-3 border-b border-l border-primary/80" />
                <div className="pointer-events-none absolute bottom-3 right-3 h-3 w-3 border-b border-r border-primary/80" />
                <div className="absolute bottom-4 left-4 rounded-md border border-border-strong bg-background/70 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-foreground backdrop-blur">
                  MA // 01 · Analyst
                </div>
              </div>
            </div>

            <div className="mt-5 grid grid-cols-3 gap-2 font-mono text-[10px] uppercase tracking-[0.18em]">
              {[
                { k: "94%", v: "Detection" },
                { k: "50+", v: "Alerts / day" },
                { k: "10K+", v: "Events / day" },
              ].map((m) => (
                <div key={m.v} className="panel flex flex-col items-start gap-0.5 px-3 py-2.5">
                  <span className="font-display text-lg font-semibold text-primary">{m.k}</span>
                  <span className="text-muted-foreground">{m.v}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
