// Elvira Medvedeva Resume - main functionality
document.addEventListener('DOMContentLoaded', function() {
  console.log('Elvira Medvedeva Resume loaded 🚀');
  
  // Theme toggle
  const themeToggle = document.getElementById('themeToggle');
  const themeIcon = themeToggle.querySelector('.theme-icon');
  
  // Check saved theme
  if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-theme');
    themeIcon.textContent = '☀️';
  }

  themeToggle.addEventListener('click', function() {
    document.body.classList.toggle('dark-theme');
    
    if (document.body.classList.contains('dark-theme')) {
      localStorage.setItem('theme', 'dark');
      themeIcon.textContent = '☀️';
    } else {
      localStorage.setItem('theme', 'light');
      themeIcon.textContent = '🌙';
    }
  });

  // Language switcher
  const langButtons = document.querySelectorAll('.lang-btn');
  
  langButtons.forEach(btn => {
    btn.addEventListener('click', function() {
      const lang = this.dataset.lang;
      
      // Remove active class from all buttons
      langButtons.forEach(b => b.classList.remove('active'));
      // Add active class to clicked button
      this.classList.add('active');
      
      // Change page language
      changeLanguage(lang);
    });
  });

  // Smooth scroll appearance
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);

  // Observe all sections
  document.querySelectorAll('.content-section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(section);
  });

  // Navigation highlighting
  const sections = document.querySelectorAll('.content-section');
  const navLinks = document.querySelectorAll('.nav-link');

  function highlightNavLink() {
    let current = '';
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      
      if (scrollY >= (sectionTop - 200)) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  }

  window.addEventListener('scroll', highlightNavLink);

  // Skills cards animation
  const skillCards = document.querySelectorAll('.skill-category');
  skillCards.forEach((card, index) => {
    card.style.animationDelay = `${index * 0.1}s`;
  });

  // Resume download handler
  const downloadBtn = document.querySelector('a[download]');
  if (downloadBtn) {
    downloadBtn.addEventListener('click', function(e) {
      console.log('Downloading resume...');
    });
  }

  // Dynamic year update
  const copyrightElement = document.querySelector('.footer-copyright');
  if (copyrightElement) {
    const currentYear = new Date().getFullYear();
    copyrightElement.textContent = `© ${currentYear} Elvira Medvedeva`;
  }

  // Social links tracking
  const socialLinks = document.querySelectorAll('a[href*="linkedin"], a[href*="github"]');
  socialLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      console.log(`Redirecting to: ${this.href}`);
    });
  });

  // Tools interactivity
  const toolItems = document.querySelectorAll('.skill-list li[data-tool]');
  toolItems.forEach(item => {
    item.addEventListener('click', function() {
      const tool = this.getAttribute('data-tool');
      const company = this.getAttribute('data-company');
      console.log(`Tool: ${tool}, Company: ${company}`);
    });
  });

  // Testing platforms interactivity
  const platformItems = document.querySelectorAll('.platform-item');
  platformItems.forEach(item => {
    item.addEventListener('click', function() {
      const platform = this.querySelector('.platform-name').textContent;
      console.log(`Testing platform: ${platform}`);
    });
  });
});

// Language change function
function changeLanguage(lang) {
  if (lang === 'ru') {
    window.location.href = 'index_ru.html';
  } else {
    window.location.href = 'index.html';
  }
}

// Page visibility change for analytics
document.addEventListener('visibilitychange', function() {
  if (document.visibilityState === 'hidden') {
    console.log('User leaving the page');
  }
});

// Utilities
function copyToClipboard(text) {
  navigator.clipboard.writeText(text).then(function() {
    console.log('Text copied: ' + text);
  }).catch(function(err) {
    console.error('Copy error: ', err);
  });
}