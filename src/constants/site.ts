export const SITE_NAME = "Easy vCard Manager";

export const THEME_STORAGE_KEY = "theme";

export const SITE_TAGLINE =
  "An offline-first contact library to import, edit, search and export vCard files.";

export const SITE_DESCRIPTION =
  "Free, offline-first editor for .vcf contact files. Import, edit, search and export vCards as .vcf, QR code or image. No account, no upload — your contacts never leave your device.";

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://easy-vcard-manager.vercel.app";

export const APP_URL = "https://easy-vcard-manager.vercel.app";

export const REPO_URL = "https://github.com/joseorono/easy-vcard-manager";

export const AUTHOR_NAME = "José Oroño";

export const AUTHOR_URL = "https://github.com/joseorono";

export const NAV_LINKS = [
  { label: "Features", href: "#features" },
  { label: "How it works", href: "#how-it-works" },
  { label: "Formats", href: "#formats" },
  { label: "Install", href: "#install" },
  { label: "FAQ", href: "#faq" },
] as const;

export const HERO_HIGHLIGHTS = [
  "No upload",
  "No account",
  "Works offline",
  "MIT licensed",
] as const;

export const PRIVACY_POINTS = [
  {
    title: "Nothing is uploaded",
    description:
      "The app has no backend. Parsing, editing and exporting all happen in your browser.",
  },
  {
    title: "Nothing is stored elsewhere",
    description:
      "Your library lives in your browser's IndexedDB, on your device, under your control.",
  },
  {
    title: "Nothing to take our word for",
    description:
      "The source is MIT-licensed and public — open DevTools and watch the network stay silent.",
  },
] as const;

export const FEATURES = [
  {
    icon: "library",
    title: "A local contact library",
    description:
      "Keep many contacts in local IndexedDB storage. A searchable list rail, sorting by name or last updated, and autosave as you type — no Save button, no reload loss.",
    points: [
      "Search names, organizations, emails and phones",
      "Autosave, per-contact delete, new contact",
      "Export the whole library to one .vcf",
    ],
  },
  {
    icon: "editor",
    title: "A real editor, not a converter",
    description:
      "A structured form over the vCard spec, split into 12 collapsible sections with filled-count badges, plus repeatable rows for phones, emails, addresses, URLs and more.",
    points: [
      "Country-code, timezone and language helpers",
      "Structured GEO, categories, notes, custom fields",
      "Light and dark theme",
    ],
  },
  {
    icon: "preview",
    title: "Live preview, three ways",
    description:
      "See the business-card rendering, the raw VCF output, and the QR code side by side with the form — updating as you type.",
    points: [
      "Visual card preview",
      "Raw VCF code with copy to clipboard",
      "QR code with a scannability check",
    ],
  },
  {
    icon: "import",
    title: "Import anything vCard",
    description:
      "Drop a file anywhere on the window, pick it from the import dialog, or paste raw vCard text straight out of an email. Multi-contact files import every card.",
    points: [
      "Drag and drop .vcf / .vcard",
      "Paste raw vCard text",
      "Clear errors instead of silent failures",
    ],
  },
  {
    icon: "export",
    title: "Export everywhere",
    description:
      "One contact, many outputs. Pick the vCard version you need and download, or share a QR code and a contact-card image instead of a file.",
    points: [
      ".vcf in vCard 2.1, 3.0 and 4.0",
      "QR code as PNG or SVG",
      "Contact-card image for slides and signatures",
    ],
  },
  {
    icon: "offline",
    title: "Offline-first by design",
    description:
      "Installable as a PWA on desktop and mobile, with a Windows desktop build. Usable on a plane or on an air-gapped machine.",
    points: [
      "Service worker and offline caching",
      "Responsive slide-in panels on small screens",
      "No third-party scripts, fonts or trackers",
    ],
  },
] as const;

export const STEPS = [
  {
    title: "Bring a card in — or start blank",
    description:
      "Drop a .vcf file on the window, choose one from the import dialog, or paste raw vCard text. Multi-contact files land as multiple contacts in your library.",
  },
  {
    title: "Edit it properly",
    description:
      "Work through the structured form, add repeatable phones, emails and addresses, and watch the visual card and the raw VCF update as you type. Changes autosave locally.",
  },
  {
    title: "Export it the way you need it",
    description:
      "Download .vcf in vCard 2.1, 3.0 or 4.0, grab a QR code as PNG or SVG, save a contact-card image, or copy the raw VCF to your clipboard.",
  },
] as const;

export const VCARD_VERSIONS = [
  {
    version: "2.1",
    description: "For legacy address books and older phones that reject newer cards.",
  },
  {
    version: "3.0",
    description: "The safest pick — the widest support across phones, CRMs and mail clients.",
  },
  {
    version: "4.0",
    description: "The modern RFC 6350 spec, with the richest property set.",
  },
] as const;

export const SUPPORTED_FIELDS = [
  "Nickname",
  "Prefix / suffix",
  "Middle name",
  "Gender",
  "Photo",
  "Logo",
  "Organization",
  "Department",
  "Title",
  "Role",
  "Birthday",
  "Anniversary",
  "Calendar URIs",
  "Free/busy URL",
  "GEO",
  "Timezone",
  "Categories",
  "Notes",
  "Telegram",
  "WhatsApp",
  "Signal",
  "Discord",
  "Matrix",
  "Mastodon",
  "Bluesky",
  "Related people",
  "Languages",
  "Public key URL",
  "UID",
  "Custom fields",
] as const;

export const AUDIENCES = [
  {
    title: "Anyone handed a .vcf they can't open",
    description:
      "Exported from a phone, a CRM or an old address book — desktop operating systems still give you no real vCard editor.",
  },
  {
    title: "People migrating between ecosystems",
    description:
      "Android, iOS, Outlook and Google all disagree. Inspect the card, clean it up, and export the version the other side accepts.",
  },
  {
    title: "Freelancers and small teams",
    description:
      "Turn your details into a QR code or a contact-card image for a slide, a badge or an email signature.",
  },
  {
    title: "Developers and privacy-minded users",
    description:
      "Read the raw VCF, choose the emitted version, drive the editor from an agentic browser — and never paste a contact list into an online converter.",
  },
] as const;

export const FAQS = [
  {
    question: "What is a vCard (.vcf) file?",
    answer:
      "A vCard is the standard text format for a contact: name, phone numbers, emails, addresses, organization and much more. It is what your phone exports when you share or back up contacts, and a single .vcf file can hold one card or hundreds.",
  },
  {
    question: "Where does my data go?",
    answer:
      "Nowhere. There is no server to send it to. Files are parsed in your browser and the library is kept in your browser's local IndexedDB storage. The source is open, so the claim is auditable rather than a promise.",
  },
  {
    question: "Which vCard version should I pick?",
    answer:
      "Choose 3.0 for maximum compatibility, 4.0 for the modern spec, and 2.1 only for legacy targets. The app writes all three, so you can export the same contact more than once.",
  },
  {
    question: "Will it work on my phone?",
    answer:
      "Yes. It is a Progressive Web App — install it from your browser and it keeps working offline. On small screens the preview and the contact list become slide-in panels.",
  },
  {
    question: "Is it really free?",
    answer:
      "Yes. No account, no ads, no limits, no paid tier. The project is MIT-licensed and open source.",
  },
  {
    question: "Can I import CSV, Google Contacts or Outlook exports?",
    answer:
      "Not today. Import is .vcf and raw vCard text only, and export is .vcf, QR code and image. Convert to .vcf first if you are coming from another format.",
  },
] as const;

export const FOOTER_PRODUCT_LINKS = [
  { label: "Features", href: "#features" },
  { label: "How it works", href: "#how-it-works" },
  { label: "Formats", href: "#formats" },
  { label: "Install", href: "#install" },
  { label: "FAQ", href: "#faq" },
] as const;
