// ============================================
// DATABASE
// ============================================
const moviesDatabase = [
  {
    id: 1,
    title: "Шоуменен",
    genre: "drama",
    year: 2023,
    emoji: "",
    description:
      "Гріючий фільм про мрії та сім'ю, який змусить вас сміятися та плакати.",
    tension: 3,
    pace: 6,
    complexity: 4,
    ending: 9,
    mood: "inspire",
  },
  {
    id: 2,
    title: "Видіння",
    genre: "scifi",
    year: 2024,
    emoji: "",
    description: "Епічна космічна драма про дослідження невідомого.",
    tension: 8,
    pace: 7,
    complexity: 9,
    ending: 8,
    mood: "action",
  },
  {
    id: 3,
    title: "До встречи в кино",
    genre: "comedy",
    year: 2022,
    emoji: "",
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
    emoji: "",
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
    emoji: "",
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
    emoji: "",
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
    emoji: "",
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
    emoji: "",
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
    emoji: "",
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
    emoji: "",
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
    emoji: "",
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
    emoji: "",
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
    name: "Для роздумів",
    description: "Фільми, які примушують замислитися",
    count: 5,
  },
  {
    name: "Найкращий візуал",
    description: "Кіно з вражаючою кінематографією",
    count: 8,
  },
  {
    name: "Для спокійного вечора",
    description: "Релаксуючі стрічки",
    count: 6,
  },
  { name: "Для адреналіну", description: "Динамічні екшни", count: 7 },
  {
    name: "Для душевних переживань",
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

  // Update nav active state
  document.querySelectorAll(".nav-link").forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("data-page") === pageId) {
      link.classList.add("active");
    }
  });

  // Load page content dynamically
  loadPageContent(pageId);
}

async function loadPageContent(pageId) {
  const container = document.getElementById("main-container");
  try {
    const response = await fetch(`pages/${pageId}.html`);
    const html = await response.text();
    container.innerHTML = html;

    // Load and execute corresponding JS file
    const script = document.createElement("script");
    script.src = `js/${pageId}.js`;
    script.onload = () => {
      // Call init function if it exists
      if (typeof init === "function") {
        init();
      }
    };
    document.head.appendChild(script);
  } catch (error) {
    console.error(`Error loading page ${pageId}:`, error);
  }
}

// ============================================
// MOVIE CARD UTILITIES
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
                <button>Детальніше</button>
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

// ============================================
// MODAL MANAGEMENT
// ============================================
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

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
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
// MODAL LISTENERS
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

    saveMovieRating();

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
