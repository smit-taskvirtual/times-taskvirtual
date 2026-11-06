# Page: Career
Route: `/career/` · Title: `Career – TIMES`
Images folder: `public/images/times/career/` (no page images in the source)

---

## 1. Page Banner
- **Title (H1):** Career
- Breadcrumb: Home / Career

---

## 2. Job Application Form — single centered form card
**Layout:** One long application form, centered (max-width card). Group fields in a 2-column grid on desktop, 1 column on mobile. The source has no intro text, job listings or accordion — it is form only.

| # | Field | Type | Required | Options |
|---|-------|------|----------|---------|
| 1 | Full Name | text | Yes | |
| 2 | Email Address | email | Yes | |
| 3 | Phone Number | tel | Yes | |
| 4 | Current Location | text | Yes | |
| 5 | Position Applied For | select | Yes | —Please choose an option— / Site Engineer / Mechanical Engineer / Civil Engineer / Production Engineer / Quality Control Engineer / Project Manager / Safety Officer / Procurement Executive / Store Executive / Skilled Technician / Operator / Internship / Trainee |
| 6 | Department | select | Yes | —Please choose an option— / Projects / Production / Quality Assurance / Quality Control / Maintenance / Safety / Procurement & Supply Chain / Stores & Logistics / HR & Administration |
| 7 | Total Experience | text | Yes | |
| 8 | Current Company | text | No | |
| 9 | Relevant Industry Experience | text | No | |
| 10 | Willing to Work at Project Sites? | radio | Yes | Yes / No |
| 11 | Preferred Work Location | text | No | |
| 12 | Expected Salary (CTC) | text | No | |
| 13 | Notice Period | text | No | |
| 14 | Upload Resume (PDF/DOC) | file | Yes | accept `.pdf,.doc,.docx` |
| 15 | Certifications (if any) | text | No | |
| 16 | Cover Letter / Message | textarea | No | |

- **Submit button:** (the source text didn’t include a label, so use "Submit Application")

> In "Position Applied For", "Skilled Technician / Operator" and "Internship / Trainee" are each one single option (the slash is part of the label), not two options.
> Resume upload needs a backend or storage service. Required flags are inferred from the asterisks in the source.
