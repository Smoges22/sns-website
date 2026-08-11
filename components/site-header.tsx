"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { BrandMark } from "@/components/brand";
import { buttonVariants } from "@/components/ui";
import { desktopNavItems, navItems } from "@/lib/site";
import { primaryServices, servicePath } from "@/lib/services";

function isActive(pathname: string, href: string) {
  return href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);
}

export function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const servicesButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => { setMenuOpen(false); setServicesOpen(false); }, [pathname]);
  useEffect(() => {
    if (!menuOpen) return;
    menuRef.current?.querySelector<HTMLElement>("a, summary")?.focus();
    const closeOnEscape = (event: KeyboardEvent) => { if (event.key === "Escape") { setMenuOpen(false); toggleRef.current?.focus(); } };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [menuOpen]);
  useEffect(() => {
    if (!servicesOpen) return;
    const close = (event: MouseEvent) => { if (!servicesRef.current?.contains(event.target as Node)) setServicesOpen(false); };
    const closeOnEscape = (event: KeyboardEvent) => { if (event.key === "Escape") { setServicesOpen(false); servicesButtonRef.current?.focus(); } };
    document.addEventListener("mousedown", close);
    window.addEventListener("keydown", closeOnEscape);
    return () => { document.removeEventListener("mousedown", close); window.removeEventListener("keydown", closeOnEscape); };
  }, [servicesOpen]);

  return (
    <header className="sticky top-0 z-40 border-b border-[#D5E1E7] bg-white/95 font-sans backdrop-blur">
      <div className="mx-auto flex min-h-[76px] max-w-[1500px] items-center justify-between gap-4 px-4 sm:min-h-[80px] sm:px-6 lg:min-h-[84px] lg:px-8">
        <BrandMark />
        <nav aria-label="Primary navigation" className="hidden items-center gap-0.5 text-[15px] font-semibold xl:flex 2xl:gap-1">
          {desktopNavItems.map((item) => item.href === "/services" ? (
            <div className="relative" key={item.href} ref={servicesRef}>
              <button ref={servicesButtonRef} aria-expanded={servicesOpen} aria-haspopup="true" className="nav-underline inline-flex min-h-11 items-center gap-1.5 px-2 py-3 2xl:px-3" data-active={isActive(pathname,item.href)} onClick={() => setServicesOpen((open)=>!open)} type="button">Services<span aria-hidden="true" className={`text-[9px] transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`}>▼</span></button>
              {servicesOpen ? <div className="nav-dropdown absolute left-1/2 top-[calc(100%+.55rem)] w-[430px] -translate-x-1/2 rounded-[18px] border border-[#C9D8E0] bg-white p-3 shadow-[0_20px_52px_rgba(23,50,77,.14)]"><div className="grid gap-1"><Link aria-current={pathname === "/services" ? "page" : undefined} className="dropdown-link rounded-xl px-4 py-3.5 font-semibold text-navy" href="/services">Services Overview</Link>{primaryServices.map((service)=><Link aria-current={isActive(pathname,servicePath(service)) ? "page" : undefined} className="dropdown-link rounded-xl px-4 py-3.5 font-semibold leading-5 text-navy" href={servicePath(service)} key={service.slug}>{service.navigationLabel}</Link>)}</div></div> : null}
            </div>
          ) : <Link aria-current={isActive(pathname,item.href) ? "page" : undefined} className="nav-underline min-h-11 px-2 py-3 2xl:px-2.5" href={item.href} key={item.href}>{item.label}</Link>)}
        </nav>
        <div className="hidden shrink-0 items-center gap-2.5 xl:flex">
          <Link className={`inline-flex min-h-11 items-center rounded-[10px] px-4 py-2 text-sm font-extrabold transition-colors ${buttonVariants.primary}`} href="/request-assessment">Request an Assessment</Link>
          <Link aria-current={isActive(pathname,"/refer-a-client") ? "page" : undefined} className={`inline-flex min-h-11 items-center rounded-[10px] px-4 py-2 text-sm font-extrabold transition-colors ${buttonVariants.referral}`} href="/refer-a-client">Refer a Client</Link>
        </div>
        <button ref={toggleRef} aria-controls="mobile-menu" aria-expanded={menuOpen} aria-label={`${menuOpen ? "Close" : "Open"} navigation menu`} className="grid h-11 w-11 shrink-0 place-items-center rounded-[12px] border border-[#C9D8E0] bg-white text-navy shadow-[0_4px_14px_rgba(23,50,77,.06)] transition-colors duration-200 hover:border-teal/40 hover:bg-[#F3F9FA] hover:text-teal xl:hidden" onClick={() => setMenuOpen((open) => !open)} type="button"><span aria-hidden="true" className="grid gap-1.5"><span className={`block h-0.5 w-5 rounded-full bg-current transition duration-200 ${menuOpen ? "translate-y-2 rotate-45" : ""}`} /><span className={`block h-0.5 w-5 rounded-full bg-current transition duration-200 ${menuOpen ? "opacity-0" : ""}`} /><span className={`block h-0.5 w-5 rounded-full bg-current transition duration-200 ${menuOpen ? "-translate-y-2 -rotate-45" : ""}`} /></span></button>
      </div>
      <div ref={menuRef} className={`${menuOpen ? "mobile-menu-panel block" : "hidden"} max-h-[calc(100vh-76px)] overflow-y-auto border-t border-navy/10 bg-[#FAFCFC] px-4 py-4 shadow-[0_18px_40px_rgba(23,50,77,.09)] sm:max-h-[calc(100vh-80px)] xl:hidden`} id="mobile-menu">
        <nav aria-label="Mobile navigation" className="mx-auto max-w-7xl text-navy">
          <div className="divide-y divide-[#E1EAEE] overflow-hidden rounded-[16px] border border-[#D5E1E7] bg-white shadow-[0_8px_24px_rgba(23,50,77,.045)]">
            <Link aria-current={pathname === "/" ? "page" : undefined} className="mobile-nav-link" href="/">Home</Link>
            <details><summary className={`mobile-nav-link cursor-pointer pr-12 ${isActive(pathname,"/services") ? "text-teal" : ""}`}>Services</summary><div className="border-t border-[#E1EAEE] bg-[#F7FAFB] py-1"><Link aria-current={pathname === "/services" ? "page" : undefined} className="mobile-nav-link pl-6" href="/services">Services Overview</Link>{primaryServices.map((service)=><Link aria-current={isActive(pathname,servicePath(service)) ? "page" : undefined} className="mobile-nav-link pl-6" href={servicePath(service)} key={service.slug}>{service.navigationLabel}</Link>)}</div></details>
            {navItems.filter((item)=>item.href!=="/"&&item.href!=="/services").map((item)=><Link aria-current={isActive(pathname,item.href) ? "page" : undefined} className="mobile-nav-link" href={item.href} key={item.href}>{item.label}</Link>)}
          </div>
          <div className="mt-4 grid gap-2 border-t border-[#D5E1E7] pt-4">
            <Link aria-current={isActive(pathname,"/request-assessment") ? "page" : undefined} className={`inline-flex min-h-12 items-center justify-center rounded-[10px] px-4 py-3 text-sm font-extrabold transition-colors ${buttonVariants.primary}`} href="/request-assessment">Request an Assessment</Link>
            <Link aria-current={isActive(pathname,"/refer-a-client") ? "page" : undefined} className={`inline-flex min-h-12 items-center justify-center rounded-[10px] px-4 py-3 text-sm font-extrabold transition-colors ${buttonVariants.referral}`} href="/refer-a-client">Refer a Client</Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
