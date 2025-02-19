document.addEventListener("DOMContentLoaded", function () {
  const svg = document.getElementById("svg");
  const loadingPage = document.querySelector(".loading-page");

  if (sessionStorage.getItem("visited")) {
    // User has visited before -> Skip animation
    svg.style.animation = "none"; // Disable animation
    svg.style.clipPath = "inset(0 0 0 0)"; // Fully revealed
    gsap.set(loadingPage, { opacity: 0, display: "none" }); // Instantly hide loading page
  } else {
    // First visit -> Run animations
    sessionStorage.setItem("visited", "true");

    gsap.fromTo(
      ".loading-page",
      { opacity: 1 },
      {
        opacity: 0,
        display: "none",
        duration: 1.5,
        delay: 3.5,
      }
    );

    gsap.fromTo(
      ".logo-name",
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 2, delay: 0.5 }
    );
  }
});
