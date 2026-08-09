import Image from "next/image";
import Link from "next/link";

export function BrandMark({ footer = false }: { footer?: boolean }) {
  return (
    <Link aria-label="Sosena Nursing Solutions home" className={`block shrink-0 ${footer ? "w-[220px] rounded-xl bg-white" : "w-[144px] sm:w-[176px] lg:w-[200px]"}`} href="/">
      <Image
        alt="Sosena Nursing Solutions"
        className={`${footer ? "rounded-xl" : ""} h-auto w-full`}
        height={1024}
        priority
        sizes={footer ? "220px" : "(min-width: 1024px) 200px, (min-width: 640px) 176px, 144px"}
        src="/images/branding/sns-logo-horizontal.png"
        width={1536}
      />
    </Link>
  );
}
