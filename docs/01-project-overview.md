# 01 - Project Overview

## 1. Executive Summary & Purpose
This project is a high-performance, responsive, single-page personal portfolio website for **Meghna Ghosh**. It functions as an interactive digital resume and showcase of Meghna's technical skills, personal projects, educational background, and contact details.

The website is crafted with a "Premium" aesthetic—using a dark charcoal/ink palette accented with warm ivory and refined gold-to-bronze tones. It utilizes plain HTML5, CSS3, and vanilla JavaScript (without external UI frameworks) to demonstrate strong fundamentals, performance optimization, and accessibility.

---

## 2. Target Audience
The primary audiences visiting this portfolio include:
1. **Recruiters & Talent Acquisition Specialists**: Looking for quick access to core competencies, contact details, resume download, and candidate location.
2. **Hiring Managers & Engineering Leads**: Evaluating code quality, project architecture, problem-solving depth, technologies used, and documentation standards.
3. **Internship Coordinators**: Reviewing academic standing (BCA second year at IGNOU), readiness for internships, foundational computer science knowledge, and proactive self-learning.

---

## 3. Core Goals
- **Professional Presentation**: Act as a live, interactive resume that conveys readiness for software developer, Python developer, and web developer roles.
- **Project Proof**: Display full-stack and front-end projects with architectural descriptions, key outcomes, technology tags, and source code links.
- **Seamless Communication**: Offer a frictionless contact experience with floating-label client validation, asynchronous form submission, and a direct mailto fallback.
- **Fast & Fluid Experience**: Deliver instant page loads, smooth 60fps scroll animations using `IntersectionObserver`, and no visual layout shifts.

---

## 4. Success Criteria
A successful delivery must satisfy the following criteria:
- **Zero Framework Overhead**: Built exclusively with clean, modular HTML5, CSS3, and vanilla JavaScript.
- **Flawless Responsiveness**: Pixel-perfect layout across mobile (360px), tablet (768px), and desktop (1440px+) without horizontal overflow or broken touch targets.
- **Animation Fidelity**: Every animation specified in the prompt is implemented (e.g. entrance staggers, 3D card flips, number counter increments, border traces, and hover micro-interactions).
- **Graceful Fallbacks**:
  - Missing profile photo defaults to an elegant circular "MG" monogram badge.
  - Missing project screenshots default to branded gradient initials panels.
  - Missing CV file notifies user politely instead of triggering a broken 404 navigation.
  - Missing Live Demo URLs cleanly hide the demo button without dead links.
- **Accessibility & Standards**:
  - WCAG AA contrast ratios maintained across text and backgrounds.
  - Semantic landmark tags (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`).
  - ARIA labels on all icon-only interactive controls and external links.
  - Full keyboard navigability with visible focus indicators.
  - Complete respect for user OS setting `prefers-reduced-motion: reduce`.
- **CV Download**: All "Download CV" buttons correctly trigger download of `assets/Meghna_Ghosh_Resume.pdf` with the proper filename attribute.
- **Contact Pipeline**: Submits data asynchronously via FormSubmit AJAX with inline validation, honeypot spam protection, loading indicators, and graceful mailto fallback.

---

## 5. Project Scope

### In Scope
1. **Single-Page Application Architecture**:
   - Fixed/Sticky Navigation Bar with "MG" monogram logo, smooth anchor scrolling, dynamic active-section highlighting, and mobile drawer/hamburger menu.
   - Top right "Download CV" CTA on desktop and inside mobile drawer.
2. **Sections Included**:
   - **Landing (#home)**: Monogram mark, headline, animated designations, intro summary, 3 CTAs ("Learn More About Me", "Get In Touch", "Download CV"), and 3 social icon links.
   - **About Me (#about)**: 5-7 sentence professional summary, profile image with 3 navigational shortcut buttons ("Education", "Projects", "Skills"), and Mission & Vision 3D flip cards.
   - **Experience (#experience)**: Two alternating dual-panel cards ("Personal Projects - Independent Developer" with "Independent" badge; "Career Interests" with "Open To Work" badge).
   - **Education (#education)**: BCA qualification card from IGNOU with 3 highlight bullets, plus a secondary compact "Languages" card.
   - **Projects (#projects)**: Rendered dynamically from a JavaScript configuration object (`PROJECTS`), featuring 3 projects: AutoCare Hub, Finance Dashboard, and Calculator Website. Dual-panel cards with screenshot frame, zoom hover, outcome items, tech pills, and action buttons.
   - **Skills (#skills)**: Six category cards in a grid with category icons, animated percentage progress bars, and synchronized numerical counters.
   - **Contact (#contact)**: Two-column layout with off-white floating-label contact form (POST to FormSubmit AJAX + mailto fallback + honeypot) on the left, and dark contact info panel (email, phone, location, social links) on the right.
   - **Footer**: Monogram/Name, tagline, social links, dynamic copyright year, back-to-top button, and "Download CV" link.
3. **Design System & Assets**:
   - Charcoal, warm ivory, muted text, and gold-to-bronze accent palette.
   - Google Fonts typography: "Syne" for headings/monograms, "DM Sans" for body/data.
   - Centralized CSS Custom Properties (variables).
   - Fallback states for profile picture, project screenshots, and resume.

### Out of Scope
- Backend server hosting or custom database endpoints (client-side static site only).
- Multi-page routing (all navigation is smooth anchor-based on a single page).
- Content Management Systems (CMS) or admin login dashboards.
- Arbitrary placeholder content, unverified employment histories, or unverified project metrics.
- Heavy JavaScript UI libraries (e.g., React, Vue, jQuery, Bootstrap, or Tailwind CDN in final build; purely vanilla HTML/CSS/JS).

