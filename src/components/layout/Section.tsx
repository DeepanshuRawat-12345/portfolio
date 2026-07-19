import { cn } from "@/lib/utils";
import { Container } from "@/components/layout/Container";

type SectionTone = "default" | "muted" | "inverted";
type SectionTag = "section" | "footer" | "div";

interface SectionProps {
  id?: string;
  as?: SectionTag;
  tone?: SectionTone;
  size?: "default" | "lg";
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
}

const toneClasses: Record<SectionTone, string> = {
  default: "bg-background text-foreground",
  muted: "bg-surface-muted text-foreground",
  inverted: "bg-surface-inverted text-inverted-foreground",
};

/**
 * Vertical rhythm + background-tone wrapper for every top-level section
 * of the narrative flow. Background goes full-bleed on this element;
 * content stays constrained via the nested Container — that split is
 * what makes alternating section backgrounds a deliberate per-section
 * choice (`tone`) instead of the arbitrary alternation flagged in the
 * reference-site critique.
 *
 * Only ever reaches for semantic tokens (bg-background, bg-surface-muted,
 * etc.) — never a raw neutral-N utility, which would silently resolve to
 * Tailwind's built-in gray scale instead of ours.
 */
export function Section({
  id,
  as = "section",
  tone = "default",
  size = "default",
  children,
  className,
  containerClassName,
}: SectionProps) {
  const Tag = as;
  return (
    <Tag
      id={id}
      className={cn(
        "scroll-mt-24",
        toneClasses[tone],
        size === "lg"
          ? "py-[var(--space-section-y-lg)]"
          : "py-[var(--space-section-y)]",
        className,
      )}
    >
      <Container className={containerClassName}>{children}</Container>
    </Tag>
  );
}
