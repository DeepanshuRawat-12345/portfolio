"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Container } from "@/components/layout/Container";
import { MobileNav } from "@/components/layout/MobileNav";
import { navItems, resumeLink } from "@/components/layout/nav-items";
import { useActiveSection } from "@/components/layout/use-active-section";
import { Button } from "@/components/ui/button";

const SCROLL_THRESHOLD = 24;

/**
 * Underline grows in from the left on hover, and stays permanently shown
 * (still animated in, not just present) for whichever section is
 * currently active — a restrained micro-interaction rather than a hard
 * color swap alone.
 */
function navLinkClasses(isActive: boolean) {
  return cn(
    "relative py-1 text-sm transition-colors after:absolute after:inset-x-0 after:-bottom-0.5 after:h-px after:origin-left after:scale-x-0 after:bg-accent after:transition-transform after:duration-300 motion-reduce:after:transition-none",
    isActive
      ? "text-foreground after:scale-x-100"
      : "text-muted-foreground hover:text-foreground hover:after:scale-x-100",
  );
}

/**
 * Starts transparent over whatever sits at the top of the page (the
 * Hero, once it exists) and gains a blurred background + shadow past a
 * small scroll threshold — our reinterpretation of the "header earns its
 * space back on scroll" idea from the reference-site review, rather than
 * a plain height swap.
 */
export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const activeHref = useActiveSection();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > SCROLL_THRESHOLD);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock background scroll and support Escape while the mobile menu is open.
  useEffect(() => {
    if (!mobileNavOpen) return;

    document.body.style.overflow = "hidden";
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMobileNavOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [mobileNavOpen]);

  // Close the mobile menu automatically if the viewport grows past the
  // mobile breakpoint (e.g. rotating a tablet) while it's open.
  useEffect(() => {
    const mql = window.matchMedia("(min-width: 768px)");
    const onChange = () => {
      if (mql.matches) setMobileNavOpen(false);
    };
    mql.addEventListener("change", onChange);
    return () => mql.removeEventListener("change", onChange);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow,padding] duration-300 [transition-timing-function:var(--ease-standard)] motion-reduce:transition-none",
        scrolled
          ? "bg-background/80 py-3 shadow-sm backdrop-blur-md"
          : "bg-transparent py-6",
      )}
    >
      <Container className="flex items-center justify-between">
        <Link
          href="/"
          className="font-display text-foreground text-lg font-semibold tracking-tight"
        >
          Deepanshu Rawat
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={navLinkClasses(item.href === activeHref)}
            >
              {item.label}
            </a>
          ))}
          <Button href={resumeLink.href} variant="secondary" size="sm">
            {resumeLink.label}
          </Button>
        </nav>

        <button
          type="button"
          aria-expanded={mobileNavOpen}
          aria-controls="mobile-nav"
          aria-label={mobileNavOpen ? "Close menu" : "Open menu"}
          onClick={() => setMobileNavOpen((open) => !open)}
          className="text-foreground inline-flex h-10 w-10 items-center justify-center rounded-md md:hidden"
        >
          {mobileNavOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </Container>

      <MobileNav
        open={mobileNavOpen}
        onClose={() => setMobileNavOpen(false)}
        activeHref={activeHref}
      />
    </header>
  );
}
