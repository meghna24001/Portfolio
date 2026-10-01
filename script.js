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