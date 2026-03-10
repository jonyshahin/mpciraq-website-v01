// Mobile nav toggle
const navToggle = document.getElementById("navToggle");
const navList = document.querySelector(".nav-list");

if (navToggle && navList) {
    navToggle.addEventListener("click", () => {
        navList.classList.toggle("open");
        navToggle.classList.toggle("open");
    });

    // Close menu on link click (mobile)
    navList.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => {
            navList.classList.remove("open");
            navToggle.classList.remove("open");
        });
    });
}

// Smooth scroll is handled by CSS (scroll-behavior), but ensure offset if you need.

// Year in footer
const yearSpan = document.getElementById("year");
if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
}

// Scroll reveal
const revealEls = document.querySelectorAll(".reveal");
const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target);
            }
        });
    },
    {
        threshold: 0.15,
    }
);

revealEls.forEach((el) => observer.observe(el));

// Stats counters
const statNumbers = document.querySelectorAll(".stat-number");
let statsStarted = false;

function startCounters() {
    if (statsStarted) return;
    statsStarted = true;
    statNumbers.forEach((el) => {
        const target = parseInt(el.getAttribute("data-target"), 10) || 0;
        let current = 0;
        const step = Math.max(1, Math.floor(target / 80));

        const tick = () => {
            current += step;
            if (current >= target) {
                el.textContent = target.toLocaleString();
            } else {
                el.textContent = current.toLocaleString();
                requestAnimationFrame(tick);
            }
        };
        requestAnimationFrame(tick);
    });
}

// Trigger counters when hero is visible
const heroStatsObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                startCounters();
                heroStatsObserver.disconnect();
            }
        });
    },
    { threshold: 0.4 }
);

const heroStats = document.querySelector(".hero-stats");
if (heroStats) {
    heroStatsObserver.observe(heroStats);
}

// Tabs for projects
const tabButtons = document.querySelectorAll(".tab-button");
const tabPanels = document.querySelectorAll(".tab-panel");

tabButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
        const targetSelector = btn.getAttribute("data-target");
        const targetPanel = document.querySelector(targetSelector);

        if (!targetPanel) return;

        tabButtons.forEach((b) => b.classList.remove("active"));
        tabPanels.forEach((p) => p.classList.remove("active"));

        btn.classList.add("active");
        targetPanel.classList.add("active");
    });
});

// Fake form submit (frontend only)
const contactForm = document.querySelector(".contact-form");
const formStatus = document.getElementById("formStatus");

if (contactForm && formStatus) {
    contactForm.addEventListener("submit", (e) => {
        e.preventDefault();
        formStatus.textContent = "Thank you. Your message has been received.";
        contactForm.reset();
    });
}
