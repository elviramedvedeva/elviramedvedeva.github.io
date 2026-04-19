document.addEventListener('DOMContentLoaded', () => {
  // Theme toggle
  const themeToggle = document.getElementById('themeToggle');
  const themeIcon = themeToggle?.querySelector('.theme-icon');
  const savedTheme = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
    document.body.classList.add('dark-theme');
    if (themeIcon) themeIcon.textContent = '☀️';
  }
  themeToggle?.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    const isDark = document.body.classList.contains('dark-theme');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    if (themeIcon) themeIcon.textContent = isDark ? '☀️' : '🌙';
  });

  // Mobile menu
  const menuToggle = document.getElementById('menuToggle');
  const mainNav = document.querySelector('.main-nav');
  if (menuToggle && mainNav) {
    menuToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      menuToggle.classList.toggle('active');
      mainNav.classList.toggle('active');
    });
    mainNav.querySelectorAll('.nav-link').forEach(link => link.addEventListener('click', () => {
      menuToggle.classList.remove('active');
      mainNav.classList.remove('active');
    }));
    document.addEventListener('click', (e) => {
      if (!mainNav.contains(e.target) && !menuToggle.contains(e.target)) {
        menuToggle.classList.remove('active');
        mainNav.classList.remove('active');
      }
    });
  }

  // Smooth scroll
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      e.preventDefault();
      const target = document.querySelector(anchor.getAttribute('href'));
      target?.scrollIntoView({ behavior: 'smooth' });
    });
  });

  // Animation observer
  const animatedElements = document.querySelectorAll('.content-section, .project-card, .skill-category, .education-item, .experience-item, .highlight-item');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add('visible'); });
  }, { threshold: 0.1, rootMargin: '0px 0px -20px 0px' });
  animatedElements.forEach(el => observer.observe(el));
});