"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { BrandMark } from "@/components/brand";
import { PortalLink } from "@/components/portal-link";
import { navItems } from "@/lib/site";

function isActive(pathname: string, href: string) {
  return href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);
}

export function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => setMenuOpen(false), [pathname]);

  useEffect(() => {
    if (!menuOpen) return;
    menuRef.current?.querySelector<HTMLAnchorElement>("a")?.focus();
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        toggleRef.current?.focus();
      }
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [menuOpen]);

  return (
    <header className="sticky top-0 z-40 border-b border-navy/10 bg-white/95 backdrop-blur-xl">
      <div className="mx-auto flex min-h-[76px] max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <BrandMark />
        <nav aria-label="Primary navigation" className="hidden items-center gap-1 text-sm font-bold text-slate xl:flex">
          {navItems.map((item) => {
            const active = isActive(pathname, item.href);
            return <Link aria-current={active ? "page" : undefined} className={`rounded-lg px-3 py-2.5 transition ${active ? "bg-[#EDF6FA] text-navy" : "hover:bg-soft hover:text-navy"}`} href={item.href} key={item.href}>{item.label}</Link>;
          })}
        </nav>
        <div className="hidden items-center gap-4 md:flex">
          <PortalLink className="text-sm font-bold text-slate transition hover:text-navy" />
          <Link className="inline-flex min-h-11 items-center rounded-xl bg-navy px-4 py-2 text-sm font-extrabold text-white transition hover:bg-[#214562]" href="/request-assessment">Request an Assessment</Link>
        </div>
        <button ref={toggleRef} aria-controls="mobile-menu" aria-expanded={menuOpen} aria-label={`${menuOpen ? "Close" : "Open"} navigation menu`} className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-navy/15 bg-white text-navy md:hidden" onClick={() => setMenuOpen((open) => !open)} type="button">
          <span aria-hidden="true" className="grid gap-1.5">
            <span className={`block h-0.5 w-5 rounded-full bg-current transition ${menuOpen ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`block h-0.5 w-5 rounded-full bg-current transition ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block h-0.5 w-5 rounded-full bg-current transition ${menuOpen ? "-translate-y-2 -rotate-45" : ""}`} />
          </span>
        </button>
      </div>
      <div ref={menuRef} className={`${menuOpen ? "block" : "hidden"} border-t border-navy/10 bg-white px-4 py-3 md:hidden`} id="mobile-menu">
        <nav aria-label="Mobile navigation" className="mx-auto grid max-w-7xl gap-1 text-sm font-bold text-navy">
          {navItems.map((item) => <Link aria-current={isActive(pathname, item.href) ? "page" : undefined} className={`rounded-xl px-4 py-3 ${isActive(pathname, item.href) ? "bg-soft" : "hover:bg-soft"}`} href={item.href} key={item.href}>{item.label}</Link>)}
          <PortalLink className="rounded-xl px-4 py-3 text-slate hover:bg-soft hover:text-navy" />
          <Link className="mt-2 inline-flex min-h-11 items-center justify-center rounded-xl bg-navy px-4 py-3 text-sm font-extrabold text-white" href="/request-assessment">Request an Assessment</Link>
        </nav>
      </div>
    </header>
  );
}
