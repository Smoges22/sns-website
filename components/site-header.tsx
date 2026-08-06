import Link from "next/link";
import { BrandMark } from "@/components/brand";
import { navItems, site } from "@/lib/site";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-navy/10 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-5 px-5 py-4 sm:px-6 lg:px-8">
        <BrandMark />
        <nav aria-label="Primary navigation" className="hidden items-center gap-7 text-sm font-semibold text-navy lg:flex">
          {navItems.map((item) => (
            <Link className="transition hover:text-teal" href={item.href} key={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <a className="hidden text-sm font-semibold text-navy transition hover:text-teal sm:inline" href={site.portalUrl}>
            Portal Login
          </a>
          <Link className="rounded-md bg-navy px-4 py-2 text-sm font-bold text-white transition hover:bg-[#214562]" href="/request-assessment">
            Request
          </Link>
        </div>
      </div>
      <nav aria-label="Mobile navigation" className="flex gap-4 overflow-x-auto border-t border-navy/10 px-5 py-3 text-sm font-semibold text-navy lg:hidden">
        {navItems.map((item) => (
          <Link className="shrink-0" href={item.href} key={item.href}>
            {item.label}
          </Link>
        ))}
        <a className="shrink-0" href={site.portalUrl}>Portal</a>
      </nav>
    </header>
  );
}

