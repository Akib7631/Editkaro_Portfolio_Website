// Portfolio projects (replace with real YouTube IDs)
const projects = [
  { title: "Short-form Reel", category: "short", youtubeId: "dQw4w9WgXcQ" },
  { title: "Long-form Podcast", category: "long", youtubeId: "5NV6Rdv1a3I" },
  { title: "Gaming Montage", category: "gaming", youtubeId: "C0DPdy98e4c" },
  { title: "Football Edit", category: "football", youtubeId: "ktvTqknDobU" },
  { title: "Ecommerce Ad", category: "ads", youtubeId: "uelHwf8o7_U" },
  { title: "Anime Edit", category: "anime", youtubeId: "Zi_XLOBDo_Y" },
  { title: "Documentary Style", category: "documentary", youtubeId: "kJQP7kiw5Fk" },
  { title: "Color Grading Reel", category: "color", youtubeId: "3JZ_D3ELwOQ" }
];

const grid = document.getElementById("portfolio-grid");
const buttons = document.querySelectorAll(".filter-btn");

function renderProjects(category) {
  grid.innerHTML = "";
  const filtered = category === "all" ? projects : projects.filter(p => p.category === category);

  filtered.forEach(proj => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
      <img src="https://img.youtube.com/vi/${proj.youtubeId}/mqdefault.jpg" alt="${proj.title}">
      <h3>${proj.title}</h3>
    `;
    card.addEventListener("click", () => {
      window.open(`https://www.youtube.com/watch?v=${proj.youtubeId}`, "_blank");
    });
    grid.appendChild(card);
  });
}

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    buttons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    renderProjects(btn.dataset.category);
  });
});

// Initial render
renderProjects("all");
