# 07 - Quality Assurance & Test Plan

This document provides a comprehensive test plan and verification matrix covering all functional, visual, accessibility, and fallback requirements.

---

## 1. Test Verification Matrix

### 1.1 Navigation & Anchor Links
| Test ID | Item Under Test | Expected Behavior | Status |
|---|---|---|---|
| `NAV-01` | Sticky Header | Header stays fixed at top of viewport; acquires dark frosted blur background when scrolled past 40px | [x] |
| `NAV-02` | Desktop Nav Links | Clicking `Home`, `About`, `Experience`, `Education`, `Projects`, `Skills`, `Contact` scrolls smoothly to the target section with correct header offset | [x] |
| `NAV-03` | Active Link Highlighting | Nav item text changes to gold (`#C8A15A`) with an active indicator bar when its section is currently in view | [x] |
| `NAV-04` | Mobile Hamburger Toggle | Tapping hamburger icon opens mobile navigation drawer with smooth slide transition and toggles `aria-expanded` to `true` | [x] |
| `NAV-05` | Mobile Drawer Links | Tapping any navigation link inside drawer scrolls to the section and immediately closes the drawer | [x] |
| `NAV-06` | Mobile Drawer Dismissal | Pressing `Escape` key or tapping outside the drawer smoothly closes it and returns focus to hamburger button | [x] |
| `NAV-07` | Landing Hero CTAs | "Learn More About Me" scrolls to `#about`; "Get In Touch" scrolls to `#contact` | [x] |
| `NAV-08` | About Me Work Shortcuts | "Education", "Projects", "Skills" buttons below profile picture scroll smoothly to their respective sections | [x] |
| `NAV-09` | Footer Links | "Back to Top" scrolls to top; social links open GitHub, LinkedIn, and email | [x] |

---

### 1.2 CV Download Functionality
| Test ID | Item Under Test | Expected Behavior | Status |
|---|---|---|---|
| `CV-01` | Desktop Header "Download CV" | Links to `assets/Meghna_Ghosh_Resume.pdf`, has `download="Meghna_Ghosh_Resume.pdf"` attribute | [x] |
| `CV-02` | Mobile Drawer "Download CV" | Renders inside mobile drawer, initiates resume download on tap | [x] |
| `CV-03` | Landing Hero "Download CV" | Outlined gold button with download icon; initiates resume download on click | [x] |
| `CV-04` | Footer "Download CV" | Text link next to Back to Top; initiates resume download on click | [x] |
| `CV-05` | Missing CV Fallback | If the PDF file is missing, clicking shows a friendly alert/toast message rather than a browser 404 navigation | [x] |

---

### 1.3 Contact Form & Fallback Pipeline
| Test ID | Item Under Test | Expected Behavior | Status |
|---|---|---|---|
| `FORM-01` | Floating Labels | Label floats up and shrinks when field is focused or contains text; returns to placeholder position when empty and blurred | [x] |
| `FORM-02` | Empty Field Validation | Submitting empty form highlights invalid fields with red-amber underline and inline error message | [x] |
| `FORM-03` | Email Format Validation | Entering an invalid email (e.g. `meghna@`) triggers format error; valid email clears error | [x] |
| `FORM-04` | Honeypot Spam Protection | Hidden field (`_honey`) is invisible to users; if filled (by bot), submission simulates success without making an external API request | [x] |
| `FORM-05` | Form Submission (AJAX) | Valid submission displays loading spinner on button, disables inputs, and POSTs JSON to FormSubmit endpoint | [x] |
| `FORM-06` | Submission Success | FormSubmit `200 OK` triggers green/gold success toast message, clears input values, and resets button state | [x] |
| `FORM-07` | Submission Error Fallback | If network fails or FormSubmit returns error, display friendly notification and trigger direct `mailto:` link with pre-filled subject and body | [x] |

---

### 1.4 Animation & Micro-Interactions
| Test ID | Item Under Test | Expected Behavior | Status |
|---|---|---|---|
| `ANIM-01` | Landing Sequence | Heading & Intro text finish -> 3 CTAs slide up staggered (0.15s) -> Social icons bounce in sequentially | [x] |
| `ANIM-02` | Download CV Hover | Hovering "Download CV" button nudges download arrow icon downward by 4px | [x] |
| `ANIM-03` | About Photo & Buttons | Profile photo slides from left with shadow bloom; 3 shortcut buttons slide up from below | [x] |
| `ANIM-04` | Mission & Vision Flip | Mission card executes 3D `rotateY` flip; Vision card executes 3D flip with 0.2s delay | [x] |
| `ANIM-05` | Experience Slide & Curtain | Card 1 slides from left, Card 2 from right; dark panel expands width like a curtain opening | [x] |
| `ANIM-06` | Experience Bullets | Bullets stagger in top-to-bottom with 0.15s delay; hover lifts card translateY(-6px) with badge pulse glow | [x] |
| `ANIM-07` | Education Drop & Rise | BCA card drops in from above with slight rotation; Languages card rises from below simultaneously | [x] |
| `ANIM-08` | Education Hover Effects | Hovering card traces golden SVG border line; graduation cap icon does a small toss animation | [x] |
| `ANIM-09` | Projects Panel Blur & Reveal | Dark panel slides from left with blur-to-sharp filter; right panel fades in after 0.3s | [x] |
| `ANIM-10` | Projects Outcomes & Pills | Outcomes pop in like dealt cards; tech pills bounce in with rubber-band elastic effect | [x] |
| `ANIM-11` | Projects Hover Zoom | Hovering screenshot frame zooms image slightly (`scale(1.03)`) without overflowing container | [x] |
| `ANIM-12` | Skills Grid Wave & Bars | Category cards scale 0.85 to 1.0 in wave; progress bars fill 0% -> value over ~1s | [x] |
| `ANIM-13` | Skills Counter Sync | Percentage numbers count up from 0 to target value in exact synchronization with bar fill | [x] |
| `ANIM-14` | Skills Icon Spin | Hovering skill category card triggers a smooth 360-degree rotation of category icon | [x] |
| `ANIM-15` | Contact Entrance & Pulse | Form slides from bottom-left with tilt, dark info slides from bottom-right; field underlines draw sequentially; send button pulses gently once | [x] |
| `ANIM-16` | Send Button Shimmer | Hovering Send Message button triggers diagonal shimmer sweep across button face | [x] |

---

### 1.5 Responsive Viewport Testing
| Test ID | Viewport Width | Checks to Perform | Status |
|---|---|---|---|
| `RESP-01` | Mobile (`360px`) | Zero horizontal scroll (`overflow-x: hidden`); hamburger menu operational; landing CTAs stack vertically; experience cards stack (dark bar on top, light content below); project cards stack vertically; contact form stacks above direct info panel; all tap targets >= 44x44px | [x] |
| `RESP-02` | Tablet (`768px`) | Zero horizontal scroll; 2-column skills grid; clean tablet card spacing; drawer or compact nav; outcomes format cleanly | [x] |
| `RESP-03` | Desktop (`1440px`) | Centered max-width layout (1200px); dual-panel project cards; 3-column skills grid; two-column contact section; full desktop navigation links visible | [x] |

---

### 1.6 Accessibility (a11y) & Standards
| Test ID | Item Under Test | Expected Behavior | Status |
|---|---|---|---|
| `A11Y-01` | Keyboard Focus Traversal | Full page can be navigated using `Tab` and `Shift+Tab`; every link, button, and input shows visible gold focus outline | [x] |
| `A11Y-02` | Screen Reader Labels | All icon-only links (GitHub, LinkedIn, Email, Close Drawer) have explicit `aria-label` attributes | [x] |
| `A11Y-03` | Form Input Associations | All `<label>` elements use `for` attribute referencing unique `id` of corresponding `<input>` or `<textarea>` | [x] |
| `A11Y-04` | Reduced Motion | Enabling `prefers-reduced-motion: reduce` halts all entrance transitions, flips, tosses, and counter animations; final content renders immediately | [x] |
| `A11Y-05` | Color Contrast | All text-to-background combinations meet or exceed WCAG AA ratio (minimum 4.5:1 for normal text, 3:1 for large text) | [x] |

---

### 1.7 Asset Fallbacks & Edge Cases
| Test ID | Item Under Test | Expected Behavior | Status |
|---|---|---|---|
| `ASSET-01` | Missing Profile Photo | If `assets/profile.jpg` is missing or fails to load, replace with circular gold-bordered "MG" monogram avatar | [x] |
| `ASSET-02` | Missing Project Screenshot | If `assets/projects/*.png` fails to load, render dark gradient panel with project initials and fallback label | [x] |
| `ASSET-03` | Empty `liveUrl` | If project object has `liveUrl: ""`, the "Live Demo" button is completely removed from DOM | [x] |
| `ASSET-04` | Console Cleanliness | Zero uncaught exceptions, zero console errors during load, navigation, or interaction | [x] |
