import Image from "next/image";
import Link from "next/link";

export function BrandMark({ compact = false, inverse = false }: { compact?: boolean; inverse?: boolean }) {
  return (
    <Link aria-label="SNS home" className="group flex min-w-0 items-center gap-3" href="/">
      <span className="relative shrink-0 overflow-hidden rounded-lg shadow-[0_14px_30px_rgba(23,50,77,0.18)] ring-1 ring-white/20">
        <Image
          alt="SNS — Sosena Nursing Solutions"
          className={`${compact ? "block" : "sm:hidden"} h-11 w-11 object-cover`}
          height={88}
          priority
          src="/images/branding/sns-icon.png"
          width={88}
        />
        {!compact ? (
          <Image
            alt="SNS — Sosena Nursing Solutions"
            className="hidden h-12 w-auto object-cover sm:block"
            height={96}
            priority
            src="/images/branding/sns-logo-horizontal.png"
            width={144}
          />
        ) : null}
      </span>
      {!compact ? (
        <span className="hidden min-w-0 leading-tight md:block">
          <span className={`block text-sm font-extrabold ${inverse ? "text-white" : "text-navy"}`}>Sosena Nursing Solutions</span>
          <span className={`block text-xs font-semibold ${inverse ? "text-white/65" : "text-slate"}`}>RN clinical services</span>
        </span>
      ) : null}
    </Link>
  );
}
