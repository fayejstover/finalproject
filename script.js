// Theme Toggle Functionality
const themeToggle = document.querySelector('.theme-toggle');
const htmlElement = document.documentElement;

// Check for saved theme preference or default to 'light'
const currentTheme = localStorage.getItem('theme') || 'light';

// Set initial theme
htmlElement.setAttribute('data-theme', currentTheme);

// Theme toggle event listener
themeToggle.addEventListener('click', () => {
    const currentTheme = htmlElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    
    htmlElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
});

// Check for reduced motion preference
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

if (prefersReducedMotion.matches) {
    document.documentElement.style.setProperty('--transition-speed', '0.01ms');
}

// Listen for changes in reduced motion preference
prefersReducedMotion.addEventListener('change', (e) => {
    if (e.matches) {
        document.documentElement.style.setProperty('--transition-speed', '0.01ms');
    } else {
        document.documentElement.style.setProperty('--transition-speed', '0.3s');
    }
});

// Smooth scroll for anchor links (respecting reduced motion)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
            target.scrollIntoView({
                behavior: prefersReducedMotion.matches ? 'auto' : 'smooth'
            });
        }
    });
});
