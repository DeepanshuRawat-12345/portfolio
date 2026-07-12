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
    <Section as="footer" tone="muted" size="default">
      <div className="flex flex-col items-center gap-6 text-center md:flex-row md:justify-between md:text-left">
        <div>
          <p className="font-display text-foreground text-base font-semibold">
            Deepanshu Rawat
          </p>
          <p className="text-muted-foreground mt-1 text-sm">
            Building intelligent systems with AI, ML, Data Analytics, Computer
            Vision, and IoT.
          </p>
        </div>

        <div className="flex items-center gap-4">
          {socialLinks.map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              className="text-muted-foreground hover:text-accent rounded-md p-2 transition-colors"
            >
              <Icon size={20} aria-hidden="true" />
            </a>
          ))}
        </div>
      </div>

      <p className="text-muted-foreground mt-10 text-center text-xs md:text-left">
        © {year} Deepanshu Rawat. All rights reserved.
      </p>
    </Section>
  );
}
