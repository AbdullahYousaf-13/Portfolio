import { motion } from "framer-motion";

type Props = { number: string; eyebrow: string; title: string; description?: string };

export function SectionHeader({ number, eyebrow, title, description }: Props) {
  return (
    <div className="mb-12 md:mb-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-primary"
      >
        <span className="text-muted-foreground">{number}</span>
        <span className="h-px w-8 bg-primary/60" />
        <span>{eyebrow}</span>
      </motion.div>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
        className="mt-4 font-display text-4xl font-semibold tracking-tight text-foreground md:text-5xl"
      >
        {title}
      </motion.h2>
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="mt-4 max-w-2xl text-base text-muted-foreground md:text-lg"
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}
