import Image from "next/image";
import Link from "next/link";

export function BrandMark({ footer = false }: { footer?: boolean }) {
  return (
    <Link aria-label="Sosena Nursing Solutions home" className={`relative block aspect-[3/1] shrink-0 overflow-hidden ${footer ? "w-[220px] rounded-lg bg-white" : "w-[178px] sm:w-[198px] xl:w-[220px]"}`} href="/">
      <Image
        alt="Sosena Nursing Solutions"
        className="object-cover"
        fill
        priority={!footer}
        sizes={footer ? "220px" : "(min-width: 1280px) 220px, (min-width: 640px) 198px, 178px"}
        src="/images/branding/sns-logo-horizontal.png"
      />
    </Link>
  );
}
