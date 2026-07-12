/**
 * Standard a11y pattern: invisible until focused (tab-to-reveal), lets
 * keyboard/screen-reader users jump past the header/nav straight to the
 * page content instead of tabbing through every nav link first.
 */
export function SkipToContent() {
  return (
    <a
      href="#main-content"
      className="bg-accent focus-visible:outline-accent fixed top-2 left-2 z-[100] -translate-y-16 rounded-md px-4 py-2 text-sm font-medium text-white transition-transform focus:translate-y-0 focus-visible:outline-2 focus-visible:outline-offset-2"
    >
      Skip to main content
    </a>
  );
}
