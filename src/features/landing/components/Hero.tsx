"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Button } from "@/components/ui/button";
import { ImagePlaceholder } from "@/components/ui/image-placeholder";

/**
 * Variants are defined relative to reduced-motion preference rather than
 * conditionally swapping `initial`/`animate` props at every call site —
 * when reduced motion is on, "hidden" and "visible" are the same state,
 * so Framer effectively renders once with no visible transition at all.
 */
function fadeUpVariants(reduceMotion: boolean) {
  return {
    hidden: { opacity: reduceMotion ? 1 : 0, y: reduceMotion ? 0 : 16 },
    visible: { opacity: 1, y: 0 },
  };
}

export function Hero() {
  const reduceMotion = !!useReducedMotion();

  const transition = (delay: number) => ({
    duration: reduceMotion ? 0 : 0.6,
    delay: reduceMotion ? 0 : delay,
    ease: [0.22, 1, 0.36, 1] as const,
  });

  return (
    <section
      id="hero"
      className="bg-background relative flex min-h-svh scroll-mt-24 items-center overflow-hidden"
    >
      {/* Subtle technical texture — a dot grid, not a gradient or glow.
          Faded via an opacity mask toward the bottom edge (not a color
          gradient) so it dissolves into About rather than cutting off
          hard at the section boundary. */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-60"
        style={{
          backgroundImage:
            "radial-gradient(var(--color-border) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          maskImage: "linear-gradient(to bottom, black 60%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, black 60%, transparent 100%)",
        }}
      />

      <Container className="relative grid gap-12 pt-32 pb-12 md:pt-40 lg:grid-cols-12 lg:items-center lg:gap-16">
        <div className="lg:col-span-7">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUpVariants(reduceMotion)}
            transition={transition(0)}
          >
            <Eyebrow>Software Engineer</Eyebrow>
          </motion.div>

          <motion.h1
            initial="hidden"
            animate="visible"
            variants={fadeUpVariants(reduceMotion)}
            transition={transition(0.1)}
            className="font-display text-hero text-foreground mt-6 leading-[1.05] font-semibold text-balance"
          >
            I build intelligent systems that{" "}
            <span className="text-accent">see, learn, and act.</span>
          </motion.h1>

          <motion.p
            initial="hidden"
            animate="visible"
            variants={fadeUpVariants(reduceMotion)}
            transition={transition(0.2)}
            className="text-muted-foreground mt-6 max-w-xl text-lg text-pretty"
          >
            Working across{" "}
            <strong className="text-foreground font-medium">
              computer vision, machine learning, and IoT
            </strong>{" "}
            to turn perception and data into software that operates in the real
            world — not just in a notebook.
          </motion.p>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUpVariants(reduceMotion)}
            transition={transition(0.3)}
            className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center"
          >
            <Button href="#featured-projects" variant="secondary">
              View my work
            </Button>
            <Button href="#contact" variant="ghost" className="group">
              Get in touch{" "}
              <span className="inline-block transition-transform duration-300 group-hover:translate-x-1 motion-reduce:transition-none">
                →
              </span>
            </Button>
          </motion.div>
        </div>

        {/* Reserved for a future portrait — large screens only. On
            mobile/tablet the Hero stays exactly as it was (single
            column); the "too left-heavy" feedback was specific to large
            screens, so that's the only place this changes. */}
        <motion.div
          className="hidden lg:col-span-5 lg:flex lg:justify-end"
          initial="hidden"
          animate="visible"
          variants={fadeUpVariants(reduceMotion)}
          transition={transition(0.15)}
        >
          <ImagePlaceholder
            label="Portrait coming soon"
            aspectRatio="4/5"
            className="w-full max-w-sm"
          />
        </motion.div>
      </Container>

      <motion.a
        href="#about"
        aria-label="Scroll to About section"
        className="text-muted-foreground hover:text-foreground absolute bottom-8 left-1/2 hidden -translate-x-1/2 transition-colors md:block"
        animate={reduceMotion ? undefined : { y: [0, 8, 0] }}
        transition={
          reduceMotion
            ? undefined
            : { duration: 2, repeat: Infinity, ease: "easeInOut" }
        }
      >
        <ChevronDown size={24} aria-hidden="true" />
      </motion.a>
    </section>
  );
}
