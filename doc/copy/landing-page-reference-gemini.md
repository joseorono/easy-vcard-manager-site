# Easy vCard Manager - Landing Page Reference

This document serves as a reference for creating the landing page for **Easy vCard Manager** (also known as Easy vCard Editor). It outlines the core value proposition, key features, target audience, and highlights the upcoming flagship "multi-contact" capabilities.

## 🚀 Product Overview

**Tagline:** Your offline-first contact library for importing, editing, searching, and exporting vCard files.

**Easy vCard Manager** is a modern, privacy-focused web and desktop application (PWA & Electron) that allows users to create, edit, visualize, and convert contact files directly in their browser. All processing happens entirely offline, ensuring sensitive contact data never leaves the user's device.

## 🎯 Target Audience

- **Professionals & Freelancers:** Needing to quickly generate and share their digital business card (vCard, QR code) without signing up for subscription services.
- **Privacy Advocates:** Users who want to manage their contact files locally without handing data over to cloud contact providers.
- **Developers & IT Admins:** Needing to inspect, debug, and convert `.vcf` files between different standards (vCard 2.1, 3.0, 4.0).

## ✨ Core Features (Current)

- **Interactive Editor:** An intuitive, form-based interface to build out contact details (Name, Organization, Phones, Emails, URLs, Addresses, etc.).
- **Live Preview:** Instantly see how your contact card looks visually, as well as inspect the raw VCF code output in real-time.
- **Multi-Version Support:** Full compatibility with legacy and modern vCard standards (versions 2.1, 3.0, and 4.0).
- **Import & Export Flexibility:** 
  - Drag and drop `.vcf` files to instantly load and edit them.
  - Export contacts as `.vcf` files, downloadable Images, or scan-ready QR Codes.
- **Rich Media Support:** Embed `PHOTO` and `LOGO` directly into the vCard using Base64 data URIs.
- **Modern & Accessible UI:** Beautifully designed using Shadcn UI and Tailwind CSS, featuring seamless dark mode support.
- **Privacy-First & Offline:** Functions completely offline as a Progressive Web App (PWA). No accounts, no tracking, no server uploads.

## 🌟 Upcoming Flagship Feature: Multi-Contact Library

*(Note: This feature is currently in development per `docs/multi-contact.md` and will be the centerpiece of the landing page once published.)*

The app is evolving from a single-contact editor into a full-fledged **Contacts Library**, bringing powerful management tools to your local device:

- **Robust Local Storage:** Powered by IndexedDB (via Dexie), allowing users to securely store and manage hundreds of contacts offline, completely bypassing typical browser storage limits (e.g., accommodating large contact photos without issue).
- **Bulk Import & Export:** Effortlessly parse and import multi-contact `.vcf` files. Select multiple contacts and bulk-export them into a single consolidated `.vcf` file.
- **Advanced Search & Filtering:** Instantly find contacts with a snappy, in-memory search across names, organizations, emails, and phone numbers. Sort by recently updated, created, or alphabetically.
- **Seamless Autosave:** Edit any contact in your library and your changes are automatically and safely saved to your local database without any manual clicks.
- **Batch Operations:** Select multiple contacts to perform bulk actions (like batch exports or deletions).

## 🛠️ Technical Highlights (For the Tech-Savvy User)

- **Architecture:** Built with React 19, Vite, and TypeScript for blazing-fast performance.
- **Cross-Platform:** Available as a Progressive Web App (PWA) for mobile/desktop browser installation, with an upcoming Electron wrapper for a native desktop experience.
- **Database:** Utilizes IndexedDB for non-blocking, async data persistence, guaranteeing the "offline-first" promise.
- **Standards Compliant:** Adheres to strict vCard RFCs while handling real-world file quirks seamlessly.

## 📝 Landing Page Structure Recommendations

When building the landing page, consider the following flow:
1. **Hero Section:** Clear tagline, a call-to-action ("Open Editor" / "Download App"), and a clean screenshot of the UI (with dark/light mode showcased).
2. **Value Proposition (The "Why"):** Highlight "100% Offline," "Privacy First," and "No Cloud Tracking."
3. **Feature Grid:** Showcase the multi-version support, live preview, QR code generation, and upcoming library features.
4. **How It Works (Demo/GIF):** A quick looping video or GIF showing a drag-and-drop import, a quick edit, and an export.
5. **Tech Stack & Open Source:** A nod to the developer community, linking to the GitHub repository (if public) and highlighting the modern tech stack.
6. **Footer:** Links to documentation, GitHub, and License.
