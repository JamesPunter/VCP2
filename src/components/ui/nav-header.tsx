import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { useLanguage } from "@/i18n/language-context";
import { cn } from "@/lib/utils";

type Position = {
  left: number;
  width: number;
  opacity: number;
};

const NAV_LINKS = [
  { navKey: "home" as const, to: "/" },
  { navKey: "prices" as const, to: "/prijzen" },
  { navKey: "book" as const, to: "/reserveren" },
  { navKey: "location" as const, to: "/locatie" },
  { navKey: "contact" as const, to: "/contact" },
  { navKey: "faq" as const, to: "/faq" },
];

function NavHeader({ scrolled = false }: { scrolled?: boolean }) {
  const { t } = useLanguage();
  const [position, setPosition] = useState<Position>({ left: 0, width: 0, opacity: 0 });
  const [hoveredTo, setHoveredTo] = useState<string | null>(null);
  const location = useLocation();
  const tabRefs = useRef<Map<string, HTMLLIElement>>(new Map());

  // Place cursor on active tab on mount and route change
  useEffect(() => {
    const activeRef = tabRefs.current.get(location.pathname);
    if (activeRef) {
      const { width } = activeRef.getBoundingClientRect();
      setPosition({ width, opacity: 1, left: activeRef.offsetLeft });
    }
  }, [location.pathname]);

  return (
    <ul
      className={cn(
        "relative mx-auto flex w-fit rounded-full border-2 border-neutral-900 bg-white p-1 shadow-sm transition-shadow duration-300",
        scrolled && "shadow-lg ring-1 ring-black/10"
      )}
      onMouseLeave={() => {
        setHoveredTo(null);
        // Snap cursor back to active tab
        const activeRef = tabRefs.current.get(location.pathname);
        if (activeRef) {
          const { width } = activeRef.getBoundingClientRect();
          setPosition({ width, opacity: 1, left: activeRef.offsetLeft });
        }
      }}
    >
      {NAV_LINKS.map(({ navKey, to }) => (
        <Tab
          key={to}
          to={to}
          isHovered={hoveredTo === to}
          isActive={location.pathname === to}
          isAnyHovered={hoveredTo !== null}
          setPosition={setPosition}
          setHoveredTo={setHoveredTo}
          refCallback={(el) => {
            if (el) tabRefs.current.set(to, el);
          }}
        >
          {t.nav[navKey]}
        </Tab>
      ))}
      <Cursor position={position} />
    </ul>
  );
}

const Tab = ({
  children,
  to,
  isHovered,
  isActive,
  isAnyHovered,
  setPosition,
  setHoveredTo,
  refCallback,
}: {
  children: React.ReactNode;
  to: string;
  isHovered: boolean;
  isActive: boolean;
  isAnyHovered: boolean;
  setPosition: React.Dispatch<React.SetStateAction<Position>>;
  setHoveredTo: React.Dispatch<React.SetStateAction<string | null>>;
  refCallback: (el: HTMLLIElement | null) => void;
}) => {
  return (
    <li
      ref={refCallback}
      onMouseEnter={(e) => {
        const el = e.currentTarget;
        const { width } = el.getBoundingClientRect();
        setPosition({ width, opacity: 1, left: el.offsetLeft });
        setHoveredTo(to);
      }}
      className="relative z-10 block cursor-pointer"
    >
      <Link
        to={to}
        className={`block px-3.5 sm:px-4 py-2 text-xs sm:text-sm font-semibold uppercase tracking-wide select-none transition-colors duration-150 ${
          isHovered || (isActive && !isAnyHovered) ? "text-white" : "text-neutral-900"
        }`}
      >
        {children}
      </Link>
    </li>
  );
};

const Cursor = ({ position }: { position: Position }) => {
  return (
    <motion.li
      animate={position}
      transition={{ type: "spring", stiffness: 400, damping: 30 }}
      className="absolute z-0 top-1 h-[calc(100%-8px)] rounded-full bg-neutral-900 pointer-events-none"
    />
  );
};

export { NavHeader };
