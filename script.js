// ============================================================
// FixerHack site — i18n + terminal effects
// Nav labels stay static (english / terminal style); only prose is translated.
// ============================================================

const translations = {
  uk: {
    home: {
      subtitle: 'Security-minded Developer & Automation Engineer',
      description: 'Будую Telegram-боти, веб-сервіси та інструменти кібербезпеки: анти-фішинг, моніторинг загроз (OSINT), шифрування сесій і аналіз систем. Python, Swift, FastAPI.',
      contacts: 'Контакти',
      status: 'доступний для проектів'
    },
    projects: {
      subtitle: 'Інструменти безпеки, боти та сервіси'
    },
    strengths: {
      subtitle: 'Профіль та спеціалізація',
      profileBadges: { leader: 'Соціальний лідер', praktik: 'Практик-адаптив', organizer: 'Організатор' },
      coreTitle: 'Ключові якості',
      coreStrengths: {
        ideator:   { title: 'Придумую рішення', desc: 'Люблю знаходити нестандартні способи вирішення проблем' },
        networker: { title: 'Легко спілкуюсь', desc: 'Можу домовитись з людьми та пояснити складні речі простими словами' },
        analyst:   { title: 'Аналізую ситуацію', desc: 'Дивлюсь на проблему з різних сторін перед тим, як приймати рішення' }
      },
      greenFlagsTitle: 'Мені підходить робота, де:',
      greenFlags: [
        'Швидкий темп - треба реагувати та приймати рішення на ходу',
        'Багато спілкування - презентації, обговорення, переговори',
        'Бачу результат - не просто аналіз, а реальне втілення ідей',
        'Можу впливати на людей та переконувати їх',
        'Проекти мають чітке завершення, а не тягнуться роками'
      ],
      bestMatchTitle: 'Які позиції мені найбільше пасують',
      bestMatch: [
        { title: 'Консультант з кібербезпеки', desc: 'Спілкування з клієнтами + технічні знання + вміння переконувати. Допомагаю компаніям захистити їхні системи.' },
        { title: 'Менеджер реагування на інциденти', desc: 'Швидко реагую на проблеми безпеки, організовую команду та веду розслідування. Робота в стресових ситуаціях.' },
        { title: 'ІТ бізнес-аналітик', desc: 'З\'єдную технічну частину з бізнесом. Аналізую потреби, шукаю рішення та презентую їх керівництву.' }
      ]
    }
  },
  en: {
    home: {
      subtitle: 'Security-minded Developer & Automation Engineer',
      description: 'Building Telegram bots, web services, and cybersecurity tooling: anti-phishing, OSINT threat monitoring, session encryption, and system analysis. Python, Swift, FastAPI.',
      contacts: 'Contacts',
      status: 'available for work'
    },
    projects: {
      subtitle: 'Security tooling, bots & services'
    },
    strengths: {
      subtitle: 'Profile and Specialization',
      profileBadges: { leader: 'Social Leader', praktik: 'Adaptive Practitioner', organizer: 'Organizer' },
      coreTitle: 'Core Qualities',
      coreStrengths: {
        ideator:   { title: 'Problem Solver', desc: 'I love finding creative solutions to challenges' },
        networker: { title: 'Communicator', desc: 'I can negotiate with people and explain complex things simply' },
        analyst:   { title: 'Strategic Thinker', desc: 'I look at problems from different angles before deciding' }
      },
      greenFlagsTitle: 'I thrive in work that:',
      greenFlags: [
        'Fast-paced - requires quick reactions and on-the-fly decisions',
        'Communication-heavy - presentations, discussions, negotiations',
        'Shows results - not just analysis, but real implementation',
        'Involves influencing and persuading people',
        'Has clear project completion, not endless maintenance'
      ],
      bestMatchTitle: 'Best roles for me',
      bestMatch: [
        { title: 'Cybersecurity Consultant', desc: 'Client communication + technical knowledge + persuasion. Helping companies protect their systems.' },
        { title: 'Incident Response Manager', desc: 'Quick response to security issues, team coordination, investigations. High-pressure environment work.' },
        { title: 'IT Business Analyst', desc: 'Bridge between tech and business. Analyze needs, find solutions, present them to leadership.' }
      ]
    }
  }
};

function getCurrentLanguage() { return localStorage.getItem('language') || 'uk'; }

function setLanguage(lang) {
  localStorage.setItem('language', lang);
  updateLanguageUI(lang);
  updateContent(lang);
}

function updateLanguageUI(lang) {
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
  document.documentElement.setAttribute('lang', lang);
}

function setText(sel, text) {
  const el = document.querySelector(sel);
  if (el) el.textContent = text;
}

function updateContent(lang) {
  const t = translations[lang];
  const page = document.body.dataset.page;
  if (page === 'home') updateHome(t.home);
  else if (page === 'projects') updateProjects(t.projects);
  else if (page === 'strengths') updateStrengths(t.strengths);
}

function updateHome(t) {
  setText('.i18n-subtitle', t.subtitle);
  setText('.description-text', t.description);
  setText('.i18n-contacts', t.contacts);
  setText('.i18n-status', t.status);
}

function updateProjects(t) {
  setText('.i18n-subtitle', t.subtitle);
}

function updateStrengths(t) {
  setText('.i18n-subtitle', t.subtitle);

  const badges = document.querySelectorAll('.profile-badge .i18n-badge');
  if (badges[0]) badges[0].textContent = t.profileBadges.leader;
  if (badges[1]) badges[1].textContent = t.profileBadges.praktik;
  if (badges[2]) badges[2].textContent = t.profileBadges.organizer;

  setText('.i18n-core-title', t.coreTitle);

  const cards = document.querySelectorAll('.strength-card');
  const data = [t.coreStrengths.ideator, t.coreStrengths.networker, t.coreStrengths.analyst];
  cards.forEach((card, i) => {
    if (!data[i]) return;
    const title = card.querySelector('.strength-title');
    const desc = card.querySelector('.strength-desc');
    if (title) title.textContent = data[i].title;
    if (desc) desc.textContent = data[i].desc;
  });

  setText('.i18n-flags-title', t.greenFlagsTitle);
  const flagTitleText = document.querySelector('.flag-title .i18n-flags-title-inline');
  if (flagTitleText) flagTitleText.textContent = t.greenFlagsTitle;
  const flagList = document.querySelector('.flag-list');
  if (flagList) flagList.innerHTML = t.greenFlags.map(f => `<li>${f}</li>`).join('');

  setText('.i18n-roles-title', t.bestMatchTitle);
  const roleCards = document.querySelectorAll('.role-card');
  roleCards.forEach((card, i) => {
    if (!t.bestMatch[i]) return;
    const title = card.querySelector('.role-title');
    const desc = card.querySelector('.role-desc');
    if (title) title.textContent = t.bestMatch[i].title;
    if (desc) desc.textContent = t.bestMatch[i].desc;
  });
}

document.addEventListener('DOMContentLoaded', () => {
  if (typeof lucide !== 'undefined') lucide.createIcons();

  const currentLang = getCurrentLanguage();
  updateLanguageUI(currentLang);
  updateContent(currentLang);

  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => setLanguage(btn.dataset.lang));
  });

  // subtle parallax on the background grid
  document.addEventListener('mousemove', (e) => {
    const grid = document.querySelector('.bg-grid');
    if (!grid) return;
    const x = (e.clientX / window.innerWidth - 0.5) * 14;
    const y = (e.clientY / window.innerHeight - 0.5) * 14;
    grid.style.transform = `translate(${x}px, ${y}px)`;
  });

  // occasional name glitch on home
  const name = document.querySelector('.name');
  if (name && document.body.dataset.page === 'home') {
    setInterval(() => {
      name.classList.add('glitch');
      setTimeout(() => name.classList.remove('glitch'), 250);
    }, 7000);
  }

  // active nav link by filename
  const page = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link').forEach(link => {
    const href = link.getAttribute('href');
    if (href === page || (page === '' && href === 'index.html')) link.classList.add('active');
  });
});
