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
    <header className="sticky top-2 z-40 px-3 sm:px-5 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex min-h-[72px] items-center justify-between gap-3 rounded-[20px] border border-navy/10 bg-white/94 px-4 shadow-[0_16px_48px_rgba(23,50,77,0.105)] backdrop-blur-2xl sm:px-5">
          <BrandMark />
          <nav aria-label="Primary navigation" className="hidden items-center gap-0.5 rounded-full border border-navy/10 bg-soft/80 p-1 text-sm font-bold text-slate shadow-inner lg:flex">
            {navItems.map((item) => {
              const active = isActive(pathname, item.href);

              return (
                <Link
                  aria-current={active ? "page" : undefined}
                  className={`rounded-full px-3.5 py-2 transition duration-200 ${active ? "bg-[#102A43] text-white shadow-sm" : "hover:-translate-y-0.5 hover:bg-white hover:text-navy"}`}
                  href={item.href}
                  key={item.href}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
          <div className="hidden items-center gap-3 lg:flex">
            <PortalLink className="rounded-full border border-navy/10 bg-[#EDF6FA] px-3 py-2 text-sm font-extrabold text-navy transition hover:border-teal/40 hover:text-teal" comingSoonClassName="rounded-full border border-navy/10 bg-[#EDF6FA] px-3 py-2 text-sm font-extrabold text-navy" />
            <Link className="inline-flex min-h-11 items-center rounded-xl bg-navy px-4 py-2 text-sm font-extrabold text-white shadow-sm transition duration-200 hover:-translate-y-0.5 hover:bg-[#214562]" href="/request-assessment">
              Request an Assessment
            </Link>
          </div>
          <button
            aria-controls="mobile-menu"
            aria-expanded={menuOpen}
            aria-label="Toggle navigation menu"
            className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-navy/10 bg-white text-navy shadow-sm transition hover:-translate-y-0.5 hover:border-teal/40 lg:hidden"
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
      </div>
      <div className={`${menuOpen ? "block" : "hidden"} mx-auto mt-2 max-w-7xl rounded-[20px] border border-navy/10 bg-white/98 p-2 shadow-[0_22px_64px_rgba(23,50,77,0.13)] backdrop-blur-2xl lg:hidden`} id="mobile-menu">
        <nav aria-label="Mobile navigation" className="grid gap-1 text-sm font-bold text-navy">
          {navItems.map((item) => (
            <Link
              aria-current={isActive(pathname, item.href) ? "page" : undefined}
              className={`rounded-xl px-3 py-3 ${isActive(pathname, item.href) ? "bg-soft text-navy" : "hover:bg-soft"}`}
              href={item.href}
              key={item.href}
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <PortalLink className="rounded-xl px-3 py-3 hover:bg-soft" comingSoonClassName="rounded-xl px-3 py-3 text-navy" />
          <Link className="mt-2 inline-flex min-h-11 items-center justify-center rounded-xl bg-navy px-4 py-2 text-sm font-extrabold text-white" href="/request-assessment" onClick={() => setMenuOpen(false)}>
            Request an Assessment
          </Link>
        </nav>
      </div>
    </header>
  );
}
