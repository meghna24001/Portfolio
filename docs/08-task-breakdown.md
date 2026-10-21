# 08 - Implementation Task Breakdown

This document provides the sequential, step-by-step implementation checklist for Phase 1. Each task includes dependencies, scope, and specific acceptance criteria.

---

## Task List & Acceptance Criteria

### Stage 1: Setup & Design Tokens
- [x] **Task 1.1: Document Boilerplate & Meta Setup**
  - **Dependencies**: None
  - **Scope**: Create `index.html` skeleton with Google Fonts pre-connects ("Syne" and "DM Sans"), viewport configuration, title, and Open Graph tags.
  - **Acceptance Criteria**: Document is valid HTML5; Google Fonts load correctly; responsive meta tag is present.
- [x] **Task 1.2: Design Tokens & CSS Architecture**
  - **Dependencies**: Task 1.1
  - **Scope**: Create `style.css` with reset, `:root` custom properties (colors, fonts, spacing, shadows, easings, radii), base typography, container widths, and reduced-motion reset block.
  - **Acceptance Criteria**: All CSS variables are defined matching `docs/03-design-system.md`; no default margin/padding leakage; body background is `#0E0D0C`.

---

### Stage 2: Navigation Bar & Header
- [x] **Task 2.1: Desktop Navbar Structure & Styling**
  - **Dependencies**: Task 1.2
  - **Scope**: Build fixed `<header>` with circular "MG" monogram, links for all 7 sections, and outlined "Download CV" button.
  - **Acceptance Criteria**: Header is fixed/sticky with backdrop-filter blur; links highlight on hover; layout matches 1440px desktop spec.
- [x] **Task 2.2: Mobile Hamburger & Drawer**
  - **Dependencies**: Task 2.1
  - **Scope**: Build mobile hamburger SVG button and slide-in drawer with links and "Download CV" CTA.
  - **Acceptance Criteria**: Drawer toggles on hamburger click; closes on link tap, outside click, or ESC key; `aria-expanded` updates correctly.
- [x] **Task 2.3: Scroll Spy & Active Indicator**
  - **Dependencies**: Task 2.1, Task 2.2
  - **Scope**: Implement `IntersectionObserver` in `script.js` to dynamically highlight the current section link in the navbar.
  - **Acceptance Criteria**: Active nav link receives gold accent color and underline as user scrolls through sections.

---

### Stage 3: Landing Hero Section (`#home`)
- [x] **Task 3.1: Hero Content Markup & Typography**
  - **Dependencies**: Task 1.2
  - **Scope**: Build hero content: MG monogram mark, H1 "Meghna Ghosh", designation line, and exact intro paragraph.
  - **Acceptance Criteria**: Typography scales accurately between 360px and 1440px; text matches `docs/02-content-spec.md` exactly.
- [x] **Task 3.2: Hero Action Buttons & Social Row**
  - **Dependencies**: Task 3.1
  - **Scope**: Add 3 CTA buttons ("Learn More About Me", "Get In Touch", outlined "Download CV" with SVG arrow) and social icons row (GitHub, LinkedIn, Email).
  - **Acceptance Criteria**: "Download CV" downloads `assets/Meghna_Ghosh_Resume.pdf`; hover nudges download arrow icon downward; social links open in new tab.
- [x] **Task 3.3: Landing Entrance Animation Sequence**
  - **Dependencies**: Task 3.2
  - **Scope**: Implement staged CSS keyframes: text entrance -> 3 CTAs slide up staggered (0.15s) -> social icons pop in with elastic bounce.
  - **Acceptance Criteria**: Animation runs automatically on load in the exact sequence specified in `docs/05-animation-spec.md`.

---

### Stage 4: About Me Section (`#about`)
- [x] **Task 4.1: Profile Portrait & MG Monogram Fallback**
  - **Dependencies**: Task 1.2
  - **Scope**: Build profile image frame referencing `assets/profile.jpg` with JavaScript `onerror` fallback that renders a circular gold-bordered "MG" monogram badge.
  - **Acceptance Criteria**: If image is missing, stylish monogram renders cleanly without broken image icons.
- [x] **Task 4.2: About Summary & Work Shortcuts**
  - **Dependencies**: Task 4.1
  - **Scope**: Implement professional summary copy and 3 "View My Work" buttons ("Education", "Projects", "Skills") that smooth scroll to their sections.
  - **Acceptance Criteria**: Buttons feature hover underline draw and icon nudge; copy is verbatim from CV.
- [x] **Task 4.3: Mission & Vision 3D Flip Cards**
  - **Dependencies**: Task 4.2
  - **Scope**: Build Mission and Vision cards with 3D flip-in entrance animations (`rotateY`), Vision card delayed by 0.2s.
  - **Acceptance Criteria**: Cards flip into view once when scrolled into viewport using `IntersectionObserver`.

---

### Stage 5: Experience Section (`#experience`)
- [x] **Task 5.1: Alternating Dual-Panel Cards**
  - **Dependencies**: Task 1.2
  - **Scope**: Build Card 1 ("Personal Projects - Independent Developer" with "Independent" badge) and Card 2 ("Career Interests" with "Open To Work" badge), each with a dark left panel and light right content panel.
  - **Acceptance Criteria**: Layout alternates cleanly on desktop; collapses to dark top strip and light content on mobile (< 768px).
- [x] **Task 5.2: Experience Animations & Micro-Interactions**
  - **Dependencies**: Task 5.1
  - **Scope**: Implement alternating slide-ins (left and right), dark panel curtain width expansion, top-to-bottom bullet stagger (0.15s), hover lift (`translateY(-6px)`), and badge pulse glow.
  - **Acceptance Criteria**: All animations trigger once on scroll; hover interactions feel crisp and responsive.

---

### Stage 6: Education Section (`#education`)
- [x] **Task 6.1: Education & Languages Cards**
  - **Dependencies**: Task 1.2
  - **Scope**: Build BCA Degree card with institution details, 3 highlight bullets, graduation icon, plus the compact Languages card (English, Bengali, Hindi).
  - **Acceptance Criteria**: Accurate copy; cards render side-by-side on desktop and stack vertically on mobile.
- [x] **Task 6.2: Drop-in, Rise-up & Hover Effects**
  - **Dependencies**: Task 6.1
  - **Scope**: Implement BCA card dropping from above with slight rotation, Languages card rising simultaneously, bullet typewriter reveal, hover SVG border trace, and graduation cap toss.
  - **Acceptance Criteria**: Entrance animations synchronize on viewport entry; hover effects trigger smoothly.

---

### Stage 7: Projects Section (`#projects`)
- [x] **Task 7.1: Dynamic PROJECTS Configuration**
  - **Dependencies**: Task 1.2
  - **Scope**: Define `PROJECTS` array at the top of `script.js` containing AutoCare Hub, Finance Dashboard, and Calculator Website with title, type, outcomes, tech, screenshot, liveUrl, and repoUrl.
  - **Acceptance Criteria**: Data matches `docs/02-content-spec.md`; empty `liveUrl` defaults properly.
- [x] **Task 7.2: Dynamic Card Renderer & Fallback Handler**
  - **Dependencies**: Task 7.1
  - **Scope**: Write `renderProjects()` to populate `#projects-grid`. Implement automatic hiding of "Live Demo" if `liveUrl` is empty, and gradient monogram fallback if screenshot fails to load.
  - **Acceptance Criteria**: 3 cards rendered; screenshot zoom on hover; missing images show initials panel; no broken demo buttons.
- [x] **Task 7.3: Project Animations & Interactivity**
  - **Dependencies**: Task 7.2
  - **Scope**: Implement dark left panel slide with blur-to-sharp transition, right content fade, outcome boxes pop-in (dealt cards), tech pills rubber-band bounce, and hover brown glow with title letter-spacing expansion.
  - **Acceptance Criteria**: All animations trigger smoothly on scroll; pill shimmers operate cleanly.

---

### Stage 8: Skills Section (`#skills`)
- [x] **Task 8.1: Skills Category Cards Grid**
  - **Dependencies**: Task 1.2
  - **Scope**: Build 6 category cards (Programming Languages, Web Technologies, Frameworks & Libraries, Databases, Tools & Platforms, Core Competencies) with icons and progress bar tracks.
  - **Acceptance Criteria**: Grid displays 3 columns on desktop, 2 on tablet, 1 on mobile; percentages match spec exactly.
- [x] **Task 8.2: Synchronized Counter & Bar Animation**
  - **Dependencies**: Task 8.1
  - **Scope**: Implement JS `IntersectionObserver` and `requestAnimationFrame` to animate progress bars from 0% to target percentage while counting the number label synchronously over ~1s.
  - **Acceptance Criteria**: Bars and numbers animate smoothly in sync; category cards fade and scale in a diagonal grid wave; card hover spins category icon 360 degrees.

---

### Stage 9: Contact Section (`#contact`)
- [x] **Task 9.1: Two-Column Contact Layout**
  - **Dependencies**: Task 1.2
  - **Scope**: Build two-column container: Left light form card, right dark contact info panel (email, phone, location, social links).
  - **Acceptance Criteria**: Columns sit side-by-side on desktop and stack cleanly on mobile.
- [x] **Task 9.2: Floating Label Form & Honeypot**
  - **Dependencies**: Task 9.1
  - **Scope**: Build form fields (Full Name, Email Address, Subject, Message) with floating labels, sequential underline draw animations, and hidden honeypot (`_honey`).
  - **Acceptance Criteria**: Floating labels animate on focus/input; underlines draw sequentially; honeypot is invisible.
- [x] **Task 9.3: FormSubmit Pipeline & Mailto Fallback**
  - **Dependencies**: Task 9.2
  - **Scope**: Implement client validation, AJAX POST submission to FormSubmit endpoint, loading spinner, success toast, and `mailto:` fallback trigger if submission fails.
  - **Acceptance Criteria**: Invalid fields display inline error messages; successful submission shows confirmation toast; network errors trigger mailto.
- [x] **Task 9.4: Contact Micro-Interactions**
  - **Dependencies**: Task 9.1
  - **Scope**: Left form slides from bottom-left with tilt, right panel slides from bottom-right; send button pulses gently once on load; hover triggers diagonal shimmer sweep; right rows slide right with gold icon shift.
  - **Acceptance Criteria**: All entrance and hover animations function per specification.

---

### Stage 10: Footer
- [x] **Task 10.1: Footer Markup & Dynamic Year**
  - **Dependencies**: Task 1.2
  - **Scope**: Build footer with candidate name, tagline, social links, dynamic year via JS, "Download CV" link, and "Back to Top" smooth scroll.
  - **Acceptance Criteria**: Year displays current year automatically; Back to Top scrolls to top smoothly; CV download works.

---

### Stage 11: Polish, Accessibility & Responsive Verification
- [x] **Task 11.1: Responsive Viewport Validation**
  - **Dependencies**: Tasks 1.1 through 10.1
  - **Scope**: Verify zero horizontal overflow at 360px, 768px, and 1440px. Check all touch target sizes (>= 44px) and card collapsing.
  - **Acceptance Criteria**: Perfect layout across all tested resolutions.
- [x] **Task 11.2: Accessibility & Reduced Motion Audit**
  - **Dependencies**: Task 11.1
  - **Scope**: Check tab navigation, focus outlines, ARIA labels, and `@media (prefers-reduced-motion: reduce)` overrides.
  - **Acceptance Criteria**: Fully keyboard navigable; WCAG AA contrast satisfied; reduced motion eliminates heavy animations.
- [x] **Task 11.3: Asset Fallback Verification**
  - **Dependencies**: Task 11.1
  - **Scope**: Verify behavior when `profile.jpg`, project screenshots, or resume file are absent or corrupted.
  - **Acceptance Criteria**: Fallbacks trigger without console errors.

---

### Stage 12: Comprehensive Quality Testing
- [x] **Task 12.1: Final Test Plan Execution**
  - **Dependencies**: Tasks 1.1 through 11.3
  - **Scope**: Run every test case in `docs/07-test-plan.md` and verify zero console errors.
  - **Acceptance Criteria**: 100% of test cases passing; zero console errors.
