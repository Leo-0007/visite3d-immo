"use client";

import { useState, useEffect, useCallback } from "react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

const NAV_LINKS = [
  { label: "Démo", href: "#demo" },
  { label: "Processus", href: "#processus" },
  { label: "Tarifs", href: "#tarifs" },
  { label: "FAQ", href: "#faq" },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 640) setMobileOpen(false);
    };
    window.addEventListener("resize", onResize, { passive: true });
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const handleNavClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      e.preventDefault();
      setMobileOpen(false);
      const id = href.replace("#", "");
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
        window.history.replaceState(null, "", href);
      }
    },
    []
  );

  return (
    <nav
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-500",
        scrolled
          ? "bg-white/90 backdrop-blur-xl border-b border-[var(--v3d-warm-border)] shadow-sm"
          : "bg-transparent"
      )}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <a
          href="/"
          className="text-lg font-bold text-[var(--v3d-text)] tracking-[-0.02em] transition-opacity hover:opacity-80"
        >
          Visite<span className="text-[var(--v3d-blue)]">3D</span>
        </a>

        {/* Desktop links */}
        <div className="hidden items-center gap-8 text-[13px] text-[var(--v3d-text-secondary)] sm:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="transition-colors duration-200 hover:text-[var(--v3d-text)]"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop CTA + Mobile hamburger */}
        <div className="flex items-center gap-3">
          <a
            href="#tarifs"
            onClick={(e) => handleNavClick(e, "#tarifs")}
            className={cn(
              buttonVariants({ size: "sm" }),
              "hidden sm:inline-flex bg-[var(--v3d-blue)] text-white hover:bg-[#164060] text-xs font-semibold px-5 rounded-lg"
            )}
          >
            Commander
          </a>

          {/* Hamburger */}
          <button
            type="button"
            aria-label={mobileOpen ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
            className="relative flex h-8 w-8 items-center justify-center sm:hidden"
          >
            <span
              className={cn(
                "absolute h-[1.5px] w-4 rounded-full bg-[var(--v3d-text)] transition-all duration-300",
                mobileOpen ? "rotate-45 translate-y-0" : "-translate-y-[5px]"
              )}
            />
            <span
              className={cn(
                "absolute h-[1.5px] w-4 rounded-full bg-[var(--v3d-text)] transition-all duration-300",
                mobileOpen ? "opacity-0" : "opacity-100"
              )}
            />
            <span
              className={cn(
                "absolute h-[1.5px] w-4 rounded-full bg-[var(--v3d-text)] transition-all duration-300",
                mobileOpen ? "-rotate-45 translate-y-0" : "translate-y-[5px]"
              )}
            />
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      <div
        className={cn(
          "overflow-hidden transition-all duration-300 sm:hidden",
          mobileOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="mx-6 mb-5 flex flex-col gap-1 rounded-2xl border border-[var(--v3d-warm-border)] bg-white/95 backdrop-blur-xl p-4 shadow-lg">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="rounded-xl px-4 py-3 text-sm text-[var(--v3d-text-secondary)] transition-colors hover:bg-[var(--v3d-warm-bg)] hover:text-[var(--v3d-text)]"
            >
              {link.label}
            </a>
          ))}
          <div className="mt-2 px-4">
            <a
              href="#tarifs"
              onClick={(e) => handleNavClick(e, "#tarifs")}
              className={cn(
                buttonVariants({ size: "sm" }),
                "w-full bg-[var(--v3d-blue)] text-white hover:bg-[#164060] text-xs font-semibold rounded-lg"
              )}
            >
              Commander
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
