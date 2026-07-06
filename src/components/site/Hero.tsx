import { motion } from "framer-motion";
import { ArrowUpRight, Download, Github, Linkedin } from "lucide-react";
import portrait from "@/assets/abdullah-portrait.jpg";
import { profile } from "@/data/profile";

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-28 md:pt-36">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-5 pb-20 md:px-8 lg:grid-cols-12 lg:gap-8 lg:pb-32">
        <div className="min-w-0 lg:col-span-7">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.2em] text-primary backdrop-blur"
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-70" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-primary" />
            </span>
            {profile.eyebrow}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 w-full max-w-[330px] break-words font-display text-5xl font-semibold leading-[1.02] tracking-tight text-foreground sm:max-w-full md:text-7xl"
          >
            {profile.name.split(" ")[0]}{" "}
            <span className="text-gradient">{profile.name.split(" ").slice(1).join(" ")}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="mt-4 w-full max-w-[330px] break-words font-mono text-[11px] uppercase leading-relaxed tracking-[0.18em] text-muted-foreground sm:max-w-full sm:text-sm sm:tracking-[0.25em]"
          >
            {profile.title}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="mt-8 w-full max-w-[330px] break-words text-lg leading-relaxed text-muted-foreground sm:max-w-xl"
          >
            {profile.summary}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="mt-9 flex w-full max-w-[330px] flex-wrap items-center gap-3 sm:max-w-none"
          >
            <a
              href="#projects"
              className="group inline-flex w-full max-w-full items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-[0_10px_40px_-10px_oklch(0.72_0.14_195_/_0.55)] transition-transform hover:-translate-y-0.5 sm:w-auto"
            >
              View Projects
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href={profile.resumeUrl}
              download
              className="inline-flex w-full max-w-full items-center justify-center gap-2 rounded-full border border-border-strong bg-surface/60 px-5 py-3 text-sm font-semibold text-foreground backdrop-blur transition-colors hover:bg-accent sm:w-auto"
            >
              <Download className="h-4 w-4" /> Download Resume
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border-strong bg-surface/60 text-foreground backdrop-blur transition-colors hover:bg-accent"
            >
              <Github className="h-4 w-4" />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border-strong bg-surface/60 text-foreground backdrop-blur transition-colors hover:bg-accent"
            >
              <Linkedin className="h-4 w-4" />
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="min-w-0 lg:col-span-5"
        >
          <div className="relative mx-0 w-full max-w-[330px] sm:mx-auto sm:max-w-[420px]">
            <div className="panel relative overflow-hidden rounded-[1.75rem] p-3">
              <div className="relative overflow-hidden rounded-[1.4rem]">
                <img
                  src={portrait}
                  alt="Mohammad Abdullah portrait"
                  className="h-auto w-full object-cover"
                  width={800}
                  height={1200}
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
