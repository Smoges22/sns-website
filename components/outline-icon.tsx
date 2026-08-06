type IconName =
  | "calendar"
  | "carePlan"
  | "clipboard"
  | "document"
  | "pdf"
  | "review"
  | "rn"
  | "shield"
  | "workflow";

const paths: Record<IconName, string[]> = {
  calendar: [
    "M8 3v4M16 3v4M4.5 9.5h15",
    "M6.5 5.5h11a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-11a2 2 0 0 1-2-2v-10a2 2 0 0 1 2-2Z",
    "M8 13h2M14 13h2M8 16.5h2M14 16.5h2"
  ],
  carePlan: [
    "M7 4.5h10a2 2 0 0 1 2 2v13l-3-2-3 2-3-2-3 2-3-2v-11a2 2 0 0 1 2-2Z",
    "M8 9h8M8 12.5h8M8 16h5"
  ],
  clipboard: [
    "M9 5.5h6M9.5 4h5a1.5 1.5 0 0 1 1.5 1.5v1H8v-1A1.5 1.5 0 0 1 9.5 4Z",
    "M7 6.5H6a2 2 0 0 0-2 2v10A2 2 0 0 0 6 20.5h12a2 2 0 0 0 2-2v-10a2 2 0 0 0-2-2h-1",
    "M8 11h8M8 14.5h8M8 18h5"
  ],
  document: [
    "M7 3.5h7l4 4v13H7a2 2 0 0 1-2-2v-13a2 2 0 0 1 2-2Z",
    "M14 3.5v4h4M8 12h8M8 15.5h8M8 19h5"
  ],
  pdf: [
    "M7 3.5h7l4 4v13H7a2 2 0 0 1-2-2v-13a2 2 0 0 1 2-2Z",
    "M14 3.5v4h4M8 13.5h8M8 17h8"
  ],
  review: [
    "M5 12.5 9.5 17 19 7.5",
    "M12 3.5a8.5 8.5 0 1 0 8.5 8.5"
  ],
  rn: [
    "M12 4v16M4 12h16",
    "M6.5 6.5h11v11h-11z"
  ],
  shield: [
    "M12 3.5 19 6v5.5c0 4.3-2.8 7.5-7 9-4.2-1.5-7-4.7-7-9V6l7-2.5Z",
    "M8.5 12.2 11 14.7l5-5.4"
  ],
  workflow: [
    "M6 7h6a3 3 0 0 1 3 3v0a3 3 0 0 1-3 3H9a3 3 0 0 0-3 3v0a3 3 0 0 0 3 3h9",
    "M17 5l2 2-2 2M7 17l-2 2 2 2"
  ]
};

export type OutlineIconName = IconName;

export function OutlineIcon({ name, className = "" }: { name: IconName; className?: string }) {
  return (
    <svg aria-hidden="true" className={className} fill="none" viewBox="0 0 24 24">
      {paths[name].map((path) => (
        <path d={path} key={path} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
      ))}
    </svg>
  );
}
