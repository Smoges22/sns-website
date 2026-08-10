"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { BrandMark } from "@/components/brand";
import { navItems } from "@/lib/site";
import { serviceNavigation, servicePath } from "@/lib/services";

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
    <header className="sticky top-0 z-40 border-b border-[#D5E1E7] bg-white/95 backdrop-blur">
      <div className="mx-auto flex min-h-[82px] max-w-[1500px] items-center justify-between gap-4 px-4 sm:min-h-[90px] sm:px-6 lg:min-h-[96px] lg:px-8">
        <BrandMark />
        <nav aria-label="Primary navigation" className="hidden items-center gap-0.5 text-[13px] font-bold text-[#425466] xl:flex 2xl:gap-1">
          {navItems.map((item) => item.href === "/services" ? (
            <div className="relative" key={item.href} ref={servicesRef}>
              <button ref={servicesButtonRef} aria-expanded={servicesOpen} aria-haspopup="true" className={`inline-flex min-h-11 items-center gap-1.5 rounded-lg px-2.5 py-3 transition-colors 2xl:px-3 ${isActive(pathname,item.href) ? "bg-[#EDF6FA] text-navy" : "hover:bg-soft hover:text-navy"}`} onClick={() => setServicesOpen((open)=>!open)} type="button">Services<span aria-hidden="true" className={`text-[10px] transition-transform ${servicesOpen ? "rotate-180" : ""}`}>▼</span></button>
              {servicesOpen ? <div className="absolute left-1/2 top-[calc(100%+.65rem)] w-[620px] -translate-x-1/2 rounded-[22px] border border-[#C9D8E0] bg-white p-5 shadow-[0_22px_60px_rgba(23,50,77,.16)]"><Link className="mb-4 block rounded-xl bg-[#F1F7F9] px-4 py-3 font-black text-navy hover:bg-[#E7F2F5]" href="/services">View all RN services</Link><div className="grid grid-cols-2 gap-5">{serviceNavigation.map((group)=><div key={group.label}><p className="px-2 text-[11px] font-black uppercase tracking-[.15em] text-teal">{group.label}</p><div className="mt-2 grid gap-1">{group.services.map((service)=><Link className="rounded-xl px-3 py-2.5 font-bold leading-5 text-slate hover:bg-soft hover:text-navy" href={servicePath(service)} key={service.slug}>{service.shortTitle}</Link>)}</div></div>)}</div></div> : null}
            </div>
          ) : <Link aria-current={isActive(pathname,item.href) ? "page" : undefined} className={`rounded-lg px-2.5 py-3 transition-colors 2xl:px-3 ${isActive(pathname,item.href) ? "bg-[#EDF6FA] text-navy" : "hover:bg-soft hover:text-navy"}`} href={item.href} key={item.href}>{item.label}</Link>)}
        </nav>
        <Link className="hidden min-h-12 items-center rounded-lg bg-navy px-4 py-2 text-sm font-extrabold text-white transition-colors hover:bg-[#214562] xl:inline-flex" href="/request-assessment">Request an Assessment</Link>
        <button ref={toggleRef} aria-controls="mobile-menu" aria-expanded={menuOpen} aria-label={`${menuOpen ? "Close" : "Open"} navigation menu`} className="grid h-12 w-12 shrink-0 place-items-center rounded-lg border border-navy/15 bg-white text-navy transition-colors hover:bg-soft xl:hidden" onClick={() => setMenuOpen((open) => !open)} type="button"><span aria-hidden="true" className="grid gap-1.5"><span className={`block h-0.5 w-5 rounded-full bg-current transition ${menuOpen ? "translate-y-2 rotate-45" : ""}`} /><span className={`block h-0.5 w-5 rounded-full bg-current transition ${menuOpen ? "opacity-0" : ""}`} /><span className={`block h-0.5 w-5 rounded-full bg-current transition ${menuOpen ? "-translate-y-2 -rotate-45" : ""}`} /></span></button>
      </div>
      <div ref={menuRef} className={`${menuOpen ? "block" : "hidden"} max-h-[calc(100vh-82px)] overflow-y-auto border-t border-navy/10 bg-white px-4 py-4 xl:hidden`} id="mobile-menu">
        <nav aria-label="Mobile navigation" className="mx-auto grid max-w-7xl gap-1 text-sm font-bold text-navy">
          <Link aria-current={pathname === "/" ? "page" : undefined} className={`rounded-xl px-4 py-3 ${pathname === "/" ? "bg-soft" : "hover:bg-soft"}`} href="/">Home</Link>
          <details className="rounded-xl border border-[#DCE6EB] bg-[#FAFCFC] px-4"><summary className="relative cursor-pointer py-3 pr-8 font-black">Services</summary><div className="border-t border-[#E0E9ED] pb-3 pt-3"><Link className="block rounded-lg px-2 py-2.5 text-teal" href="/services">All RN Services</Link>{serviceNavigation.map((group)=><div className="mt-3" key={group.label}><p className="px-2 text-[11px] font-black uppercase tracking-[.14em] text-slate">{group.label}</p>{group.services.map((service)=><Link className="mt-1 block rounded-lg px-2 py-2.5 hover:bg-soft" href={servicePath(service)} key={service.slug}>{service.shortTitle}</Link>)}</div>)}</div></details>
          {navItems.filter((item)=>item.href!=="/"&&item.href!=="/services").map((item)=><Link aria-current={isActive(pathname,item.href) ? "page" : undefined} className={`rounded-xl px-4 py-3 ${isActive(pathname,item.href) ? "bg-soft" : "hover:bg-soft"}`} href={item.href} key={item.href}>{item.label}</Link>)}
          <Link className="mt-2 inline-flex min-h-11 items-center justify-center rounded-xl bg-navy px-4 py-3 text-sm font-extrabold text-white" href="/request-assessment">Request an Assessment</Link>
        </nav>
      </div>
    </header>
  );
}
