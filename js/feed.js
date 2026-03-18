// ============================================
// FEED PAGE
// ============================================
function init() {
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
