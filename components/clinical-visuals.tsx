import { documentationStages, howItWorks, serviceGroups } from "@/lib/site";

export function ClinicalWorkflowMockup() {
  const rows = [
    ["Cognitive", "RN Review", "Narrative ready"],
    ["ADLs", "Care Plan", "Interventions mapped"],
    ["Physical", "PDF", "Final formatting"]
  ];

  return (
    <div className="relative mx-auto w-full min-w-0 max-w-xl overflow-hidden rounded-2xl border border-navy/10 bg-white p-3 shadow-[0_28px_80px_rgba(23,50,77,0.16)]">
      <div className="rounded-xl border border-navy/10 bg-soft p-4">
        <div className="flex min-w-0 flex-col gap-3 border-b border-navy/10 pb-3 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
          <div className="min-w-0">
            <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-teal">SNS Clinical Portal</p>
            <p className="mt-1 text-sm font-bold text-navy">Assessment workflow preview</p>
          </div>
          <span className="w-fit rounded-full bg-white px-3 py-1 text-xs font-bold text-slate ring-1 ring-navy/10">Demo data</span>
        </div>
        <div className="mt-4 grid gap-3 sm:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-xl bg-white p-4 ring-1 ring-navy/10">
            <div className="mb-4 flex items-center justify-between">
              <p className="text-sm font-extrabold text-navy">Assessment Builder</p>
              <span className="rounded-full bg-[#EDF6FA] px-2.5 py-1 text-xs font-bold text-teal">Draft</span>
            </div>
            <div className="space-y-3">
              {rows.map(([section, state, note]) => (
                <div className="rounded-lg border border-navy/10 p-3" key={section}>
                  <div className="flex min-w-0 items-center justify-between gap-2">
                    <p className="text-sm font-bold text-navy">{section}</p>
                    <span className="text-xs font-bold text-slate">{state}</span>
                  </div>
                  <div className="mt-2 h-1.5 rounded-full bg-soft">
                    <div className="h-1.5 w-4/5 rounded-full bg-teal" />
                  </div>
                  <p className="mt-2 text-xs text-slate">{note}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="grid gap-3">
            <div className="rounded-xl bg-navy p-4 text-white">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-teal">RN Review</p>
              <p className="mt-2 text-2xl font-black">Clinical narrative checked</p>
              <p className="mt-2 text-sm leading-6 text-white/68">AI-assisted text remains draft until reviewed and finalized by the RN.</p>
            </div>
            <div className="rounded-xl bg-white p-4 ring-1 ring-navy/10">
              <p className="text-sm font-extrabold text-navy">Care Plan Generated</p>
              <div className="mt-4 space-y-2">
                <div className="h-2 rounded-full bg-navy/15" />
                <div className="h-2 w-10/12 rounded-full bg-navy/15" />
                <div className="h-2 w-7/12 rounded-full bg-navy/15" />
              </div>
            </div>
            <div className="rounded-xl border border-teal/30 bg-[#EDF6FA] p-4">
              <p className="text-sm font-extrabold text-navy">Professional PDF</p>
              <p className="mt-1 text-xs leading-5 text-slate">Assessment - RN Review - Care Plan - PDF</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function WorkflowTimeline() {
  return (
    <div className="grid gap-4 lg:grid-cols-6">
      {howItWorks.map((step, index) => (
        <article className="relative rounded-xl border border-navy/10 bg-white p-5 shadow-soft" key={step.title}>
          <div className="flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-full bg-[#EDF6FA] text-sm font-black text-teal">0{index + 1}</span>
            <h3 className="font-extrabold text-navy">{step.title}</h3>
          </div>
          <p className="mt-4 text-sm leading-6 text-slate">{step.text}</p>
        </article>
      ))}
    </div>
  );
}

export function ServiceGroups() {
  return (
    <div className="grid gap-5 lg:grid-cols-2">
      {serviceGroups.map((group) => (
        <article className="rounded-2xl border border-navy/10 bg-white p-6 shadow-soft" key={group.title}>
          <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-teal">{group.eyebrow}</p>
          <h3 className="mt-2 text-2xl font-black text-navy">{group.title}</h3>
          <p className="mt-3 text-sm leading-6 text-slate">{group.description}</p>
          <div className="mt-6 space-y-4">
            {group.services.map((service) => (
              <div className="rounded-xl bg-soft p-4" key={service.name}>
                <p className="font-extrabold text-navy">{service.name}</p>
                <p className="mt-2 text-sm leading-6 text-slate">{service.text}</p>
              </div>
            ))}
          </div>
        </article>
      ))}
    </div>
  );
}

export function DocumentationShowcase() {
  return (
    <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
      <div className="rounded-2xl bg-navy p-6 text-white shadow-soft">
        <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-teal">Documentation workflow</p>
        <h3 className="mt-3 text-3xl font-black tracking-tight">Assessment work becomes clear clinical documentation.</h3>
        <p className="mt-4 leading-7 text-white/70">
          SNS keeps the path from assessment to care plan organized, with RN review before documentation is finalized.
        </p>
        <div className="mt-6 rounded-xl bg-white/8 p-4 ring-1 ring-white/12">
          <p className="text-sm font-bold">Portal access is coming soon.</p>
          <p className="mt-2 text-sm leading-6 text-white/65">The public website does not collect detailed medical records.</p>
        </div>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        {documentationStages.map((stage) => (
          <article className="rounded-2xl border border-navy/10 bg-white p-5 shadow-soft" key={stage.title}>
            <h3 className="text-xl font-black text-navy">{stage.title}</h3>
            <ul className="mt-4 space-y-3 text-sm leading-6 text-slate">
              {stage.items.map((item) => (
                <li className="flex gap-3" key={item}>
                  <span className="mt-2 h-2 w-2 rounded-full bg-teal" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </div>
  );
}
