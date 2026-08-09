# SNS Public Website

Public clinical-services website for Sosena Nursing Solutions LLC.

## Purpose

This site presents SNS public business information, RN assessment services, individualized and negotiated care-plan services, and non-clinical request coordination.

Clinical records and assessment data must not be placed in this public website repository.

## Routes

- `/`
- `/about`
- `/services`
- `/services/rn-assessments`
- `/services/negotiated-care-plans`
- `/who-we-serve`
- `/how-it-works`
- `/request-assessment`
- `/contact`
- `/privacy`
- `/terms`

## Branding Assets

Final SNS assets are stored in `public/images/branding/` and `public/images/team/`.

- `public/images/branding/sns-logo-horizontal.png` for the header, footer, Open Graph, and larger brand placements
- `public/images/branding/sns-icon.png` for favicon and app icon uses
- `public/images/team/sosena-mekuria-rn-approved.webp` for the professional founder portrait

Use Next.js image optimization for rendered brand assets and preserve the supplied aspect ratios.

## Public Form Safety

The request form collects minimum intake details only. It must not ask for diagnoses, medications, Social Security numbers, insurance identifiers, clinical uploads, or detailed resident medical information.

## Local Development

```bash
npm install
npm run dev
```

## QA

```bash
npm run lint
npx tsc --noEmit
npm run build
```

## Deployment Plan

Suggested Vercel project: `sns-website`.

Initial deployment should be preview-only. Do not connect `sosenanursingsolutions.com` or `www.sosenanursingsolutions.com` until local QA passes and DNS records are reviewed.

Do not disturb Google Workspace MX, SPF, DKIM, DMARC, or verification records.
