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
    title: "Keep your contacts together",
    description: "A local library for searching, sorting and autosaving one contact or a whole collection.",
    points: ["Search across the details that matter", "Import and export multi-contact files"],
  },
  {
    icon: "editor",
    title: "Edit without the guesswork",
    description: "A clear, structured form makes it easy to fix the contact details hidden inside a .vcf file.",
    points: ["Add phones, emails, addresses and more", "Start from a blank card or an import"],
  },
  {
    icon: "preview",
    title: "See what you are sharing",
    description: "A live card preview, raw VCF view and QR code update as you work.",
    points: ["Copy the exact VCF output", "Check a QR code before sharing"],
  },
  {
    icon: "import",
    title: "Bring contacts in",
    description: "Drop in a .vcf file or paste vCard text from an email, phone or address book export.",
    points: ["Works with single and multi-contact files", "Clear import feedback"],
  },
  {
    icon: "export",
    title: "Take them anywhere",
    description: "Export a compatible .vcf, a scan-ready QR code or a contact-card image.",
    points: ["Choose vCard 2.1, 3.0 or 4.0", "Share as PNG, SVG or an image"],
  },
  {
    icon: "offline",
    title: "Works offline",
    description: "Use it in a browser, install it as a PWA or use the Windows desktop build.",
    points: ["No account or cloud upload", "Designed for desktop and mobile"],
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
    title: "People moving between ecosystems and devices",
    description:
      "Moving between Android, iOS, Outlook or Google? Clean up the card, keep a local backup, and export the .vcf the other side accepts.",
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
    question: "Can I use exports from Google Contacts or Outlook?",
    answer:
      "Yes. Their contact exports are vCard files, so you can import the resulting .vcf directly. The app also accepts pasted raw vCard text.",
  },
] as const;

export const FOOTER_PRODUCT_LINKS = [
  { label: "Features", href: "#features" },
  { label: "How it works", href: "#how-it-works" },
  { label: "Formats", href: "#formats" },
  { label: "Install", href: "#install" },
  { label: "FAQ", href: "#faq" },
] as const;
