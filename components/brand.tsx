import Link from "next/link";

export function BrandMark({ compact = false, inverse = false }: { compact?: boolean; inverse?: boolean }) {
  return (
    <Link aria-label="SNS home" className="group flex items-center gap-3" href="/">
      <span className="grid h-11 w-11 place-items-center rounded-lg bg-navy text-sm font-black tracking-[0.16em] text-white shadow-[0_14px_30px_rgba(23,50,77,0.18)] ring-1 ring-white/20 transition group-hover:bg-[#214562]">
        SNS
      </span>
      {!compact ? (
        <span className="leading-tight">
          <span className={`block text-sm font-extrabold ${inverse ? "text-white" : "text-navy"}`}>Sosena Nursing Solutions</span>
          <span className={`block text-xs font-semibold ${inverse ? "text-white/65" : "text-slate"}`}>RN clinical services</span>
        </span>
      ) : null}
    </Link>
  );
}
