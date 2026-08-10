import { ButtonLink, LineIcon } from "@/components/ui";

export function ServiceAreaVisual({ compact = false }: { compact?: boolean }) {
  return (
    <div
      aria-hidden="true"
      className={`relative isolate overflow-hidden rounded-[22px] border border-[#C7D9E1] bg-[#EDF6FA] ${compact ? "min-h-[12rem] md:min-h-[15rem]" : "min-h-[15rem] sm:min-h-[18rem]"}`}
    >
      <span className="absolute left-[12%] top-[20%] h-2.5 w-2.5 rounded-full bg-teal/35" />
      <span className="absolute bottom-[22%] right-[14%] h-3 w-3 rounded-full bg-[#C9942E]/55" />
      <span className="absolute right-[20%] top-[17%] h-2 w-2 rounded-full bg-navy/25" />
      <span className="absolute left-[18%] top-[24%] h-[54%] w-[64%] rounded-[48%] border border-dashed border-teal/30" />
      <span className="absolute left-[27%] top-[31%] h-[40%] w-[46%] rounded-[48%] border border-teal/20" />
      <div className="absolute inset-0 grid place-items-center">
        <div className="grid h-24 w-24 place-items-center rounded-full border border-white bg-white/90 text-teal shadow-[0_16px_38px_rgba(23,50,77,0.12)] sm:h-28 sm:w-28">
          <LineIcon className="h-11 w-11 sm:h-12 sm:w-12" name="location" />
        </div>
      </div>
      <div className="absolute bottom-4 left-4 right-4 rounded-xl border border-white/80 bg-white/90 px-4 py-3 text-center shadow-[0_8px_24px_rgba(23,50,77,0.07)]">
        <p className="text-xs font-black uppercase tracking-[0.16em] text-teal">Washington State</p>
        <p className="mt-1 text-xs font-semibold text-slate">Availability confirmed by location</p>
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
