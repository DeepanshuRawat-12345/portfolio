import { ImageIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface ImagePlaceholderProps {
  label: string;
  aspectRatio?: string;
  className?: string;
}

/**
 * Reserved space for an image that isn't ready yet. The dashed border +
 * icon + label are deliberate — reads as a designed empty state, not a
 * broken image or a leftover gray box. Generic on purpose: the About
 * portrait is the first use, but project screenshots and certificate
 * images will very likely need the exact same treatment before those
 * assets exist.
 */
export function ImagePlaceholder({
  label,
  aspectRatio = "4/5",
  className,
}: ImagePlaceholderProps) {
  return (
    <div
      className={cn(
        "border-border/70 bg-surface-muted flex flex-col items-center justify-center gap-2.5 rounded-lg border border-dashed px-6 text-center",
        className,
      )}
      style={{ aspectRatio }}
    >
      <ImageIcon
        size={22}
        strokeWidth={1.5}
        className="text-muted-foreground/70"
        aria-hidden="true"
      />
      <p className="text-muted-foreground text-sm">{label}</p>
    </div>
  );
}
