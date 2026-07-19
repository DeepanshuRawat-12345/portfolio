import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons/brand-icons";
import { Section } from "@/components/layout/Section";

// TODO: replace with real profile URLs once content/site-config.ts
// (data-architecture milestone) exists — placeholder hrefs for now so
// the component is complete and visually testable without inventing
// content that isn't real yet.
const socialLinks = [
  { label: "GitHub", href: "#", icon: GithubIcon },
  { label: "LinkedIn", href: "#", icon: LinkedinIcon },
  { label: "Email", href: "#", icon: Mail },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <Section as="footer" tone="inverted" size="lg">
      <div className="flex flex-col items-center gap-8 text-center md:flex-row md:items-end md:justify-between md:text-left">
        <div>
          <p className="font-display text-lg font-semibold">Deepanshu Rawat</p>
          {/* Replaces the old tagline restatement — Footer's job is to
              read as the end of the page, not repeat the meta
              description a third time. */}
          <p className="text-inverted-foreground/70 mt-2 max-w-sm text-base text-pretty">
            That&apos;s the story so far — let&apos;s talk about what&apos;s
            next.
          </p>
        </div>

        <div className="flex items-center gap-4">
          {socialLinks.map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              className="text-inverted-foreground/70 hover:text-accent rounded-md p-2 transition-all duration-200 hover:-translate-y-0.5 motion-reduce:hover:translate-y-0"
            >
              <Icon size={20} aria-hidden="true" />
            </a>
          ))}
        </div>
      </div>

      <p className="text-inverted-foreground/50 mt-12 text-center text-xs md:text-left">
        © {year} Deepanshu Rawat. All rights reserved.
      </p>
    </Section>
  );
}
