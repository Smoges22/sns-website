"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { BrandMark } from "@/components/brand";
import { PortalLink } from "@/components/portal-link";
import { navItems } from "@/lib/site";

function isActive(pathname: string, href: string) {
  if (href === "/") {
    return pathname === "/";
  }

  return pathname === href || pathname.startsWith(`${href}/`);
}

export function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-navy/10 bg-white/88 shadow-[0_1px_0_rgba(23,50,77,0.04)] backdrop-blur-2xl">
      <div className="mx-auto flex min-h-[76px] max-w-7xl items-center justify-between gap-5 px-5 sm:px-6 lg:px-8">
        <BrandMark />
        <nav aria-label="Primary navigation" className="hidden items-center gap-1 rounded-full border border-navy/10 bg-white/70 p-1 text-sm font-bold text-slate shadow-sm lg:flex">
          {navItems.map((item) => {
            const active = isActive(pathname, item.href);

            return (
              <Link
                aria-current={active ? "page" : undefined}
                className={`rounded-full px-4 py-2 transition duration-200 ${active ? "bg-navy text-white shadow-sm" : "hover:-translate-y-0.5 hover:bg-soft hover:text-navy"}`}
                href={item.href}
                key={item.href}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
        <div className="hidden items-center gap-3 lg:flex">
          <PortalLink className="text-sm font-extrabold text-navy transition hover:text-teal" comingSoonClassName="text-sm font-extrabold text-navy" />
          <Link className="inline-flex min-h-11 items-center rounded-lg bg-navy px-4 py-2 text-sm font-extrabold text-white shadow-sm transition duration-200 hover:-translate-y-0.5 hover:bg-[#214562]" href="/request-assessment">
            Request an Assessment
          </Link>
        </div>
        <button
          aria-controls="mobile-menu"
          aria-expanded={menuOpen}
          aria-label="Toggle navigation menu"
          className="grid h-11 w-11 place-items-center rounded-lg border border-navy/10 bg-white text-navy shadow-sm lg:hidden"
          onClick={() => setMenuOpen((open) => !open)}
          type="button"
        >
          <span className="sr-only">Menu</span>
          <span className="grid gap-1.5">
            <span className={`block h-0.5 w-5 rounded-full bg-current transition ${menuOpen ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`block h-0.5 w-5 rounded-full bg-current transition ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block h-0.5 w-5 rounded-full bg-current transition ${menuOpen ? "-translate-y-2 -rotate-45" : ""}`} />
          </span>
        </button>
      </div>
      <div className={`${menuOpen ? "block" : "hidden"} border-t border-navy/10 bg-white lg:hidden`} id="mobile-menu">
        <nav aria-label="Mobile navigation" className="mx-auto grid max-w-7xl gap-1 px-5 py-4 text-sm font-bold text-navy sm:px-6">
          {navItems.map((item) => (
            <Link
              aria-current={isActive(pathname, item.href) ? "page" : undefined}
              className={`rounded-lg px-3 py-3 ${isActive(pathname, item.href) ? "bg-soft text-navy" : "hover:bg-soft"}`}
              href={item.href}
              key={item.href}
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <PortalLink className="rounded-lg px-3 py-3 hover:bg-soft" comingSoonClassName="rounded-lg px-3 py-3 text-navy" />
          <Link className="mt-2 inline-flex min-h-11 items-center justify-center rounded-lg bg-navy px-4 py-2 text-sm font-extrabold text-white" href="/request-assessment" onClick={() => setMenuOpen(false)}>
            Request an Assessment
          </Link>
        </nav>
      </div>
    </header>
  );
}
