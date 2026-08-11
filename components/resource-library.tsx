"use client";

import { useEffect, useRef, useState } from "react";
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
  const [showScrollHint, setShowScrollHint] = useState(true);
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const tabList = useRef<HTMLDivElement>(null);
  const filteredResources = resources.filter(
    (resource) => activeCategory === "All" || resource.categories.includes(activeCategory as ResourceCategory),
  );

  useEffect(() => {
    const node = tabList.current;
    if (!node) return;
    const updateScrollHint = () => setShowScrollHint(node.scrollLeft + node.clientWidth < node.scrollWidth - 4);
    updateScrollHint();
    node.addEventListener("scroll", updateScrollHint, { passive: true });
    window.addEventListener("resize", updateScrollHint);
    return () => {
      node.removeEventListener("scroll", updateScrollHint);
      window.removeEventListener("resize", updateScrollHint);
    };
  }, []);

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
      <div className="relative -mx-5 sm:-mx-6 lg:mx-0">
        <div ref={tabList} className="scrollbar-none snap-x snap-mandatory scroll-px-5 overflow-x-auto border-b border-[#C9D8E0] px-5 sm:scroll-px-6 sm:px-6 lg:px-0" role="tablist" aria-label="Resource categories">
          <div className="flex min-w-max gap-1 px-0.5">
            {resourceCategories.map((category, index) => {
              const isActive = activeCategory === category;
              return (
                <button
                  aria-controls="resource-library-panel"
                  aria-selected={isActive}
                  className="section-tab min-h-12 snap-start whitespace-nowrap px-4 py-3 text-sm font-semibold focus-visible:z-10"
                  data-active={isActive}
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
        <span aria-hidden="true" className={`pointer-events-none absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-white via-white/90 to-transparent transition-opacity duration-200 lg:hidden ${showScrollHint ? "opacity-100" : "opacity-0"}`} />
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
