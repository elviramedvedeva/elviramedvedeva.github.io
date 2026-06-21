document.addEventListener('DOMContentLoaded', () => {

  // ============================
  // 1. Theme Toggle (Light/Dark)
  // ============================

  const themeToggle = document.getElementById('themeToggle');
  const savedTheme = localStorage.getItem('theme');

  // Apply saved theme
  if (savedTheme === 'dark') {
    document.body.classList.add('dark-theme');
  }

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      document.body.classList.toggle('dark-theme');

      // Save theme
      if (document.body.classList.contains('dark-theme')) {
        localStorage.setItem('theme', 'dark');
      } else {
        localStorage.setItem('theme', 'light');
      }
    });
  }

  // ============================
  // 2. Mobile Menu Toggle
  // ============================

  const menuToggle = document.getElementById('menuToggle');
  const nav = document.querySelector('.main-nav');

  if (menuToggle && nav) {
    menuToggle.addEventListener('click', () => {
      nav.classList.toggle('open');
      menuToggle.classList.toggle('open');
    });

    // Close menu when clicking a link
    nav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        nav.classList.remove('open');
        menuToggle.classList.remove('open');
      });
    });
  }

  // ============================
  // 3. Scroll Reveal Animations
  // ============================

  const animatedElements = document.querySelectorAll(
    '.content-section, .project-card, .skill-category, .education-item, .experience-item, .highlight-card'
  );

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (!prefersReducedMotion && 'IntersectionObserver' in window) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });

    animatedElements.forEach(el => observer.observe(el));
  } else {
    // If animations disabled → show everything immediately
    animatedElements.forEach(el => el.classList.add('visible'));
  }

  // ============================
  // 4. Dropdown for CV
  // ============================

  const dropdownBtn = document.querySelector('.dropdown-btn');
  const dropdownMenu = document.querySelector('.dropdown-menu');

  if (dropdownBtn && dropdownMenu) {
    dropdownBtn.addEventListener('click', () => {
      dropdownMenu.classList.toggle('open');

      const expanded = dropdownMenu.classList.contains('open');
      dropdownBtn.setAttribute('aria-expanded', expanded);
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', (e) => {
      if (!dropdownMenu.contains(e.target) && !dropdownBtn.contains(e.target)) {
        dropdownMenu.classList.remove('open');
        dropdownBtn.setAttribute('aria-expanded', 'false');
      }
    });
  }

});
