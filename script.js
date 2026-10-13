/* ==========================================================================
   Bihar Vikas Vidyalaya — interactions
   Header, mobile drawer, scrollspy, reveal, gallery lightbox, accordion,
   news expand, enquiry form validation.
   ========================================================================== */
(function () {
  "use strict";

  var prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var header = document.getElementById("siteHeader");
  var body = document.body;

  /* ---------------- Header scroll state ---------------- */
  var lastY = 0;
  function onScroll() {
    var y = window.scrollY || window.pageYOffset;
    header.classList.toggle("is-scrolled", y > 40);
    lastY = y;
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
    lastFocused = document.activeElement;
    drawer.hidden = false;
    scrim.hidden = false;
    void drawer.offsetWidth;
    drawer.classList.add("is-open");
    scrim.classList.add("is-open");
    drawer.setAttribute("aria-hidden", "false");
    toggle.setAttribute("aria-expanded", "true");
    toggle.setAttribute("aria-label", "Close navigation menu");
    body.style.overflow = "hidden";
    var first = drawer.querySelector("a, button");
    if (first) first.focus();
  }

  function closeDrawer() {
    drawer.classList.remove("is-open");
    scrim.classList.remove("is-open");
    drawer.setAttribute("aria-hidden", "true");
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-label", "Open navigation menu");
    body.style.overflow = "";
    window.setTimeout(function () {
      if (!drawer.classList.contains("is-open")) {
        drawer.hidden = true;
        scrim.hidden = true;
      }
    }, 350);
    if (lastFocused) lastFocused.focus();
  }

  toggle.addEventListener("click", function () {
    if (drawer.classList.contains("is-open")) closeDrawer();
    else openDrawer();
  });
  closeBtn.addEventListener("click", closeDrawer);
  scrim.addEventListener("click", closeDrawer);
  drawer.querySelectorAll("a").forEach(function (a) {
    a.addEventListener("click", closeDrawer);
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && drawer.classList.contains("is-open")) closeDrawer();
  });

  /* ---------------- Scrollspy (active nav) ---------------- */
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

  /* ---------------- Smooth anchor scrolling (header offset) ---------------- */
  document.querySelectorAll('a[href^="#"]').forEach(function (link) {
    link.addEventListener("click", function (e) {
      var href = link.getAttribute("href");
      if (!href || href === "#") return;
      var target = document.querySelector(href);
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({
        behavior: prefersReduced ? "auto" : "smooth",
        block: "start"
      });
      if (history.replaceState) history.replaceState(null, "", href);
    });
  });

  /* ---------------- Reveal on scroll ---------------- */
  var reveals = document.querySelectorAll(".reveal");
  if (prefersReduced || !("IntersectionObserver" in window)) {
    reveals.forEach(function (el) { el.classList.add("is-visible"); });
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
      { rootMargin: "0px 0px -10% 0px", threshold: 0 }
    );
    reveals.forEach(function (el) { revObs.observe(el); });
    window.addEventListener("load", function () {
      reveals.forEach(function (el) {
        var rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight) el.classList.add("is-visible");
      });
    });
  }

  /* ---------------- Gallery filters ---------------- */
  var filterBtns = document.querySelectorAll(".filter");
  var galleryItems = Array.prototype.slice.call(document.querySelectorAll(".g-item"));
  filterBtns.forEach(function (btn) {
    btn.addEventListener("click", function () {
      filterBtns.forEach(function (b) { b.classList.remove("is-active"); });
      btn.classList.add("is-active");
      var cat = btn.getAttribute("data-filter");
      galleryItems.forEach(function (item) {
        var show = cat === "all" || item.getAttribute("data-cat") === cat;
        item.classList.toggle("is-hidden", !show);
      });
    });
  });

  /* ---------------- Lightbox ---------------- */
  var lightbox = document.getElementById("lightbox");
  var lbFigure = lightbox.querySelector(".lightbox__figure");
  var lbImg = document.getElementById("lightboxImg");
  var lbCap = document.getElementById("lightboxCaption");
  var visibleItems = [];
  var currentIndex = 0;
  var lbLastFocus = null;
  var lbOpen = false;
  var preloaded = {};

  function currentGallery() {
    return galleryItems.filter(function (i) { return !i.classList.contains("is-hidden"); });
  }

  function preload(src) {
    if (!src || preloaded[src]) return;
    preloaded[src] = true;
    var im = new Image();
    im.src = src;
  }

  function renderLightbox() {
    var item = visibleItems[currentIndex];
    if (!item) return;
    var full = item.getAttribute("data-full");
    var cap = item.getAttribute("data-caption") || "";
    var thumb = item.querySelector("img");

    lbCap.textContent = cap;
    lbCap.hidden = !cap;
    lbImg.alt = thumb ? thumb.alt : cap;
    lbImg.classList.remove("is-loaded");
    lbFigure.classList.add("is-loading");
    lbImg.src = full;

    var n = visibleItems.length;
    if (n > 1) {
      preload(visibleItems[(currentIndex + 1) % n].getAttribute("data-full"));
      preload(visibleItems[(currentIndex - 1 + n) % n].getAttribute("data-full"));
    }
  }

  lbImg.addEventListener("load", function () {
    lbImg.classList.add("is-loaded");
    lbFigure.classList.remove("is-loading");
  });
  lbImg.addEventListener("error", function () {
    lbFigure.classList.remove("is-loading");
    lbImg.classList.add("is-loaded");
  });

  function openLightbox(item) {
    visibleItems = currentGallery();
    currentIndex = Math.max(0, visibleItems.indexOf(item));
    lbLastFocus = document.activeElement;
    renderLightbox();
    lbOpen = true;
    body.style.overflow = "hidden";
    window.requestAnimationFrame(function () {
      lightbox.classList.add("is-open");
      lightbox.setAttribute("aria-hidden", "false");
      var closeEl = lightbox.querySelector(".lightbox__close");
      if (closeEl) closeEl.focus();
    });
  }

  function closeLightbox() {
    lightbox.classList.remove("is-open");
    lightbox.setAttribute("aria-hidden", "true");
    lbOpen = false;
    body.style.overflow = "";
    if (lbLastFocus) lbLastFocus.focus();
  }

  function step(dir) {
    if (!visibleItems.length) return;
    currentIndex = (currentIndex + dir + visibleItems.length) % visibleItems.length;
    renderLightbox();
  }

  galleryItems.forEach(function (item) {
    item.addEventListener("click", function () { openLightbox(item); });
  });

  lightbox.querySelectorAll("[data-close]").forEach(function (el) {
    el.addEventListener("click", closeLightbox);
  });
  lightbox.querySelector("[data-prev]").addEventListener("click", function () { step(-1); });
  lightbox.querySelector("[data-next]").addEventListener("click", function () { step(1); });

  document.addEventListener("keydown", function (e) {
    if (!lbOpen) return;
    if (e.key === "Escape") closeLightbox();
    else if (e.key === "ArrowLeft") step(-1);
    else if (e.key === "ArrowRight") step(1);
    else if (e.key === "Tab") {
      var focusable = lightbox.querySelectorAll("button");
      var first = focusable[0];
      var last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }
  });

  /* ---------------- News article expand ---------------- */
  document.querySelectorAll("[data-article]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var panel = document.getElementById(btn.getAttribute("aria-controls"));
      if (!panel) return;
      var isOpen = btn.getAttribute("aria-expanded") === "true";
      btn.setAttribute("aria-expanded", String(!isOpen));
      panel.hidden = isOpen;
      btn.childNodes[0].nodeValue = isOpen ? "Read More " : "Read Less ";
    });
  });

  /* ---------------- FAQ accordion ---------------- */
  var triggers = document.querySelectorAll(".acc-trigger");
  triggers.forEach(function (trigger) {
    trigger.addEventListener("click", function () {
      var panel = document.getElementById(trigger.getAttribute("aria-controls"));
      var isOpen = trigger.getAttribute("aria-expanded") === "true";
      trigger.setAttribute("aria-expanded", String(!isOpen));
      if (panel) panel.hidden = isOpen;
    });
  });

  /* ---------------- Enquiry form (front-end demo) ---------------- */
  var form = document.getElementById("enquiryForm");
  var success = document.getElementById("formSuccess");

  function setError(id, message) {
    var input = document.getElementById(id);
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

      if (!phone) { setError("phone", "Please enter a phone number."); ok = false; }
      else if (!validatePhone(phone)) { setError("phone", "Please enter a valid phone number (10–13 digits)."); ok = false; }
      else setError("phone", "");

      if (!student) { setError("student", "Please enter the student's name."); ok = false; }
      else setError("student", "");

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
    reset.addEventListener("click", function () {
      form.reset();
      success.hidden = true;
      form.hidden = false;
      var first = document.getElementById("guardian");
      first.focus();
    });
  }

  /* ---------------- Footer year ---------------- */
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());
})();
