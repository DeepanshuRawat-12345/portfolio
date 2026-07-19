"use client";

import { useEffect, useState } from "react";
import { navItems } from "@/components/layout/nav-items";

/**
 * Tracks which anchor-based nav target is currently in view. Uses
 * IntersectionObserver rather than a scroll listener — cheaper, and the
 * standard tool for exactly this job.
 *
 * Reads navItems directly rather than accepting hrefs as a parameter, so
 * the effect's dependency array can stay empty (navItems is a stable
 * module-level constant) instead of re-subscribing on every render.
 *
 * Gracefully skips any href that doesn't resolve to a real element yet —
 * sections that don't exist in a given milestone just never become
 * "active." Nothing here needs to change as more sections are added.
 */
export function useActiveSection(): string | null {
  const [activeHref, setActiveHref] = useState<string | null>(null);

  useEffect(() => {
    const anchorTargets = navItems
      .filter((item) => item.href.startsWith("#"))
      .map((item) => ({
        href: item.href,
        el: document.querySelector(item.href),
      }))
      .filter(
        (entry): entry is { href: string; el: Element } => entry.el !== null,
      );

    if (anchorTargets.length === 0) return;

    const observer = new IntersectionObserver(
      (observedEntries) => {
        for (const observedEntry of observedEntries) {
          if (!observedEntry.isIntersecting) continue;
          const match = anchorTargets.find(
            (target) => target.el === observedEntry.target,
          );
          if (match) setActiveHref(match.href);
        }
      },
      // Fires when a section crosses the vertical center band of the
      // viewport, rather than the moment any sliver of it appears.
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 },
    );

    anchorTargets.forEach(({ el }) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return activeHref;
}
