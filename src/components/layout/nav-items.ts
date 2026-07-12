export interface NavItem {
  label: string;
  href: string;
}

/**
 * TEMPORARY — moves into content/site-config.ts once the data-architecture
 * milestone lands (that doc already reserves a `nav` field for exactly
 * this). Kept local for now so this milestone stays a pure layout shell
 * with no reach into content data that doesn't exist yet.
 *
 * Anchor hrefs (#about, #skills, ...) target sections that don't exist
 * on the page yet — they resolve as each section is built in a later
 * milestone. That's expected, not a bug.
 */
export const navItems: NavItem[] = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#featured-projects" },
  { label: "Research", href: "#research" },
  { label: "Certificates", href: "#certificates" },
  { label: "Contact", href: "#contact" },
];

/**
 * Resume is a real route, not an anchor, and is treated as a distinct
 * call-to-action in the header rather than another nav list item — it's
 * the fast path for the "10-20 second scan" visitor from the PRD, and
 * deserves a visually different treatment from the narrative-flow links.
 */
export const resumeLink: NavItem = { label: "Resume", href: "/resume" };
