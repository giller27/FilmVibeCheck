// ============================================
// COMPARE PAGE
// ============================================
function init() {
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

  ctx.strokeStyle = "rgba(99, 102, 241, 0.3)";
  for (let i = 0; i < 4; i++) {
    const angle = (i * 2 * Math.PI) / 4 - Math.PI / 2;
    const x = centerX + radius * Math.cos(angle);
    const y = centerY + radius * Math.sin(angle);
    ctx.beginPath();
    ctx.moveTo(centerX, centerY);
    ctx.lineTo(x, y);
    ctx.stroke();

    const labelX = centerX + (radius + 30) * Math.cos(angle);
    const labelY = centerY + (radius + 30) * Math.sin(angle);
    ctx.fillStyle = "var(--text-secondary)";
    ctx.font = "bold 12px Arial";
    ctx.textAlign = "center";
    ctx.fillText(labels[i], labelX, labelY);
  }

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
