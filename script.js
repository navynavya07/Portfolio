function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }

// Function to check if an element is in viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
  
  // Function to add animation class
  function animateOnScroll() {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
      if (isInViewport(section)) {
        section.classList.add('section--visible');
      }
    });
  }
  
  // Event listener for scroll event
  window.addEventListener('scroll', animateOnScroll);
  
  // Initial call to animate elements already in view
  document.addEventListener('DOMContentLoaded', animateOnScroll);
  
    