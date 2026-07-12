import { cn } from "@/lib/utils";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * Horizontal width constraint used inside every section. Deliberately
 * does one job — max-width + side padding, from the --container-width /
 * --container-padding tokens — so every section lines up without each
 * one redeclaring these values itself.
 */
export function Container({ children, className }: ContainerProps) {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-[var(--container-width)] px-[var(--container-padding)]",
        className,
      )}
    >
      {children}
    </div>
  );
}
