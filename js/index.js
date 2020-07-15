window.addEventListener("DOMContentLoaded", init);

function initCursor() {
  var cursor = document.querySelector(".cursor");
  var overlay = document.querySelector(".experiences");

  function onMouseEnter() {
    gsap.to(cursor, {scale: 1, autoAlpha: 1, duration: 0.3, ease: "back.out"});
  }

  function onMouseMove(e) {
    gsap.to(cursor, {
      duration: 0.5,
      x: e.clientX,
      y: e.clientY,
      ease: "power2.easeOut"
    });
  }

  function onMouseLeave() {
    gsap.to(cursor, {scale: 0.1, autoAlpha: 0, duration: 0.3, ease: "back.in"});
  }

  var elements = document.querySelectorAll("[data-cursor]");
  elements.forEach(function (element) {
    element.addEventListener("mouseenter", function () {
      cursor.style.backgroundImage = "url(" + element.dataset.cursor + ")";
    });
  })

  overlay.addEventListener("mouseenter", onMouseEnter);
  overlay.addEventListener("mousemove", onMouseMove);
  overlay.addEventListener("mouseleave", onMouseLeave);
}

function init() {
  initCursor();
}
