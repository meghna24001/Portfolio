const cursor = document.getElementById("cursor");
const ring = document.getElementById("cursor-ring");
const prefersFinePointer = window.matchMedia("(pointer: fine)").matches;
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/* Custom cursor: enabled only for devices using a mouse/trackpad */
if (prefersFinePointer && !reducedMotion && cursor && ring) {
  let mouseX = 0;
  let mouseY = 0;
  let ringX = 0;
  let ringY = 0;

  document.addEventListener("mousemove", (event) => {
    mouseX = event.clientX;
    mouseY = event.clientY;
  });

  function animateCursor() {
    cursor.style.transform = `translate(${mouseX - 5}px, ${mouseY - 5}px)`;

    ringX += (mouseX - ringX) * 0.12;
    ringY += (mouseY - ringY) * 0.12;

    ring.style.transform = `translate(${ringX - 18}px, ${ringY - 18}px)`;

    requestAnimationFrame(animateCursor);
  }

  animateCursor();

  document.querySelectorAll("a, button").forEach((element) => {
    element.addEventListener("mouseenter", () => {
      ring.style.width = "54px";
      ring.style.height = "54px";
      ring.style.opacity = "0.8";
    });

    element.addEventListener("mouseleave", () => {
      ring.style.width = "36px";
      ring.style.height = "36px";
      ring.style.opacity = "0.5";
    });
  });
} else {
  if (cursor) cursor.style.display = "none";
  if (ring) ring.style.display = "none";
}

/* Persist the user's selected color theme */
const themeToggle = document.getElementById("themeToggle");
const themeColorMeta = document.getElementById("themeColor");
const themeStorageKey = "portfolio-theme";

function applyTheme(theme) {
  document.documentElement.dataset.theme = theme;

  if (themeToggle) {
    const nextTheme = theme === "light" ? "dark" : "light";
    const label = `Switch to ${nextTheme} theme`;
    themeToggle.setAttribute("aria-label", label);
    themeToggle.setAttribute("title", label);
    themeToggle.setAttribute("aria-pressed", String(theme === "light"));
  }

  if (themeColorMeta) {
    themeColorMeta.setAttribute(
      "content",
      theme === "light" ? "#f4f6f0" : "#0d0d0d"
    );
  }
}

let storedTheme = null;

try {
  storedTheme = window.localStorage.getItem(themeStorageKey);
} catch (error) {
  console.warn("Unable to read the saved portfolio theme preference.", error);
}

applyTheme(storedTheme === "light" ? "light" : "dark");

if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    const nextTheme =
      document.documentElement.dataset.theme === "light" ? "dark" : "light";
    applyTheme(nextTheme);

    try {
      window.localStorage.setItem(themeStorageKey, nextTheme);
    } catch (error) {
      console.warn("Unable to save the portfolio theme preference.", error);
    }
  });
}

/* Reveal non-hero sections as they enter the screen */
const sections = document.querySelectorAll("section:not(#hero)");
const revealItems = document.querySelectorAll(".skill-card, .project-card");

if (!reducedMotion) {
  sections.forEach((section) => {
    section.classList.add("reveal-section");
  });

  revealItems.forEach((item) => {
    item.classList.add("reveal-item");
  });

  const sectionObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  sections.forEach((section) => {
    sectionObserver.observe(section);
  });

  revealItems.forEach((item) => {
    sectionObserver.observe(item);
  });
}

/* Reading progress and active section in the navigation */
const scrollProgress = document.getElementById("scrollProgress");
const navigationLinks = Array.from(
  document.querySelectorAll('.nav-links a[href^="#"]')
);
const navigationSections = navigationLinks
  .map((link) => document.querySelector(link.getAttribute("href")))
  .filter((section) => section instanceof HTMLElement);

if (scrollProgress) {
  let progressFrame = 0;

  const updateScrollProgress = () => {
    progressFrame = 0;
    const scrollableHeight =
      document.documentElement.scrollHeight - window.innerHeight;
    const progress =
      scrollableHeight > 0 ? window.scrollY / scrollableHeight : 0;

    scrollProgress.style.transform = `scaleX(${Math.min(1, Math.max(0, progress))})`;
  };

  const requestProgressUpdate = () => {
    if (!progressFrame) {
      progressFrame = window.requestAnimationFrame(updateScrollProgress);
    }
  };

  window.addEventListener("scroll", requestProgressUpdate, { passive: true });
  window.addEventListener("resize", requestProgressUpdate);
  updateScrollProgress();
}

if (navigationSections.length > 0) {
  const navigationObserver = new IntersectionObserver(
    (entries) => {
      const visibleSections = entries
        .filter((entry) => entry.isIntersecting)
        .sort(
          (first, second) =>
            Math.abs(first.boundingClientRect.top - window.innerHeight * 0.4) -
            Math.abs(second.boundingClientRect.top - window.innerHeight * 0.4)
        );

      if (visibleSections.length === 0) return;

      const activeId = visibleSections[0].target.id;

      navigationLinks.forEach((link) => {
        if (link.hash === `#${activeId}`) {
          link.setAttribute("aria-current", "location");
        } else {
          link.removeAttribute("aria-current");
        }
      });
    },
    { rootMargin: "-35% 0px -55% 0px" }
  );

  navigationSections.forEach((section) => {
    navigationObserver.observe(section);
  });
}

/* Finance Dashboard case study dialog */
const caseStudyDialog = document.getElementById("finance-case-study");
const caseStudyOpenButton = document.querySelector(".project-more-button");
const caseStudyCloseButton = document.querySelector(".case-study-dialog-close");

if (caseStudyDialog && caseStudyOpenButton && caseStudyCloseButton) {
  caseStudyOpenButton.addEventListener("click", () => {
    caseStudyDialog.showModal();
  });

  caseStudyCloseButton.addEventListener("click", () => {
    caseStudyDialog.close();
  });

  caseStudyDialog.addEventListener("click", (event) => {
    if (event.target === caseStudyDialog) {
      caseStudyDialog.close();
    }
  });

  caseStudyDialog.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      event.preventDefault();
      caseStudyDialog.close();
    }
  });
}

/* Submit contact messages through the configured Formspree form */
const contactForm = document.getElementById("contactForm");
const contactFormStatus = document.getElementById("contactFormStatus");

if (contactForm instanceof HTMLFormElement && contactFormStatus) {
  function parseFormspreeEndpoint(endpoint) {
    try {
      const url = new URL(endpoint);
      if (
        url.protocol === "https:" &&
        url.hostname === "formspree.io" &&
        /^\/f\/[A-Za-z0-9]+$/.test(url.pathname)
      ) {
        return url;
      }
    } catch {
      return null;
    }

    return null;
  }

  const configuredEndpoint = contactForm.dataset.formspreeEndpoint?.trim() ?? "";
  if (parseFormspreeEndpoint(configuredEndpoint)) {
    contactFormStatus.textContent = "";
  }

  contactForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    if (!contactForm.reportValidity()) return;

    const endpoint = contactForm.dataset.formspreeEndpoint?.trim() ?? "";
    const endpointUrl = parseFormspreeEndpoint(endpoint);
    if (!endpointUrl && !endpoint) {
      contactFormStatus.textContent =
        "Form delivery is not configured yet. Add your Formspree endpoint to activate message sending.";
      return;
    }

    if (!endpointUrl) {
      contactFormStatus.textContent =
        "Form delivery is not configured yet. Add your Formspree endpoint in the format https://formspree.io/f/your-form-id.";
      console.warn("The configured Formspree endpoint has an invalid format.");
      return;
    }

    const submitButton = contactForm.querySelector(".contact-submit");
    const submitLabel = submitButton?.querySelector("span");
    const originalLabel = submitLabel?.textContent ?? "Send Message";

    if (submitButton instanceof HTMLButtonElement) {
      submitButton.disabled = true;
      submitButton.setAttribute("aria-busy", "true");
    }
    if (submitLabel) submitLabel.textContent = "Sending…";
    contactFormStatus.textContent = "Sending your message…";

    try {
      const response = await fetch(endpointUrl, {
        method: "POST",
        body: new FormData(contactForm),
        headers: { Accept: "application/json" },
      });

      if (!response.ok) {
        contactFormStatus.textContent =
          `We couldn't send your message (server error ${response.status}). Please try again or email directly.`;
        return;
      }

      contactForm.reset();
      contactFormStatus.textContent =
        "Thanks for reaching out! Your message has been sent.";
    } catch (error) {
      console.error("Unable to submit the contact form.", error);
      contactFormStatus.textContent =
        "We couldn't send your message because of a connection problem. Please try again or email directly.";
    } finally {
      if (submitButton instanceof HTMLButtonElement) {
        submitButton.disabled = false;
        submitButton.removeAttribute("aria-busy");
      }
      if (submitLabel) submitLabel.textContent = originalLabel;
    }
  });
}

/* Mobile navigation */
const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");

if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    const isExpanded = navToggle.getAttribute("aria-expanded") === "true";

    navToggle.setAttribute("aria-expanded", String(!isExpanded));
    navLinks.classList.toggle("nav-links-open");
    navToggle.classList.toggle("nav-toggle-open");
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navToggle.setAttribute("aria-expanded", "false");
      navLinks.classList.remove("nav-links-open");
      navToggle.classList.remove("nav-toggle-open");
    });
  });
}