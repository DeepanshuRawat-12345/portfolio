"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Section } from "@/components/layout/Section";
import { Eyebrow } from "@/components/ui/eyebrow";

export function About() {
  const reduceMotion = !!useReducedMotion();

  const reveal = (delay: number) => ({
    initial: { opacity: reduceMotion ? 1 : 0, y: reduceMotion ? 0 : 16 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-80px" },
    transition: {
      duration: reduceMotion ? 0 : 0.6,
      delay: reduceMotion ? 0 : delay,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  });

  return (
    <Section id="about" tone="default">
      {/* Heading + supporting line can run wider than the body copy —
          that width difference is the section's one deliberate bit of
          asymmetry, now that there's no second column to create it. */}
      <motion.div className="max-w-3xl" {...reveal(0)}>
        <Eyebrow>About</Eyebrow>
        <h2 className="font-display text-foreground mt-4 text-3xl font-semibold text-balance md:text-4xl">
          What I build. How I think.
        </h2>
        <p className="text-muted-foreground mt-4 text-lg text-pretty">
          The thinking behind the projects — not the résumé version.
        </p>
      </motion.div>

      {/* Body copy constrained to a comfortable reading width (~65
          characters/line) rather than the section's full container —
          long lines at the container's 1220px width would hurt
          readability more than they'd add visual weight. */}
      <motion.div className="mt-8 max-w-2xl space-y-6" {...reveal(0.1)}>
        <p className="text-muted-foreground text-lg text-pretty">
          I like problems that don&apos;t stay solved in theory. Most of the
          work I&apos;m drawn to sits at the point where a model&apos;s output
          has to become a decision — where a system looks at something,
          understands it, and then does something about it. That&apos;s the part
          of building intelligent systems I find genuinely interesting: not the
          accuracy on a benchmark, but whether it still works when the
          lighting&apos;s bad, the sensor drifts, or the input doesn&apos;t look
          like the training data.
        </p>

        <p className="text-muted-foreground text-lg text-pretty">
          I try to think in public rather than in my head. I write down why I
          chose one approach over another before I&apos;ve fully convinced
          myself it&apos;s right, because that&apos;s usually where I find the
          actual reasoning — or the gap in it. Curiosity, for me, is less a
          personality trait than a habit: pull the thread until I understand why
          something works, not just that it does.
        </p>

        {/* Pull-quote — repeats the closing line of the paragraph above,
            verbatim, rather than cutting it from the body. Standard
            pull-quote convention, and it keeps every word of the
            original Milestone 4 text intact. */}
        <blockquote className="border-support text-foreground font-display border-l-2 py-1 pl-6 text-2xl text-balance">
          Curiosity, for me, is less a personality trait than a habit — pull the
          thread until I understand why something works, not just that it does.
        </blockquote>

        <p className="text-muted-foreground text-lg text-pretty">
          What I care about most is the distance between an idea and something
          that actually runs — reliably, for someone other than me. Computer
          vision, data, and connected hardware are the specific tools I&apos;m
          using to close that distance right now. The constant underneath all of
          it is wanting to build systems I can stand behind, not demos that only
          work once.
        </p>
      </motion.div>
    </Section>
  );
}
