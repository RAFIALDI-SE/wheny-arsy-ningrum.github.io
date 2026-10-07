/* =========================================================
   WHENY ARSI NINGRUM
   PORTFOLIO JAVASCRIPT
========================================================= */

document.addEventListener("DOMContentLoaded", () => {
  /* =======================================================
     FEATHER ICONS
  ======================================================= */

  if (typeof feather !== "undefined") {
    feather.replace();
  }

  /* =======================================================
     PAGE LOADER
  ======================================================= */

  const pageLoader = document.querySelector(".page-loader");

  window.addEventListener("load", () => {
    setTimeout(() => {
      pageLoader?.classList.add("loaded");
    }, 500);
  });

  /* =======================================================
     HEADER SCROLL EFFECT
  ======================================================= */

  const header = document.getElementById("header");

  const handleHeaderScroll = () => {
    if (!header) return;

    if (window.scrollY > 40) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  };

  window.addEventListener("scroll", handleHeaderScroll, { passive: true });

  handleHeaderScroll();

  /* =======================================================
     SCROLL PROGRESS
  ======================================================= */

  const progressBar = document.getElementById("scroll-progress-bar");

  const updateScrollProgress = () => {
    if (!progressBar) return;

    const scrollTop = window.scrollY;

    const documentHeight =
      document.documentElement.scrollHeight - window.innerHeight;

    if (documentHeight <= 0) return;

    const progress = (scrollTop / documentHeight) * 100;

    progressBar.style.width = `${progress}%`;
  };

  window.addEventListener("scroll", updateScrollProgress, { passive: true });

  updateScrollProgress();

  /* =======================================================
     MOBILE MENU
  ======================================================= */

  const menuToggle = document.getElementById("menu-toggle");

  const mainNav = document.getElementById("main-nav");

  menuToggle?.addEventListener("click", () => {
    menuToggle.classList.toggle("active");

    mainNav.classList.toggle("mobile-open");

    document.body.classList.toggle("menu-open");
  });

  /* Close menu after clicking link */

  document.querySelectorAll("#main-nav a").forEach((link) => {
    link.addEventListener("click", () => {
      menuToggle?.classList.remove("active");

      mainNav?.classList.remove("mobile-open");

      document.body.classList.remove("menu-open");
    });
  });

  /* =======================================================
     ACTIVE NAVIGATION
  ======================================================= */

  const sections = document.querySelectorAll("main section[id]");

  const navLinks = document.querySelectorAll("#main-nav a");

  const sectionObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        const id = entry.target.getAttribute("id");

        navLinks.forEach((link) => {
          link.classList.remove("active");

          if (link.getAttribute("href") === `#${id}`) {
            link.classList.add("active");
          }
        });
      });
    },
    {
      threshold: 0.3,
      rootMargin: "-80px 0px -40% 0px",
    },
  );

  sections.forEach((section) => {
    sectionObserver.observe(section);
  });

  /* =======================================================
     SCROLL REVEAL
  ======================================================= */

  const revealElements = document.querySelectorAll(
    ".reveal, .reveal-left, .reveal-right",
  );

  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        entry.target.classList.add("visible");

        observer.unobserve(entry.target);
      });
    },
    {
      threshold: 0.12,
      rootMargin: "0px 0px -50px 0px",
    },
  );

  revealElements.forEach((element) => {
    revealObserver.observe(element);
  });

  /* =======================================================
     TYPING EFFECT
  ======================================================= */

  const typingElement = document.getElementById("typing-role");

  if (typingElement) {
    const roles = [
      "Civil Engineer",
      "Construction Enthusiast",
      "Project Management",
      "Technical Drawing",
    ];

    let roleIndex = 0;

    let characterIndex = 0;

    let deleting = false;

    const typeSpeed = 85;

    const deleteSpeed = 45;

    const pauseAfterType = 1800;

    const pauseAfterDelete = 400;

    const typeWriter = () => {
      const currentRole = roles[roleIndex];

      if (!deleting) {
        characterIndex++;

        typingElement.textContent = currentRole.substring(0, characterIndex);

        if (characterIndex === currentRole.length) {
          deleting = true;

          setTimeout(typeWriter, pauseAfterType);

          return;
        }

        setTimeout(typeWriter, typeSpeed);
      } else {
        characterIndex--;

        typingElement.textContent = currentRole.substring(0, characterIndex);

        if (characterIndex === 0) {
          deleting = false;

          roleIndex = (roleIndex + 1) % roles.length;

          setTimeout(typeWriter, pauseAfterDelete);

          return;
        }

        setTimeout(typeWriter, deleteSpeed);
      }
    };

    setTimeout(typeWriter, 1200);
  }

  /* =======================================================
     HERO IMAGE PARALLAX
  ======================================================= */

  const heroVisual = document.querySelector(".hero-visual");

  const heroImage = document.querySelector(".engineering-frame");

  if (heroVisual && heroImage && window.innerWidth > 900) {
    heroVisual.addEventListener("mousemove", (event) => {
      const rect = heroVisual.getBoundingClientRect();

      const x = event.clientX - rect.left;

      const y = event.clientY - rect.top;

      const centerX = rect.width / 2;

      const centerY = rect.height / 2;

      const rotateY = ((x - centerX) / centerX) * 3;

      const rotateX = ((y - centerY) / centerY) * -3;

      heroImage.style.transform = `rotateX(${rotateX}deg)
           rotateY(${rotateY}deg)`;
    });

    heroVisual.addEventListener("mouseleave", () => {
      heroImage.style.transform = "rotate(2deg)";
    });
  }

  /* =======================================================
     SMOOTH ANCHOR
  ======================================================= */

  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (event) => {
      const targetId = link.getAttribute("href");

      if (!targetId || targetId === "#") {
        return;
      }

      const target = document.querySelector(targetId);

      if (!target) return;

      event.preventDefault();

      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  });

  /* =======================================================
     STAGGER CARD ANIMATION
  ======================================================= */

  const cardGroups = [
    ".skills-grid .skill-modern",
    ".certificate-grid .certificate-card",
    ".about-side .info-card",
  ];

  cardGroups.forEach((selector) => {
    document.querySelectorAll(selector).forEach((card, index) => {
      card.style.transitionDelay = `${index * 80}ms`;
    });
  });

  /* =======================================================
     CURSOR GLOW
  ======================================================= */

  const cursorGlow = document.createElement("div");

  cursorGlow.className = "cursor-glow";

  document.body.appendChild(cursorGlow);

  if (window.innerWidth > 900) {
    document.addEventListener("mousemove", (event) => {
      cursorGlow.style.left = `${event.clientX}px`;

      cursorGlow.style.top = `${event.clientY}px`;
    });
  } else {
    cursorGlow.remove();
  }

  /* =======================================================
     CONSOLE
  ======================================================= */

  console.log(
    "%cWheny Arsi Ningrum",
    "font-size: 20px; font-weight: 800; color: #f472b6;",
  );

  console.log(
    "%cCivil Engineering Portfolio",
    "font-size: 12px; color: #38bdf8;",
  );
});
