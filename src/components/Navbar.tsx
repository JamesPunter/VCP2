import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { NavHeader } from "@/components/ui/nav-header";
import { useLanguage } from "@/i18n/language-context";
import { cn } from "@/lib/utils";

const NAV_PATHS = [
  { navKey: "home" as const, to: "/" },
  { navKey: "prices" as const, to: "/prijzen" },
  { navKey: "book" as const, to: "/reserveren" },
  { navKey: "location" as const, to: "/locatie" },
  { navKey: "contact" as const, to: "/contact" },
  { navKey: "faq" as const, to: "/faq" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50",
        menuOpen ? "max-md:bg-white" : "bg-transparent"
      )}
    >
      <div className="mx-auto max-w-6xl px-6 pt-0 md:pt-4">
        <div className="hidden md:flex md:justify-center md:pb-3">
          <NavHeader scrolled={scrolled} />
        </div>

        <div
          className={cn(
            "md:hidden flex w-full items-center justify-end gap-3",
            "pt-[calc(env(safe-area-inset-top,0px)+0.625rem)]",
            menuOpen ? "min-h-12 pb-2.5" : "pb-2"
          )}
        >
          <button
            type="button"
            className={cn(
              "flex flex-col justify-center gap-1 rounded-full p-1.5 shrink-0",
              "bg-white/92 backdrop-blur-md border border-neutral-900/12 shadow-sm shadow-black/10",
              "transition-[background-color,box-shadow,border-color] hover:bg-white hover:border-neutral-900/18 hover:shadow-md"
            )}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            aria-label={menuOpen ? "Menu sluiten" : "Menu openen"}
          >
            <span
              className={cn(
                "block h-0.5 w-4 rounded-full bg-neutral-900 transition-all duration-300",
                menuOpen ? "translate-y-1.5 rotate-45" : ""
              )}
            />
            <span
              className={cn(
                "block h-0.5 w-4 rounded-full bg-neutral-900 transition-all duration-300",
                menuOpen ? "opacity-0" : ""
              )}
            />
            <span
              className={cn(
                "block h-0.5 w-4 rounded-full bg-neutral-900 transition-all duration-300",
                menuOpen ? "-translate-y-1.5 -rotate-45" : ""
              )}
            />
          </button>
        </div>
      </div>

      <div
        id="mobile-nav"
        className={cn(
          "md:hidden bg-white border-b border-border transition-all duration-300 overflow-hidden",
          menuOpen ? "max-h-[28rem] opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <nav className="px-6 py-4 flex flex-col gap-1" aria-label="Hoofdmenu">
          {NAV_PATHS.map(({ navKey, to }) => {
            const active = location.pathname === to;
            return (
              <Link
                key={to}
                to={to}
                className={cn(
                  "px-4 py-3 rounded-lg text-sm font-medium transition-colors",
                  active
                    ? "bg-neutral-900 text-white"
                    : "text-muted-foreground hover:text-foreground hover:bg-neutral-100"
                )}
              >
                {t.nav[navKey]}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
