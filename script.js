// Typing Animation for Logo(header section)
gsap.fromTo(
    ".logo span",
    { opacity: 0, y: 10 },
    { opacity: 1, y: 0, stagger: 0.1, duration: 0.5, ease: "power2.out" }
  );
  
  // Smooth Scroll for Navigation Links
  document.querySelectorAll('.nav a').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute('href'));
      target.scrollIntoView({ behavior: 'smooth' });
    });
  });
  
  // Hamburger Menu Toggle
  const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('nav-menu');
  
  hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('open');
    hamburger.classList.toggle('active');
  });
  

//   Hero Section
// Smooth fade-in animation
gsap.fromTo(
    ".hero-title",
    { opacity: 0, y: 50 },
    { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
  );
  
  gsap.fromTo(
    ".hero-subtitle",
    { opacity: 0, y: 50 },
    { opacity: 1, y: 0, duration: 1, delay: 0.5, ease: "power2.out" }
  );
  
// feature section 
// Scroll Animation for Feature Cards
const featureCards = document.querySelectorAll(".feature-card");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("fade-in");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1 }
);

featureCards.forEach((card) => observer.observe(card));


// showcase section 
// Text Animation
document.addEventListener("DOMContentLoaded", () => {
    const textParts = document.querySelectorAll(".text-part");
    textParts.forEach((part, index) => {
      setTimeout(() => part.classList.add("fade-in"), index * 200);
    });
  });
  
  // Animated Chart (using Chart.js)
  const ctx = document.getElementById("animatedChart").getContext("2d");
  const animatedChart = new Chart(ctx, {
    type: "bar",
    data: {
      labels: ["A", "B", "C", "D"],
      datasets: [
        {
          label: "Demo Data",
          data: [10, 20, 15, 30],
          backgroundColor: ["#94C5CC", "#A1A6B4", "#B4D2E7", "#94C5CC"],
        },
      ],
    },
    options: {
      animation: {
        duration: 2000,
        easing: "easeInOutBounce",
      },
    },
  });
  

// contact form section 
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById('contact-form');
  const successMessage = document.getElementById('success-message');

  form.addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent form from submitting immediately

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Simple validation check
    if (name && email && message) {
      // Success message animation
      successMessage.style.display = 'block';
      successMessage.style.opacity = 0;
      successMessage.style.transform = 'translateY(20px)';
      gsap.to(successMessage, {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 0.5
      });

      // Reset form after submission
      form.reset();
    } else {
      alert("Please fill out all fields.");
    }
  });
});

// footer section 
// Get the Back to Top button element
const backToTopButton = document.getElementById('back-to-top');

// Show the "Back to Top" button when user scrolls down 100px from the top of the document
window.onscroll = function() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    backToTopButton.style.display = "block";
  } else {
    backToTopButton.style.display = "none";
  }
};
