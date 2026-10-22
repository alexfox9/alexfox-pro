# Hostinger deployment

## Current delivery — October 21, 2026

`main` contains Astro source. Hostinger must deploy the **`deploy` branch**, which contains only generated static files, with `index.html` at the root. Do not connect Hostinger directly to `main`: Advanced Git pulls files without building Astro, causing HTTP 403.

`.github/workflows/publish-static.yml` runs on pushes to main (or a manual run on main), installs the locked dependencies on Node 22, checks and builds the website, then commits the generated output to `deploy`. A failed check/build leaves the last published build intact. The workflow uses the existing repository GITHUB_TOKEN; no Hostinger secret is required. Hostinger's Git integration watches `deploy`.

After a main push, wait for the GitHub Actions run to finish before using Hostinger Redeploy. Redeploy must show branch `deploy`, not `main`. Verify the homepage, nested routes, styles, support email, and custom 404. `/source-revision.txt` identifies the source commit used for the live build.

For a source rollback, revert the unwanted source commit on main and push; the same workflow builds and publishes that revision. Generated deploy commits also retain build history. Do not force-push or edit generated files by hand.

### Emergency restoration

Run `ASTRO_TELEMETRY_DISABLED=1 npm ci`, `npm run check`, and `npm run build`. Deploy the **contents of dist/** to alexfox.pro using Hostinger's static deployment tool. Keep the Git connection on deploy afterward. No per-change hosting backup is required for this Git-tracked static site unless Alex requests one.

## Historical setup and failure evidence


## Confirmed configuration — October 13, 2026

Alex authorized making the connected Hostinger website work using the opened tabs.

Hostinger Advanced → GIT is connected to `alexfox9/alexfox-pro`, branch `main`, and deploys the repository root to `public_html`. The deployment log for `8b3dc39` cloned the source, ran a Composer dependency step, and published it. It did not install npm dependencies or build Astro. The resulting site returned 403 because the source root had no index.html.

The initial accessibility reading of the Auto-deployment control was misleading. It was a dropdown button, not a reliable checked-state indicator, and auto-deployment was actually enabled. A source-only deployment of `7a2a6bb` at 22:20 replaced the uploaded static files, causing the homepage to return 403 and nested pages to return 404. On the subsequent repair, the menu's “Turn off auto-deployment” action was used and Hostinger reported “Auto-deployment is off. Changes from Git are not deployed automatically.” Leave it off for this source-only Git flow. “Redeploy” here pulls source; it does not build the static website.

## Working delivery method

Build locally, then upload the contents of `dist/` into this domain's `public_html` using Hostinger File Manager. Keep index.html directly in public_html, with apps/ and work/ beside it. Do not upload dist as a nested folder.

```sh
ASTRO_TELEMETRY_DISABLED=1 npm run check
ASTRO_TELEMETRY_DISABLED=1 npm run build
```

The tracked `public/.htaccess` is copied into dist/ by Astro. It selects index.html as the directory index and uses the generated /404.html for missing pages.

Initial delivery uploaded a ZIP containing only the generated static pages and extracted it in public_html. Existing source files from the Git pull were preserved. Future uploads should replace only the approved static build files, retaining a backup of the previous static build when replacement is needed. Remove obsolete generated routes deliberately when they no longer belong on the site.

The initial upload archive was moved to the domain file manager's parent directory after extraction, outside public_html.

Do not click Git Redeploy expecting an Astro update; it replaces the manual static upload. Future deployment automation remains a separate decision: use a real Astro build pipeline or deploy a generated static artifact/branch. Auto-deployment was disabled during the repair; no new credentials or deployment workflow were configured.

The content remains a draft and retains noindex metadata. Public availability does not mean the portfolio, support channel, or privacy policy is final.

## Verification

The HTTPS homepage rendered with its styles after upload. Work, Apps, EasyPaste, support, and privacy were each opened through the live navigation and displayed their expected content. The Apps page retained its external textselect.click link. A missing URL displayed the site's custom Page not found page after the .htaccess rules were saved. No textselect.click hosting configuration was changed.

The local production build passed again with public/.htaccess included. The uploaded archive contained seven generated HTML files; .htaccess was then created directly in the Hostinger editor with the same two rules as the tracked file. Browser rendering and navigation were verified; mobile and full accessibility review remain outstanding.

## Repair verification

Restored the retained static archive into public_html and restored the root .htaccess. Both the public CDN response and the origin had failed before restoration, ruling out a CDN-only or trailing-slash issue. After restoration, `/work` returned 301 to `/work/`; `/work/` and `/` returned 200. The live Work page rendered in the browser. DNS records were inspected but not changed.
