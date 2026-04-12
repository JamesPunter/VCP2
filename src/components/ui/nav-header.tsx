import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

type Position = {
  left: number;
  width: number;
  opacity: number;
};

const NAV_LINKS = [
  { label: "Home", to: "/" },
  { label: "Prijzen", to: "/prijzen" },
  { label: "Reserveren", to: "/reserveren" },
  { label: "Locatie", to: "/locatie" },
  { label: "Contact", to: "/contact" },
  { label: "FAQ", to: "/faq" },
];

function NavHeader() {
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
      className="relative mx-auto flex w-fit rounded-full border-2 border-foreground bg-white p-1"
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
      {NAV_LINKS.map(({ label, to }) => (
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
          {label}
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
        className={`block px-4 py-2 text-sm font-medium uppercase select-none transition-colors duration-150 ${
          isHovered || (isActive && !isAnyHovered) ? "text-white" : "text-foreground"
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
      className="absolute z-0 top-1 h-[calc(100%-8px)] rounded-full bg-foreground pointer-events-none"
    />
  );
};

export { NavHeader };
