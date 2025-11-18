// Page Navigation
const homePage = document.getElementById('home-page');
const playPage = document.getElementById('play-page');
const navLinks = document.querySelectorAll('.nav-link');

function navigateToPage(pageName) {
  if (pageName === 'home') {
    homePage.classList.add('active');
    playPage.classList.remove('active');
  } else if (pageName === 'play') {
    homePage.classList.remove('active');
    playPage.classList.add('active');
  }
  // Scroll to top
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Add click event listeners to all navigation links
navLinks.forEach(link => {
  link.addEventListener('click', function() {
    const targetPage = this.getAttribute('data-page');
    navigateToPage(targetPage);
  });
});

// CTA Button - Email on Home Page
const ctaEmailButton = document.getElementById('cta-email');
if (ctaEmailButton) {
  ctaEmailButton.addEventListener('click', function() {
    window.location.href = "mailto:fayejstover@gmail.com?subject=Let's build something together";
  });
}

// CTA Button - More on Play Page
const ctaMoreButton = document.getElementById('cta-more');
if (ctaMoreButton) {
  ctaMoreButton.addEventListener('click', function() {
    window.location.href = "mailto:fayejstover@gmail.com?subject=Let's collaborate";
  });
}

// Handle browser back/forward buttons
window.addEventListener('popstate', function(event) {
  if (event.state && event.state.page) {
    navigateToPage(event.state.page);
  }
});

// Initialize with home page
navigateToPage('home');
