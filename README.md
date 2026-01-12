# 🚀 Візитівка FixerHack - Portfolio Site

Сучасний одностороковий сайт-візитівка з анімаціями та інтерактивними елементами.

## ✨ Особливості

- 🎨 Унікальний дизайн з темною темою
- ✨ Плавні анімації та ефекти паралаксу
- 📱 Адаптивний дизайн (працює на всіх пристроях)
- ⚡ Швидке завантаження (одна HTML сторінка)
- 🎯 Готовий до деплою на GitHub Pages

## 🛠️ Що включено

- `index.html` - головна сторінка сайту (HTML версія)
- `portfolio-card.jsx` - React компонент (для інтеграції в React проекти)
- `README.md` - ця інструкція

## 📦 Швидкий старт для GitHub Pages

### Крок 1: Створи репозиторій

1. Перейди на https://github.com/new
2. Назви репозиторій: `username.github.io` (замість `username` вкажи своє ім'я користувача)
   - Наприклад: `fixerhack.github.io`
3. Зроби репозиторій публічним (Public)
4. Натисни "Create repository"

### Крок 2: Завантаж файли

```bash
# Клонуй репозиторій
git clone https://github.com/username/username.github.io.git
cd username.github.io

# Скопіюй index.html в корінь репозиторія
# (або створи файл та вставте код)

# Додай файли до Git
git add .
git commit -m "Initial commit: Portfolio site"
git push origin main
```

### Крок 3: Активуй GitHub Pages

1. Перейди в Settings репозиторія
2. Знайди розділ "Pages" в лівому меню
3. В "Source" вибери "main" branch
4. Натисни "Save"
5. Через 1-2 хвилини сайт буде доступний за адресою: `https://username.github.io`

## 🎨 Кастомізація

### Зміна особистих даних

Відкрий `index.html` та знайди наступні рядки:

```html
<!-- Ім'я -->
<h1 class="name" id="mainName">FixerHack</h1>

<!-- Підзаголовок -->
<p class="subtitle">
  Freelance Developer & Tech Innovator
</p>

<!-- Опис -->
<span class="description-text">
  Створюю телеграм-боти, веб-додатки та автоматізацію.
  Спеціалізуюся на безпеці, інтеграціях та нестандартних рішеннях.
</span>
```

### Зміна навичок (Tech Stack)

Знайди секцію з навичками:

```html
<div class="skills-grid">
  <span class="skill-tag">React</span>
  <span class="skill-tag">Node.js</span>
  <!-- Додай свої навички тут -->
</div>
```

### Зміна контактів

```html
<!-- GitHub -->
<a href="https://github.com/fixerhack" target="_blank" ...>

<!-- Email -->
<a href="mailto:your.email@example.com" ...>
```

### Зміна кольорів

В `<style>` секції знайди:

```css
/* Основні кольори */
background: linear-gradient(135deg, #0a0e27 0%, #1a1f3a 50%, #0f1419 100%);

/* Акцентні кольори */
#ffd700  /* Золотий */
#3a86ff  /* Синій */
#00ff7f  /* Зелений (статус) */
```

## 🔧 Додаткові налаштування

### Додавання favicon

1. Створи іконку (16x16, 32x32 або 64x64 пікселів)
2. Збережи як `favicon.ico`
3. Помісти в корінь репозиторія
4. Додай в `<head>`:

```html
<link rel="icon" type="image/x-icon" href="/favicon.ico">
```

### Додавання Google Analytics

```html
<!-- Перед </head> -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### Додавання Open Graph мета-тегів

```html
<meta property="og:title" content="FixerHack - Freelance Developer">
<meta property="og:description" content="Створюю телеграм-боти та веб-додатки">
<meta property="og:image" content="https://username.github.io/preview.png">
<meta property="og:url" content="https://username.github.io">
```

## 📱 Використання React компонента

Якщо хочеш використати версію на React:

```bash
# Встанови залежності
npm install lucide-react

# Імпортуй компонент
import PortfolioCard from './portfolio-card';

function App() {
  return <PortfolioCard />;
}
```

## 🎯 Додаткові секції

### Додати розділ "Проекти"

```html
<div class="projects" style="margin-bottom: 48px;">
  <h2 class="section-title">
    <i data-lucide="briefcase" width="16" height="16" style="color: #ffd700;"></i>
    Проекти
  </h2>
  <div style="display: grid; gap: 20px;">
    <div class="project-card" style="
      padding: 20px;
      background: rgba(58, 134, 255, 0.05);
      border: 1px solid rgba(58, 134, 255, 0.2);
      border-radius: 12px;
    ">
      <h3 style="color: #ffd700; margin-bottom: 10px;">Назва проекту</h3>
      <p style="color: #b8c5db; margin-bottom: 15px;">Опис проекту</p>
      <a href="#" style="color: #3a86ff;">Переглянути →</a>
    </div>
  </div>
</div>
```

### Додати соціальні мережі

```html
<!-- Telegram -->
<a href="https://t.me/username" class="contact-btn contact-btn-telegram">
  <i data-lucide="send" width="20" height="20"></i>
  Telegram
</a>

<!-- LinkedIn -->
<a href="https://linkedin.com/in/username" class="contact-btn">
  <i data-lucide="linkedin" width="20" height="20"></i>
  LinkedIn
</a>
```

І додай стилі:

```css
.contact-btn-telegram {
  background: rgba(0, 136, 204, 0.1);
  border: 2px solid rgba(0, 136, 204, 0.3);
  color: #0088cc;
}

.contact-btn-telegram:hover {
  background: rgba(0, 136, 204, 0.2);
  transform: translateY(-3px);
  box-shadow: 0 10px 30px rgba(0, 136, 204, 0.3);
}
```

## 🐛 Troubleshooting

### Сайт не відображається

1. Перевір що файл називається `index.html` (не Index.html)
2. Перевір що GitHub Pages активовано в Settings
3. Почекай 5-10 хвилин після першого push
4. Очисти кеш браузера (Ctrl+Shift+R)

### Анімації не працюють

1. Перевір що браузер підтримує CSS animations
2. Відкрий Developer Console (F12) та подивись на помилки
3. Перевір що Lucide Icons завантажились

### Іконки не відображаються

Перевір що цей рядок є в HTML перед `</body>`:

```html
<script>
  lucide.createIcons();
</script>
```

## 📚 Корисні посилання

- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [Lucide Icons](https://lucide.dev/icons/)
- [CSS Animations](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Animations)
- [Tailwind Colors](https://tailwindcss.com/docs/customizing-colors)

## 💡 Поради

1. **Оптимізація завантаження**: Всі стилі в одному файлі = швидке завантаження
2. **SEO**: Додай мета-теги для кращої індексації
3. **Accessibility**: Всі кнопки та лінки мають правильні ARIA атрибути
4. **Performance**: Анімації використовують CSS, не JavaScript
5. **Mobile-first**: Дизайн адаптується під всі екрани

## 🎨 Альтернативні теми

### Світла тема

Заміни кольори фону:

```css
body {
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  color: #2d3748;
}
```

### Мінімалістична

Вимкни glow-orbs та зменш анімації:

```css
.glow-orb-1, .glow-orb-2 {
  display: none;
}
```

## 📄 Ліцензія

Використовуй вільно для своїх проектів!

---

**Створено з ❤️ для FixerHack**

Якщо виникнуть питання - пиши!
