"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Section } from "@/components/layout/Section";
import { Eyebrow } from "@/components/ui/eyebrow";
import { SkillTag } from "@/components/ui/skill-tag";
import { skills } from "@/content/skills";
import {
  skillCategories,
  type SkillCategory,
} from "@/lib/schemas/skill.schema";

/**
 * Display order and human labels for categories — the one piece of
 * "category" knowledge that lives in code rather than content, since it's
 * presentation metadata (how to label/order a group), not skill data
 * itself. Adding a skill to an existing category never touches this;
 * only adding a genuinely new category does.
 */
const categoryLabels: Record<SkillCategory, string> = {
  perception: "Perception & Computer Vision",
  "learning-and-data": "Learning & Data",
  "connected-systems": "Connected Systems",
  "engineering-foundations": "Engineering Foundations",
};

export function Skills() {
  const reduceMotion = !!useReducedMotion();

  const groups = skillCategories
    .map((category) => ({
      category,
      label: categoryLabels[category],
      items: skills.filter((skill) => skill.category === category),
    }))
    .filter((group) => group.items.length > 0);

  return (
    <Section id="skills" tone="muted">
      <div className="max-w-2xl">
        <Eyebrow>Skills</Eyebrow>
        <h2 className="font-display text-foreground mt-4 text-3xl font-semibold text-balance md:text-4xl">
          What that looks like in practice.
        </h2>
        <p className="text-muted-foreground mt-4 text-lg text-pretty">
          Grouped by what they&apos;re for — not a résumé of tools.
        </p>
      </div>

      <div className="mt-14 grid grid-cols-1 gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
        {groups.map((group, index) => (
          <motion.div
            key={group.category}
            initial={{
              opacity: reduceMotion ? 1 : 0,
              y: reduceMotion ? 0 : 16,
            }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{
              duration: reduceMotion ? 0 : 0.5,
              delay: reduceMotion ? 0 : index * 0.08,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {/* A small rule, not a border around the group — hierarchy
                without introducing a card. Purple here specifically:
                indigo stays reserved for interactive/primary emphasis
                (CTAs, active nav, the Hero verbs), purple marks quiet
                structure instead. */}
            <span className="bg-support block h-0.5 w-8" aria-hidden="true" />
            <h3 className="text-foreground mt-4 text-sm font-semibold">
              {group.label}
            </h3>
            <ul className="mt-5 flex flex-col gap-5">
              {group.items.map((skill) => (
                <li key={skill.id}>
                  <SkillTag name={skill.name} icon={skill.icon} />
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
