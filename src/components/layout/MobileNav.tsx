"use client";

import { useEffect, useRef } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { navItems, resumeLink } from "@/components/layout/nav-items";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface MobileNavProps {
  open: boolean;
  onClose: () => void;
  activeHref: string | null;
}

export function MobileNav({ open, onClose, activeHref }: MobileNavProps) {
  const firstLinkRef = useRef<HTMLAnchorElement>(null);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (open) firstLinkRef.current?.focus();
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-black/40 md:hidden"
            onClick={onClose}
            aria-hidden="true"
          />
          <motion.nav
            key="panel"
            id="mobile-nav"
            aria-label="Mobile"
            initial={{
              x: shouldReduceMotion ? 0 : "100%",
              opacity: shouldReduceMotion ? 0 : 1,
            }}
            animate={{ x: 0, opacity: 1 }}
            exit={{
              x: shouldReduceMotion ? 0 : "100%",
              opacity: shouldReduceMotion ? 0 : 1,
            }}
            transition={{
              duration: shouldReduceMotion ? 0.15 : 0.3,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="bg-card fixed inset-y-0 right-0 z-50 flex w-full max-w-xs flex-col gap-1 px-6 py-24 shadow-lg md:hidden"
          >
            {navItems.map((item, index) => (
              <a
                key={item.href}
                ref={index === 0 ? firstLinkRef : undefined}
                href={item.href}
                onClick={onClose}
                className={cn(
                  "hover:bg-surface-muted rounded-md px-3 py-3 text-lg font-medium transition-colors",
                  item.href === activeHref ? "text-accent" : "text-foreground",
                )}
              >
                {item.label}
              </a>
            ))}
            <Button
              href={resumeLink.href}
              onClick={onClose}
              variant="secondary"
              className="mt-4"
            >
              {resumeLink.label}
            </Button>
          </motion.nav>
        </>
      )}
    </AnimatePresence>
  );
}
