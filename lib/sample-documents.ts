export const sampleDocumentDisclaimer =
  "Sample document for informational purposes only. All names, details, and clinical information are fictional and do not represent a real patient record.";

export const sampleDocumentsIntro =
  "Sosena Nursing Solutions provides clear, professional RN assessments and individualized care plans for authorized providers, professionals, and families. Review sample documents to better understand the type of documentation SNS prepares.";

export const sampleDocumentsNote =
  "All samples below are for demonstration purposes only and use fictional, non-patient information.";

export const sampleSafetyLabel =
  "FICTIONAL SAMPLE · FOR DEMONSTRATION ONLY · NOT FOR CLINICAL USE · NO REAL PATIENT INFORMATION";

export type SampleDocumentItem = {
  label: string;
  finding: string;
  preference?: string;
  instruction?: string;
};

export type SampleDocumentSection = {
  title: string;
  summary?: string;
  items: ReadonlyArray<SampleDocumentItem>;
};

export type SampleDocumentPage = {
  number: number;
  title: string;
  sections: ReadonlyArray<SampleDocumentSection>;
};

export type SampleDocument = {
  id: "assessment" | "care-plan";
  title: string;
  shortTitle: string;
  route: "/sample-assessment" | "/sample-care-plan";
  serviceRoute: "/services/initial-rn-assessment" | "/services/negotiated-care-plan";
  serviceLabel: string;
  description: string;
  ctaLabel: string;
  pageIntro: string;
  subjectName: string;
  pages: ReadonlyArray<SampleDocumentPage>;
  demonstrates: ReadonlyArray<string>;
};

const assessmentPages: ReadonlyArray<SampleDocumentPage> = [
  {
    number: 1,
    title: "Assessment Context, Demographics & Medical Overview",
    sections: [
      {
        title: "Client data and assessment context",
        items: [
          { label: "Resident", finding: "Jordan Taylor — fictional demonstration profile" },
          { label: "Assessment type", finding: "Initial comprehensive RN assessment for an Adult Family Home transition" },
          { label: "Information sources", finding: "Fictional interview, sample observations, and demonstration-only record review" },
          { label: "Communication", finding: "Prefers clear one-step explanations and time to respond" },
        ],
      },
      {
        title: "Contacts, directives and planning information",
        summary: "The real SNS structure includes decision-maker, emergency-contact, directive, medical-contact, pharmacy, accessory-provider, and preferred-hospital fields. Identifiers are intentionally omitted here.",
        items: [
          { label: "Decision-making contact", finding: "Authorization and relationship reviewed; identifying details withheld from public sample" },
          { label: "Directives and code status", finding: "Status reviewed with the authorized party; details intentionally omitted" },
          { label: "Provider contacts", finding: "Primary, specialty, pharmacy, and other provider fields included in the SNS structure; no real providers shown" },
        ],
      },
      {
        title: "Pertinent medical history",
        items: [
          { label: "Diagnoses and treatments", finding: "Fictional health history organized by current relevance; specific diagnoses intentionally omitted" },
          { label: "Recent surgeries and hospitalizations", finding: "Structured date, reason, provider, and follow-up fields reviewed; no real events shown" },
          { label: "Specialty care needs", finding: "Potential specialty supports and treatment context documented for authorized review" },
          { label: "Allergies", finding: "Allergy status verified; specific allergy and medication details intentionally omitted" },
        ],
      },
    ],
  },
  {
    number: 2,
    title: "Medication, Specialty Screening & Cognition",
    sections: [
      {
        title: "Medication profile and assistance",
        items: [
          { label: "Medication profile", finding: "Medication, dose, frequency, route, reason, PRN status, and special-instruction fields are reviewed; drug names are omitted from this public sample" },
          { label: "Support level", finding: "Caregiver assistance and RN delegation considerations are documented from authorized orders" },
          { label: "Monitoring", finding: "Observation needs, ordered parameters, and reporting expectations are organized for care planning" },
        ],
      },
      {
        title: "Dementia and psychosocial screening",
        items: [
          { label: "Dementia specialty criteria", finding: "Memory, qualifying conditions, behaviors, placement criteria, and RN rationale reviewed when applicable" },
          { label: "Delirium screening", finding: "No fictional acute-change indicators selected for this demonstration" },
          { label: "Depression screening", finding: "Mood, interest, sleep, energy, safety, history, and follow-up fields represented" },
          { label: "Anxiety screening", finding: "Worry, fear, agitation, treatment history, referral, and follow-up fields represented" },
        ],
      },
      {
        title: "Cognition and daily decision-making",
        items: [
          { label: "Memory and orientation", finding: "Fictional short-term, long-term, person, place, and time findings organized for review" },
          { label: "Response and communication", finding: "Ability to respond, understand, express needs, and use preferred communication approach documented" },
          { label: "Daily judgment", finding: "Routine decisions, emergency response, assistive-device awareness, and community access considered" },
        ],
      },
    ],
  },
  {
    number: 3,
    title: "Physical Assessment",
    sections: [
      {
        title: "Safety, sensory and communication",
        items: [
          { label: "Special concerns and safety", finding: "Fall, skin, wandering, nighttime, anticoagulation, anxiety, behavior, and other concerns reviewed" },
          { label: "Vision and hearing", finding: "Functional vision, hearing, corrective devices, and assistance needs documented" },
          { label: "Oral and swallowing", finding: "Dentition, dentures, oral care, and swallowing concerns reviewed" },
          { label: "Communication", finding: "Understanding, expression, aphasia, and communication support needs documented" },
        ],
      },
      {
        title: "Cardiopulmonary, gastrointestinal and urinary",
        items: [
          { label: "Respiratory", finding: "Symptoms, oxygen, inhaled treatment, equipment, assistance, and delegation needs reviewed" },
          { label: "Cardiovascular", finding: "History, blood pressure, rhythm, edema, compression, anticoagulation, and devices reviewed" },
          { label: "Gastrointestinal", finding: "Reflux, bowel pattern, continence, ostomy, feeding-tube, and assistance considerations reviewed" },
          { label: "Urinary tract and kidneys", finding: "Frequency, urgency, continence, infection, catheter, kidney, and prostate concerns reviewed" },
        ],
      },
      {
        title: "Skin, movement and nervous system",
        items: [
          { label: "Skin", finding: "Integrity, dryness, tears, bruising, incision, rash, wound, and pressure-risk fields reviewed" },
          { label: "Muscular and skeletal", finding: "Balance, weakness, arthritis, fracture, contracture, edema, pain, and limb status reviewed" },
          { label: "Nervous system", finding: "Stroke, TIA, paralysis, Parkinsonism, tremor, seizure, and other neurological history reviewed" },
          { label: "Mobility", finding: "Ambulation, supervision, person-assist level, devices, wheelchair use, and mechanical-lift needs documented" },
        ],
      },
      {
        title: "Endocrine, pain, health history and nutrition",
        items: [
          { label: "Diabetes and endocrine", finding: "Diabetes type, insulin and testing assistance, delegation, thyroid, and other endocrine needs reviewed" },
          { label: "Pain", finding: "Acute or chronic pain, location, effect on function, comfort approach, and reporting needs documented" },
          { label: "Communicable disease and substance history", finding: "Relevant infection, tobacco, alcohol, substance, history, and remission fields reviewed" },
          { label: "Nutrition", finding: "Weight stability, diet, allergy, swallowing, supplement, fluid, intake, and supervision needs reviewed" },
        ],
      },
    ],
  },
  {
    number: 4,
    title: "Preliminary Service Plan for Activities of Daily Living",
    sections: [
      {
        title: "Participation and health support",
        items: [
          { label: "Activity preference and involvement", finding: "Participation ability, interests, spiritual preferences, cues, and caregiver support documented" },
          { label: "Medication assistance", finding: "Independence, reminders, administration, delegation, PRN communication, and outing support documented" },
          { label: "Vital-sign monitoring", finding: "Ordered measurements, preferred timing, parameters, documentation, and reporting expectations recorded" },
        ],
      },
      {
        title: "Personal care and daily living",
        items: [
          { label: "Toileting", finding: "Continence, prompts, transfers, clothing, hygiene, equipment, privacy, and observation needs documented" },
          { label: "Bathing and personal hygiene", finding: "Bathing method, assistance, safety equipment, skin observation, oral care, grooming, and preferences documented" },
          { label: "Dressing", finding: "Choice, upper/lower-body ability, fasteners, footwear, cueing, weather, and assistance needs documented" },
          { label: "Nutrition and eating", finding: "Diet, setup, feeding, swallowing precautions, fluids, allergens, preferences, and intake monitoring documented" },
          { label: "Ambulation and transfers", finding: "Devices, person-assist level, gait belt, stairs, wheelchair, lift, and transfer approach documented" },
          { label: "Sleep patterns", finding: "Nighttime routine, insomnia, repositioning, toileting, monitoring, wandering, and comfort needs documented" },
          { label: "Behavior issues", finding: "Behavior description, frequency, triggers, warning signs, prevention, intervention, outcome, and caregiver guidance documented" },
        ],
      },
    ],
  },
  {
    number: 5,
    title: "Treatments, Emergency Planning & Certification",
    sections: [
      {
        title: "Medical treatments and therapies",
        items: [
          { label: "Treatment or therapy", finding: "Type, agency or provider, frequency, dates, continuation status, instructions, and caregiver responsibility fields represented" },
          { label: "RN coordination", finding: "Fictional follow-up and change-reporting expectations documented without displaying a real clinical order" },
        ],
      },
      {
        title: "Emergency evacuation needs",
        items: [
          { label: "Evacuation level", finding: "Physical ability, cognition, ambulatory status, assistance, mobility device, and drill considerations reviewed" },
          { label: "Caregiver instructions", finding: "Cueing, escort, physical assistance, device use, and emergency-response responsibilities organized" },
        ],
      },
      {
        title: "Signatures and assessor certification",
        items: [
          { label: "Assessment and preliminary plan signatures", finding: "Client, provider, and representative signature structure shown without names, signatures, or dates" },
          { label: "Assessor certification", finding: "RN certification structure represented; public sample is intentionally unsigned" },
        ],
      },
    ],
  },
];

const carePlanPages: ReadonlyArray<SampleDocumentPage> = [
  {
    number: 1,
    title: "Negotiated Care Plan Overview",
    sections: [
      {
        title: "Resident and plan context",
        summary: "The real SNS structure includes resident, provider, date, contact, physician, pharmacy, dentist, directive, and legal-document fields. Public identifiers are intentionally omitted.",
        items: [
          { label: "Resident", finding: "Jordan Taylor — fictional demonstration profile" },
          { label: "Plan basis", finding: "Fictional RN assessment findings organized for an Adult Family Home care-planning example" },
          { label: "Medical status and history", finding: "Current status, pertinent history, and specialty needs summarized without real diagnoses or records" },
          { label: "Planning considerations", finding: "Dementia, mental-health, developmental-disability, directive, and legal-document fields reviewed when applicable" },
          { label: "Emergency evacuation", finding: "Assistance level and special instructions connected to assessed physical and cognitive needs" },
        ],
      },
    ],
  },
  {
    number: 2,
    title: "Communication, Medication & Treatments",
    sections: [
      {
        title: "Care and services",
        items: [
          { label: "Communication", finding: "Needs simple one-step explanations and time to respond.", preference: "Jordan prefers face-to-face conversation in a quiet setting.", instruction: "Approach from the front, explain one task at a time, confirm understanding, and report meaningful changes." },
          { label: "Medication management", finding: "Fictional profile requires organized caregiver support; medication names are intentionally omitted.", preference: "Prefers a consistent routine and explanation before support.", instruction: "Follow authorized orders, maintain secure storage, document support, observe response, and report concerns." },
          { label: "Medication administration", finding: "Administration and delegation fields connect assistance level with authorized orders.", preference: "Accepts assistance when the purpose is explained.", instruction: "Provide only within authorized scope, follow RN delegation requirements when applicable, and document completion." },
          { label: "Treatments, programs and therapies", finding: "Fictional therapy coordination need represented without naming a real agency or order.", preference: "Prefers advance notice before scheduled visits.", instruction: "Coordinate visits, follow written instructions, document care, and communicate changes to the authorized professional." },
        ],
      },
    ],
  },
  {
    number: 3,
    title: "Psychosocial Support, Safety & Mobility",
    sections: [
      {
        title: "Care and services",
        items: [
          { label: "Psychosocial and cognitive support", finding: "Benefits from routine, cueing, reassurance, and observation for change.", preference: "Prefers choices presented one at a time and a calm approach.", instruction: "Maintain a predictable routine, redirect without arguing, protect privacy, and report changes from baseline." },
          { label: "Universal precautions", finding: "Standard infection-prevention practices apply during personal care.", preference: "Explain protective equipment before care.", instruction: "Perform hand hygiene and use appropriate protective equipment for each task." },
          { label: "Mobility", finding: "Fictional assessment indicates supervision and a mobility-device safety check.", preference: "Prefers an unhurried pace and the device placed within reach.", instruction: "Clear pathways, provide the assessed assistance level, use the documented device, and report decline or falls." },
          { label: "Bed mobility and transfers", finding: "Needs cueing and the documented assistance level for safe position changes.", preference: "Prefers step-by-step direction before movement.", instruction: "Prepare the environment, use approved technique and equipment, protect skin, and stop if safety changes." },
          { label: "Eating", finding: "Requires meal setup and observation consistent with the fictional assessment.", preference: "Prefers familiar foods, upright seating, and adequate time.", instruction: "Follow diet and swallowing guidance, support independence, monitor intake, and report concerns." },
        ],
      },
    ],
  },
  {
    number: 4,
    title: "Personal Care & Daily Living",
    sections: [
      {
        title: "Care and services",
        items: [
          { label: "Toileting and continence", finding: "Fictional assessment identifies scheduled prompts and safety assistance.", preference: "Prefers privacy and prompt response to requests.", instruction: "Provide the assessed transfer, clothing, hygiene, and continence support; observe and report changes." },
          { label: "Dressing", finding: "Can participate with setup, cueing, and limited hands-on support.", preference: "Prefers to choose between two weather-appropriate options.", instruction: "Place clothing within reach, encourage participation, assist fasteners and footwear, and maintain dignity." },
          { label: "Personal hygiene", finding: "Needs setup and cueing for oral care, grooming, and skin care.", preference: "Prefers the established morning routine.", instruction: "Prepare supplies, cue each step, assist only as assessed, observe skin and oral status, and report changes." },
          { label: "Bathing", finding: "Requires the documented safety equipment and assistance level.", preference: "Prefers advance notice and a warm, private environment.", instruction: "Prepare the area, use assessed equipment, support safe bathing, observe skin, and document concerns." },
          { label: "Body care", finding: "Skin, nail, foot, range-of-motion, and ordered treatment considerations are organized here.", preference: "Prefers gentle care and explanation before touch.", instruction: "Follow written care directions, protect skin, coordinate specialized care, and report concerns." },
          { label: "Managing finances", finding: "Decision-making and support needs are documented without financial identifiers.", preference: "Prefers the authorized representative involved in complex decisions.", instruction: "Follow the documented authority and promptly report requests outside the caregiver role." },
          { label: "Shopping", finding: "Support needs for obtaining personal items are identified.", preference: "Prefers a short list and familiar items.", instruction: "Coordinate within the agreed plan and preserve choice and receipts according to provider policy." },
        ],
      },
    ],
  },
  {
    number: 5,
    title: "Community Life, Case Management & Review",
    sections: [
      {
        title: "Care and services",
        items: [
          { label: "Transportation", finding: "Mobility, device, escort, and vehicle-transfer considerations are connected to the assessment.", preference: "Prefers advance notice and extra transition time.", instruction: "Use the assessed assistance level, secure mobility equipment, and communicate destination and return plans." },
          { label: "Activities and social needs", finding: "Interests, participation ability, spiritual preferences, and cueing needs are documented.", preference: "Prefers music, conversation, and small-group activities in this fictional example.", instruction: "Offer meaningful choices, support participation without pressure, and adapt when fatigue or distress appears." },
          { label: "Smoking and substance-use considerations", finding: "Current and historical fields are included when applicable; no real history is displayed.", preference: "Not applicable in this fictional demonstration.", instruction: "Follow the assessed plan and provider safety policy when applicable." },
          { label: "Case management and other concerns", finding: "Equipment, service, significant-change, and unresolved-care-plan needs are organized for follow-up.", preference: "Authorized contacts participate in agreed updates.", instruction: "Contact the appropriate authorized professional when needs, equipment, or services change." },
          { label: "Plan review and signatures", finding: "Annual review, significant-change review, resident-request review, and signature roles are represented.", preference: "Resident participation and informed choices remain central.", instruction: "Review and revise as required; this fictional public sample is intentionally unsigned." },
        ],
      },
    ],
  },
];

export const sampleDocuments: ReadonlyArray<SampleDocument> = [
  {
    id: "assessment",
    title: "Sample RN Assessment",
    shortTitle: "Comprehensive Nursing Assessment",
    route: "/sample-assessment",
    serviceRoute: "/services/initial-rn-assessment",
    serviceLabel: "Learn about RN Assessments",
    description:
      "Preview a fictional SNS assessment showing the real document structure for demographics, health history, medications, screenings, physical systems, daily-living needs, safety, therapies, and emergency planning.",
    ctaLabel: "Preview Sample Assessment",
    pageIntro:
      "Explore a static fictional example based on the SNS assessment structure used to organize clinical, functional, cognitive, behavioral, medication, safety, and daily-care findings.",
    subjectName: "Jordan Taylor",
    pages: assessmentPages,
    demonstrates: [
      "Full major-section coverage based on the SNS assessment structure",
      "Clear separation of findings, functional support, safety, and daily-living information",
      "A professional document rhythm designed for authorized clinical and care-planning review",
    ],
  },
  {
    id: "care-plan",
    title: "Sample Individualized Care Plan",
    shortTitle: "Individualized / Negotiated Care Plan",
    route: "/sample-care-plan",
    serviceRoute: "/services/negotiated-care-plan",
    serviceLabel: "Learn about Individualized / Negotiated Care Plans",
    description:
      "Preview a fictional SNS care plan showing how assessed needs, resident strengths and preferences, and caregiver responsibilities are organized into practical daily-care guidance.",
    ctaLabel: "Preview Sample Care Plan",
    pageIntro:
      "Explore a static fictional example based on the SNS negotiated care-plan structure, connecting assessed needs with person-centered preferences and clear caregiver direction.",
    subjectName: "Jordan Taylor",
    pages: carePlanPages,
    demonstrates: [
      "The real three-part relationship between care needs, resident strengths and preferences, and caregiver actions",
      "Coverage of communication, medication, treatment, mobility, personal care, community, safety, and review needs",
      "Person-centered instructions organized for consistent daily support",
    ],
  },
] as const;

export const sampleAssessment = sampleDocuments[0];
export const sampleCarePlan = sampleDocuments[1];
