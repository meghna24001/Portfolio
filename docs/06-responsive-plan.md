# 06 - Responsive Layout Plan

This document details the multi-device layout behavior, breakpoint definitions, container constraints, and collapsing rules for 360px (Mobile), 768px (Tablet), and 1440px (Desktop).

---

## 1. Breakpoint Strategy & Container Widths

We adopt a mobile-first responsive architecture with 3 foundational checkpoints:
- **Mobile Viewport (`360px` - `480px`)**: Single-column vertical stream, full-width touch-friendly components, collapsed navigation drawer.
- **Tablet Viewport (`768px` - `1023px`)**: Hybrid multi-column layouts, side-by-side cards where appropriate, touch and pointer hybrid interactions.
- **Desktop Viewport (`1024px` - `1440px+`)**: Full editorial layout, dual-panel split cards, rich hover effects, max-width constrained canvas (`max-width: 1200px`) centered with `margin: 0 auto`.

---

## 2. Section-by-Section Responsive Blueprint

### 2.1 Navigation Bar & Header
- **Desktop (1440px)**:
  - Fixed horizontal bar with `backdrop-filter: blur(12px)`.
  - Left: Gold-bordered monogram (`MG`).
  - Center: Horizontal link list with 28px gaps (`Home` to `Contact`).
  - Right: Outlined "Download CV" action button.
- **Tablet (768px)**:
  - Links and right button collapse into a hamburger menu button.
  - Tapping hamburger triggers a slide-in drawer from the right (width: 320px) displaying all links and the "Download CV" button.
- **Mobile (360px)**:
  - Fixed header height: `64px`.
  - Left monogram size: 36px x 36px.
  - Hamburger menu occupies a 44x44px touch target.
  - Slide-in mobile drawer takes `85vw` or `100vw` with backdrop overlay, closing on link click, Escape key, or tap outside.

---

### 2.2 Landing Section (`#home`)
- **Desktop (1440px)**:
  - Min-height `100vh` flex centered.
  - Heading font size: `3.75rem` (60px).
  - Designations displayed in a single refined horizontal row with gold dot separators.
  - Intro paragraph max-width: `680px`.
  - 3 CTA buttons side-by-side in a horizontal flex row with 16px gaps.
  - Social icons row positioned beneath with 16px circular button spacing.
- **Tablet (768px)**:
  - Heading font size: `3.0rem` (48px).
  - Designations wrap naturally across two lines if required.
  - CTA buttons wrap into a 2-button row + 1 full-width button, or flex-wrap cleanly.
- **Mobile (360px)**:
  - Heading font size: `2.25rem` (36px) - prevents awkward word breaks.
  - Designations wrap gracefully with centered alignment.
  - All 3 CTA buttons stack vertically (`width: 100%`), 12px vertical gaps, providing large 48px touch targets.
  - Social icons remain centered horizontally with comfortable thumb spacing.

---

### 2.3 About Me Section (`#about`)
- **Desktop (1440px)**:
  - Two-column layout (38% left column, 62% right column).
  - Left column: Profile portrait in rounded gold frame, with 3 "View My Work" buttons aligned in a neat row or stack beneath.
  - Right column: Professional summary paragraph, followed by a 2-column sub-grid containing the Mission card (left) and Vision card (right).
- **Tablet (768px)**:
  - Profile picture centered on top (max-width: 260px).
  - 3 "View My Work" buttons horizontally centered beneath portrait.
  - Professional summary spans full width below.
  - Mission and Vision cards sit side-by-side in a 2-column subgrid.
- **Mobile (360px)**:
  - Single-column vertical stack.
  - Profile picture centered, constrained to 200px width with circular or rounded frame.
  - 3 "View My Work" buttons arranged as full-width or wrapped pill buttons.
  - Summary text aligned left/justified for clean mobile readability.
  - Mission and Vision cards stack vertically (100% width each).

---

### 2.4 Experience Section (`#experience`)
- **Desktop (1440px)**:
  - Dual-panel alternating cards:
    - Card 1: Dark panel on left (30% width), light content panel on right (70% width).
    - Card 2: Light content panel on left (70% width), dark panel on right (30% width) — providing an editorial rhythm.
  - Bullets displayed with generous spacing and custom gold bullet markers.
- **Tablet (768px)**:
  - Dual panels remain horizontal, but proportion adjusts to 35% dark panel and 65% light panel.
- **Mobile (360px)**:
  - Dual panels collapse from horizontal to vertical stacking:
    - Dark panel becomes a compact top header strip (height: auto, padding: 16px) containing the badge and role title.
    - Light content panel sits directly beneath it, taking 100% width with 16px-20px padding.
  - Alternating layout is normalized so all cards stack consistently: dark header bar on top, light content below.
  - Bullets display in a single vertical stream with 10px spacing.

---

### 2.5 Education Section (`#education`)
- **Desktop (1440px)**:
  - Asymmetric 2-column grid:
    - Left (65% width): Large BCA Degree qualification card with 3 highlight bullets and graduation icon.
    - Right (35% width): Compact Languages card with proficiency ratings and badge chips.
- **Tablet (768px)**:
  - Both cards stack vertically or sit side-by-side depending on available height.
- **Mobile (360px)**:
  - Stacked vertically into single-column layout.
  - BCA card displays full width with highlight bullets formatted for mobile scanning.
  - Languages card displays full width beneath it.

---

### 2.6 Projects Section (`#projects`)
- **Desktop (1440px)**:
  - Cards render as full-width dual-panel horizontal containers (1200px max width):
    - Dark Left Panel (30% width): Large index numeral (`01`, `02`, `03`), category type, and "Personal Project" status tag.
    - Light Right Panel (70% width): Project title, description, screenshot frame (16:9 ratio with zoom hover), 2x2 grid of Key Outcomes, tech pill tags, and action buttons ("Live Demo", "View Code").
- **Tablet (768px)**:
  - Dual panels remain side by side; screenshot scales down responsively.
  - Outcomes shift to a 2-column or 1-column layout depending on text length.
- **Mobile (360px)**:
  - Horizontal panels collapse into vertical stacking:
    - Dark panel becomes the top project badge header (displaying index `01`, type, and tag).
    - Light content panel renders beneath with title, description, screenshot frame, single-column outcomes, wrapping tech pills, and stacked action buttons.
  - Buttons expand to full width (`width: 100%`) for easy tap ergonomics.

---

### 2.7 Skills Section (`#skills`)
- **Desktop (1440px)**:
  - 3-column x 2-row grid (6 category cards total: Programming Languages, Web Technologies, Frameworks & Libraries, Databases, Tools & Platforms, Core Competencies).
  - Cards feature generous padding (28px), category icon, and animated progress bars with right-aligned percentage labels.
- **Tablet (768px)**:
  - 2-column x 3-row grid.
- **Mobile (360px)**:
  - 1-column vertical stack (6 cards stacked sequentially).
  - Progress bar width adjusts smoothly to 100% of card width.

---

### 2.8 Contact Section (`#contact`)
- **Desktop (1440px)**:
  - Two-column grid (55% light form card on left, 45% dark direct contact panel on right).
  - Left card: Off-white background, floating label inputs, full-width message area, gold submit button.
  - Right card: Dark surface, email/phone/location rows with icons, social link buttons.
- **Tablet (768px)**:
  - Two columns maintain side-by-side if viewport width >= 768px, or stack vertically if viewport < 768px.
- **Mobile (360px)**:
  - Collapses into a single-column vertical stack:
    - Top: Light contact form card (full width, 20px padding). Floating labels function smoothly without zooming the viewport (font size >= 16px to prevent iOS auto-zoom).
    - Bottom: Dark direct contact panel with clickable `mailto:` and `tel:` links and centered social icons.

---

### 2.9 Footer
- **Desktop (1440px)**:
  - Horizontal 3-column flex bar:
    - Left: Meghna Ghosh & tagline.
    - Center: Social icon links.
    - Right: Dynamic copyright year, "Download CV" link, and "Back to Top" link.
- **Tablet (768px)**:
  - 2-row layout with centered alignment.
- **Mobile (360px)**:
  - Single centered column stack with 16px vertical gaps between elements.
  - All interactive links adhere to 44px minimum tap target guidelines.

---

## 3. Responsive Quality & Overflow Prevention Rules

1. **Global Horizontal Overflow Lock**:
   ```css
   html, body {
     max-width: 100%;
     overflow-x: hidden;
   }
   ```
2. **Fluid Images & Media**:
   ```css
   img, svg, video {
     max-width: 100%;
     height: auto;
     display: block;
   }
   ```
3. **Form Input Zoom Prevention on Mobile**:
   - All input and textarea fields maintain `font-size: 1rem` (16px) on mobile viewports to prevent iOS Safari from automatically zooming into the field upon focus.
4. **Touch Target Dimensions**:
   - All mobile buttons, links, and drawer items maintain a minimum tap target of `44px x 44px`.

