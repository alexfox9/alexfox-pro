# Hostinger deployment

## Confirmed configuration — October 13, 2026

Alex authorized making the connected Hostinger website work using the opened tabs.

Hostinger Advanced → GIT is connected to `alexfox9/alexfox-pro`, branch `main`, and deploys the repository root to `public_html`. The deployment log for `8b3dc39` cloned the source, ran a Composer dependency step, and published it. It did not install npm dependencies or build Astro. The resulting site returned 403 because the source root had no index.html.

The Auto-deployment checkbox was unchecked. Leave it off for this source-only Git flow. “Redeploy” here pulls source; it does not build the static website.

## Working delivery method

Build locally, then upload the contents of `dist/` into this domain's `public_html` using Hostinger File Manager. Keep index.html directly in public_html, with apps/ and work/ beside it. Do not upload dist as a nested folder.

```sh
ASTRO_TELEMETRY_DISABLED=1 npm run check
ASTRO_TELEMETRY_DISABLED=1 npm run build
```

The tracked `public/.htaccess` is copied into dist/ by Astro. It selects index.html as the directory index and uses the generated /404.html for missing pages.

Initial delivery uploaded a ZIP containing only the generated static pages and extracted it in public_html. Existing source files from the Git pull were preserved. Future uploads should replace only the approved static build files, retaining a backup of the previous static build when replacement is needed. Remove obsolete generated routes deliberately when they no longer belong on the site.

The initial upload archive was moved to the domain file manager's parent directory after extraction, outside public_html.

Do not click Git Redeploy expecting an Astro update; it may replace the manual static upload. Future deployment automation remains a separate decision: use a real Astro build pipeline or deploy a generated static artifact/branch. No new automatic deployment, credentials, or workflow was configured.

The content remains a draft and retains noindex metadata. Public availability does not mean the portfolio, support channel, or privacy policy is final.

## Verification

The HTTPS homepage rendered with its styles after upload. Work, Apps, EasyPaste, support, and privacy were each opened through the live navigation and displayed their expected content. The Apps page retained its external textselect.click link. A missing URL displayed the site's custom Page not found page after the .htaccess rules were saved. No textselect.click hosting configuration was changed.

The local production build passed again with public/.htaccess included. The uploaded archive contained seven generated HTML files; .htaccess was then created directly in the Hostinger editor with the same two rules as the tracked file. Browser rendering and navigation were verified; mobile and full accessibility review remain outstanding.
