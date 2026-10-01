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

if (!reducedMotion) {
  sections.forEach((section) => {
    section.classList.add("reveal-section");
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