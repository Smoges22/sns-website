"use client";

import { useId, useState } from "react";

type FaqItem = readonly [question: string, answer: string];

export function FaqAccordion({ items }: { items: readonly FaqItem[] }) {
  const idPrefix = useId().replace(/:/g, "");
  const [openItems, setOpenItems] = useState<Set<number>>(() => new Set());

  function toggleItem(index: number) {
    setOpenItems((current) => {
      const next = new Set(current);
      if (next.has(index)) next.delete(index);
      else next.add(index);
      return next;
    });
  }

  return (
    <div className="mx-auto w-full max-w-[920px] border-t border-[#CCD9DF]">
      {items.map(([question, answer], index) => {
        const isOpen = openItems.has(index);
        const buttonId = `${idPrefix}-faq-button-${index}`;
        const panelId = `${idPrefix}-faq-panel-${index}`;

        return (
          <div className="border-b border-[#CCD9DF]" key={question}>
            <h3>
              <button
                aria-controls={panelId}
                aria-expanded={isOpen}
                className="group grid min-h-14 w-full grid-cols-[minmax(0,1fr)_2.5rem] items-start gap-3 py-4 text-left text-navy transition-colors hover:bg-white/55 focus-visible:relative focus-visible:z-10 sm:gap-5 sm:py-5"
                id={buttonId}
                onClick={() => toggleItem(index)}
                type="button"
              >
                <span className="pt-1 font-display text-[0.98rem] font-semibold leading-6 sm:text-lg sm:font-bold sm:leading-7">{question}</span>
                <span aria-hidden="true" className="grid h-10 w-10 place-items-center self-start rounded-full border border-teal/25 text-xl font-semibold leading-none text-teal transition-colors group-hover:border-teal/45 group-hover:bg-[#EAF5F6]">
                  {isOpen ? "−" : "+"}
                </span>
              </button>
            </h3>
            <div aria-labelledby={buttonId} hidden={!isOpen} id={panelId} role="region">
              <p className="max-w-[48rem] pb-5 pr-2 text-[0.95rem] leading-7 text-slate sm:pb-6 sm:pr-14 sm:text-base">{answer}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
