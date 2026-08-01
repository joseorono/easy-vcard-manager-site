# Landing page — product reference

_Last updated 2026-08-01. Status: **reference material** (no landing page built yet)._

This is the source of truth for whoever builds the marketing/landing page. It describes **what the product actually is**, what it can truthfully claim, and which assets and constraints already exist. It is not a design spec — no wireframes, no chosen copy. Pick from it.

> **Timing assumption:** the multi-contact library ([`multi-contact.md`](./multi-contact.md) design, [`multi-contact-2.md`](./multi-contact-2.md) implementation plan) **ships before the landing page is published**. So the page may market the app as a *contacts library*, not a single-card editor. Everything in §4 is safe to claim; §5 is not. If multi-contact slips, the §4 "Library" claims must be pulled before launch.

---

## 1. What the product is

A free, offline-first web app for building, editing, organizing, and exporting **vCard (`.vcf`) contact files**. Everything runs client-side: no account, no server, no upload — contact data never leaves the device.

It ships in three forms from one codebase:

| Form | Notes |
|---|---|
| **Web app** | Vite SPA, currently deployed on Vercel. |
| **PWA** | Installable on desktop and mobile; service worker + offline caching already wired (`vite-plugin-pwa`). |
| **Desktop app** | Electron build (`electron-builder`, Windows NSIS installer today). |

Repo: `https://github.com/joseorono/easy-vcard-manager` · License: **MIT** · Author: José Oroño (see `footer.tsx`).

### Naming — resolve before launch

The project uses **three different names** right now and the landing page should not inherit that mess:

- `Easy vCard Manager` — `package.json` name/productName, `index.html` `<title>`, OG tags, navbar heading, README title.
- `Easy VCF Editor` — `public/llms.txt` heading.
- `Easy vCard Editor` — how the docs in `docs/` refer to it.
- Repo folder is `easy-vcf-editor`; deployed hostname in metadata is `easy-vcard-manager.vercel.app`, and an `easy-vcf-editor.vercel.app` host also exists.

**Recommendation:** standardize on **Easy vCard Manager** (it matches the shipped metadata, the app UI, and the Electron `productName`) and fix `llms.txt` + docs to match. Decide the canonical domain at the same time, since the page needs canonical/OG URLs.

---

## 2. Who it's for

Not personas invented for the page — these follow from what the app does:

- **Anyone handed a `.vcf` they can't open or edit.** Exported from a phone, a CRM, or an old address book. Desktop OSes give you no real vCard editor.
- **People migrating contacts between ecosystems** (Android ↔ iOS ↔ Outlook ↔ Google), who need to inspect and clean up cards, including a multi-contact export file.
- **Freelancers / small teams sharing a business card.** The QR code and contact-card image exports are made for this — put the QR on a slide, a badge, or an email signature.
- **Developers and technical users** who want to see and copy the raw VCF, and care which version (2.1 / 3.0 / 4.0) is emitted.
- **Privacy-sensitive users** who will not paste a contact list into an online converter.

---

## 3. Positioning & differentiators

The competitive set is online "VCF converter/viewer" sites: ad-heavy, upload-based, usually one-way, often quietly retaining the file.

What we actually do differently, in rough order of strength:

1. **Local-only by construction.** There is no backend to send data to. This is an architectural fact, not a promise — the page can say so plainly, and it's the single strongest hook.
2. **Editing, not just converting.** A full structured form over the vCard spec, with a live preview and a raw-code view side by side.
3. **Spec depth.** Real support for vCard 2.1, 3.0 and 4.0 output, and for fields most tools drop entirely (see §4.3).
4. **Works offline, installable.** PWA + desktop build; usable on a plane or an air-gapped machine.
5. **Export variety from one card:** `.vcf`, QR (PNG/SVG), contact-card image.
6. **Open source, MIT.** Auditable — which is what makes claim #1 verifiable rather than marketing.
7. **Free, no ads, no account, no limits.**

---

## 4. Feature inventory (safe to claim)

Shipped in the app today, plus the multi-contact library which lands before publication (marked **[MC]**).

### 4.1 Library **[MC]**

- Many contacts persisted locally in **IndexedDB** — the library survives reloads and works offline.
- Left-hand **contact-list rail**: avatar initials, display name, organization, active highlight.
- **Search** across name, organization, emails and phone numbers; **sort** by last updated, created, or name.
- **Autosave** — edits persist as you type (debounced), no Save button.
- New contact, per-row delete, and **Export all** to a single multi-contact `.vcf`.
- Multi-contact `.vcf` **import**: a file with N cards imports all N.
- Storage is quota-based (hundreds of MB+), so photo-bearing contacts are fine.

_Deferred, do **not** claim: multi-select checkboxes, "export selected", batch delete, merge/dedupe, batch edit._

### 4.2 Editing

- Structured form organized into **12 collapsible sections** — Basic Information, Phone, Email, Work & Organization, Addresses, Websites & URLs, Dates & Calendar, Geographic, Instant Messaging, Related People, Additional Info, Advanced — each with a filled-count badge.
- **Repeatable rows** for phones, emails, addresses, URLs, IM handles and related people, each with its own type (home/work/cell/fax/pager/other, etc.).
- Helpers: country-code selector for phones, timezone selector, language selector, structured GEO (lat/long) input.
- **Live preview** with three tabs: **Visual** business-card rendering · **Code** raw VCF with copy-to-clipboard · **QR Code** with a size/scannability check.
- Light/dark theme.

### 4.3 vCard coverage (good "we don't drop your data" material)

Beyond names/phones/emails/addresses: nickname, prefix/suffix/middle name, gender, photo, logo, organization + department + title + role, birthday, anniversary, calendar URIs (`CALURI`, `CALADRURI`, `FBURL`), GEO, timezone, categories/tags, note, IM handles (Telegram, WhatsApp, Signal, Discord, Matrix, Mastodon, Bluesky), related people (spouse/child/parent/sibling/friend/colleague/assistant/emergency), languages, public-key URL, UID, and **arbitrary custom/extended fields**.

### 4.4 Import

- **Drag and drop** a `.vcf` / `.vcard` anywhere on the window.
- **Choose a file** via the import dialog's upload tab.
- **Paste raw vCard text** (e.g. straight out of an email).
- Clear feedback on malformed or empty files instead of silent failure.

### 4.5 Export

- **`.vcf`** in vCard **2.1 / 3.0 / 4.0** (version picker in the navbar).
- **QR code** as PNG or SVG, with a warning when the card is too large to scan reliably.
- **Contact-card image** for sharing.
- Copy the raw VCF to the clipboard.

### 4.6 Platform & accessibility

- Offline-first PWA, installable; desktop Electron build.
- Responsive: on small screens the preview and the contact rail become slide-in panels.
- **WebMCP support** (`use-webmcp.ts`) — agentic browsers can drive the editor via registered tools (read the current contact, fill fields, import vCard text, export the `.vcf`, clear the form). A genuinely unusual differentiator; worth a small section aimed at technical readers.

---

## 5. Do NOT claim

Not built, or explicitly deferred. Verify against [`missing-features.md`](./missing-features.md) before writing any feature copy.

- Cloud sync, accounts, sharing links, collaboration, or any server-side anything.
- Contact **merge / dedupe**, batch edit, multi-select, export-selected, batch delete.
- **Undo/redo**.
- **jCard / JSON export** and a JSON preview tab.
- CSV / Outlook / Google Contacts import or export. (Only `.vcf` in, `.vcf`/QR/image out.)
- Import from a phone, Google account, or any address-book integration.
- "Load sample contact" one-click demo.
- Per-entry `PREF`/primary marking.
- Inline field-level validation messages.
- Localization / multiple UI languages. (`language-selector.tsx` sets the contact's `LANG` field, **not** the UI language.)
- macOS or Linux desktop installers — only a Windows NSIS target is configured.
- Any claim about number of users, downloads, or ratings.

---

## 6. Copy angles

Raw material, not final copy. Pick a lane and keep it consistent.

**Value propositions**
- Edit vCards without uploading them anywhere.
- Your contacts, your device. The app has no server to send them to.
- A real editor for the format your phone exports.
- Open a `.vcf`, fix it, export it — for one contact or hundreds.

**Objection handling worth addressing on-page**
- _"Where does my data go?"_ → Nowhere. It stays in your browser's local storage; the code is open source and auditable.
- _"Which vCard version do I need?"_ → Pick 3.0 for maximum compatibility, 4.0 for the modern spec; the app writes all three.
- _"Will it work on my phone?"_ → It's a PWA; install it, works offline.
- _"Is it free?"_ → Yes, MIT-licensed, no account, no ads.

**Proof to show rather than assert**
- A screenshot of the three-column layout (list · form · preview).
- The **Code** tab — showing real VCF output builds credibility with technical users.
- The QR code with a phone scanning it.
- DevTools network panel showing zero requests during editing (a strong, honest demo of the privacy claim).

---

## 7. Suggested page structure

A conventional order that fits what we have. Not prescriptive.

1. **Hero** — name, one-line value prop, primary CTA ("Open the editor" / "Launch app"), secondary CTA ("View on GitHub"). Product screenshot or short loop.
2. **Privacy strip** — one line, high contrast: no upload, no account, no server.
3. **Core features** — 3–4 cards: Library, Editor + live preview, Import anything, Export everywhere.
4. **How it works** — 3 steps: drop a `.vcf` (or start blank) → edit in the form → export as `.vcf`, QR or image.
5. **Format depth** — versions 2.1/3.0/4.0 and the long field list; reassures "we won't drop your data".
6. **Install anywhere** — PWA + desktop app.
7. **Open source** — MIT, link to the repo, invite contributions.
8. **FAQ** — the objections in §6, plus "what is a vCard/VCF file?" (good for search).
9. **Footer** — GitHub, license, author credit (match `footer.tsx`).

**CTAs:** the primary action is always *use the app* — it's free and instant, so there's no signup funnel to protect. Keep the app one click away from every section.

---

## 8. Brand & assets

Already in `public/`, reuse rather than recreate:

| Asset | Use |
|---|---|
| `vcf.svg` | Primary logo (also used in the navbar). |
| `vcf-without-bg-black.svg`, `svg-without-bg.svg` | Monochrome / transparent variants. |
| `pwa-192x192.png`, `pwa-512x512.png`, `pwa-64x64.png`, `maskable-icon-512x512.png` | App icons; `pwa-512x512.png` is also the Electron installer icon. |
| `apple-touch-icon-180x180.png`, `favicon.ico` | Favicons. |
| `vcf-og.png`, `vcf-og-2.png` | Existing OG/social images. |

- **Theme color:** `#020617` (slate-950), from `index.html`. Dark, near-black.
- **Design system:** Tailwind CSS v4 + Shadcn UI + `lucide-react` icons, light/dark via `next-themes`. A landing page built inside this app should reuse those primitives and the existing CSS variables in `src/index.css` rather than introducing a second visual language.
- **Tone:** the app's own copy is plain and functional ("Create and edit VCF contacts"). Match it — no hype, no exclamation marks.

---

## 9. SEO & metadata

- Existing meta lives in `index.html`: title, description, canonical, Open Graph and Twitter card. **The landing page must keep these in sync**, and the description should be refreshed once multi-contact ships (the current one — "An offline-first contact library to import, edit, search, and bulk-export vCard files" — already anticipates it).
- `public/robots.txt` and `public/llms.txt` exist. **`llms.txt` must be updated** with the landing page URL, the library features, and the corrected product name.
- Target intents worth ranking for: *edit vcf file online*, *vcf editor*, *create vcard*, *open vcf file*, *vcf to qr code*, *split multi-contact vcf*. The FAQ and a "what is a VCF file" explainer are the natural place to serve these.
- Twitter card is currently `summary`; consider `summary_large_image` with a proper 1200×630 OG image for launch.

---

## 10. Technical constraints for implementation

If the landing page is built **inside this repo** (recommended — no second stack to maintain):

- Follow [`../AGENTS.md`](../AGENTS.md): functional components with the `function` keyword, kebab-case filenames, PascalCase component names, Tailwind + Shadcn, path aliases (no relative imports), no `React.memo`/`useCallback`/`useMemo` (React Compiler), constants in `src/constants/`, big types in `src/types/`, **no export barrels**.
- The app is a **Vite SPA with no router today** — routing (or a build-time split between the landing page and `/app`) is a decision that has to be made. Loading the full editor bundle just to render a marketing page is worth avoiding.
- The landing page must not break the **PWA precache** or the Electron build, which loads the SPA entry directly.
- No analytics or third-party embeds without an explicit decision — third-party scripts undercut the privacy claim that the whole page rests on. If tracking is needed, use something cookieless and say so.
- No images or fonts fetched from third-party CDNs, for the same reason and to keep the offline story intact.

---

## 11. Related documents

- [`missing-features.md`](./missing-features.md) — UI-oriented feature catalog; the checkbox state is the ground truth for what's shipped.
- [`multi-contact.md`](./multi-contact.md) — approved architecture for the contacts library.
- [`multi-contact-2.md`](./multi-contact-2.md) — implementation plan and product decisions for it.
- [`todo.md`](./todo.md) — task tracker.
- [`../ideas.md`](../ideas.md) — broader RFC/standards-oriented backlog.
- [`../README.md`](../README.md) — developer-facing overview.
