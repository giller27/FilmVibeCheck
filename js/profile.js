// ============================================
// PROFILE PAGE
// ============================================
function init() {
  const watched = state.userProfile.watched;
  const wishlist = state.userProfile.wishlist;

  document.getElementById("watchedCount").textContent = watched.length;
  document.getElementById("wishlistCount").textContent = wishlist.length;

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

  const watchedContainer = document.getElementById("watchedMovies");
  const watchedMovies = watched
    .map((id) => moviesDatabase.find((m) => m.id === id))
    .filter((m) => m);
  watchedContainer.innerHTML =
    watchedMovies.length === 0
      ? '<p style="color: var(--text-muted); grid-column: 1/-1;">Ви ще не переглянули жодного фільму</p>'
      : watchedMovies.map((movie) => createMovieCard(movie)).join("");
  attachMovieCardListeners(watchedContainer);

  const wishlistContainer = document.getElementById("wishlistMovies");
  const wishlistMovies = wishlist
    .map((id) => moviesDatabase.find((m) => m.id === id))
    .filter((m) => m);
  wishlistContainer.innerHTML =
    wishlistMovies.length === 0
      ? '<p style="color: var(--text-muted); grid-column: 1/-1;">Ви ще не додали фільмів до списку</p>'
      : wishlistMovies.map((movie) => createMovieCard(movie)).join("");
  attachMovieCardListeners(wishlistContainer);

  renderPreferences();
}

function renderPreferences() {
  const container = document.getElementById("preferences");

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
        <div class="preference-label">Напруга</div>
        <div class="preference-value">${avgTension}/10</div>
    </div>
    <div class="preference-item">
        <div class="preference-label">Темп</div>
        <div class="preference-value">${avgPace}/10</div>
    </div>
    <div class="preference-item">
        <div class="preference-label">Складність</div>
        <div class="preference-value">${avgComplexity}/10</div>
    </div>
    <div class="preference-item">
        <div class="preference-label">Улюблений жанр</div>
        <div class="preference-value">${favoriteGenre[0]}</div>
    </div>
  `;
}
