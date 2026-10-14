# Local development

The original README.md is retained unchanged.

Use a supported even-numbered Node release (22.12+; `.nvmrc` selects Node 24).

```sh
npm ci
npm run dev
```

Open the Local URL printed by Astro (normally http://localhost:4321).

```sh
npm run check
npm run build
npm run preview
```

The static build is generated in `dist/` and ignored by Git. Source lives in `src/pages/`, the shared layout in `src/layouts/`, and styles in `src/styles/`. No server adapter or runtime backend is required.

All current pages are local-review drafts and have `noindex, nofollow` metadata. Support and privacy pages are placeholders, not approved policies or functioning support channels. Replace them with verified content before release.

Build command: `npm run build`. Output directory: `dist`. Do not push, publish, upload, or activate automatic deployment until Alex approves.

For the now-verified Hostinger setup and static upload procedure, see [DEPLOYMENT.md](DEPLOYMENT.md). The initial foundation was pushed and the live static upload was authorized separately by Alex.
