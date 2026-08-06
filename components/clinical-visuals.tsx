import { documentationStages, howItWorks, serviceGroups } from "@/lib/site";
import { OutlineIcon, type OutlineIconName } from "@/components/outline-icon";

export function ClinicalWorkflowMockup() {
  const steps: Array<{ title: string; status: string; icon: OutlineIconName }> = [
    { title: "Assessment Builder", status: "Demo draft autosaved", icon: "clipboard" },
    { title: "RN Review", status: "Clinical narrative checked", icon: "review" },
    { title: "Negotiated Care Plan", status: "Interventions mapped", icon: "carePlan" },
    { title: "Professional PDF", status: "Ready for secure delivery", icon: "pdf" }
  ];

  const sections = [
    ["Cognitive", "Needs review", "Long-term memory and decision-making"],
    ["ADLs", "Mapped", "Transfers, toileting, bathing"],
    ["Physical", "Complete", "Skin, pain, fall risk"],
    ["Service Plan", "Generated", "Resident-centered supports"]
  ];

  return (
    <div className="relative mx-auto w-full min-w-0 max-w-2xl">
      <div className="absolute -inset-6 rounded-[32px] bg-[radial-gradient(circle_at_30%_20%,rgba(24,183,201,0.2),transparent_34%),radial-gradient(circle_at_80%_60%,rgba(16,42,67,0.18),transparent_38%)] blur-2xl" />
      <div className="relative overflow-hidden rounded-[28px] border border-[#C8D8E2] bg-white shadow-[0_28px_90px_rgba(16,42,67,0.2)]">
        <div className="flex items-center justify-between gap-4 border-b border-[#D9E3EA] bg-[#FBFCFD] px-4 py-3">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-alert/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#F3C95B]" />
            <span className="h-2.5 w-2.5 rounded-full bg-teal" />
          </div>
          <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-teal">SNS Clinical Portal</p>
          <span className="rounded-full bg-white px-3 py-1 text-xs font-bold text-slate ring-1 ring-navy/10">Demo</span>
        </div>

        <div className="grid min-h-[440px] grid-cols-1 bg-white sm:grid-cols-[128px_minmax(0,1fr)]">
          <aside className="hidden border-r border-navy/10 bg-[#102A43] px-2 py-4 text-white sm:block sm:px-3">
            <div className="mx-auto mb-5 grid h-9 w-9 place-items-center rounded-lg bg-white text-navy shadow-sm">SNS</div>
            <div className="grid gap-2">
              {["Dashboard", "Clients", "Assessments", "Care Plans", "Documents"].map((item) => (
                <div className={`rounded-lg px-2 py-2 text-[10px] font-bold sm:text-xs ${item === "Assessments" ? "bg-white text-navy" : "text-[#D6E1EA]"}`} key={item}>
                  {item}
                </div>
              ))}
            </div>
          </aside>

          <div className="min-w-0 p-4 sm:p-5">
            <div className="flex min-w-0 flex-col gap-3 border-b border-[#D9E3EA] pb-4 sm:flex-row sm:items-start sm:justify-between">
              <div className="min-w-0">
                <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-teal">Assessment Workspace</p>
                <h3 className="mt-1 break-words text-lg font-black tracking-tight text-navy sm:text-2xl">Demo Client Clinical Review</h3>
                <p className="mt-1 text-xs leading-5 text-slate">Fictional data shown for website preview.</p>
              </div>
              <span className="w-fit rounded-full bg-[#EDF6FA] px-3 py-1 text-xs font-black text-teal ring-1 ring-teal/20">Autosaved</span>
            </div>

            <div className="mt-4 grid min-w-0 gap-3 lg:grid-cols-[1.05fr_0.95fr]">
              <div className="rounded-xl border border-[#D9E3EA] bg-white p-3 shadow-sm">
                <div className="mb-3 flex items-center justify-between gap-3">
                  <p className="text-sm font-black text-navy">Assessment Builder</p>
                  <span className="rounded-full bg-soft px-2.5 py-1 text-xs font-bold text-slate">RN draft</span>
                </div>
                <div className="grid gap-2">
                  {sections.map(([section, state, note]) => (
                    <div className="rounded-lg border border-[#D9E3EA] bg-[#FBFCFD] p-3" key={section}>
                      <div className="flex items-center justify-between gap-2">
                        <p className="text-sm font-extrabold text-navy">{section}</p>
                        <span className="text-xs font-bold text-teal">{state}</span>
                      </div>
                      <div className="mt-2 h-1.5 rounded-full bg-navy/10">
                        <div className="h-1.5 w-4/5 rounded-full bg-teal" />
                      </div>
                      <p className="mt-2 text-xs leading-5 text-slate">{note}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid gap-3">
                <div className="min-w-0 rounded-xl bg-[#102A43] p-4 text-white shadow-sm">
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-teal">RN Review</p>
                  <p className="mt-2 break-words text-xl font-black sm:text-2xl">Clinical narrative checked</p>
                  <p className="mt-2 text-sm leading-6 text-[#D6E1EA]">Generated comments remain draft until reviewed and finalized by the RN.</p>
                </div>
                <div className="rounded-xl border border-teal/30 bg-[#EFF9FA] p-4">
                  <p className="text-sm font-black text-navy">Negotiated Care Plan</p>
                  <p className="mt-2 text-xs leading-5 text-slate">Assessment findings mapped to caregiver interventions, abilities, and preferences.</p>
                </div>
                <div className="rounded-xl bg-white p-4 ring-1 ring-navy/10">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-black text-navy">Professional PDF</p>
                    <span className="text-xs font-bold text-slate">30 pages</span>
                  </div>
                  <div className="mt-3 space-y-2">
                    <div className="h-2 rounded-full bg-navy/15" />
                    <div className="h-2 w-10/12 rounded-full bg-navy/15" />
                    <div className="h-2 w-7/12 rounded-full bg-navy/15" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid border-t border-[#D9E3EA] bg-[#FBFCFD] sm:grid-cols-4">
          {steps.map((step, index) => (
            <div className="border-t border-navy/10 px-4 py-3 sm:border-l sm:border-t-0 first:sm:border-l-0" key={step.title}>
              <div className="flex items-center gap-2 text-teal">
                <OutlineIcon className="h-4 w-4" name={step.icon} />
                <span className="text-[11px] font-black uppercase tracking-[0.14em]">0{index + 1}</span>
              </div>
              <p className="mt-2 text-sm font-black text-navy">{step.title}</p>
              <p className="mt-1 text-xs leading-5 text-slate">{step.status}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function WorkflowTimeline() {
  return (
    <div className="relative overflow-hidden rounded-[26px] border border-[#C8D8E2] bg-[linear-gradient(135deg,#ffffff_0%,#FBFCFD_50%,#EDF6FA_100%)] p-4 shadow-[0_18px_58px_rgba(23,50,77,0.09)] sm:p-5">
      <div className="pointer-events-none absolute left-8 right-8 top-[3.75rem] hidden h-px bg-gradient-to-r from-transparent via-teal/35 to-transparent lg:block" />
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-6">
        {howItWorks.map((step, index) => (
          <article className="relative rounded-2xl border border-[#D9E3EA] bg-white p-5 shadow-[0_12px_34px_rgba(23,50,77,0.08)] transition duration-200 hover:-translate-y-1 hover:border-teal/45 hover:shadow-[0_22px_58px_rgba(23,50,77,0.13)]" key={step.title}>
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[#EDF6FA] text-sm font-black text-teal ring-1 ring-teal/20">0{index + 1}</span>
              <h3 className="font-extrabold text-navy">{step.title}</h3>
            </div>
            <p className="mt-4 text-sm leading-6 text-slate">{step.text}</p>
          </article>
        ))}
      </div>
    </div>
  );
}

export function ServiceGroups() {
  const iconByGroup: Record<string, OutlineIconName> = {
    Assessments: "clipboard",
    "Care Planning": "carePlan",
    "Document Review": "review",
    Future: "calendar"
  };

  return (
    <div className="grid min-w-0 gap-5 lg:grid-cols-2">
      {serviceGroups.map((group) => (
        <article className="min-w-0 overflow-hidden rounded-[26px] border border-[#D9E3EA] bg-white p-5 shadow-[0_16px_50px_rgba(23,50,77,0.09)] transition duration-200 hover:-translate-y-1 hover:border-teal/45 sm:p-6" key={group.title}>
          <div className="flex items-start gap-4">
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-[#EDF6FA] text-teal ring-1 ring-teal/20">
              <OutlineIcon className="h-5 w-5" name={iconByGroup[group.title] ?? "document"} />
            </span>
            <div className="min-w-0">
              <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-teal">{group.eyebrow}</p>
              <h3 className="mt-2 break-words text-2xl font-black text-navy">{group.title}</h3>
            </div>
          </div>
          <p className="mt-3 max-w-[28ch] break-words text-sm leading-6 text-slate sm:max-w-none">{group.description}</p>
          <div className="mt-6 space-y-4">
            {group.services.map((service) => (
              <div className="min-w-0 overflow-hidden rounded-2xl border border-[#D9E3EA] bg-[#FBFCFD] p-4 transition duration-200 hover:border-teal/45 hover:bg-white" key={service.name}>
                <p className="break-words font-extrabold text-navy">{service.name}</p>
                <p className="mt-2 max-w-[28ch] break-words text-sm leading-6 text-slate sm:max-w-none">{service.text}</p>
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
    <div className="grid gap-6 rounded-[28px] border border-[#C8D8E2] bg-[linear-gradient(135deg,#ffffff_0%,#FBFCFD_100%)] p-4 shadow-[0_18px_58px_rgba(23,50,77,0.09)] sm:p-5 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
      <div className="rounded-[24px] bg-[#102A43] p-6 text-white shadow-soft">
        <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-teal">Documentation workflow</p>
        <h3 className="mt-3 text-3xl font-black tracking-tight">Assessment work becomes clear clinical documentation.</h3>
        <p className="mt-4 leading-7 text-[#D6E1EA]">
          SNS keeps the path from assessment to care plan organized, with RN review before documentation is finalized.
        </p>
        <div className="mt-6 rounded-xl bg-white/9 p-4 ring-1 ring-white/15">
          <p className="text-sm font-bold">Portal access is coming soon.</p>
          <p className="mt-2 text-sm leading-6 text-[#D6E1EA]">The public website does not collect detailed medical records.</p>
        </div>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        {documentationStages.map((stage, index) => (
          <article className="rounded-2xl border border-[#D9E3EA] bg-white p-5 shadow-[0_12px_34px_rgba(23,50,77,0.08)] transition duration-200 hover:-translate-y-1 hover:border-teal/45" key={stage.title}>
            <div className="mb-4 flex items-center justify-between gap-3">
              <span className="rounded-full bg-[#EDF6FA] px-3 py-1 text-xs font-black text-teal ring-1 ring-teal/20">0{index + 1}</span>
              <span className="h-2 w-2 rounded-full bg-teal" />
            </div>
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
