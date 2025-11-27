// Language texts database
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

// Updated changeLanguage function
function changeLanguage(lang) {
  const content = document.querySelector('main');
  
  // Add fade-out animation
  content.style.opacity = '0';
  content.style.transform = 'translateY(20px)';
  
  setTimeout(() => {
    // Change all texts
    document.querySelectorAll('[data-translate]').forEach(element => {
      const key = element.getAttribute('data-translate');
      if (translations[lang][key]) {
        element.innerHTML = translations[lang][key];
      }
    });
    
    // Update HTML lang attribute
    document.documentElement.lang = lang;
    
    // Save language preference
    localStorage.setItem('language', lang);
    
    // Fade-in animation
    content.style.opacity = '1';
    content.style.transform = 'translateY(0)';
  }, 300);
}