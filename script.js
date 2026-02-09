// Language translations
const translations = {
  uk: {
    nav: {
      home: 'Головна',
      projects: 'Проекти',
      strengths: 'Сильні сторони'
    },
    home: {
      subtitle: 'Freelance Developer & Tech Innovator',
      description: 'Створюю телеграм-боти, веб-додатки та автоматизацію. Спеціалізуюся на безпеці, інтеграціях та нестандартних рішеннях.',
      techStack: 'Tech Stack',
      contacts: 'Контакти',
      status: 'Доступний для проектів'
    },
    projects: {
      title: 'Мої проекти',
      subtitle: 'Портфоліо розробок',
      comingSoonTitle: 'Скоро тут буде портфоліо',
      comingSoonText: 'Наразі готую детальний опис проектів. Перегляньте мій GitHub для поточних розробок.',
      viewGithub: 'Переглянути GitHub'
    },
    strengths: {
      title: 'Сильні сторони',
      subtitle: 'Профіль та спеціалізація',
      profileBadges: {
        leader: 'Соціальний лідер',
        praktik: 'Практик-адаптив',
        organizer: 'Організатор'
      },
      coreTitle: 'Ключові якості',
      coreStrengths: {
        ideator: {
          title: 'Ідейний',
          desc: 'Генератор інноваційних рішень та нестандартних підходів'
        },
        networker: {
          title: 'Мережевик',
          desc: 'Майстер комунікації та домовленостей'
        },
        analyst: {
          title: 'Аналітик',
          desc: 'Багатофакторний аналіз проектів'
        }
      },
      greenFlagsTitle: 'Що мені підходить',
      greenFlags: [
        'Висока динаміка роботи - швидка реакція на інциденти та зміни',
        'Багато комунікації - презентації, переговори, продаж ідей',
        'Поєднання аналізу та дії - не просто звіт, а впровадження',
        'Елемент соціальної інженерії або впливу',
        'Чіткий видимий результат - завершені проекти'
      ],
      bestMatchTitle: 'Топ-3 ролі для мене',
      bestMatch: [
        {
          title: 'Cybersecurity Consultant',
          desc: 'Комунікація + ІТ + переконання. Pre-sales та консалтинг.'
        },
        {
          title: 'Incident Response Manager',
          desc: 'Швидка адаптація + структура + лідерство в кризах.'
        },
        {
          title: 'IT Business Analyst',
          desc: 'Аналітика + мережування + презентація бізнес-рішень.'
        }
      ]
    }
  },
  en: {
    nav: {
      home: 'Home',
      projects: 'Projects',
      strengths: 'Strengths'
    },
    home: {
      subtitle: 'Freelance Developer & Tech Innovator',
      description: 'Building Telegram bots, web apps, and automation. Specialized in security, integrations, and non-standard solutions.',
      techStack: 'Tech Stack',
      contacts: 'Contacts',
      status: 'Available for projects'
    },
    projects: {
      title: 'My Projects',
      subtitle: 'Development Portfolio',
      comingSoonTitle: 'Portfolio coming soon',
      comingSoonText: 'Currently preparing detailed project descriptions. Check my GitHub for current work.',
      viewGithub: 'View GitHub'
    },
    strengths: {
      title: 'Strengths',
      subtitle: 'Profile and Specialization',
      profileBadges: {
        leader: 'Social Leader',
        praktik: 'Adaptive Practitioner',
        organizer: 'Organizer'
      },
      coreTitle: 'Core Qualities',
      coreStrengths: {
        ideator: {
          title: 'Ideator',
          desc: 'Generator of innovative solutions and non-standard approaches'
        },
        networker: {
          title: 'Networker',
          desc: 'Master of communication and negotiations'
        },
        analyst: {
          title: 'Analyst',
          desc: 'Multi-factor project analysis'
        }
      },
      greenFlagsTitle: 'What suits me',
      greenFlags: [
        'High work dynamics - fast response to incidents and changes',
        'Lots of communication - presentations, negotiations, selling ideas',
        'Combination of analysis and action - not just reports, but implementation',
        'Element of social engineering or influence',
        'Clear visible results - completed projects'
      ],
      bestMatchTitle: 'Top 3 roles for me',
      bestMatch: [
        {
          title: 'Cybersecurity Consultant',
          desc: 'Communication + IT + persuasion. Pre-sales and consulting.'
        },
        {
          title: 'Incident Response Manager',
          desc: 'Fast adaptation + structure + crisis leadership.'
        },
        {
          title: 'IT Business Analyst',
          desc: 'Analytics + networking + presenting business solutions.'
        }
      ]
    }
  }
};

// Get current language from localStorage or default to Ukrainian
function getCurrentLanguage() {
  return localStorage.getItem('language') || 'uk';
}

// Set language
function setLanguage(lang) {
  localStorage.setItem('language', lang);
  updateLanguageUI(lang);
  updateContent(lang);
}

// Update language UI (active button)
function updateLanguageUI(lang) {
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
}

// Update content based on language
function updateContent(lang) {
  const t = translations[lang];
  const page = document.body.dataset.page;

  // Update navigation
  const navLinks = document.querySelectorAll('.nav-link');
  if (navLinks[0]) navLinks[0].textContent = t.nav.home;
  if (navLinks[1]) navLinks[1].textContent = t.nav.projects;
  if (navLinks[2]) navLinks[2].textContent = t.nav.strengths;

  // Page-specific updates
  if (page === 'home') {
    updateHomePage(t.home);
  } else if (page === 'projects') {
    updateProjectsPage(t.projects);
  } else if (page === 'strengths') {
    updateStrengthsPage(t.strengths);
  }
}

// Update home page content
function updateHomePage(t) {
  const subtitle = document.querySelector('.subtitle');
  const description = document.querySelector('.description-text');
  const techStackTitle = document.querySelector('.skills .section-title');
  const contactsTitle = document.querySelector('.contacts').previousElementSibling;
  const status = document.querySelector('.status');

  if (subtitle) subtitle.innerHTML = `<i data-lucide="code-2" width="18" height="18"></i>${t.subtitle}`;
  if (description) description.textContent = t.description;
  if (techStackTitle) techStackTitle.innerHTML = `<i data-lucide="zap" width="16" height="16" style="color: #ffd700;"></i>${t.techStack}`;
  if (contactsTitle) contactsTitle.textContent = t.contacts;
  if (status) status.innerHTML = `<div class="status-dot"></div>${t.status}`;

  // Reinitialize Lucide icons
  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }
}

// Update projects page content
function updateProjectsPage(t) {
  const pageTitle = document.querySelector('.header .name');
  const subtitle = document.querySelector('.subtitle');
  const comingSoonTitle = document.querySelector('.coming-soon-title');
  const comingSoonText = document.querySelector('.coming-soon-text');
  const githubBtn = document.querySelector('.contact-btn-github');

  if (pageTitle) pageTitle.textContent = t.title;
  if (subtitle) subtitle.innerHTML = `<i data-lucide="code-2" width="18" height="18"></i>${t.subtitle}`;
  if (comingSoonTitle) comingSoonTitle.textContent = t.comingSoonTitle;
  if (comingSoonText) comingSoonText.textContent = t.comingSoonText;
  if (githubBtn) githubBtn.innerHTML = `<i data-lucide="github" width="20" height="20"></i>${t.viewGithub}`;

  // Reinitialize Lucide icons
  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }
}

// Update strengths page content
function updateStrengthsPage(t) {
  const pageTitle = document.querySelector('.header .name');
  const subtitle = document.querySelector('.subtitle');

  if (pageTitle) pageTitle.textContent = t.title;
  if (subtitle) subtitle.innerHTML = `<i data-lucide="sparkles" width="18" height="18"></i>${t.subtitle}`;

  // Profile badges
  const badges = document.querySelectorAll('.profile-badge');
  if (badges[0]) badges[0].innerHTML = `<i data-lucide="users" width="20" height="20"></i>${t.profileBadges.leader}`;
  if (badges[1]) badges[1].innerHTML = `<i data-lucide="zap" width="20" height="20"></i>${t.profileBadges.praktik}`;
  if (badges[2]) badges[2].innerHTML = `<i data-lucide="settings" width="20" height="20"></i>${t.profileBadges.organizer}`;

  // Core strengths title
  const coreTitle = document.querySelector('.section-title');
  if (coreTitle) coreTitle.innerHTML = `<i data-lucide="star" width="16" height="16" style="color: #ffd700;"></i>${t.coreTitle}`;

  // Core strengths cards
  const strengthCards = document.querySelectorAll('.strength-card');
  const strengthData = [t.coreStrengths.ideator, t.coreStrengths.networker, t.coreStrengths.analyst];
  strengthCards.forEach((card, i) => {
    const title = card.querySelector('.strength-title');
    const desc = card.querySelector('.strength-desc');
    if (title) title.textContent = strengthData[i].title;
    if (desc) desc.textContent = strengthData[i].desc;
  });

  // Green flags
  const greenFlagsTitle = document.querySelector('.flags-section .section-title');
  if (greenFlagsTitle) greenFlagsTitle.innerHTML = `<i data-lucide="check-circle" width="16" height="16" style="color: #00ff7f;"></i>${t.greenFlagsTitle}`;

  const flagTitle = document.querySelector('.flag-title');
  if (flagTitle) flagTitle.innerHTML = `<i data-lucide="check-circle" width="20" height="20"></i>${t.greenFlagsTitle}`;

  const flagList = document.querySelector('.flag-list');
  if (flagList) {
    flagList.innerHTML = t.greenFlags.map(flag => `<li>${flag}</li>`).join('');
  }

  // Best match roles
  const rolesTitle = document.querySelector('.roles-section .section-title');
  if (rolesTitle) rolesTitle.innerHTML = `<i data-lucide="target" width="16" height="16" style="color: #ffd700;"></i>${t.bestMatchTitle}`;

  const roleCards = document.querySelectorAll('.role-card');
  roleCards.forEach((card, i) => {
    const title = card.querySelector('.role-title');
    const desc = card.querySelector('.role-desc');
    if (title) title.textContent = t.bestMatch[i].title;
    if (desc) desc.textContent = t.bestMatch[i].desc;
  });

  // Reinitialize Lucide icons
  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
  // Initialize Lucide icons
  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }

  // Set up language switcher
  const currentLang = getCurrentLanguage();
  updateLanguageUI(currentLang);
  updateContent(currentLang);

  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      setLanguage(btn.dataset.lang);
    });
  });

  // Mouse parallax effect
  document.addEventListener('mousemove', (e) => {
    const grid = document.querySelector('.bg-grid');
    if (grid) {
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;
      grid.style.transform = `translate(${x}px, ${y}px)`;
    }
  });

  // Glitch effect on name
  const nameElement = document.querySelector('.name');
  if (nameElement && document.body.dataset.page === 'home') {
    setInterval(() => {
      nameElement.classList.add('glitch');
      setTimeout(() => {
        nameElement.classList.remove('glitch');
      }, 200);
    }, 8000);
  }

  // Active navigation link
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });
});