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

The current site preserves the temporary SNS monogram placeholder because no finalized logo asset was found locally. When approved assets are available, place them in `public/brand/` using:

- `sns-logo-horizontal.png` for the full header/footer logo
- `sns-logo-mark.png` for compact icon and favicon use

Use transparent-background navy/teal exports.

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
