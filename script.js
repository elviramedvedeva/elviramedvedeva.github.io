// Language texts database (оставляем на случай если понадобится)
const translations = {
  en: {
    // Navigation
    'about': 'About Me',
    'skills': 'Skills', 
    'projects': 'Projects',
    'education': 'Education',
    'contact': 'Contact',
    
    // About section
    'aboutTitle': 'About Me',
    'aboutText': 'Beginner specialist in software testing. Highly motivated to develop in QA, ready to learn new technologies and methodologies. Possess analytical mindset, attention to detail and perseverance.',
    
    // Skills
    'skillsTitle': 'Skills & Technologies',
    'testing': 'QA & Testing',
    'tools': 'Tools',
    'technical': 'Technical Skills',
    'languages': 'Languages',
    
    // Career goal
    'careerGoal': '🔎 Seeking internship or junior QA position. Ready to learn, work in team and grow in software testing.',
    
    // Footer
    'availability': 'Availability: <strong>immediate</strong> | Format: <strong>full-time, office/hybrid/remote</strong>',
    'testedOn': '🧪 Tested on:'
  },
  ru: {
    // Navigation
    'about': 'О себе',
    'skills': 'Навыки',
    'projects': 'Проекты', 
    'education': 'Образование',
    'contact': 'Контакты',
    
    // About section
    'aboutTitle': 'О себе',
    'aboutText': 'Начинающий специалист в области тестирования программного обеспечения. Имею сильную мотивацию к развитию в QA, готова обучаться новым технологиям и методологиям. Обладаю аналитическим складом ума, внимательностью к деталям и усидчивостью.',
    
    // Skills
    'skillsTitle': 'Навыки и технологии',
    'testing': 'Тестирование',
    'tools': 'Инструменты',
    'technical': 'Технические навыки',
    'languages': 'Языки',
    
    // Career goal
    'careerGoal': '🔎 Ищу стажировку или junior-позицию в QA. Готова к обучению, командной работе и развитию в сфере тестирования.',
    
    // Footer
    'availability': 'Готовность к работе: <strong>немедленная</strong> | Формат: <strong>полный день, офис/гибрид/удалённо</strong>',
    'testedOn': '🧪 Протестировано на:'
  }
};

// Theme toggle functionality
document.addEventListener('DOMContentLoaded', function() {
  const themeToggle = document.getElementById('themeToggle');
  const themeIcon = themeToggle.querySelector('.theme-icon');
  
  // Check for saved theme or prefer color scheme
  const savedTheme = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
    document.body.classList.add('dark-theme');
    themeIcon.textContent = '☀️';
  }
  
  // Theme toggle event
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
  
  // Smooth scrolling for navigation links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
  
  // Add intersection observer for fade-in animations
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
  
  // Observe all content sections
  document.querySelectorAll('.content-section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(section);
  });
  
  // Tool hover effects
  document.querySelectorAll('[data-tool]').forEach(tool => {
    tool.addEventListener('mouseenter', function() {
      this.style.transform = 'translateX(8px)';
      this.style.color = 'var(--primary-color)';
    });
    
    tool.addEventListener('mouseleave', function() {
      this.style.transform = 'translateX(0)';
      this.style.color = '';
    });
  });
});

// Mobile menu toggle
const menuToggle = document.getElementById('menuToggle');
const mainNav = document.querySelector('.main-nav');

if (menuToggle && mainNav) {
  menuToggle.addEventListener('click', function(e) {
    e.stopPropagation();
    this.classList.toggle('active');
    mainNav.classList.toggle('active');
  });

  // Закрывать меню при клике на ссылку
  const navLinks = mainNav.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      menuToggle.classList.remove('active');
      mainNav.classList.remove('active');
    });
  });

  // Закрывать меню при клике вне его
  document.addEventListener('click', function(event) {
    if (!mainNav.contains(event.target) && !menuToggle.contains(event.target)) {
      menuToggle.classList.remove('active');
      mainNav.classList.remove('active');
    }
  });
}