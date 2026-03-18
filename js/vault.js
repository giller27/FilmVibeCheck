// ============================================
// VAULT PAGE
// ============================================
function init() {
  const container = document.getElementById("vaultMovies");
  container.innerHTML = moviesDatabase
    .map((movie) => createMovieCard(movie))
    .join("");
  attachMovieCardListeners(container);

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
