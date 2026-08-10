"use client";

import { useRef, useState } from "react";
import { ButtonLink, LineIcon } from "@/components/ui";
import { interactiveCardClass } from "@/components/section";
import {
  resourceCategories,
  resourcePath,
  resources,
  type ResourceCategory,
} from "@/lib/resources";

type Category = (typeof resourceCategories)[number];

export function ResourceLibrary() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const filteredResources = resources.filter(
    (resource) => activeCategory === "All" || resource.categories.includes(activeCategory as ResourceCategory),
  );

  function selectTab(index: number) {
    const category = resourceCategories[index];
    setActiveCategory(category);
    tabRefs.current[index]?.focus();
  }

  function handleKeyDown(event: React.KeyboardEvent<HTMLButtonElement>, index: number) {
    if (event.key === "ArrowRight") {
      event.preventDefault();
      selectTab((index + 1) % resourceCategories.length);
    } else if (event.key === "ArrowLeft") {
      event.preventDefault();
      selectTab((index - 1 + resourceCategories.length) % resourceCategories.length);
    } else if (event.key === "Home") {
      event.preventDefault();
      selectTab(0);
    } else if (event.key === "End") {
      event.preventDefault();
      selectTab(resourceCategories.length - 1);
    }
  }

  return (
    <div>
      <div className="scrollbar-none -mx-5 snap-x snap-mandatory scroll-px-5 overflow-x-auto px-5 pb-2 sm:-mx-6 sm:scroll-px-6 sm:px-6 lg:mx-0 lg:px-0" role="tablist" aria-label="Resource categories">
        <div className="flex min-w-max gap-2">
          {resourceCategories.map((category, index) => {
            const isActive = activeCategory === category;
            return (
              <button
                aria-controls="resource-library-panel"
                aria-selected={isActive}
                className={`min-h-11 snap-start rounded-full border px-4 py-2 text-sm font-extrabold transition-colors ${isActive ? "border-teal-action bg-teal-action text-white hover:bg-teal-dark" : "border-[#CBD9E0] bg-white text-navy hover:border-[#8EAAB6] hover:bg-[#F7FAFB]"}`}
                id={`resource-tab-${index}`}
                key={category}
                onClick={() => setActiveCategory(category)}
                onKeyDown={(event) => handleKeyDown(event, index)}
                ref={(element) => { tabRefs.current[index] = element; }}
                role="tab"
                tabIndex={isActive ? 0 : -1}
                type="button"
              >
                {category}
              </button>
            );
          })}
        </div>
      </div>

      <div
        aria-labelledby={`resource-tab-${resourceCategories.indexOf(activeCategory)}`}
        className="mt-7"
        id="resource-library-panel"
        role="tabpanel"
      >
        <p aria-live="polite" className="mb-5 text-sm font-semibold text-slate">
          {filteredResources.length} {filteredResources.length === 1 ? "guide" : "guides"} in {activeCategory}
        </p>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredResources.map((resource) => {
            const categoryLabel = resource.regulatory ? "WAC & Compliance" : resource.categories[0];
            return (
              <article className={`${interactiveCardClass} flex min-h-[310px] flex-col p-5 sm:p-6`} key={resource.slug}>
                <div className="flex items-start justify-between gap-4">
                  <span className={`inline-flex min-h-7 items-center rounded-full px-3 py-1 text-[0.68rem] font-black uppercase tracking-[0.12em] ${resource.regulatory ? "bg-[#F7E9C8] text-[#725015]" : "bg-[#E4F3F5] text-teal"}`}>
                    {categoryLabel}
                  </span>
                  <LineIcon className={`h-6 w-6 shrink-0 ${resource.regulatory ? "text-[#B98324]" : "text-teal"}`} name={resource.regulatory ? "document" : "assessment"} />
                </div>
                <h2 className="mt-5 font-display text-[1.35rem] font-bold leading-[1.22] tracking-[-0.02em] text-navy">{resource.title}</h2>
                <p className="mt-3 flex-1 text-[0.95rem] leading-6 text-slate">{resource.description}</p>
                {resource.regulatory ? <p className="mt-5 text-xs font-extrabold uppercase tracking-[0.12em] text-[#8A641E]">{resource.regulatory.wacNumber}</p> : null}
                <ButtonLink className="mt-5 !min-h-11 !px-0 !py-2" href={resourcePath(resource)} variant="text">Read Guide</ButtonLink>
              </article>
            );
          })}
        </div>
      </div>
    </div>
  );
}
