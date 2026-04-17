import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { NavHeader } from "@/components/ui/nav-header";
import { useLanguage } from "@/i18n/language-context";
import { pathHasDarkHero } from "@/lib/layout";
import { cn } from "@/lib/utils";

const NAV_PATHS = [
  { navKey: "home" as const, to: "/" },
  { navKey: "prices" as const, to: "/prijzen" },
  { navKey: "book" as const, to: "/reserveren" },
  { navKey: "location" as const, to: "/locatie" },
  { navKey: "contact" as const, to: "/contact" },
  { navKey: "faq" as const, to: "/faq" },
];

type HeaderSurface = "light" | "dark";

function LangToggle({
  className = "",
  surface,
}: {
  className?: string;
  surface: HeaderSurface;
}) {
  const { lang, setLang, t } = useLanguage();
  return (
    <div
      className={cn(
        "flex rounded-full border-2 bg-white p-1 shadow-sm",
        surface === "dark" ? "border-white/90" : "border-neutral-900",
        className
      )}
      role="group"
      aria-label="Taal / Language"
    >
      {(["nl", "en"] as const).map((l) => (
        <button
          key={l}
          type="button"
          onClick={() => setLang(l)}
          className={cn(
            "rounded-full px-3 py-1.5 text-xs font-semibold uppercase transition-colors",
            lang === l
              ? "bg-neutral-900 text-white"
              : "text-neutral-900 hover:bg-neutral-100"
          )}
        >
          {l === "nl" ? t.utility.langNl : t.utility.langEn}
        </button>
      ))}
    </div>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const { t } = useLanguage();

  const surface: HeaderSurface =
    scrolled || !pathHasDarkHero(location.pathname) ? "light" : "dark";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  const barColor = surface === "dark" ? "bg-white" : "bg-foreground";

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-transparent">
      <div className="mx-auto max-w-6xl px-6 pt-3 md:pt-4">
        <div className="hidden md:flex md:justify-center md:pb-3">
          <NavHeader scrolled={scrolled} />
        </div>

        <div className="md:hidden flex items-center justify-between h-14 gap-3 w-full">
          <LangToggle surface={surface} />
          <button
            className={cn(
              "flex flex-col gap-1.5 p-2 rounded-lg transition-colors shrink-0",
              surface === "dark" ? "hover:bg-white/10" : "hover:bg-black/5"
            )}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu openen"
          >
            <span
              className={cn(
                "block w-5 h-0.5 transition-all duration-300",
                barColor,
                menuOpen ? "rotate-45 translate-y-2" : ""
              )}
            />
            <span
              className={cn(
                "block w-5 h-0.5 transition-all duration-300",
                barColor,
                menuOpen ? "opacity-0" : ""
              )}
            />
            <span
              className={cn(
                "block w-5 h-0.5 transition-all duration-300",
                barColor,
                menuOpen ? "-rotate-45 -translate-y-2" : ""
              )}
            />
          </button>
        </div>
      </div>

      <div
        className={cn(
          "md:hidden bg-white border-b border-border transition-all duration-300 overflow-hidden",
          menuOpen ? "max-h-[28rem] opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <nav className="px-6 py-4 flex flex-col gap-1">
          <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-muted-foreground pb-3 border-b border-border mb-2">
            <a href="tel:0621587273" className="hover:text-foreground">
              06 2158 7273
            </a>
            <a href="tel:0206253513" className="hover:text-foreground">
              020 625 35 13
            </a>
            <a href="mailto:info@studiolegarage.nl" className="hover:text-foreground">
              info@studiolegarage.nl
            </a>
          </div>
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
