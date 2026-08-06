# SNS Public Website

Public marketing and minimum-intake website for Sosena Nursing Solutions LLC.

## Purpose

This site presents SNS public business information, RN assessment services, negotiated care-plan services, and minimum-intake request coordination for Adult Family Homes.

It is separate from the private SNS Clinical Portal. Clinical records, assessment data, and portal routes must not be placed in this repository.

## Routes

- `/`
- `/about`
- `/services`
- `/services/rn-assessments`
- `/services/negotiated-care-plans`
- `/services/nurse-delegation`
- `/how-it-works`
- `/request-assessment`
- `/contact`
- `/privacy`
- `/terms`

## Environment

Copy `.env.example` to `.env.local` for local development when needed.

Required public variable:

- `NEXT_PUBLIC_PORTAL_URL` - secure portal login destination. Leave blank to show `Secure Portal — Coming Soon` without a clickable link.

## Branding Assets

Final SNS assets are stored in `public/images/branding/` and `public/images/team/`.

- `public/images/branding/sns-logo-transparent.png` for the header and footer wordmark treatment
- `public/images/branding/sns-logo.png` for Open Graph and larger brand placements
- `public/images/branding/sns-icon.png` for favicon, app icon, compact navigation, and avatar-style uses
- `public/images/team/sosena-mekuria-rn.png` for the professional founder portrait

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
