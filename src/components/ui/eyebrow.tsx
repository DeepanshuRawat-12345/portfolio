import { cn } from "@/lib/utils";

interface EyebrowProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * Small uppercase label used above a heading. Introduced for the Hero's
 * "SOFTWARE ENGINEER" label, but generic on purpose — every section that
 * follows (Featured Projects, Research, Certificates...) will likely want
 * the same "small label, then the real heading" pattern.
 */
export function Eyebrow({ children, className }: EyebrowProps) {
  return (
    <p
      className={cn(
        "text-accent text-sm font-medium tracking-[0.15em] uppercase",
        className,
      )}
    >
      {children}
    </p>
  );
}
