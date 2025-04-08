
// Initialize Feather Icons
document.addEventListener('DOMContentLoaded', function() {
  // Initialize feather icons
  feather.replace();

  // Set current year in footer
  document.getElementById('currentYear').innerText = new Date().getFullYear();

  // Nav menu toggle for mobile
  const menuToggle = document.getElementById('menuToggle');
  const mobileMenu = document.getElementById('mobileMenu');
  const menuIcon = menuToggle.querySelector('[data-feather="menu"]');
  const closeIcon = menuToggle.querySelector('[data-feather="x"]');

  menuToggle.addEventListener('click', function() {
    mobileMenu.classList.toggle('active');
    menuIcon.classList.toggle('hidden');
    closeIcon.classList.toggle('hidden');
    feather.replace(); // Re-initialize feather icons after showing/hiding
  });

  // Navbar scroll effect
  const navbar = document.getElementById('navbar');
  let scrollPosition = 0;

  window.addEventListener('scroll', function() {
    scrollPosition = window.scrollY;

    if (scrollPosition > 50) {
      navbar.classList.remove('nav-transparent');
      navbar.classList.add('nav-solid');
    } else {
      navbar.classList.add('nav-transparent');
      navbar.classList.remove('nav-solid');
    }
  });

  // Scroll to top button
  const scrollToTopButton = document.getElementById('scrollToTop');

  window.addEventListener('scroll', function() {
    if (window.scrollY > 300) {
      scrollToTopButton.classList.add('active');
    } else {
      scrollToTopButton.classList.remove('active');
    }
  });

  scrollToTopButton.addEventListener('click', function() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  // Reveal animations on scroll
  const revealElements = document.querySelectorAll('.reveal');

  const revealOnScroll = function() {
    for (let i = 0; i < revealElements.length; i++) {
      const windowHeight = window.innerHeight;
      const elementTop = revealElements[i].getBoundingClientRect().top;
      const elementVisible = 150;
      
      if (elementTop < windowHeight - elementVisible) {
        // Add delay if specified
        const delay = revealElements[i].getAttribute('data-delay');
        if (delay) {
          setTimeout(() => {
            revealElements[i].classList.add('active');
          }, parseInt(delay));
        } else {
          revealElements[i].classList.add('active');
        }
      }
    }
  };

  window.addEventListener('scroll', revealOnScroll);
  window.addEventListener('load', revealOnScroll);

  // Contact form submission
  const contactForm = document.getElementById('contactForm');
  const toast = document.getElementById('toast');
  const toastClose = document.querySelector('.toast-close');

  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Get form values
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const phone = document.getElementById('phone').value;
      const message = document.getElementById('message').value;
      
      // Here you would typically send the form data to a server
      // For demo purposes, we'll just show the success toast
      console.log('Form submitted:', { name, email, phone, message });
      
      // Show success toast
      toast.classList.add('active');
      
      // Hide toast after 5 seconds
      setTimeout(() => {
        toast.classList.remove('active');
      }, 5000);
      
      // Reset form
      contactForm.reset();
    });
  }

  // Close toast on click
  if (toastClose) {
    toastClose.addEventListener('click', function() {
      toast.classList.remove('active');
    });
  }

  // Smooth scrolling for navigation links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        // If mobile menu is open, close it
        if (mobileMenu.classList.contains('active')) {
          mobileMenu.classList.remove('active');
          menuIcon.classList.remove('hidden');
          closeIcon.classList.add('hidden');
          feather.replace();
        }
        
        // Scroll to the target
        target.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });
});

const bgImages = [
  "https://img.freepik.com/free-photo/various-pills-wooden-spoon_23-2147983103.jpg",
  "https://img.freepik.com/free-photo/medicine-capsules-global-health-with-geometric-pattern-digital-remix_53876-126742.jpg?t=st=1744100736~exp=1744104336~hmac=a56c5119c2ca46a79fe117c28ddd1823838aededd9136ea1717cf85aac1d0935&w=1380",
  "https://img.freepik.com/free-vector/white-background-with-blue-tech-hexagon_1017-19366.jpg?t=st=1744100483~exp=1744104083~hmac=865129b56f51b7432f50b654bc5d3a3dfda107fb12b4f165a063f4d1514fadd6&w=826",
];

let currentIndex = 0;
const bgElement = document.getElementById("bgOverlay");

function changeBackground() {
  bgElement.style.backgroundImage = `url('${bgImages[currentIndex]}')`;
  currentIndex = (currentIndex + 1) % bgImages.length;
}

changeBackground(); // initial load
setInterval(changeBackground, 2000); // change every 2 seconds


