// Date automatique
document.getElementById("year").textContent = new Date().getFullYear();

// Menu et modal
// Menu burger et modal

document.getElementById("burger").addEventListener("click", function () {
  document.getElementById("modal").classList.toggle("hidden");
});
document.getElementById("close-modal").addEventListener("click", function () {
  document.getElementById("modal").classList.toggle("hidden");
});

document.querySelectorAll(".modal-link").forEach((link) => {
  link.addEventListener("click", function () {
    document.getElementById("modal").classList.toggle("hidden");
  });
});

// Generation des logos

// Tableau des logos (chemins relatifs ou URL vers les images)
const logos = [
  "src/assets/images/logo/html.webp",
  "src/assets/images/logo/css.webp",
  "src/assets/images/logo/js.webp",
  "src/assets/images/logo/tailwind.webp",
  "src/assets/images/logo/react.webp",
  "src/assets/images/logo/nextjs.webp",
  "src/assets/images/logo/flutter.webp",
  "src/assets/images/logo/nodejs.webp",
  "src/assets/images/logo/express.webp",
  "src/assets/images/logo/api.webp",
  "src/assets/images/logo/postgresql.webp",
  "src/assets/images/logo/mongodb.webp",
  "src/assets/images/logo/sqitch.webp",
  "src/assets/images/logo/github.webp",
  "src/assets/images/logo/git.webp",
  "src/assets/images/logo/linux.webp",
  "src/assets/images/logo/macos.webp",
  "src/assets/images/logo/windows.webp",
  "src/assets/images/logo/agile.webp",
];

// Sélectionner le conteneur des logos
const container = document.getElementById("logo-container");

// Créer les divs pour chaque logo et les ajouter au conteneur
logos.forEach((logoPath) => {
  const div = document.createElement("div");
  div.classList.add(
    "lg:h-24",
    "h-16",
    "max-w-16",
    "lg:max-w-28",
    "hover:brightness-100",
  );

  const img = document.createElement("img");
  img.src = logoPath;
  img.alt = "Logo";
  img.classList.add("h-full", "mix-blend-luminosity", "object-contain");

  // Gérer les interactions "toucher" pour mobile

  img.addEventListener("touchstart", () => {
    img.classList.toggle("mix-blend-luminosity");
  });

  div.appendChild(img);
  container.appendChild(div);
});
