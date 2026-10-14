# alexfox.pro development plan

Updated October 14, 2026. Work locally; do not push or publish this revision until Alex approves.

## Purpose and confirmed direction

UX career opportunities are the primary goal. Helping people understand and use Alex’s apps is secondary.

Alex currently has two projects: EasyPaste and Text Select .click. More will be added later. Alex owns the ideas, research, design, AI-assisted coding, and testing end to end. Show that ownership through decisions and artifacts. Describe actual research methods; do not assume interviews, participants, or measured outcomes.

Keep one website on alexfox.pro, Astro static output, readable system typography, neutral colors, and restrained spacing. Product accents and genuine imagery distinguish projects. Keep textselect.click running as its existing product website.

## Website structure

| Route | Visitor’s task | Planned content |
| --- | --- | --- |
| / | Understand Alex’s value and contact him | Positioning, selected project previews, public contact, résumé, brief introduction |
| /work/ | Explore design work | Curated previews, useful descriptions, honest status, case-study links |
| /work/easypaste/ | Understand Alex’s decisions | Problem, role, constraints, research, iterations, evidence, limits, real media |
| /work/textselect/ | Understand Text Select’s design story | Same structure once research/design material is available; no empty page yet |
| /apps/ | Find all Alex’s products | Descriptions, recognizable icons, availability, product destinations |
| /apps/easypaste/ | Understand and obtain EasyPaste | Explicit Mac utility description, real screenshot, everyday uses, availability, Help, Privacy |
| /apps/easypaste/support/ | Complete a task or get help | Instructions, screenshots, troubleshooting, actual support channel |
| /apps/easypaste/privacy/ | Understand confirmed data practices | App, website, support, responsible contact, effective date |
| /404.html | Recover from a missing link | Useful Home and Apps links |

Contact can remain on the homepage. A separate About page is optional after the bio and résumé are ready. Avoid empty pages and fake download/contact links.

## Project inventory

| Project | Product state | Portfolio state | Next evidence |
| --- | --- | --- | --- |
| EasyPaste | Final testing; App Store listing not confirmed | First local narrative draft | Clean media, before/after comparisons, research methods/materials, role/timeline review |
| Text Select .click | Existing site links to Chrome, Edge, Firefox stores | Preview; case study planned | Problem origin, research, iterations, role/timeline, screenshots, outcome evidence |
| Future projects | Add when Alex supplies details | Reuse inventory and case-study structure | Name, description, status, role, links, sharing permission, strongest story |

The shared inventory is src/data/projects.ts. Home, Work, and Apps use it. Product pages and case studies have separate destinations. As the portfolio grows, Home can feature 2–3 strongest studies and Apps can list all products.

## Recommended order

### 1. Positioning and evidence

Confirm target UX roles, public name, short bio, professional links, public contact, and résumé. For each project, gather the audience/problem, research methods, constraints, timeline, individual contribution, key decisions, and evidence. Confirm what can be shared. Use MEDIA-BRIEF.md for exports.

Result: an agreed content brief and media set. Current copy reflects confirmed end-to-end ownership; specialization remains open.

### 2. Finish EasyPaste product and Help

Replace labelled illustrations with clean app images. Capture the More menu and Add to Note editor. Keep the corrected Save step. Confirm compatibility, price, support address, and a real App Store URL when available. These release decisions remain pending by Alex’s choice.

Result: useful product/support pages with real imagery and an actual contact route. Keep an honest availability statement during testing.

### 3. Complete the first case study

Start with EasyPaste because its records already describe specific decisions and iterations. The local draft covers copy/paste intent, preview interaction, and History grouping. Add shareable research material, screenshots/recordings, chronology, and evidence. Review the narrative with Alex. Do not publish private development records.

Result: one substantial recruiter-ready study. Owner testing and automated checks remain distinct from participant research or measured gains.

### 4. Text Select and the professional homepage

Gather Text Select’s original research and design story before drafting it. Use real selection examples across symbols and inside links. Refine the homepage for the target roles, add résumé/contact links, and finalize the biography.

Result: two complementary projects demonstrating end-to-end ownership with evidence. Future projects fit the same structure.

### 5. Privacy and release facts

Confirm release-build data handling, website/CDN logs and cookies, any analytics, support email provider/access/retention, responsible contact, and effective date. Keep the editorial verification checklist in documentation. Privacy remains visibly draft until these facts are resolved.

Apple’s references require a functioning [Support URL](https://developer.apple.com/help/app-store-connect/reference/app-information/platform-version-information/) leading to actual contact information, and a [Privacy Policy URL](https://developer.apple.com/help/app-store-connect/reference/app-information/app-information/) for macOS apps. Completed release pages are needed; draft notices are not substitutes.

### 6. Design review and release verification

Keep an editorial, restrained visual system: clear hierarchy, consistent spacing, genuine interface imagery, short captions, and limited product accents. Review as a recruiter and app user. Check narrow layouts, image crops, headings, contrast, keyboard focus/Tab order, skip links, disclosures, alt text, navigation, URLs, downloads, metadata, and 404 behavior. Create share images from approved assets. Add no analytics until Alex chooses it and its data handling is documented.

Remove the development notice and noindex only when Alex agrees the content is ready. The request to disclose development status remains in effect meanwhile.

### 7. Publish and maintain

Keep Hostinger’s source-only Git auto-deployment off. Publish generated dist files; pulling source previously removed the live site. Before publishing, verify current hosting, choose/test the static delivery method, retain rollback files, deploy only approved scope, and verify root/nested URLs, assets, redirects, HTTPS, and 404. This task makes no hosting changes.

For future projects, add facts to the inventory and a case study when the material is ready. Update product/support/privacy pages with releases. Do not assume a local build is published.

## Applied locally in this revision

- Explicit EasyPaste Mac clipboard/reusable-text purpose near the headline.
- “How to use EasyPaste” Help title.
- Correct Add to Note sequence: editor → review text/Tag → Save → find card in Note.
- Home/Work/Apps previews with shared inventory, existing icons, verified descriptions.
- First EasyPaste case-study draft with evidence limits and labelled media gaps.
- Quieter development notice; visible Contact & résumé destination with pending content.
- Privacy verification checklist moved into documentation; privacy text remains draft.

## Information still needed

Target UX roles; public contact/professional links; résumé and short bio; project timelines; research methods/materials; before/after artifacts; outcome evidence, if any; permission to share. macOS compatibility, price, and support email remain pending until Alex decides.

## Validation of this local revision

Astro check: 15 files, zero errors/warnings/hints. Static build: eight pages. Internal routes, anchor targets, image references, one h1 per page, and draft noindex metadata were verified. Browser review confirmed Home → EasyPaste case-study navigation, the corrected Add to Note Save sequence, and the skip link moving keyboard focus to main. Home, Work, Apps, and the case-study page had no document-wide horizontal overflow at the 320px viewport override; the override was reset afterward. The homepage was also visually reviewed at the existing desktop viewport. No commit, push, or hosting change was made.

## Publication approval — October 14, 2026

Alex approved the local result and requested publication and a Git commit/push. Earlier local-only restrictions above describe the review stage. The approved static build was sent to Hostinger; source-only Git auto-deployment remains off because it does not build Astro.
