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
  img.classList.add(
    "img-logo",
    "h-full",
    "mix-blend-luminosity",
    "transition",
    "object-contain",
  );

  // Ajouter l'effet tactile
  div.addEventListener("touchstart", () => {
    // Réinitialiser tous les logos à l'état noir/blanc
    document.querySelectorAll(".img-logo").forEach((otherLogo) => {
      otherLogo.classList.add("mix-blend-luminosity");
    });

    // Activer la couleur uniquement sur le logo touché
    img.classList.remove("mix-blend-luminosity");
  });

  div.appendChild(img);
  container.appendChild(div);
});

// Mode jour / nuit

const body = document.getElementById("body");
const moon = document.getElementById("moon");
const sun = document.getElementById("sun");
const header = document.getElementById("header");
const contactButtons = document.querySelectorAll(".contact-button");
const spanContactButtons = document.querySelectorAll(".contact-button span");

moon.addEventListener("click", () => {
  body.classList.remove("bg-darkblack-50");
  body.classList.add("bg-darkwhite-50");
  body.classList.remove("text-darkwhite-50");
  body.classList.add("text-darckblack-50");
  header.classList.remove("bg-darkblack-50");
  header.classList.add("bg-darkwhite-50");
  moon.classList.toggle("hidden");
  sun.classList.toggle("hidden");
  contactButtons.forEach((button) => {
    button.classList.add("bg-darkwhite-50");
    button.classList.remove("bg-darkblack-50");
    button.classList.add("text-darkblack-50");
    button.classList.remove("text-darkwhite-50");
  });
  spanContactButtons.forEach((span) => {
    span.classList.remove("xl:text-darkblack-50");
    span.classList.add("xl:text-darkwhite-50");
  });
});

sun.addEventListener("click", () => {
  body.classList.add("bg-darkblack-50");
  body.classList.remove("bg-darkwhite-50");
  body.classList.remove("text-darckblack-50");
  body.classList.add("text-darkwhite-50");
  header.classList.remove("bg-darkwhite-50");
  header.classList.add("bg-darkblack-50");
  moon.classList.toggle("hidden");
  sun.classList.toggle("hidden");
  contactButtons.forEach((button) => {
    button.classList.remove("bg-darkwhite-50");
    button.classList.add("bg-darkblack-50");
    button.classList.remove("text-darkblack-50");
    button.classList.add("text-darkwhite-50");
  });
  spanContactButtons.forEach((span) => {
    span.classList.add("xl:text-darkblack-50");
    span.classList.remove("xl:text-darkwhite-50");
  });
});
