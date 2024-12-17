

// Data for each service
const serviceData = {
    engineering: {
      title: "Empowering Projects with Engineering Excellence",
      text: "Delivering innovative and reliable engineering and contracting solutions to meet the demands of modern infrastructure and development.",
      images: [
        "./assets/images/services/hero/Engineering-hero-1.jpg",
        "./assets/images/services/hero/engineering-hero-2.jpg",
        "./assets/images/services/hero/engineering-hero-3.jpg"
      ]
    },
    equipment: {
      title: "Reliable Equipment Leasing Services",
      text: "Offering a wide range of modern equipment for lease, ensuring projects are completed efficiently and on time.",
      images: [
        "./assets/images/services/hero/Engineering-hero-1.jpg",
        "./assets/images/services/hero/engineering-hero-2.jpg",
        "./assets/images/services/hero/engineering-hero-3.jpg"
      ]
    },
    logistics: {
      title: "Seamless Logistics, Endless Possibilities",
      text: "Optimized logistics solutions for seamless transportation and workforce mobility.",
      images: [
        "./assets/images/services/hero/Engineering-hero-1.jpg",
        "./assets/images/services/hero/engineering-hero-2.jpg",
        "./assets/images/services/hero/engineering-hero-3.jpg"
      ]
    },
    sponsorship: {
      title: "Trusted Sponsorship Services",
      text: "Providing sponsorship solutions that enable businesses to operate smoothly in Kuwait and the GCC.",
      images: [
        "./assets/images/services/hero/Engineering-hero-1.jpg",
        "./assets/images/services/hero/engineering-hero-2.jpg",
        "./assets/images/services/hero/engineering-hero-3.jpg"
      ]
    },
    hr: {
      title: "Comprehensive Human Resource Solutions",
      text: "Specialized HR services, including recruitment, workforce management, and skill-building programs tailored to your needs.",
      images: [
        "./assets/images/services/hero/Engineering-hero-1.jpg",
        "./assets/images/services/hero/engineering-hero-2.jpg",
        "./assets/images/services/hero/engineering-hero-3.jpg"
      ]
    },
    construction: {
      title: "Building Dreams with Construction Expertise",
      text: "Delivering exceptional construction solutions with a focus on quality, safety, and timely execution.",
      images: [
        "./assets/images/services/hero/Engineering-hero-1.jpg",
        "./assets/images/services/hero/engineering-hero-2.jpg",
        "./assets/images/services/hero/engineering-hero-3.jpg"
      ]
    },
    searchSelect: {
      title: "Search and Select Service",
      text: "Professional search and selection services to connect you with top talent and resources across industries.",
      images: [
        "./assets/images/services/hero/Engineering-hero-1.jpg",
        "./assets/images/services/hero/engineering-hero-2.jpg",
        "./assets/images/services/hero/engineering-hero-3.jpg"
      ]
    }
  };
  
  
  // Function to dynamically update the hero section
  function updateHeroSection(service) {
    const heroTitle = document.getElementById("hero-title");
    const heroText = document.getElementById("hero-text");
    const heroSlider = document.getElementById("hero-slider");
  
    // Get the selected service data
    const data = serviceData[service];
  
    // Update hero title and text
    heroTitle.textContent = data.title;
    heroText.textContent = data.text;
  
    // Clear existing slider items
    heroSlider.innerHTML = "";
  
    // Add new slider items
    data.images.forEach((image) => {
      const li = document.createElement("li");
      li.classList.add("slider-item");
  
      const figure = document.createElement("figure");
      figure.classList.add("img-holder");
      figure.style.setProperty("--width", "575");
      figure.style.setProperty("--height", "550");
  
      const img = document.createElement("img");
      img.src = image;
      img.alt = "Hero Banner";
      img.width = 575;
      img.height = 550;
      img.classList.add("img-cover");
  
      figure.appendChild(img);
      li.appendChild(figure);
      heroSlider.appendChild(li);
    });
  }
  
  // Example: Dynamically load the 'engineering' service on page load
  document.addEventListener("DOMContentLoaded", () => {
    fetch("navbar.html")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Failed to load navbar.html");
      }
      return response.text();
    })
    .then((data) => {
      document.querySelector("#navbar-placeholder").innerHTML = data;
    })
    .catch((error) => console.error("Error including navbar:", error));
    const urlParams = new URLSearchParams(window.location.search);
    const service = urlParams.get("service") || "engineering"; // Default to 'engineering'
    updateHeroSection(service);
  });

  /*ADD Event listener on multiple elements*/

const addEventOnElements = function(elements, eventType, callback) {
    for (let i=0, len=elements.length; i < len; i++) {
        elements[i].addEventListener(eventType, callback);
    }
}

/*NAVBAR TOGGLE FOR MOBILE */

const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const overlay = document.querySelector("[data-overlay]");

const toggleNavbar = function () {
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
    document.body.classList.toggle("nav-active");
}

addEventOnElements(navTogglers, "click", toggleNavbar);


/**HEADER
 * active header when window scroll down to 100px
 */

const header = document.querySelector("[data-header]");

window.addEventListener("scroll", function () {
    if (this.window.scrollY > 100) {
        header.classList.add("active");
    } else {
        header.classList.remove("active");
    }
})

/**SLIDER */

const sliders = document.querySelectorAll("[data-slider]");

const initSlider = function(currentSlider) {
    const sliderContainer = currentSlider.querySelector("[data-slider-container]");
    const sliderPrevBtn = currentSlider.querySelector("[data-slider-prev]");
    const sliderNextBtn = currentSlider.querySelector("[data-slider-next]");

    let currentSlidePos = 0;

    const moveSliderItem = function () {
        sliderContainer.style.transform = `translateX(-${sliderContainer.children[currentSlidePos].offsetLeft}px)`;
    };

    const slideNext = function () {
        const slideEnd = currentSlidePos >= sliderContainer.children.length - 1;

        if (slideEnd) {
            currentSlidePos = 0;
        } else {
            currentSlidePos++;
        }

        moveSliderItem();
    }
    sliderNextBtn.addEventListener("click", slideNext);

    const slidePrev = function () {
        const slideStart = currentSlidePos <= 0;

        if (slideStart) {
            currentSlidePos = sliderContainer.children.length - 1;
        } else {
            currentSlidePos--;
        }

        moveSliderItem();
    }
    sliderPrevBtn.addEventListener("click", slidePrev);

    // Hide buttons if there are not enough slides
    const hideButtonsIfNeeded = function() {
        if (sliderContainer.children.length <= 1) {
            sliderNextBtn.style.display = "none";
            sliderPrevBtn.style.display = "none";
        }
    }

    // Initial setup
    moveSliderItem();
    hideButtonsIfNeeded();
}

for (let i = 0, len = sliders.length; i < len; i++) {
    initSlider(sliders[i]);
}
  