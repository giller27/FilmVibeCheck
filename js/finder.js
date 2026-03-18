// ============================================
// VIBE FINDER PAGE
// ============================================
function init() {
  setupSliders();
  setupMoodButtons();
  applyFinderListeners();

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
      '<div style="grid-column: 1/-1; text-align: center; padding: 2rem; color: var(--text-muted);">😔 На жаль, фільмів не знайдено\nСпробуйте змінити параметри</div>';
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
