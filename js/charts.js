// ============================================
// CHARTS PAGE
// ============================================
function init() {
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
