// Основная функциональность для резюме
document.addEventListener('DOMContentLoaded', function() {
  console.log('Резюме Эльвиры Медведевой загружено 🚀');
  
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
      // Можно добавить аналитику здесь
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
      // Можно добавить Google Analytics или другую аналитику
      // gtag('event', 'social_click', { 'platform': this.textContent.trim() });
    });
  });

  // Трекинг скачивания PDF
  const pdfDownload = document.querySelector('a[download]');
  if (pdfDownload) {
    pdfDownload.addEventListener('click', function() {
      console.log('Скачивание резюме PDF');
      // gtag('event', 'download', { 'file_type': 'pdf' });
    });
  }
});

// Дополнительные утилиты
function copyToClipboard(text) {
  navigator.clipboard.writeText(text).then(function() {
    console.log('Текст скопирован: ' + text);
  }).catch(function(err) {
    console.error('Ошибка копирования: ', err);
  });
}