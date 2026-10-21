# Project Documentation Index

This directory contains the complete technical and design specifications for the personal portfolio of **Meghna Ghosh**.

All documentation was developed in Planning Mode prior to the creation of website implementation files (`index.html`, `style.css`, `script.js`).

---

## Documentation Index

| File | Title | Description |
|---|---|---|
| [01-project-overview.md](file:///d:/MEGHNA/My%20Creation/Meghna_Portfolio/docs/01-project-overview.md) | **Project Overview** | Purpose, target audience (recruiters, hiring managers, coordinators), core goals, success criteria, and strict project scope. |
| [02-content-spec.md](file:///d:/MEGHNA/My%20Creation/Meghna_Portfolio/docs/02-content-spec.md) | **Content Specification** | Verbatim copy for all 7 sections plus navigation and footer, master link registry, and asset fallback requirements. |
| [03-design-system.md](file:///d:/MEGHNA/My%20Creation/Meghna_Portfolio/docs/03-design-system.md) | **Design System ("Premium")** | Charcoal/ink and gold color palette, Syne & DM Sans typography scale, 8pt spacing grid, component standards, and accessibility rules. |
| [04-architecture.md](file:///d:/MEGHNA/My%20Creation/Meghna_Portfolio/docs/04-architecture.md) | **Technical Architecture** | Directory tree, file responsibilities, CSS variable conventions, JavaScript module architecture, and data flows. |
| [05-animation-spec.md](file:///d:/MEGHNA/My%20Creation/Meghna_Portfolio/docs/05-animation-spec.md) | **Animation Specification** | Landing sequence timeline, full animation matrix with triggers, durations, easings, CSS/JS approaches, and reduced-motion rules. |
| [06-responsive-plan.md](file:///d:/MEGHNA/My%20Creation/Meghna_Portfolio/docs/06-responsive-plan.md) | **Responsive Layout Plan** | Multi-device layout behavior, container widths, and collapsing rules for 360px (Mobile), 768px (Tablet), and 1440px (Desktop). |
| [07-test-plan.md](file:///d:/MEGHNA/My%20Creation/Meghna_Portfolio/docs/07-test-plan.md) | **Quality Assurance & Test Plan** | Comprehensive test checklist covering links, CV download, form pipeline, animations, responsive widths, and fallbacks. |
| [08-task-breakdown.md](file:///d:/MEGHNA/My%20Creation/Meghna_Portfolio/docs/08-task-breakdown.md) | **Implementation Task Breakdown** | Ordered checklist with dependencies and acceptance criteria across 12 implementation stages for Phase 1. |

---

## Open Questions & Assumptions

### 1. Profile Photo Asset Name & Extension
- **Observation**: The workspace `assets/` directory currently contains an existing file named `assets/profile.png` (2.5 MB), whereas the specification calls for `assets/profile.jpg`.
- **Planned Approach**: In `script.js` and `index.html`, we will point primarily to `assets/profile.jpg`. If it is missing or fails to load, the script can gracefully check `assets/profile.png` before falling back to the styled circular "MG" monogram avatar.
- **Open Question**: Would you prefer us to rename/copy `assets/profile.png` to `assets/profile.jpg`, or maintain this dual-check fallback?

### 2. Project Screenshot Assets
- **Observation**: The `assets/projects/` directory does not yet contain screenshot files (`autocare.png`, `finance.png`, `calculator.png`).
- **Planned Approach**: As specified in `docs/02-content-spec.md` and `docs/04-architecture.md`, the code will render high-quality gradient monogram panels (with initials `AH`, `FD`, `CW` and a "Preview Coming Soon" badge) whenever the screenshots are absent. You can drop in real screenshots at any time and they will automatically display with the frame zoom hover effect.

### 3. FormSubmit.co Initial Email Confirmation
- **Observation**: Submitting to `https://formsubmit.co/ajax/ghoshmeghna2001@gmail.com` for the very first time prompts FormSubmit to send a one-time activation email to `ghoshmeghna2001@gmail.com`.
- **Planned Approach**: The code implements a loading state, success/error feedback, and an automatic `mailto:` client fallback if the network request fails or activation is pending.
- **Action for User**: Once Phase 1 is built and the first test submission is made, simply click the confirmation link in your Gmail inbox to activate the endpoint for future direct submissions.

### 4. Resume File Presence
- **Observation**: `assets/Meghna_Ghosh_Resume.pdf` is already present in your `assets/` folder (64 KB).
- **Confirmation**: All "Download CV" buttons (Navbar, Landing CTA, Mobile Drawer, and Footer) will directly target this file with `download="Meghna_Ghosh_Resume.pdf"`.

