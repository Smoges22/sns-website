# SNS public form intake with Google Apps Script

This integration records non-clinical public website inquiries in one Google Spreadsheet. It is only for business inquiries, assessment intake coordination, and professional referral coordination. It must not be used for assessment answers, care plans, diagnoses, medication lists, clinical files, or resident records.

The browser submits to the SNS Next.js server. The server validates the request and forwards it to the Apps Script web app with a server-only shared secret. The browser never receives the Apps Script URL, spreadsheet ID, or secret.

## Spreadsheet structure

Create one spreadsheet named **Sosena Nursing Solutions - Website Leads**. Create the three tabs below with these exact names. The script creates their header rows automatically when the first valid submission for each form arrives, and it can also recreate a missing tab.

### Contact Leads

`Timestamp`, `Submission ID`, `Name`, `Role / I Am A`, `Email`, `Phone`, `Message`, `Source Page`, `User Agent`, `Status`

### Assessment Requests

`Timestamp`, `Submission ID`, `Name`, `Organization / Facility`, `Role`, `Email`, `Phone`, `Primary Service`, `Reason / Timing`, `Preferred Timeline`, `Message / Additional Notes`, `Consent`, `Source Page`, `User Agent`, `Status`

The current public assessment form has no service-location field, so none is added to this tab.

### Client Referrals

`Timestamp`, `Submission ID`, `Referring Contact Name`, `Organization`, `Role`, `Email`, `Phone`, `Current Setting`, `Referral Context`, `Primary Service`, `Reason / Timing`, `Preferred Timeline`, `Service Location`, `Message / Referral Notes`, `Consent`, `Source Page`, `User Agent`, `Status`

Every new row starts with `New` in the Status column. SNS may later change it manually to `Contacted`, `Scheduled`, or `Closed`.

## Manual Google setup

1. In Google Sheets, create **Sosena Nursing Solutions - Website Leads**.
2. Create or rename three tabs exactly: **Contact Leads**, **Assessment Requests**, and **Client Referrals**.
3. Copy the spreadsheet ID from the URL. It is the value between `/d/` and `/edit`.
4. Open **Extensions → Apps Script** from that spreadsheet.
5. Replace the editor contents with [`sns-form-endpoint.gs`](./sns-form-endpoint.gs).
6. Open **Project Settings → Script Properties** and add:
   - `SNS_SPREADSHEET_ID` = the spreadsheet ID from step 3
   - `SNS_FORMS_SHARED_SECRET` = a long, unique random secret generated with a password manager
7. Choose **Deploy → New deployment → Web app**.
8. Set **Execute as** to **Me**.
9. Set **Who has access** to **Anyone**. The Apps Script still rejects submissions without the server-only shared secret.
10. Authorize the script when Google prompts you, then copy the deployed Web App URL. It normally ends in `/exec`.

Do not paste real secrets or the spreadsheet ID into tracked repository files.

## SNS server configuration

Add these variables to `.env.local` for local development and to the SNS public website's server environment before deployment:

```dotenv
SNS_APPS_SCRIPT_URL=https://script.google.com/macros/s/REPLACE_WITH_DEPLOYMENT_ID/exec
SNS_FORMS_SHARED_SECRET=REPLACE_WITH_THE_SAME_LONG_RANDOM_SECRET
```

Neither variable may use the `NEXT_PUBLIC_` prefix. Do not place either value in browser code, HTML, screenshots, tickets, or public documentation.

After changing the Apps Script later, use **Deploy → Manage deployments → Edit → New version** so the Web App runs the updated code.

## Safe test plan

Use fictional, clearly labeled test information only. Never use a real resident name or clinical details.

1. Submit one valid test from `/contact`; confirm a `New` row appears in **Contact Leads**.
2. Submit one valid test from `/request-assessment`; confirm the selected primary service, reason/timing, and consent appear in **Assessment Requests**.
3. Submit one valid test from `/refer-a-client`; confirm the professional contact and non-clinical coordination fields appear in **Client Referrals**.
4. Try an invalid email and a missing required field; the browser should block or reject the submission.
5. Try a message longer than 1,000 characters; it must be rejected.
6. In local developer tools only, populate the hidden `website` honeypot and submit; the endpoint should return generic success without adding a row.
7. Submit a value beginning with `=`, `+`, `-`, or `@`; confirm the Sheet stores it as plain text rather than a formula.
8. Double-click a submit button during a request; only one row should be created for the submission ID.

If `SNS_APPS_SCRIPT_URL` or `SNS_FORMS_SHARED_SECRET` is absent, the API logs a configuration message on the server and returns a generic retry message to the browser. It never reports fake success for a normal submission.

## Security and privacy notes

- The Apps Script accepts only `contact`, `assessment_request`, and `client_referral`.
- Each form has an exact allowlist of accepted fields, values, and length limits.
- The script maps each form type to a fixed tab; the browser cannot choose a sheet name.
- Submission IDs are checked before appending, which prevents exact duplicate writes.
- A script lock serializes row creation.
- User values that could become spreadsheet formulas are prefixed as plain text.
- The endpoint never returns existing rows or spreadsheet contents.
- The application does not log complete form payloads or message content.
- No file upload or clinical-document field is supported.
