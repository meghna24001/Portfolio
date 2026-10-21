# 03 - Design System ("Premium")

This document defines the visual design tokens, component specifications, and accessibility requirements for the portfolio website.

---

## 1. Color Palette

The color system is rooted in deep charcoal and ink tones, balanced with warm ivory, muted stone, and radiant gold-to-bronze metallic accents. Pure black (`#000000`) and pure white (`#FFFFFF`) are strictly avoided to preserve a tactile, editorial aesthetic.

### Core Swatches

| Token Name | Hex Value | RGBA Equivalent | Purpose / Usage Rules |
|---|---|---|---|
| `--color-bg-primary` | `#0E0D0C` | `rgb(14, 13, 12)` | Main canvas background across all sections |
| `--color-bg-surface` | `#161412` | `rgb(22, 20, 18)` | Elevated dark surfaces: cards, modals, left panels, header background |
| `--color-bg-surface-elevated`| `#201C18` | `rgb(32, 28, 24)` | Dropdown menus, mobile navigation drawer, tooltip/pill bases |
| `--color-card-light` | `#FBF8F3` | `rgb(251, 248, 243)` | Light card surfaces: Contact form container, Experience right panels, Projects right panels |
| `--color-card-light-muted`| `#F2EDE4` | `rgb(242, 237, 228)` | Light card secondary surfaces and outcome highlight boxes |
| `--color-text-primary` | `#F3EDE4` | `rgb(243, 237, 228)` | Primary headings, prominent body copy on dark backgrounds |
| `--color-text-secondary`| `#A89F94` | `rgb(168, 159, 148)` | Subheadings, descriptions, meta items, footer details |
| `--color-text-dark` | `#161412` | `rgb(22, 20, 18)` | Primary typography placed on light card surfaces (`#FBF8F3`) |
| `--color-text-dark-muted` | `#635B52`| `rgb(99, 91, 82)` | Secondary descriptions, placeholders on light card surfaces |
| `--color-accent-gold` | `#C8A15A` | `rgb(200, 161, 90)` | Primary metallic accent: eyebrows, active links, primary buttons, borders |
| `--color-accent-bronze` | `#A9713B` | `rgb(169, 113, 59)` | Mid-tone bronze: gradient stops, hover accents, progress fill |
| `--color-accent-deep` | `#7A4E2A` | `rgb(122, 78, 42)` | Deep bronze shadow, hover borders, active button states |
| `--color-border-hairline`| `rgba(200, 161, 90, 0.2)` | `rgba(200, 161, 90, 0.2)` | Subtle hairline borders on dark cards and dividers |
| `--color-border-light` | `rgba(22, 20, 18, 0.12)`| `rgba(22, 20, 18, 0.12)`| Subtle borders inside light cards |

### Gradients
- **Gold Accent Gradient**: `linear-gradient(135deg, #C8A15A 0%, #A9713B 50%, #7A4E2A 100%)`
- **Gold Hover Gradient**: `linear-gradient(135deg, #D4AF67 0%, #B87C44 50%, #875730 100%)`
- **Dark Surface Gradient**: `linear-gradient(180deg, #1A1715 0%, #141210 100%)`
- **Light Surface Gradient**: `linear-gradient(180deg, #FBF8F3 0%, #F5EFE6 100%)`
- **Shimmer Overlay**: `linear-gradient(90deg, transparent, rgba(200, 161, 90, 0.25), transparent)`

---

## 2. Typography

Two Google Fonts provide typographic personality:
1. **Heading & Monogram Font**: `"Syne"`, sans-serif (Weights: 600, 700, 800) — Distinctive, sculptural, architectural.
2. **Body & Interface Font**: `"DM Sans"`, sans-serif (Weights: 400, 500, 600) — Highly legible, warm, modern geometric grotesque.

### Typography Scale

| Role | Font Family | Size (Desktop) | Size (Mobile) | Weight | Line Height | Letter Spacing |
|---|---|---|---|---|---|---|
| **Display / Hero H1** | `Syne` | `3.75rem` (60px) | `2.5rem` (40px) | `700` | `1.1` | `-0.02em` |
| **Section Heading H2**| `Syne` | `2.25rem` (36px) | `1.75rem` (28px)| `700` | `1.2` | `-0.015em` |
| **Card Heading H3** | `Syne` | `1.5rem` (24px) | `1.25rem` (20px)| `600` | `1.3` | `-0.01em` |
| **Subheading / H4** | `DM Sans` | `1.125rem` (18px)| `1.0rem` (16px) | `600` | `1.4` | `0` |
| **Eyebrow / Label** | `DM Sans` | `0.8125rem` (13px)| `0.75rem` (12px)| `600` | `1.0` | `0.15em` (Uppercase) |
| **Body Large (Intro)**| `DM Sans` | `1.125rem` (18px)| `1.0rem` (16px) | `400` | `1.7` | `0` |
| **Body Normal** | `DM Sans` | `1.0rem` (16px) | `0.9375rem` (15px)| `400` | `1.65`| `0` |
| **Body Small / Meta** | `DM Sans` | `0.875rem` (14px)| `0.8125rem` (13px)| `400` | `1.5` | `0.01em` |
| **Button Text** | `DM Sans` | `0.9375rem` (15px)| `0.875rem` (14px)| `600` | `1.0` | `0.03em` |

---

## 3. Spacing & Sizing Scale

Using an 8-point harmonic grid:
- `--space-1`: `4px` (0.25rem)
- `--space-2`: `8px` (0.5rem)
- `--space-3`: `12px` (0.75rem)
- `--space-4`: `16px` (1.0rem)
- `--space-5`: `20px` (1.25rem)
- `--space-6`: `24px` (1.5rem)
- `--space-8`: `32px` (2.0rem)
- `--space-10`: `40px` (2.5rem)
- `--space-12`: `48px` (3.0rem)
- `--space-16`: `64px` (4.0rem)
- `--space-20`: `80px` (5.0rem)
- `--space-24`: `96px` (6.0rem)

### Section Rhythm
Each section follows a disciplined visual hierarchy:
1. **Eyebrow**: Small uppercase gold text with tracked letter spacing.
2. **Heading**: Large `Syne` heading in warm ivory (`#F3EDE4`).
3. **Accent Underline**: A 48px wide, 3px high bar with the gold gradient (`#C8A15A` to `#A9713B`) centered or aligned with heading.
4. **Spacing**: Top & bottom section padding of `80px` to `100px` on desktop, `60px` on mobile.

---

## 4. Border Radii & Shadows

### Border Radii
- `--radius-sm`: `6px` (badges, buttons, pills, input fields)
- `--radius-md`: `12px` (cards, screenshot frames, dialogue boxes)
- `--radius-lg`: `18px` (primary section cards, dual-panel containers)
- `--radius-full`: `9999px` (monogram badge, circular avatar, pill buttons)

### Shadows
- `--shadow-subtle`: `0 2px 8px rgba(0, 0, 0, 0.35)`
- `--shadow-card`: `0 12px 32px -4px rgba(0, 0, 0, 0.45), 0 4px 12px rgba(0, 0, 0, 0.25)`
- `--shadow-card-hover`: `0 20px 40px -8px rgba(0, 0, 0, 0.65), 0 0 24px rgba(200, 161, 90, 0.18)`
- `--shadow-light-card`: `0 16px 36px -6px rgba(0, 0, 0, 0.25), 0 6px 14px rgba(0, 0, 0, 0.12)`
- `--shadow-gold-glow`: `0 0 20px rgba(200, 161, 90, 0.35)`

---

## 5. Animation Easings & Durations

All transitions and keyframes share consistent timing curves:
- `--ease-smooth`: `cubic-bezier(0.16, 1, 0.3, 1)` (snappy ease-out for entrances)
- `--ease-spring`: `cubic-bezier(0.34, 1.56, 0.64, 1)` (playful bounce for pills, icons)
- `--ease-standard`: `cubic-bezier(0.4, 0, 0.2, 1)` (micro-interactions, hovers)
- `--duration-fast`: `200ms` (hover states, color shifts)
- `--duration-normal`: `350ms` (dropdowns, drawers, icon nudges)
- `--duration-slow`: `600ms` (card entrances, panel expansions)
- `--duration-extended`: `1000ms` (counter increments, progress bar fills)

---

## 6. Breakpoints

| Breakpoint Name | Width | Target Device Category |
|---|---|---|
| `sm` | `480px` | Small smartphones |
| `md` | `768px` | Tablets, large phones in landscape |
| `lg` | `1024px` | Small laptops, iPads in landscape |
| `xl` | `1280px` | Desktops and modern standard laptops |
| `2xl`| `1440px` | Large desktop displays (Max content container: `1200px`) |

---

## 7. Component Specifications

### 7.1 Navigation Bar
- **Position**: Sticky/Fixed top, `z-index: 1000`, backdrop blur `12px`, background `rgba(14, 13, 12, 0.88)` with bottom hairline border `rgba(200, 161, 90, 0.15)`.
- **Left**: Circular "MG" monogram badge (38px x 38px) with gold border and Syne typography.
- **Center**: Navigation link list (`Home`, `About`, `Experience`, `Education`, `Projects`, `Skills`, `Contact`).
  - Normal state: `#A89F94`
  - Hover state: `#F3EDE4` with subtle gold glow
  - Active section state: `#C8A15A` with a 2px bottom indicator line
- **Right (Desktop)**: Compact outlined "Download CV" button.
- **Mobile Hamburger**: Three-bar animated SVG button opening a full-height slide-out drawer on devices `< 1024px`.

### 7.2 Buttons
1. **Filled Gold Button (`.btn-primary`)**:
   - Background: `var(--color-accent-gold)` or gold gradient.
   - Text color: `#0E0D0C` (bold, readable contrast).
   - Hover state: Background shifts brighter (`#D4AF67`), `transform: translateY(-2px)`, gold glow shadow.
   - Active: `transform: translateY(0)`.
2. **Outlined Gold Button (`.btn-outline`)**:
   - Border: `1.5px solid var(--color-accent-gold)`.
   - Background: `transparent`.
   - Text color: `var(--color-accent-gold)`.
   - Hover state: Background `rgba(200, 161, 90, 0.12)`, text `#F3EDE4`, border `#D4AF67`, icon shifts downward or rightward by 4px.
3. **Dark Filled Button (`.btn-secondary`)**:
   - Background: `var(--color-bg-surface-elevated)`.
   - Border: `1px solid var(--color-border-hairline)`.
   - Text color: `var(--color-text-primary)`.
   - Hover state: Border color `var(--color-accent-gold)`, `transform: translateY(-2px)`.
4. **Social Icon Buttons (`.btn-social`)**:
   - Circular (42px x 42px), flexbox centered.
   - Hairline gold border, dark background.
   - SVG icon fill `#A89F94`; on hover `#C8A15A`, subtle scale(1.08), gold glow.

### 7.3 Cards
1. **Dark Card (`.card-dark`)**:
   - Background: `var(--color-bg-surface)` (`#161412`).
   - Border: `1px solid var(--color-border-hairline)`.
   - Radius: `var(--radius-lg)` (18px).
   - Shadow: `var(--shadow-card)`.
2. **Light Card (`.card-light`)**:
   - Background: `var(--color-card-light)` (`#FBF8F3`).
   - Text: `var(--color-text-dark)` (`#161412`).
   - Radius: `var(--radius-lg)` (18px).
   - Shadow: `var(--shadow-light-card)`.
3. **Dual-Panel Card (`.card-dual`)**:
   - Flex/Grid container combining a dark left panel and a light right panel.
   - On mobile, panels stack vertically with smooth visual continuity.

### 7.4 Pills & Badges
- **Pills (`.pill-tech`)**:
  - Small rounded tag (`padding: 4px 12px; border-radius: var(--radius-full)`).
  - Background: `rgba(22, 20, 18, 0.08)` on light cards; `rgba(200, 161, 90, 0.12)` on dark cards.
  - Border: `1px solid rgba(22, 20, 18, 0.15)` on light cards.
  - Text: `0.8125rem`, medium weight.
- **Badges (`.badge-status`)**:
  - Upper-case tracking, e.g. "INDEPENDENT", "OPEN TO WORK".
  - Border: `1px solid var(--color-accent-gold)`, gold text.

### 7.5 Progress Bars
- **Track**: 6px height, rounded ends, dark muted track (`rgba(200, 161, 90, 0.15)`).
- **Bar Fill**: Gold-to-bronze gradient (`linear-gradient(90deg, #C8A15A, #A9713B)`), rounded ends.
- **Number Label**: Tabular numbers, aligned right, counting up synchronously.

### 7.6 Form Fields with Floating Labels
- Container with `position: relative`.
- Input & Textarea:
  - Background: `transparent` or warm off-white `#F5EFE6`.
  - Border: 0 bottom border base with a 1.5px hairline underline.
  - Active underline pseudo-element draws left-to-right from 0% to 100% width on focus.
- Floating Label:
  - Default: Positioned inside field at normal text position, color `#635B52`.
  - Focused or `:not(:placeholder-shown)`: Translates up `-22px`, scales to `0.78`, color `#A9713B`.
- Inline Error Text:
  - Rendered below field, red-amber hue (`#C85A5A`), animated slide-down.

---

## 8. Accessibility Rules

1. **Color Contrast (WCAG AA)**:
   - Text `#F3EDE4` on `#0E0D0C` = 15.3:1 (exceeds 4.5:1 requirement).
   - Text `#A89F94` on `#0E0D0C` = 7.1:1.
   - Text `#161412` on `#FBF8F3` = 16.5:1.
   - Text `#C8A15A` on `#0E0D0C` = 6.5:1.
   - Gold button text `#0E0D0C` on `#C8A15A` = 6.5:1.
   - Dark bronze text `#8A5A2B` on light card `#FBF8F3` = 5.54:1.
   - Muted text `#968D82` on dark canvas `#0E0D0C` = 5.94:1.
   - Error text `#B0372F` on light card `#FBF8F3` = 5.77:1.
2. **Keyboard Focus States**:
   - Every interactive element (`<a>`, `<button>`, `<input>`, `<textarea>`) possesses a dedicated `:focus-visible` outline: `2px solid #C8A15A` with `2px offset`. Default browser outline is suppressed only when focus-visible is custom styled.
3. **Screen Readers & ARIA**:
   - `aria-label` provided for all icon-only links (e.g. GitHub, LinkedIn, Email, Close Drawer).
   - Form inputs have explicit `<label for="...">` associations matching input IDs.
   - `aria-hidden="true"` applied to decorative SVGs, bullet markers, and monograms.
   - Status messages (`.form-status`) marked with `role="alert"` or `aria-live="polite"`.
4. **Reduced Motion (`prefers-reduced-motion: reduce`)**:
   - In accordance with OS settings, all transitions and animations are collapsed:
     ```css
     @media (prefers-reduced-motion: reduce) {
       *, *::before, *::after {
         animation-duration: 0.01ms !important;
         animation-iteration-count: 1 !important;
         transition-duration: 0.01ms !important;
         scroll-behavior: auto !important;
       }
     }
     ```
   - Counters instantly display final values without stepping.

