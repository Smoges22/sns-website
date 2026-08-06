import Link from "next/link";

export function BrandMark({ compact = false }: { compact?: boolean }) {
  return (
    <Link aria-label="SNS home" className="flex items-center gap-3" href="/">
      <span className="grid h-10 w-10 place-items-center rounded-md bg-navy text-sm font-black tracking-[0.16em] text-white">
        SNS
      </span>
      {!compact ? (
        <span className="leading-tight">
          <span className="block text-sm font-bold text-navy">Sosena Nursing Solutions</span>
          <span className="block text-xs font-medium text-slate">RN clinical services</span>
        </span>
      ) : null}
    </Link>
  );
}

