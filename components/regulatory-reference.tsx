import type { RegulatoryReference as RegulatoryReferenceData } from "@/lib/resources";
import { LineIcon } from "@/components/ui";

export function RegulatoryReference({ reference }: { reference: RegulatoryReferenceData }) {
  return (
    <aside className="overflow-hidden rounded-[20px] border border-[#D6C089] bg-[#FFFCF5] shadow-[0_10px_30px_rgba(23,50,77,0.06)]" aria-labelledby="wac-reference-heading">
      <div className="border-b border-[#E8D9B5] bg-[#F7E9C8] px-5 py-3 sm:px-7">
        <p className="text-xs font-black uppercase tracking-[0.18em] text-[#725015]">WAC Reference</p>
      </div>
      <div className="p-5 sm:p-7">
        <div className="flex items-start gap-4">
          <span aria-hidden="true" className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-white text-[#B98324] shadow-sm">
            <LineIcon name="document" />
          </span>
          <div className="min-w-0">
            <h2 className="font-display text-2xl font-bold leading-tight text-navy sm:text-3xl" id="wac-reference-heading">{reference.title}</h2>
            <p className="mt-3 leading-7 text-slate">{reference.summary}</p>
            <p className="mt-5 text-sm font-black uppercase tracking-[0.12em] text-[#725015]">{reference.wacNumber}</p>
            <a
              className="mt-4 inline-flex min-h-11 items-center py-2 text-sm font-extrabold text-teal underline decoration-teal/30 underline-offset-4 transition-colors hover:text-navy"
              href={reference.officialUrl}
              rel="noreferrer"
              target="_blank"
            >
              View Official WAC <span aria-hidden="true" className="ml-2">↗</span>
            </a>
          </div>
        </div>
      </div>
    </aside>
  );
}
