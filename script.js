/**
 * ==========================================================================
 * MEGHNA GHOSH - PORTFOLIO INTERACTION ENGINE
 * Plain Vanilla JavaScript (ES6+) - High Performance & Accessibility
 * ==========================================================================
 */

/* --------------------------------------------------------------------------
   1. PROJECTS CONFIGURATION OBJECT
   Edit links, descriptions, tech tags and assets in this single centralized location.
   -------------------------------------------------------------------------- */
const PROJECTS = [
  {
    id: "autocare-hub",
    title: "AutoCare Hub",
    type: "Full-Stack Workshop Management App",
    label: "Personal Project",
    description: "A full-stack app that brings a service centre's daily workflow into one dashboard. It combines customer and vehicle records, job progress, bay assignments and billing, so staff no longer have to switch between separate tools.",
    outcomes: [
      "Customer and vehicle records in one place",
      "Live tracking of job progress",
      "Bay assignment management",
      "Billing built into the same dashboard"
    ],
    tech: [
      "React 18",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "SQLite/PostgreSQL",
      "React Context"
    ],
    screenshot: "assets/projects/autocare.png",
    initials: "AH",
    liveUrl: "https://autocare-hub-12r1.onrender.com",
    repoUrl: "https://github.com/meghna24001/AutoCare-Hub.git"
  },
  {
    id: "finance-dashboard",
    title: "Finance Dashboard",
    type: "Full-Stack Web Application",
    label: "Personal Project",
    description: "A Flask-based personal finance platform that helps users understand their financial health. It covers transactions, budgets, bank accounts and recurring payments, and it can import bank statements.",
    outcomes: [
      "Transaction and budget tracking",
      "Bank account management",
      "Recurring payment logging",
      "Bank statement import"
    ],
    tech: [
      "Python",
      "Flask",
      "HTML5",
      "CSS3",
      "JavaScript"
    ],
    screenshot: "assets/projects/finance.png",
    initials: "FD",
    liveUrl: "https://meghnaghosh.pythonanywhere.com/",
    repoUrl: "https://github.com/meghna24001/Finance-Dashboard.git"
  },
  {
    id: "calculator-website",
    title: "Calculator Website",
    type: "Front-End Web Application",
    label: "Personal Project",
    description: "An all-in-one calculator hub built without any framework. It has basic and scientific calculators, a unit converter, a graph plotter and an equation solver, plus formula sheets and history tracking, and it works offline.",
    outcomes: [
      "Basic and scientific calculation modes",
      "Unit converter and graph plotter",
      "Equation solver",
      "History tracking and math formula sheets",
      "Offline support"
    ],
    tech: [
      "HTML5",
      "CSS3",
      "Vanilla JavaScript"
    ],
    screenshot: "assets/projects/calculator.png",
    initials: "CW",
    liveUrl: "https://calculator-eta-ebon-42.vercel.app/",
    repoUrl: "https://github.com/meghna24001/Calculator.git"
  }
];

/* --------------------------------------------------------------------------
   2. DOM INITIALIZATION RUNNER
   -------------------------------------------------------------------------- */
document.addEventListener("DOMContentLoaded", () => {
  renderProjects();
  initNavigation();
  initMobileDrawer();
  initScrollAnimations();
  initSkillCounters();
  initContactForm();
  initAssetFallbacks();
  initDynamicYear();
});

/* --------------------------------------------------------------------------
   3. PROJECT CARD RENDERER
   Generates dual-panel accessible cards dynamically from PROJECTS config.
   -------------------------------------------------------------------------- */
function renderProjects() {
  const container = document.getElementById("projects-grid");
  if (!container) return;

  container.innerHTML = "";

  PROJECTS.forEach((project, index) => {
    const projectIndexStr = String(index + 1).padStart(2, "0");

    const card = document.createElement("article");
    card.className = "project-card animate-on-scroll";
    card.setAttribute("data-animation", "project-card-reveal");
    card.setAttribute("id", project.id);

    // Build Key Outcomes Markup
    const outcomesMarkup = project.outcomes.map((outcome, oIdx) => `
      <div class="outcome-box">
        <span class="outcome-num">0${oIdx + 1}</span>
        <span class="outcome-text">${escapeHtml(outcome)}</span>
      </div>
    `).join("");

    // Build Tech Pills Markup
    const techMarkup = project.tech.map(t => `
      <span class="tech-pill">${escapeHtml(t)}</span>
    `).join("");

    // Conditional "Live Demo" Button
    const liveDemoMarkup = project.liveUrl && project.liveUrl.trim() !== "" ? `
      <a href="${escapeHtml(project.liveUrl)}" target="_blank" rel="noopener noreferrer" class="btn btn-primary" aria-label="View live demo of ${escapeHtml(project.title)}">
        <span>Live Demo</span>
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
          <polyline points="15 3 21 3 21 9"></polyline>
          <line x1="10" y1="14" x2="21" y2="3"></line>
        </svg>
      </a>
    ` : "";

    // "View Code" Button (Outlined with GitHub icon)
    const codeBtnMarkup = `
      <a href="${escapeHtml(project.repoUrl || 'https://github.com/meghna24001')}" target="_blank" rel="noopener noreferrer" class="btn btn-outline" aria-label="View source code of ${escapeHtml(project.title)} on GitHub">
        <span>View Code</span>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
        </svg>
      </a>
    `;

    card.innerHTML = `
      <div class="project-left-panel">
        <span class="project-num">${projectIndexStr}</span>
        <div class="project-badge-group">
          <span class="project-type-label">${escapeHtml(project.type)}</span>
          <span class="project-status-tag">${escapeHtml(project.label)}</span>
        </div>
      </div>
      <div class="project-right-panel">
        <h3 class="project-title">${escapeHtml(project.title)}</h3>
        <p class="project-desc">${escapeHtml(project.description)}</p>
        
        <div class="project-screenshot-frame">
          <img src="${escapeHtml(project.screenshot)}" alt="${escapeHtml(project.title)} preview screenshot" class="project-screenshot-img" loading="lazy">
          <div class="project-screenshot-fallback" aria-hidden="true">
            <span class="fallback-initials">${escapeHtml(project.initials)}</span>
            <span class="fallback-tag">Preview Coming Soon</span>
          </div>
        </div>

        <span class="project-outcomes-title">Key Outcomes</span>
        <div class="project-outcomes-grid">
          ${outcomesMarkup}
        </div>

        <div class="project-tech-row">
          ${techMarkup}
        </div>

        <div class="project-actions">
          ${liveDemoMarkup}
          ${codeBtnMarkup}
        </div>
      </div>
    `;

    // Attach missing image fallback listener to the project screenshot
    const imgEl = card.querySelector(".project-screenshot-img");
    const fallbackEl = card.querySelector(".project-screenshot-fallback");
    if (imgEl && fallbackEl) {
      imgEl.addEventListener("error", () => {
        imgEl.style.display = "none";
        fallbackEl.classList.add("show-fallback");
      });
    }

    container.appendChild(card);
  });
}

/* --------------------------------------------------------------------------
   4. NAVIGATION, STICKY HEADER & SCROLL SPY
   -------------------------------------------------------------------------- */
function initNavigation() {
  const header = document.getElementById("header");
  const navLinks = document.querySelectorAll(".nav-link, .mobile-nav-link");
  const sections = document.querySelectorAll("section[id]");

  // 1. Sticky Header State on Scroll & Startup
  function updateHeaderScrolled() {
    if (window.scrollY > 40) {
      header.classList.add("is-scrolled");
    } else {
      header.classList.remove("is-scrolled");
    }
  }
  window.addEventListener("scroll", updateHeaderScrolled, { passive: true });
  updateHeaderScrolled();

  // 2. Active Section Highlight using Scroll Position
  const sectionList = Array.from(sections);
  function updateActiveLink() {
    const marker = window.scrollY + window.innerHeight * 0.35;
    let currentId = sectionList[0].id;
    sectionList.forEach(sec => { if (sec.offsetTop <= marker) currentId = sec.id; });
    if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4) {
      currentId = sectionList[sectionList.length - 1].id;
    }
    navLinks.forEach(link =>
      link.classList.toggle("active", link.getAttribute("href") === `#${currentId}`)
    );
  }
  let ticking = false;
  window.addEventListener("scroll", () => {
    if (!ticking) {
      requestAnimationFrame(() => { updateActiveLink(); ticking = false; });
      ticking = true;
    }
  }, { passive: true });
  updateActiveLink();

  // 3. Smooth Anchor Scrolling Offset Compensation
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      const targetId = this.getAttribute("href");
      if (targetId === "#") return;

      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        e.preventDefault();
        const headerOffset = 70;
        const elementPosition = targetEl.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
    });
  });
}

/* --------------------------------------------------------------------------
   5. MOBILE HAMBURGER & DRAWER LOGIC
   -------------------------------------------------------------------------- */
function initMobileDrawer() {
  const hamburgerBtn = document.getElementById("hamburger-btn");
  const closeDrawerBtn = document.getElementById("close-drawer-btn");
  const mobileDrawer = document.getElementById("mobile-drawer");
  const backdrop = document.getElementById("drawer-backdrop");
  const mobileLinks = document.querySelectorAll(".mobile-nav-link, .mobile-drawer-cta a");

  function openDrawer() {
    hamburgerBtn.classList.add("is-active");
    hamburgerBtn.setAttribute("aria-expanded", "true");
    mobileDrawer.classList.add("is-open");
    mobileDrawer.setAttribute("aria-hidden", "false");
    backdrop.classList.add("is-open");
    backdrop.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  }

  function closeDrawer() {
    hamburgerBtn.classList.remove("is-active");
    hamburgerBtn.setAttribute("aria-expanded", "false");
    mobileDrawer.classList.remove("is-open");
    mobileDrawer.setAttribute("aria-hidden", "true");
    backdrop.classList.remove("is-open");
    backdrop.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  }

  if (hamburgerBtn) {
    hamburgerBtn.addEventListener("click", () => {
      const isOpen = mobileDrawer.classList.contains("is-open");
      isOpen ? closeDrawer() : openDrawer();
    });
  }

  if (closeDrawerBtn) {
    closeDrawerBtn.addEventListener("click", closeDrawer);
  }

  if (backdrop) {
    backdrop.addEventListener("click", closeDrawer);
  }

  mobileLinks.forEach(link => {
    link.addEventListener("click", closeDrawer);
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && mobileDrawer && mobileDrawer.classList.contains("is-open")) {
      closeDrawer();
      hamburgerBtn.focus();
    }
  });
}

/* --------------------------------------------------------------------------
   6. SCROLL ENTRANCE ANIMATIONS (IntersectionObserver)
   Triggered once per element with hardware-accelerated transitions.
   -------------------------------------------------------------------------- */
function initScrollAnimations() {
  document.querySelectorAll(".skill-category-card").forEach(c =>
    c.style.setProperty("--wave-delay", `${Number(c.dataset.index) * 80}ms`));

  // If user prefers reduced motion, trigger final state immediately
  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const elementsToAnimate = document.querySelectorAll(".animate-on-scroll");

  if (prefersReduced) {
    elementsToAnimate.forEach(el => el.classList.add("is-inview"));
    return;
  }

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-inview");
        obs.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.15,
    rootMargin: "0px 0px -40px 0px"
  });

  elementsToAnimate.forEach(el => observer.observe(el));
}

/* --------------------------------------------------------------------------
   7. SKILLS BARS & NUMBER COUNTER ANIMATION
   Interpolates from 0% to target % in synchronization over 1000ms.
   -------------------------------------------------------------------------- */
function initSkillCounters() {
  const skillsGrid = document.getElementById("skills-grid");
  if (!skillsGrid) return;

  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  let hasAnimated = false;

  const skillsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !hasAnimated) {
        hasAnimated = true;
        animateAllSkillBars(prefersReduced);
        skillsObserver.unobserve(skillsGrid);
      }
    });
  }, { threshold: 0.2 });

  skillsObserver.observe(skillsGrid);
}

function animateAllSkillBars(prefersReduced) {
  const skillItems = document.querySelectorAll(".skill-item");

  skillItems.forEach((item) => {
    const targetValue = parseInt(item.getAttribute("data-value"), 10) || 0;
    const fillEl = item.querySelector(".progress-fill");
    const percentEl = item.querySelector(".skill-percent");

    if (prefersReduced) {
      if (fillEl) fillEl.style.width = `${targetValue}%`;
      if (percentEl) percentEl.textContent = `${targetValue}%`;
      return;
    }

    // Expand bar fill
    if (fillEl) {
      fillEl.style.width = `${targetValue}%`;
    }

    // Animate numerical counter with requestAnimationFrame
    if (percentEl) {
      const duration = 1000;
      let startTime = null;

      function step(currentTime) {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / duration, 1);
        const currentCount = Math.floor(progress * targetValue);
        percentEl.textContent = `${currentCount}%`;

        if (progress < 1) {
          requestAnimationFrame(step);
        } else {
          percentEl.textContent = `${targetValue}%`;
        }
      }

      requestAnimationFrame(step);
    }
  });
}

/* --------------------------------------------------------------------------
   8. CONTACT FORM VALIDATION & FORMSUBMIT PIPELINE
   Includes honeypot spam protection, floating label feedback, and mailto fallback.
   -------------------------------------------------------------------------- */
function initContactForm() {
  const form = document.getElementById("contact-form");
  if (!form) return;

  const nameInput = document.getElementById("form-name");
  const emailInput = document.getElementById("form-email");
  const subjectInput = document.getElementById("form-subject");
  const messageInput = document.getElementById("form-message");
  const submitBtn = document.getElementById("submit-btn");
  const statusAlert = document.getElementById("form-status");

  // Pulse button gently once when contact section enters view
  const contactObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          if (submitBtn) submitBtn.classList.add("btn-pulse");
        }, 600);
        contactObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.25 });

  contactObserver.observe(form);

  // Field validation rules
  function validateField(input, errorId, errorMsg, customCheck) {
    const errorEl = document.getElementById(errorId);
    const value = input.value.trim();

    if (!value) {
      if (errorEl) errorEl.textContent = errorMsg;
      input.classList.add("is-invalid");
      return false;
    }

    if (customCheck && !customCheck(value)) {
      if (errorEl) errorEl.textContent = "Please enter a valid email address.";
      input.classList.add("is-invalid");
      return false;
    }

    if (errorEl) errorEl.textContent = "";
    input.classList.remove("is-invalid");
    return true;
  }

  const isEmail = (val) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val);

  // Bind live blur & input validation
  nameInput.addEventListener("blur", () => validateField(nameInput, "name-error", "Full name is required."));
  nameInput.addEventListener("input", () => {
    if (nameInput.classList.contains("is-invalid")) {
      validateField(nameInput, "name-error", "Full name is required.");
    }
  });

  emailInput.addEventListener("blur", () => validateField(emailInput, "email-error", "Email address is required.", isEmail));
  emailInput.addEventListener("input", () => {
    if (emailInput.classList.contains("is-invalid")) {
      validateField(emailInput, "email-error", "Email address is required.", isEmail);
    }
  });

  subjectInput.addEventListener("blur", () => validateField(subjectInput, "subject-error", "Subject is required."));
  subjectInput.addEventListener("input", () => {
    if (subjectInput.classList.contains("is-invalid")) {
      validateField(subjectInput, "subject-error", "Subject is required.");
    }
  });

  messageInput.addEventListener("blur", () => validateField(messageInput, "message-error", "Message cannot be empty."));
  messageInput.addEventListener("input", () => {
    if (messageInput.classList.contains("is-invalid")) {
      validateField(messageInput, "message-error", "Message cannot be empty.");
    }
  });

  // Handle Form Submission
  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    // Check honeypot field (hidden spam check)
    const honey = form.elements["_honey"];
    if (honey && honey.value.trim() !== "") {
      // Spam bot detected: simulate fake instant success
      form.reset();
      showStatus("Thank you! Your message has been sent successfully.", "success");
      showToast("Thank you! Your message has been sent successfully.");
      return;
    }

    // Validate all fields
    const isNameValid = validateField(nameInput, "name-error", "Full name is required.");
    const isEmailValid = validateField(emailInput, "email-error", "Email address is required.", isEmail);
    const isSubjectValid = validateField(subjectInput, "subject-error", "Subject is required.");
    const isMessageValid = validateField(messageInput, "message-error", "Message cannot be empty.");

    if (!isNameValid || !isEmailValid || !isSubjectValid || !isMessageValid) {
      showStatus("Please fix the highlighted errors before submitting.", "error");
      return;
    }

    // Enter Loading State
    submitBtn.classList.add("is-loading");
    submitBtn.setAttribute("disabled", "true");
    showStatus("Sending your message...", "info");

    const payload = {
      name: nameInput.value.trim(),
      email: emailInput.value.trim(),
      subject: subjectInput.value.trim(),
      message: messageInput.value.trim(),
      _subject: `New Portfolio Message: ${subjectInput.value.trim()}`
    };

    try {
      const response = await fetch("https://formsubmit.co/ajax/ghoshmeghna2001@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(payload)
      });

      if (response.ok) {
        form.reset();
        showStatus("Thank you! Your message has been sent successfully.", "success");
        showToast("Thank you! Your message has been sent successfully.");
      } else {
        throw new Error("Server responded with error status");
      }
    } catch (err) {
      console.warn("FormSubmit fetch error:", err);
      showStatus("Unable to send message directly. Opening your default email client...", "error");

      // Mailto Fallback
      setTimeout(() => {
        const mailtoSubject = encodeURIComponent(payload.subject || "Portfolio Contact");
        const mailtoBody = encodeURIComponent(
          `Name: ${payload.name}\nEmail: ${payload.email}\n\n${payload.message}`
        );
        const mailtoUrl = `mailto:ghoshmeghna2001@gmail.com?subject=${mailtoSubject}&body=${mailtoBody}`;
        window.location.href = mailtoUrl;
      }, 1000);
    } finally {
      submitBtn.classList.remove("is-loading");
      submitBtn.removeAttribute("disabled");
    }
  });

  function showStatus(message, type) {
    statusAlert.textContent = message;
    statusAlert.className = `form-status-alert is-${type}`;
    statusAlert.style.display = "block";
  }
}

/* --------------------------------------------------------------------------
   9. ASSET FALLBACKS & RESUME TOAST
   -------------------------------------------------------------------------- */
function initAssetFallbacks() {
  // 1. Profile Portrait Fallback Check
  const profileImg = document.getElementById("profile-img");
  const monogramFallback = document.getElementById("profile-monogram");

  if (profileImg && monogramFallback) {
    profileImg.addEventListener("error", () => {
      // Try profile.png if profile.jpg fails
      if (!profileImg.dataset.triedPng) {
        profileImg.dataset.triedPng = "true";
        profileImg.src = "assets/profile.png";
      } else {
        // If PNG also fails, render circular MG monogram
        profileImg.style.display = "none";
        monogramFallback.classList.add("show-fallback");
      }
    });
  }

  // 2. Resume File Download Check (HEAD check with toast fallback)
  const cvTriggers = document.querySelectorAll(".cv-download-trigger");
  cvTriggers.forEach(btn => {
    btn.addEventListener("click", async (e) => {
      if (window.location.protocol === "file:") {
        // file:// protocol prevents fetch; allow native download
        return;
      }

      e.preventDefault();
      const resumeUrl = btn.getAttribute("href");
      const downloadName = btn.getAttribute("download") || "Meghna_Ghosh_Resume.pdf";

      try {
        const res = await fetch(resumeUrl, { method: "HEAD" });
        if (res.ok) {
          const tempLink = document.createElement("a");
          tempLink.href = resumeUrl;
          tempLink.download = downloadName;
          document.body.appendChild(tempLink);
          tempLink.click();
          tempLink.remove();
        } else {
          showToast("Resume will be available soon. In the meantime, please connect via email at ghoshmeghna2001@gmail.com.");
        }
      } catch (err) {
        showToast("Resume will be available soon. In the meantime, please connect via email at ghoshmeghna2001@gmail.com.");
      }
    });
  });
}

/* Toast Notification Utility */
function showToast(message) {
  const toast = document.getElementById("toast-notification");
  const content = document.getElementById("toast-content");
  if (!toast || !content) return;

  content.textContent = message;
  toast.classList.add("is-visible");

  setTimeout(() => {
    toast.classList.remove("is-visible");
  }, 4000);
}

/* --------------------------------------------------------------------------
   10. DYNAMIC YEAR
   -------------------------------------------------------------------------- */
function initDynamicYear() {
  const yearEl = document.getElementById("current-year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
}

/* --------------------------------------------------------------------------
   11. HTML ESCAPER UTILITY
   -------------------------------------------------------------------------- */
function escapeHtml(str) {
  if (!str) return "";
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

