# Build plan

The current website-wide plan is [WEBSITE-DEVELOPMENT-PLAN.md](WEBSITE-DEVELOPMENT-PLAN.md), with the asset checklist in [MEDIA-BRIEF.md](MEDIA-BRIEF.md). The earlier foundation plan below is retained as context; hosting was subsequently verified in DEPLOYMENT.md.

## 1. Local foundation

Create a minimal static Astro project in the existing checkout. Add a shared responsive layout, basic navigation, agreed routes, a 404 page, and an external textselect.click link. Use system fonts and restrained styling as a provisional baseline. Keep draft pages out of search indexing. No analytics, forms, CMS, backend, or publishing workflow in this phase.

Verify the production build and type checks, inspect internal links and route responses, and open the local preview. Leave changes uncommitted for review.

## 2. Portfolio content and visual direction

Agree on Alex's positioning, biography, contact method, and visual direction. Select case studies from real projects and source material. For each, document the problem, Alex's role, constraints, decisions, iterations, and evidence. Distinguish implementation checks from user research and measured outcomes. Do not turn missing evidence into claims.

## 3. Product content

Confirm EasyPaste's current features, screenshots, distribution URL, support channel, and privacy behavior before writing publishable pages. Keep textselect.click external initially. Decide whether any app work also merits a separate portfolio case study.

## 4. Deployment verification, after local approval

Astro static output is compatible with Hostinger's documented static upload path: build locally and upload the contents of `dist/` into the domain's `public_html`. See [Astro's Hostinger guide](https://docs.astro.build/en/guides/deploy/hostinger/).

The specific Hostinger account, domain mapping, HTTPS, existing files, and GitHub connection have not been inspected. Before delivery, verify whether the selected “Deploy as static” flow actually builds Astro from GitHub, supports the required Node version, and serves `dist/`. Do not assume connecting a repository deploys built assets. If unavailable, agree on the documented static upload method. Do not add automatic deployment or replace hosting files without approval.

After approval, complete content and visual QA, remove draft noindex only when ready, then use the approved push/publishing method. Verify root and nested URLs, CSS/assets, 404 behavior, HTTPS, and textselect.click link on the real host.

Deployment follow-up: Alex authorized making the connected Hostinger website work on October 13, 2026. The Git flow was confirmed to publish source without building Astro. A local static build was uploaded successfully; see [DEPLOYMENT.md](DEPLOYMENT.md) for the verified procedure. Content remains draft and noindex remains in place.
