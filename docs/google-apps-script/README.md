# SNS public form intake with Google Apps Script

This integration records non-clinical public website inquiries in one Google Spreadsheet. It is only for business inquiries, assessment intake coordination, and professional referral coordination. It must not be used for assessment answers, care plans, diagnoses, medication lists, clinical files, or resident records.

The browser submits to the SNS Next.js server. The server validates the request and forwards it to the Apps Script web app with a server-only shared secret. The browser never receives the Apps Script URL, spreadsheet ID, or secret.

## Spreadsheet structure

Create one spreadsheet named **Sosena Nursing Solutions - Website Leads**. Create the three tabs below with these exact names. The script creates their header rows automatically when the first valid submission for each form arrives, and it can also recreate a missing tab.

### Contact Leads

`Timestamp`, `Name`, `Role / I Am A`, `Email`, `Phone`, `Message`, `Status`, `Submission ID`

### Assessment Requests

`Timestamp`, `Name`, `Organization / Facility`, `Role`, `Email`, `Phone`, `Primary Service`, `Reason / Timing`, `Preferred Timeline`, `Message / Additional Notes`, `Status`, `Consent`, `Submission ID`

The current public assessment form has no service-location field, so none is added to this tab.

### Client Referrals

`Timestamp`, `Referring Contact Name`, `Organization`, `Role`, `Email`, `Phone`, `Current Setting`, `Referral Context`, `Primary Service`, `Reason / Timing`, `Preferred Timeline`, `Service Location`, `Message / Referral Notes`, `Status`, `Consent`, `Submission ID`

Every new row starts with `New` in the Status column. SNS may later change it manually to `Contacted`, `Scheduled`, or `Closed`.

`Submission ID` remains required for duplicate protection and should be hidden in the day-to-day Sheet view. `Consent` remains in Assessment Requests and Client Referrals as a useful record that the submitter acknowledged the public form's authorization and non-clinical-use boundary; it may also be hidden when Sosena does not need it in the operational view. Source Page and User Agent are no longer stored because they are not needed to manage a lead and would add redundant technical data or browser fingerprinting to the Sheet.

The endpoint maps every value by its header name rather than assuming a fixed column position. It recognizes both the recommended layouts above and the legacy layouts that still contain `Source Page` and `User Agent`, so an existing Sheet can be cleaned up manually without shifting future values into the wrong columns. While legacy columns remain, new rows leave them blank.

## Manual Google setup

1. In Google Sheets, create **Sosena Nursing Solutions - Website Leads**.
2. Create or rename three tabs exactly: **Contact Leads**, **Assessment Requests**, and **Client Referrals**.
3. Copy the spreadsheet ID from the URL. It is the value between `/d/` and `/edit`.
4. Open **Extensions → Apps Script** from that spreadsheet.
5. Replace the editor contents with [`sns-form-endpoint.gs`](./sns-form-endpoint.gs).
6. Open **Project Settings → Script Properties** and add:
   - `SNS_SPREADSHEET_ID` = the spreadsheet ID from step 3
   - `SNS_FORMS_SHARED_SECRET` = a long, unique random secret generated with a password manager
   - `SNS_LEAD_NOTIFICATION_EMAIL` = the email address that should receive new-lead alerts
   - Optional: `SNS_LEADS_SHEET_URL` = the full private Google Sheets URL used by the email's **Open SNS Website Leads** link
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

## Email notifications

After a new lead is successfully appended and verified in its Sheet tab, the Apps Script attempts to send an operational email through `MailApp`. The notification uses only the non-clinical fields already accepted by the matching public form. It never includes the shared secret, user agent, attachments, clinical records, or additional form fields.

Notification subjects are:

- `New SNS Contact Lead — {Name}`
- `New SNS Assessment Request — {Name}`
- `New SNS Client Referral — {Organization or Referring Contact Name}`

Set `SNS_LEAD_NOTIFICATION_EMAIL` under **Apps Script → Project Settings → Script Properties**. Do not add the recipient address to the tracked script. If `SNS_LEADS_SHEET_URL` is configured with a valid Google Sheets URL, the HTML email also includes an **Open SNS Website Leads** button. The button is omitted when the property is missing or invalid.

The Contact notification uses the validated submitted email as its reply-to address. Assessment-request and professional-referral notifications do not override reply-to.

Google Sheets remains the source of truth. Notification delivery happens only after the row is written, `SpreadsheetApp.flush()` completes, and the persisted submission ID is read back from the Sheet. A missing recipient property, exhausted MailApp quota, or email-send error does not remove the row and does not turn a successful website submission into an error. The script logs only a sanitized sent, skipped, or failed message containing the validated submission ID. Duplicate submission IDs return the existing generic success response without sending another email.

Adding `MailApp` may prompt the Apps Script owner to reauthorize the project for the email-send scope (`https://www.googleapis.com/auth/script.send_mail`). Approve the requested send-only permission, then publish a new version through **Deploy → Manage deployments**. Do not change the Web App's existing execute-as or access settings.

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
9. With `SNS_LEAD_NOTIFICATION_EMAIL` configured, submit one fictional test through each public form. Confirm one `New` row and one matching email for each of **Contact Leads**, **Assessment Requests**, and **Client Referrals**.
10. Confirm each notification subject, included non-clinical fields, submission ID, timestamp, and privacy footer. Confirm no secret, user agent, attachment, or clinical information appears.
11. Resend an already-used submission ID directly to the Apps Script test endpoint; confirm no second row and no second notification are created.
12. To test notification failure safely, temporarily set `SNS_LEAD_NOTIFICATION_EMAIL` to an invalid value in a non-production Apps Script deployment. Submit fictional data and confirm the row remains `New`, the website receives success, and the execution log contains only the sanitized notification-skipped message. Restore the property after the test.

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
- Email notification failure never rolls back a persisted lead or asks the visitor to resubmit.
- `MailApp.getRemainingDailyQuota()` is checked after persistence. Zero remaining quota skips the alert without blocking the lead.

## One-time cleanup for the existing Google Sheet

Do not run an automatic migration against the live Sheet. After the updated Apps Script has been reviewed and deployed as a new version, use this manual procedure during a quiet period:

1. Make a full Google Sheets copy as a recoverable backup.
2. Confirm the three tab names are still **Contact Leads**, **Assessment Requests**, and **Client Referrals**.
3. Confirm every existing header is unique and that row values currently align with their headers before moving anything.
4. Reorder each tab to the recommended header order documented above. Moving whole columns preserves the relationship between each header and its existing values.
5. Delete the complete `Source Page` and `User Agent` columns from all three tabs. Do not delete `Submission ID`.
6. Hide the `Submission ID` column in each tab. Optionally hide `Consent` in Assessment Requests and Client Referrals while retaining its values for audit reference.
7. Freeze the header row and confirm `Status` remains visible in the operational portion of each tab.
8. Submit one clearly fictional test through each public form. Verify the new row aligns with the correct headers, starts with `Status = New`, sends one matching notification, and does not recreate Source Page or User Agent.
9. Repeat one test with the same submission ID through a non-production test path and confirm duplicate suppression still prevents a second row and email.

The updated script accepts the legacy or recommended column order, but it deliberately refuses to write when a required header is missing, duplicated, or renamed. This fail-closed behavior protects existing rows from positional corruption.
