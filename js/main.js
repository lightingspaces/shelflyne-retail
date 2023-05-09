// ----------
// Preloader
// ----------

window.addEventListener("load", function () {
  var preloader = document.getElementById("preloader");
  preloader.style.display = "none";
});

// ---------
// Fullpage
// ---------

if (window.innerWidth < 801) {
  var myFullpage = new fullpage("#fullpage", {
    licenseKey: "OPEN-SOURCE-GPLV3-LICENSE",
    sectionSelector: ".scene",
    anchors: [
      "vibrant-strip-lighting",
      "simple-to-install",
      "no-wires-no-fuss",
      "fit-out-overnight",
      "choose-your-style",
      "contact",
    ],
    touchSensitivity: 10,
    normalScrollElements: "#footer",
    normalScrollElementTouchThreshold: 2,
    scrollOverflow: true,
    scrollingSpeed: 1500,
    onLeave: function (origin, destination, direction) {
      var leavingSection = this;

      //after leaving section 2
      if (origin.index === 0) {
        let video = document.getElementById("video-01");
        setTimeout(function () {
          video.load();
        }, 1500);
      }
      //after leaving section 3
      if (origin.index === 1) {
        let video = document.getElementById("video-02");
        setTimeout(function () {
          video.load();
        }, 1500);
      }
      //after leaving section 4
      if (origin.index === 2) {
        let video = document.getElementById("video-03");
        setTimeout(function () {
          video.load();
        }, 1500);
      }
      //after leaving section 5
      if (origin.index === 3) {
        let video = document.getElementById("video-04");
        setTimeout(function () {
          video.load();
        }, 1500);
      }
      //after leaving section 6
      if (origin.index === 4) {
        let video = document.getElementById("video-05");
        setTimeout(function () {
          video.load();
        }, 1500);
      }
    },
  });
}

window.addEventListener("resize", function () {
  if (window.innerWidth > 801) {
    fullpage_api.destroy("all");
  }
});

// ----------------------------------
// Control video via scroll position
// ----------------------------------

// select video element
var vid = document.getElementById("video-00");
var scrollpos = window.pageYOffset / 400;
var targetscrollpos = scrollpos;
var accel = 0;

// ---- Values you can tweak: ----
// How fast the video will try to catch up with the target position. 1 = instantaneous, 0 = do nothing.
var accelamount = 0.01;
// Value from 0 to 1 for how much backlash back and forth you want in the easing.
// 0 = no bounce whatsoever, 1 = lots and lots of bounce
var bounceamount = 0;

// pause video on load
vid.pause();

window.onscroll = function () {
  // Set the video position that we want to end up at:
  targetscrollpos = window.pageYOffset / 800;
};

setInterval(function () {
  // Accelerate towards the target:
  accel += (targetscrollpos - scrollpos) * accelamount;

  // Clamp the acceleration so that it doesnt go too fast
  if (accel > 1) accel = 1;
  if (accel < -1) accel = -1;

  // Move the video scroll position according to the acceleration and how much bouncing you selected:
  scrollpos =
    (scrollpos + accel) * bounceamount + targetscrollpos * (1 - bounceamount);

  // Update video playback
  vid.currentTime = scrollpos;
  vid.pause();
}, 40);

// ---------------------
// "Back-to-top" button
// ---------------------

function updateBackToTopButton() {
  var backToTop = document.getElementById("back-to-top");
  var scrollTopThreshold = window.innerWidth < 801 ? 600 : 2500;

  if (window.pageYOffset >= scrollTopThreshold) {
    backToTop.classList.add("backToTop-reveal");
  } else {
    backToTop.classList.remove("backToTop-reveal");
  }
}

window.addEventListener("scroll", updateBackToTopButton);
window.addEventListener("resize", updateBackToTopButton);

// -----
// Menu
// -----

// -----
// Menu
// -----

var hamburger = document.querySelector(".hamburger");
var slideoutMenu = document.querySelector(".slideout-menu");

document
  .getElementById("slideout-toggle")
  .addEventListener("click", function () {
    document.body.classList.toggle("slideout-open");
    slideoutMenu.classList.toggle("show");
    hamburger.classList.toggle("is-active");
  });

document
  .querySelectorAll(".menu-section-list a")
  .forEach(function (menuSectionLink) {
    menuSectionLink.addEventListener("click", function () {
      document.body.classList.remove("slideout-open");
      slideoutMenu.classList.remove("show");
      hamburger.classList.remove("is-active");
    });
  });

document.addEventListener("click", function (event) {
  if (
    !event.target.closest("#slideout-toggle") &&
    !event.target.closest(".menu-section-list a")
  ) {
    var opened = slideoutMenu.classList.contains("show");
    if (opened === true) {
      document.body.classList.remove("slideout-open");
      slideoutMenu.classList.remove("show");
      hamburger.classList.remove("is-active");
    }
  }
});

// ---------------------------
// Product variation switcher
// ---------------------------

// Helper function to remove classes based on regex
function removeClasses(element, regex) {
  element.className = element.className
    .replace(new RegExp(regex, "g"), "")
    .trim();
}

// #scene05, toggle 'variation1' classes
document
  .querySelectorAll(".variations-panel .variation")
  .forEach(function (variation) {
    variation.addEventListener("click", function (e) {
      var bgClass1 = variation.dataset.variation;
      // button active state
      variation.classList.add("active");
      variation.parentNode
        .querySelectorAll(".variation")
        .forEach(function (sibling) {
          if (sibling !== variation) sibling.classList.remove("active");
        });

      // for desktop
      var desktopVariations = document.querySelector(".desktop-variations");
      removeClasses(desktopVariations, "(^|\\s)variation1\\S+");
      desktopVariations.classList.add(bgClass1);

      // for mobile
      var mobileVariations = document.querySelector(".mobile-variations");
      removeClasses(mobileVariations, "(^|\\s)variation1\\S+");
      mobileVariations.classList.add(bgClass1);
    });
  });

// #scene05, toggle 'variation2' classes
document
  .querySelectorAll(".variations-arms .variation")
  .forEach(function (variation) {
    variation.addEventListener("click", function (e) {
      var bgClass2 = variation.dataset.variation;
      // button active state
      variation.classList.add("active");
      variation.parentNode
        .querySelectorAll(".variation")
        .forEach(function (sibling) {
          if (sibling !== variation) sibling.classList.remove("active");
        });

      // for desktop
      var desktopVariations = document.querySelector(".desktop-variations");
      removeClasses(desktopVariations, "(^|\\s)variation2\\S+");
      desktopVariations.classList.add(bgClass2);

      // for mobile
      var mobileVariations = document.querySelector(".mobile-variations");
      removeClasses(mobileVariations, "(^|\\s)variation2\\S+");
      mobileVariations.classList.add(bgClass2);
    });
  });

// --------------------------------------------------
// Change header background when scrolling to footer
// --------------------------------------------------

document.addEventListener("scroll", function () {
  var navbar = document.getElementById("navbar");
  var footerTop = document.getElementById("footer").getBoundingClientRect().top;
  var hasBgWhiteClass = navbar.classList.contains("bg-white");

  if (footerTop < 150 && !hasBgWhiteClass) {
    navbar.classList.add("bg-white");
  }

  if (footerTop > 150 && hasBgWhiteClass) {
    navbar.classList.remove("bg-white");
  }
});

// ---------------------------------------------
// https://github.com/cferdinandi/smooth-scroll
// ---------------------------------------------

var scroll = new SmoothScroll('a[href*="#"]', {
  // Selectors
  ignore: "[data-scroll-ignore]", // Selector for links to ignore (must be a valid CSS selector)
  header: null, // Selector for fixed headers (must be a valid CSS selector)
  topOnEmptyHash: false, // Scroll to the top of the page for links with href="#"

  // Speed & Duration
  speed: 1000, // Integer. Amount of time in milliseconds it should take to scroll 1000px
  speedAsDuration: false, // If true, use speed as the total duration of the scroll animation
  durationMax: null, // Integer. The maximum amount of time the scroll animation should take
  durationMin: null, // Integer. The minimum amount of time the scroll animation should take
  clip: true, // If true, adjust scroll distance to prevent abrupt stops near the bottom of the page

  // Easing
  easing: "linear", // Easing pattern to use

  // History
  updateURL: false, // Update the URL on scroll
  popstate: false, // Animate scrolling with the forward/backward browser buttons (requires updateURL to be true)
});

// -------------------------------------------------
// Fade sections in / out as enter / leave viewport
// -------------------------------------------------

var fadings = document.querySelectorAll(".scene-content");

window.addEventListener("scroll", function () {
  var vpheight = document.documentElement.clientHeight;

  fadings.forEach(function (fading) {
    var r = fading.getBoundingClientRect();
    var thisHeight = fading.offsetHeight;

    if (thisHeight + r.top < 0 || r.top > vpheight) return;

    var opacity = Math.max(
      0,
      Math.min(
        1,
        (r.top >= 0 ? vpheight - r.top : thisHeight - Math.abs(r.top)) /
          vpheight
      )
    );
    fading.style.opacity = opacity;
  });
});

// ----------------------------------------------------
// Hide '.destop-variations' if scrolling back UP page
// ----------------------------------------------------

var lastScrollTop = 0;

// Helper function to remove classes based on regex
function removeClasses(element, regex) {
  element.className = element.className
    .replace(new RegExp(regex, "g"), "")
    .trim();
}

window.addEventListener("scroll", function (event) {
  var st = window.pageYOffset;

  if (st < lastScrollTop) {
    var desktopVariations = document.querySelector(".desktop-variations");
    removeClasses(desktopVariations, "(^|\\s)variation1\\S+");
    removeClasses(desktopVariations, "(^|\\s)variation2\\S+");
  }

  lastScrollTop = st;
});
