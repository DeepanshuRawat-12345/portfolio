/**
 * Intentionally bare. Next.js requires a page at this route for the app
 * to build and serve anything at all — this is that technical minimum,
 * not a designed section. It exists to verify the layout shell (Header,
 * Footer, tokens) renders correctly. Gets fully replaced when we build
 * the Landing feature.
 *
 * pt-32 here specifically (not on <main> in the layout) accounts for the
 * fixed header, since this bare page has no hero-style content for the
 * header to float over — a real Hero will handle this itself.
 */
export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center pt-32">
      <p className="text-muted-foreground font-sans text-sm">
        Foundation OK — sections land in upcoming milestones.
      </p>
    </div>
  );
}
