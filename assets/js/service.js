const serviceData = {
  engineering: {
    title: "Empowering Projects with Engineering Excellence",
    text: "Delivering innovative and reliable engineering and contracting solutions to meet the demands of modern infrastructure and development.",
    images: [
      "./assets/images/services/hero/Engineering-hero.svg",
    ],
    features: {
      subtitle: "Engineering Excellence",
      title: "Why Choose Our Engineering Services",
      text: "Our engineering services combine innovation, reliability, and expertise to deliver high-quality solutions for modern infrastructure projects. With state-of-the-art equipment and an experienced team, we ensure your project's success.",
    },
    details: [
      "Structural analysis and design for complex projects.",
      "End-to-end project management for seamless execution.",
      "Cutting-edge technology to optimize construction processes.",
      "Focus on sustainability and environmental impact.",
    ],
  },
  equipment: {
    title: "Reliable Equipment Leasing Services",
    text: "Offering a wide range of modern equipment for lease, ensuring projects are completed efficiently and on time.",
    images: [
      "./assets/images/services/hero/Equipment-hero.svg",
    ],
    features: {
      subtitle: "Equipment Leasing",
      title: "Maximize Efficiency with Our Equipment Services",
      text: "We provide access to state-of-the-art equipment, ensuring your projects are executed with precision and reliability. Our flexible leasing terms cater to your specific project needs.",
    },
    details: [
      "Wide range of equipment for construction and industrial use.",
      "Flexible leasing plans tailored to project timelines.",
      "Regular maintenance and support to minimize downtime.",
      "Expert guidance on selecting the right tools for the job.",
    ],
  },
  logistics: {
    title: "Seamless Logistics, Endless Possibilities",
    text: "Optimized logistics solutions for seamless transportation and workforce mobility.",
    images: [
      "./assets/images/services/hero/Logistics-hero.svg",
    ],
    features: {
      subtitle: "Logistics",
      title: "Streamline Operations with Our Logistics Solutions",
      text: "Our logistics services ensure timely and cost-effective transportation solutions, minimizing downtime and maximizing productivity for your projects.",
    },
    details: [
      "Timely transportation of goods and equipment.",
      "Optimized routes to save time and reduce costs.",
      "Scalable solutions for projects of any size.",
      "Dedicated customer support for logistics queries.",
    ],
  },
  sponsorship: {
    title: "Trusted Sponsorship Services",
    text: "Providing sponsorship solutions that enable businesses to operate smoothly in Kuwait and the GCC.",
    images: [
      "./assets/images/services/hero/Sponsorship-hero.svg",
    ],
    features: {
      subtitle: "Sponsorship",
      title: "Secure Growth with Our Sponsorship Services",
      text: "We offer comprehensive sponsorship solutions that enable businesses to navigate local regulations and thrive in competitive markets.",
    },
    details: [
      "Assistance with regulatory compliance.",
      "Expertise in navigating GCC business landscapes.",
      "Facilitating smooth business operations.",
      "Support for both short-term and long-term projects.",
    ],
  },
  hr: {
    title: "Comprehensive Human Resource Solutions",
    text: "Specialized HR services, including recruitment, workforce management, and skill-building programs tailored to your needs.",
    images: [
      "./assets/images/services/hero/HR-hero.svg",
    ],
    features: {
      subtitle: "HR Solutions",
      title: "Enhance Workforce Potential with Our HR Services",
      text: "Our HR services are tailored to optimize workforce performance, offering recruitment, training, and management solutions that meet your organizational goals.",
    },
    details: [
      "Talent acquisition and onboarding support.",
      "Custom training programs to enhance workforce skills.",
      "Effective workforce management strategies.",
      "Legal compliance and employee documentation handling.",
    ],
  },
  construction: {
    title: "Building Dreams with Construction Expertise",
    text: "Delivering exceptional construction solutions with a focus on quality, safety, and timely execution.",
    images: [
      "./assets/images/services/hero/Construction-hero.svg",
    ],
    features: {
      subtitle: "Construction Excellence",
      title: "Achieve Your Vision with Our Construction Services",
      text: "We deliver top-notch construction services that emphasize quality, safety, and timely completion, making your vision a reality.",
    },
    details: [
      "Comprehensive planning and project execution.",
      "Strict adherence to safety and quality standards.",
      "On-time delivery of projects without compromise.",
      "Use of modern techniques and eco-friendly practices.",
    ],
  },
  searchselect: {
    title: "Search and Selection",
    text: "Professional search and selection services to connect you with top talent and resources across industries.",
    images: [
      "./assets/images/services/hero/Searchselect-hero.svg",
    ],
    features: {
      subtitle: "Tailored Recruitment",
      title: "Discover Top Talent with Our Search and Select Service",
      text: "Our search and selection service connects you with highly skilled professionals, tailored to meet your industry's unique demands.",
    },
    details: [
      "Targeted recruitment for niche roles.",
      "Access to a vast network of skilled professionals.",
      "Thorough screening and evaluation process.",
      "Custom solutions for industry-specific hiring challenges.",
    ],
  },
};

// Function to dynamically update the hero section
function updateHeroSection(service) {
  const heroTitle = document.getElementById("hero-title");
  const heroText = document.getElementById("hero-text");
  const heroSlider = document.getElementById("hero-slider");

  // Get the selected service data
  const data = serviceData[service];
  console.log(data);

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
    figure.style.setProperty("--width", "500");
    figure.style.setProperty("--height", "475");

    const img = document.createElement("img");
    img.src = image;
    img.alt = "Hero Banner";
    img.width = 500;
    img.height = 475;
    img.classList.add("img-cover");

    figure.appendChild(img);
    li.appendChild(figure);
    heroSlider.appendChild(li);
  });
}

function updateFeaturesSection(service) {
  const featureSubtitle = document.getElementById("feature-subtitle");
  const featureTitle = document.getElementById("feature-title");
  const featureText = document.getElementById("feature-text");

  // Get the selected service data
  const data = serviceData[service];

  // Update feature subtitle, title, and text
  featureSubtitle.textContent = data.features.subtitle;
  featureTitle.textContent = data.features.title;
  featureText.textContent = data.features.text;
}

function updateProjectSection(service) {
  // Get the selected service data
  const data = serviceData[service];

  // Find the existing elements in the HTML
  const titleElement = document.querySelector("#projectDetails .section-title");
  const descriptionElement = document.querySelector(
    "#projectDetails .section-description"
  );
  const detailsListElement = document.querySelector(
    "#projectDetails .details-list"
  );

  // Update the section title
  titleElement.textContent = data.title;

  // Update the description
  descriptionElement.textContent = data.text;

  // Clear the existing list items
  detailsListElement.innerHTML = "";

  // Add detailed information (example: bullet points for benefits or features)
  data.details.forEach((feature) => {
    const li = document.createElement("li");
    li.textContent = feature;
    detailsListElement.appendChild(li);
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
  updateFeaturesSection(service);
  updateProjectSection(service);

  fetch("footer.html")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Failed to load footer.html");
      }
      return response.text();
    })
    .then((data) => {
      document.querySelector("#footer-placeholder").innerHTML = data;
    })
    .catch((error) => console.error("Error including footer:", error));
});

/*ADD Event listener on multiple elements*/

const addEventOnElements = function (elements, eventType, callback) {
  for (let i = 0, len = elements.length; i < len; i++) {
    elements[i].addEventListener(eventType, callback);
  }
};

/*NAVBAR TOGGLE FOR MOBILE */

const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const overlay = document.querySelector("[data-overlay]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
  document.body.classList.toggle("nav-active");
};

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
});

/**SLIDER */

const sliders = document.querySelectorAll("[data-slider]");

const initSlider = function (currentSlider) {
  const sliderContainer = currentSlider.querySelector(
    "[data-slider-container]"
  );
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
  };
  sliderNextBtn.addEventListener("click", slideNext);

  const slidePrev = function () {
    const slideStart = currentSlidePos <= 0;

    if (slideStart) {
      currentSlidePos = sliderContainer.children.length - 1;
    } else {
      currentSlidePos--;
    }

    moveSliderItem();
  };
  sliderPrevBtn.addEventListener("click", slidePrev);

  // Hide buttons if there are not enough slides
  const hideButtonsIfNeeded = function () {
    if (sliderContainer.children.length <= 1) {
      sliderNextBtn.style.display = "none";
      sliderPrevBtn.style.display = "none";
    }
  };

  // Initial setup
  moveSliderItem();
  hideButtonsIfNeeded();
};

for (let i = 0, len = sliders.length; i < len; i++) {
  initSlider(sliders[i]);
}
