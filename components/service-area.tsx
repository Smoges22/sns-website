import { ButtonLink } from "@/components/ui";

// Simplified from the U.S. Census Bureau 2025 cartographic state boundary file.
const washingtonIslandPath = "M153 61.4 155.3 70.5 159.6 78.9 166.7 83.3 174.3 85.3 178.1 87.4 182.9 86.4 182 81 184.6 78.5 185.2 73.3 183.3 69.1 187.1 63.5 181.9 55.4 173.7 50.9 170.8 51.7 168 57.6 164.5 59.7Z";
const washingtonMainPath = "M50 90.6 53.9 99.4 52.5 107 50.3 113.5 52.7 118.9 52.8 123.7 53.7 132.1 56.9 139.6 62.9 144.6 67.6 151.5 71.7 158.9 75.7 174.4 78.1 191.9 83.9 198.6 87.2 211.4 88.5 227.4 87.7 234.1 90.6 236.2 94.6 252.9 101.9 255 105.5 259.1 102.9 262.6 95.4 263.2 96.3 276.7 95.7 293.1 94.6 298.9 102.3 296.6 106.5 301.1 113.6 297.3 123.1 299 131.5 299.7 139.8 302.7 139.6 307.3 143.7 310.8 150 311 157.8 306.6 169.1 312 176 317 182.4 333.8 184.2 338.2 183.5 343.9 185.9 348.9 185 356.6 194 363.6 204.5 366.2 208.2 368.1 212.2 366.9 215.6 369.6 220.4 370 225.8 366.7 231.5 366.2 238.3 363 247.7 355.4 256.8 355.3 270.8 352.1 284.3 354.2 292.8 357.5 295 363.9 301.8 359.8 311.6 359 317.7 357.5 329.2 353.1 341.9 354.7 348.9 354.8 357.3 352.6 367.1 347.5 379.2 342.5 390.5 340.2 404.5 333.1 412.3 334.4 420.8 332.9 437.3 331.8 446.9 325.2 468.3 325.1 515.4 325.2 551.1 325.4 590.1 325.7 588.3 319.2 585.6 316.9 588.8 311.2 586.9 305.6 586.8 300.3 584.5 295.4 580 290.4 581.9 284.9 581.6 271.9 581.6 214.4 581.4 154.6 582 64 582.1 30.3 565.8 30.3 542.3 30.2 501.5 30.2 457.3 30.2 414.3 30.2 376.8 30.3 327.3 30.2 280.3 30.3 231.7 30 186.1 30 181.7 36 187.9 46.2 189.4 57.6 194.1 70.7 190.9 81.7 192.5 87.6 189.6 97.6 186.5 103 189.3 109.5 197.1 117.7 196.5 125.5 201 128.9 198.8 133.4 193.5 136.3 190 131.2 190.2 118.4 185.9 114.5 180.9 115.4 173.1 118.9 164.8 116.7 159.3 111.3 152.8 116.9 138.8 116.3 122.9 112.6 108.5 112.8 96.7 111.1 82.8 102.5 62.4 93.8 50 90.6Z";

export function ServiceAreaVisual({ compact = false }: { compact?: boolean }) {
  return (
    <div
      aria-hidden="true"
      className={`relative isolate overflow-hidden rounded-[22px] border border-[#C3D6DE] bg-[#EEF6F8] shadow-[0_16px_42px_rgba(23,50,77,0.07)] ${compact ? "min-h-[13rem] md:min-h-[15rem]" : "min-h-[15rem] sm:min-h-[19rem]"}`}
    >
      <div className="absolute left-5 top-5 z-10 rounded-xl border border-white/90 bg-white/90 px-4 py-3 shadow-[0_8px_24px_rgba(23,50,77,0.06)]">
        <p className="text-[0.68rem] font-black uppercase tracking-[0.18em] text-teal">Washington State</p>
        <p className="mt-1 text-xs font-semibold text-slate">Availability reviewed by location</p>
      </div>
      <div className={`absolute ${compact ? "inset-x-3 bottom-2 top-14" : "inset-x-4 bottom-3 top-14 sm:inset-x-6 sm:bottom-4"}`}>
        <svg className="h-full w-full" fill="none" viewBox="0 0 640 400">
          <path d={washingtonMainPath} fill="#D8EAF0" stroke="#17324D" strokeLinejoin="round" strokeWidth="2.2" />
          <path d={washingtonIslandPath} fill="#D8EAF0" stroke="#17324D" strokeLinejoin="round" strokeWidth="2.2" />
          <circle cx="216" cy="167" fill="#FFFFFF" opacity="0.96" r="19" />
          <circle cx="216" cy="167" fill="#137F8D" r="9" />
          <circle cx="216" cy="167" fill="none" opacity="0.28" r="27" stroke="#137F8D" strokeWidth="2" />
        </svg>
      </div>
      <div className="absolute bottom-4 right-4 flex items-center gap-2 rounded-full border border-white/90 bg-white/90 px-3 py-2 text-[0.68rem] font-extrabold uppercase tracking-[0.12em] text-navy shadow-[0_8px_22px_rgba(23,50,77,0.07)]">
        <span className="h-2.5 w-2.5 rounded-full bg-teal" />
        Location reviewed individually
      </div>
    </div>
  );
}

export function HomeServiceAreaPreview() {
  return (
    <section className="border-y border-[#D8E3E9] bg-[#F7FAFB] px-5 py-9 sm:px-6 sm:py-11 lg:px-8 lg:py-12">
      <div className="mx-auto grid max-w-7xl min-w-0 items-center gap-7 md:grid-cols-[1.12fr_.88fr] md:gap-10 lg:grid-cols-[1.2fr_.8fr] lg:gap-14">
        <div className="min-w-0">
          <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-teal sm:text-sm">Service Area</p>
          <h2 className="text-balance mt-3 font-display text-3xl font-bold leading-[1.14] tracking-[-0.025em] text-navy sm:text-4xl">Confirm service availability for your location</h2>
          <p className="mt-4 max-w-2xl leading-7 text-slate sm:text-lg sm:leading-8">SNS serves clients in Washington State. Availability is confirmed based on the service location, access, clinical need, and scheduling.</p>
          <ButtonLink className="mt-6" href="/service-area" variant="secondary">View Service Area</ButtonLink>
        </div>
        <div className="hidden min-w-0 md:block">
          <ServiceAreaVisual compact />
        </div>
      </div>
    </section>
  );
}
