// Consolidated JavaScript code for product detail page
document.addEventListener('DOMContentLoaded', () => {
  // Fade in setup when page loads
  document.body.classList.add('loaded');

  // Fade in animation for sections
  const sections = document.querySelectorAll('.product-container, .image-gallery');

  sections.forEach(section => {
    section.classList.add('fade-in');
  });

  // Setup Intersection Observer for scroll animations
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.2 });

  sections.forEach(section => {
    observer.observe(section);
  });

  // Image Gallery Functionality
  const mainImage = document.querySelector('.main-image');
  const arrowLeft = document.querySelector('.arrow-left');
  const arrowRight = document.querySelector('.arrow-right');

  const images = ['1.jpg', '2.jpg', '3.jpg'];
  let currentImageIndex = 0;

  // Set initial image
  mainImage.src = `../assets/images/Product Detail Page/${images[currentImageIndex]}`;

  function updateImage(direction) {
    if (direction === 'next') {
      currentImageIndex = (currentImageIndex + 1) % images.length;
    } else {
      currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    }
    mainImage.src = `../assets/images/Product Detail Page/${images[currentImageIndex]}`;
    mainImage.alt = `Beige Blazer ${currentImageIndex + 1}`;
  }

  arrowLeft.addEventListener('click', (e) => {
    e.preventDefault();
    updateImage('prev');
  });

  arrowRight.addEventListener('click', (e) => {
    e.preventDefault();
    updateImage('next');
  });

  // Quantity Control
  const quantityInput = document.querySelector('.quantity-input');
  const minusBtn = document.querySelector('.minus');
  const plusBtn = document.querySelector('.plus');

  minusBtn.addEventListener('click', (e) => {
    e.preventDefault();
    let currentVal = parseInt(quantityInput.value);
    if (currentVal > 1) {
      quantityInput.value = currentVal - 1;
    }
  });

  plusBtn.addEventListener('click', (e) => {
    e.preventDefault();
    quantityInput.value = parseInt(quantityInput.value) + 1;
  });

  // Dummy buttons functionality
  document.querySelector('.add-to-cart').addEventListener('click', (e) => {
    e.preventDefault();
    alert('Added to cart! (Demo)');
  });

  document.querySelector('.order-now').addEventListener('click', (e) => {
    e.preventDefault();
    alert('Proceeding to order! (Demo)');
  });
});

// Move window load event outside DOMContentLoaded
window.addEventListener('load', () => {
  document.body.classList.add('loaded');
});