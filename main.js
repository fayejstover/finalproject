// Page Navigation
const homePage = document.getElementById('home-page');
const playPage = document.getElementById('play-page');
const navLinks = document.querySelectorAll('.nav-link');

function navigateToPage(pageName) {
  if (pageName === 'home') {
    homePage.classList.add('active');
    playPage.classList.remove('active');
  } else {
    homePage.classList.remove('active');
    playPage.classList.add('active');
  }

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navigateToPage(link.getAttribute('data-page'));
  });
});

// CTA Button
document.getElementById("cta-email").addEventListener("click", () => {
  window.location.href = "mailto:fayejstover@gmail.com";
});

// Load home page by default
navigateToPage('home');


// CTA Email Button
const ctaButton = document.getElementById("cta-email");
ctaButton.addEventListener("click", () => {
  window.location.href = "mailto:fayejstover@gmail.com";
});
