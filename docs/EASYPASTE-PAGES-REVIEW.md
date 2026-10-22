# EasyPaste website pages — local review

October 13, 2026. No commit, push, or publication is authorized for this revision.

## Scope

Product overview at /apps/easypaste/, Help & Support at /apps/easypaste/support/, and a privacy review draft at /apps/easypaste/privacy/. Continue the portfolio layout, system fonts, and restrained styling; add a violet product accent and the existing app icon. The portfolio remains the main professional website. No case study or research narrative was published.

## Content verification

EasyPaste source was inspected read-only. Its Help is the basis for the instructions. The UX portfolio reference was used only for background and evidence boundaries, not copied into public pages.

| Topic | Source checked | Confirmed behavior |
| --- | --- | --- |
| Help labels and tasks | EasyPasteHelpView.swift; PaletteSettingsContent.swift | History, Note, Pin, Pinned, Auto paste, Collapse View, exact deletion/preference labels, three in-app Help shortcuts |
| Copy and direct Paste | EasyPasteApp.swift; ListItemInteraction.swift | Auto paste defaults off; single-click selects when on, double-click activates; explicit Copy never sends Paste, explicit Paste sends it regardless of preference; normal Command-V event; posting-access check |
| History capacity | ClipboardHistoryStore.swift | Maximum 100; least-recently-used unpinned item evicted for new text; all-pinned full list rejects new text; pinned order is manual |
| Note capacity | NotebookStore.swift | Maximum 100; earliest-created card evicted on add at capacity, regardless of current order |
| Tags and Search | Both stores; EasyPasteHelpView.swift | Search current list text/Tags; 20-character Tags; preview Return/Esc save/cancel |
| Local storage | LocalListStorage.swift; EasyPasteApp.swift | Production initialization uses local history.json and notebook.json; stores text and metadata; preferences use UserDefaults |
| Permissions | AccessibilityPermissionService.swift; EasyPasteApp.swift | Accessibility permission support and direct-paste event-posting preflight; text-context detection also exists; no claim that permission is exclusively used for Paste |
| Network claims | Swift source search for URLSession, URLRequest, NWConnection, CloudKit, CKContainer, HTTP URLs | No app analytics/cloud-sync service found in this source review. This is not a release-binary or platform privacy audit. |

Apple's current [Accessibility permission instructions](https://support.apple.com/guide/mac-help/mh43185/mac) were checked for System Settings → Privacy & Security → Accessibility and adding a missing app with +. Do not confuse this with the separate Accessibility settings category.

The project config currently targets macOS 15.0, but a source deployment target is not final release compatibility. Minimum macOS version remains pending Alex's confirmation, as requested.

## Asset and content gaps

- Real, clean app screenshot or demonstration with fictional text. Current HTML illustrations are explicitly labelled, non-interactive placeholders, not screenshots.
- Approved minimum macOS version and pricing.
- Real Mac App Store listing URL after approval/availability; no badge or download link was invented.
- Support address, email provider, message access, retention, and responsible contact.
- Verification of live Hostinger/CDN logging, retention, cookies, and any analytics.
- Final release privacy review, App Store declarations, and policy effective date.

Only the existing public-facing app icon was copied from the app repository. No clipboard contents, app data files, private development records, or raw UX notes were copied. No app files were changed. All website pages retain draft noindex metadata.

## Validation

Astro check passed for 12 files with zero errors, warnings, or hints; the static build emitted seven pages. Internal routes, section anchors, and asset references were checked. Browser review covered the default desktop viewport and 390px/320px viewport overrides. Product, Help, and Privacy had no document-wide horizontal overflow at the narrowest size. The viewport override was reset after testing.

Help topic navigation jumped to the expected section. Enter opened the native troubleshooting disclosure with visible focus. Tab reached the Skip to content link; Enter moved focus to main. The shared main element gained tabindex=-1 so the skip link focuses its destination. This is basic website verification, not accessibility certification or physical acceptance of the macOS app.

Product and desktop Help screenshots were saved in /private/tmp for this review. The existing local production preview serves the updated build at http://127.0.0.1:4321/apps/easypaste/. Nothing was committed, pushed, or published. Existing unrelated .DS_Store files were preserved.


## October 14 review follow-up

Alex confirmed two current projects and ownership of ideas, research, design, AI-assisted coding, and testing. Target UX roles and research methods/materials still need detail. Applied the Help Save correction after inspecting HistoryMorePanel.swift’s Note editor/save callback. Renamed the guide, clarified product positioning, moved the privacy editorial checklist to documentation, and added project previews and a source-grounded EasyPaste case-study draft. Real screenshots/contact/release/privacy facts remain pending. No push or publication.

## Publication approval — October 14, 2026

Alex approved the local result and requested publication and a Git commit/push. Earlier local-only restrictions above describe the review stage. The approved static build was sent to Hostinger; source-only Git auto-deployment remains off because it does not build Astro.

## Support contact update — October 21, 2026

Alex created and tested easypaste@alexfox.pro, including receiving and replying. Added the address as a visible mailto link for questions, bug reports, and suggestions. Removed the support-not-open wording and clarified the requested bug-report details. Earlier pending-contact notes describe the previous review stage; privacy-provider/access/retention questions remain unresolved.

Rechecked the website guide against the clean local EasyPaste checkout at 1d08bcb: EasyPasteHelpView.swift, HistoryMoreSession.swift, ListItemInteraction.swift, ClipboardHistoryStore.swift, NotebookStore.swift, and PaletteSettingsContent.swift. Copy/direct Paste, pinning/reordering, Note Save, Tags/Search, window settings, shortcuts, and capacity/deletion instructions agree with the current source. No instruction correction was needed. This was source verification, not a new physical app test or App Store readiness audit. No app files were changed.

Alex authorized a focused branch, merge into main, and push to origin, without a hosting backup. This update delivers website source to GitHub; it does not change Hostinger deployment configuration.

Validation: Astro check passed for 15 files with zero errors, warnings, or hints; the static build emitted eight pages. Verified the generated support page contains the visible mailto link and no longer contains the pending-contact wording. git diff --check passed.
