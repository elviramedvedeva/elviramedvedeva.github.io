// Резюме Эльвиры Медведевой - основной функционал
document.addEventListener('DOMContentLoaded', function() {
  console.log('Резюме Эльвиры Медведевой загружено 🚀');
  
  // Переключение темы
  const themeToggle = document.getElementById('themeToggle');
  const themeIcon = themeToggle.querySelector('.theme-icon');
  
  // Проверяем сохранённую тему
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

  // Плавное появление элементов при скролле
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

  // Наблюдаем за всеми секциями
  document.querySelectorAll('.content-section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(section);
  });

  // Подсветка активного пункта навигации
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

  // Анимация для карточек навыков
  const skillCards = document.querySelectorAll('.skill-category');
  skillCards.forEach((card, index) => {
    card.style.animationDelay = `${index * 0.1}s`;
  });

  // Обработчик для кнопки скачивания резюме
  const downloadBtn = document.querySelector('a[download]');
  if (downloadBtn) {
    downloadBtn.addEventListener('click', function(e) {
      console.log('Скачивание резюме...');
      // Здесь можно добавить аналитику
    });
  }

  // Динамическое обновление года в футере
  const copyrightElement = document.querySelector('.footer-copyright');
  if (copyrightElement) {
    const currentYear = new Date().getFullYear();
    copyrightElement.textContent = `© ${currentYear} Эльвира Медведева`;
  }

  // Трекинг кликов по соцсетям
  const socialLinks = document.querySelectorAll('a[href*="linkedin"], a[href*="github"]');
  socialLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      console.log(`Переход на: ${this.href}`);
    });
  });

  // Интерактивность для инструментов
  const toolItems = document.querySelectorAll('.skill-list li[data-tool]');
  toolItems.forEach(item => {
    item.addEventListener('click', function() {
      const tool = this.getAttribute('data-tool');
      const company = this.getAttribute('data-company');
      console.log(`Инструмент: ${tool}, Компания: ${company}`);
    });
  });

  // Интерактивность для платформ тестирования
  const platformItems = document.querySelectorAll('.platform-item');
  platformItems.forEach(item => {
    item.addEventListener('click', function() {
      const platform = this.querySelector('.platform-name').textContent;
      console.log(`Платформа тестирования: ${platform}`);
    });
  });
});

// Современная альтернатива для аналитики при уходе со страницы
document.addEventListener('visibilitychange', function() {
  if (document.visibilityState === 'hidden') {
    console.log('Пользователь уходит со страницы');
  }
});

// Утилиты
function copyToClipboard(text) {
  navigator.clipboard.writeText(text).then(function() {
    console.log('Текст скопирован: ' + text);
  }).catch(function(err) {
    console.error('Ошибка копирования: ', err);
  });
}