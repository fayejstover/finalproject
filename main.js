// Page Navigation
const homePage = document.getElementById('home-page');
const playPage = document.getElementById('play-page');
const navLinks = document.querySelectorAll('.nav-link');

function navigateToPage(pageName) {
  if (pageName === 'home') {
    homePage.classList.add('active');
    playPage.classList.remove('active');
  } 
  else if (pageName === 'play') {
    homePage.classList.remove('active');
    playPage.classList.add('active');
  }

  // Scroll to top
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

navLinks.forEach(link => {
  link.addEventListener('click', function() {
    const targetPage = this.getAttribute('data-page');
    navigateToPage(targetPage);
  });
});

// CTA Email Button
const ctaButton = document.getElementById("cta-email");

ctaButton.addEventListener("click", () => {
  window.location.href = "mailto:fayejstover@gmail.com";
});


// Handle browser back/forward buttons
window.addEventListener('popstate', function(event) {
  if (event.state && event.state.page) {
    navigateToPage(event.state.page);
  }
});


navigateToPage('home');
