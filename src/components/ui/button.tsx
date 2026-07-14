import Link from "next/link";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-full text-sm font-medium transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary: "bg-accent text-white hover:bg-accent-hover",
        secondary:
          "border border-border text-foreground hover:border-accent hover:text-accent",
        ghost: "text-muted-foreground hover:text-foreground",
      },
      size: {
        default: "h-11 px-6",
        sm: "h-9 px-4 text-sm",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  },
);

interface ButtonProps extends VariantProps<typeof buttonVariants> {
  href?: string;
  type?: "button" | "submit";
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

/**
 * Renders as a Link when `href` is passed (routes, anchors — Next's Link
 * handles same-page hash targets like "#contact" fine), otherwise a real
 * <button>. Kept intentionally minimal — no external-link handling yet,
 * since nothing needs it this milestone; add an `external` variant when
 * a real use case (e.g. a GitHub link) actually calls for it.
 */
export function Button({
  href,
  type = "button",
  variant,
  size,
  children,
  className,
  onClick,
}: ButtonProps) {
  const classes = cn(buttonVariants({ variant, size }), className);

  if (href) {
    return (
      <Link href={href} className={classes} onClick={onClick}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={classes} onClick={onClick}>
      {children}
    </button>
  );
}
