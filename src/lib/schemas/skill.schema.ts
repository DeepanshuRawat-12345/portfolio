import { z } from "zod";
import type { SkillIconName } from "@/lib/skill-icons";

/**
 * Deliberately domain-based (what kind of problem), not tool-type-based
 * (language/framework/tool) — the generic categories sketched in the
 * architecture doc were a placeholder written before we'd done the About
 * narrative work. These four map directly onto the Hero's "see, learn,
 * act" framing, plus the engineering foundation underneath all three.
 */
export const skillCategories = [
  "perception",
  "learning-and-data",
  "connected-systems",
  "engineering-foundations",
] as const;

export type SkillCategory = (typeof skillCategories)[number];

/**
 * Runtime shape validation — catches a malformed entry (missing field,
 * wrong type) at build time. Icon-name-vs-registry correctness is a
 * separate, compile-time guarantee (see the Skill interface below and
 * skill-icons.ts) — TypeScript already covers that for a hand-authored
 * file like content/skills.ts, no need to duplicate the check at runtime.
 */
export const skillSchema = z.object({
  id: z.string().min(1),
  name: z.string().min(1),
  icon: z.string().min(1),
  category: z.enum(skillCategories),
});

export interface Skill {
  id: string;
  name: string;
  icon: SkillIconName;
  category: SkillCategory;
}
