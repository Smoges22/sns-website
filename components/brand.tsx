import Image from "next/image";
import Link from "next/link";

export function BrandMark({ footer = false }: { footer?: boolean }) {
  return (
    <Link aria-label="Sosena Nursing Solutions home" className={`relative block aspect-[3/1] shrink-0 overflow-hidden ${footer ? "w-[220px] rounded-lg bg-white" : "w-[168px] sm:w-[190px] lg:w-[210px]"}`} href="/">
      <Image
        alt="Sosena Nursing Solutions"
        className="object-cover"
        fill
        priority={!footer}
        sizes={footer ? "220px" : "(min-width: 1024px) 210px, (min-width: 640px) 190px, 168px"}
        src="/images/branding/sns-logo-horizontal.png"
      />
    </Link>
  );
}
