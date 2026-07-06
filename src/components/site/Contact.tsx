import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, Github, Copy, Check, Download } from "lucide-react";
import { profile } from "@/data/profile";
import { SectionHeader } from "./SectionHeader";

type Item = {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
  href: string;
  copy?: string;
};

export function Contact() {
  const items: Item[] = [
    {
      icon: Mail,
      label: "Email",
      value: profile.email,
      href: `mailto:${profile.email}`,
      copy: profile.email,
    },
    {
      icon: Phone,
      label: "Phone",
      value: profile.phone,
      href: `tel:${profile.phone.replace(/\s/g, "")}`,
      copy: profile.phone,
    },
    { icon: Linkedin, label: "LinkedIn", value: "in/abdullahyousaf13", href: profile.linkedin },
    { icon: Github, label: "GitHub", value: "AbdullahYousaf-13", href: profile.github },
  ];

  const [copied, setCopied] = useState<string | null>(null);
  const doCopy = (v: string) => {
    navigator.clipboard.writeText(v);
    setCopied(v);
    setTimeout(() => setCopied(null), 1500);
  };

  return (
    <section id="contact" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeader
          number="// 06"
          eyebrow="Get in touch"
          title="Let's talk security, frontend, or roles."
          description="Best reached by email. Also happy on LinkedIn — response within 24 hours on weekdays."
        />
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {items.map((it, i) => {
            const Icon = it.icon;
            const isCopied = copied === it.copy;
            return (
              <motion.div
                key={it.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
                className="panel group relative flex items-center gap-4 overflow-hidden p-6 transition-transform hover:-translate-y-0.5"
              >
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  style={{
                    background:
                      "radial-gradient(400px 120px at 0% 50%, oklch(0.72 0.14 195 / 0.14), transparent 70%)",
                  }}
                />
                <span className="relative flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-lg border border-border bg-accent/60 text-primary">
                  <Icon className="h-5 w-5" />
                </span>
                <div className="relative min-w-0 flex-1">
                  <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                    {it.label}
                  </div>
                  <a
                    href={it.href}
                    target={it.href.startsWith("http") ? "_blank" : undefined}
                    rel="noreferrer"
                    className="mt-0.5 block truncate font-display text-base font-medium text-foreground transition-colors hover:text-primary"
                  >
                    {it.value}
                  </a>
                </div>
                {it.copy && (
                  <button
                    aria-label={`Copy ${it.label}`}
                    onClick={() => doCopy(it.copy!)}
                    className="relative flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-md border border-border bg-surface-2 text-muted-foreground transition-colors hover:border-primary hover:text-primary"
                  >
                    {isCopied ? (
                      <Check className="h-4 w-4 text-primary" />
                    ) : (
                      <Copy className="h-4 w-4" />
                    )}
                  </button>
                )}
              </motion.div>
            );
          })}
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-border pt-8">
          <p className="max-w-md text-sm text-muted-foreground">
            Based in {profile.location}. Open to Cybersecurity Analyst and Frontend Developer roles
            — full-time and internship.
          </p>
          <a
            href={profile.resumeUrl}
            download
            className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-[0_10px_40px_-10px_oklch(0.72_0.14_195_/_0.55)] transition-transform hover:-translate-y-0.5"
          >
            <Download className="h-4 w-4" /> Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}
