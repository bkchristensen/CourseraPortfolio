// Contact form validation
document.addEventListener('DOMContentLoaded', function() {
  const contactForm = document.querySelector('section#contact form');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      const name = contactForm.querySelector('#name');
      const email = contactForm.querySelector('#email');
      const message = contactForm.querySelector('#message');
      let valid = true;
      let errorMsg = '';
      if (!name.value.trim()) {
        valid = false;
        errorMsg += 'Please enter your name.\n';
      }
      if (!email.value.trim()) {
        valid = false;
        errorMsg += 'Please enter your email.\n';
      } else if (!/^\S+@\S+\.\S+$/.test(email.value.trim())) {
        valid = false;
        errorMsg += 'Please enter a valid email address.\n';
      }
      if (!message.value.trim()) {
        valid = false;
        errorMsg += 'Please enter your message.';
      }
      if (!valid) {
        e.preventDefault();
        alert(errorMsg);
      }
    });
  }
});
// Lightbox for project images
document.addEventListener('DOMContentLoaded', function() {
  const modal = document.getElementById('lightbox-modal');
  const modalImg = document.getElementById('lightbox-img');
  const closeBtn = document.getElementById('lightbox-close');
  document.querySelectorAll('.project-thumb[data-large-img]').forEach(img => {
    img.addEventListener('click', function() {
      const largeImg = this.getAttribute('data-large-img');
      if (largeImg) {
        modalImg.src = largeImg;
        modal.style.display = 'flex';
      }
    });
  });
  function closeModal() {
    modal.style.display = 'none';
    modalImg.src = '';
  }
  if (closeBtn) closeBtn.addEventListener('click', closeModal);
  if (modal) modal.addEventListener('click', function(e) {
    if (e.target === modal) closeModal();
  });
  document.addEventListener('keydown', function(e) {
    if (modal.style.display === 'flex' && (e.key === 'Escape' || e.key === 'Esc')) {
      closeModal();
    }
  });
});
// Combo box filter for Projects section
document.addEventListener('DOMContentLoaded', function() {
  const select = document.getElementById('projects-category-filter');
  if (select) {
    select.addEventListener('change', function() {
      filterProjects(this.value);
    });
    // Show all by default
    filterProjects('all');
  }
});
// Filter feature for the Projects section
function filterProjects(category) {
  const cards = document.querySelectorAll('.projects-cards article');
  cards.forEach(card => {
    const cardCategories = (card.getAttribute('data-category') || '').split(/\s+/);
    if (!category || category === 'all' || cardCategories.includes(category)) {
      card.style.display = '';
    } else {
      card.style.display = 'none';
    }
  });
}

// Optional: Add event listeners for filter buttons (if you add them in HTML)
document.addEventListener('DOMContentLoaded', function() {
  const filterBar = document.getElementById('projects-filter');
  if (filterBar) {
    filterBar.addEventListener('click', function(e) {
      if (e.target.matches('button[data-category]')) {
        const category = e.target.getAttribute('data-category');
        filterProjects(category);
      }
    });
  }
});
// Smooth scrolling for in-page navigation links
document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('nav#main-nav a[href^="#"]').forEach(function(link) {
    link.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href').slice(1);
      const target = document.getElementById(targetId) || document.getElementById(targetId + '-me');
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
        // Optionally close the menu on mobile
        const nav = document.getElementById('main-nav');
        if (nav.classList.contains('open')) {
          nav.classList.remove('open');
          document.getElementById('hamburger-menu').setAttribute('aria-expanded', false);
        }
      }
    });
  });
});
// Hamburger menu toggle for mobile navigation
function toggleMenu() {
  const nav = document.getElementById('main-nav');
  const hamburger = document.getElementById('hamburger-menu');
  nav.classList.toggle('open');
  const expanded = nav.classList.contains('open');
  hamburger.setAttribute('aria-expanded', expanded);
}

document.addEventListener('DOMContentLoaded', function() {
  const hamburger = document.getElementById('hamburger-menu');
  if (hamburger) {
    hamburger.addEventListener('click', toggleMenu);
    hamburger.addEventListener('keydown', function(e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        toggleMenu();
      }
    });
  }
});
// script.js
// Add your custom JavaScript here. This file is linked in index.html.
