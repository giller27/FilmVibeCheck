// ============================================
// АРХІВНА ВЕРСІЯ - ФАЙЛЬ ОНОВЛЕНО!
// ============================================
// Структура проекту була реорганізована для кращої зручності редагування.
// Кожна сторінка тепер знаходиться у окремому файлі.
//
// НОВА СТРУКТУРА:
// ├── index.html                    (Головна сторінка з навігацією)
// ├── pages/                         (HTML файли сторінок)
// │   ├── feed.html                (Головна)
// │   ├── finder.html              (Вайб Пошук)
// │   ├── vault.html               (Бібліотека)
// │   ├── compare.html             (Порівняння)
// │   ├── charts.html              (Топ-листи)
// │   └── profile.html             (Профіль)
// ├── js/                           (JavaScript модулі)
// │   ├── shared.js                (Спільні функції, база даних, навігація)
// │   ├── feed.js                  (Логіка сторінки Головна)
// │   ├── finder.js                (Логіка сторінки Вайб Пошук)
// │   ├── vault.js                 (Логіка сторінки Бібліотека)
// │   ├── compare.js               (Логіка сторінки Порівняння)
// │   ├── charts.js                (Логіка сторінки Топ-листи)
// │   └── profile.js               (Логіка сторінки Профіль)
// ├── styles.css                    (Глобальні стилі)
// └── script.js                     (ЦЕЙ ФАЙЛ - не використовується)
//
// ЯК ПРАЦЮЄ:
// 1. index.html завантажується з навігацією та модальним вікном
// 2. При натиску на кнопку навігації функція navigateTo() виконується
// 3. Сторінка HTML завантажується динамічно з папки pages/
// 4. Відповідний JavaScript файл також завантажується динамічно
// 5. Функція init() з JavaScript файлу виконується для ініціалізації сторінки
//
// ПЕРЕВАГИ:
// ✓ Кожну сторінку можна редагувати окремо
// ✓ Легше навігувати та знаходити потрібний код
// ✓ Модульна структура автоматичного завантаження сторінок
// ✓ Простіше додавати нові сторінки у майбутньому
//
// ДОБАВЛЕННЯ НОВОЇ СТОРІНКИ:
// 1. Створите HTML файл у pages/ (наприклад pages/new-page.html)
// 2. Створите JavaScript файл у js/ (наприклад js/new-page.js)
// 3. У HTML сторінці розташуйте розмітку для сторінки
// 4. У JS файлі напишіть функцію init() для ініціалізації
// 5. Додайте посилання у навігацію в index.html (data-page="new-page")
//
// Оновлено 2026-03-06

console.log("VibeCheck: Структура успішно оновлена. Скрипти завантажуються динамічно.");


// ВНИМАНИЕ: Весь старый код был перемещен в файлы в папке js/
// Дивіться README для деталей переходу на нову структуру
  {
    id: 3,
    title: "До встречи в кино",
    genre: "comedy",
    year: 2022,
    emoji: "😂",
    description: "Безпарна комедія про кінолюбів та їх пригоди.",
    tension: 2,
    pace: 5,
    complexity: 3,
    ending: 7,
    mood: "laugh",
  },
  {
    id: 4,
    title: "Повернення",
    genre: "drama",
    year: 2023,
    emoji: "🏠",
    description: "Трогательна історія про родину та прощення.",
    tension: 4,
    pace: 4,
    complexity: 6,
    ending: 9,
    mood: "inspire",
  },
  {
    id: 5,
    title: "Темна сторона",
    genre: "horror",
    year: 2024,
    emoji: "👻",
    description: "Психологічна жаска, яка тримає в напрузі до кінця.",
    tension: 9,
    pace: 8,
    complexity: 7,
    ending: 8,
    mood: "horror",
  },
  {
    id: 6,
    title: "Крах",
    genre: "action",
    year: 2023,
    emoji: "💥",
    description: "Напружена пригода з невичерпним адреналіном.",
    tension: 9,
    pace: 9,
    complexity: 5,
    ending: 7,
    mood: "action",
  },
  {
    id: 7,
    title: "Під одним небом",
    genre: "romance",
    year: 2022,
    emoji: "💕",
    description: "Ніжна романтична історія про долю та любов.",
    tension: 3,
    pace: 5,
    complexity: 4,
    ending: 8,
    mood: "romance",
  },
  {
    id: 8,
    title: "Затерянные миры",
    genre: "fantasy",
    year: 2024,
    emoji: "🐉",
    description: "Фентезійна епопея з дивовижним світобудуванням.",
    tension: 6,
    pace: 7,
    complexity: 8,
    ending: 9,
    mood: "fantasy",
  },
  {
    id: 9,
    title: "Следствие",
    genre: "mystery",
    year: 2023,
    emoji: "🔍",
    description: "Захоплюючий детектив зі багатьма поворотами.",
    tension: 7,
    pace: 8,
    complexity: 9,
    ending: 8,
    mood: "mystery",
  },
  {
    id: 10,
    title: "На грани",
    genre: "drama",
    year: 2024,
    emoji: "😢",
    description: "Емоційна драма про межі людських можливостей.",
    tension: 7,
    pace: 5,
    complexity: 8,
    ending: 10,
    mood: "cry",
  },
  {
    id: 11,
    title: "Синій горизонт",
    genre: "scifi",
    year: 2023,
    emoji: "🚀",
    description: "Вражаючий sci-fi про поиски позаземного життя.",
    tension: 5,
    pace: 6,
    complexity: 7,
    ending: 8,
    mood: "inspire",
  },
  {
    id: 12,
    title: "Сміх крізь сльози",
    genre: "comedy",
    year: 2024,
    emoji: "🎪",
    description: "Смішна, але водночас прискорбна історія.",
    tension: 4,
    pace: 6,
    complexity: 5,
    ending: 8,
    mood: "cry",
  },
];

const thematicCollections = [
  {
    name: "🤔 Для роздумів",
    description: "Фільми, які примушують замислитися",
    count: 5,
  },
  {
    name: "✨ Найкращий візуал",
    description: "Кіно з вражаючою кінематографією",
    count: 8,
  },
  {
    name: "🌙 Для спокійного вечора",
    description: "Релаксуючі стрічки",
    count: 6,
  },
  { name: "⚡ Для адреналіну", description: "Динамічні екшни", count: 7 },
  {
    name: "💔 Для душевних переживань",
    description: "Емоційні драми",
    count: 5,
  },
];

// ============================================
// STATE MANAGEMENT
// ============================================
const state = {
  currentPage: "feed",
  currentMovie: null,
  ratings: {},
  userProfile: {
    watched: [],
    wishlist: [],
    ratings: {},
  },
  selectedMood: null,
  filterValues: {
    tension: 5,
    pace: 5,
    complexity: 5,
    mood: null,
  },
};

// Load from localStorage
function loadState() {
  const saved = localStorage.getItem("vibecheckState");
  if (saved) {
    const parsed = JSON.parse(saved);
    state.userProfile = parsed.userProfile || state.userProfile;
    state.ratings = parsed.ratings || state.ratings;
  }
}

// Save to localStorage
function saveState() {
  localStorage.setItem(
    "vibecheckState",
    JSON.stringify({
      userProfile: state.userProfile,
      ratings: state.ratings,
    }),
  );
}

// ============================================
// PAGE NAVIGATION
// ============================================
function initNavigation() {
  document.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const page = link.getAttribute("data-page");
      navigateTo(page);
    });
  });
}

function navigateTo(pageId) {
  state.currentPage = pageId;

  // Hide all pages
  document.querySelectorAll(".page").forEach((page) => {
    page.classList.remove("active");
  });

  // Show selected page
  document.getElementById(pageId).classList.add("active");

  // Update nav active state
  document.querySelectorAll(".nav-link").forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("data-page") === pageId) {
      link.classList.add("active");
    }
  });

  // Render page content
  renderPage(pageId);
}

function renderPage(pageId) {
  switch (pageId) {
    case "feed":
      renderFeed();
      break;
    case "finder":
      renderFinder();
      break;
    case "vault":
      renderVault();
      break;
    case "compare":
      renderCompare();
      break;
    case "charts":
      renderCharts();
      break;
    case "profile":
      renderProfile();
      break;
  }
}

// ============================================
// FEED PAGE
// ============================================
function renderFeed() {
  renderTrendingMovies();
  renderTopVibeMovies();

  document.querySelectorAll(".quick-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const mood = btn.getAttribute("data-mood");
      state.selectedMood = mood;
      navigateTo("finder");
    });
  });
}

function renderTrendingMovies() {
  const sorted = [...moviesDatabase]
    .sort(() => Math.random() - 0.5)
    .slice(0, 6);
  const container = document.getElementById("trendingMovies");
  container.innerHTML = sorted.map((movie) => createMovieCard(movie)).join("");
  attachMovieCardListeners(container);
}

function renderTopVibeMovies() {
  const sorted = [...moviesDatabase]
    .sort((a, b) => {
      const avgA = (a.tension + a.pace + a.complexity + a.ending) / 4;
      const avgB = (b.tension + b.pace + b.complexity + b.ending) / 4;
      return avgB - avgA;
    })
    .slice(0, 6);
  const container = document.getElementById("topVibeMovies");
  container.innerHTML = sorted.map((movie) => createMovieCard(movie)).join("");
  attachMovieCardListeners(container);
}

// ============================================
// VIBE FINDER PAGE
// ============================================
function renderFinder() {
  setupSliders();
  setupMoodButtons();
  applyFinderListeners();

  // If coming from quick pick, apply the mood filter
  if (state.selectedMood) {
    document
      .querySelector(`[data-mood="${state.selectedMood}"]`)
      .classList.add("active");
    state.filterValues.mood = state.selectedMood;
    performSearch();
    state.selectedMood = null;
  }
}

function setupSliders() {
  const tensionSlider = document.getElementById("tensionSlider");
  const paceSlider = document.getElementById("paceSlider");
  const complexitySlider = document.getElementById("complexitySlider");

  tensionSlider.addEventListener("input", (e) => {
    state.filterValues.tension = e.target.value;
    document.getElementById("tensionValue").textContent = e.target.value;
  });

  paceSlider.addEventListener("input", (e) => {
    state.filterValues.pace = e.target.value;
    document.getElementById("paceValue").textContent = e.target.value;
  });

  complexitySlider.addEventListener("input", (e) => {
    state.filterValues.complexity = e.target.value;
    document.getElementById("complexityValue").textContent = e.target.value;
  });

  // Set initial values
  tensionSlider.value = state.filterValues.tension;
  paceSlider.value = state.filterValues.pace;
  complexitySlider.value = state.filterValues.complexity;
  document.getElementById("tensionValue").textContent =
    state.filterValues.tension;
  document.getElementById("paceValue").textContent = state.filterValues.pace;
  document.getElementById("complexityValue").textContent =
    state.filterValues.complexity;
}

function setupMoodButtons() {
  document.querySelectorAll(".mood-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      document
        .querySelectorAll(".mood-btn")
        .forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      state.filterValues.mood = btn.getAttribute("data-mood");
    });
  });
}

function applyFinderListeners() {
  document
    .getElementById("applyFilters")
    .addEventListener("click", performSearch);
  document
    .getElementById("resetFilters")
    .addEventListener("click", resetFilters);
}

function performSearch() {
  const tension = parseInt(state.filterValues.tension);
  const pace = parseInt(state.filterValues.pace);
  const complexity = parseInt(state.filterValues.complexity);
  const mood = state.filterValues.mood;

  const results = moviesDatabase.filter((movie) => {
    const tensionMatch = Math.abs(movie.tension - tension) <= 2;
    const paceMatch = Math.abs(movie.pace - pace) <= 2;
    const complexityMatch = Math.abs(movie.complexity - complexity) <= 2;
    const moodMatch = !mood || movie.mood === mood;

    return tensionMatch && paceMatch && complexityMatch && moodMatch;
  });

  const container = document.getElementById("finderResults");
  if (results.length === 0) {
    container.innerHTML =
      '<div style="grid-column: 1/-1; text-align: center; padding: 2rem; color: var(--text-muted);">😔 На жаль, фільмів не знайденоТоварищи спробуйте змінити параметри</div>';
  } else {
    container.innerHTML = results
      .map((movie) => createMovieCard(movie))
      .join("");
  }

  attachMovieCardListeners(container);
}

function resetFilters() {
  state.filterValues = {
    tension: 5,
    pace: 5,
    complexity: 5,
    mood: null,
  };

  document.getElementById("tensionSlider").value = 5;
  document.getElementById("paceSlider").value = 5;
  document.getElementById("complexitySlider").value = 5;
  document.getElementById("tensionValue").textContent = "5";
  document.getElementById("paceValue").textContent = "5";
  document.getElementById("complexityValue").textContent = "5";

  document
    .querySelectorAll(".mood-btn")
    .forEach((btn) => btn.classList.remove("active"));

  document.getElementById("finderResults").innerHTML = "";
}

// ============================================
// VAULT PAGE
// ============================================
function renderVault() {
  const container = document.getElementById("vaultMovies");
  container.innerHTML = moviesDatabase
    .map((movie) => createMovieCard(movie))
    .join("");
  attachMovieCardListeners(container);

  // Render thematic collections
  const thematicContainer = document.getElementById("thematicCollections");
  thematicContainer.innerHTML = thematicCollections
    .map(
      (collection) => `
        <div class="thematic-card" onclick="alert('${collection.name}\\n\\n${collection.description}')">
            <h4>${collection.name}</h4>
            <p>${collection.description}</p>
            <div class="collection-count">${collection.count} фільмів</div>
        </div>
    `,
    )
    .join("");

  // Filter functionality
  document.querySelectorAll(".vault-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      document
        .querySelectorAll(".vault-btn")
        .forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      const filter = btn.getAttribute("data-filter");
      filterVaultMovies(filter);
    });
  });
}

function filterVaultMovies(genre) {
  const container = document.getElementById("vaultMovies");
  const filtered =
    genre === "all"
      ? moviesDatabase
      : moviesDatabase.filter((m) => m.genre === genre);
  container.innerHTML = filtered
    .map((movie) => createMovieCard(movie))
    .join("");
  attachMovieCardListeners(container);
}

// ============================================
// COMPARE PAGE
// ============================================
function renderCompare() {
  const select1 = document.getElementById("movie1Select");
  const select2 = document.getElementById("movie2Select");

  const options = moviesDatabase
    .map((m) => `<option value="${m.id}">${m.emoji} ${m.title}</option>`)
    .join("");

  select1.innerHTML = '<option value="">Виберіть фільм...</option>' + options;
  select2.innerHTML = '<option value="">Виберіть фільм...</option>' + options;

  select1.addEventListener("change", updateRadar);
  select2.addEventListener("change", updateRadar);
}

function updateRadar() {
  const movie1Id = document.getElementById("movie1Select").value;
  const movie2Id = document.getElementById("movie2Select").value;

  if (!movie1Id || !movie2Id) {
    document.getElementById("radarContainer").innerHTML =
      '<p style="color: var(--text-muted);">Виберіть два фільми для порівняння</p>';
    return;
  }

  const movie1 = moviesDatabase.find((m) => m.id === parseInt(movie1Id));
  const movie2 = moviesDatabase.find((m) => m.id === parseInt(movie2Id));

  drawRadarChart(movie1, movie2);
}

function drawRadarChart(movie1, movie2) {
  const container = document.getElementById("radarContainer");
  const canvas = document.createElement("canvas");
  canvas.className = "radar-chart";
  canvas.width = 400;
  canvas.height = 400;

  const ctx = canvas.getContext("2d");
  const centerX = canvas.width / 2;
  const centerY = canvas.height / 2;
  const radius = 100;
  const labels = ["Напруга", "Темп", "Складність", "Фінал"];
  const data1 = [movie1.tension, movie1.pace, movie1.complexity, movie1.ending];
  const data2 = [movie2.tension, movie2.pace, movie2.complexity, movie2.ending];

  // Draw grid
  ctx.strokeStyle = "rgba(99, 102, 241, 0.2)";
  ctx.lineWidth = 1;
  for (let i = 1; i <= 5; i++) {
    const r = (radius / 5) * i;
    ctx.beginPath();
    for (let j = 0; j < 4; j++) {
      const angle = (j * 2 * Math.PI) / 4 - Math.PI / 2;
      const x = centerX + r * Math.cos(angle);
      const y = centerY + r * Math.sin(angle);
      if (j === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }
    ctx.closePath();
    ctx.stroke();
  }

  // Draw axes
  ctx.strokeStyle = "rgba(99, 102, 241, 0.3)";
  for (let i = 0; i < 4; i++) {
    const angle = (i * 2 * Math.PI) / 4 - Math.PI / 2;
    const x = centerX + radius * Math.cos(angle);
    const y = centerY + radius * Math.sin(angle);
    ctx.beginPath();
    ctx.moveTo(centerX, centerY);
    ctx.lineTo(x, y);
    ctx.stroke();

    // Draw labels
    const labelX = centerX + (radius + 30) * Math.cos(angle);
    const labelY = centerY + (radius + 30) * Math.sin(angle);
    ctx.fillStyle = "var(--text-secondary)";
    ctx.font = "bold 12px Arial";
    ctx.textAlign = "center";
    ctx.fillText(labels[i], labelX, labelY);
  }

  // Draw polygon for movie1
  ctx.strokeStyle = "rgba(99, 102, 241, 1)";
  ctx.lineWidth = 2;
  ctx.globalAlpha = 0.7;
  ctx.beginPath();
  for (let i = 0; i < 4; i++) {
    const angle = (i * 2 * Math.PI) / 4 - Math.PI / 2;
    const r = (radius / 10) * data1[i];
    const x = centerX + r * Math.cos(angle);
    const y = centerY + r * Math.sin(angle);
    if (i === 0) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
  }
  ctx.closePath();
  ctx.fillStyle = "rgba(99, 102, 241, 0.3)";
  ctx.fill();
  ctx.stroke();

  // Draw polygon for movie2
  ctx.strokeStyle = "rgba(236, 72, 153, 1)";
  ctx.globalAlpha = 0.7;
  ctx.beginPath();
  for (let i = 0; i < 4; i++) {
    const angle = (i * 2 * Math.PI) / 4 - Math.PI / 2;
    const r = (radius / 10) * data2[i];
    const x = centerX + r * Math.cos(angle);
    const y = centerY + r * Math.sin(angle);
    if (i === 0) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
  }
  ctx.closePath();
  ctx.fillStyle = "rgba(236, 72, 153, 0.3)";
  ctx.fill();
  ctx.stroke();

  ctx.globalAlpha = 1;

  // Legend
  const legendHTML = `
        <div style="margin-top: 2rem; text-align: center;">
            <div style="display: inline-block;">
                <div style="display: flex; gap: 1rem; margin-bottom: 1rem;">
                    <div>
                        <div style="width: 20px; height: 20px; background: rgba(99, 102, 241, 0.7); border-radius: 3px;"></div>
                        <p style="font-size: 0.9rem; margin-top: 0.5rem;">${movie1.emoji} ${movie1.title}</p>
                    </div>
                    <div>
                        <div style="width: 20px; height: 20px; background: rgba(236, 72, 153, 0.7); border-radius: 3px;"></div>
                        <p style="font-size: 0.9rem; margin-top: 0.5rem;">${movie2.emoji} ${movie2.title}</p>
                    </div>
                </div>
            </div>
        </div>
    `;

  container.innerHTML = "";
  container.appendChild(canvas);
  container.insertAdjacentHTML("afterend", legendHTML);
}

// ============================================
// CHARTS PAGE
// ============================================
function renderCharts() {
  const sorted1 = [...moviesDatabase]
    .sort((a, b) => b.ending - a.ending)
    .slice(0, 5);
  const sorted2 = [...moviesDatabase]
    .sort(
      (a, b) =>
        (b.tension + b.pace + b.complexity) / 3 -
        (a.tension + a.pace + a.complexity) / 3,
    )
    .slice(0, 5);
  const sorted3 = [...moviesDatabase]
    .sort(() => Math.random() - 0.5)
    .slice(0, 5);
  const sorted4 = [...moviesDatabase]
    .filter((m) => m.mood === "cry")
    .sort((a, b) => b.ending - a.ending)
    .slice(0, 5);

  renderChartList("bestEndings", sorted1);
  renderChartList("atmosphericMovies", sorted2);
  renderChartList("underratedMovies", sorted3);
  renderChartList("dramaticMovies", sorted4.length > 0 ? sorted4 : sorted1);
}

function renderChartList(containerId, movies) {
  const container = document.getElementById(containerId);
  container.innerHTML = movies
    .map((movie, index) => {
      const avg = (
        (movie.tension + movie.pace + movie.complexity + movie.ending) /
        4
      ).toFixed(1);
      return `
            <div class="chart-item" onclick="openMovieModal(${movie.id})">
                <div class="chart-rank">#${index + 1}</div>
                <div class="chart-movie">
                    <div class="chart-movie-title">${movie.emoji} ${movie.title}</div>
                    <div class="chart-movie-meta">${movie.genre} • ${movie.year}</div>
                </div>
                <div class="chart-score">${avg}</div>
            </div>
        `;
    })
    .join("");
}

// ============================================
// PROFILE PAGE
// ============================================
function renderProfile() {
  const watched = state.userProfile.watched;
  const wishlist = state.userProfile.wishlist;

  document.getElementById("watchedCount").textContent = watched.length;
  document.getElementById("wishlistCount").textContent = wishlist.length;

  // Calculate average rating
  let totalRating = 0;
  let ratingCount = 0;
  watched.forEach((movieId) => {
    const rating = state.userProfile.ratings[movieId];
    if (rating) {
      totalRating += rating.overall;
      ratingCount++;
    }
  });
  const avgRating =
    ratingCount > 0 ? (totalRating / ratingCount).toFixed(1) : 0;
  document.getElementById("avgRating").textContent = avgRating;

  // Render watched movies
  const watchedContainer = document.getElementById("watchedMovies");
  const watchedMovies = watched
    .map((id) => moviesDatabase.find((m) => m.id === id))
    .filter((m) => m);
  watchedContainer.innerHTML =
    watchedMovies.length === 0
      ? '<p style="color: var(--text-muted); grid-column: 1/-1;">Ви ще не переглянули жодного фільму</p>'
      : watchedMovies.map((movie) => createMovieCard(movie)).join("");
  attachMovieCardListeners(watchedContainer);

  // Render wishlist
  const wishlistContainer = document.getElementById("wishlistMovies");
  const wishlistMovies = wishlist
    .map((id) => moviesDatabase.find((m) => m.id === id))
    .filter((m) => m);
  wishlistContainer.innerHTML =
    wishlistMovies.length === 0
      ? '<p style="color: var(--text-muted); grid-column: 1/-1;">Ви ще не додали фільмів до списку</p>'
      : wishlistMovies.map((movie) => createMovieCard(movie)).join("");
  attachMovieCardListeners(wishlistContainer);

  // Render preferences
  renderPreferences();
}

function renderPreferences() {
  const container = document.getElementById("preferences");

  // Calculate average parameters across watched movies
  const watched = state.userProfile.watched;
  if (watched.length === 0) {
    container.innerHTML =
      '<p style="grid-column: 1/-1; color: var(--text-muted);">Переглядніть фільми, щоб побачити свої улюблені параметри</p>';
    return;
  }

  const watchedMovies = watched
    .map((id) => moviesDatabase.find((m) => m.id === id))
    .filter((m) => m);

  const avgTension = (
    watchedMovies.reduce((sum, m) => sum + m.tension, 0) / watchedMovies.length
  ).toFixed(1);
  const avgPace = (
    watchedMovies.reduce((sum, m) => sum + m.pace, 0) / watchedMovies.length
  ).toFixed(1);
  const avgComplexity = (
    watchedMovies.reduce((sum, m) => sum + m.complexity, 0) /
    watchedMovies.length
  ).toFixed(1);

  const genreCounts = {};
  watchedMovies.forEach((m) => {
    genreCounts[m.genre] = (genreCounts[m.genre] || 0) + 1;
  });
  const favoriteGenre = Object.entries(genreCounts).sort(
    ([, a], [, b]) => b - a,
  )[0];

  container.innerHTML = `
        <div class="preference-item">
            <div class="preference-label">❤️ Напруга</div>
            <div class="preference-value">${avgTension}/10</div>
        </div>
        <div class="preference-item">
            <div class="preference-label">⚡ Темп</div>
            <div class="preference-value">${avgPace}/10</div>
        </div>
        <div class="preference-item">
            <div class="preference-label">🧩 Складність</div>
            <div class="preference-value">${avgComplexity}/10</div>
        </div>
        <div class="preference-item">
            <div class="preference-label">🎭 Улюблений жанр</div>
            <div class="preference-value">${favoriteGenre[0]}</div>
        </div>
    `;
}

// ============================================
// MOVIE CARD & MODAL
// ============================================
function createMovieCard(movie) {
  const watched = state.userProfile.watched.includes(movie.id);
  const inWishlist = state.userProfile.wishlist.includes(movie.id);
  const userRating = state.userProfile.ratings[movie.id];
  const avg = userRating ? userRating.overall.toFixed(1) : "-";

  return `
        <div class="movie-card" onclick="openMovieModal(${movie.id})">
            <div class="movie-poster">
                ${movie.emoji}
                <div class="movie-overlay">
                    <button>👁️ Детальніше</button>
                </div>
            </div>
            <div class="movie-details">
                <div class="movie-title">${movie.title}</div>
                <div class="movie-genre">${movie.genre}</div>
                <div class="movie-year">${movie.year}</div>
                <div class="vibe-score">
                    <div class="score-badge">${avg}</div>
                </div>
            </div>
            ${watched ? '<div style="position: absolute; top: 10px; right: 10px; background: var(--success-color); padding: 5px 10px; border-radius: 5px; font-size: 12px;">✅</div>' : ""}
            ${inWishlist ? '<div style="position: absolute; top: 10px; right: 10px; background: var(--accent-color); padding: 5px 10px; border-radius: 5px; font-size: 12px;">📌</div>' : ""}
        </div>
    `;
}

function attachMovieCardListeners(container) {
  container.querySelectorAll(".movie-card").forEach((card) => {
    card.addEventListener("click", (e) => {
      const movieId = parseInt(card.getAttribute("onclick").match(/\d+/)[0]);
      openMovieModal(movieId);
    });
  });
}

function openMovieModal(movieId) {
  const movie = moviesDatabase.find((m) => m.id === movieId);
  if (!movie) return;

  state.currentMovie = movie;

  // Populate modal
  document.getElementById("modalTitle").textContent =
    `${movie.emoji} ${movie.title}`;
  document.getElementById("modalGenre").textContent = `Жанр: ${movie.genre}`;
  document.getElementById("modalYear").textContent = `Рік: ${movie.year}`;
  document.getElementById("modalPoster").textContent = movie.emoji;
  document.getElementById("modalPoster").style.fontSize = "100px";
  document.getElementById("modalDescription").textContent = movie.description;

  // Set up rating stars
  const userRating = state.userProfile.ratings[movieId];
  ["tension", "pace", "complexity", "ending"].forEach((param) => {
    const value = userRating ? userRating[param] : movie[param];
    const container = document.querySelector(
      `.stars-input[data-param="${param}"]`,
    );
    container.querySelectorAll(".star").forEach((star, index) => {
      if (index < value) {
        star.classList.add("active");
      } else {
        star.classList.remove("active");
      }
    });

    // Update labels
    document.getElementById(`modal${capitalize(param)}Value`).textContent =
      value;
  });

  updateOverallRating();

  // Update buttons
  const watched = state.userProfile.watched.includes(movieId);
  const inWishlist = state.userProfile.wishlist.includes(movieId);

  document.getElementById("markWatchedBtn").textContent = watched
    ? "✅ Вже переглянуто"
    : "✅ Як переглянуто";
  document.getElementById("markWatchedBtn").style.opacity = watched
    ? "0.5"
    : "1";

  document.getElementById("addWishlistBtn").textContent = inWishlist
    ? "📌 Уже у списку"
    : "📌 В список";
  document.getElementById("addWishlistBtn").style.opacity = inWishlist
    ? "0.5"
    : "1";

  // Show modal
  const modal = document.getElementById("movieModal");
  modal.classList.add("show");
  document.body.style.overflow = "hidden";
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function closeMovieModal() {
  document.getElementById("movieModal").classList.remove("show");
  document.body.style.overflow = "auto";
  state.currentMovie = null;
}

function updateOverallRating() {
  const tension =
    parseFloat(document.getElementById("modalTensionValue").textContent) || 0;
  const pace =
    parseFloat(document.getElementById("modalPaceValue").textContent) || 0;
  const complexity =
    parseFloat(document.getElementById("modalComplexityValue").textContent) ||
    0;
  const ending =
    parseFloat(document.getElementById("modalEndingValue").textContent) || 0;

  const overall = ((tension + pace + complexity + ending) / 4).toFixed(1);
  document.getElementById("overallRating").textContent = overall;
}

// ============================================
// MODAL INTERACTIONS
// ============================================
function setupModalListeners() {
  // Star rating
  document.querySelectorAll(".stars-input").forEach((container) => {
    const param = container.getAttribute("data-param");
    container.querySelectorAll(".star").forEach((star) => {
      star.addEventListener("click", () => {
        const value = parseInt(star.getAttribute("data-value"));
        container.querySelectorAll(".star").forEach((s, idx) => {
          if (idx < value) s.classList.add("active");
          else s.classList.remove("active");
        });
        document.getElementById(`modal${capitalize(param)}Value`).textContent =
          value;
        updateOverallRating();
      });
    });
  });

  // Mark as watched
  document.getElementById("markWatchedBtn").addEventListener("click", () => {
    if (!state.currentMovie) return;

    const movieId = state.currentMovie.id;
    const idx = state.userProfile.watched.indexOf(movieId);

    if (idx === -1) {
      state.userProfile.watched.push(movieId);
    }

    // Save rating
    saveMovieRating();

    // Update button
    const btn = document.getElementById("markWatchedBtn");
    btn.textContent = "✅ Вже переглянуто";
    btn.style.opacity = "0.5";

    saveState();
  });

  // Add to wishlist
  document.getElementById("addWishlistBtn").addEventListener("click", () => {
    if (!state.currentMovie) return;

    const movieId = state.currentMovie.id;
    const idx = state.userProfile.wishlist.indexOf(movieId);

    if (idx === -1) {
      state.userProfile.wishlist.push(movieId);
    }

    // Update button
    const btn = document.getElementById("addWishlistBtn");
    btn.textContent = "📌 Уже у списку";
    btn.style.opacity = "0.5";

    saveState();
  });

  // Close modal
  document
    .querySelector(".close-modal")
    .addEventListener("click", closeMovieModal);
  document.getElementById("movieModal").addEventListener("click", (e) => {
    if (e.target.id === "movieModal") closeMovieModal();
  });
}

function saveMovieRating() {
  if (!state.currentMovie) return;

  const movieId = state.currentMovie.id;
  const tension =
    parseInt(document.getElementById("modalTensionValue").textContent) ||
    state.currentMovie.tension;
  const pace =
    parseInt(document.getElementById("modalPaceValue").textContent) ||
    state.currentMovie.pace;
  const complexity =
    parseInt(document.getElementById("modalComplexityValue").textContent) ||
    state.currentMovie.complexity;
  const ending =
    parseInt(document.getElementById("modalEndingValue").textContent) ||
    state.currentMovie.ending;

  const overall = ((tension + pace + complexity + ending) / 4).toFixed(1);

  state.userProfile.ratings[movieId] = {
    tension,
    pace,
    complexity,
    ending,
    overall: parseFloat(overall),
  };
}

// ============================================
// INITIALIZATION
// ============================================
document.addEventListener("DOMContentLoaded", () => {
  loadState();
  initNavigation();
  setupModalListeners();
  navigateTo("feed");
});
