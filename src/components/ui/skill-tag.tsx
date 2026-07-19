import { skillIcons, type SkillIconName } from "@/lib/skill-icons";
import { cn } from "@/lib/utils";

interface SkillTagProps {
  name: string;
  icon: SkillIconName;
  className?: string;
}

/**
 * Icon + label pairing. Not a bordered/shadowed "card" — see the Skills
 * section for why. Kept generic (not Skills-specific) since Project
 * cards will very likely reuse this for tech-stack chips, resolving the
 * same skill IDs/icons.
 */
export function SkillTag({ name, icon, className }: SkillTagProps) {
  const Icon = skillIcons[icon];

  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <Icon
        size={18}
        className="text-muted-foreground shrink-0"
        aria-hidden="true"
      />
      <span className="text-foreground text-sm">{name}</span>
    </span>
  );
}
