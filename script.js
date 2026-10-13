/* ==========================================================================
   Bihar Vikas Vidyalaya — landing page interactions
   Cinematic intro, sticky header, drawer, scrollspy, reveal, counters,
   accordion, masonry lightbox, admission modal, enquiry form.
   ========================================================================== */
(function () {
  "use strict";

  var prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var body = document.body;
  var header = document.getElementById("siteHeader");

  /* ---------------- Cinematic intro ---------------- */
  var intro = document.getElementById("intro");
  var introSkip = document.getElementById("introSkip");
  var introTimer = null;

  function closeIntro() {
    if (!intro || intro.classList.contains("is-hidden")) return;
    intro.classList.add("is-hidden");
    window.clearTimeout(introTimer);
    intro.setAttribute("aria-hidden", "true");
  }
  function scheduleIntro() {
    if (!intro) return;
    introTimer = window.setTimeout(closeIntro, prefersReduced ? 600 : 2600);
  }
  if (intro) {
    scheduleIntro();
    if (introSkip) introSkip.addEventListener("click", closeIntro);
  }

  /* ---------------- Admission modal ---------------- */
  var modal = document.getElementById("admissionModal");
  var modalLastFocus = null;
  var modalShown = false;

  function openModal() {
    if (!modal || modalShown) return;
    modalShown = true;
    modalLastFocus = document.activeElement;
    modal.classList.add("is-open");
    modal.setAttribute("aria-hidden", "false");
    body.classList.add("is-locked");
    var target = modal.querySelector(".modal__close") || modal.querySelector("[data-modal-close]");
    if (target) target.focus();
  }
  function closeModal() {
    if (!modal) return;
    modal.classList.remove("is-open");
    modal.setAttribute("aria-hidden", "true");
    if (!document.querySelector(".drawer.is-open") && !document.querySelector(".lightbox.is-open")) {
      body.classList.remove("is-locked");
    }
    if (modalLastFocus && modalLastFocus.focus) modalLastFocus.focus();
  }
  if (modal) {
    modal.querySelectorAll("[data-modal-close]").forEach(function (el) {
      el.addEventListener("click", closeModal);
    });
  }

  /* Show modal once per session, after the intro finishes */
  var seenModal = false;
  try { seenModal = window.sessionStorage.getItem("bvv-modal-seen") === "1"; } catch (e) { seenModal = false; }
  if (modal && !seenModal) {
    window.setTimeout(openModal, prefersReduced ? 900 : 3400);
    try { window.sessionStorage.setItem("bvv-modal-seen", "1"); } catch (e) { /* ignore */ }
  }

  /* ---------------- Header scroll state ---------------- */
  function onScroll() {
    var y = window.scrollY || window.pageYOffset;
    if (header) header.classList.toggle("is-scrolled", y > 40);
  }
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  /* ---------------- Mobile drawer ---------------- */
  var toggle = document.getElementById("navToggle");
  var drawer = document.getElementById("mobileNav");
  var scrim = document.getElementById("drawerScrim");
  var closeBtn = document.getElementById("drawerClose");
  var lastFocused = null;

  function openDrawer() {
    if (!drawer) return;
    lastFocused = document.activeElement;
    drawer.hidden = false;
    scrim.hidden = false;
    void drawer.offsetWidth;
    drawer.classList.add("is-open");
    scrim.classList.add("is-open");
    drawer.setAttribute("aria-hidden", "false");
    toggle.setAttribute("aria-expanded", "true");
    toggle.setAttribute("aria-label", "Close navigation menu");
    body.classList.add("is-locked");
    var first = drawer.querySelector("a, button");
    if (first) first.focus();
  }
  function closeDrawer() {
    if (!drawer) return;
    drawer.classList.remove("is-open");
    scrim.classList.remove("is-open");
    drawer.setAttribute("aria-hidden", "true");
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-label", "Open navigation menu");
    if (!modal.classList.contains("is-open")) body.classList.remove("is-locked");
    window.setTimeout(function () {
      if (!drawer.classList.contains("is-open")) {
        drawer.hidden = true;
        scrim.hidden = true;
      }
    }, 400);
    if (lastFocused) lastFocused.focus();
  }
  if (toggle && drawer) {
    toggle.addEventListener("click", function () {
      if (drawer.classList.contains("is-open")) closeDrawer();
      else openDrawer();
    });
    if (closeBtn) closeBtn.addEventListener("click", closeDrawer);
    if (scrim) scrim.addEventListener("click", closeDrawer);
    drawer.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", closeDrawer);
    });
  }

  /* ---------------- Escape closes overlays ---------------- */
  document.addEventListener("keydown", function (e) {
    if (e.key !== "Escape") return;
    if (modal && modal.classList.contains("is-open")) { closeModal(); return; }
    if (drawer && drawer.classList.contains("is-open")) { closeDrawer(); return; }
    if (intro && !intro.classList.contains("is-hidden")) closeIntro();
  });

  /* ---------------- Scrollspy ---------------- */
  var navLinks = Array.prototype.slice.call(document.querySelectorAll(".nav__link"));
  var sections = navLinks
    .map(function (a) { return document.querySelector(a.getAttribute("href")); })
    .filter(Boolean);

  if ("IntersectionObserver" in window && sections.length) {
    var spy = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          var id = "#" + entry.target.id;
          navLinks.forEach(function (a) {
            var active = a.getAttribute("href") === id;
            a.classList.toggle("is-active", active);
            if (active) a.setAttribute("aria-current", "true");
            else a.removeAttribute("aria-current");
          });
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );
    sections.forEach(function (s) { spy.observe(s); });
  }

  /* ---------------- Smooth anchor scrolling ---------------- */
  document.querySelectorAll('a[href^="#"]').forEach(function (link) {
    link.addEventListener("click", function (e) {
      var href = link.getAttribute("href");
      if (!href || href === "#") return;
      var target = document.querySelector(href);
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: prefersReduced ? "auto" : "smooth", block: "start" });
      if (history.replaceState) history.replaceState(null, "", href);
    });
  });

  /* ---------------- Reveal on scroll ---------------- */
  var reveals = Array.prototype.slice.call(document.querySelectorAll(".reveal"));
  function revealAll() { reveals.forEach(function (el) { el.classList.add("is-visible"); }); }

  if (prefersReduced || !("IntersectionObserver" in window)) {
    revealAll();
  } else {
    var revObs = new IntersectionObserver(
      function (entries, obs) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            obs.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0 }
    );
    reveals.forEach(function (el) { revObs.observe(el); });
    window.addEventListener("load", function () {
      reveals.forEach(function (el) {
        if (el.getBoundingClientRect().top < window.innerHeight) el.classList.add("is-visible");
      });
    });
  }

  /* ---------------- Animated stat counters ---------------- */
  var counters = Array.prototype.slice.call(document.querySelectorAll("[data-count]"));
  function animateCount(el) {
    var target = parseInt(el.getAttribute("data-count"), 10) || 0;
    var suffix = el.getAttribute("data-suffix") || "";
    if (prefersReduced) { el.textContent = target + suffix; return; }
    var duration = 1600;
    var start = null;
    function tick(ts) {
      if (start === null) start = ts;
      var progress = Math.min((ts - start) / duration, 1);
      var eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.round(eased * target) + suffix;
      if (progress < 1) window.requestAnimationFrame(tick);
    }
    window.requestAnimationFrame(tick);
  }
  if (counters.length) {
    if (!("IntersectionObserver" in window)) {
      counters.forEach(animateCount);
    } else {
      var countObs = new IntersectionObserver(
        function (entries, obs) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              animateCount(entry.target);
              obs.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.5 }
      );
      counters.forEach(function (el) { countObs.observe(el); });
    }
  }

  /* ---------------- Accordion ---------------- */
  document.querySelectorAll(".acc-trigger").forEach(function (trigger) {
    trigger.addEventListener("click", function () {
      var panel = document.getElementById(trigger.getAttribute("aria-controls"));
      var isOpen = trigger.getAttribute("aria-expanded") === "true";
      trigger.setAttribute("aria-expanded", String(!isOpen));
      if (panel) panel.hidden = isOpen;
    });
  });

  /* ---------------- Masonry lightbox ---------------- */
  var lightbox = document.getElementById("lightbox");
  var lbFigure = lightbox ? lightbox.querySelector(".lightbox__figure") : null;
  var lbImg = document.getElementById("lightboxImg");
  var galleryItems = Array.prototype.slice.call(document.querySelectorAll(".m-item"));
  var visibleItems = [];
  var currentIndex = 0;
  var lbLastFocus = null;
  var lbOpen = false;
  var preloaded = {};

  function preload(src) {
    if (!src || preloaded[src]) return;
    preloaded[src] = true;
    var im = new Image();
    im.src = src;
  }
  function renderLightbox() {
    var item = visibleItems[currentIndex];
    if (!item || !lbImg) return;
    var full = item.getAttribute("data-full");
    lbImg.alt = item.querySelector("img") ? item.querySelector("img").alt : "School image";
    lbImg.classList.remove("is-loaded");
    lbFigure.classList.add("is-loading");
    lbImg.src = full;
    if (lbImg.complete && lbImg.naturalWidth) {
      lbImg.classList.add("is-loaded");
      lbFigure.classList.remove("is-loading");
    }
    var n = visibleItems.length;
    if (n > 1) {
      preload(visibleItems[(currentIndex + 1) % n].getAttribute("data-full"));
      preload(visibleItems[(currentIndex - 1 + n) % n].getAttribute("data-full"));
    }
  }
  function openLightbox(item) {
    if (!lightbox) return;
    visibleItems = galleryItems;
    currentIndex = Math.max(0, visibleItems.indexOf(item));
    lbLastFocus = document.activeElement;
    renderLightbox();
    lbOpen = true;
    body.classList.add("is-locked");
    window.requestAnimationFrame(function () {
      lightbox.classList.add("is-open");
      lightbox.setAttribute("aria-hidden", "false");
      var closeEl = lightbox.querySelector(".lightbox__close");
      if (closeEl) closeEl.focus();
    });
  }
  function closeLightbox() {
    if (!lightbox) return;
    lightbox.classList.remove("is-open");
    lightbox.setAttribute("aria-hidden", "true");
    lbOpen = false;
    if (!modal.classList.contains("is-open")) body.classList.remove("is-locked");
    if (lbLastFocus && lbLastFocus.focus) lbLastFocus.focus();
  }
  function step(dir) {
    if (!visibleItems.length) return;
    currentIndex = (currentIndex + dir + visibleItems.length) % visibleItems.length;
    renderLightbox();
  }
  if (lightbox) {
    if (lbImg) {
      lbImg.addEventListener("load", function () {
        lbImg.classList.add("is-loaded");
        lbFigure.classList.remove("is-loading");
      });
      lbImg.addEventListener("error", function () {
        lbFigure.classList.remove("is-loading");
        lbImg.classList.add("is-loaded");
      });
    }
    galleryItems.forEach(function (item) {
      item.addEventListener("click", function () { openLightbox(item); });
    });
    lightbox.querySelectorAll("[data-close]").forEach(function (el) {
      el.addEventListener("click", closeLightbox);
    });
    var prev = lightbox.querySelector("[data-prev]");
    var next = lightbox.querySelector("[data-next]");
    if (prev) prev.addEventListener("click", function () { step(-1); });
    if (next) next.addEventListener("click", function () { step(1); });
    document.addEventListener("keydown", function (e) {
      if (!lbOpen) return;
      if (e.key === "Escape") closeLightbox();
      else if (e.key === "ArrowLeft") step(-1);
      else if (e.key === "ArrowRight") step(1);
    });
  }

  /* ---------------- Enquiry form (front-end demo) ---------------- */
  var form = document.getElementById("enquiryForm");
  var success = document.getElementById("formSuccess");

  function setError(id, message) {
    var input = document.getElementById(id);
    if (!input) return;
    var field = input.closest(".field");
    var err = document.getElementById(id + "-err");
    if (message) {
      field.classList.add("is-invalid");
      input.setAttribute("aria-invalid", "true");
      err.textContent = message;
      err.hidden = false;
    } else {
      field.classList.remove("is-invalid");
      input.removeAttribute("aria-invalid");
      err.hidden = true;
    }
  }
  function validatePhone(value) {
    var digits = value.replace(/\D/g, "");
    return digits.length >= 10 && digits.length <= 13;
  }
  function validateEmail(value) {
    if (!value) return true;
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  }

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var ok = true;
      var guardian = document.getElementById("guardian").value.trim();
      var phone = document.getElementById("phone").value.trim();
      var student = document.getElementById("student").value.trim();
      var klass = document.getElementById("classOfInterest").value;
      var email = document.getElementById("email").value.trim();

      if (!guardian) { setError("guardian", "Please enter the parent or guardian name."); ok = false; }
      else setError("guardian", "");
      if (!student) { setError("student", "Please enter the student's name."); ok = false; }
      else setError("student", "");
      if (!phone) { setError("phone", "Please enter a phone number."); ok = false; }
      else if (!validatePhone(phone)) { setError("phone", "Please enter a valid phone number (10–13 digits)."); ok = false; }
      else setError("phone", "");
      if (!klass) { setError("classOfInterest", "Please select a class of interest."); ok = false; }
      else setError("classOfInterest", "");
      if (!validateEmail(email)) { setError("email", "Please enter a valid email address."); ok = false; }
      else setError("email", "");

      if (!ok) {
        var firstInvalid = form.querySelector(".field.is-invalid input, .field.is-invalid select");
        if (firstInvalid) firstInvalid.focus();
        return;
      }
      form.hidden = true;
      success.hidden = false;
      success.focus();
    });

    var reset = document.getElementById("formReset");
    if (reset) {
      reset.addEventListener("click", function () {
        form.reset();
        success.hidden = true;
        form.hidden = false;
        document.getElementById("guardian").focus();
      });
    }
  }

  /* ---------------- Footer year ---------------- */
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());
})();
